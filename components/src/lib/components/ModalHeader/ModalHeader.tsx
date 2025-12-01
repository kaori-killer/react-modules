import { StyledModalHeader } from "./ModalHeader.styled";

import { ModalHeaderProps } from "./ModalHeader.types";

const ModalHeader = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  ...props
}: ModalHeaderProps) => {
  return (
    <StyledModalHeader
      direction={direction}
      align={align}
      justify={justify}
      {...props}
    >
      {children}
    </StyledModalHeader>
  );
};

export default ModalHeader;
