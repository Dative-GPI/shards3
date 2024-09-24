import{d as y,c as S,y as h,z as m,A as s,B as d,m as G,E as T,G as b,D as x}from"./vue.esm-bundler-BSyvBTC9.js";import{F as C}from"./FSTreeViewField-C16cgqhn.js";import{F}from"./FSIcon-C66wKzEa.js";import{u as _}from"./useGroups-BEpPMhMx.js";import{u as k}from"./useTreeView-BCexFVa6.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSCol-DZA6pxA1.js";import"./FSDialogMenu-DqlBib1U.js";import"./FSCard-Dakm4bPu.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./forwardRefs-DWGaNmQL.js";import"./color--o2QfpAv.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./FSTextField-CwRD7ate.js";import"./FSBaseField-IbFSJyTX.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./VSpacer-DvdcLDtW.js";import"./FSButton-BSiZExfb.js";import"./FSClickable-MDWPSUzP.js";import"./VProgressCircular-D09FP1rk.js";import"./tag-DB5D_XjQ.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./index-DwLKzfXL.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./VIcon-BQIm0b3J.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./loader-C8KBePTS.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-BqHXdD4S.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-D96pvLZm.js";import"./uuid-DTaye2KM.js";import"./FSLoader-C2GbS-is.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-DTeZ_yJG.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VBtn-B3SFyF18.js";import"./group-CBCTR8u6.js";import"./filter-DuGNEgHB.js";import"./VMenu-Cfqut3Fx.js";import"./pathCrumb-Db-cq5HI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const V=y({name:"FSTreeViewGroup",components:{FSTreeViewField:C,FSIcon:F},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:a,entities:i}=_(),l=S(()=>e.exclude?i.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):i.value),p=()=>n({...e.groupFilters}),{onUpdate:o}=k(l,[()=>e.groupFilters],r,p);return{fetchingGroups:a,groups:l,onUpdate:o}}});function B(e,r,n,a,i,l){const p=h("FSTreeViewField");return m(),s(p,G({multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(m(),s(F,{key:0},{default:d(()=>[T(b(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=q(V,[["render",B]]);V.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Re={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:$},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null
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
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const We=["Variations"];export{t as Variations,We as __namedExportsOrder,Re as default};
