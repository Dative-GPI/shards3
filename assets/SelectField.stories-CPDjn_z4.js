import{F as l}from"./FSSelectField-DujFH32C.js";import{F as u}from"./FSForm-BjMwhLbb.js";import{F as p}from"./FSCol-Co9r7Klj.js";import{_ as g}from"./FSRow-D546kqFt.js";import{S as c}from"./rules-CXLZGJsX.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSDialogMenu-1exdynOQ.js";import"./FSCard-uGx4g-q0.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DpQhyQC8.js";import"./proxiedModel-DAUSUEYq.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSBaseField-lEL5efap.js";import"./VSpacer-DaRxrr8q.js";import"./FSTextField-DxJVxYys.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./rounded-Cd5tqTfa.js";import"./index-CQjBi2ms.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";import"./useTranslations-ZMyFjr19.js";import"./time-CRGs9nYY.js";const Ve={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <FSSelectField
        label="Select with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:null,rules:c}},render:(e,{argTypes:i})=>({components:{FSForm:u,FSSelectField:l,FSCol:p,FSRow:g},props:Object.keys(i),setup(){return{...e}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: ["0", "1", "2"],
      value4: "2",
      value5: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
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
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <FSSelectField
        label="Select with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      rules: SelectRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSSelectField,
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
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Ee=["Variations","Rules"];export{r as Rules,t as Variations,Ee as __namedExportsOrder,Ve as default};
