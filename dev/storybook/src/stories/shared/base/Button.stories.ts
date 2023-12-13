import type { Meta, StoryObj } from '@storybook/vue3';

import Button from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

import { FSButtonsProps } from "@dative-gpi/foundation-shared-components/defaults/FSButtons";

const meta = {
  title: 'Foundation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: FSButtonsProps.FSButtonSearch
}

export const SearchMini: Story = {
  args: FSButtonsProps.FSButtonSearchMini
}

export const Save: Story = {
  args: FSButtonsProps.FSButtonSave
}

export const SaveMini: Story = {
  args: FSButtonsProps.FSButtonSaveMini
}

export const Cancel: Story = {
  args: FSButtonsProps.FSButtonCancel
}

export const CancelMini: Story = {
  args: FSButtonsProps.FSButtonCancelMini
}

export const Remove: Story = {
  args: FSButtonsProps.FSButtonRemove
}

export const RemoveMini: Story = {
  args: FSButtonsProps.FSButtonRemoveMini
}