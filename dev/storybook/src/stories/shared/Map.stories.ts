import type { Meta, StoryObj } from '@storybook/vue3';

import FSMap from "@dative-gpi/foundation-shared-components/components/FSMap.vue";

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
      location1: {
        name: "lyon",
        label: "Lyon",
        lat: 45.74,
        lng: 4.84,
        icon: "mdi-home",
        color: "red"
      },
      location2: {
        name: "lyon",
        label: "Lyon",
        lat: 45.74,
        lng: 4.84,
        icon: "mdi-home",
        color: "red"
      },
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
        :modelValue="[args.location1]"
      />
      <FSMap
        height="200px"
        selectedLayer="light"
        :editable="false"
        :showLayerChoice="false"
        :modelValue="[args.location2]"
      />
    </div>`
  })
}