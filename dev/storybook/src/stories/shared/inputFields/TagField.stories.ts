import type { Meta, StoryObj } from '@storybook/vue3';

import FSTagField from "@dative-gpi/foundation-shared-components/components/FSTagField.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/TagField',
  component: FSTagField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTagField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: ["Standard", "Tag", "Variant"],
      value2: ["Full", "Tag", "Variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTagField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTagField v-model:value="args.value1" variant="standard" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value4" label="Uneditable" color="error" description="Uneditable description" :editable="false" />
    </div>`
  })
}