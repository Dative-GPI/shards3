import type { Meta, StoryObj } from '@storybook/vue3';

import FSErrorToast from "@dative-gpi/foundation-shared-components/components/FSErrorToast.vue";

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
      components: { FSErrorToast },
      props: Object.keys(argTypes),
      setup() {
        return { ...args };
      },
      template: `
      <div style="display: flex; gap: 10px;">
        <FSErrorToast
          :errorCode="args.code1"
        />
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </div>`
    })
  }