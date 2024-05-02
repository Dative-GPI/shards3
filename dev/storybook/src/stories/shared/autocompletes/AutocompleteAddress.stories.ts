import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteAddress from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import { Address } from '@dative-gpi/foundation-core-domain/models';

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteAddress',
  component: FSAutocompleteAddress,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAutocompleteAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: new Address({
        placeId: '',
        placeLabel: 'Dative GPI Company',
        formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
        locality: 'Colombier-Saugnieu',
        country: 'France',
        latitude: 45.711741,
        longitude: 5.071675
      })
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteAddress, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>`
  })
}