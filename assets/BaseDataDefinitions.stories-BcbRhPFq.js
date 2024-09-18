import{d as L,w as k,y as p,z as _,A as E,M as q,N as v,B as i,m as c,I as w,J as N,K as P,L as e,E as T,G as I}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-CnLYfQb-.js";import{F as b}from"./FSRow-B3SJi8FA.js";import{_ as g}from"./FSSpan-CCGpb4KF.js";import{F as l}from"./FSIcon-lOMM3dv0.js";import{F as A}from"./FSClickable-BDGPWcsb.js";import{F as M}from"./FSButtonCheckbox-AJ7Xf1pc.js";import{u as O}from"./useDataDefinitions-tST5J8oW.js";import{C as R}from"./useColors-Ccf8xVyg.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G}from"./VSpacer-C4plVoTE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-7EueGG7H.js";import"./useBreakpoints-B0zHkio6.js";import"./css-BRRCqIav.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-CtQDyyQv.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DjQsgBzR.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-VI0SCCBU.js";import"./FSText-BN3VvfV9.js";import"./useSlots-P12pG1X5.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSButton-nYXrUxor.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-TaDedv2I.js";import"./FSChip-BJGyRW3u.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./index-3zl-tJp_.js";const V=L({name:"FSBaseDataDefinitionsList",components:{FSButtonCheckbox:M,FSDataTable:S,FSClickable:A,FSSpan:g,FSIcon:l,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(t){const{getMany:a,fetching:d,entities:u}=O(),f=r=>t.modelValue.includes(r);return k(()=>t.dataDefinitionFilters,(r,n)=>{(!r&&!n||!z.isEqual(r,n))&&a(t.dataDefinitionFilters)},{immediate:!0}),{fetchingDataDefinitions:d,dataDefinitions:u,ColorEnum:R,isSelected:f}}});function J(t,a,d,u,f,r){const n=p("FSButtonCheckbox"),y=p("FSClickable"),B=p("FSDataTable");return _(),E(B,c({loading:t.fetchingDataDefinitions,items:t.dataDefinitions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>t.$emit("update:modelValue",o))},t.$attrs),q({toolbar:i(()=>[e(n,{label:t.$tr("ui.common.data-correlated","Correlated only"),color:t.ColorEnum.Success},null,8,["label","color"])]),"item.tile":i(({item:o})=>[e(y,c({padding:"12px",height:"60px",width:"233px",color:t.isSelected(o.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:s=>t.$emit("update:modelValue",[o.id])},t.$attrs),{default:i(()=>[e(b,{align:"center-center"},{default:i(()=>[e(l,{icon:"mdi-thermometer"}),e(g,{lineClamp:1},{default:i(()=>[T(I(o.label),1)]),_:2},1024),e(G),e(l,{color:t.ColorEnum.Primary,icon:"mdi-link"},null,8,["color"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[v(t.$slots,(o,s)=>({name:s,fn:i($=>[w(t.$slots,s,N(P($)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=j(V,[["render",J]]);V.__docgenInfo={displayName:"FSBaseDataDefinitionsList",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue"]};const Ve={title:"Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList",component:h,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataDefinitions1"]}}},m={render:t=>({components:{FSBaseDataDefinitionsList:h},setup(){return{args:t}},template:`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataDefinitions1"}};var D,C,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDataDefinitionsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dataDefinitions1'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const he=["Default"];export{m as Default,he as __namedExportsOrder,Ve as default};
