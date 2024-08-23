import{F as i}from"./FSRichTextField-BdkKw8gd.js";import{_ as n}from"./FSCol-D9tDKebi.js";import"./vue.esm-bundler-BATn8cDU.js";import"./FSAutocompleteField-DBYsLacO.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Gvoj2sTW.js";import"./css-C5boehQC.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./FSButton-CvqXFT9l.js";import"./FSClickable-B9o4BEyu.js";import"./FSCard-DuDQq8Pz.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./FSIcon-CM3DCfji.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";const Re={title:"Foundation/Shared/Input fields/RichTextField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello I am ","type":"text","version":1},{"type":"variable","version":1,"code":"name","defaultValue":"defaultName"}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I come from ","type":"text","version":1},{"type":"variable","version":1,"code":"country","defaultValue":"World"},{"detail":0,"format":0,"mode":"normal","style":"","text":" and I am ","type":"text","version":1},{"type":"variable","version":1,"code":"age","defaultValue":"defaultAge"},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variablePreset1:[{code:"name",defaultValue:"DefaultName",label:"Name"},{code:"age",defaultValue:"18",label:"Age"},{code:"country",defaultValue:"World",label:"Country"},{code:"city",defaultValue:"Capital",label:"City"}],variableValues1:{name:"John",age:25},value2:'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},render:(a,{argTypes:l})=>({components:{FSRichTextField:i,FSCol:n},props:Object.keys(l),setup(){return{...a}},template:`
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Ve=["Variations"];export{e as Variations,Ve as __namedExportsOrder,Re as default};
