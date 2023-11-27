import type { Meta, StoryObj } from '@storybook/vue3';

import Checkbox from "@dative-gpi/foundation-shared-ui-components/components/FSCheckbox.vue";

const meta = {
  title: 'Foundation/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editable: Story = {
  args: {
    args: {
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Checkbox v-bind="args" v-model:value="args.value" />
    `,
  })
}
export const NotEditable: Story = {
  args: {
    args: {
      editable: false,
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Checkbox v-bind="args" v-model:value="args.value" />
    `,
  })
}