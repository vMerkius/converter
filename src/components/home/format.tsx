import SelectOptions from "@/constans/select-options";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IUserFormats } from "@/types/user-formats";

type FormatProps = {
  userFormats: IUserFormats;
  setUserFormats: React.Dispatch<React.SetStateAction<IUserFormats>>;
  option?: "from" | "to";
};

const Format: React.FC<FormatProps> = ({
  userFormats,
  setUserFormats,
  option = "from",
}) => {
  const handleChange = (value: string) => {
    setUserFormats((prev) => ({
      ...prev,
      [option]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={option}>{option === "from" ? "From" : "To"}</Label>
      <Select value={userFormats[option]} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Format" />
        </SelectTrigger>
        <SelectContent>
          {SelectOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Format;
