import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteDashboard from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/Autocompletes/AutocompleteDashboard',
  component: FSAutocompleteDashboard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAutocompleteDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "11"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteDashboard, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>`
  })
}