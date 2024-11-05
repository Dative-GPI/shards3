import{d as q,c as w,w as D,y as m,z as b,A as O,B as E,O as N,C as r,m as k,K as P,L as R,M as U,N as i,H as g,I as S,F as G}from"./vue.esm-bundler-l-siv0w9.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{_ as V}from"./FSRow-CbEgVN08.js";import{F as d}from"./FSIcon-CvjHaRpL.js";import{F as z}from"./FSImage-yMh7QIr7.js";import{F as A}from"./FSTagGroup-BXRfJixk.js";import{F as j}from"./FSChartTileUI-E3F3fPus.js";import{F as _}from"./FSDataTable-Ut8ZCOp7.js";import{u as H}from"./useChartOrganisations-CRfsN2xB.js";import{C as K}from"./useColors-r8nvatqt.js";import{e as y,c as x,C as J}from"./chartsTools-BLHehWXU.js";import{g as Q}from"./enumTools-BEsapygt.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./FSImageUI-CFHBCxhz.js";import"./FSLoader-t85MEsQz.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./VImg-CZhZqiQJ.js";import"./rounded-uHrmshEX.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSWrapGroup-CDPc2Zen.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./resizeObserver-CjMDZ25n.js";import"./FSTag-l1mt7SAO.js";import"./FSSpan-Di50moR2.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-SUHx-DYG.js";import"./FSButtonNextIcon-CWkFzDlU.js";import"./FSButton-DSUuKlnr.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-Dv9jZ2SG.js";import"./FSCard-CBOjzTDC.js";import"./FSCol-BvqytbKT.js";import"./FSTile-DITjMSfT.js";import"./FSCheckbox-BuNOyTVK.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./form-CLJq5y5w.js";import"./FSDataTableUI-v1niesVH.js";import"./FSText-BV49O4zh.js";import"./FSSearchField-BjWXLOyv.js";import"./FSTextField-DavtGNe9.js";import"./FSBaseField-kRvwdySD.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-S8Rrt-Eq.js";import"./FSDialogMenu-UKP76pyV.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-BsSRvUgm.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSRadio-DYhcD128.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-DpktbJ_S.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BtyXSsGO.js";import"./FSChip-CZIsa9Si.js";import"./FSOptionGroup-NVInOHNN.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartAllowedStep-TTV4b-8I.js";import"./timeRange-Bfx7KHHy.js";import"./index-3zl-tJp_.js";const v=q({name:"FSBaseChartOrganisationsList",components:{FSChartTileUI:j,FSDataTable:_,FSTagGroup:A,FSImage:z,FSIcon:d,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:f,getMany:h}=H(),F=w(()=>({modelsLabels:{fixedFilters:n.value.map(t=>t.modelsLabels).reduce((t,o)=>{for(const s of o)t.map(c=>c.id).includes(s.id)||t.push(s);return t},[]).map(t=>({value:t.id,text:t.label})).concat({value:"",text:"--"}),methodFilter:(t,o)=>o.length==0&&t==""||o.length>0&&o.some(s=>s.id==t)},chartType:{fixedFilters:Q(J).map(t=>({value:t.value,text:y(t.value)})),methodFilter:(t,o)=>t==o}})),C=t=>e.modelValue.includes(t),u=()=>{h(e.chartOrganisationFilters)};return D(()=>[e.chartOrganisationFilters],(t,o)=>{(!t&&!o||!M.isEqual(t,o))&&u()},{immediate:!0}),{fetchingChartOrganisations:f,chartOrganisations:n,headersOptions:F,ColorEnum:K,chartTypeLabel:y,isSelected:C,chartIcon:x}}});function X(e,n,f,h,F,C){const u=m("FSImage"),t=m("FSTagGroup"),o=m("FSChartTileUI"),s=m("FSText"),c=m("FSDataTable");return b(),O(c,k({items:e.chartOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingChartOrganisations,headersOptions:e.headersOptions,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a))},e.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(S(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(b(),O(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:a})=>[i(t,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[i(t,{editable:!1,tags:a.modelsLabels.map(p=>p.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(o,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:e.ColorEnum.Light,to:e.$props.itemTo&&e.$props.itemTo(a)},null,8,["label","categoryLabel","icon","imageId","type","color","to"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:e.chartIcon(a.chartType)},null,8,["icon"]),i(s,null,{default:r(()=>[g(S(e.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),_:2},[N(e.$slots,(a,p)=>({name:p,fn:r(B=>[P(e.$slots,p,R(U(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=W(v,[["render",X]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const ze={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},l={render:e=>({components:{FSBaseChartOrganisationsList:$},setup(){return{args:e}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var T,L,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ae=["Default"];export{l as Default,Ae as __namedExportsOrder,ze as default};
