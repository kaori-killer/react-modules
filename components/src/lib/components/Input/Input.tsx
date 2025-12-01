import { StyledInput } from "./Input.styled";
import InputProps from "./Input.types";

const Input = ({ disabled = false, name, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={name} style={{ display: "none" }}>
        {name}
      </label>
      <StyledInput disabled={disabled} id={name} name={name} {...props} />
    </>
  );
};

export default Input;
