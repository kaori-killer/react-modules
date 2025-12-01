import { StyledModalCloseButton } from "./ModalCloseButton.styled";

import { ModalCloseButtonProps } from "./ModalCloseButton.types";

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <StyledModalCloseButton type="button" aria-label="닫기" onClick={onClose}>
      X
    </StyledModalCloseButton>
  );
};

export default ModalCloseButton;
