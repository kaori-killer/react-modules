import { useState } from "react";

type CardExpireDateKey = "month" | "year";

type CardExpireDate = {
  month: string;
  year: string;
};

interface useCardExpireDateStateProps {
  validateCardExpireDate: (
    expireDate: CardExpireDate,
    key: "month" | "year"
  ) => boolean;
}

const INIT_CARD_EXPIRE_DATE = {
  month: "",
  year: "",
};

const useCardExpireDateState = ({
  validateCardExpireDate,
}: useCardExpireDateStateProps) => {
  const [expireDate, setCardExpire] = useState(INIT_CARD_EXPIRE_DATE);

  const handleCardExpire = ({
    event,
    key,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    key: CardExpireDateKey;
  }) => {
    const { value } = event.target;

    const newValue = {
      ...expireDate,
      [key]: value,
    };

    if (!validateCardExpireDate(newValue, key)) return;
    setCardExpire((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { expireDate, handleCardExpire };
};

export default useCardExpireDateState;
