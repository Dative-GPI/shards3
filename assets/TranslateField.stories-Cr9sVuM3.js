import{F as a}from"./FSTranslateField-D641L1QP.js";import{F as u}from"./FSForm-BlMLGh3p.js";import{_ as p}from"./FSCol-OnQTHx6W.js";import{_ as g}from"./FSRow-BZVvIgLd.js";import{T as F}from"./rules-vaMZSOmg.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSDialogSubmit-w1aiABul.js";import"./FSFadeOut-NO6SWErB.js";import"./uuid-DTaye2KM.js";import"./css-DU1X_fj1.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-Ctk-czeT.js";import"./FSClickable-BcsUSOO8.js";import"./FSCard-fA5aX9kp.js";import"./VProgressCircular-CvGEkpD-.js";import"./color-T1BTTgdX.js";import"./useRender-CTGr_J4i.js";import"./resizeObserver-DkufbBgm.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./FSIcon-CgTCRlvx.js";import"./FSDialog-DlwbzWL0.js";import"./FSText-DOaWXjiL.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BG8nj0M_.js";import"./anchor-3JQV6orx.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./locale-Cf2S8s-Z.js";import"./router-Ce0kmIVt.js";import"./transition-DqSOegbJ.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./VSpacer-C8vjG_Ri.js";import"./useTranslations-CT7kkIpn.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./index-Co1LeIbZ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./rounded-Ax8hVtG-.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./useLanguages-CLJNVy8P.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DeG9aq0N.js";import"./useAppTimeZone-DSwl_BhO.js";import"./time-BxNv1uVL.js";const Tr={title:"Foundation/Shared/Input fields/TranslateField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(t,{argTypes:n})=>({components:{FSTranslateField:a,FSCol:p},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(t,{argTypes:n})=>({components:{FSForm:u,FSTranslateField:a,FSCol:p,FSRow:g},props:Object.keys(n),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var o,l,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
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
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateField,
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
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fr=["Variations","Rules"];export{e as Rules,r as Variations,fr as __namedExportsOrder,Tr as default};
