import calculateNetwork from "./calculateNetwork";

describe("카드사 식별 (AMEX, Diners, UnionPay 포함) 로직 테스트", () => {
  it("카드 번호에 패턴이 없다면 NOTHING를 반환한다.", () => {
    expect(calculateNetwork("123456").name).toBe("NOTHING");
  });
  it("카드 번호의 앞자리가 4로 시작한다면 VISA를 반환한다.", () => {
    expect(calculateNetwork("4").name).toBe("VISA");
  });
  it("카드 번호의 앞자리가 51 ~ 55로 시작한다면 MASTER_CARD를 반환한다.", () => {
    expect(calculateNetwork("51").name).toBe("MASTER_CARD");
    expect(calculateNetwork("55").name).toBe("MASTER_CARD");
  });
  it("카드 번호의 앞자리가 34 또는 37로 시작한다면 AMEX를 반환한다.", () => {
    expect(calculateNetwork("34").name).toBe("AMEX");
    expect(calculateNetwork("37").name).toBe("AMEX");
  });
  it("카드 번호의 앞자리가 36로 시작한다면 DINERS를 반환한다.", () => {
    expect(calculateNetwork("36").name).toBe("DINERS");
  });
  it("카드 번호의 앞자리가 622126~622925로 시작한다면 유니온페이를 반환한다.", () => {
    expect(calculateNetwork("622126").name).toBe("UNION_PAY");
  });
});
