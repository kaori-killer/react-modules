import calculateNetWork from "./calculateNetwork";
import getCardPrefixNumber from "./getCardPrefixNumber";

import ValidateCardNumbersParams from "../types/ValidateCardNumbersParams";

import { dynamicValidationMessages } from "../../../constants/validationMessages";

const checkCardNetworkValidation = ({
  key,
  value,
  cardNumbers,
}: ValidateCardNumbersParams) => {
  const cardPrefixNumber = getCardPrefixNumber({
    key,
    value,
    firstNumber: cardNumbers.numbers["first"],
    secondNumber: cardNumbers.numbers["second"],
  });
  const network = calculateNetWork(cardPrefixNumber);

  if (cardPrefixNumber.length < 6) {
    return { isValid: true, errorMessage: null };
  }

  const newCardNumbersNumbers = { ...cardNumbers.numbers, [key]: value };
  const totalLength = Object.values(newCardNumbersNumbers).join("").length;

  if (totalLength > network.length) {
    return {
      isValid: false,
      errorMessage: dynamicValidationMessages.limitedCardNetworkLength(
        network.length
      ),
    };
  }

  return { isValid: true, errorMessage: null };
};

export default checkCardNetworkValidation;
