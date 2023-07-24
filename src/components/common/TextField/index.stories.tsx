import TextField from '@components/common/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'Common/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;
export const Default: Story = {
  args: {
    placeholder: '답 입력 후 Enter 또는 Next 버튼 클릭',
  },
};
