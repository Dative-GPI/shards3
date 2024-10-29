import{d as U,c as O,w as P,y as d,z as V,A as v,B as G,O as R,C as r,m as j,K as z,L as A,M as H,N as s,H as S,I as _,F as K}from"./vue.esm-bundler-l-siv0w9.js";import{_ as J}from"./lodash-BiW_TGGX.js";import{F as Q}from"./FSChartTileUI-Bxf9w_r3.js";import{F as W}from"./FSTagGroup-B8vm8ffE.js";import{F as X}from"./FSImage-ffhN4Yyt.js";import{F as y}from"./FSIcon-uIr9VdFq.js";import{_ as M}from"./FSRow-CbEgVN08.js";import{F as N}from"./FSDataTable-BVUgtWuH.js";import{u as Y}from"./useChartOrganisations-CRfsN2xB.js";import{u as Z}from"./useChartOrganisationTypes-D9UWUssW.js";import{C as x}from"./useColors-Bs2u1_6J.js";import{e as B,c as ee,C as w}from"./chartsTools-EfUqT6mw.js";import{g as te}from"./enumTools-BEsapygt.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-DX4IdlJV.js";import"./FSClickable-Up0p3Vk8.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./display-BWzbFTnS.js";import"./FSTag-ErOwxBbY.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./FSButton-DcUuAZqz.js";import"./FSImageUI-DrOfkU7V.js";import"./FSLoader-kY4Od3NB.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSDataTableUI-DzCwNAwg.js";import"./vue-router-C4bv40Tb.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DpVu8WDf.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-CELx6cWV.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartAllowedStep-TTV4b-8I.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const k=U({name:"FSBaseChartsList",components:{FSChartTileUI:Q,FSDataTable:N,FSTagGroup:W,FSImage:X,FSIcon:y,FSRow:M},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:b,fetching:I,getMany:L}=Y(),{entities:u,fetching:F,getMany:c}=Z(),g=e=>t.modelValue.includes(e),T=()=>{L(t.chartOrganisationFilters),c(t.chartOrganisationTypeFilters)},h=O(()=>b.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(u.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),a=O(()=>({modelsLabels:{fixedFilters:u.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const i of o)e.map(f=>f.id).includes(i.id)||e.push(i);return e},[]).map(e=>({value:e.id,text:e.label})),methodFilter:(e,o)=>o.some(i=>i.id==e)},chartType:{fixedFilters:te(w).filter(e=>e.value!=w.None).map(e=>({value:e.value,text:B(e.value)})),methodFilter:(e,o)=>e==o}})),l=e=>{const o=g(e);m(o?t.modelValue.filter(i=>i!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]),n("update",{modelValue:[],scope:[]});return}const o=h.value.filter(p=>e.includes(p.id)),i=o.map(p=>p.id),f=o.map(p=>p.scope);n("update:modelValue",i),n("update:scope",f),n("update",{modelValue:i,scope:f})};return P(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!J.isEqual(e,o))&&T()},{immediate:!0}),{fetchingChartOrganisationTypes:F,fetchingChartOrganisations:I,chartOrganisationTypes:u,chartOrganisations:b,headersOptions:a,ColorEnum:x,charts:h,chartTypeLabel:B,isSelected:g,chartIcon:ee,onSelect:m,update:l}}});function oe(t,n,b,I,L,u){const F=d("FSImage"),c=d("FSTagGroup"),g=d("FSText"),T=d("FSChartTileUI"),h=d("FSDataTable");return V(),v(h,j({defaultMode:"iterator",loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,headersOptions:t.headersOptions,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),G({"header.imageId-title":r(()=>[s(y,null,{default:r(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[s(y,null,{default:r(()=>[S(_(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(V(),v(F,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):K("",!0)]),"item.tags":r(({item:a})=>[s(c,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[s(M,{wrap:!1},{default:r(()=>[s(y,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),s(g,null,{default:r(()=>[S(_(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[s(c,{editable:!1,tags:a.modelsLabels.map(l=>l.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[s(T,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:l=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[R(t.$slots,(a,l)=>({name:l,fn:r(m=>[z(t.$slots,l,A(H(m)))])}))]),1040,["loading","headersOptions","items","tableCode","modelValue","onUpdate:modelValue"])}const D=ae(k,[["render",oe]]);k.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Qt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:D,subcomponents:{FSDataTable:N},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},C={render:t=>({components:{FSBaseChartsList:D},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var $,q,E;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    \`
  }),
  args: {
    tableCode: 'charts1'
  }
}`,...(E=(q=C.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Wt=["Default"];export{C as Default,Wt as __namedExportsOrder,Qt as default};
