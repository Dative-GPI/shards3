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
export const Aliases: Story = {
  render: () => ({
    components: { FSButton, FSIcon, FSSpan },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButtonSearch />
        <FSButtonRemove />
        <FSButtonSave />
        <FSButtonCancel />
        <FSButtonDocumentation />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchMini />
        <FSButtonRemoveMini />
        <FSButtonSaveMini />
        <FSButtonCancelMini />
        <FSButtonDocumentationMini />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchIcon />
        <FSButtonRemoveIcon />
        <FSButtonSaveIcon />
        <FSButtonCancelIcon />
        <FSButtonDocumentationIcon />
      </div>
    </div>`
  })
}