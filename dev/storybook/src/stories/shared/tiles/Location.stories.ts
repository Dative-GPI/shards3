import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSLocationTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue';

const meta: Meta<typeof FSLocationTileUI> = {
  title: 'Foundation/Shared/Tiles/Location',
  component: FSLocationTileUI,
  subcomponents: { FSTile },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    args: {
      values: [{
        id: "1",
        label: 'Location test',
        code: 'location-test',
        color: 'primary',
        icon: 'mdi-home',
        deviceCount: 5
      }, {
        id: "2",
        label: 'Location test',
        code: 'location-test',
        color: 'primary',
        icon: 'mdi-home',
        singleSelect: true
      }, {
        id: "3",
        label: 'Location test',
        color: 'primary',
        icon: 'mdi-home',
        deviceCount: 5
      }
    ],
      selected: [
        false,
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSLocationTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSLocationTileUI
      v-for="(entity, index) in args.values"
      :key="index"
      v-model="args.selected[index]"
      v-bind="entity"
    />
  </div>`
})
};

export const Variation1: Story = {
  render: (args) => ({
    components: { FSLocationTileUI },
    setup() {
      return { args };
    },
    template: `
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="320px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        width="520px"
        height="220px"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        width="100%"
        :deviceCount="args.deviceCount"
      />
      <div style="margin-top: 20px;"></div>
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
      />
    `,
  }),
  args: {
    label: 'Location test 2',
    code: 'location-test-code-long-format-with-description',
    color: '#9F2424',
    icon: 'mdi-cog',
    deviceCount: 1,
  },
};

