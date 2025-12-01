import { renderHook, act } from "@testing-library/react";

import useCardCVCValidate from "./useCardCVCValidate";

describe("useCardCVCValidate", () => {
  it("숫자로 이루어진 3자리 값인 '123'이 들어오면 isValid 값은 true이고 errorMessage 값은 null로 설정되어야 한다", () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC("123");
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it("숫자로 이루어지지 않은 값인 '12a' 들어오면 isValid 값은 false이고 errorMessage 값은 '숫자만 입력해주세요'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC("12a");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("3자리 이상의 값인 '1234'가 들어오면 isValid 값은 false이고 errorMessage 값은 '3자리만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC("1234");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe("3자리만 입력해주세요.");
  });
});
