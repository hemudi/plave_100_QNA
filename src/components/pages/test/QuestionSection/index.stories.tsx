import QuestionSection from '@components/pages/test/QuestionSection';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof QuestionSection> = {
  title: 'Pages/Test/QuestionSection',
  component: QuestionSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof QuestionSection>;
export const Default: Story = {
  args: {
    title: 'Q1',
    description: `" 이름은? "`,
    children: <div>QuestionSection Contents</div>,
  },
};
