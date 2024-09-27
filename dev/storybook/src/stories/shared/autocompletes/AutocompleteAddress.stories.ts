import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteAddress from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import { Address } from '@dative-gpi/foundation-shared-domain/models';

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteAddress',
  component: FSAutocompleteAddress,
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" }
  },
} satisfies Meta<typeof FSAutocompleteAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: new Address({
      placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
      placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
      formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
      locality: 'Colombier-Saugnieu',
      country: 'France',
      latitude: 45.711741,
      longitude: 5.071675
    })
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteAddress, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`
  })
}

export const VariationEmpty: Story = {
  args: {
    modelValue: null
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteAddress, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`
  })
}