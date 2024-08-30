import i from"./FSIconField-ZvQThZ9o.js";import{F as c}from"./FSForm-BkHmbWHZ.js";import{_ as p}from"./FSCol-DLJAvXXo.js";import{_ as u}from"./FSRow-unE_3RO6.js";import{I as g}from"./rules-BNd5WlFL.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./FSToggleSet-BtGm8wWU.js";import"./FSSlideGroup-DDUHPpf0.js";import"./uuid-DTaye2KM.js";import"./FSButton-DS5pJwRE.js";import"./FSClickable-Dn475adk.js";import"./FSCard-BdS37dLD.js";import"./useColors-nFEwMWzN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1riLSun.js";import"./css-DEg_ftav.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-D_7DfGyD.js";import"./color-DRHDjI8D.js";import"./tag-CMGfbRyB.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSIcon-CEcP550-.js";import"./VIcon-DEItKADI.js";import"./index-CS87Qvuo.js";import"./display-CuwymjaA.js";import"./group-Daa3BzEI.js";import"./proxiedModel-GwPoz8hG.js";import"./locale-HbAtAWzw.js";import"./FSWrapGroup-B-W0vR2W.js";import"./VInput-B4B8eXxy.js";import"./transition-BzbLScdo.js";import"./density-qG_glApz.js";import"./form-BLrazfEI.js";import"./FSTextField-CMLUeGZH.js";import"./FSBaseField-D2jPE59R.js";import"./VSpacer-CeIMSlXt.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./VLabel-m2J9LCHM.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./useDateFormat-DNQzFrMJ.js";import"./useTranslations-DflIUxSJ.js";import"./useAppLanguageCode-DB-OA7iE.js";import"./useAppTimeZone-Cq6pDyb8.js";import"./time-IHZgj_lS.js";const go={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(r,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...r}},template:`
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
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const vo=["Variations","Rules"];export{e as Rules,o as Variations,vo as __namedExportsOrder,go as default};
