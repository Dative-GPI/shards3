import type { Meta, StoryObj } from '@storybook/vue3';

import FSPagination from "@dative-gpi/foundation-shared-components/components/FSPagination.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta = {
  title: 'Foundation/Shared/Pagination',
  component: FSPagination,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      page1: 0,
      pages1: 3
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSPagination, FSButton, FSText },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    `,
  })
};