import{F as i}from"./FSRichTextField-25ba3ae6.js";import{_ as a}from"./FSCol-439c812a.js";import"./vue.esm-bundler-857e5af7.js";import"./FSTextField-16a79c60.js";import"./VField-9dc825df.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-e30f1dcc.js";import"./css-ab2bdb81.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./VSpacer-37a4cd9a.js";import"./useRender-d5beceb3.js";import"./index-d6be2044.js";import"./transition-2a27d0f7.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./tag-7bd029e5.js";import"./density-69cd8efb.js";import"./dimensions-d7f5c5ad.js";import"./loader-b99105cf.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./rounded-67c03651.js";import"./VDefaultsProvider-51a3a301.js";import"./forwardRefs-e658ad70.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSCard-c144a688.js";import"./FSIcon-faf0e444.js";import"./useRules-b3d475c7.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./VDivider-6ea2ea72.js";const W={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(n,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
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
