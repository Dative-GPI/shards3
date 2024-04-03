import type { Meta, StoryObj } from '@storybook/vue3';

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta = {
  title: 'Foundation/Shared/Button',
  component: FSButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSButton, FSIcon, FSSpan },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButton color="primary">
          <template #prepend>
            <FSIcon> mdi-plus-circle-outline </FSIcon>
          </template>
          <FSSpan> Create </FSSpan>
        </FSButton>
        <FSButton color="warning">
          <FSSpan> Disable </FSSpan>
        </FSButton>
        <FSButton color="error">
          <FSSpan> Remove </FSSpan>
          <template #append>
            <FSIcon> mdi-minus-circle-outline </FSIcon>
          </template>
        </FSButton>
        <FSButton color="success">
          <template #prepend>
            <FSIcon> mdi-pencil </FSIcon>
          </template>
        </FSButton>
        <FSButton :editable="false">
          <FSSpan> Enable </FSSpan>
        </FSButton>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="full"
          prependIcon="mdi-plus-circle-outline"
          label="Create"
        />
        <FSButton
          color="warning"
          variant="full"
          label="Disable"
        />
        <FSButton
          color="error"
          variant="full"
          appendIcon="mdi-minus-circle-outline"
          label="Remove"
        />
        <FSButton
          color="success"
          variant="full"
          prependIcon="mdi-pencil"
        />
        <FSButton
          variant="full"
          label="Enable"
          :editable="false"
        />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="icon"
          icon="mdi-plus-circle-outline"
        />
        <FSButton
          color="warning"
          variant="icon"
          icon="mdi-eye-off-outline"
        />
        <FSButton
          color="error"
          variant="icon"
          icon="mdi-minus-circle-outline"
        />
        <FSButton
          color="success"
          variant="icon"
          icon="mdi-pencil"
        />
        <FSButton
          variant="icon"
          icon="mdi-cancel"
          :editable="false"
        />
      </div>
    </div>`
  })
}

import FSButtonCancel from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCancel.vue";
import FSButtonCancelLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCancelLabel.vue";
import FSButtonCancelMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCancelMini.vue";
import FSButtonCancelIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCancelIcon.vue";
import FSButtonDuplicate from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonDuplicate.vue";
import FSButtonDuplicateLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonDuplicateLabel.vue";
import FSButtonDuplicateMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonDuplicateMini.vue";
import FSButtonDuplicateIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonDuplicateIcon.vue";
import FSButtonEdit from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEdit.vue";
import FSButtonEditLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEditLabel.vue";
import FSButtonEditMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEditMini.vue";
import FSButtonEditIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEditIcon.vue";
import FSButtonNext from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonNext.vue";
import FSButtonNextLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonNextLabel.vue";
import FSButtonNextMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonNextMini.vue";
import FSButtonNextIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonNextIcon.vue";
import FSButtonPrevious from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonPrevious.vue";
import FSButtonPreviousLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonPreviousLabel.vue";
import FSButtonPreviousMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonPreviousMini.vue";
import FSButtonPreviousIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonPreviousIcon.vue";
import FSButtonRedo from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRedo.vue";
import FSButtonRedoLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRedoLabel.vue";
import FSButtonRedoMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRedoMini.vue";
import FSButtonRedoIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRedoIcon.vue";
import FSButtonRemove from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemove.vue";
import FSButtonRemoveLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemoveLabel.vue";
import FSButtonRemoveMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemoveMini.vue";
import FSButtonRemoveIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemoveIcon.vue";
import FSButtonSave from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSave.vue";
import FSButtonSaveLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSaveLabel.vue";
import FSButtonSaveMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSaveMini.vue";
import FSButtonSaveIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSaveIcon.vue";
import FSButtonSearch from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSearch.vue";
import FSButtonSearchLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSearchLabel.vue";
import FSButtonSearchMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSearchMini.vue";
import FSButtonSearchIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonSearchIcon.vue";
import FSButtonUndo from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUndo.vue";
import FSButtonUndoLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUndoLabel.vue";
import FSButtonUndoMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUndoMini.vue";
import FSButtonUndoIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUndoIcon.vue";
import FSButtonUpdate from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUpdate.vue";
import FSButtonUpdateLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUpdateLabel.vue";
import FSButtonUpdateMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUpdateMini.vue";
import FSButtonUpdateIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonUpdateIcon.vue";
import FSButtonValidate from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonValidate.vue";
import FSButtonValidateLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonValidateLabel.vue";
import FSButtonValidateMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonValidateMini.vue";
import FSButtonValidateIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonValidateIcon.vue";


export const Predefined: Story = {
  render: () => ({
    components: {
      FSButtonCancel, FSButtonCancelLabel, FSButtonCancelMini, FSButtonCancelIcon,
      FSButtonDuplicate, FSButtonDuplicateLabel, FSButtonDuplicateMini, FSButtonDuplicateIcon,
      FSButtonEdit, FSButtonEditLabel, FSButtonEditMini, FSButtonEditIcon,
      FSButtonNext, FSButtonNextLabel, FSButtonNextMini, FSButtonNextIcon,
      FSButtonPrevious, FSButtonPreviousLabel, FSButtonPreviousMini, FSButtonPreviousIcon,
      FSButtonRedo, FSButtonRedoLabel, FSButtonRedoMini, FSButtonRedoIcon,
      FSButtonRemove, FSButtonRemoveLabel, FSButtonRemoveMini, FSButtonRemoveIcon,
      FSButtonSave, FSButtonSaveLabel, FSButtonSaveMini, FSButtonSaveIcon,
      FSButtonSearch, FSButtonSearchLabel, FSButtonSearchMini, FSButtonSearchIcon,
      FSButtonUndo, FSButtonUndoLabel, FSButtonUndoMini, FSButtonUndoIcon,
      FSButtonUpdate, FSButtonUpdateLabel, FSButtonUpdateMini, FSButtonUpdateIcon,
      FSButtonValidate, FSButtonValidateLabel, FSButtonValidateMini, FSButtonValidateIcon,
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButtonCancel />
        <FSButtonCancelLabel />
        <FSButtonCancelMini />
        <FSButtonCancelIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonDuplicate />
        <FSButtonDuplicateLabel />
        <FSButtonDuplicateMini />
        <FSButtonDuplicateIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonEdit />
        <FSButtonEditLabel />
        <FSButtonEditMini />
        <FSButtonEditIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonNext />
        <FSButtonNextLabel />
        <FSButtonNextMini />
        <FSButtonNextIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonPrevious />
        <FSButtonPreviousLabel />
        <FSButtonPreviousMini />
        <FSButtonPreviousIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonRedo />
        <FSButtonRedoLabel />
        <FSButtonRedoMini />
        <FSButtonRedoIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonRemove />
        <FSButtonRemoveLabel />
        <FSButtonRemoveMini />
        <FSButtonRemoveIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSave />
        <FSButtonSaveLabel />
        <FSButtonSaveMini />
        <FSButtonSaveIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearch />
        <FSButtonSearchLabel />
        <FSButtonSearchMini />
        <FSButtonSearchIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonUndo />
        <FSButtonUndoLabel />
        <FSButtonUndoMini />
        <FSButtonUndoIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonUpdate />
        <FSButtonUpdateLabel />
        <FSButtonUpdateMini />
        <FSButtonUpdateIcon />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonValidate />
        <FSButtonValidateLabel />
        <FSButtonValidateMini />
        <FSButtonValidateIcon />
      </div>
    </div>`
  })
}

import FSButtonFile from      "@dative-gpi/foundation-shared-components/components/buttons/FSButtonFile.vue";
import FSButtonFileLabel from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonFileLabel.vue";
import FSButtonFileMini from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonFileMini.vue";
import FSButtonFileIcon from  "@dative-gpi/foundation-shared-components/components/buttons/FSButtonFileIcon.vue";

export const File: Story = {
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSButtonFile, FSButtonFileLabel, FSButtonFileMini, FSButtonFileIcon },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px; align-items: center;">
        <FSButtonFile
          :readFile="false"
          @update:modelValue="value => args.value1 = value"
        />
        <div class="text-body">
          Uploaded file: {{ args.value1 ? args.value1.name : 'None' }}
        </div>
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <FSButtonFileLabel
          :readFile="false"
          @update:modelValue="value => args.value2 = value"
        />
        <div class="text-body">
          Uploaded file: {{ args.value2 ? args.value2.name : 'None' }}
        </div>
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <FSButtonFileMini
          :readFile="false"
          @update:modelValue="value => args.value3 = value"
        />
        <div class="text-body">
          Uploaded file: {{ args.value3 ? args.value3.name : 'None' }}
        </div>
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <FSButtonFileIcon
          :readFile="false"
          @update:modelValue="value => args.value4 = value"
        />
        <div class="text-body">
          Uploaded file: {{ args.value4 ? args.value4.name : 'None' }}
        </div>
      </div>
    </div>`
  })
}

export const Links: Story = {
  render: () => ({
    components: { FSButton },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSButton
        label="Using RouteLocation from vue-router"
        :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }"
      />
      <FSButton
        href="https://www.google.fr"
        label="Using Google URL"
      />
    </div>`
  })
}

import FSRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSRichTextField.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSForm from  "@dative-gpi/foundation-shared-components/components/FSForm.vue";
import FSText from  "@dative-gpi/foundation-shared-components/components/FSText.vue";

import { TextRules, ToggleRules } from "@dative-gpi/foundation-shared-components/models";

export const Submit: Story = {
  args: {
    args: {
      valid: false,
      text1: "",
      text2: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello there\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
      check1: false,
      textdefault: null,
      textRules: TextRules,
      toggleRules: ToggleRules
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSButton, FSForm, FSTextField, FSRichTextField, FSText, FSCheckbox },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSForm v-model="args.valid" variant="submit">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <FSText>
            Form validity: {{ args.valid }}
          </FSText>
          <FSTextField
            :hideHeader="false"
            :rules="[args.textRules.required()]"
            v-model="args.text1"
          />
          <FSRichTextField
            :hideHeader="false"
            :rules="[args.textRules.required()]"
            v-model="args.text2"
          />
          <div> {{ args.text2 }} </div>
          <FSCheckbox
            :rules="[args.toggleRules.required()]"
            label="Please check this checkbox"
            description="This checkbox is mandatory"
            v-model="args.check1"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
            <FSButton
              label="Clear form"
              @click="() => { args.text1 = ''; args.text2 = args.textdefault; }"
            />
          </div>
        </div>
      </FSForm>
    </div>`
  })
}