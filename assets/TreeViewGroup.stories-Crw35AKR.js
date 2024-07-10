import{d as v,y as S,z as m,A as u,B as s,m as w,E as y,G,D as T}from"./vue.esm-bundler-DC82FEWN.js";import{F as _}from"./FSTreeViewField-DUwGPg12.js";import{_ as g}from"./FSIcon-CBfle4ZR.js";import{u as h}from"./useGroups-li-Uq1eI.js";import{u as C}from"./useTreeView-BQTRLHB8.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./FSCol-B7HQy3FB.js";import"./FSDialogMenu-HS8EKdqs.js";import"./FSCard-PwHP1R85.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-C5d3UYhE.js";import"./proxiedModel-BHphZos0.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./locale-BC9z6YbT.js";import"./router-uZykNX6c.js";import"./transition-DSqAHFz2.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./FSTextField-BJOz_lKI.js";import"./FSBaseField-Capz3MEE.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./FSButton-Do7vvvNJ.js";import"./FSClickable-BbRY9BmN.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./density-oYDdQVKs.js";import"./loader-CIVpWd2w.js";import"./rounded-jRyYRXzo.js";import"./index-DI8u9ozT.js";import"./FSCheckbox-BxKP35TB.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSFadeOut-BxczCLJY.js";import"./uuid-DTaye2KM.js";import"./FSLoader-8B7k5XDA.js";import"./elevation-xgrzvMGW.js";import"./FSRadio-DgEWe4FI.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VBtn-u1aQHI0Z.js";import"./group-dnu-odUE.js";import"./filter-CJ-D-YAz.js";import"./VMenu-CMf8AoPJ.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const F=v({name:"FSTreeViewGroup",components:{FSTreeViewField:_,FSIcon:g},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:n,entities:t}=h(),l=()=>i({...e.groupFilters}),{onUpdate:p}=C(t,[()=>e.groupFilters],o,l);return{fetchingGroups:n,groups:t,onUpdate:p}}});function $(e,o,i,n,t,l){const p=S("FSTreeViewField");return m(),u(p,w({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:a})=>[a.icon?(m(),u(g,{key:0},{default:s(()=>[y(G(a.icon),1)]),_:2},1024)):T("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=b(F,[["render",$]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Je={title:"Foundation/Core/TreeViews/TreeViewGroup",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSTreeViewGroup:V,FSCol:k},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const Ke=["Variations"];export{r as Variations,Ke as __namedExportsOrder,Je as default};
