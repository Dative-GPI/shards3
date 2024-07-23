import type { Meta, StoryObj } from '@storybook/vue3';

import FSModelSelector from "@dative-gpi/foundation-core-components/components/selects/FSModelSelector.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/Selects/ModelSelector',
  component: FSModelSelector,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSModelSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: 0,

    }
  },
  render: (args, { argTypes }) => ({
    components: { FSModelSelector, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSModelSelector
        v-model="args.value"
      />
    </FSCol>`
  })
}