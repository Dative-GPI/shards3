import type { Meta, StoryObj } from '@storybook/vue3';

import Row from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import Col from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Global/Layout',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rows: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { Row, Col },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Row width="hug" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Row width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Row width="hug" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Row width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Row width="fill" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Row width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Row width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Row width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 50px;">
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="top-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="top-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="center-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="center-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="bottom-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="bottom-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="top-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="top-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="center-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="center-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="bottom-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="bottom-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="top-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="top-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="center-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="center-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Row align="bottom-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Row width="fill" height="fill" align="bottom-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Row>
          </div>
        </div>
      </div>
    </div>
    `
  })
}

export const Cols: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { Row, Col },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Col width="hug" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Col width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Col width="hug" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Col width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Col width="fill" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Col width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Col width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Col width="fill" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;Col width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <Col width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 50px;">
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="top-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="top-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="center-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="center-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="bottom-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="bottom-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="top-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="top-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="center-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="center-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="bottom-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="bottom-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="top-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="top-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="center-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="center-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;Col align="bottom-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <Col width="fill" height="fill" align="bottom-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </Col>
          </div>
        </div>
      </div>
    </div>
    `
  })
}

export const Compositions: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
  components: { Row, Col },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 80px; margin-bottom: 80px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Col width="fill" height="fill"&gt;
  &lt;Row width="hug"  height="hug"  /&gt;
  &lt;Row width="fill" height="hug"  /&gt;
  &lt;Row width="hug"  height="fill" /&gt;
&lt;/Col&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Col width="fill" height="fill" style="background-color: plum; padding: 4px;">
          <Row width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </Col>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Col width="fill" height="hug"&gt;
  &lt;Row width="hug"  height="hug"  /&gt;
  &lt;Row width="fill" height="hug"  /&gt;
  &lt;Row width="hug"  height="fill" /&gt;
&lt;/Col&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Col width="fill" height="hug" style="background-color: plum; padding: 4px;">
          <Row width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </Col>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Col width="hug" height="fill"&gt;
  &lt;Row width="hug"  height="hug"  /&gt;
  &lt;Row width="fill" height="hug"  /&gt;
  &lt;Row width="hug"  height="fill" /&gt;
&lt;/Col&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Col width="hug" height="fill" style="background-color: plum; padding: 4px;">
          <Row width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
          <Row width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Row>
        </Col>
      </div>
    </div>
  </div>
  <div style="display: flex; gap: 80px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Row width="fill" height="fill"&gt;
  &lt;Col width="hug"  height="hug"  /&gt;
  &lt;Col width="fill" height="hug"  /&gt;
  &lt;Col width="hug"  height="fill" /&gt;
&lt;/Row&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Row width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
          <Col width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </Row>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Row width="fill" height="hug"&gt;
  &lt;Col width="hug"  height="hug"  /&gt;
  &lt;Col width="fill" height="hug"  /&gt;
  &lt;Col width="hug"  height="fill" /&gt;
&lt;/Row&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Row width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
          <Col width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </Row>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;Row width="hug" height="fill"&gt;
  &lt;Col width="hug"  height="hug"  /&gt;
  &lt;Col width="fill" height="hug"  /&gt;
  &lt;Col width="hug"  height="fill" /&gt;
&lt;/Row&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <Row width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
          <Col width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
          <Col width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
  `
})
}