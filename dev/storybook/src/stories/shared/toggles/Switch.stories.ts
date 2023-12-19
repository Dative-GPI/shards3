import type { Meta, StoryObj } from '@storybook/vue3';

import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta = {
  title: 'Foundation/Shared/Toggles/Switch',
  component: FSSwitch,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false,
      value6: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSSwitch, FSSpan },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSSwitch v-model:value="args.value1" />
      <FSSwitch v-model:value="args.value2" label="Second switch" />
      <FSSwitch v-model:value="args.value3" label="Third switch"  description="Description of the third switch" />
      <FSSpan> Second set of options (success color) </FSSpan>
      <FSSwitch v-model:value="args.value4" color="success" />
      <FSSwitch v-model:value="args.value5" color="success" label="Second switch" />
      <FSSwitch v-model:value="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSSwitch :value="false" :editable="false" />
      <FSSwitch :value="true"  :editable="false" label="Second switch (disabled)" />
      <FSSwitch :value="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
    </div>`
  })
}