import type { Meta, StoryObj } from '@storybook/vue3';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSCalendarHeader from "@dative-gpi/foundation-shared-components/components/calendar/FSCalendarHeader.vue";
import FSCalendar from "@dative-gpi/foundation-shared-components/components/calendar/FSCalendarV2.vue";

const meta = {
  title: 'Foundation/Shared/Calendar',
  component: FSCalendarHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof FSCalendarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
  render: (args, { argTypes }) => ({
    components: { FSCol, FSCalendarHeader, FSCalendar },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FSCol>
        <FSCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSCalendar v-model:month="month" v-model:year="year" />
      </FSCol>    
    `
  })
}