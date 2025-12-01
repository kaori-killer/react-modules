import type { Meta, StoryObj } from "@storybook/react";

import ModalTitle from "./ModalTitle";

const meta = {
  title: "ModalTitle",
  component: ModalTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 제목 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ModalTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "제목이다!",
    fontSize: "40px",
    fontWeight: "bold",
    tag: "h1",
  },
};
