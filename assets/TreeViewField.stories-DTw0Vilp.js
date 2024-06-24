import{F as o}from"./FSTreeViewField-CAFVB0k5.js";import{F as u}from"./FSForm-BHxqH6nY.js";import{_ as g}from"./FSIcon-CcDweDXn.js";import{_ as p}from"./FSCol-BeN4b608.js";import{_ as v}from"./FSRow-a7Q-CB2x.js";import{c as F}from"./rules-DKZYNaes.js";import"./vue.esm-bundler-ClF7U4Dq.js";import"./FSDialogMenu-C5PUkJvI.js";import"./FSCard-BkPZ_hGw.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./css-CBTOQ7jk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-BYKEQvkC.js";import"./proxiedModel-D-52zHw6.js";import"./anchor-BesKSPix.js";import"./color-BdD0bzys.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./locale-B_wzRa96.js";import"./router-kbZLzbN_.js";import"./transition-C9cC5SGI.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./index-CZ5BSoIs.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./VIcon-MLStchlj.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./rounded-DApWaG-P.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./FSCheckbox-CFZ7ijaE.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSFadeOut-DGTrMc-E.js";import"./uuid-DTaye2KM.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./FSRadio-DmnFFO-4.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VBtn-111r8MQv.js";import"./group-Djmd8CaX.js";import"./filter-NOSp4cax.js";import"./VMenu-D3bJ2B8V.js";import"./useAppTimeZone-UYdwQzNi.js";import"./useTranslations-iL6K_UJW.js";import"./time-BrgXc39x.js";const Ce={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
