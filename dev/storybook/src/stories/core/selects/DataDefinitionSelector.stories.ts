import type { Meta, StoryObj } from '@storybook/vue3';

import FSDataDefinitionSelector from "@dative-gpi/foundation-core-components/components/selects/FSDataDefinitionSelector.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/Selects/DataDefinitionSelector',
  component: FSDataDefinitionSelector,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDataDefinitionSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: null,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataDefinitionSelector, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSDataDefinitionSelector
      modelId="1"
      width="600px"
      categoryId="1"
      v-model="args.value"
      />
    </FSCol>`
  })
}