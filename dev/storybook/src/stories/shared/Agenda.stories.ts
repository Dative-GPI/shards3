import type { Meta, StoryObj } from '@storybook/vue3';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';

const meta = {
  title: 'Foundation/Shared/Agenda',
  component: FSAgenda,
  tags: ['autodocs']
} satisfies Meta<typeof FSAgenda>;

const events = [
  {
    id: '1',
    label: 'Chalet ouvert',
    icon: 'mdi-home-outline',
    color: 'success',
    start: 1724832000000,
    end: 1724875200000
  },
  {
    id: '2',
    label: 'Chalet fermé',
    icon: 'mdi-home-outline',
    color: 'error',
    start: 1724875200000,
    end: 1724911200000
  }
]

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      mode1: 'week',
      events1: [...events]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAgenda, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FSCol
        height="700px"
        >
        <FSAgenda
          height="100%"
          :events="args.events1"
          v-model:mode="args.mode1"
        />
      </FSCol>`,
  })
}