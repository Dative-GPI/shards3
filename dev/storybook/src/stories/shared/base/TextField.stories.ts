import type { Meta, StoryObj } from '@storybook/vue3';

import TextField from "@dative-gpi/foundation-shared-components/components/FSTextField.vue";

const meta = {
  title: 'Foundation/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <TextField v-bind="args" />
</v-container>
`;

export const Editable: Story = {
  args: {
    args: {
      label: "Editable",
      full: false,
      value: "Bonjour",
      color: "primary",
      editable: true
    }
  },
  render: (args, { argTypes }) => ({
    components: { TextField },
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
    components: { TextField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}