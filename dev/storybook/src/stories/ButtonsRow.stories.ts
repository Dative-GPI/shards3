import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonsRow from "@dative-gpi/foundation-shared-ui-components/components/FSButtonsRow.vue";
import Button from "@dative-gpi/foundation-shared-ui-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/ButtonsRow',
  component: ButtonsRow,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof ButtonsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { ButtonsRow, Button },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <ButtonsRow v-bind="args">
            <Button label="Button 1" />
            <Button label="Button 2" />
            <Button label="Button 3" />
        </ButtonsRow>
    `,
  })
};