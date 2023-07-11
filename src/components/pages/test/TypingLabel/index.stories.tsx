import TypingLabel from '@components/pages/test/TypingLabel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TypingLabel> = {
  title: 'Common/TypingLabel',
  component: TypingLabel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TypingLabel>;
export const Default: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
