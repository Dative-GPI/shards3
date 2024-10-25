import type { Meta, StoryObj } from '@storybook/vue3';
import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta: Meta<typeof FSSlideGroup> = {
  title: 'Foundation/Shared/Global/Containers/SlideGroup',
  component: FSSlideGroup,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSlideGroup, FSRow },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    `,
  }),
  args: {
    width: '600px',
    height: 'fit-content',
  },
};

export const RowHug: Story = {
  render: (args) => ({
    components: { FSSlideGroup, FSRow },
    setup() {
      return { args };
    },
    template: `
      <FSRow
        width="hug"
      >
        <FSSlideGroup 
          :height="args.height"
        >
          <FSRow style="background-color: palegreen;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </FSRow>
    `,
  }),
  args: {
  },
};
