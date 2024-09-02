import type { Meta, StoryObj } from '@storybook/vue3';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';
import type { AgendaEvent } from '@dative-gpi/foundation-shared-components/models/agendaEvent';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

const meta = {
  title: 'Foundation/Shared/Agenda',
  component: FSAgenda,
  tags: ['autodocs']
} satisfies Meta<typeof FSAgenda>;


const todayStart = new Date(useDateFormat().todayToEpoch()).setHours(0, 0, 0, 0);

const generatedEvents: Array<AgendaEvent> = [];

const beginHour = 8;
const endHour = 16.5;
const endMaintenance = 21;

for (let i = 0; i < 200; i++) {
  generatedEvents.push({
    id: `open${i}`,
    label: `Chalet ouvert`,
    icon: 'mdi-home-outline',
    iconBis: 'mdi-sync',
    color: 'success',
    start: todayStart + beginHour * 3600000 + (i - 100) * 86400000,
    end: todayStart + endHour * 3600000 + (i - 100) * 86400000
  });

  if(i % 7 === 4) {
    generatedEvents.push({
      id: `closed${i}`,
      label: `Chalet fermé`,
      icon: 'mdi-home-remove-outline',
      iconBis: 'mdi-sync',
      color: 'error',
      start: todayStart + endMaintenance * 3600000 + (i - 100) * 86400000,
      end: todayStart + beginHour * 3600000 + (i - 100 + 1) * 86400000
    });
    generatedEvents.push({
      id: `maintenance${i}`,
      label: `Maintenance`,
      icon: 'mdi-account-hard-hat-outline',
      iconBis: 'mdi-gesture-tap',
      color: 'warning',
      start: todayStart + endHour * 3600000 + (i - 100) * 86400000,
      end: todayStart + endMaintenance * 3600000 + (i - 100) * 86400000
    });
  } else {
    generatedEvents.push({
      id: `closedX${i}`,
      label: `Chalet fermé`,
      icon: 'mdi-home-remove-outline',
      iconBis: 'mdi-sync',
      color: 'error',
      start: todayStart + endHour * 3600000 + (i - 100) * 86400000,
      end: todayStart + beginHour * 3600000 + (i - 100 + 1) * 86400000
    });
  }

  


}

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      mode1: 'day',
      mode2: 'week',
      events1: [...generatedEvents],
      events2: [...generatedEvents],
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSAgenda, FSCard, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FSCol
        >
        <FSCard>
          <FSCol
            height="500px"
          >
            <FSAgenda
              width="300px"
              height="100%"
              :events="args.events1"
              v-model:mode="args.mode1"
            />
          </FSCol>
        </FSCard>
        <FSCol
          height="700px"
        >
          <FSAgenda
            height="100%"
            :events="args.events2"
            v-model:mode="args.mode2"
          />
        </FSCol>
      </FSCol>`,
  })
}