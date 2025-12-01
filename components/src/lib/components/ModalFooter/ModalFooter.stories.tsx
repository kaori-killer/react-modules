import type { Meta, StoryObj } from "@storybook/react";

import ModalFooter from "./ModalFooter";

const meta = {
  title: "ModalFooter",
  component: ModalFooter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 헤더 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ModalFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "자식 요소",
    direction: "row",
    align: "center",
    justify: "center",
  },
  argTypes: {
    children: {
      control: false,
    },
  },

  render: ({ ...args }) => {
    return (
      <ModalFooter {...args}>
        <div>자식 요소</div>
        <div>자식 요소2</div>
        <div>자식 요소3</div>
      </ModalFooter>
    );
  },
};
