import{d as q,c as w,w as D,A as p,B as F,C,D as E,Q as N,E as r,j as P,M as k,N as R,O as U,P as i,J as g,K as b,H as G}from"./vue.esm-bundler-Zcuj-zyO.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{F as j}from"./FSChartTileUI-DAF0JyGS.js";import{F as A}from"./FSTagGroup-CWOOUSdp.js";import{F as x}from"./FSImage-CJNmFlk_.js";import{F as z}from"./FSText-DqK2dTtm.js";import{F as d}from"./FSIcon-CKEWDmaC.js";import{_ as V}from"./FSRow-4Qz6Bbpg.js";import{F as _}from"./FSDataTable-CNhZIgk-.js";import{e as O,c as H,C as J}from"./chartsTools-DEWfGuq6.js";import{u as K}from"./useChartOrganisationTypes-z1Q-rqxb.js";import{C as Q}from"./useColors-Cz5tOQmp.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-dJi94q2j.js";import"./FSClickable-CUaqPDhz.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./theme-DppimMvq.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSCheckbox-CunxM6rm.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./density-DMrbDfgW.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-CMMTOWvF.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./dimensions-BWgpWc0X.js";import"./form-ChxmsGl9.js";import"./FSWrapGroup-DSD82cKU.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./display-Db__yhk9.js";import"./FSTag-CHJ-tL1L.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./FSButton-BzTwanlk.js";import"./FSImageUI-Q0M2a9Ft.js";import"./FSLoader-CRmsosiO.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSDataTableUI-CkPwK-2M.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./VField-BtCsV974.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DN7QCs30.js";import"./FSSelectField-b29JGwjP.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSDivider-DOHnDXxM.js";import"./FSChip-DMpdcIDo.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const v=q({name:"FSBaseChartOrganisationTypesList",components:{FSChartTileUI:j,FSDataTable:_,FSTagGroup:A,FSImage:x,FSIcon:d,FSText:z,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{entities:n,fetching:f,getMany:h}=K(),T=w(()=>({modelsLabels:{fixedFilters:n.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const s of o)e.map(c=>c.id).includes(s.id)||e.push(s);return e},[]).map(e=>({value:e.id,text:e.label})).concat({value:"",text:"--"}),methodFilter:(e,o)=>o.length==0&&e==""||o.length>0&&o.some(s=>s.id==e)},chartType:{fixedFilters:W(J).map(e=>({value:e.value,text:O(e.value)})),methodFilter:(e,o)=>e==o}})),y=e=>t.modelValue.includes(e),u=()=>{h(t.chartOrganisationTypeFilters)};return D(()=>[t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!M.isEqual(e,o))&&u()},{immediate:!0}),{fetchingChartOrganisationTypes:f,chartOrganisationTypes:n,headersOptions:T,ColorEnum:Q,chartTypeLabel:O,isSelected:y,chartIcon:H}}});function Y(t,n,f,h,T,y){const u=p("FSImage"),e=p("FSTagGroup"),o=p("FSText"),s=p("FSChartTileUI"),c=p("FSDataTable");return F(),C(c,P({items:t.chartOrganisationTypes,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisationTypes,headersOptions:t.headersOptions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.$emit("update:modelValue",a))},t.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(b(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(F(),C(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:a})=>[i(e,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),i(o,null,{default:r(()=>[g(b(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[i(e,{editable:!1,tags:a.modelsLabels.map(m=>m.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(s,{variant:"standard",label:a.label,"category-label":a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.ColorEnum.Light,to:t.$props.itemTo&&t.$props.itemTo(a)},null,8,["label","category-label","icon","imageId","type","color","to"])]),_:2},[N(t.$slots,(a,m)=>({name:m,fn:r(B=>[k(t.$slots,m,R(U(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=X(v,[["render",Y]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue"]};const jt={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisationTypes1"]}}},l={render:t=>({components:{FSBaseChartOrganisationTypesList:$},setup(){return{args:t}},template:`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisationTypes1"}};var S,I,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'chartOrganisationTypes1'
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const At=["Default"];export{l as Default,At as __namedExportsOrder,jt as default};
