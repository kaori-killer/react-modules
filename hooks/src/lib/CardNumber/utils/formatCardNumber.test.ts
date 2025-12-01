import formatCardNumber from "./formatCardNumber";

describe("카드 번호 포맷팅 기능 테스트", () => {
  it("카드 번호가 4로 시작하면 4, 4, 4, 4 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "4444",
          second: "4444",
          third: "4444",
          fourth: "4444",
        },
        [4, 4, 4, 4]
      )
    ).toBe("4444-4444-4444-4444");
  });

  it("카드 번호가 51~55로 시작하면 4, 4, 4, 4 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "5144",
          second: "4444",
          third: "4444",
          fourth: "4444",
        },
        [4, 4, 4, 4]
      )
    ).toBe("5144-4444-4444-4444");
  });

  it("카드 번호가 34 또는 37로 시작하면 4, 6, 5, 0 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "3444",
          second: "4444",
          third: "4444",
          fourth: "4444",
        },
        [4, 6, 5, 0]
      )
    ).toBe("3444-444444-44444");
  });

  it("카드 번호가 36으로 시작하면 4, 6, 4, 0 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "3644",
          second: "4444",
          third: "4444",
          fourth: "4444",
        },
        [4, 6, 4, 0]
      )
    ).toBe("3644-444444-4444");
  });
  it("카드 번호가 622126~622925로 시작하면 4, 4, 4, 4 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "6221",
          second: "2612",
          third: "3456",
          fourth: "7890",
        },
        [4, 4, 4, 4]
      )
    ).toBe("6221-2612-3456-7890");
  });
  it("카드 번호가 규칙이 없다면 4, 4, 4, 4 규칙으로 카드 번호가 포맷팅된다.", () => {
    expect(
      formatCardNumber(
        {
          first: "1111",
          second: "1111",
          third: "1111",
          fourth: "1111",
        },
        [4, 4, 4, 4]
      )
    ).toBe("1111-1111-1111-1111");
  });
});
