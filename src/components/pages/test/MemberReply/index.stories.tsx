import MemberReply from '@components/pages/test/MemberReply';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MemberReply> = {
  title: 'Pages/Test/MemberReply',
  component: MemberReply,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MemberReply>;
export const Default: Story = {
  args: {
    name: 'yejun',
    reply:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
