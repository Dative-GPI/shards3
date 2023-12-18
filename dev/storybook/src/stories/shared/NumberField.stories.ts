import type { Meta, StoryObj } from '@storybook/vue3';

import NumberField from "@dative-gpi/foundation-shared-components/components/FSNumberField.vue";

const meta = {
  title: 'Foundation/Shared/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <NumberField v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Editable: Story = {
  args: {
    args: {
      label: "Editable",
      value: null,
      color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { NumberField },
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
      label: "Not editable",
      value: null,
      color: "warning",
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { NumberField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}