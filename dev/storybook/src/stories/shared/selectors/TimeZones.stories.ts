import type { Meta, StoryObj } from '@storybook/vue3';

import FSSelectTimeZone from "@dative-gpi/foundation-shared-components/components/selects/FSSelectTimeZone.vue";

const meta = {
  title: 'Foundation/Shared/Selectors/SelectTimeZone',
  component: FSSelectTimeZone,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSSelectTimeZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
      timeZone1 :null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSSelectTimeZone },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <FSSelectTimeZone
          v-model="args.timeZone1"
        />
    `,
  })
};