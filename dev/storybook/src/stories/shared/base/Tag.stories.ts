import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from "@dative-gpi/foundation-shared-components/components/FSTag.vue";

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

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Tag v-bind="args" />
</v-container>
`;

export const Editable: Story = {
  args: {
    args: {
      label: "Editable",
      full: false,
      color: "primary",
      editable: true
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tag },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const NotEditable: Story = {
  args: {
    args: {
      label: "Not Editable",
      full: true,
      color: "warning",
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tag },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}