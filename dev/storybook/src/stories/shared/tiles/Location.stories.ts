import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSLocationTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue';

const meta: Meta<typeof FSLocationTileUI> = {
  title: 'Foundation/Shared/Tiles/Location',
  component: FSLocationTileUI,
  subcomponents: { FSTile },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    height: { control: 'number' },
    width: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSLocationTileUI },
    setup() {
      return { args };
    },
    template: `
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :address="args.address"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        :width="args.width"
        :height="args.height"
        :singleSelect="args.singleSelect"
        :selected="args.selected"
        :modelValue="args.modelValue"
      />
    `,
  }),
  args: {
    label: 'Location test 2',
    code: 'location-test-code-long-format-with-description',
    color: '#9F2424',
    icon: 'mdi-cog',
    deviceCount: 1,
    address: '50 rue des Vignes, 75000 Paris',
    width: 418,
    height: 140,
    singleSelect: false,
    modelValue: false,
  },
};

