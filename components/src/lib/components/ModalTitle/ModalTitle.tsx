import createStyledModalTitle from "./ModalTitle.styled";

import { ModalTitleProps } from "./ModalTitle.types";

const ModalTitle = ({ children, tag = "h1", ...props }: ModalTitleProps) => {
  const StyledModalTitle = createStyledModalTitle(tag);

  return (
    <StyledModalTitle id="modal-title" tag={tag} {...props}>
      {children}
    </StyledModalTitle>
  );
};

export default ModalTitle;
