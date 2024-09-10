import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseCommentsList from "@dative-gpi/foundation-core-components/components/lists/comments/FSBaseCommentsList.vue";
import FSCommentField from "@dative-gpi/foundation-shared-components/components/fields/FSCommentField.vue";
import FSCommentTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSCommentTileUI.vue";


const meta: Meta<typeof FSBaseCommentsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseCommentsList',
  component: FSBaseCommentsList,
  subcomponents: { FSCommentTileUI, FSCommentField },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseCommentsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    `,
  }),
  args: {
    allowAlertComment: true,
    commentFilters: {
      alertId: "1",
    }
  },
};
