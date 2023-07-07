import Header from '@components/layout/Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {};
