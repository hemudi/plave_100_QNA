import MemberIcon from '@components/common/MemberIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MemberIcon> = {
  title: 'Common/MemberIcon',
  component: MemberIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MemberIcon>;
export const Default: Story = {
  args: {
    type: 'yejun',
  },
};
