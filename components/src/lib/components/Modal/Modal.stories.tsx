import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

import useModal from "../../hooks/useModal";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                Title이다!
              </Modal.Title>
              <Modal.CloseButton onClose={handleClose} />
            </Modal.Header>
            <Modal.Body>몸통이다!</Modal.Body>
            <Modal.Footer direction="row" align="end" justify="center">
              Footer이다!
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Alert: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                아이디를 입력해 주세요.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>아이디는 필수로 입력해야 합니다.</Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Modal.Button color="dark" size="small">
                확인
              </Modal.Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Confirm: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                카드를 삭제하시겠습니까?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>삭제하면 복구하실 수 없습니다.</Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Modal.Button color="light" size="small">
                취소
              </Modal.Button>
              <Modal.Button color="dark" size="small">
                확인
              </Modal.Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Prompt: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                쿠폰 번호를 입력해 주세요.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Input name="쿠폰 번호" placeholder="쿠폰 번호 입력" />
            </Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Modal.Button color="light" size="small">
                취소
              </Modal.Button>
              <Modal.Button color="dark" size="small">
                확인
              </Modal.Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
