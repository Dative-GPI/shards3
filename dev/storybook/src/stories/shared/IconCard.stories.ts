import type { Meta, StoryObj } from '@storybook/vue3';

import FSIconCard from "@dative-gpi/foundation-shared-components/components/FSIconCard.vue";
import { icon } from 'leaflet';

const meta = {
  title: 'Foundation/Shared/IconCard',
  component: FSIconCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSIconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        values: [{
          id: "1",
          iconColor: "#FF0000",
          iconVariant: "base",
          backgroundColor: ["#0000FF", "#FFFFFF"],
          backgroundVariant: "gradient"
        }, {
          id: "2",
        }, {
          id: "3",
          icon: "mdi-account",
          backgroundColor: ["#0000FF"],
          backgroundVariant: "standard"
        }, {
          id: "4",
          icon: "mdi-account",
          backgroundColor: ["#0000FF", "#FF0000"],
          backgroundVariant: "gradient"
        }, {
          id: "5",
          icon: "mdi-account",
          backgroundColor: ["#0000FF"],
          backgroundVariant: "full"
        }, {
          id: "6",
          icon: "mdi-account",
          backgroundColor: ["#FFFF8F"],
          backgroundVariant: "full",
        }, {
          id: "6",
          icon: "mdi-account",
          backgroundColor: ["#FFFF8F", "#FF0000"],
          backgroundVariant: "gradient",
        }, {
          id: "7",
          icon: "mdi-account",
          backgroundColor: ["#FFFF8F", "#FF0000", "#FFFF8F"],
          backgroundVariant: "gradient",
        }, {
          id: "8",
          icon: "mdi-account",
          backgroundColor: ["#FF0000", "#FFFF8F", "#FF0000"],
          backgroundVariant: "gradient",
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
    components: { FSIconCard },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSIconCard
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`
  })
}

