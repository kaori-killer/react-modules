import { useState } from "react";

interface useCardBrandStateProps {
  validateCardBrand: (cardBrand: string) => boolean;
}

const useCardBrandState = ({ validateCardBrand }: useCardBrandStateProps) => {
  const [cardBrand, setCardBrand] = useState("");

  const handleCardBrand = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const { value } = event.target;

    if (!validateCardBrand(value)) return;
    setCardBrand(value);
  };

  return { cardBrand, handleCardBrand };
};

export default useCardBrandState;
