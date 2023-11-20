import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from '@dative-gpi/foundation-shared-ui-components/components/FSTag.vue';

const meta = {
  title: 'Foundation/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editable: Story = {
  args: {
    label: "Tag editable",
    backgroundColor: "primary-light",
    borderColor: "primary-light",
    textColor: "primary-dark",
    editable: true
  }
}

export const NotEditable: Story = {
  args: {
    label: "Tag not editable",
    backgroundColor: "warning-light",
    borderColor: "warning-dark",
    textColor: "warning-dark",
    editable: false
  }
}