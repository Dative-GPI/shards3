import type { Meta, StoryObj } from '@storybook/vue3';

import PasswordField from "@dative-gpi/foundation-shared-components/components/FSPasswordField.vue";

const meta = {
  title: 'Foundation/Shared/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <PasswordField v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Editable: Story = {
  args: {
    args: {
      label: "Editable",
      value: "Password",
      color: "primary",
      editable: true
    }
  },
  render: (args, { argTypes }) => ({
    components: { PasswordField },
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
      value: "Password",
      color: "warning",
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { PasswordField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}