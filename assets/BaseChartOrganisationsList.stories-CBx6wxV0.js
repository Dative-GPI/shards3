import{d as q,c as w,w as D,A as m,B as b,C as O,D as E,Q as N,E as r,j as P,M as k,N as R,O as U,P as i,J as g,K as S,H as G}from"./vue.esm-bundler-Zcuj-zyO.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{_ as V}from"./FSRow-4Qz6Bbpg.js";import{F as j}from"./FSText-DqK2dTtm.js";import{F as d}from"./FSIcon-CKEWDmaC.js";import{F as A}from"./FSImage-CJNmFlk_.js";import{F as x}from"./FSTagGroup-CWOOUSdp.js";import{F as z}from"./FSChartTileUI-CeLgJLLE.js";import{F as _}from"./FSDataTable-mZv1Y6rH.js";import{u as H}from"./useChartOrganisations-Dmn-weli.js";import{C as J}from"./useColors-Cz5tOQmp.js";import{e as T,c as K,C as Q}from"./chartsTools-CcObSDja.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./VIcon-DsLd3bsf.js";import"./color-mm3JSYKM.js";import"./theme-DppimMvq.js";import"./FSImageUI-Q0M2a9Ft.js";import"./FSLoader-CRmsosiO.js";import"./dimensions-BWgpWc0X.js";import"./elevation-BrHPj82J.js";import"./locale-Beavd5eP.js";import"./VImg-DaKoZ_qJ.js";import"./rounded-3VvIKpNW.js";import"./transition-shOmLEJh.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSWrapGroup-DSD82cKU.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-D14OnwAh.js";import"./display-Db__yhk9.js";import"./resizeObserver-BOpsWgva.js";import"./FSTag-CHJ-tL1L.js";import"./FSSpan-Bb6VK1Ws.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./index-CMMTOWvF.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./FSTile-dJi94q2j.js";import"./FSCheckbox-CunxM6rm.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./form-ChxmsGl9.js";import"./FSDataTableUI-Cipm8N-2.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./VField-BtCsV974.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DN7QCs30.js";import"./FSSelectField-ChNtQfMF.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSDivider-DOHnDXxM.js";import"./FSChip-DMpdcIDo.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const v=q({name:"FSBaseChartOrganisationsList",components:{FSChartTileUI:z,FSDataTable:_,FSTagGroup:x,FSImage:A,FSIcon:d,FSText:j,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:f,getMany:h}=H(),F=w(()=>({modelsLabels:{fixedFilters:n.value.map(t=>t.modelsLabels).reduce((t,o)=>{for(const s of o)t.map(c=>c.id).includes(s.id)||t.push(s);return t},[]).map(t=>({value:t.id,text:t.label})).concat({value:"",text:"--"}),methodFilter:(t,o)=>o.length==0&&t==""||o.length>0&&o.some(s=>s.id==t)},chartType:{fixedFilters:W(Q).map(t=>({value:t.value,text:T(t.value)})),methodFilter:(t,o)=>t==o}})),C=t=>e.modelValue.includes(t),u=()=>{h(e.chartOrganisationFilters)};return D(()=>[e.chartOrganisationFilters],(t,o)=>{(!t&&!o||!M.isEqual(t,o))&&u()},{immediate:!0}),{fetchingChartOrganisations:f,chartOrganisations:n,headersOptions:F,ColorEnum:J,chartTypeLabel:T,isSelected:C,chartIcon:K}}});function Y(e,n,f,h,F,C){const u=m("FSImage"),t=m("FSTagGroup"),o=m("FSChartTileUI"),s=m("FSText"),c=m("FSDataTable");return b(),O(c,P({items:e.chartOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingChartOrganisations,headersOptions:e.headersOptions,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a))},e.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(S(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(b(),O(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:a})=>[i(t,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[i(t,{editable:!1,tags:a.modelsLabels.map(p=>p.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(o,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:e.ColorEnum.Light,to:e.$props.itemTo&&e.$props.itemTo(a)},null,8,["label","categoryLabel","icon","imageId","type","color","to"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:e.chartIcon(a.chartType)},null,8,["icon"]),i(s,null,{default:r(()=>[g(S(e.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),_:2},[N(e.$slots,(a,p)=>({name:p,fn:r(B=>[k(e.$slots,p,R(U(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=X(v,[["render",Y]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const je={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},l={render:e=>({components:{FSBaseChartOrganisationsList:$},setup(){return{args:e}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var y,L,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ae=["Default"];export{l as Default,Ae as __namedExportsOrder,je as default};
