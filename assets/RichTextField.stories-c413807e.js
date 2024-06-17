import{F as i}from"./FSRichTextField-bd687323.js";import{_ as a}from"./FSCol-5ed907ac.js";import"./vue.esm-bundler-6f923154.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-64caadb9.js";import"./css-0cf2e273.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./FSIcon-93774118.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./VDivider-dfa46b18.js";const W={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(n,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
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
