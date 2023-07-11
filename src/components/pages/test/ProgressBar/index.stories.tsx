import ProgressBar from '@components/pages/test/ProgressBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;
export const Default: Story = {};
