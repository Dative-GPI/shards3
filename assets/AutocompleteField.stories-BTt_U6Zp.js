import{F as l}from"./FSAutocompleteField-CCs3-7Gg.js";import{F as p}from"./FSForm-BnY1MqqQ.js";import{_ as u}from"./FSCol-Bk577joi.js";import{_ as g}from"./FSRow-BuYwVvwM.js";import{A as v}from"./rules-BlSYZiTY.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSSearchField-Br299av8.js";import"./FSTextField-BQbZuAPn.js";import"./FSBaseField-DEWTBdWD.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-C8ZtkfWa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./FSButton-D9OonqCF.js";import"./FSClickable-CfNRAgb8.js";import"./FSCard-D5wiJKub.js";import"./css-CbCR1nbl.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./FSIcon-DYxpTLuT.js";import"./VIcon-DptP6m9n.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./useTranslations-DyPMaPr_.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-COYtI-Nu.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSWrapGroup-CSqxXTzY.js";import"./FSCheckbox-B0fh_Rt7.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-CB131b1X.js";import"./VImg-Da3f9R37.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-iR212XTF.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";import"./useDateFormat-DZcIDWp6.js";import"./datesTools-RiUw1NMp.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./time-BOZ1S5aJ.js";const c=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],De={title:"Foundation/Shared/Input fields/AutocompleteField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(30).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2",value6:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteField:l,FSCol:u},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${c[e]}`})),value1:null,value2:null,value3:null,value4:null,rules:v}},render:(e,{argTypes:o})=>({components:{FSForm:p,FSAutocompleteField:l,FSCol:u,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>`})};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(30).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: ["0", "1", "2"],
      value4: "2",
      value5: "2",
      value6: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteField,
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
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${international[i]}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      rules: AutocompleteRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSAutocompleteField,
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
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const He=["Variations","Rules"];export{r as Rules,t as Variations,He as __namedExportsOrder,De as default};
