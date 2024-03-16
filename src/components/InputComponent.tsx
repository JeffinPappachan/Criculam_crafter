import { Input } from "./ui/input";

export const InputComponent = ({ type = "text", placeholder, onChange }) => {
  return (
    <Input required type={type} placeholder={placeholder} onChange={onChange} />
  );
};
