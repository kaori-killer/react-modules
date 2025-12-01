# @kaori-killer/modal-component

접근성을 고려한 모달 컴포넌트 라이브러리입니다.

## 📦 설치

```bash
npm install @kaori-killer/modal-component
```

## 🔧 지원 형식

- **ESM**: `import` 문 사용 시 자동으로 ESM 형식 사용
- **CJS**: `require()` 사용 시 자동으로 CJS 형식 사용
- **TypeScript**: 모든 타입 정의 파일 제공

## ✨ 주요 기능

- ✅ Compound Component 패턴으로 유연하고 직관적인 사용
- ✅ 모달 상태 관리 훅 제공 (`useModal`)로 간편한 상태 관리
- ✅ 기본 접근성 지원 (ARIA 속성, Escape 키로 닫기)
- ✅ PC 환경 대응 및 반응형 디자인 (center, bottom 위치 지원)
- ✅ ESM, CJS, TypeScript 지원으로 다양한 환경에서 사용 가능
- ✅ Storybook 문서화로 컴포넌트 확인 및 테스트 용이

## 📚 API 문서

### `useModal`

모달의 열림/닫힘 상태를 관리하는 훅입니다.

**반환값:**

- `isOpen` (`boolean`): 모달이 보이는지 여부
- `handleOpen` (`() => void`): 모달을 여는 함수
- `handleClose` (`() => void`): 모달을 닫는 함수

**사용 예시:**

```tsx
const { isOpen, handleOpen, handleClose } = Modal.useModal();
```

---

### `Modal`

모달의 루트 컴포넌트입니다.

**Props:**

- `children` (`ReactNode`): 하위 컴포넌트
- `isOpen` (`boolean`): 모달이 보여지는지 여부
- `onClose` (`() => void`): 모달을 닫는 함수

**접근성:**

- `role="dialog"`: 모달을 대화상자로 명시
- `aria-modal="true"`: 모달 상태 표시
- `aria-labelledby="modal-title"`: 제목 연결
- `aria-describedby="modal-description"`: 설명 연결

---

### `Modal.Content`

모달의 컨텐츠 영역입니다.

**Props:**

- `children` (`ReactNode`): 하위 컴포넌트
- `position` (`"center" | "bottom"`): 모달을 표시할 위치
  - 기본값: `"center"`
- `size` (`"small" | "medium" | "large"`): 모달의 사이즈
  - 기본값: `"medium"`

---

### `Modal.Header`

모달의 헤더 영역입니다.

**Props:**

- `children` (`ReactNode`): 하위 컴포넌트
- `direction` (`"row" | "column"`): 내부 요소의 Flex 방향
  - 기본값: `"row"`
- `align` (`"start" | "center" | "end"`): Flex 방향에 따른 축 정렬
  - 기본값: `"start"`
- `justify` (`"start" | "center" | "end"`): Flex 방향에 따른 축 정렬
  - 기본값: `"start"`

---

### `Modal.Title`

모달의 제목 컴포넌트입니다.

**Props:**

- `children` (`ReactNode`): 제목 텍스트
- `fontSize` (`string`): 폰트 사이즈 (예: `"25px"`)
- `fontWeight` (`string`): 폰트 두께 (예: `"700"`)
- `tag` (`keyof JSX.IntrinsicElements`): 사용할 HTML 태그
  - 기본값: `"h1"`

**접근성:**

- `id="modal-title"`: ARIA 속성과 연결

---

### `Modal.CloseButton`

모달을 닫는 버튼입니다.

**Props:**

- `onClose` (`() => void`): 모달을 닫는 함수

**접근성:**

- `aria-label="닫기"`: 버튼의 목적 명시
- `type="button"`: 기본 submit 동작 방지

---

### `Modal.Body`

모달의 본문 영역입니다.

**Props:**

- `children` (`ReactNode`): 하위 컴포넌트

**접근성:**

- `id="modal-description"`: ARIA 속성과 연결

---

### `Modal.Footer`

모달의 푸터 영역입니다.

**Props:**

- `children` (`ReactNode`): 하위 컴포넌트
- `direction` (`"row" | "column"`): 내부 요소의 Flex 방향
  - 기본값: `"row"`
- `align` (`"start" | "center" | "end"`): Flex 방향에 따른 축 정렬
  - 기본값: `"start"`
- `justify` (`"start" | "center" | "end"`): Flex 방향에 따른 축 정렬
  - 기본값: `"start"`

---

### `Modal.Button`

모달 내부에서 사용할 수 있는 버튼 컴포넌트입니다.

**Props:**

- `children` (`ReactNode`): 버튼 텍스트
- `onClick` (`() => void`): 클릭 이벤트 핸들러
- `color` (`"light" | "dark"`): 버튼의 색상
  - 기본값: `"light"`
- `size` (`"small" | "medium" | "large"`): 버튼의 사이즈
  - 기본값: `"small"`

---

### `Modal.Input`

모달 내부에서 사용할 수 있는 입력 컴포넌트입니다.

**Props:**

- `name` (`string`): Input의 이름 (필수)
  - label과 연결되어 접근성을 향상시킵니다.
- `placeholder` (`string`): placeholder 텍스트
- `value` (`string`): Input의 값 (선택)
- `disabled` (`boolean`): 비활성화 여부
  - 기본값: `false`

**접근성:**

- `label`과 `htmlFor`로 연결되어 스크린 리더가 인식 가능

---

## 💡 사용 예시

### 기본 사용법

```tsx
import Modal from "@kaori-killer/modal-component";

function App() {
  const { isOpen, handleOpen, handleClose } = Modal.useModal();

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content position="center" size="medium">
          <Modal.Header direction="row" align="start" justify="start">
            <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
              제목
            </Modal.Title>
            <Modal.CloseButton onClose={handleClose} />
          </Modal.Header>
          <Modal.Body>내용</Modal.Body>
          <Modal.Footer direction="row" align="end" justify="center">
            <Modal.Button onClick={handleClose}>확인</Modal.Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

### Input을 포함한 모달

```tsx
import Modal from "@kaori-killer/modal-component";

function App() {
  const { isOpen, handleOpen, handleClose } = Modal.useModal();

  return (
    <>
      <button onClick={handleOpen}>쿠폰 입력</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content position="bottom" size="small">
          <Modal.Header direction="row" align="start" justify="start">
            <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
              쿠폰 번호 입력
            </Modal.Title>
            <Modal.CloseButton onClose={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <Modal.Input name="쿠폰 번호" placeholder="쿠폰 번호 입력" />
          </Modal.Body>
          <Modal.Footer direction="row" align="end" justify="center">
            <Modal.Button color="light" size="small">
              확인
            </Modal.Button>
            <Modal.Button color="dark" size="small" onClick={handleClose}>
              취소
            </Modal.Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

---

## 📖 스토리북

스토리북에서 컴포넌트를 확인하고 테스트할 수 있습니다.

🔗 [스토리북 보기](https://68131f596576e04c1cfdd91d-tcaiokwlzv.chromatic.com/)

---

## 📝 라이선스

이 프로젝트는 @kaori-killer가 개발했습니다.
