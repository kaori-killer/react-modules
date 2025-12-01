import { useState } from "react";

import useKeyboardEffect from "./utils/useKeyboardEffect";

const useModal = (): {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useKeyboardEffect({
    key: "Escape",
    handler: handleClose,
    enabled: isOpen,
  });

  return { isOpen, handleOpen, handleClose };
};

export default useModal;
