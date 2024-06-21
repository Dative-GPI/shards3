import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-DUki7rNA.js";import{F as h}from"./FSTreeViewField-OJ9Y3Po2.js";import{_ as f}from"./FSIcon-CSwom3lG.js";import{u as C}from"./useFolders-DZeM9mAx.js";import{u as b}from"./useTreeView-DrzRahQn.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-BBaW1DrL.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./FSRow-CHgEOZQb.js";import"./css-BPLLlL3Y.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-pAH_6Aah.js";import"./proxiedModel-C4hUsKQ6.js";import"./anchor-32zVg6UX.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./locale-BngQMCjE.js";import"./router-C5N3y4B3.js";import"./transition-CAmaHrck.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./FSSpan-DUTdSgpN.js";import"./useSlots-BZu_lZyn.js";import"./VSpacer-CujVv6t6.js";import"./index-zNldQLkd.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./rounded-CuOTz_ni.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./FSCheckbox-CisQZrrP.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./FSRadio-BTSSlUFf.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VBtn-CI38s1mD.js";import"./group-BFGJGSPe.js";import"./filter-CYwgxO9I.js";import"./VMenu-BMkRa5on.js";import"./pathCrumb-D0_87whe.js";import"./base-DlhEylMe.js";import"./useAppOrganisationId-CXBwfEoF.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-cXrrETVr.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),p=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,p);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,p){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:a})=>[a.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(a.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Le={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>`})};var u,c,F;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewFolder,
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
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(F=(c=r.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Qe=["Variations"];export{r as Variations,Qe as __namedExportsOrder,Le as default};
