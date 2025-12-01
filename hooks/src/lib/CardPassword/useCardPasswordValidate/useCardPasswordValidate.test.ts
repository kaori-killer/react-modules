import { renderHook, act } from "@testing-library/react";

import useCardPasswordValidate from "./useCardPasswordValidate";

describe("useCardPasswordValidate", () => {
  it("값이 '12'이면 isValid 값이 true이고 errorMessage 값이 null로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    act(() => {
      result.current.validateCardPassword("12");
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it("값이 '1a'이면 isValid 값이 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    act(() => {
      result.current.validateCardPassword("1a");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("값이 '123'이면 isValid 값이 false이고 errorMessage 값이 '2자리만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    act(() => {
      result.current.validateCardPassword("123");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe("2자리만 입력해주세요.");
  });
});
