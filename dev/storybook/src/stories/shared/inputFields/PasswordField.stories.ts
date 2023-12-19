import type { Meta, StoryObj } from '@storybook/vue3';

import FSPasswordField from "@dative-gpi/foundation-shared-components/components/FSPasswordField.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/PasswordField',
  component: FSPasswordField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "Password",
      value3: null,
      value4: "Password"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSPasswordField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSPasswordField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value2" label="Password - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value3" label="Required password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`
  })
}