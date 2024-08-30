import type { Meta, StoryObj } from '@storybook/vue3';

import FSButton from  "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSForm from  "@dative-gpi/foundation-shared-components/components/FSForm.vue";
import FSText from  "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta = {
  title: 'Foundation/Core/Miscellaneous',
  component: FSForm,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSForm>;

export default meta;
type Story = StoryObj<typeof meta>;

import { TextRules } from "@dative-gpi/foundation-shared-components/models";

import FSAutocompleteRole from '@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue';
import FSMagicConfigField from "@dative-gpi/foundation-shared-components/components/fields/FSMagicConfigField.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

export const TestForm: Story = {
  args: {
    args: {
      valid: false,
      name: "",
      roleId: null,
      roleType: 0,
      fieldLabel: "",
      fieldTranslations: [],
      fieldValue: "",
      fieldType: 3,
      textRules: TextRules,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSForm, FSText, FSTextField, FSAutocompleteRole, FSMagicConfigField, FSButton },
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
            label="Name"
            :rules="[args.textRules.required()]"
            :required="true"
            v-model="args.name"
          />
          <FSAutocompleteRole
            label="Role"
            :rules="[args.textRules.required(), args.textRules.phone()]"
            :required="true"
            v-model="args.roleId"
            v-model:type="args.roleType"
          />
          <FSMagicConfigField
            :type="args.fieldType"
            v-model:labelDefault="args.fieldLabel"
            v-model:translations="args.fieldTranslations"
            v-model="args.fieldValue"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>`
  })
}