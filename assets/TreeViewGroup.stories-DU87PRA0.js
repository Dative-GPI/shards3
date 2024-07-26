import{d as v,y as S,z as m,A as u,B as s,m as w,E as y,G,D as T}from"./vue.esm-bundler-DC82FEWN.js";import{F as _}from"./FSTreeViewField-B1VLcGQw.js";import{_ as g}from"./FSIcon-P4x4c-RP.js";import{u as h}from"./useGroups-li-Uq1eI.js";import{u as C}from"./useTreeView-D-LJaKZh.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-DA3fdLra.js";import"./FSCard-2tgenx2C.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-DQLHFhAZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B5x8xkbY.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DvJT0EEa.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSTextField-Rjw2v1TU.js";import"./FSBaseField-3RVGuwl_.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-BjECYW1K.js";import"./FSButton-DUJqknbG.js";import"./FSClickable-DJmL8jbB.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./density-CFGlRMM_.js";import"./loader-DENHXnzB.js";import"./rounded-YB6K8mOp.js";import"./index-DN-QUi1L.js";import"./FSCheckbox-C1IyYDE7.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSFadeOut-I7Jw95bn.js";import"./uuid-DTaye2KM.js";import"./FSLoader-BZsYDU4n.js";import"./elevation-BTkUCD39.js";import"./FSRadio-C-XiPq3H.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VBtn-x8pr1gDk.js";import"./group-szJg_hPo.js";import"./filter-C5_KLKIH.js";import"./VMenu-Cn6sY4-s.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const F=v({name:"FSTreeViewGroup",components:{FSTreeViewField:_,FSIcon:g},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=h(),l=()=>i({...e.groupFilters}),{onUpdate:p}=C(t,[()=>e.groupFilters],o,l);return{fetchingGroups:n,groups:t,onUpdate:p}}});function $(e,o,i,n,t,l){const p=S("FSTreeViewField");return m(),u(p,w({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:a})=>[a.icon?(m(),u(g,{key:0},{default:s(()=>[y(G(a.icon),1)]),_:2},1024)):T("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=b(F,[["render",$]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const He={title:"Foundation/Core/TreeViews/TreeViewGroup",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewGroup:V,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>`})};var d,c,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      FSTreeViewGroup,
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
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const Je=["Variations"];export{r as Variations,Je as __namedExportsOrder,He as default};
