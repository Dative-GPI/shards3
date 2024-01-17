import type { Meta, StoryObj } from '@storybook/vue3';

import FSFileButton from "@dative-gpi/foundation-shared-components/components/FSFileButton.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/FileButton',
  component: FSFileButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSFileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSFileButton, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Uploaded file: {{ args.value ? args.value.name : 'None' }}
          </div>
        </FSRow>
        <FSFileButton
          color="primary"
          prependIcon="mdi-upload-outline"
          :readFile="false"
          @update:modelValue="value => args.value = value"
        />
      </FSCol>
    </div>`
  })
}