import { StyledModalContent } from "./ModalContent.styled";

import { ModalContentProps } from "./ModalContent.types";

const ModalContent = ({
  children,
  position = "center",
  size = "medium",
  ...props
}: ModalContentProps) => {
  return (
    <StyledModalContent position={position} size={size} {...props}>
      {children}
    </StyledModalContent>
  );
};

export default ModalContent;
