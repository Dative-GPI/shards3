import{d as $,w as L,y as p,z as k,A as E,M as q,N as w,B as i,m as f,I as v,J as N,K as P,L as e,E as T,G as I}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as R}from"./lodash-BiW_TGGX.js";import{F}from"./FSDataTable-BqTo56-8.js";import{_ as b}from"./FSRow-CVY2l52N.js";import{_ as g}from"./FSSpan-CCGpb4KF.js";import{_ as l}from"./FSIcon-D23Cpf0F.js";import{F as z}from"./FSClickable-DdK5daMz.js";import{F as A}from"./FSButtonCheckbox-BzAcb5RN.js";import{u as M}from"./useDataDefinitions-tST5J8oW.js";import{C as O}from"./useColors-DlnF7i6T.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G}from"./VSpacer-C4plVoTE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSDataTableUI-DzinQmej.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-VrXx14Lw.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-D-fFYNec.js";import"./FSText-DyldgdXP.js";import"./useSlots-P12pG1X5.js";import"./FSSearchField-BIrdfUzJ.js";import"./FSTextField-BKDOMXYp.js";import"./FSBaseField-_Isn_Ha_.js";import"./FSButton-BNq-0lOE.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CTZAdwe6.js";import"./FSDialogMenu-BULt7rkH.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CcWB8C_f.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSWrapGroup-Choo5L6h.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-SLQwEwFD.js";import"./FSChip-BrwvSycq.js";import"./FSOptionGroup-CE_5FDQP.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./index-DfSX31J9.js";const V=$({name:"FSBaseDataDefinitionsList",components:{FSButtonCheckbox:A,FSDataTable:F,FSClickable:z,FSSpan:g,FSIcon:l,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(t){const{getMany:a,fetching:d,entities:u}=M(),c=r=>t.modelValue.includes(r);return L(()=>t.dataDefinitionFilters,(r,n)=>{(!r&&!n||!R.isEqual(r,n))&&a(t.dataDefinitionFilters)},{immediate:!0}),{fetchingDataDefinitions:d,dataDefinitions:u,ColorEnum:O,isSelected:c}}});function J(t,a,d,u,c,r){const n=p("FSButtonCheckbox"),_=p("FSClickable"),y=p("FSDataTable");return k(),E(y,f({loading:t.fetchingDataDefinitions,items:t.dataDefinitions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>t.$emit("update:modelValue",o))},t.$attrs),q({toolbar:i(()=>[e(n,{label:t.$tr("ui.common.data-correlated","Correlated only"),color:t.ColorEnum.Success},null,8,["label","color"])]),"item.tile":i(({item:o})=>[e(_,f({padding:"12px",height:"60px",width:"233px",color:t.isSelected(o.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:s=>t.$emit("update:modelValue",[o.id])},t.$attrs),{default:i(()=>[e(b,{align:"center-center"},{default:i(()=>[e(l,{icon:"mdi-thermometer"}),e(g,{lineClamp:1},{default:i(()=>[T(I(o.label),1)]),_:2},1024),e(G),e(l,{color:t.ColorEnum.Primary,icon:"mdi-link"},null,8,["color"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[w(t.$slots,(o,s)=>({name:s,fn:i(B=>[v(t.$slots,s,N(P(B)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=j(V,[["render",J]]);V.__docgenInfo={displayName:"FSBaseDataDefinitionsList",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue"]};const be={title:"Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList",component:h,subcomponents:{FSDataTable:F},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataDefinitions1"]}}},m={render:t=>({components:{FSBaseDataDefinitionsList:h},setup(){return{args:t}},template:`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataDefinitions1"}};var D,S,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ge=["Default"];export{m as Default,ge as __namedExportsOrder,be as default};
