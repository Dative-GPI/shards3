import{d as _,w as $,y as m,z as f,A as h,M as B,N as q,B as a,m as N,I as v,J as D,K as w,L as i,E as C,G as k,D as E}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as y}from"./FSDataTable-CY1ZQjJB.js";import{F as d}from"./FSIcon-D0oLoXA8.js";import{F as U}from"./FSImage-BSHLJI6z.js";import{F as M}from"./FSTagGroup-xrP0TRup.js";import{F as z}from"./FSChartTileUI-DF1oVuQR.js";import{P as F}from"./charts-BPLoyxCB.js";import{u as A}from"./useChartOrganisations-Da2b9mlX.js";import{C as R}from"./useColors-Ccf8xVyg.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-hEATKEG-.js";import"./css-0IiqzUPc.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-BU2q2sTe.js";import"./FSRow-DzlUM3r6.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DBp9zqfN.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-ILpIKg_O.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-BinAVVx_.js";import"./FSText-BN3VvfV9.js";import"./FSSearchField-jIW8dpQv.js";import"./FSTextField-BRxSBTNG.js";import"./FSBaseField-D7aNDTnY.js";import"./FSButton-77cfmuX3.js";import"./FSClickable-DytVXb9R.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-R8OzCLdx.js";import"./FSDialogMenu-DSPGm4fK.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-HxrzZDKP.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-BDkTog43.js";import"./FSWrapGroup-DUGqUei2.js";import"./FSFadeOut-BJ1ngUIg.js";import"./FSRadio-ByoRox_c.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-C2EXjQHz.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CuFEGgLT.js";import"./FSChip-fUG8p2n0.js";import"./FSOptionGroup-BxhrpUUr.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-RgjYdf_W.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTag-CIkbjBOL.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-3zl-tJp_.js";const I=_({name:"FSBaseChartOrganisationsList",components:{FSDataTable:y,FSIcon:d,FSImage:U,FSTagGroup:M,FSChartTileUI:z},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},plotPer:{type:Number,required:!1,default:F.None},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(t){const{entities:n,fetching:u,getMany:l}=A(),g=r=>t.modelValue.includes(r),c=()=>{t.plotPer===F.None?l(t.chartOrganisationFilters):l({...t.chartOrganisationFilters,plotPer:t.plotPer})};return $(()=>[t.chartOrganisationFilters,t.plotPer],(r,o)=>{(!r&&!o||!G.isEqual(r,o))&&c()},{immediate:!0}),{ColorEnum:R,fetchingChartOrganisations:u,chartOrganisations:n,isSelected:g}}});function J(t,n,u,l,g,c){const r=m("FSImage"),o=m("FSTagGroup"),L=m("FSChartTileUI"),P=m("FSDataTable");return f(),h(P,N({items:t.chartOrganisations,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisations,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=e=>t.$emit("update:modelValue",e))},t.$attrs),B({"header.imageId-title":a(()=>[i(d,null,{default:a(()=>[C(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":a(({item:e})=>[i(d,null,{default:a(()=>[C(k(e.icon),1)]),_:2},1024)]),"item.imageId":a(({item:e})=>[e.imageId?(f(),h(r,{key:0,height:"32px",width:"32px",imageId:e.imageId},null,8,["imageId"])):E("",!0)]),"item.tags":a(({item:e})=>[i(o,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.modelsLabels":a(({item:e})=>[i(o,{editable:!1,tags:e.modelsLabels.map(s=>s.label)},null,8,["tags"])]),"item.tile":a(({item:e})=>[i(L,{label:e.label,categoryLabel:e.chartCategoryLabel,icon:e.icon,imageId:e.imageId,type:e.chartType,to:t.$props.itemTo&&t.$props.itemTo(e)},null,8,["label","categoryLabel","icon","imageId","type","to"])]),_:2},[q(t.$slots,(e,s)=>({name:s,fn:a(V=>[v(t.$slots,s,D(w(V)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const T=j(I,[["render",J]]);I.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"plotPer",type:{name:"PlotPer"},required:!1,defaultValue:{func:!1,value:"PlotPer.None"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const Be={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:T,subcomponents:{FSDataTable:y},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},p={render:t=>({components:{FSBaseChartOrganisationsList:T},setup(){return{args:t}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var b,O,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const qe=["Default"];export{p as Default,qe as __namedExportsOrder,Be as default};
