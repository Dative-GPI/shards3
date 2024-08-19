import type { Meta, StoryObj } from '@storybook/vue3';

import FSAggregationSelector from "@dative-gpi/foundation-core-components/components/selects/FSAggregationSelector.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/Selects/AggregationSelector',
  component: FSAggregationSelector,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAggregationSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: null,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAggregationSelector, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`
  })
}