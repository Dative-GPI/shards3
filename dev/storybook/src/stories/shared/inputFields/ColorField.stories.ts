import type { Meta, StoryObj } from '@storybook/vue3';

import { VForm } from 'vuetify/lib/components/index.mjs';

import FSColorField from "@dative-gpi/foundation-shared-components/components/FSColorField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/ColorField',
  component: FSColorField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSColorField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: "#FF0000",
      value2: "#00FF12",
      value3: "#0030FF",
      value4: "#FF10FA"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSColorField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSColorField
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :editable="false"
        :opacityValue="0.5"
        :modelValue="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        description="This is a description."
        label="Color"
        :editable="false"
        :hideHeader="true"
        v-model="args.value4"
      />
    </FSCol>`
  })
}