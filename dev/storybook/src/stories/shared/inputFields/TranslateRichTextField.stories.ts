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
    modelValue: {"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"A nice home","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Current weather : ","type":"text","version":1},{"type":"variable","version":1,"code":"weather","defaultValue":"XXX"},{"detail":0,"format":0,"mode":"normal","style":"","text":" (","type":"text","version":1},{"type":"variable","version":1,"code":"temperature","defaultValue":0},{"detail":0,"format":0,"mode":"normal","style":"","text":" °C)","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"A nice home is a ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"French villa ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"arched windows","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" that allow plenty of natural light to flood the spacious, open interiors. ","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}},
    translations: [{"text":{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Une belle maison","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Météo actuelle : ","type":"text","version":1},{"type":"variable","version":1,"code":"weather","defaultValue":"XXX"},{"detail":0,"format":0,"mode":"normal","style":"","text":" (","type":"text","version":1},{"type":"variable","version":1,"code":"temperature","defaultValue":0},{"detail":0,"format":0,"mode":"normal","style":"","text":" °C)","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Une belle maison est une ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"villa française","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" avec un immense ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"jardin","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":", entourée de verdure luxuriante et de ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"fleurs","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" éclatantes. La villa possède une élégante ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"façade en pierre","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" et de grandes ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"fenêtres","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"À l'intérieur, la villa offre de ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"hauts plafonds","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":", des ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"poutres en bois","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" et un mobilier ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"rustique","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" et chaleureux. La ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"terrasse","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" extérieure est idéale pour dîner, et une ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"piscine","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" scintillante invite à la détente lors des journées ensoleillées.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}},"languageCode":"fr-FR"},{"text":null,"languageCode":"it-IT"},{"text":null,"languageCode":"en-GB"},{"text":null,"languageCode":"es-ES"}],
    variableReferences: [{ code: "temperature", defaultValue: 0, label: "Température" }, { code: "weather", defaultValue: "XXX", label: "Weather" }],
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