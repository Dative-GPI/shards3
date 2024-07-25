import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteTag from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutocompleteTag.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteTag',
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
      value1: ["1","2","3"],
      value2: [{id : "1", label : "Non"},{id : "2", label : "Etage"}, {id : "3", label : "Buée"}],
      value3: ["2"]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteTag, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol gap="24px">
      <FSAutocompleteTag
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
    </FSCol>`
  })
}