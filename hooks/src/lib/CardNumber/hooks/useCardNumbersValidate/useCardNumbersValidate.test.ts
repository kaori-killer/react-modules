import { renderHook, act } from "@testing-library/react";

import useCardNumbersValidate from "./useCardNumbersValidate";

import CardNetworkName from "../../types/CardNetworkName";

describe("useCardNumbersValidate", () => {
  const cardNumbers = {
    numbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    network: {
      name: "NOTHING" as CardNetworkName,
      length: 0,
      formatting: [],
    },
  };

  it("값이 36으로 시작하는 6자 이상이면서 14자를 초과하면 isValid 값이 false이고 errorMessage 값이 '해당 카드 네트워크는 14자리만 입력할 수 있습니다.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    const cardNumbers = {
      numbers: {
        first: "",
        second: "1111",
        third: "1111",
        fourth: "1111",
      },
      network: {
        name: "DINERS" as CardNetworkName,
        length: 0,
        formatting: [],
      },
    };

    act(() => {
      result.current.validateCardNumbers({
        key: "first",
        value: "3612",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.first).toBe(false);
    expect(result.current.errorMessage).toBe(
      "해당 카드 네트워크는 14자리만 입력할 수 있습니다."
    );
  });

  it("값이 34 혹은 37로 시작하면서 6자 이상이라면 14자를 초과하면 isValid 값이 false이고 errorMessage 값이 '해당 카드 네트워크는 15자리만 입력할 수 있습니다.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    const cardNumbers = {
      numbers: {
        first: "3421",
        second: "",
        third: "1111",
        fourth: "1111",
      },
      network: {
        name: "AMEX" as CardNetworkName,
        length: 0,
        formatting: [],
      },
    };

    act(() => {
      result.current.validateCardNumbers({
        key: "second",
        value: "2611",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.second).toBe(false);
    expect(result.current.errorMessage).toBe(
      "해당 카드 네트워크는 15자리만 입력할 수 있습니다."
    );
  });

  it("값이 '1234'이면 isValid 값이 true이고 errorMessage 값이 null로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "first",
        value: "1234",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.first).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it("값이 '-1'이면 isValid 값이 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "first",
        value: "-1",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.first).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("값이 '12345'이면 isValid 값이 false이고 errorMessage 값이 '4자리만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "third",
        value: "12345",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.third).toBe(false);
    expect(result.current.errorMessage).toBe("4자리만 입력해주세요.");
  });
});
