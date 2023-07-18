import Button from '@components/common/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    shape: 'square',
    onClick: () => {
      console.log('button click');
    },
  },
};
