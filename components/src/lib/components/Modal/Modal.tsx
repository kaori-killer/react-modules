import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "../../hooks/useModal";

import { ModalCompoundComponent } from "./Modal.types";

import { StyledModal } from "./Modal.styled";

import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal: ModalCompoundComponent = ({ children, onClose, ...props }) => {
  return (
    <>
      <StyledModal
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...props}
      >
        <ModalOverlay {...props} onClose={onClose} />
        {children}
      </StyledModal>
    </>
  );
};

Modal.useModal = useModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Button = Button;
Modal.Input = Input;

export default Modal;
