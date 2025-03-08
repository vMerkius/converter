"use client";

import { Button } from "@/components/ui/button";
import { InputFile } from "../components/ui/input-file";

import Image from "next/image";

import Formats from "@/components/home/formats";
import { useState } from "react";
import { IUserFormats } from "@/types/user-formats";
import Help from "@/components/home/help";
import Theme from "@/components/ui/theme";

export default function Home() {
  const [userFormatsChoice, setUserFormatsChoice] = useState<IUserFormats>({
    from: "docx",
    to: "pdf",
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
        <InputFile />
      </div>
      <Button>Convert</Button>
      <Image
        src="/assets/icons/icon-file-download.svg"
        alt="Add icon"
        width={35}
        height={35}
      />
    </div>
  );
}
