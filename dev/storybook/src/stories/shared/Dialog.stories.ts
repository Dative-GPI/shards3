import type { Meta, StoryObj } from '@storybook/vue3';

import FSDateRangeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateRangeField.vue";
import FSDialogMultiForm from "@dative-gpi/foundation-shared-components/components/FSDialogMultiForm.vue";
import FSDateField from "@dative-gpi/foundation-shared-components/components/fields/FSDateField.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSDialogRemove from "@dative-gpi/foundation-shared-components/components/FSDialogRemove.vue";
import FSDialogForm from "@dative-gpi/foundation-shared-components/components/FSDialogForm.vue";
import FSToggleSet from "@dative-gpi/foundation-shared-components/components/FSToggleSet.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/Dialog',
  component: FSDialog,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    args: {
      value1: false,
      value2: false,
      validation2: false,
      label1: "",
      label2: ""
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogForm, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 1"
        subtitle="Fill the form"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label1"
          />
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 2"
        subtitle="Fill the form"
        :validation="args.validation2"
        @click:submitButton="() => {
          args.validation2 = true;
        }"
        @click:validateButton="() => {
          args.validation2 = false;
          args.value2 = false;
        }"
        v-model="args.value2"
      >
        <template #body>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label2"
          />
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    </div>`
  })
}

export const MultipleForm: Story = {
  args: {
    args: {
      value1: false,
      label1: "",
      label2: "",
      label3: ""
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>`
  })
}

export const Remove: Story = {
  args: {
    args: {
      value1: false,
      removing1: false,
      value2: false,
      removing2: false,
      value3: false,
      removing3: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogRemove, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:submitButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:submitButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:submitButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`
  })
}