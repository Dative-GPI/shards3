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

const connectivities = [{
  id: "1",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 1,
  icon: "mdi-wifi",
  color: "#00FF00"
}, {
  id: "2",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 2,
  icon: "mdi-wifi",
  color: "#00FFFF"
}, {
  id: "3",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 3,
  icon: "mdi-wifi",
  color: "#FFFF00"
}, {
  id: "4",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 4,
  icon: "mdi-wifi",
  color: "#FF0000"
}];

const alerts = [{
  id: "1",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  label: "Device too hot",
  status: 3,
  criticity: 3
}, {
  id: "2",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  label: "Device too cold",
  status: 6,
  criticity: 1
}, {
  id: "3",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  label: "Device too late",
  status: 5,
  criticity: 1
}];

const modelStatuses = [{
  id: "1",
  label: "State",
  inline: true,
  index: 0,
  showDefault: true,
  iconDefault: "mdi-power-standby",
  colorDefault: "#E3E3E3"
}, {
  id: "2",
  label: "Folder",
  inline: true,
  index: 1,
  showDefault: false
}, {
  id: "3",
  label: "Luminosity",
  inline: true,
  index: 2,
  showDefault: true,
  iconDefault: "mdi-lightbulb-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "4",
  label: "Lock",
  inline: true,
  index: 3,
  showDefault: true,
  iconDefault: "mdi-lock-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "5",
  label: "Print",
  inline: true,
  index: 4,
  showDefault: true,
  iconDefault: "mdi-printer-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "6",
  label: "Temperatures",
  inline: false,
  index: 0,
  groupById: "1",
  groupByLabel: "Level",
  showDefault: false
}, {
  id: "7",
  label: "Energies",
  inline: false,
  index: 1,
  groupById: "2",
  groupByLabel: "Level",
  showDefault: false
}, {
  id: "8",
  label: "Recipes",
  inline: false,
  index: 2,
  groupById: "2",
  groupByLabel: "Level",
  showDefault: true,
  iconDefault: "mdi-chef-hat",
  colorDefault: "#E3E3E3"
}];

const deviceStatuses = [{
  modelStatusId: "1",
  statusGroups: [{
    label: "State",
    value: "On",
    icon: "mdi-power",
    color: "#009933",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "2",
  statusGroups: [{
    label: "Folder",
    value: "Check",
    icon: "mdi-folder-check-outline",
    color: "#003399",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "3",
  statusGroups: [{
    label: "Luminosity",
    value: "Bright",
    icon: "mdi-lightbulb-outline",
    color: "#996699",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "4",
  statusGroups: [{
    label: "Lock",
    value: "Locked",
    icon: "mdi-lock-outline",
    color: "#999933",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "5",
  statusGroups: [{
    label: "Print",
    value: "Printing",
    icon: "mdi-printer-outline",
    color: "#338888",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "6",
  statusGroups: [{
    label: "Temperatures",
    value: "200",
    groupByValue: "1",
    unit: "°C",
    icon: "mdi-thermometer",
    color: "#FF0000",
    sourceTimestamp: 1623345600000
  }, {
    label: "Temperatures",
    value: "50",
    groupByValue: "2",
    unit: "°C",
    icon: "mdi-thermometer",
    color: "#0000FF",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "7",
  statusGroups: [{
    label: "Energies",
    value: "100",
    groupByValue: "1",
    unit: "kWh",
    icon: "mdi-flash",
    color: "#FF0000",
    sourceTimestamp: 1623345600000
  }, {
    label: "Energies",
    value: "50",
    groupByValue: "2",
    unit: "kWh",
    icon: "mdi-flash",
    color: "#0000FF",
    sourceTimestamp: 1623345600000
  }]
}, {
  modelStatusId: "8",
  statusGroups: [{
    label: "Recipes",
    value: "Bread",
    icon: "mdi-chef-hat",
    color: "#0000FF",
    sourceTimestamp: 1623345600000
  }]
}];

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