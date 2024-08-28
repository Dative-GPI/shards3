import type { Meta, StoryObj } from '@storybook/vue3';

import FSAgenda from "@dative-gpi/foundation-shared-components/components/agenda/FSAgenda.vue";

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
    components: { FSAgenda },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSAgenda
        v-model:mode="args.mode1"
      />
    </div>`,
  })
}