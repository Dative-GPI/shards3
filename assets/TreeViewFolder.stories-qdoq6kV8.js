import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-BSwA4uJo.js";import{F as h}from"./FSTreeViewField-wK4_ndTS.js";import{_ as f}from"./FSIcon-BnX9YboA.js";import{u as C}from"./useFolders-FVfbkxvO.js";import{u as b}from"./useTreeView-23egRxjz.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-B2fYQH2g.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D9V7QeIP.js";import"./proxiedModel-DL-L2p1V.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./VSpacer-Bggt-xuP.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./VIcon-5UD9vI9m.js";import"./density-DkgHqMu0.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./uuid-DTaye2KM.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VBtn-CIMHOL7K.js";import"./group-CrHjrh7w.js";import"./filter-BvtvTs1b.js";import"./VMenu-B0NqnZmW.js";import"./pathCrumb-Db-cq5HI.js";import"./base-COZVLn_8.js";import"./useAppOrganisationId-DRTS5QPJ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),a=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,a);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,a){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:p})=>[p.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(p.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Je={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(F=(c=r.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Ke=["Variations"];export{r as Variations,Ke as __namedExportsOrder,Je as default};
