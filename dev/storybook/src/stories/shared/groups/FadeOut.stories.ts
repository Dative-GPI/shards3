import type { Meta, StoryObj } from '@storybook/vue3';

import FadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import Button from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import Col from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import Row from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/FadeOut',
  component: FadeOut,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FadeOut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { FadeOut, Button, Col, Row },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FadeOut v-bind="args" style="height: 250px;">
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    `,
  })
};

export const Large: Story = {
  args: {
    args: {
      maskHeight: 128
    }
  },
  render: (args, { argTypes }) => ({
    components: { FadeOut, Button, Col, Row },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <FadeOut v-bind="args" style="height: 250px;">
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    `,
  })
};