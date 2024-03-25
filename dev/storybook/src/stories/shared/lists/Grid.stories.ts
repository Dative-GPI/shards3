import type { Meta, StoryObj } from '@storybook/vue3';

import FSGrid from "@dative-gpi/foundation-shared-components/components/lists/FSGrid.vue";

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
                        code: "permission1",
                        label: "Permission 1",
                        editable: false,
                        value: "1",
                        valueLeft: false,
                        valueRight: true,
                    }, {
                        code: "permission2",
                        label: "Permission 2",
                        editable: false,
                        value: "2",
                        valueLeft: true,
                        valueRight: false,
                    }, {
                        code: "permission3",
                        label: "Permission 3",
                        editable: false,
                        value: "3",
                        valueLeft: true,
                        valueRight: true,
                    }, {
                        code: "permission4",
                        label: "Permission 4",
                        editable: false,
                        value: "4",
                        valueLeft: true,
                        valueRight: true,
                    }, {
                        code: "permission5",
                        label: "Permission 5",
                        editable: false,
                        value: "5",
                        valueLeft: false,
                        valueRight: true,
                    }],
                },
                {
                    categoryLabel: "Admin permissions",
                    categoryCode: "admin-permissions",
                    items: [{
                        code: "permission1",
                        key: "",
                        label: "Permission 1",
                        editable: false,
                        value: "1",
                        valueLeft: false,
                        valueRight: true,
                    }, {
                        code: "permission2",
                        key: "",
                        label: "Permission 2",
                        editable: false,
                        value: "2",
                        valueLeft: true,
                        valueRight: true,
                    }, {
                        code: "permission3",
                        key: "",
                        label: "Permission 3",
                        editable: false,
                        value: "3",
                        valueLeft: true,
                        valueRight: true,
                    }, {
                        code: "permission4",
                        key: "",
                        label: "Permission 4",
                        editable: false,
                        value: "4",
                        valueLeft: true,
                        valueRight: true,
                    }, {
                        code: "permission5",
                        key: "",
                        label: "Permission 5",
                        editable: false,
                        value: "5",
                        valueLeft: false,
                        valueRight: true,
                    }],
                },]
        }
    },
    render: (args, { argTypes }) => ({
        components: { FSGrid },
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
        <!-- <template v-slot:item-value-right.admin-permissions-permission4="{ item }">
            <FSText>Custom value </FSText>
        </template>
        <template v-slot:item-value-left.teleport-permissions-permission3="{ item }">
            <FSText>Custom value </FSText>
        </template> -->
        </FSGrid>
      </div>
    </div>`
    })
}