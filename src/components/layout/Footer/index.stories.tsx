import Footer from '@components/layout/Footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
