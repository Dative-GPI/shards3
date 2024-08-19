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
      value1: "0 14 */3 * *",
      value2: "30 14 * * 4",
      value3: "35 22 15 * *",
      value4: "0 9 8-14 * 4",
      value5: "0 4 14 6 *"
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
        @update:modelValue="console.log($event)"
        v-model="args.value1"
      />
      <FSDivider />
      <FSPeriodicField
        v-model="args.value2"
      />
      <FSDivider />
      <FSPeriodicField
        v-model="args.value3"
      />
      <FSDivider />
      <FSPeriodicField
        v-model="args.value4"
      />
      <FSDivider />
      <FSPeriodicField
        :editable="false"
        v-model="args.value5"
      />
    </FSCol>`
  })
}