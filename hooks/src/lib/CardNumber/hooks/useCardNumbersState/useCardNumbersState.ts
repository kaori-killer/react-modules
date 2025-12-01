import { useState } from "react";

import getCardNetwork from "../../utils/getCardNetwork";

import ValidateCardNumbersParams from "../../types/ValidateCardNumbersParams";
import CardNumbersState from "../../types/CardNumberState";
import CardNumbersKey from "../../types/CardNumbersKey";

type useCardNumbersStateProps = {
  validateCardNumbers: (params: ValidateCardNumbersParams) => boolean;
};

const INIT_CARD_NUMBERS_STATE: CardNumbersState = {
  numbers: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  network: {
    name: "NOTHING",
    length: 0,
    formatting: [],
  },
};

const useCardNumbersState = ({
  validateCardNumbers,
}: useCardNumbersStateProps) => {
  const [cardNumbers, setCardNumbers] = useState(INIT_CARD_NUMBERS_STATE);

  const handleCardNumber = ({
    event,
    key,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    key: CardNumbersKey;
  }) => {
    const { value } = event.target;
    const network = getCardNetwork({
      key,
      value,
      numbers: cardNumbers.numbers,
    });

    if (!validateCardNumbers({ key, value, cardNumbers })) return;

    setCardNumbers((prev) => ({
      numbers: { ...prev.numbers, [key]: value },
      network: {
        ...network,
      },
    }));
  };

  return { cardNumbers, handleCardNumber };
};

export default useCardNumbersState;
