import{d as V,w as _,y as n,z as g,A as f,M as $,N as B,B as o,m as q,I as N,J as v,K as D,L as m,E as w,G as k,D as E}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as O}from"./FSDataTable-B6hZuxqM.js";import{_ as S}from"./FSIcon-DHDofKUo.js";import{F as U}from"./FSImage-CyPZfe-0.js";import{F as M}from"./FSTagGroup-KaZAzl-t.js";import{F as z}from"./FSChartTileUI-BVgscb7P.js";import{P as h}from"./charts-BPLoyxCB.js";import{u as A}from"./useChartOrganisations-Da2b9mlX.js";import{C as R}from"./useColors-B5ivMAr9.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DIRgKG_M.js";import"./css-DLfrm0pR.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CekjR0Nk.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-YoHHo_JV.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-DAS46KTX.js";import"./FSText-8i4Fp1Ld.js";import"./FSSearchField-CnDYBu_t.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CpPmq5Yu.js";import"./FSChip-vR1IHQ3P.js";import"./FSOptionGroup-wuNvwQjf.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-DhMjHi0K.js";import"./base-CmdGny12.js";import"./FSTag-Bvc5sF_f.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-_Z9wfsFC.js";const y=V({name:"FSBaseChartOrganisationsList",components:{FSDataTable:O,FSIcon:S,FSImage:U,FSTagGroup:M,FSChartTileUI:z},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},plotPer:{type:Number,required:!1,default:h.None},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(t){const{entities:i,fetching:d,getMany:l}=A(),u=r=>t.modelValue.includes(r),c=()=>{t.plotPer===h.None?l(t.chartOrganisationFilters):l({...t.chartOrganisationFilters,plotPer:t.plotPer})};return _(()=>[t.chartOrganisationFilters,t.plotPer],(r,a)=>{(!r&&!a||!G.isEqual(r,a))&&c()},{immediate:!0}),{ColorEnum:R,fetchingChartOrganisations:d,chartOrganisations:i,isSelected:u}}});function J(t,i,d,l,u,c){const r=n("FSImage"),a=n("FSTagGroup"),T=n("FSChartTileUI"),L=n("FSDataTable");return g(),f(L,q({items:t.chartOrganisations,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisations,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=e=>t.$emit("update:modelValue",e))},t.$attrs),$({"item.icon":o(({item:e})=>[m(S,null,{default:o(()=>[w(k(e.icon),1)]),_:2},1024)]),"item.imageId":o(({item:e})=>[e.imageId?(g(),f(r,{key:0,height:"32px",width:"32px",imageId:e.imageId},null,8,["imageId"])):E("",!0)]),"item.tags":o(({item:e})=>[m(a,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.modelsLabels":o(({item:e})=>[m(a,{editable:!1,tags:e.modelsLabels.map(s=>s.label)},null,8,["tags"])]),"item.tile":o(({item:e})=>[m(T,{label:e.label,categoryLabel:e.chartCategoryLabel,icon:e.icon,imageId:e.imageId,type:e.chartType,to:t.$props.itemTo&&t.$props.itemTo(e)},null,8,["label","categoryLabel","icon","imageId","type","to"])]),_:2},[B(t.$slots,(e,s)=>({name:s,fn:o(P=>[N(t.$slots,s,v(D(P)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const I=j(y,[["render",J]]);y.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"plotPer",type:{name:"PlotPer"},required:!1,defaultValue:{func:!1,value:"PlotPer.None"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const _e={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:I,subcomponents:{FSDataTable:O},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},p={render:t=>({components:{FSBaseChartOrganisationsList:I},setup(){return{args:t}},template:`
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
}`,...(b=(F=p.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const $e=["Default"];export{p as Default,$e as __namedExportsOrder,_e as default};
