import type { Meta, StoryObj } from '@storybook/vue3';

import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

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
    components: { FSSwitch, FSText },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model:value="args.value1" />
        <FSSwitch v-model:value="args.value2" label="Second switch" />
        <FSSwitch v-model:value="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model:value="args.value4" color="success" />
        <FSSwitch v-model:value="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model:value="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :value="false" :editable="false" />
        <FSSwitch :value="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :value="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>`
  })
}