import CardNumbersKey from "./CardNumbersKey";
import CardNumbersState from "./CardNumberState";

type ValidateCardNumbersParams = {
  key: CardNumbersKey;
  value: string;
  cardNumbers: CardNumbersState;
};

export default ValidateCardNumbersParams;
