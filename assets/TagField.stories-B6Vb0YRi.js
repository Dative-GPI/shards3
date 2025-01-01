import{F as a}from"./FSTagField-DE9o3IQ1.js";import{F as p}from"./FSForm-BjBd-4df.js";import{F as g}from"./FSCol-DdGVae5t.js";import{_ as u}from"./FSRow-BtkEywPN.js";import{a as v}from"./rules-DEDGy5Zg.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./FSTextField-G5bYyIVj.js";import"./FSBaseField-MsaseDuX.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BO83iJ4k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-4AjdAhIV.js";import"./FSButton-DYhqzqie.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DngCBs65.js";import"./FSCard-BWyLcCxk.js";import"./css-XXwFKvUE.js";import"./VProgressCircular-Cd-wheNV.js";import"./color-uBYwhjku.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./FSIcon-DbV5muRp.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./FSTagGroup-DwGd1x_F.js";import"./FSWrapGroup-CpuWIkHs.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./display-CL7KZq5h.js";import"./FSTag-BsJTZuS4.js";import"./VBtn-WSruA80Q.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./router-C4I-dA4c.js";import"./index-BOr5YZLb.js";import"./FSSlideGroup-CDErVpPi.js";import"./FSButtonNextIcon-Bh5NMaHJ.js";import"./useDateFormat-DqGsDyOM.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./useAppTimeZone-jR0R4uqF.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-BhPzmPwL.js";import"./time-kNhr6ndE.js";const Cr={title:"Foundation/Shared/Input fields/TagField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:o})=>({components:{FSTagField:a,FSCol:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSTagField
        label="Tag, full, light color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, light color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:v}},render:(t,{argTypes:o})=>({components:{FSForm:p,FSTagField:a,FSCol:g,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["full", "tag", "variant"],
      value2: ["standard", "tag", "variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTagField,
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
      <FSTagField
        label="Tag, full, light color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, light color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,s,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: [],
      value2: ["a", "b", "c"],
      value3: [],
      rules: TagRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTagField,
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
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const kr=["Variations","Rules"];export{e as Rules,r as Variations,kr as __namedExportsOrder,Cr as default};
