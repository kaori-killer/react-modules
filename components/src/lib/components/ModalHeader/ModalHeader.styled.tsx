import styled from "@emotion/styled";

import { ModalHeaderProps } from "./ModalHeader.types";

export const StyledModalHeader = styled.header<ModalHeaderProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;
