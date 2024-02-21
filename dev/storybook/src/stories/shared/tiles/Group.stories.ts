import type { Meta, StoryObj } from '@storybook/vue3';

import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/Group',
  component: FSGroupTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSGroupTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        values: [{
          id: "1",
          label: "Can't hold us",
          code: "Macklemore & Ryan Lewis",
          imageId: "1",
          recursiveGroupsIds: [],
          recursiveDeviceOrganisationsIds: []
        }, {
          id: "2",
          label: "Paint the town red",
          code: "Doja Cat",
          imageId: "1",
          recursiveGroupsIds: Array.from(Array(4).keys()).map((i) => i.toString()),
          recursiveDeviceOrganisationsIds: Array.from(Array(8).keys()).map((i) => i.toString()),
        }, {
          id: "3",
          label: "Who's ready for tomorrow",
          code: "Rat Boy",
          imageId: "1",
          recursiveGroupsIds: Array.from(Array(4).keys()).map((i) => i.toString()),
          recursiveDeviceOrganisationsIds: Array.from(Array(16).keys()).map((i) => i.toString()),
        }, {
          id: "4",
          label: "Dynasties & Dystopia",
          code: "Denzel Curry featuring Gizzle and Bren Joy",
          imageId: "1",
          recursiveGroupsIds: Array.from(Array(100).keys()).map((i) => i.toString()),
          recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map((i) => i.toString()),
        }],
        selected: [
          false,
          false
        ]
      }
    },
    render: (args, { argTypes }) => ({
    components: { FSGroupTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTileUI
        v-for="(group, index) in args.values"
        :key="index"
        :imageId="group.imageId"
        :label="group.label"
        :code="group.code"
        :recursiveGroupsIds="group.recursiveGroupsIds"
        :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
        v-model="args.selected[index]"
      />
    </div>`
  })
}

export const Imageless: Story = {
  args: {
    args: {
      values: [{
        id: "1",
        label: "Can't hold us",
        code: "Macklemore & Ryan Lewis",
        recursiveGroupsIds: [],
        recursiveDeviceOrganisationsIds: []
      }, {
        id: "2",
        label: "Paint the town red",
        code: "Doja Cat",
        recursiveGroupsIds: Array.from(Array(4).keys()).map((i) => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(8).keys()).map((i) => i.toString()),
      }, {
        id: "3",
        label: "Who's ready for tomorrow",
        code: "Rat Boy",
        recursiveGroupsIds: Array.from(Array(4).keys()).map((i) => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(16).keys()).map((i) => i.toString()),
      }, {
        id: "4",
        label: "Dynasties & Dystopia",
        code: "Denzel Curry featuring Gizzle and Bren Joy",
        recursiveGroupsIds: Array.from(Array(100).keys()).map((i) => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map((i) => i.toString()),
      }],
      selected: [
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSGroupTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSGroupTileUI
      v-for="(group, index) in args.values"
      :key="index"
      :label="group.label"
      :code="group.code"
      :recursiveGroupsIds="group.recursiveGroupsIds"
      :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
      v-model="args.selected[index]"
    />
  </div>`
})
}