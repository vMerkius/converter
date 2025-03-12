"use client";

import { Button } from "@/components/ui/button";
import { InputFile } from "../components/ui/input-file";

import Image from "next/image";

import Formats from "@/components/home/formats";
import { useState } from "react";
import { IUserFormats } from "@/types/user-formats";
import Help from "@/components/home/help";
import Theme from "@/components/ui/theme";
import { useMutation, useQuery } from "@tanstack/react-query";
import { convertFile } from "@/server/api";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const [userFormatsChoice, setUserFormatsChoice] = useState<IUserFormats>({
    from: "png",
    to: "pdf",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: async () => {
      if (!selectedFile) {
        throw new Error("No file selected");
      }
      return await convertFile(
        selectedFile,
        userFormatsChoice.from,
        userFormatsChoice.to
      );
    },
    onSuccess: (blob) => {
      const url = URL.createObjectURL(
        new Blob([blob], { type: "application/pdf" })
      );
      setDownloadUrl(url);
    },
  });

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="absolute right-20 top-5">
        <Theme />
      </div>
      <div className="absolute right-5 top-5">
        <Help />
      </div>
      <Formats
        userFormats={userFormatsChoice}
        setUserFormats={setUserFormatsChoice}
      />
      <div>
        <InputFile handleFileChange={setSelectedFile} />
      </div>
      <Button onClick={() => mutate()} disabled={isPending || !selectedFile}>
        {isPending ? "Converting..." : "Convert"}
      </Button>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="converted.pdf"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src={
              theme === "light"
                ? "/assets/icons/icon-file-download-light.svg"
                : "/assets/icons/icon-file-download.svg"
            }
            alt="Download"
            width={35}
            height={35}
          />
          <span className="underline">Download</span>
        </a>
      )}
    </div>
  );
}
