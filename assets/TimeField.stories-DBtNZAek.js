import o from"./FSTimeField-r-uLFPKJ.js";import{F as u}from"./FSForm-BHxqH6nY.js";import{_ as p}from"./FSCol-BeN4b608.js";import{_ as F}from"./FSRow-a7Q-CB2x.js";import{b as g}from"./rules-DKZYNaes.js";import"./vue.esm-bundler-ClF7U4Dq.js";import"./FSNumberField-DlBByfbA.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./css-CBTOQ7jk.js";import"./FSIcon-CcDweDXn.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./FSSelectField-DcT7fAP4.js";import"./FSDialogMenu-C5PUkJvI.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./uuid-DTaye2KM.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./elevation-B-xdCICl.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VSelect-CKfqyMYk.js";import"./VMenu-D3bJ2B8V.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./time-BrgXc39x.js";import"./useTranslations-iL6K_UJW.js";import"./useAppTimeZone-UYdwQzNi.js";const je={title:"Foundation/Shared/Input fields/TimeField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:3600,value3:691200}},render:(t,{argTypes:i})=>({components:{FSTimeField:o,FSCol:p},props:Object.keys(i),setup(){return{...t}},template:`
    <FSCol>
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:g}},render:(t,{argTypes:i})=>({components:{FSForm:u,FSTimeField:o,FSCol:p,FSRow:F},props:Object.keys(i),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 3600,
      value3: 691200
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeField,
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
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,d,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: 3660,
      value3: null,
      rules: TimeRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTimeField,
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
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const Ue=["Variations","Rules"];export{r as Rules,e as Variations,Ue as __namedExportsOrder,je as default};
