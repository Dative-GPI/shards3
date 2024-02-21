import type { Meta, StoryObj } from '@storybook/vue3';

import { VForm } from 'vuetify/lib/components/index.mjs';

import FSTimeField from "@dative-gpi/foundation-shared-components/components/FSTimeField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import { DateRules } from "@dative-gpi/foundation-shared-components/models";

const meta = {
  title: 'Foundation/Shared/Input fields/TimeField',
  component: FSTimeField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: 66,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTimeField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSTimeField
        v-model="args.value1"
        editable="true"
      />
    </FSCol>`
  })
}

export const Rules: Story = {
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, { argTypes }) => ({
    components: { VForm, FSTimeField, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <v-form v-model="args.valid" v-lazy>
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`
  })
}