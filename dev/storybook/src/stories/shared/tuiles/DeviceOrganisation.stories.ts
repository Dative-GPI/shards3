import type { Meta, StoryObj } from '@storybook/vue3';

import { VDivider } from 'vuetify/lib/components/index.mjs';

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/DeviceOrganisation',
  component: FSDeviceOrganisationTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDeviceOrganisationTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        value1: {
          id: "1",
          label: "Orion EVO Oven 602/5-160 (Italy) Bakery Almeida",
          code: "9300000000099243",
          imageId: "1",
          modelStatuses: [{
            id: "1",
            label: "State",
            index: 0,
            showDefault: true,
            iconDefault: "mdi-power-standby",
            colorDefault: "#E3E3E3"
          }, {
            id: "2",
            label: "Recipe",
            index: 1,
            showDefault: true,
            iconDefault: "mdi-chef-hat",
            colorDefault: "#E3E3E3"
          }],
          deviceStatuses: [{
            modelStatusId: "1",
            statusGroups: [{
              label: "State",
              value: "On",
              icon: "mdi-chef-hat",
              color: "#00FF00",
              sourceTimestamp: 1623345600000
            }]
          }, {
            modelStatusId: "2",
            statusGroups: [{}]
          }]
        },
        selected1: false
      }
    },
    render: (args, { argTypes }) => ({
    components: { VDivider, FSDeviceOrganisationTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSDeviceOrganisationTileUI
                :imageId="args.value1.imageId"
                :label="args.value1.label"
                :code="args.value1.code"
                :modelStatuses="args.value1.modelStatuses"
                :deviceStatuses="args.value1.deviceStatuses"
                v-model="args.selected1"
            />
        </div>
    </div>`
  })
}