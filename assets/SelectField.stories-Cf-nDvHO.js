import{F as l}from"./FSSelectField-LBkmbYSO.js";import{F as u}from"./FSForm-3-6JxcXo.js";import{_ as p}from"./FSCol-DX423FHf.js";import{_ as g}from"./FSRow-Bpa2jjpJ.js";import{S}from"./rules-DZSmlILx.js";import"./vue.esm-bundler-gWFTcvUr.js";import"./FSDialogMenu-5sq61y-r.js";import"./FSCard-Dkx-Z7Pt.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./css-Bc8dJONt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CI1OEbFE.js";import"./proxiedModel-ClxH85aG.js";import"./anchor-D8sPv6Az.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./locale-C1ZNn_CS.js";import"./router-B2tkk-4w.js";import"./transition-14-CCvbq.js";import"./VDefaultsProvider-CYAySfh3.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./FSIcon-C5ELG8c1.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./density-cGginCT8.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./FSBaseField-DM1DfhdE.js";import"./VSpacer-DqpPKsvm.js";import"./FSTextField-DZxUijBd.js";import"./FSButton-CDk00Rln.js";import"./FSClickable-BVFP8bZP.js";import"./VProgressCircular-DqlO5PEF.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./VInput-ClhP4L1h.js";import"./loader-DNzkAbrM.js";import"./rounded-DlJ8CYNz.js";import"./index-BHt-17iJ.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./uuid-DTaye2KM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./elevation-B3TY2UXi.js";import"./VImg-CHF0S8ll.js";import"./VSelect-CwYrSzi9.js";import"./VMenu-lXYF3tO5.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./useAppTimeZone-De3FTl5J.js";import"./useAppLanguageCode-CiYDnnfJ.js";import"./useTranslations-DebMVrXy.js";import"./time-CXtw-DLM.js";const ke={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:null,rules:S}},render:(e,{argTypes:i})=>({components:{FSForm:u,FSSelectField:l,FSCol:p,FSRow:g},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Oe=["Variations","Rules"];export{r as Rules,t as Variations,Oe as __namedExportsOrder,ke as default};