import { renderHook, act } from "@testing-library/react";

import useCardExpireDateValidate from "./useCardExpireDateValidate";

describe("CardExpireDateValidate", () => {
  describe("숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null로 설정되어야 한다.", () => {
    it("month 값이 '12'이면 isValid 값이 true이고 errorMessage 값이 null로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "12",
            year: "",
          },
          "month"
        );
      });

      expect(result.current.isValid.month).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });

    it("year 값이 '25'이면 isValid 값이 true이고 errorMessage 값이 null로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "",
            year: "25",
          },
          "year"
        );
      });

      expect(result.current.isValid.year).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe("숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
    it("month 값이 '1a'이면 isValid 값이 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "1a",
            year: "",
          },
          "month"
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
    });

    it("year 값이 '2a'이면 isValid 값이 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "",
            year: "2a",
          },
          "year"
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
    });
  });

  describe("숫자로 이루어진 2자리 값이 들어오면 범위를 검증하여 유효하지 않으면 isValid가 false이고 에러 메시지가 나온다.", () => {
    it("month 값이 '13'이면 isValid 값이 false이고 errorMessage 값이 '1~12 사이의 숫자를 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "13",
            year: "",
          },
          "month"
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(
        "1~12 사이의 숫자를 입력해주세요."
      );
    });

    it("year 값이 '23'이면 isValid 값이 false이고 errorMessage 값이 '유효한 년도를 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "",
            year: "23",
          },
          "year"
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe("유효한 년도를 입력해주세요.");
    });
  });

  describe("년도가 올해인데 월이 현재 월보다 이전이면 month의 isValid가 false이고 에러 메시지가 나온다.", () => {
    it("year가 '25'이고 month가 '04'이면 isValid 값이 false이고 errorMessage 값이 '유효한 만료일을 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "04",
            year: "25",
          },
          "month"
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe("유효한 만료일을 입력해주세요.");
    });

    it("month가 '04'이고 year가 '25'이면 isValid 값이 false이고 errorMessage 값이 '유효한 만료일을 입력해주세요.'로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: "04",
            year: "25",
          },
          "year"
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe("유효한 만료일을 입력해주세요.");
    });
  });
});
