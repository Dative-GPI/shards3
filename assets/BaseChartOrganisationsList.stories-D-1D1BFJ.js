import{d as w,c as N,w as D,y as m,z as b,A as O,B as E,O as k,C as o,m as P,K as R,L as U,M as G,N as i,H as g,I as S,F as M}from"./vue.esm-bundler-l-siv0w9.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{_ as V}from"./FSRow-BjeBkMPV.js";import{F as d}from"./FSIcon-DfqW6nqQ.js";import{F as A}from"./FSImage-CruQww6b.js";import{F as j}from"./FSTagGroup-COxOJfpL.js";import{F as H}from"./FSChartTileUI-DYA-bZZd.js";import{F as v}from"./FSDataTable-Db0A6Nxk.js";import{u as K}from"./useChartOrganisations-DHLgAj9Q.js";import{C as x}from"./useColors-Bs2u1_6J.js";import{e as y,c as J,C as T}from"./chartsTools-EfUqT6mw.js";import{g as Q}from"./enumTools-BEsapygt.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./FSImageUI-C7_EaQD6.js";import"./FSLoader-DoOybHH0.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./VImg-CZhZqiQJ.js";import"./rounded-uHrmshEX.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSWrapGroup-CgUIplkM.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./resizeObserver-CjMDZ25n.js";import"./FSTag-BGAnsMdV.js";import"./FSSpan-DwE651wI.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-CntZC7f2.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSButton-cXGosxtu.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./FSCol-DD5MeAoT.js";import"./FSTile-C7XX9_aa.js";import"./FSCheckbox-BKUwhDef.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./form-CLJq5y5w.js";import"./FSDataTableUI-BIWQyI2R.js";import"./vue-router-C4bv40Tb.js";import"./FSText-4yVUx1mI.js";import"./FSSearchField-DcpwxoGP.js";import"./FSTextField-CIXfVN3n.js";import"./FSBaseField-CfZ7AiUY.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DqO1gPa4.js";import"./FSDialogMenu-vSYpuZ_d.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-92mUnG-8.js";import"./FSFadeOut-CszUv8uk.js";import"./FSRadio-CfSjScM8.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-R5W67bQu.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-Du2p4-qy.js";import"./FSChip-YuZ5nGgh.js";import"./FSOptionGroup-BY_KnwjN.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartSerie-BOhDkcUt.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const $=w({name:"FSBaseChartOrganisationsList",components:{FSChartTileUI:H,FSDataTable:v,FSTagGroup:j,FSImage:A,FSIcon:d,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(a){const{entities:n,fetching:f,getMany:h}=K(),F=N(()=>({modelsLabels:{fixedFilters:n.value.map(t=>t.modelsLabels).reduce((t,r)=>{for(const s of r)t.map(c=>c.id).includes(s.id)||t.push(s);return t},[]).map(t=>({value:t.id,text:t.label})),methodFilter:(t,r)=>r.some(s=>s.id==t)},chartType:{fixedFilters:Q(T).filter(t=>t.value!=T.None).map(t=>({value:t.value,text:y(t.value)})),methodFilter:(t,r)=>t==r}})),C=t=>a.modelValue.includes(t),u=()=>{h(a.chartOrganisationFilters)};return D(()=>[a.chartOrganisationFilters],(t,r)=>{(!t&&!r||!z.isEqual(t,r))&&u()},{immediate:!0}),{fetchingChartOrganisations:f,chartOrganisations:n,headersOptions:F,ColorEnum:x,chartTypeLabel:y,isSelected:C,chartIcon:J}}});function X(a,n,f,h,F,C){const u=m("FSImage"),t=m("FSTagGroup"),r=m("FSChartTileUI"),s=m("FSText"),c=m("FSDataTable");return b(),O(c,P({items:a.chartOrganisations,itemTo:a.$props.itemTo,loading:a.fetchingChartOrganisations,headersOptions:a.headersOptions,tableCode:a.$props.tableCode,modelValue:a.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=e=>a.$emit("update:modelValue",e))},a.$attrs),E({"header.imageId-title":o(()=>[i(d,null,{default:o(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":o(({item:e})=>[i(d,null,{default:o(()=>[g(S(e.icon),1)]),_:2},1024)]),"item.imageId":o(({item:e})=>[e.imageId?(b(),O(u,{key:0,height:"32px",width:"32px",imageId:e.imageId},null,8,["imageId"])):M("",!0)]),"item.tags":o(({item:e})=>[i(t,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.modelsLabels":o(({item:e})=>[i(t,{editable:!1,tags:e.modelsLabels.map(p=>p.label)},null,8,["tags"])]),"item.tile":o(({item:e})=>[i(r,{label:e.label,categoryLabel:e.chartCategoryLabel,icon:e.icon,imageId:e.imageId,type:e.chartType,to:a.$props.itemTo&&a.$props.itemTo(e)},null,8,["label","categoryLabel","icon","imageId","type","to"])]),"item.chartType":o(({item:e})=>[i(V,{wrap:!1},{default:o(()=>[i(d,{icon:a.chartIcon(e.chartType)},null,8,["icon"]),i(s,null,{default:o(()=>[g(S(a.chartTypeLabel(e.chartType)),1)]),_:2},1024)]),_:2},1024)]),_:2},[k(a.$slots,(e,p)=>({name:p,fn:o(q=>[R(a.$slots,p,U(G(q)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const B=W($,[["render",X]]);$.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const Me={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:B,subcomponents:{FSDataTable:v},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},l={render:a=>({components:{FSBaseChartOrganisationsList:B},setup(){return{args:a}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var L,I,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ze=["Default"];export{l as Default,ze as __namedExportsOrder,Me as default};
