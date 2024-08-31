import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}
const InputLabel = (props: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 pb-3">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type={props.type ?? "text"}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputLabel;
