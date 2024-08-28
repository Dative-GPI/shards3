import type { Meta, StoryObj } from '@storybook/vue3';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';

const meta = {
  title: 'Foundation/Shared/Agenda',
  component: FSAgenda,
  tags: ['autodocs']
} satisfies Meta<typeof FSAgenda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      mode1: 'week',
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
          v-model:mode="args.mode1"
        />
      </FSCol>`,
  })
}