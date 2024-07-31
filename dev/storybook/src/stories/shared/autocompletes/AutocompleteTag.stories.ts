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
      value1: [{id : "1", label : "Non", isCustom : false},{id : "2", label : "Etage", isCustom : false}],
      value2: [{id : "1", label : "Non", isCustom : false},{id : "2", label : "Etage", isCustom : false}, {id : "3", label : "Buée", isCustom : false}],
      value3: [{id : "3", label : "Buée", isCustom : false}],
      value4 : []
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
        label="default autocomplete width tag"
        :items="args.value2"
        v-model="args.value1"
      />
      <FSAutocompleteTag
        label="custom autocomplete width default items and new value"
        variant="tagged"
        :items="args.value2"
        v-model="args.value3"
      />
      <FSAutocompleteTag
        label="custom autocomplete with new value only"
        variant="tagged"
        :items="[]"
        v-model="args.value4"
      />
    </FSCol>`
  })
}