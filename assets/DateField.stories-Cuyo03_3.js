import{F as i}from"./FSDateField-CWZCfaWZ.js";import{F as u}from"./FSForm-CZhuTBbT.js";import{_ as p}from"./FSCol-CA6NzDpV.js";import{_ as g}from"./FSRow-JJutUvlP.js";import{D as F}from"./rules-Dgz8ALDd.js";import"./vue.esm-bundler-DeSao-KJ.js";import"./FSDialogMenu-Bqb9kp8T.js";import"./FSCard-DS_imcN3.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./css-BnhLLynS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-CIdmfI-I.js";import"./proxiedModel-B9H_VIYa.js";import"./anchor-LC_hEQAj.js";import"./color-XZPyE2lN.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./locale-BTkT-VzI.js";import"./router-Cr7df_Je.js";import"./transition-CTQG5_JK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./FSTextField-CeZ-GSQu.js";import"./VField-CyhQQ7TX.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./index-BIb3aONP.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./rounded-BOBir3aK.js";import"./FSButton-CX8bjLcP.js";import"./FSClickable-D0rN91iS.js";import"./FSIcon-29MaMkU3.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./FSCalendar-TwcsICfS.js";import"./useAppTimeZone-B8cBFYr8.js";import"./useTranslations-DAApg7Ob.js";import"./VLocaleProvider-0j3W7eC7.js";import"./date-D42IMfgs.js";import"./VBtn-D2I7zlII.js";import"./border-IVtV0L-L.js";import"./elevation-BBJMtRPf.js";import"./group-BqOqgFvy.js";import"./index-BWi4ltEp.js";import"./VMenu-CbRbHjmn.js";import"./time-Ba2sHI9J.js";const we={title:"Foundation/Shared/Input fields/DateField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
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
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateField,
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
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fe=["Variations","Rules"];export{r as Rules,e as Variations,fe as __namedExportsOrder,we as default};