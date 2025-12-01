import type { Meta, StoryObj } from "@storybook/react";

import ModalCloseButton from "./ModalCloseButton";

const meta = {
  title: "ModalCloseButton",
  component: ModalCloseButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 닫기 버튼 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ModalCloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },

  render: (args) => {
    return <ModalCloseButton {...args} />;
  },
};
