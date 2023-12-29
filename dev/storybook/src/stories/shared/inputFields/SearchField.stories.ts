import type { Meta, StoryObj } from '@storybook/vue3';

import FSSearchField from "@dative-gpi/foundation-shared-components/components/FSSearchField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

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

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "Search",
      value3: null,
      value4: "Search"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSSearchField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSSearchField
        label="Search - dark color, primary button color, no button label"
        v-model:value="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonLabel="Search"
        color="primary"
        label="Search - primary color, button label"
        v-model:value="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonColor="warning"
        buttonPrependIcon="mdi-clover"
        buttonLabel="I'm feeling lucky"
        color="warning"
        label="Search - required - warning color, button label & icon"
        description="Description for this field"
        :required="true"
        v-model:value="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model:value="args.value4"
      />
    </FSCol>`
  })
}