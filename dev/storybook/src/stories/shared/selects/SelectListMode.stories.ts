import { ref, watch } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import FSSelectListMode from "@dative-gpi/foundation-shared-components/components/selects/FSSelectListMode.vue";

const meta = {
  title: 'Foundation/Shared/Selects/SelectListMode',
  component: FSSelectListMode,
  tags: ['autodocs'],
} satisfies Meta<typeof FSSelectListMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: (args) => ({
    components: { FSSelectListMode },
    setup() {
      const value = ref("iterator");

      console.log(args);

      watch(() => args.modelValue, () => {
        if(args.modelValue) {
          value.value = args.modelValue;
        }
      });

      return { args, value };
    },
    template: `<FSSelectListMode v-bind="args" v-model="value" />`
  })
}