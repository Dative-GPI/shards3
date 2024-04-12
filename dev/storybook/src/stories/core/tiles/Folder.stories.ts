import type { Meta, StoryObj } from '@storybook/vue3';

import FSFolderTile from "@dative-gpi/foundation-core-components/components/tiles/FSFolderTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/Folder',
  component: FSFolderTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSFolderTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [
          "1",
          "2",
          "3"
      ],
      selected: [
        false,
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSFolderTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`
  })
}