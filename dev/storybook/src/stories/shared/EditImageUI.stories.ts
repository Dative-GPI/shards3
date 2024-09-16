import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from "@storybook/addon-actions";

import FSEditImageUI from "@dative-gpi/foundation-shared-components/components/FSEditImageUI.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/Shared/EditImage/EditImageUI',
  component: FSEditImageUI,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'full']
    },
    "onUpdate:modelValue": { action: "update:modelValue" },
    "onUpdate:source": { action: "update:source" }
  }
} satisfies Meta<typeof FSEditImageUI>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageTdata = "/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQECBAUGAQEBAQIFBgUBAQECBAUGBQEBAgIFCAgGAQIDBQYKCgcCAwUGCAoLCQQGBwgKDAwKBwkJCQsKCgn/2wBDAQEBAQEBAgQHAQEBAgQFBgEBAQIDBgkBAQIDBQcJAQICBQYICQIEBQYICgsFBQgKCgwKBgYICgsMCgUFBgcJCgn/wAARCAAeAB4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+9eiivx2/4KieP/27vh5apqn7Pn7Tvwl8GeH5NQ8O/BSD4S6z4W+1y2WoePfH9jYvcN4l/tWDIsxe+aE+xDO3bvGdw1Mz9iaK8W+A3hL44aLYeX+0F8ZfC3x18QeY93/wnOj6P/ZsX9iSKu2P+xBe3nNuQ2W+0/Nn7oxz7TQIK+QP24P2Z9X+LOhx2GieKdN8Hzpqnh/4wtrF1GzrLZfD/wCIlhfNEIoyDnUorIxg5wpbJBAwfr+igYUUUUCA/9k=";

export const Default: Story = {
  args: {
    source: null,
    modelValue: imageTdata,
    height: 96,
    width: 96,
    label: 'Edit Image',
    variant: 'standard',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source"),
  },
  render: (args, { argTypes }) => ({
    components: { FSEditImageUI, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`
  })
}

export const VariationFull: Story = {
  args: {
    source: null,
    modelValue: null,
    height: 280,
    width: '100%',
    label: 'Edit Image',
    variant: 'full',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source"),
  },
  render: (args, { argTypes }) => ({
    components: { FSEditImageUI, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      >`
  })
}

export const VariationFullSource: Story = {
  args: {
    source: "https://www.dative-gpi.com/assets/images/illustration-home-opt.jpg",
    modelValue: null,
    height: 280,
    width: '300px',
    label: 'Edit Image',
    variant: 'full',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source"),
  },
  render: (args, { argTypes }) => ({
    components: { FSEditImageUI, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      >`
  })
}