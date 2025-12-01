import { css } from "@emotion/react";
import styled from "@emotion/styled";
import InputProps from "./Input.types";

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 3px;
  color: #000000;
  padding-left: 5px;
  padding-right: 5px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f0f0f0;
      cursor: not-allowed;
    `}
`;
