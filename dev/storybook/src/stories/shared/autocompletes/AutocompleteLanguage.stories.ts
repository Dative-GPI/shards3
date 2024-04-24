import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteLanguage from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteLanguage',
  component: FSAutocompleteLanguage,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAutocompleteLanguage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "1",
      value3: null,
      value4: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteLanguage, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`
  })
}