import type { Meta, StoryObj } from '@storybook/vue3';

import FSSearchField from "@dative-gpi/foundation-shared-components/components/FSSearchField.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/SearchField',
  component: FSSearchField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSSearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editable: Story = {
  args: {
    args: {
      value1: null,
      value2: "Search",
      value3: null,
      value4: "Search"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSSearchField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSearchField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value2" buttonLabel="Search" label="Search - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value3" buttonLabel="I'm feeling lucky" buttonPrependIcon="mdi-clover" label="Search password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`
  })
}