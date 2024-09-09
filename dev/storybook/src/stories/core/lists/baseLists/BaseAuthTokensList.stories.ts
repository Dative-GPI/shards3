import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseAuthTokensList from "@dative-gpi/foundation-core-components/components/lists/authTokens/FSBaseAuthTokensList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseAuthTokensList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseAuthTokensList',
  component: FSBaseAuthTokensList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['authTokens1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseAuthTokensList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseAuthTokensList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'authTokens1',
  },
};
