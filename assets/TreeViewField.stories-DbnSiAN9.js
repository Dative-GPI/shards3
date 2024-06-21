import{F as o}from"./FSTreeViewField-OJ9Y3Po2.js";import{F as u}from"./FSForm-BLZ-2-aU.js";import{_ as g}from"./FSIcon-CSwom3lG.js";import{_ as p}from"./FSCol-BBaW1DrL.js";import{_ as v}from"./FSRow-CHgEOZQb.js";import{b}from"./rules-YgaBz0hw.js";import"./vue.esm-bundler-DUki7rNA.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./css-BPLLlL3Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-pAH_6Aah.js";import"./proxiedModel-C4hUsKQ6.js";import"./anchor-32zVg6UX.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./locale-BngQMCjE.js";import"./router-C5N3y4B3.js";import"./transition-CAmaHrck.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./FSSpan-DUTdSgpN.js";import"./useSlots-BZu_lZyn.js";import"./VSpacer-CujVv6t6.js";import"./index-zNldQLkd.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./rounded-CuOTz_ni.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./FSCheckbox-CisQZrrP.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./FSRadio-BTSSlUFf.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VBtn-CI38s1mD.js";import"./group-BFGJGSPe.js";import"./filter-CYwgxO9I.js";import"./VMenu-BMkRa5on.js";import"./useAppTimeZone-BvKhOiUD.js";import"./useTranslations-LhdkJQ98.js";const Ie={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:null,value3:null,rules:b}},render:(i,{argTypes:t})=>({components:{FSForm:u,FSTreeViewField:o,FSCol:p,FSRow:v},props:Object.keys(t),setup(){return{...i}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ce=["Variations","Rules"];export{r as Rules,e as Variations,Ce as __namedExportsOrder,Ie as default};
