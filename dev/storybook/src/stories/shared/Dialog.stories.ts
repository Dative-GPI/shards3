import type { Meta, StoryObj } from '@storybook/vue3';

import FSTranslateField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateField.vue";
import FSDialogMultiForm from "@dative-gpi/foundation-shared-components/components/FSDialogMultiForm.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSDialogRemove from "@dative-gpi/foundation-shared-components/components/FSDialogRemove.vue";
import FSDialogForm from "@dative-gpi/foundation-shared-components/components/FSDialogForm.vue";
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

export const Submit: Story = {
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogSubmit, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        width="500px"
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSSpan>
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    </div>`
  })
}

export const Form: Story = {
  args: {
    value1: false,
    value2: false,
    value4: false,
    validation2: false,
    label1: "",
    label2: "",
    label4: ""
  },
  render: (args, { argTypes }) => ({
    components: { FSTranslateField, FSDialogForm, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
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
      

      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="() => args.value4 = true"
      />
      <FSDialogForm
        width="500px"
        title="No buttons dialog"
        :showCancelButton="false"
        :showSubmitButton="false"
        v-model="args.value4"
      >
        <template #body>
          <FSTranslateField
            label="Label 4"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label4"
          />
        </template>
      </FSDialogForm>      
    </div>`
  })
}

export const MultipleForm: Story = {
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true,
    label11: "",
    label12: ""
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { args };
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
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
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
    value1: false,
    removing1: false,
    value2: false,
    removing2: false,
    value3: false,
    removing3: false
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogRemove, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { args };
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