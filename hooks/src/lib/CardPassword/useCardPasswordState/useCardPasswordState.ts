import { useState } from "react";

interface useCardPasswordStateProps {
  validateCardPassword: (cardPassword: string) => boolean;
}

const useCardPasswordState = ({
  validateCardPassword,
}: useCardPasswordStateProps) => {
  const [cardPassword, setCardPassword] = useState("");

  const handleCardPassword = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const { value } = event.target;

    if (!validateCardPassword(value)) return;
    setCardPassword(value);
  };

  return { cardPassword, handleCardPassword };
};

export default useCardPasswordState;
