# @kaori-killer/payment-hooks

카드 유효성 검증을 쉽게 할 수 있도록 돕는 React Hook 라이브러리입니다.

## 📦 설치

```bash
npm install @kaori-killer/payment-hooks
```

## 🔧 지원 형식

- **ESM**: `import` 문 사용 시 자동으로 ESM 형식 사용
- **CJS**: `require()` 사용 시 자동으로 CJS 형식 사용
- **TypeScript**: 모든 타입 정의 파일 제공

## ✨ 주요 기능

- ✅ 주요 카드사 자동 감지 및 식별 (VISA, MASTER_CARD, AMEX, DINERS, UNION_PAY)
- ✅ 카드 브랜드별 식별 번호 기반 유효성 검사 및 사용자 입력 시 자동으로 카드사별 규칙에 맞게 검증 및 포맷팅
- ✅ 카드사별 포맷팅 규칙 자동 적용 (예: AMEX는 4-6-5, 일반 카드는 4-4-4-4)
- ✅ 카드 번호, CVC, 만료일, 비밀번호 실시간 검증 및 에러 메시지 제공
- ✅ React Hook 패턴으로 간편한 사용
- ✅ ESM, CJS, TypeScript 지원

## 📚 API 문서

### 카드사 식별 번호 구분 규칙

라이브러리는 다음 규칙에 따라 카드 브랜드를 자동으로 식별합니다.

**Visa**

- 4로 시작하는 16자리 숫자
- 예시: `4123 4567 8901 2345`

**MasterCard**

- 51~55로 시작하는 16자리 숫자
- 예시: `5123 4567 8901 2345`

**Diners**

- 36으로 시작하는 14자리 숫자
- 예시: `3612 345678 9012`

**AMEX**

- 34 또는 37로 시작하는 15자리 숫자
- 예시 (34로 시작): `3412 345678 90123`
- 예시 (37로 시작): `3712 345678 90123`

**UnionPay**

- 16자리 숫자로, 다음 조건 중 하나를 만족합니다.
  - `622126`~`622925`로 시작: `6221 2612 3456 7890`
  - `624`~`626`로 시작: `6240 1234 5678 9012`
  - `6282`~`6288`로 시작: `6282 1234 5678 9012`

---

### 유효성 검증 Hook

#### `useCardBrandValidate`

카드 브랜드 유효성 검증 훅입니다.

**Parameters:**

- `cardBrands` (`string[]`): 허용할 카드 브랜드 목록

**Returns:**

- `isValid` (`boolean`): 유효성 검증 결과
- `errorMessage` (`string | null`): 에러 메시지
- `validateCardBrand` (`(cardBrand: string) => boolean`): 카드 브랜드 유효성 검증 함수

**검증 규칙:**

- `cardBrands` 배열 내에 있는 `cardBrand`인지 검증합니다.

---

#### `useCardCVCValidate`

카드 CVC 유효성 검증 훅입니다.

**Returns:**

- `isValid` (`boolean`): 유효성 검증 결과
- `errorMessage` (`string | null`): 에러 메시지
- `validateCardCVC` (`(cardCVC: string) => boolean`): 카드 CVC 유효성 검증 함수

**검증 규칙:**

- 각 자리가 숫자인지 검증합니다.
- 3자리를 초과하지 않는지 검증합니다.

---

#### `useCardExpireDateValidate`

카드 유효기간 유효성 검증 훅입니다.

**Returns:**

- `isValid` (`boolean`): 유효성 검증 결과
- `errorMessage` (`string | null`): 에러 메시지
- `validateCardExpireDate` (`(expireDate: { month: string; year: string }, key: "month" | "year") => boolean`): 카드 유효기간 유효성 검증 함수

**검증 규칙:**

**공통 검증:**

- 각 자리가 숫자인지 검증합니다.
- 2자리를 초과하지 않는지 검증합니다.

**월:**

- 1~12 사이의 숫자인지 검증합니다.

**년도:**

- 현재 년도를 포함해서 +5년 이내의 숫자인지 검증합니다.

**월, 년도 모두 채워진 경우:**

- 년도가 올해일 때 월이 현재 월보다 이전의 숫자가 아닌지 검증합니다.

---

#### `useCardNumbersValidate`

카드 번호 유효성 검증 훅입니다.

**Returns:**

- `validationState` (`{ first: boolean; second: boolean; third: boolean; fourth: boolean }`): 각 필드별 유효성 검증 결과
- `errorMessage` (`string | null`): 에러 메시지
- `validateCardNumbers` (`(params: ValidateCardNumbersParams) => boolean`): 카드 번호 유효성 검증 함수

**검증 규칙:**

- 각 자리가 숫자인지 검증합니다.
- 4자리를 초과하지 않는지 검증합니다.
- 카드 브랜드별 유효성 검증을 수행합니다.

**타입:**

```tsx
type ValidateCardNumbersParams = {
  key: "first" | "second" | "third" | "fourth";
  value: string;
  cardNumbers: CardNumbersState;
};

type CardNumbersState = {
  numbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  network: {
    name: "NOTHING" | "VISA" | "MASTER_CARD" | "AMEX" | "DINERS" | "UNION_PAY";
    length: number;
    formatting: number[];
  };
};
```

---

#### `useCardPasswordValidate`

카드 비밀번호 유효성 검증 훅입니다.

**Returns:**

- `isValid` (`boolean`): 유효성 검증 결과
- `errorMessage` (`string | null`): 에러 메시지
- `validateCardPassword` (`(cardPassword: string) => boolean`): 카드 비밀번호 유효성 검증 함수

**검증 규칙:**

- 각 자리가 숫자인지 검증합니다.
- 2자리를 초과하지 않는지 검증합니다.

---

### 상태 관리 Hook

#### `useCardBrandState`

카드 브랜드 상태를 관리하는 훅입니다.

**Parameters:**

- `validateCardBrand` (`(cardBrand: string) => boolean`): 카드 브랜드 유효성 검증 함수
- `cardBrands` (`string[]`): 카드 브랜드 목록

**Returns:**

- `cardBrand` (`string`): 현재 선택된 카드 브랜드
- `handleCardBrand` (`(event: React.ChangeEvent<HTMLInputElement>) => void`): 카드 브랜드 변경 핸들러

---

#### `useCardCVCState`

카드 CVC 상태를 관리하는 훅입니다.

**Parameters:**

- `validateCardCVC` (`(cardCVC: string) => boolean`): 카드 CVC 유효성 검증 함수

**Returns:**

- `cardCVC` (`string`): 현재 입력된 CVC
- `handleCardCVC` (`(event: React.ChangeEvent<HTMLInputElement>) => void`): CVC 변경 핸들러

---

#### `useCardExpireDateState`

카드 유효기간 상태를 관리하는 훅입니다.

**Parameters:**

- `validateCardExpireDate` (`(expireDate: { month: string; year: string }, key: "month" | "year") => boolean`): 카드 유효기간 유효성 검증 함수

**Returns:**

- `expireDate` (`{ month: string; year: string }`): 현재 입력된 유효기간
- `handleCardExpire` (`(event: React.ChangeEvent<HTMLInputElement>, key: "month" | "year") => void`): 유효기간 변경 핸들러

---

#### `useCardNumbersState`

카드 번호 상태를 관리하는 훅입니다.

**Parameters:**

- `validateCardNumbers` (`(params: ValidateCardNumbersParams) => boolean`): 카드 번호 유효성 검증 함수

**Returns:**

- `cardNumbers` (`CardNumbersState`): 현재 입력된 카드 번호 및 네트워크 정보
- `handleCardNumber` (`(params: { event: React.ChangeEvent<HTMLInputElement>; key: CardNumbersKey }) => void`): 카드 번호 변경 핸들러

---

#### `useCardPasswordState`

카드 비밀번호 상태를 관리하는 훅입니다.

**Parameters:**

- `validateCardPassword` (`(cardPassword: string) => boolean`): 카드 비밀번호 유효성 검증 함수

**Returns:**

- `cardPassword` (`string`): 현재 입력된 비밀번호
- `handleCardPassword` (`(event: React.ChangeEvent<HTMLInputElement>) => void`): 비밀번호 변경 핸들러

---

### 유틸 함수

#### `formatCardNumber`

카드 번호를 포맷팅하는 함수입니다.

**Parameters:**

- `cardNumbers` (`{ first: string; second: string; third: string; fourth: string }`): 카드 번호 객체
- `formatting` (`number[]`): 포맷팅 방식 배열 (예: `[4, 4, 4, 4]`)

**Returns:**

- `string`: 포맷팅된 카드 번호 (예: `"1234-5678-9012-3456"`)

**사용 예시:**

```tsx
import { formatCardNumber } from "@kaori-killer/payment-hooks";

const formatted = formatCardNumber(
  { first: "1234", second: "5678", third: "9012", fourth: "3456" },
  [4, 4, 4, 4]
);
// 결과: "1234-5678-9012-3456"
```

---

## 💡 사용 예시

### 카드 번호 입력

```tsx
import {
  useCardNumbersValidate,
  useCardNumbersState,
} from "@kaori-killer/payment-hooks";

function CardNumberInput() {
  const { validationState, errorMessage, validateCardNumbers } =
    useCardNumbersValidate();
  const { cardNumbers, handleCardNumber } = useCardNumbersState({
    validateCardNumbers,
  });

  return (
    <div>
      <input
        value={cardNumbers.numbers.first}
        onChange={(e) => handleCardNumber({ event: e, key: "first" })}
      />
      <input
        value={cardNumbers.numbers.second}
        onChange={(e) => handleCardNumber({ event: e, key: "second" })}
      />
      <input
        value={cardNumbers.numbers.third}
        onChange={(e) => handleCardNumber({ event: e, key: "third" })}
      />
      <input
        value={cardNumbers.numbers.fourth}
        onChange={(e) => handleCardNumber({ event: e, key: "fourth" })}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <p>감지된 카드 브랜드: {cardNumbers.network.name}</p>
    </div>
  );
}
```

### CVC 입력

```tsx
import {
  useCardCVCValidate,
  useCardCVCState,
} from "@kaori-killer/payment-hooks";

function CVCInput() {
  const { isValid, errorMessage, validateCardCVC } = useCardCVCValidate();
  const { cardCVC, handleCardCVC } = useCardCVCState({ validateCardCVC });

  return (
    <div>
      <input value={cardCVC} onChange={handleCardCVC} maxLength={3} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
```

### 유효기간 입력

```tsx
import {
  useCardExpireDateValidate,
  useCardExpireDateState,
} from "@kaori-killer/payment-hooks";

function ExpireDateInput() {
  const { isValid, errorMessage, validateCardExpireDate } =
    useCardExpireDateValidate();
  const { expireDate, handleCardExpire } = useCardExpireDateState({
    validateCardExpireDate,
  });

  return (
    <div>
      <input
        value={expireDate.month}
        onChange={(e) => handleCardExpire(e, "month")}
        placeholder="MM"
        maxLength={2}
      />
      <input
        value={expireDate.year}
        onChange={(e) => handleCardExpire(e, "year")}
        placeholder="YY"
        maxLength={2}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
```

---

## 📝 라이선스

이 프로젝트는 @kaori-killer가 개발했습니다.
