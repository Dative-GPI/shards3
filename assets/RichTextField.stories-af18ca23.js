import{F as i}from"./FSRichTextField-1a73a4b6.js";import{_ as a}from"./FSCol-76ddd6d9.js";import"./vue.esm-bundler-7c237656.js";import"./FSTextField-413ac9ce.js";import"./VField-86f2cf98.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-0e15f868.js";import"./css-aa928277.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./VSpacer-84430db1.js";import"./useRender-e0e7d9de.js";import"./index-09a2de27.js";import"./transition-e42cd317.js";import"./VLabel-236d5849.js";import"./VInput-eed42ecd.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./tag-7dab75b7.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./FSIcon-5ad13b7e.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./VDivider-5d036829.js";const W={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(n,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const X=["Variations"];export{t as Variations,X as __namedExportsOrder,W as default};
