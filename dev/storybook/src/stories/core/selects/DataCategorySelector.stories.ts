import type { Meta, StoryObj } from '@storybook/vue3';

import FSDataCategorySelector from "@dative-gpi/foundation-core-components/components/selects/FSDataCategorySelector.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/Selects/DataCategorySelector',
  component: FSDataCategorySelector,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDataCategorySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: null,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataCategorySelector, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol width="600px">
      <FSDataCategorySelector
      modelId="1"
      v-model="args.value"
      />
    </FSCol>`
  })
}