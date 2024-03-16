import { Input } from "./ui/input";

export const InputComponent = ({ data = "text", placeholder, onChange }) => {
  return (
    <Input required type={data} placeholder={placeholder} onChange={onChange} />
  );
};
