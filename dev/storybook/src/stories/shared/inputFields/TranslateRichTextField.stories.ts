import type { Meta, StoryObj } from '@storybook/vue3';

import FSTranslateRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateRichTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/TranslateRichTextField',
  component: FSTranslateRichTextField,
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
    "onUpdate:translations": { action: "update:translations" },
    "onUpdate:translationsExpanded": { action: "update:translationsExpanded" }
  },
} satisfies Meta<typeof FSTranslateRichTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    translationsExpanded: false,
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Click \",\"type\":\"text\",\"version\":1},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"here\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":\"\",\"url\":\"https://www.dative-gpi.com/\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" to visit a marvelous website\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
    translations: [],
    variableReferences: [{ code: "temperature", defaultValue: 0, typeName: "number" }, { code: "weather", defaultValue: "XXX", typeName: "string" }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'label',
    description: 'This is a rich text field',
  },
  render: (args, { argTypes }) => ({
    components: { FSTranslateRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`
  })
}

export const TranslationObject: Story = {
  args: {
    translationsExpanded: false,
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Click \",\"type\":\"text\",\"version\":1},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"here\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":\"\",\"url\":\"https://www.dative-gpi.com/\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" to visit a marvelous website\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
    translations: [{"text":{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"tag":"h1","type":"heading","format":"center","indent":0,"version":1,"children":[{"mode":"normal","text":"Une belle maison","type":"text","style":"","detail":0,"format":0,"version":1}],"direction":"ltr"},{"type":"paragraph","format":"","indent":0,"version":1,"children":[{"mode":"normal","text":"Une belle maison est une ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"villa française","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" avec un immense ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"jardin","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":", entourée de verdure luxuriante et de ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"fleurs","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" éclatantes. La villa possède une élégante ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"façade en pierre","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" et de grandes ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"fenêtres","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.","type":"text","style":"","detail":0,"format":0,"version":1}],"direction":"ltr"},{"type":"paragraph","format":"","indent":0,"version":1,"children":[{"mode":"normal","text":"À l'intérieur, la villa offre de ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"hauts plafonds","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":", des ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"poutres en bois","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" et un mobilier ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"rustique","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" et chaleureux. La ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"terrasse","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" extérieure est idéale pour dîner, et une ","type":"text","style":"","detail":0,"format":0,"version":1},{"mode":"normal","text":"piscine","type":"text","style":"","detail":0,"format":1,"version":1},{"mode":"normal","text":" scintillante invite à la détente lors des journées ensoleillées.","type":"text","style":"","detail":0,"format":0,"version":1}],"direction":"ltr"}],"direction":"ltr"}},"languageCode":"fr-FR"},{"text":null,"languageCode":"it-IT"},{"text":null,"languageCode":"en-GB"},{"text":null,"languageCode":"es-ES"}],
    variableReferences: [{ code: "temperature", defaultValue: 0, typeName: "number" }, { code: "weather", defaultValue: "XXX", typeName: "string" }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'text',
    description: 'This is a rich text field',
  },
  render: (args, { argTypes }) => ({
    components: { FSTranslateRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`
  })
}