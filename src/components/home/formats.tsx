import { IUserFormats } from "@/types/user-formats";
import Format from "./format";

export type FormatsProps = {
  userFormats: IUserFormats;
  setUserFormats: React.Dispatch<React.SetStateAction<IUserFormats>>;
};

const Formats: React.FC<FormatsProps> = ({ userFormats, setUserFormats }) => {
  return (
    <div className="flex justify-center w-full items-center gap-8">
      <Format userFormats={userFormats} setUserFormats={setUserFormats} />
      <span>&rarr;</span>
      <Format
        userFormats={userFormats}
        setUserFormats={setUserFormats}
        option="to"
      />
    </div>
  );
};

export default Formats;
