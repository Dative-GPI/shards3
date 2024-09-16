import{d as V,w as $,y as n,z as c,A as f,M as B,N as _,B as o,m as q,I as N,J as v,K as D,L as m,E as w,G as k,D as E}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as O}from"./FSDataTable-xX9JgO_Q.js";import{F as S}from"./FSIcon-DwJNOKvG.js";import{F as U}from"./FSImage-BxDhaxzU.js";import{F as M}from"./FSTagGroup-Dj83q6UG.js";import{F as z}from"./FSChartTileUI-DItqly-P.js";import{P as h}from"./charts-BPLoyxCB.js";import{u as A}from"./useChartOrganisations-Da2b9mlX.js";import{C as R}from"./useColors-DlnF7i6T.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DmL672AK.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DPKcfP0u.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-Dakm4bPu.js";import"./FSText-DyldgdXP.js";import"./FSSearchField-Cjbg81V-.js";import"./FSTextField-DIyIIzs_.js";import"./FSBaseField-BkzmckaL.js";import"./FSButton-CyN0itWL.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CBLEXrby.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-BogZOmN_.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Cx7T0QZL.js";import"./FSWrapGroup-yFK4C9rw.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-vIgl-vXK.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSChip-Cu5YGhb-.js";import"./FSOptionGroup-BXRAcD1O.js";import"./filter-CTnmeGG4.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-C0XOuHIu.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTag-CiTQmVvb.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-DfSX31J9.js";const y=V({name:"FSBaseChartOrganisationsList",components:{FSDataTable:O,FSIcon:S,FSImage:U,FSTagGroup:M,FSChartTileUI:z},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},plotPer:{type:Number,required:!1,default:h.None},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(t){const{entities:i,fetching:d,getMany:l}=A(),u=r=>t.modelValue.includes(r),g=()=>{t.plotPer===h.None?l(t.chartOrganisationFilters):l({...t.chartOrganisationFilters,plotPer:t.plotPer})};return $(()=>[t.chartOrganisationFilters,t.plotPer],(r,a)=>{(!r&&!a||!G.isEqual(r,a))&&g()},{immediate:!0}),{ColorEnum:R,fetchingChartOrganisations:d,chartOrganisations:i,isSelected:u}}});function J(t,i,d,l,u,g){const r=n("FSImage"),a=n("FSTagGroup"),I=n("FSChartTileUI"),L=n("FSDataTable");return c(),f(L,q({items:t.chartOrganisations,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisations,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=e=>t.$emit("update:modelValue",e))},t.$attrs),B({"item.icon":o(({item:e})=>[m(S,null,{default:o(()=>[w(k(e.icon),1)]),_:2},1024)]),"item.imageId":o(({item:e})=>[e.imageId?(c(),f(r,{key:0,height:"32px",width:"32px",imageId:e.imageId},null,8,["imageId"])):E("",!0)]),"item.tags":o(({item:e})=>[m(a,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.modelsLabels":o(({item:e})=>[m(a,{editable:!1,tags:e.modelsLabels.map(s=>s.label)},null,8,["tags"])]),"item.tile":o(({item:e})=>[m(I,{label:e.label,categoryLabel:e.chartCategoryLabel,icon:e.icon,imageId:e.imageId,type:e.chartType,to:t.$props.itemTo&&t.$props.itemTo(e)},null,8,["label","categoryLabel","icon","imageId","type","to"])]),_:2},[_(t.$slots,(e,s)=>({name:s,fn:o(P=>[N(t.$slots,s,v(D(P)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const T=j(y,[["render",J]]);y.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"plotPer",type:{name:"PlotPer"},required:!1,defaultValue:{func:!1,value:"PlotPer.None"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const _e={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:T,subcomponents:{FSDataTable:O},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},p={render:t=>({components:{FSBaseChartOrganisationsList:T},setup(){return{args:t}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var C,F,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'chartOrganisations1'
  }
}`,...(b=(F=p.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const qe=["Default"];export{p as Default,qe as __namedExportsOrder,_e as default};
