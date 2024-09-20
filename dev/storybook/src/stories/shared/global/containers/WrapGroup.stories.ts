import type { Meta, StoryObj } from '@storybook/vue3';
import FSWrapGroup from "@dative-gpi/foundation-shared-components/components/FSWrapGroup.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta: Meta<typeof FSWrapGroup> = {
  title: 'Foundation/Shared/Global/Containers/WrapGroup',
  component: FSWrapGroup,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSWrapGroup, FSRow },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    `,
  }),
  args: {
    width: '600px',
    height: 'fit-content',
  },
};
