import CardNetwork from "../types/CardNetwork";

const calculateNetwork = (value: string): CardNetwork => {
  let calculatedValue: number;

  calculatedValue = Number(value[0]);
  if (calculatedValue === 4) {
    return { name: "VISA", length: 16, formatting: [4, 4, 4, 4] };
  }

  calculatedValue = Number(value.slice(0, 2));
  if (51 <= calculatedValue && calculatedValue <= 55) {
    return { name: "MASTER_CARD", length: 16, formatting: [4, 4, 4, 4] };
  }

  if (34 === calculatedValue || calculatedValue === 37) {
    return { name: "AMEX", length: 15, formatting: [4, 6, 4, 0] };
  }

  if (36 === calculatedValue) {
    return { name: "DINERS", length: 14, formatting: [4, 6, 4, 0] };
  }

  calculatedValue = Number(value.slice(0, 6));
  if (622126 <= calculatedValue && calculatedValue < 622925)
    return { name: "UNION_PAY", length: 16, formatting: [4, 4, 4, 4] };

  return { name: "NOTHING", length: 16, formatting: [4, 4, 4, 4] };
};

export default calculateNetwork;
