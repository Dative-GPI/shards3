import type { Meta, StoryObj } from '@storybook/vue3';

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

import { FSButtonsProps } from "@dative-gpi/foundation-shared-components/models/FSButtons";

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
                <FSIcon size="m">
                    mdi-plus-circle-outline
                </FSIcon>
            </template>
            <FSSpan font="text-button">
                Create
            </FSSpan>
        </FSButton>
        <FSButton color="warning">
            <FSSpan font="text-button">
                Disable
            </FSSpan>
        </FSButton>
        <FSButton color="error">
            <FSSpan font="text-button">
                Remove
            </FSSpan>
            <template #append>
                <FSIcon size="m">
                    mdi-minus-circle-outline
                </FSIcon>
            </template>
        </FSButton>
        <FSButton color="success">
            <template #prepend>
                <FSIcon size="m">
                    mdi-pencil
                </FSIcon>
            </template>
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
      </div>
    </div>`
  })
}

export const Search: Story = {
  args: FSButtonsProps.FSButtonSearch
}

export const SearchMini: Story = {
  args: FSButtonsProps.FSButtonSearchMini
}

export const SearchIcon: Story = {
  args: FSButtonsProps.FSButtonSearchIcon
}

export const Save: Story = {
  args: FSButtonsProps.FSButtonSave
}

export const SaveMini: Story = {
  args: FSButtonsProps.FSButtonSaveMini
}

export const SaveIcon: Story = {
  args: FSButtonsProps.FSButtonSaveIcon
}

export const Cancel: Story = {
  args: FSButtonsProps.FSButtonCancel
}

export const CancelMini: Story = {
  args: FSButtonsProps.FSButtonCancelMini
}

export const CancelIcon: Story = {
  args: FSButtonsProps.FSButtonCancelIcon
}

export const Remove: Story = {
  args: FSButtonsProps.FSButtonRemove
}

export const RemoveMini: Story = {
  args: FSButtonsProps.FSButtonRemoveMini
}

export const RemoveIcon: Story = {
  args: FSButtonsProps.FSButtonRemoveIcon
}