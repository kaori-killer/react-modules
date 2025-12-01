import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "입력 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 입력",
    name: "비활성화된 입력",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "쿠폰 번호 입력",
    name: "쿠폰 번호",
    value: "COUPON123",
  },
};
