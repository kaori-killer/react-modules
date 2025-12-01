import { ReactNode } from "react";

import { StyledModalBody } from "./ModalBody.styled";

interface ModalBodyProps {
  children: ReactNode;
}
const ModalBody = ({ children }: ModalBodyProps) => {
  return <StyledModalBody id="modal-description">{children}</StyledModalBody>;
};

export default ModalBody;
