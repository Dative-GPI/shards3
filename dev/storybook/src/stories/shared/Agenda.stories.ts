import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';
import type { FSAgendaEvent } from '@dative-gpi/foundation-shared-components/models';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSAgendaHorizontalEvent from '@dative-gpi/foundation-shared-components/components/agenda/FSAgendaHorizontalEvent.vue';
import FSAgendaDialogCalendar from '@dative-gpi/foundation-shared-components/components/agenda/FSAgendaDialogCalendar.vue';
import FSAgendaHoursCol from '@dative-gpi/foundation-shared-components/components/agenda/FSAgendaHoursCol.vue';
import FSAgendaHoursRow from '@dative-gpi/foundation-shared-components/components/agenda/FSAgendaHoursRow.vue';
import FSAgendaVerticalEvent from '@dative-gpi/foundation-shared-components/components/agenda/FSAgendaVerticalEvent.vue';
import FSSelectAgendaMode from '@dative-gpi/foundation-shared-components/components/agenda/FSSelectAgendaMode.vue';

const meta: Meta<typeof FSAgenda> = {
  title: 'Foundation/Shared/Agenda',
  component: FSAgenda,
  subcomponents: {
    FSAgendaDialogCalendar,
    FSAgendaHorizontalEvent,
    FSAgendaVerticalEvent,
    FSAgendaHoursCol,
    FSAgendaHoursRow,
    FSSelectAgendaMode,
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['day', 'week', 'month'],
      description: 'Mode of the agenda view',
    },
    events: {
      description: 'Array of events to be displayed in the agenda',
      table: {
        type: {
          summary: 'Array<FSAgendaEvent>',
        },
      },
    },
    'update:mode': { action: 'update:mode' },
    'click:eventId': { action: 'click:eventId' },
  },
};

const todayStart = new Date(useDateFormat().todayToEpoch()).setHours(0, 0, 0, 0);

const generatedEvents: Array<FSAgendaEvent> = [];

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

  if (i % 7 === 4) {
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

const Template: Story = {
  render: (args) => ({
    components: { FSAgenda, FSCard, FSCol },
    setup() {
      return { args };
    },
    template: `
      <FSCol>
        <FSAgenda 
          v-bind="args"
          v-model:mode="args.mode"
          @update:mode="args['update:mode']"
          @click:eventId="args['click:eventId']"
        />
      </FSCol>
    `,
  }),
};

// Définition des stories avec affichage du code
export const Default: Story = {
  ...Template,
  args: {
    mode: 'week',
    height: '800px',
    width: '100%',
    loading: false,
    events: [...generatedEvents],
    'update:mode': action('update:mode'),
    'click:eventId': action('click:eventId'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<FSCol>
  <FSAgenda 
    v-bind="args"
    v-model:mode="args.mode"
    @update:mode="args['update:mode']"
    @click:eventId="args['click:eventId']"
  />
</FSCol>`,
      },
    },
  },
};

export const DayView: Story = {
  ...Template,
  args: {
    mode: 'day',
    width: '100%',
    height: '100%',
    events: [...generatedEvents],
    'update:mode': action('update:mode'),
    'click:eventId': action('click:eventId'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<FSCol>
  <FSAgenda 
    v-bind="args"
    v-model:mode="args.mode"
    @update:mode="args['update:mode']"
    @click:eventId="args['click:eventId']"
  />
</FSCol>`,
      },
    },
  },
};

export const WeekView: Story = {
  ...Template,
  args: {
    mode: 'week',
    width: '100%',
    height: '100%',
    events: [...generatedEvents],
    'update:mode': action('update:mode'),
    'click:eventId': action('click:eventId'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<FSCol>
  <FSAgenda 
    v-bind="args"
    v-model:mode="args.mode"
    @update:mode="args['update:mode']"
    @click:eventId="args['click:eventId']"
  />
</FSCol>`,
      },
    },
  },
};

export const MonthView: Story = {
  ...Template,
  args: {
    mode: 'month',
    width: '100%',
    height: '100%',
    events: [...generatedEvents],
    'update:mode': action('update:mode'),
    'click:eventId': action('click:eventId'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<FSCol>
  <FSAgenda 
    v-bind="args"
    v-model:mode="args.mode"
    @update:mode="args['update:mode']"
    @click:eventId="args['click:eventId']"
  />
</FSCol>`,
      },
    },
  },
};
