import styled from "@emotion/styled";

import { ModalFooterProps } from "./ModalFooter.types";

export const StyledModalFooter = styled.footer<ModalFooterProps>`
  display: flex;
  gap: 12px;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;
