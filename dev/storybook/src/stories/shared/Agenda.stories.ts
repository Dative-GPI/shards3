import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import { AgendaMode } from '@dative-gpi/foundation-shared-domain/enums';
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
      options: [AgendaMode.Day, AgendaMode.Week, AgendaMode.Month],
      description: 'Mode of the agenda view',
    },
    eventsSet: {
      control: { type: 'select' },
      options: ['mountainChalet1', 'mountainChalet2'],
      description: 'Set of events to display',
    },
    'update:mode': { action: 'update:mode' },
    'click:eventId': { action: 'click:eventId' },
  },
};

const todayStart = new Date(useDateFormat().todayToEpoch()).setHours(0, 0, 0, 0);

//#region Generate mountainChalet1

const generatedEventsMountainChalet1: Array<FSAgendaEvent> = [];
const startHour = 8;
const endHour = 16.5;
const endMaintenance = 21;
for (let i = 0; i < 200; i++) {
  generatedEventsMountainChalet1.push({
    id: `open${i}`,
    label: `Chalet ouvert`,
    icon: 'mdi-home-outline',
    iconBis: 'mdi-sync',
    color: 'success',
    start: todayStart + startHour * 3600000 + (i - 100) * 86400000,
    end: todayStart + endHour * 3600000 + (i - 100) * 86400000
  });

  if (i % 7 === 4) {
    generatedEventsMountainChalet1.push({
      id: `closed${i}`,
      label: `Chalet fermé`,
      icon: 'mdi-home-remove-outline',
      iconBis: 'mdi-sync',
      color: 'error',
      start: todayStart + endMaintenance * 3600000 + (i - 100) * 86400000,
      end: todayStart + startHour * 3600000 + (i - 100 + 1) * 86400000
    });
    generatedEventsMountainChalet1.push({
      id: `maintenance${i}`,
      label: `Maintenance`,
      icon: 'mdi-account-hard-hat-outline',
      iconBis: 'mdi-gesture-tap',
      color: 'warning',
      start: todayStart + endHour * 3600000 + (i - 100) * 86400000,
      end: todayStart + endMaintenance * 3600000 + (i - 100) * 86400000
    });
  } else {
    generatedEventsMountainChalet1.push({
      id: `closedX${i}`,
      label: `Chalet fermé`,
      icon: 'mdi-home-remove-outline',
      iconBis: 'mdi-sync',
      color: 'error',
      start: todayStart + endHour * 3600000 + (i - 100) * 86400000,
      end: todayStart + startHour * 3600000 + (i - 100 + 1) * 86400000
    });
  }
}

//#endregion

//#region Generate mountainChalet2
const generatedEventsMountainChalet2: Array<FSAgendaEvent> = [];
const nowYear = new Date().getFullYear();

for (let year = -10; year < 10; year++) {
  const previousYearEndWinter = new Date(nowYear + year, 3, 1).getTime();
  const startWinter = new Date(nowYear + year, 12, 1).getTime();
  const endWinter = new Date(nowYear + year + 1, 3, 1).getTime();
  
  generatedEventsMountainChalet2.push({
    id: `closedX${year}`,
    label: `Chalet fermé`,
    icon: 'mdi-home-remove-outline',
    iconBis: 'mdi-sync',
    color: 'error',
    start: previousYearEndWinter,
    end: startWinter
  });

  generatedEventsMountainChalet2.push({
    id: `opendX${year}`,
    label: `Chalet en marche`,
    icon: 'mdi-snowflake',
    iconBis: 'mdi-sync',
    color: 'primary',
    start: startWinter,
    end: endWinter
  });
}
//#endregion


const events = {
  mountainChalet1: [...generatedEventsMountainChalet1],
  mountainChalet2: [...generatedEventsMountainChalet2],
}

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => ({
    components: { FSAgenda, FSCard, FSCol },
    setup() {
      return { events, args };
    },
    template: `
      <FSCol>
        <FSAgenda 
          v-bind="args"
          v-model:mode="args.mode"
          v-model:start="args.start"
          v-model:end="args.end"
          :events="events[args.eventsSet]"
          @update:mode="args['update:mode']"
          @update:start="args['update:start']"
          @update:end="args['update:end']"
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
    mode: AgendaMode.Week,
    height: '800px',
    width: '100%',
    loading: false,
    eventsSet: 'mountainChalet1',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};

export const DayView: Story = {
  ...Template,
  args: {
    mode: AgendaMode.Day,
    width: '100%',
    height: '100%',
    eventsSet: 'mountainChalet2',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};

export const WeekView: Story = {
  ...Template,
  args: {
    mode: AgendaMode.Week,
    width: '100%',
    height: '100%',
    eventsSet: 'mountainChalet1',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};

export const DoubleWeekView: Story = {
  ...Template,
  args: {
    mode: AgendaMode.Week,
    width: '100%',
    height: '100%',
    start: todayStart - 86400000 * 7,
    end: todayStart + 86400000 * 7,
    eventsSet: 'mountainChalet1',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};


export const MonthView: Story = {
  ...Template,
  args: {
    mode: AgendaMode.Month,
    width: '100%',
    height: '100%',
    start: null,
    end: null,
    eventsSet: 'mountainChalet1',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};

export const DoubleMonthView: Story = {
  ...Template,
  args: {
    mode: AgendaMode.Month,
    width: '100%',
    height: '100%',
    start: todayStart - 86400000 * 31,
    end: todayStart + 86400000 * 31,
    eventsSet: 'mountainChalet2',
    'update:mode': action('update:mode'),
    'update:start': action('update:start'),
    'update:end': action('update:end'),
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
    v-model:start="args.start"
    v-model:end="args.end"
  />
</FSCol>`,
      },
    },
  },
};
