import type { Meta, StoryObj } from '@storybook/vue3';

import FSMap from "@dative-gpi/foundation-shared-components/components/map/FSMap.vue";

const meta = {
  title: 'Foundation/Shared/Map',
  component: FSMap,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      locations1: [{
        name: "lyon",
        label: "Lyon",
        lat: 45.74,
        lng: 4.84,
        icon: "mdi-home",
        color: "red"
      }],
      locations2: [{
        name: "lyon",
        label: "Lyon",
        lat: 45.74,
        lng: 4.84,
        icon: "mdi-home",
        color: "red"
      }],
      locations3: []
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSMap },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        :editable="true"
        v-model="args.locations1"
        height="600px"
      />
      
    </div>`
  })
}