import { ReactNode } from "react";
import { FC } from "react";

import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "../../hooks/useModal";

import { ModalOverlayProps } from "../ModalOverlay/ModalOverlay.types";
import Button from "../Button/Button";
import Input from "../Input/Input";

export interface ModalInternalProps extends ModalProps, ModalOverlayProps {}

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export interface ModalCompoundComponent extends FC<ModalInternalProps> {
  useModal: typeof useModal;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  CloseButton: typeof ModalCloseButton;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Button: typeof Button;
  Input: typeof Input;
}
