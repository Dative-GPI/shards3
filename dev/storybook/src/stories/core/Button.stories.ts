import type { Meta, StoryObj } from '@storybook/vue3';

import Button from "@dative-gpi/foundation-core-components/components/FSCoreButton.vue";

const meta = {
  title: 'Foundation/Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
}
