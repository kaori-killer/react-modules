import { StyledModalFooter } from "./ModalFooter.styled";

import { ModalFooterProps } from "./ModalFooter.types";

const ModalFooter = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  ...props
}: ModalFooterProps) => {
  return (
    <StyledModalFooter
      direction={direction}
      align={align}
      justify={justify}
      {...props}
    >
      {children}
    </StyledModalFooter>
  );
};

export default ModalFooter;
