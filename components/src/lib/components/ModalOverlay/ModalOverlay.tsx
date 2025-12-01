import { StyledModalOverlay } from "./ModalOverlay.styled";

import { ModalOverlayProps } from "./ModalOverlay.types";

const ModalOverlay = ({ isOpen, onClose }: ModalOverlayProps) => {
  return <StyledModalOverlay aria-hidden={!isOpen} onClick={onClose} />;
};

export default ModalOverlay;
