import type { Meta, StoryObj } from '@storybook/vue3';

import FSGrid from "@dative-gpi/foundation-shared-components/components/lists/FSGrid.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

const meta = {
    title: 'Foundation/Shared/Lists/Grid',
    component: FSGrid,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }
    },
} satisfies Meta<typeof FSGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
        args:
        {
            gridItems:
                [{
                    categoryLabel: "Teleport permissions",
                    categoryCode: "teleport-permissions",
                    items: [{
                        label: "Permission 1",
                        code: "permission1",
                        value: "1"
                    }, {
                        label: "Permission 2",
                        code: "permission2",
                        value: "2"
                    }, {
                        label: "Permission 3",
                        code: "permission3",
                        value: "3",
                        hideDefault: true
                    }],
                },
                {
                    categoryLabel: "Admin permissions",
                    categoryCode: "admin-permissions",
                    items: [{
                        label: "Permission 1",
                        code: "permission1",
                        value: "1"
                    }, {
                        label: "Permission 2",
                        code: "permission2",
                        value: "2"
                    }, {
                        label: "Permission 3",
                        code: "permission3",
                        value: "3"
                    }, {
                        label: "Permission 4",
                        code: "permission4",
                        value: "4",
                        hideDefault: true
                    }],
                },
                {
                    categoryLabel: "Core permissions",
                    categoryCode: "core-permissions",
                    items: [{
                        label: "Permission 1",
                        code: "permission1",
                        value: "1"
                    }, {
                        label: "Permission 2",
                        code: "permission2",
                        value: "2"
                    }, {
                        label: "Permission 3",
                        code: "permission3",
                        value: "3"
                    }, {
                        label: "Permission 4",
                        code: "permission4",
                        value: "4"
                    }, {
                        label: "Permission 5",
                        code: "permission5",
                        value: "5"
                    }],
                },]
        }
    },
    render: (args, { argTypes }) => ({
        components: { FSGrid, FSIcon, FSText, FSButton },
        props: Object.keys(argTypes),
        setup() {
            return { ...args };
        },
        template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSGrid
          :gridItems="args.gridItems"
          :cols="2"
        >
            <template v-slot:item-value-right.teleport-permissions-permission3="{ item }">
                <FSText> {{ item.value }} </FSText>
            </template>
            <template v-slot:item-value-right.core-permissions-permission2="{ item }">
                <FSButton
                    color="warning"
                    label="Remove"
                />
            </template>
            <template v-slot:item-value-right.admin-permissions-permission4="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
            <template v-slot:item-value-left.admin-permissions-permission3="{ item }">
                <FSIcon
                    :color="item.value ? 'success' : 'error'"
                >
                    {{ item.value ? 'mdi-check-circle' : 'mdi-cancel-circle' }}
                </FSIcon>
            </template>
        </FSGrid>
      </div>
    </div>`
    })
}