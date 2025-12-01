import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  color = "light",
  size = "small",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
