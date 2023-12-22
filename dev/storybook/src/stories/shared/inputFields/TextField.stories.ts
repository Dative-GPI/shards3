import type { Meta, StoryObj } from '@storybook/vue3';

import { VForm } from 'vuetify/lib/components/index.mjs';

import FSTextField from "@dative-gpi/foundation-shared-components/components/FSTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

import { TextRules } from "@dative-gpi/foundation-shared-components/models/FSTextFields";

const meta = {
  title: 'Foundation/Shared/Input fields/TextField',
  component: FSTextField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTextField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTextField v-model:value="args.value1" label="Text - dark color" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>`
  })
}

export const Rules: Story = {
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, { argTypes }) => ({
    components: { VForm, FSTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <v-form v-model="valid" v-lazy>
        <FSCol>
          <FSTextField
            label="Rules: required & min 10 characters"
            :rules="[args.rules.required(), args.rules.minLength(10)]"
            :required="true"
            v-model:value="args.value1"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: max 10 characters"
            :rules="[args.rules.maxLength(10)]"
            :required="true"
            v-model:value="args.value2"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: required & max 10 characters & min 10 characters & at least one uppercase & at least one lowercase & at least one digit"
            :rules="[args.rules.required(), args.rules.minLength(10), args.rules.maxLength(10), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
            :required="true"
            v-model:value="args.value3"
          />
        </FSCol>
      </v-form>
    </div>`
  })
}