import type { Meta, StoryObj } from '@storybook/vue3';

import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta = {
  title: 'Foundation/Shared/Toggles/Checkbox',
  component: FSCheckbox,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSCheckbox>;

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
    components: { FSCheckbox, FSSpan },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSCheckbox v-model:value="args.value1" />
      <FSCheckbox v-model:value="args.value2" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Second set of options (error color) </FSSpan>
      <FSCheckbox v-model:value="args.value4" color="error" />
      <FSCheckbox v-model:value="args.value5" color="error" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSCheckbox :value="false" :editable="false" />
      <FSCheckbox :value="true"  :editable="false" label="Second checkbox (disabled)" />
      <FSCheckbox :value="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
    </div>`
  })
}