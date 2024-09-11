import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSLocationTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue';
import FSLocationTile from '@dative-gpi/foundation-core-components/components/tiles/FSLocationTile.vue';

const meta: Meta<typeof FSLocationTile> = {
  title: 'Foundation/Core/Tiles/Location',
  component: FSLocationTile,
  subcomponents: { FSLocationTileUI, FSTile },
  tags: ['autodocs'],
  argTypes: {
    locationId: {
      control: 'select',
      options: ['1', '2', '3'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSLocationTile },
    setup() {
      return { args };
    },
    template: `
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `,
  }),
  args: {
    locationId: '1',
    modelValue: true,
    editable: true,
  },
};
