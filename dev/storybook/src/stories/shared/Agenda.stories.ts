import type { Meta, StoryObj } from '@storybook/vue3';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';

const meta = {
  title: 'Foundation/Shared/Agenda',
  component: FSAgenda,
  tags: ['autodocs']
} satisfies Meta<typeof FSAgenda>;


const todayStart = new Date(useDateFormat().todayToEpoch()).setHours(0, 0, 0, 0);

const generatedEvents = [];

for (let i = 0; i < 200; i++) {
  generatedEvents.push({
    id: i.toString(),
    label: `Chalet ouvert`,
    icon: 'mdi-home-outline',
    color: 'success',
    start: todayStart + 8 * 3600000 + (i - 100) * 86400000,
    end: todayStart + 17.5 * 3600000 + (i - 100) * 86400000
  });
  generatedEvents.push({
    id: i.toString(),
    label: `Chalet fermé`,
    icon: 'mdi-home-outline',
    color: 'error',
    start: todayStart + 17.5 * 3600000 + (i - 100) * 86400000,
    end: todayStart + 8 * 3600000 + (i - 100 + 1) * 86400000
  });
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      mode1: 'week',
      events1: [...generatedEvents]
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