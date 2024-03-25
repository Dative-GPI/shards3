import type { Meta, StoryObj } from '@storybook/vue3';

import FSEditImage from "@dative-gpi/foundation-shared-components/components/FSEditImage.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
    title: 'Foundation/Shared/EditImage',
    component: FSEditImage,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof FSEditImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
        args: {
            source: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        }
    },
    render: (args, { argTypes }) => ({
        components: { FSEditImage, FSCol, FSRow },
        props: Object.keys(argTypes),
        setup() {
            return { ...args };
        },
        template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSEditImage
          :value="args.source"
          @update:modelValue="(v) => { console.log(v) }"
        />
      </FSCol>
    </div>`
    })
}