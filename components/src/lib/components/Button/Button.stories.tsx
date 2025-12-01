import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "버튼 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "확인",
    color: "dark",
    size: "small",
    onClick: () => {},
  },
};

export const Delete: Story = {
  args: {
    children: "삭제",
    color: "light",
    size: "small",
    onClick: () => {},
  },
};
