import type { Meta, StoryObj } from '@storybook/vue3';

import FSNumberField from "@dative-gpi/foundation-shared-components/components/FSNumberField.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/NumberField',
  component: FSNumberField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSNumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <NumberField v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: 500,
      value3: null,
      value4: 1500
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSNumberField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSNumberField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value2" label="Number - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value3" label="Required number - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`
  })
}