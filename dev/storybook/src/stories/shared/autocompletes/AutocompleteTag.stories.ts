import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteTag from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteTag.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/AutocompleteTag',
  component: FSAutocompleteTag,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAutocompleteTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      items: [
        {id: "1", label: "Alpha" , isCustom: false},
        {id: "2", label: "Beta"  , isCustom: false},
        {id: "3", label: "Charly", isCustom: false}
      ],
      value1: null,
      value2: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteTag, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>`
  })
}