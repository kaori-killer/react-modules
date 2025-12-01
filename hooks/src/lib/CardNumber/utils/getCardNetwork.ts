import calculateNetwork from "./calculateNetwork";
import getCardPrefixNumber from "./getCardPrefixNumber";

import CardNetwork from "../types/CardNetwork";
import CardNumbersKey from "../types/CardNumbersKey";
import CardNumbers from "../types/CardNumbers";

type getCardNetworkType = {
  key: CardNumbersKey;
  value: string;
  numbers: CardNumbers;
};

const getCardNetwork = ({
  key,
  value,
  numbers,
}: getCardNetworkType): CardNetwork => {
  const cardPrefixNumber = getCardPrefixNumber({
    key,
    value,
    firstNumber: numbers["first"],
    secondNumber: numbers["second"],
  });
  return calculateNetwork(cardPrefixNumber);
};
export default getCardNetwork;
