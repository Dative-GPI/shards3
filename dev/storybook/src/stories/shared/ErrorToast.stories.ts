import type { Meta, StoryObj } from '@storybook/vue3';

import FSErrorToast from "@dative-gpi/foundation-shared-components/components/FSErrorToast.vue";
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';

const meta = {
  title: 'Foundation/Shared/ErrorToast',
  component: FSErrorToast,
  tags: ['autodocs'],
} satisfies Meta<typeof FSErrorToast>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Variations: Story = {
  args: {
    args: {
      code1: "errors.missingorganisation",
      code2: "errors.noadminprivilege",
      code3: "errors.alreadyregistereduser"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSErrorToast, FSRow, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          :borderRadius="0"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton color="error" variant="full">Delete</FSButton>
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>`
  })
}