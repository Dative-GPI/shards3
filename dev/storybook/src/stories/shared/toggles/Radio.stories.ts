import type { Meta, StoryObj } from '@storybook/vue3';

import FSRadioGroup from "@dative-gpi/foundation-shared-components/components/FSRadioGroup.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta = {
  title: 'Foundation/Shared/Toggles/Radio',
  component: FSRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: 0,
      value3: 1,
      options1: [
        { value: 0 },
        { value: 1, label: "Second option"  },
        { value: 2, label: "Third option", description: "Description of the third option"  }
    ],
      options2: [
        { value: 0 },
        { value: 1, label: "Second option"  },
        { value: 2, label: "Third option", description: "Description of the third option"  }
      ],
      options3: [
        { value: 0 },
        { value: 1, label: "Second option"  },
        { value: 2, label: "Third option", description: "Description of the third option"  }
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSRadioGroup, FSSpan },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSRadioGroup :values="args.options1" v-model:value="args.value1" />
      <FSSpan> Second set of options (warning color) </FSSpan>
      <FSRadioGroup :values="args.options2" v-model:value="args.value2" color="warning" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSRadioGroup :values="args.options3" v-model:value="args.value3" :editable="false" />
    </div>`
  })
}