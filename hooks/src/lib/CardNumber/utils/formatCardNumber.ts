import CardNumbers from "../types/CardNumbers";

const formatCardNumber = (cardNumbers: CardNumbers, formatting: number[]) => {
  const cardNumber = Object.values(cardNumbers).join("");

  const formattedSections = formatting
    .map((length, index) => {
      const start = formatting
        .slice(0, index)
        .reduce((acc, val) => acc + val, 0);
      return cardNumber.slice(start, start + length);
    })
    .filter((section) => section !== "");

  return formattedSections.join("-");
};

export default formatCardNumber;
