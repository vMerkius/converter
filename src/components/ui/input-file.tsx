import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import Image from "next/image";

type InputFileProps = {
  handleFileChange: (file: File | null) => void;
};

export const InputFile: React.FC<InputFileProps> = ({ handleFileChange }) => {
  const { theme } = useTheme();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleFileChange(file);
  };

  return (
    <div className="grid max-w-sm items-center gap-1.5 relative">
      <Label htmlFor="picture">Drop a file or choose manually</Label>
      <div className="relative">
        <Input id="picture" type="file" onChange={onFileChange} />
        <Image
          src={`${
            theme === "light"
              ? "/assets/icons/icon-file-add-light.svg"
              : "/assets/icons/icon-file-add.svg"
          }`}
          alt="Add icon"
          width={25}
          height={25}
          className="absolute right-1.5 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};
