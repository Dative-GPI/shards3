import type { Meta, StoryObj } from '@storybook/vue3';

import FSDispositionButton from "@dative-gpi/foundation-core-components/components/FSDispositionButton.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Core/DispositionButton',
  component: FSDispositionButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSDispositionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: [{
        id: "0",
        label: "Column A",
        index: 0,
        hidden: false
      }, {
        id: "1",
        label: "Column B",
        index: 1,
        hidden: false
      }, {
        id: "2",
        label: "Column C",
        index: 2,
        hidden: true
      }]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDispositionButton, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSDispositionButton
          v-model="args.value"
        />
        <FSRow>
          <div class="text-body">
            Columns: {{ args.value }}
          </div>
        </FSRow>
      </FSCol>
    </div>`
  })
}