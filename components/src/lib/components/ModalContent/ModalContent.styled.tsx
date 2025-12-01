import styled from "@emotion/styled";

import { ModalContentProps } from "./ModalContent.types";

const modalPositionVariants = {
  bottom: {
    left: "50%",
    bottom: "0",
    transform: "translateX(-50%)",
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    borderRadius: "8px",
  },
};

const modalSizeVariants = {
  small: {
    width: "40%",
  },
  medium: {
    width: "60%",
  },
  large: {
    width: "80%",
  },
};

export const StyledModalContent = styled.div<ModalContentProps>`
  position: fixed;
  padding: 24px 32px;
  min-height: 216px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ position }) => modalPositionVariants[position]};
  ${({ size }) => modalSizeVariants[size]}
`;
