import CardNumbersKey from "../types/CardNumbersKey";

type getCardPrefixNumberType = {
  key: CardNumbersKey;
  value: string;
  firstNumber: string;
  secondNumber: string;
};

const getCardPrefixNumber = ({
  key,
  value,
  firstNumber,
  secondNumber,
}: getCardPrefixNumberType) => {
  if (key === "first") {
    return value + secondNumber;
  }

  if (key === "second") {
    return firstNumber + value;
  }

  return firstNumber + secondNumber;
};

export default getCardPrefixNumber;
