export const staticValidationMessages = {
  numberOnly: "숫자만 입력해주세요.",
  rangeMonth: "1~12 사이의 숫자를 입력해주세요.",
  invalidYear: "유효한 년도를 입력해주세요.",
  invalidExpire: "유효한 만료일을 입력해주세요.",
  invalidBrand: "카드 브랜드가 올바르지 않습니다.",
};

export const dynamicValidationMessages = {
  limitedLength: (len: number) => `${len}자리만 입력해주세요.`,
  limitedCardNetworkLength: (len: number) =>
    `해당 카드 네트워크는 ${len}자리만 입력할 수 있습니다.`,
};
