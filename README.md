# React Modules

@kaori-killer가 개발한 React 컴포넌트 및 훅 라이브러리 모음입니다.

## 📦 포함된 모듈

이 저장소는 두 개의 독립적인 npm 패키지를 포함하고 있습니다.

---

## 1. `@kaori-killer/modal-component`

**모달 컴포넌트 라이브러리**

접근성을 고려한 모달 컴포넌트를 쉽게 사용할 수 있도록 제공합니다.

### 해결하는 문제

- 모달 UI를 매번 새로 구현하는 번거로움
- 접근성(ARIA 속성, 키보드 네비게이션)을 고려하지 않은 모달로 인한 사용성 문제
- 모달 상태 관리의 복잡성
- 일관성 없는 모달 디자인

### 주요 기능

- ✅ Compound Component 패턴으로 유연하고 직관적인 사용
- ✅ 모달 상태 관리 훅 제공 (`useModal`)로 간편한 상태 관리
- ✅ 기본 접근성 지원 (ARIA 속성, Escape 키로 닫기)
- ✅ PC 환경 대응 및 반응형 디자인 (center, bottom 위치 지원)
- ✅ ESM, CJS, TypeScript 지원으로 다양한 환경에서 사용 가능
- ✅ Storybook 문서화로 컴포넌트 확인 및 테스트 용이

### 설치

```bash
npm install @kaori-killer/modal-component
```

### 스토리북

🔗 [컴포넌트 문서 보기](https://68131f596576e04c1cfdd91d-tcaiokwlzv.chromatic.com/)

### 자세한 문서

[components/README.md](./components/README.md)

---

## 2. `@kaori-killer/payment-hooks`

**카드 유효성 검증 훅 라이브러리**

결제 시스템에서 필요한 카드 정보 유효성 검증을 쉽게 구현할 수 있도록 제공합니다.

### 해결하는 문제

- 카드 번호, CVC, 만료일 등 복잡한 유효성 검증 로직 구현의 어려움
- 카드 브랜드 감지 및 포맷팅 로직의 중복 개발
- 유효성 검증 로직의 일관성 부족
- 검증 로직과 UI 상태 관리의 분리 어려움

### 주요 기능

- ✅ 주요 카드사 자동 감지 및 식별 (VISA, MASTER_CARD, AMEX, DINERS, UNION_PAY)
- ✅ 카드 브랜드별 식별 번호 기반 유효성 검사 및 사용자 입력 시 자동으로 카드사별 규칙에 맞게 검증 및 포맷팅
- ✅ 카드사별 포맷팅 규칙 자동 적용 (예: AMEX는 4-6-5, 일반 카드는 4-4-4-4)
- ✅ 카드 번호, CVC, 만료일, 비밀번호 실시간 검증 및 에러 메시지 제공
- ✅ React Hook 패턴으로 간편한 사용
- ✅ ESM, CJS, TypeScript 지원

### 설치

```bash
npm install @kaori-killer/payment-hooks
```

### 자세한 문서

[hooks/README.md](./hooks/README.md)

---

## 🚀 빠른 시작

### 모달 컴포넌트 사용하기

```tsx
import Modal from "@kaori-killer/modal-component";

function App() {
  const { isOpen, handleOpen, handleClose } = Modal.useModal();

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content position="center">
          <Modal.Header>
            <Modal.Title>제목</Modal.Title>
            <Modal.CloseButton onClose={handleClose} />
          </Modal.Header>
          <Modal.Body>내용</Modal.Body>
          <Modal.Footer>
            <Modal.Button onClick={handleClose}>확인</Modal.Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

### 카드 유효성 검증 훅 사용하기

```tsx
import {
  useCardNumbersValidate,
  useCardNumbersState,
} from "@kaori-killer/payment-hooks";

function CardInput() {
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
      {/* ... 나머지 카드 번호 입력 필드 */}
      {errorMessage && <p>{errorMessage}</p>}
      <p>감지된 카드 브랜드: {cardNumbers.network.name}</p>
    </div>
  );
}
```

**카드사 식별 규칙:** 라이브러리는 카드 번호의 앞자리를 기반으로 자동으로 카드 브랜드를 감지합니다. 지원되는 카드사와 식별 규칙은 [hooks/README.md](./hooks/README.md#카드사-식별-번호-구분-규칙)에서 확인할 수 있습니다.

---

## 🛠️ 개발

### 프로젝트 구조

```
react-modules/
├── components/          # 모달 컴포넌트 라이브러리
│   ├── src/
│   ├── dist/
│   └── package.json
├── hooks/              # 카드 유효성 검증 훅 라이브러리
│   ├── src/
│   ├── dist/
│   └── package.json
└── .github/
    └── workflows/
        └── ci.yml      # CI/CD 설정
```

### 로컬 개발

각 모듈은 독립적으로 개발할 수 있습니다.

```bash
# 모달 컴포넌트 개발
cd components
npm install
npm run dev

# 카드 훅 개발
cd hooks
npm install
npm run dev
```

### 빌드

```bash
# 각 모듈에서 빌드 실행
cd components && npm run build
cd hooks && npm run build
```

---

## 📝 라이선스

이 프로젝트는 @kaori-killer가 개발했습니다.

## 🤝 기여

이슈나 PR은 언제나 환영합니다!
