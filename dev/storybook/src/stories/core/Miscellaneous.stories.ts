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
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

export const InviteUserOrganisationForm: Story = {
  args: {
    args: {
      valid: false,
      name: "",
      roleId: null,
      roleType: 0,
      textRules: TextRules,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSForm, FSText, FSTextField, FSAutocompleteRole, FSButton },
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