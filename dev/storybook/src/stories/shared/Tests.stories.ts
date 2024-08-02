import type { Meta, StoryObj } from '@storybook/vue3';

import FSIconField from '@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue';
import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSWindow from "@dative-gpi/foundation-shared-components/components/FSWindow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSTabs from "@dative-gpi/foundation-shared-components/components/FSTabs.vue";
import FSTab from "@dative-gpi/foundation-shared-components/components/FSTab.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Tests',
  component: FSTabs,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      tab1: 0,
      tab2: 0
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTabs, FSTab, FSText, FSWindow, FSCol, FSFadeOut, FSSlideGroup, FSButton, FSIconField },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    `,
  })
};