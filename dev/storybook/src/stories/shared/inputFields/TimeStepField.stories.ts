import type { Meta, StoryObj } from '@storybook/vue3';

import FSTimeStepField from "@dative-gpi/foundation-shared-components/components/fields/FSTimeStepField.vue";
import FSForm from "@dative-gpi/foundation-shared-components/components/FSForm.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import { TimeRules } from "@dative-gpi/foundation-shared-components/models";

const meta = {
  title: 'Foundation/Shared/Input fields/TimeStepField',
  component: FSTimeStepField,
  tags: ['autodocs'],
} satisfies Meta<typeof FSTimeStepField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: { unit: 2, value: 0 },
      value2: { unit: 4, value: 1 },
      value3: { unit: 5, value: 1 },
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTimeStepField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`
  })
}