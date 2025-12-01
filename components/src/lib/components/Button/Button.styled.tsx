import styled from "@emotion/styled";

import { ButtonProps } from "./Button.types";

const ButtonColorVariants = {
  light: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #cccccc",
    color: "#666666",
  },
  dark: {
    backgroundColor: "#333333",
    border: "1px solid #333333",
    color: "#FFFFFF",
  },
};

const ButtonSizeVariants = {
  small: {
    width: "80px",
  },
  medium: {
    width: "50%",
  },
  large: {
    width: "100%",
  },
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 0px;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  ${({ color }) => ButtonColorVariants[color]};
  ${({ size }) => ButtonSizeVariants[size]};
`;
