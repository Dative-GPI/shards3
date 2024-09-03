import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as h}from"./FSTreeViewField-Bp6vPPfs.js";import{_ as f}from"./FSIcon-BhYLJFwS.js";import{u as C}from"./useFolders-BiCNOxAR.js";import{u as b}from"./useTreeView-CHDmpwUC.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-DLJAvXXo.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./FSCard-B0a7crHg.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DRHDjI8D.js";import"./proxiedModel-GwPoz8hG.js";import"./anchor-BydgbQy2.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./locale-HbAtAWzw.js";import"./router-DTnNLfUf.js";import"./transition-BzbLScdo.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./VSpacer-CeIMSlXt.js";import"./FSButton-CsvAshDj.js";import"./FSClickable-CT4CAD0O.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./VIcon-DEItKADI.js";import"./density-qG_glApz.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./rounded-CT5UQ7DA.js";import"./index-BFUNLZ7G.js";import"./FSCheckbox-BaTn-nVp.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-PkHtV3O5.js";import"./uuid-DTaye2KM.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VBtn-BzEyEYeh.js";import"./group-Daa3BzEI.js";import"./filter-DXJSDnkE.js";import"./VMenu-Cux52w-S.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),a=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,a);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,a){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:p})=>[p.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(p.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Je={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
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
