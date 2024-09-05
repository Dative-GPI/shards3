import{d as v,y as S,z as m,A as s,B as d,m as w,E as y,G as T,D as _}from"./vue.esm-bundler-Vj2X7okO.js";import{F as h}from"./FSTreeViewField-D1B5ys3-.js";import{_ as f}from"./FSIcon-CNrZYw3j.js";import{u as C}from"./useTreeView-obXe8w_a.js";import{u as b}from"./useFolders-CDi-2wMf.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./FSCol-Bk577joi.js";import"./FSDialogMenu-DJMBxSqq.js";import"./FSCard-IkM7vPXg.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Dk23S21P.js";import"./proxiedModel-CZPY81Tp.js";import"./anchor-J8DF-zwD.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./locale-CMOn_BOp.js";import"./router-DPbzaFf1.js";import"./transition-Cs7QtK7U.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./FSTextField-CMP-67X5.js";import"./FSBaseField-Uq_chVlu.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./VSpacer-BJ2TWwuy.js";import"./FSButton-BeXPz3qD.js";import"./FSClickable-B6i4bUTy.js";import"./VProgressCircular-BALYDMME.js";import"./tag-BDy8Psij.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./VIcon-Dc5M3VhK.js";import"./density-BWgXlOb-.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./rounded-B-50KYhN.js";import"./index-DQeMThUY.js";import"./FSCheckbox-BNEUzkt_.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./uuid-DTaye2KM.js";import"./VImg-iJp2dxPS.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-CMU-kDTj.js";import"./VList-6ZTQMrmw.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VBtn-8V3HVfv8.js";import"./group-CT1H1YXM.js";import"./filter-KqM1uUBX.js";import"./VMenu-BOpQjLNS.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";const g=v({name:"FSTreeViewFolder",components:{FSTreeViewField:h,FSIcon:f},props:{folderFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=b(),a=()=>i({...e.folderFilters}),{onUpdate:l}=C(t,[()=>e.folderFilters],o,a);return{fetchingFolders:n,folders:t,onUpdate:l}}});function q(e,o,i,n,t,a){const l=S("FSTreeViewField");return m(),s(l,w({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:p})=>[p.icon?(m(),s(f,{key:0},{default:d(()=>[y(T(p.icon),1)]),_:2},1024)):_("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=k(g,[["render",q]]);g.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Je={title:"Foundation/Core/TreeViews/TreeViewFolder",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewFolder:V,FSCol:$},props:Object.keys(o),setup(){return{...e}},template:`
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
