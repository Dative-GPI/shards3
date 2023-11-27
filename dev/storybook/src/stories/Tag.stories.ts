import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from "@dative-gpi/foundation-shared-ui-components/components/FSTag.vue";

const meta = {
  title: 'Foundation/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editable: Story = {
  args: {
    label: "Editable",
    full: false,
    color: "primary",
    editable: true
  }
}

export const NotEditable: Story = {
  args: {
    label: "Not Editable",
    full: true,
    color: "warning",
    editable: false
  }
}