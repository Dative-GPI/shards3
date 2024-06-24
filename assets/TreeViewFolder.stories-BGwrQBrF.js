import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as h}from"./FSTreeViewField-CAFVB0k5.js";import{_ as f}from"./FSIcon-CcDweDXn.js";import{u as C}from"./useFolders-CZOznplY.js";import{u as b}from"./useTreeView-BOM_eiIU.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-BeN4b608.js";import"./FSDialogMenu-C5PUkJvI.js";import"./FSCard-BkPZ_hGw.js";import"./FSRow-a7Q-CB2x.js";import"./css-CBTOQ7jk.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-BYKEQvkC.js";import"./proxiedModel-D-52zHw6.js";import"./anchor-BesKSPix.js";import"./color-BdD0bzys.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./locale-B_wzRa96.js";import"./router-kbZLzbN_.js";import"./transition-C9cC5SGI.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./index-CZ5BSoIs.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./VIcon-MLStchlj.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./rounded-DApWaG-P.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./FSCheckbox-CFZ7ijaE.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSFadeOut-DGTrMc-E.js";import"./uuid-DTaye2KM.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./FSRadio-DmnFFO-4.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VBtn-111r8MQv.js";import"./group-Djmd8CaX.js";import"./filter-NOSp4cax.js";import"./VMenu-D3bJ2B8V.js";import"./pathCrumb-D0_87whe.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C-hWj-Am.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),p=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,p);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,p){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:a})=>[a.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(a.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Le={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
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
