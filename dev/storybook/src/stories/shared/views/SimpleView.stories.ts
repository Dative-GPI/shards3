import type { Meta, StoryObj } from '@storybook/vue3';

import FSSimpleView from "@dative-gpi/foundation-shared-components/components/views/FSSimpleView.vue";
import FSButtonEdit from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEdit.vue";
import FSButtonRemove from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemove.vue";
import FSLoader from '@dative-gpi/foundation-shared-components/components/FSLoader.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/views/SimpleView',
  component: FSSimpleView,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSSimpleView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'MIZAR CDC',
    breadcrumbs: [
      { title: 'Lorem', to: '/' },
      { title: 'MIZAR CDC', disabled: true }
    ],
  },
  render: (args, { argTypes }) => ({
    components: { FSSimpleView, FSButtonEdit, FSButtonRemove, FSLoader, FSCol },
    props: Object.keys(argTypes),
    setup() { 
      return { args };
    },
    template: `
      <FSSimpleView v-bind="args">
        <template #toolbar>
          <FSButtonEdit />
          <FSButtonRemove />
        </template>

        <FSCol gap="32px">
          <template v-for="n in 5" :key="n">
            <FSCol gap="16px">
              <FSLoader variant="text-h3" />
              <FSCol>
                <FSLoader v-for="j in 4" variant="text-body" />
              </FSCol>
            </FSCol>
          </template>
        </FSCol>
      </FSSimpleView>
    `
  })
}


export const Classic: Story = {
  args: {
    title: 'MIZAR CDC',
    breadcrumbs: [
      { title: 'Lorem', to: '/' },
      { title: 'MIZAR CDC', disabled: true }
    ],
  },
  render: (args, { argTypes }) => ({
    components: { FSSimpleView, FSButtonEdit, FSButtonRemove, FSLoader, FSCol },
    props: Object.keys(argTypes),
    setup() { 
      return { args };
    },
    template: `
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    `
  })
}