import i from"./FSIconField-C7XiELLJ.js";import{F as c}from"./FSForm-BnY1MqqQ.js";import{_ as p}from"./FSCol-Bk577joi.js";import{_ as u}from"./FSRow-BuYwVvwM.js";import{I as g}from"./rules-D_3Pl2Ia.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSToggleSet-CUrOC1IX.js";import"./FSSlideGroup-SgKZc0Dn.js";import"./uuid-DTaye2KM.js";import"./FSButton-6xwgcgkA.js";import"./FSClickable-Bf0xM50-.js";import"./FSCard-CsyvoMST.js";import"./useColors-s1xYWcRF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D8Xq3tpQ.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-DnrgPZB3.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-DhgV6LdF.js";import"./VIcon-DptP6m9n.js";import"./index-joExpvzU.js";import"./display-Cx0CWWL8.js";import"./group-DgCbl5w-.js";import"./proxiedModel-BE9FlVMJ.js";import"./locale-CMOn_BOp.js";import"./FSWrapGroup-AYmlnqiR.js";import"./VInput-Dln06fOF.js";import"./transition-CQDsmRPd.js";import"./density-BM1QLeh4.js";import"./form-CgybbRT3.js";import"./FSTextField-BrYnbjAt.js";import"./FSBaseField-CGde08E6.js";import"./VSpacer-YT0o3rZT.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./VLabel-BPqk0hPA.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./time-BOZ1S5aJ.js";const vo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(r,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...r}},template:`
    <FSCol>
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:null,rules:g}},render:(r,{argTypes:t})=>({components:{FSForm:c,FSIconField:i,FSCol:p,FSRow:u},props:Object.keys(t),setup(){return{...r}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </FSForm>`})};var n,l,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "mdi-account",
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSIconField,
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
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var d,s,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      rules: IconRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSIconField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Fo=["Variations","Rules"];export{e as Rules,o as Variations,Fo as __namedExportsOrder,vo as default};
