import type { Meta, StoryObj } from '@storybook/vue3';

import FSRadioGroup from "@dative-gpi/foundation-shared-components/components/FSRadioGroup.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

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
    components: { FSRadioGroup, FSText },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`
  })
}