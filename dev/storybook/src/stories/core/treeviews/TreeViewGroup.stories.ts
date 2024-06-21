import type { Meta, StoryObj } from '@storybook/vue3';

import FSTreeViewGroup from "@dative-gpi/foundation-core-components/components/treeviews/FSTreeViewGroup.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/TreeViews/TreeViewGroup',
  component: FSTreeViewGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTreeViewGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTreeViewGroup, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>`
  })
}