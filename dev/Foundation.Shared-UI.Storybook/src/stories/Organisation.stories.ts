import type { Meta, StoryObj } from '@storybook/vue3';
import Organisation from '@dative-gpi/foundation-shared-ui-components/components/Organisation.vue';

const meta = {
  title: 'Test/Organisation',
  component: Organisation,
  render: (args: any) => ({
    components: { Organisation },
    template: '<organisation />',
  }),
  
  tags: ['autodocs'],
} satisfies Meta<typeof Organisation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
  },
};