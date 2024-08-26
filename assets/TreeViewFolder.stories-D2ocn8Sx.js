import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-DR8xMV81.js";import{F as h}from"./FSTreeViewField-Bm_tPcJA.js";import{_ as f}from"./FSIcon-CYA01Pg8.js";import{u as C}from"./useFolders-B2Pr9O_N.js";import{u as b}from"./useTreeView-CwxoL-i1.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-CeBQ3oDD.js";import"./FSDialogMenu-BsX2O1U3.js";import"./FSCard-CU93xE1v.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DRqqT5iF.js";import"./proxiedModel-CfqC31JC.js";import"./anchor-C7LpDu09.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./locale-x-KasAKq.js";import"./router-I0roKE-i.js";import"./transition-DYmm1B3d.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./VSpacer-BxLG4kFi.js";import"./FSButton-Bvd0naOX.js";import"./FSClickable-Bx8zcCZW.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./density-DXTGgNtk.js";import"./loader-C4nPQ1_b.js";import"./rounded-DVRtD5BX.js";import"./index-VkvlNmfl.js";import"./FSCheckbox-DNmwW8YA.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSFadeOut-DVFTxjCH.js";import"./uuid-DTaye2KM.js";import"./FSLoader-KrLuz6mY.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-4MLyqnfX.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./VImg-MapJeLY6.js";import"./VBtn-BDhRXVNU.js";import"./group-C6nVA5p1.js";import"./filter-Ct2lxthn.js";import"./VMenu-5z8CiYXe.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BZ9BoqOK.js";import"./useAppOrganisationId-D_AG8bST.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CS2nLnTC.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=C(),a=()=>i({...e.folderFilters}),{onUpdate:l}=b(t,[()=>e.folderFilters],o,a);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,a){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:p})=>[p.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(p.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const He={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(F=(c=r.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Je=["Variations"];export{r as Variations,Je as __namedExportsOrder,He as default};
