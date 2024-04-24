import{F as i}from"./FSRichTextField-ba8e892f.js";import{_ as a}from"./FSCol-0a323bdc.js";import"./vue.esm-bundler-0c8496bd.js";import"./FSTextField-98f706c4.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./FSRow-547598b4.js";import"./css-0fb78066.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./useRules-a67d9042.js";import"./VSpacer-989c3452.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VDivider-bca4f35b.js";const Q={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(n,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
    <FSCol>
      <FSRichTextField
        label="Rich text"
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
    </FSCol>`})};var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello there\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      value2: "{\\"root\\":{\\"children\\":[{\\"children\\":[],\\"direction\\":null,\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":null,\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      value3: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSRichTextField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSRichTextField
        label="Rich text"
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
    </FSCol>\`
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const W=["Variations"];export{t as Variations,W as __namedExportsOrder,Q as default};
