import { useState } from "react";

interface useCardCVCStateProps {
  validateCardCVC: (cardCVC: string) => boolean;
}

const useCardCVCState = ({ validateCardCVC }: useCardCVCStateProps) => {
  const [cardCVC, setCardCVC] = useState("");

  const handleCardCVC = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateCardCVC(value)) return;
    setCardCVC(value);
  };

  return { cardCVC, handleCardCVC };
};

export default useCardCVCState;
