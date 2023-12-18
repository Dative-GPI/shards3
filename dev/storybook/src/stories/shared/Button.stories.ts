import type { Meta, StoryObj } from '@storybook/vue3';

import Button from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import Icon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import Span from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

import { FSButtonsProps } from "@dative-gpi/foundation-shared-components/defaults/FSButtons";

const meta = {
  title: 'Foundation/Shared/Button',
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

export const PrependIcon: Story = {
  args: {
    args: {
        full: false,
        color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Button, Icon, Span },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex;">
        <Button v-bind="args">
            <template #prepend>
                <Icon size="m">
                    mdi-plus-circle-outline
                </Icon>
            </template>
            <Span font="text-button">
                Create
            </Span>
        </Button>
    </div>`
  })
}

export const AppendIcon: Story = {
  args: {
    args: {
        full: false,
        color: "warning"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Button, Icon, Span },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <v-container fluid class="pa-0 ma-0" style="display: flex;">
        <Button v-bind="args">
            <Span font="text-button">
                Remove
            </Span>
            <template #append>
                <Icon size="m">
                    mdi-minus-circle-outline
                </Icon>
            </template>
        </Button>
    </v-container>`
  })
}