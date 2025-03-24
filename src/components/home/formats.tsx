import { IUserFormats } from "@/types/user-formats";
import Format from "./format";
import SelectOptions from "@/constants/select-options";
import SelectAvailableOptionsMap from "@/constants/select-options-map";

export type FormatsProps = {
  userFormats: IUserFormats;
  setUserFormats: React.Dispatch<React.SetStateAction<IUserFormats>>;
};

const Formats: React.FC<FormatsProps> = ({ userFormats, setUserFormats }) => {
  return (
    <div className="flex justify-center w-full items-center gap-8">
      <Format
        userFormats={userFormats}
        setUserFormats={setUserFormats}
        selectOptions={SelectOptions}
      />
      <span>&rarr;</span>
      <Format
        userFormats={userFormats}
        setUserFormats={setUserFormats}
        option="to"
        selectOptions={SelectAvailableOptionsMap[userFormats.from]}
      />
    </div>
  );
};

export default Formats;
