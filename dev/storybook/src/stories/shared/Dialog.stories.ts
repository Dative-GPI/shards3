import type { Meta, StoryObj } from '@storybook/vue3';

import FSDateRangeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateRangeField.vue";
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

export const Variations: Story = {
  args: {
    args: {
      buttons1: [...Array(5).keys()].map(i => ({
        id: i.toString(),
        label: `Choice number ${i + 1}`
      })),
      selected1: [],
      value1: false,
      value2: false,
      value3: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialog, FSButton, FSCard, FSToggleSet, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        width="400px"
        color="primary"
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-button">Toggle set</FSSpan>
        </template>
        <template #body>
          <FSToggleSet
            variant="wrap"
            buttonVariant="standard"
            activeVariant="standard"
            buttonColor="light"
            activeColor="primary"
            :multiple="false"
            :required="false"
            :values="args.buttons1"
            v-model="args.selected1"
          />
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        v-model="args.value2"
      >
        <template #header>
          <FSSpan font="text-button">General Grievous</FSSpan>
        </template>
        <template #body>
          <FSSpan> - General Kenobi!</FSSpan>
        </template>
        <template #footer>
          <FSSpan font="text-underline">(suprised)</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan> Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>`
  })
}

export const Submit: Story = {
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogSubmit, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        v-model="args.value1"
      />
      <FSButton
        color="primary"
        label="Dialog - title, subtitle, default actions"
        @click="() => args.value2 = true"
      />
      <FSDialogSubmit
        title="Star wars 2"
        subtitle="Attack of the clones"
        :actions="true"
        v-model="args.value2"
      />
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialogSubmit
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan > Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>`
  })
}

export const Form: Story = {
  args: {
    args: {
      value1: false,
      label1: "",
      label2: "",
      label3: "",
      label4: "",
      label5: "",
      label6: "",
      label7: "",
      label8: "",
      label9: "",
      label10: "",
      rightButton: () => {
        console.log("Form is valid");
      }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogForm, FSTextField, FSButton, FSCard, FSSpan, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:rightButton="args.rightButton"
        v-model="args.value1"
      >
        <template #body>
          <FSCol>
            <FSTextField
              label="Label 1"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label1"
            />
            <FSTextField
              label="Label 2"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label2"
            />
            <FSTextField
              label="Label 3"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label3"
            />
            <FSTextField
              label="Label 4"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label4"
            />
            <FSTextField
              label="Label 5"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label5"
            />
            <FSTextField
              label="Label 6"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label6"
            />
            <FSTextField
              label="Label 7"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label7"
            />
            <FSTextField
              label="Label 8"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label8"
            />
            <FSTextField
              label="Label 9"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label9"
            />
            <FSTextField
              label="Label 10"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label10"
            />
          </FSCol>
        </template>
      </FSDialogForm>
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
        @click:rightButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:rightButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:rightButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`
  })
}

export const ChainedDialogs: Story = {
  args: {
    args: {
      value1: false,
      date1: null,
      date2: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDialogSubmit, FSButton, FSDateField, FSDateRangeField, FSSpan, FSCard, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-h2"> Form </FSSpan>
        </template>
        <template #body>
          <FSCol>
            <FSDateField
              label="Date"
              v-model="args.date1"
            />
            <FSDateRangeField
              label="Date range"
              v-model="args.date2"
            />
          </FSCol>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Submit"
              @click="() => args.value1 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>`
  })
}