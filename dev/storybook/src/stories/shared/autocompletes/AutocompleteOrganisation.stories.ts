import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteOrganisation from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteOrganisation',
  component: FSAutocompleteOrganisation,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAutocompleteOrganisation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "1"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteOrganisation, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAutocompleteOrganisation
        label="Organisation"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisation
        label="Organisation with toggleset disabled"
        :disableToggleSet="true"
        v-model="args.value1"
      />
    </FSCol>`
  })
}