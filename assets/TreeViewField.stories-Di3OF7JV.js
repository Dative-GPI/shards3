import{F as o}from"./FSTreeViewField-wK4_ndTS.js";import{F as u}from"./FSForm-B1Z3Qchm.js";import{_ as g}from"./FSIcon-BnX9YboA.js";import{_ as p}from"./FSCol-B2fYQH2g.js";import{_ as v}from"./FSRow-C55kyKDN.js";import{c as F}from"./rules-DdihKcr3.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D9V7QeIP.js";import"./proxiedModel-DL-L2p1V.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./VSpacer-Bggt-xuP.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./VIcon-5UD9vI9m.js";import"./density-DkgHqMu0.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./uuid-DTaye2KM.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VBtn-CIMHOL7K.js";import"./group-CrHjrh7w.js";import"./filter-BvtvTs1b.js";import"./VMenu-B0NqnZmW.js";import"./useDateFormat-9LaNcSHJ.js";import"./useTranslations-9ULn9k53.js";import"./useAppLanguageCode-DTo4I1JE.js";import"./useAppTimeZone-DGCoteSQ.js";import"./time-BLpKSpNP.js";const Ce={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
    <FSCol>
      <FSTreeViewField
        label="Tree view"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Multiple tree view"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Required tree view, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Uneditable tree view, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:null,value3:null,rules:F}},render:(i,{argTypes:t})=>({components:{FSForm:u,FSTreeViewField:o,FSCol:p,FSRow:v},props:Object.keys(t),setup(){return{...i}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,n,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewField,
      FSCol,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTreeViewField
        label="Tree view"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Multiple tree view"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Required tree view, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Uneditable tree view, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: null,
      value3: null,
      rules: TreeViewRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTreeViewField,
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
        <FSTreeViewField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _e=["Variations","Rules"];export{r as Rules,e as Variations,_e as __namedExportsOrder,Ce as default};
