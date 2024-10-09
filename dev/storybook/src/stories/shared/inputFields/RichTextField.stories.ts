import type { Meta, StoryObj } from '@storybook/vue3';

import FSRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSRichTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/RichTextField',
  component: FSRichTextField,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSRichTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    args: {
      value1: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"name\",\"defaultValue\":\"defaultName\"}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"heading\",\"version\":1,\"tag\":\"h1\"},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"I come from \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"country\",\"defaultValue\":\"World\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" and I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"age\",\"defaultValue\":\"defaultAge\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\".\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
      variablePreset1: [{ code: "name", defaultValue: "DefaultName", label: "Name" }, { code: "age", defaultValue: "18", label: "Age" }, { code: "country", defaultValue: "World", label: "Country" }, { code: "city", defaultValue: "Capital", label: "City" }],
      variableValues1: { name: "John", age: 25 },
      value2: "{\"root\":{\"children\":[{\"children\":[],\"direction\":null,\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":null,\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
      value3: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Click \",\"type\":\"text\",\"version\":1},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"here\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":\"\",\"url\":\"https://www.dative-gpi.com/\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" to visit a marvelous website\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
      value4: "{\"root\": {\"type\": \"root\", \"children\": [{\"type\": \"paragraph\", \"children\": [{\"text\": \"Recette pour environ 50 baguettes tradition avec le process Paneotrad\", \"type\": \"text\"}]}, {\"type\": \"paragraph\", \"children\": []}, {\"tag\": \"h5\", \"type\": \"heading\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [{\"mode\": \"normal\", \"text\": \"Ingrédients\", \"type\": \"text\", \"style\": \"\", \"detail\": 0, \"format\": 0, \"version\": 1}], \"direction\": \"ltr\"}, {\"type\": \"paragraph\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [], \"direction\": null}, {\"type\": \"paragraph\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [{\"mode\": \"normal\", \"text\": \"10 kg de farine de Tradition T65\", \"type\": \"text\", \"style\": \"\", \"detail\": 0, \"format\": 0, \"version\": 1}], \"direction\": \"ltr\"}, {\"type\": \"paragraph\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [{\"mode\": \"normal\", \"text\": \"6,8 L + 0,4 L d'eau\", \"type\": \"text\", \"style\": \"\", \"detail\": 0, \"format\": 0, \"version\": 1}], \"direction\": \"ltr\"}, {\"type\": \"paragraph\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [{\"mode\": \"normal\", \"text\": \"70 g de levure\", \"type\": \"text\", \"style\": \"\", \"detail\": 0, \"format\": 0, \"version\": 1}], \"direction\": \"ltr\"}, {\"type\": \"paragraph\", \"format\": \"\", \"indent\": 0, \"version\": 1, \"children\": [{\"mode\": \"normal\", \"text\": \"180 g de sel\", \"type\": \"text\", \"style\": \"\", \"detail\": 0, \"format\": 0, \"version\": 1}], \"direction\": \"ltr\"}]}}"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSRichTextField
        label="Rich text"
        :variableReferences="args.variablePreset1"
        v-model="args.value4"
      />
      <FSRichTextField
        label="Rich text"
        variant="readonly"
        :variableValues="args.variableValues1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Rich text, 2 rows"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Uneditable rich text, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Readonly rich text"
        description="Readonly description"
        variant="readonly"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Readonly rich text"
        emptyLabel="Empty label (modelValue linked with the Rich text, 2 rows modelValue)"
        variant="readonly"
        v-model="args.value2"
      />
    </FSCol>`
  })
}


export const Variables: Story = {
  args: {
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"name\",\"defaultValue\":\"defaultName\"}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"heading\",\"version\":1,\"tag\":\"h1\"},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"I come from \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"country\",\"defaultValue\":\"World\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" and I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"age\",\"defaultValue\":\"defaultAge\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\".\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
    variableReferences: [{ code: "name", defaultValue: "DefaultName", label: "Name" }, { code: "age", defaultValue: "18", label: "Age" }, { code: "country", defaultValue: "World", label: "Country" }, { code: "city", defaultValue: "Capital", label: "City" }],
    variableValues: { name: "John", age: "25" },
  },
  render: (args, { argTypes }) => ({
    components: { FSRichTextField, FSCol, FSText, FSTextField, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol
      gap="24px"
    >
      <FSCol>
        <FSRichTextField
          :variableReferences="args.variableReferences"
          v-model="args.modelValue"
        />
      </FSCol>
      <FSCol>
        <FSText
          font="text-button">
          Variables
        </FSText>
        <FSRow>
          <FSTextField
            v-for="variable in args.variableReferences"
            :key="variable.code"
            :label="variable.label"
            v-model="args.variableValues[variable.code]"
          />
        </FSRow>
      </FSCol>
      <FSCol>
        <FSText
          font="text-button">
          Result
        </FSText>
        <FSRichTextField
          variant="readonly"
          :variableValues="args.variableValues"
          :modelValue="args.modelValue"
        />
      </FSCol>
    </FSCol>`
  })
}