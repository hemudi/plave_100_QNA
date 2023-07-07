import BodyLayout from '@components/layout/BodyLayout';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BodyLayout> = {
  title: 'Layout/BodyLayout',
  component: BodyLayout,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BodyLayout>;
export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '500px',
        }}
      >
        Contents
      </div>
    ),
  },
};
