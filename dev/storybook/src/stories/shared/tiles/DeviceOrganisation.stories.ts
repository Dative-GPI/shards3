import type { Meta, StoryObj } from '@storybook/vue3';

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

const connectivities = [{
  id: "1",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 1,
  icon: "mdi-wifi",
  color: "#969696"
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
}, {
  id: "5",
  sourceTimestamp: 1623345600000,
  enqueuedTimestamp: 1623345600000,
  processedTimestamp: 1623345600000,
  status: 0,
  icon: null,
  color: null
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
  index: 0,
  showDefault: true,
  iconDefault: "mdi-power-standby",
  colorDefault: "#E3E3E3"
}, {
  id: "2",
  label: "Folder",
  index: 1,
  showDefault: false
}, {
  id: "3",
  label: "Luminosity",
  index: 2,
  showDefault: true,
  iconDefault: "mdi-lightbulb-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "4",
  label: "Lock",
  index: 3,
  showDefault: true,
  iconDefault: "mdi-lock-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "5",
  label: "Print",
  index: 4,
  showDefault: true,
  iconDefault: "mdi-printer-outline",
  colorDefault: "#E3E3E3"
}, {
  id: "9",
  label: "Ray start",
  index: 5,
  showDefault: true,
  iconDefault: "mdi-ray-start",
  colorDefault: "#000000"
}, {
  id: "10",
  label: "Ray end",
  index: 6,
  showDefault: true,
  iconDefault: "mdi-ray-end",
  colorDefault: "#000000"
}, {
  id: "6",
  label: "Temperatures",
  index: 0,
  groupById: "1",
  groupByLabel: "Level",
  showDefault: false
}, {
  id: "7",
  label: "Energies",
  index: 1,
  groupById: "2",
  groupByLabel: "Level",
  showDefault: false
}, {
  id: "8",
  label: "Recipes",
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
        values: [{
          id: "1",
          label: "Bakery Almeida Guerra",
          code: "930000000009920093000000000992009300000000099200",
          imageId: "1",
          deviceConnectivity: null,
          deviceWorstAlert: null,
          deviceAlerts: [],
          modelStatuses: [],
          deviceStatuses: []
        }, {
          id: "2",
          label: "Bakery João Coelho",
          code: "9300000000099201",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: null,
          deviceAlerts: [],
          modelStatuses: [],
          deviceStatuses: []
        }, {
          id: "3",
          label: "Bakery Estevão Mendes",
          code: "9300000000099202",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: alerts[0],
          deviceAlerts: [],
          modelStatuses: [],
          deviceStatuses: []
        }, {
          id: "4",
          label: "Bakery Rosária Corte-Real",
          code: "9300000000099203",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: alerts[0],
          deviceAlerts: alerts,
          modelStatuses: [],
          deviceStatuses: []
        }, {
          id: "5",
          label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
          code: "9300000000099204",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: alerts[0],
          deviceAlerts: alerts,
          modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
          deviceStatuses: []
        }, {
          id: "6",
          label: "Bakery Luís Castro",
          code: "9300000000099205",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: alerts[0],
          deviceAlerts: alerts,
          modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3], modelStatuses[4]],
          deviceStatuses: []
        }, {
          id: "7",
          label: "Bakery Guiomar Hernandes de Medeiros",
          code: "9300000000099206",
          imageId: "1",
          deviceConnectivity: connectivities[0],
          deviceWorstAlert: alerts[0],
          deviceAlerts: alerts,
          modelStatuses: modelStatuses,
          deviceStatuses: deviceStatuses
        }, {
          id: "8",
          label: "Bakery Rubem Garriço",
          code: "9300000000099207",
          imageId: "1",
          deviceConnectivity: null,
          deviceWorstAlert: alerts[0],
          deviceAlerts: alerts,
          modelStatuses: modelStatuses,
          deviceStatuses: deviceStatuses
        }, {
          id: "9",
          label: "Bakery Tiburcio Furtado Rosa",
          code: "9300000000099208",
          imageId: "1",
          deviceConnectivity: null,
          deviceWorstAlert: null,
          deviceAlerts: [],
          modelStatuses: modelStatuses,
          deviceStatuses: deviceStatuses
        }, {
          id: "10",
          label: "Bakery Naiara Mascarenhas Bento",
          code: "9300000000099209",
          imageId: "1",
          deviceConnectivity: null,
          deviceWorstAlert: null,
          deviceAlerts: [],
          modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
          deviceStatuses: deviceStatuses
        }, {
          id: "11",
          label: "Bakery Nelinha Ribeiro",
          code: "9300000000099209",
          imageId: "1",
          deviceConnectivity: null,
          deviceWorstAlert: null,
          deviceAlerts: [],
          modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
          deviceStatuses: []
        }],
        selected: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        onClick: (item: any) => {
          console.log(item);
        },
      }
    },
    render: (args, { argTypes }) => ({
    components: { FSDeviceOrganisationTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTileUI
        v-for="(deviceOrganisation, index) in args.values"
        :key="index"
        :imageId="deviceOrganisation.imageId"
        :label="deviceOrganisation.label"
        :code="deviceOrganisation.code"
        :deviceConnectivity="deviceOrganisation.deviceConnectivity"
        :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
        :deviceAlerts="deviceOrganisation.deviceAlerts"
        :modelStatuses="deviceOrganisation.modelStatuses"
        :deviceStatuses="deviceOrganisation.deviceStatuses"
        href="www.google.fr"
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
        label: "Bakery Almeida Guerra",
        code: "9300000000099200",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "2",
        label: "Bakery João Coelho",
        code: "9300000000099201",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "3",
        label: "Bakery Estevão Mendes",
        code: "9300000000099202",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "4",
        label: "Bakery Rosária Corte-Real",
        code: "9300000000099203",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "5",
        label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
        code: "9300000000099204",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }, {
        id: "6",
        label: "Bakery Luís Castro",
        code: "9300000000099205",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3], modelStatuses[4]],
        deviceStatuses: []
      }, {
        id: "7",
        label: "Bakery Guiomar Hernandes de Medeiras",
        code: "9300000000099206",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "8",
        label: "Bakery Rubem Garriço",
        code: "9300000000099207",
        deviceConnectivity: null,
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "9",
        label: "Bakery Tiburcio Furtado Rosa",
        code: "9300000000099208",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "10",
        label: "Bakery Naiara Mascarenhas Bento",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: deviceStatuses
      }, {
        id: "11",
        label: "Bakery Nelinha Ribeiro",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }],
      selected: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSDeviceOrganisationTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSDeviceOrganisationTileUI
      v-for="(deviceOrganisation, index) in args.values"
      :key="index"
      :label="deviceOrganisation.label"
      :code="deviceOrganisation.code"
      :deviceConnectivity="deviceOrganisation.deviceConnectivity"
      :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
      :deviceAlerts="deviceOrganisation.deviceAlerts"
      :modelStatuses="deviceOrganisation.modelStatuses"
      :deviceStatuses="deviceOrganisation.deviceStatuses"
      v-model="args.selected[index]"
    />
  </div>`
})
}