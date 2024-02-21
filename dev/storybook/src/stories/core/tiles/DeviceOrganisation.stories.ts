import type { Meta, StoryObj } from '@storybook/vue3';

import FSDeviceOrganisationTile from "@dative-gpi/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/DeviceOrganisation',
  component: FSDeviceOrganisationTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDeviceOrganisationTile>;

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
    components: { FSDeviceOrganisationTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        v-model="args.selected[index]"
      />
    </div>`
  })
}