import type { Meta, StoryObj } from '@storybook/vue3';

import FSPeriodicField from "@dative-gpi/foundation-shared-components/components/fields/periodicField/FSPeriodicField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSDivider from '@dative-gpi/foundation-shared-components/components/FSDivider.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/PeriodicField',
  component: FSPeriodicField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSPeriodicField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: "* * * * *",
      value2: "30 14 */2 * *",
      value3: "0 9 8-14 * 4"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSPeriodicField, FSCol, FSDivider },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSPeriodicField
        v-model="args.value1"
        defaultSelectedPeriod="yearly"
        @update:modelValue="console.log($event)"
      />
      <FSDivider />
      <FSPeriodicField
        v-model="args.value2"
        @update:modelValue="console.log($event)"
      />
      <FSDivider />
      <FSPeriodicField
        v-model="args.value3"
        defaultSelectedPeriod="monthly"
        @update:modelValue="console.log($event)"
      />
    </FSCol>`
  })
}