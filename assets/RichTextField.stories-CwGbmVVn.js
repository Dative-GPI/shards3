import{F as i}from"./FSRichTextField-BziNfWwC.js";import{_ as n}from"./FSCol-BA_LQqMv.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSAutocompleteField-DGGxUeq1.js";import"./FSSearchField-Cl72HC3-.js";import"./FSTextField-COs2079Q.js";import"./FSBaseField-W8_0_iOs.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-Bv0V9Qz7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSButton-B-GBc2hj.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSIcon-DBiV-GrJ.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./useTranslations-ByKtt_-5.js";import"./FSDialogMenu-gDsviTkt.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-CAagL5n1.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BHClSvbm.js";import"./FSWrapGroup-JiPztc6W.js";import"./FSCheckbox-BImK2siP.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-BPZTes3y.js";import"./VImg-B1oUXGM1.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-B30FjWD_.js";import"./VList-f6c9GJFN.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-SBcHh8Lg.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";const xe={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello I am ","type":"text","version":1},{"type":"variable","version":1,"code":"name","defaultValue":"defaultName"}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I come from ","type":"text","version":1},{"type":"variable","version":1,"code":"country","defaultValue":"World"},{"detail":0,"format":0,"mode":"normal","style":"","text":" and I am ","type":"text","version":1},{"type":"variable","version":1,"code":"age","defaultValue":"defaultAge"},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variablePreset1:[{code:"name",defaultValue:"DefaultName",label:"Name"},{code:"age",defaultValue:"18",label:"Age"},{code:"country",defaultValue:"World",label:"Country"},{code:"city",defaultValue:"Capital",label:"City"}],variableValues1:{name:"John",age:25},value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(a,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:n},props:Object.keys(l),setup(){return{...a}},template:`
    <FSCol>
      <FSRichTextField
        label="Rich text"
        :variableReferences="args.variablePreset1"
        v-model="args.value1"
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
    </FSCol>`})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello I am \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"name\\",\\"defaultValue\\":\\"defaultName\\"}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"heading\\",\\"version\\":1,\\"tag\\":\\"h1\\"},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"I come from \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"country\\",\\"defaultValue\\":\\"World\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" and I am \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"age\\",\\"defaultValue\\":\\"defaultAge\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\".\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1},{\\"children\\":[],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      variablePreset1: [{
        code: "name",
        defaultValue: "DefaultName",
        label: "Name"
      }, {
        code: "age",
        defaultValue: "18",
        label: "Age"
      }, {
        code: "country",
        defaultValue: "World",
        label: "Country"
      }, {
        code: "city",
        defaultValue: "Capital",
        label: "City"
      }],
      variableValues1: {
        name: "John",
        age: 25
      },
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
        :variableReferences="args.variablePreset1"
        v-model="args.value1"
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
    </FSCol>\`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Fe=["Variations"];export{e as Variations,Fe as __namedExportsOrder,xe as default};
