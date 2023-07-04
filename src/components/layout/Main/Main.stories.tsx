import type { Meta, StoryObj } from '@storybook/react';
import Main from '@components/layout/Main';

const meta: Meta<typeof Main> = {
  title: 'Layout/Main',
  component: Main,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Main>;
export const Default: Story = {
  args: {
    children: 'MainContents',
  },
};
