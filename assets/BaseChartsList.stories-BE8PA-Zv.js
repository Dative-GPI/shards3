import{d as N,c as O,w as U,y as d,z as V,A as v,B as P,O as G,C as r,m as R,K as j,L as z,M as A,N as s,H as S,I as _,F as H}from"./vue.esm-bundler-l-siv0w9.js";import{_ as K}from"./lodash-BiW_TGGX.js";import{F as J}from"./FSChartTileUI-DiadOIe_.js";import{F as Q}from"./FSTagGroup-BU9jkaBL.js";import{F as W}from"./FSImage-CV7DaB6H.js";import{F as y}from"./FSIcon-uIr9VdFq.js";import{_ as E}from"./FSRow-CbEgVN08.js";import{F as M}from"./FSDataTable-CRlgOjfI.js";import{u as X}from"./useChartOrganisations---7NiAMz.js";import{u as Y}from"./useChartOrganisationTypes-xUaxPP-b.js";import{C as Z}from"./useColors-Bs2u1_6J.js";import{e as B,c as x,C as ee}from"./chartsTools-BH_Hj3cC.js";import{g as te}from"./enumTools-BEsapygt.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-D5AdGt7U.js";import"./FSClickable-DbvAho3u.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./display-BWzbFTnS.js";import"./FSTag-ErOwxBbY.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./FSButton-v1WOpc1k.js";import"./FSImageUI-DrOfkU7V.js";import"./FSLoader-kY4Od3NB.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./imageDetails-CcKVJC_g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-DG8ITK-n.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSDataTableUI-Bq1Fpbjw.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-D65DWRuU.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartAllowedStep-TTV4b-8I.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const k=N({name:"FSBaseChartsList",components:{FSChartTileUI:J,FSDataTable:M,FSTagGroup:Q,FSImage:W,FSIcon:y,FSRow:E},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:b,fetching:I,getMany:L}=X(),{entities:u,fetching:F,getMany:c}=Y(),g=e=>t.modelValue.includes(e),T=()=>{L(t.chartOrganisationFilters),c(t.chartOrganisationTypeFilters)},h=O(()=>b.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(u.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),a=O(()=>({modelsLabels:{fixedFilters:u.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const i of o)e.map(f=>f.id).includes(i.id)||e.push(i);return e},[]).map(e=>({value:e.id,text:e.label})).concat({value:"",text:"--"}),methodFilter:(e,o)=>o.length==0&&e==""||o.length>0&&o.some(i=>i.id==e)},chartType:{fixedFilters:te(ee).map(e=>({value:e.value,text:B(e.value)})),methodFilter:(e,o)=>e==o}})),l=e=>{const o=g(e);m(o?t.modelValue.filter(i=>i!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]),n("update",{modelValue:[],scope:[]});return}const o=h.value.filter(p=>e.includes(p.id)),i=o.map(p=>p.id),f=o.map(p=>p.scope);n("update:modelValue",i),n("update:scope",f),n("update",{modelValue:i,scope:f})};return U(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!K.isEqual(e,o))&&T()},{immediate:!0}),{fetchingChartOrganisationTypes:F,fetchingChartOrganisations:I,chartOrganisationTypes:u,chartOrganisations:b,headersOptions:a,ColorEnum:Z,charts:h,chartTypeLabel:B,isSelected:g,chartIcon:x,onSelect:m,update:l}}});function oe(t,n,b,I,L,u){const F=d("FSImage"),c=d("FSTagGroup"),g=d("FSText"),T=d("FSChartTileUI"),h=d("FSDataTable");return V(),v(h,R({defaultMode:"iterator",loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,headersOptions:t.headersOptions,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),P({"header.imageId-title":r(()=>[s(y,null,{default:r(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[s(y,null,{default:r(()=>[S(_(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(V(),v(F,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):H("",!0)]),"item.tags":r(({item:a})=>[s(c,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[s(E,{wrap:!1},{default:r(()=>[s(y,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),s(g,null,{default:r(()=>[S(_(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[s(c,{editable:!1,tags:a.modelsLabels.map(l=>l.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[s(T,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:l=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[G(t.$slots,(a,l)=>({name:l,fn:r(m=>[j(t.$slots,l,z(A(m)))])}))]),1040,["loading","headersOptions","items","tableCode","modelValue","onUpdate:modelValue"])}const D=ae(k,[["render",oe]]);k.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Wt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:D,subcomponents:{FSDataTable:M},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},C={render:t=>({components:{FSBaseChartsList:D},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var w,$,q;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Xt=["Default"];export{C as Default,Xt as __namedExportsOrder,Wt as default};
