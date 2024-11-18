import{d as _,c as v,w as B,y as S,z as $,A as q,B as w,O as A,C as r,J as D,K as E,L as N,N as a,D as m,E as l,m as I}from"./vue.esm-bundler-D3ngFwGY.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-DlxIKonB.js";import{F as p}from"./FSIcon-C0akNC9K.js";import{F as R}from"./FSTagGroup-DXeygGL2.js";import{_ as C}from"./FSRow-CYD73_tT.js";import{u as k}from"./useScenarioOrganisations-DorjSskg.js";import{g as G}from"./enumTools-BEsapygt.js";import{C as z,A as O}from"./alertsTools-BS2bJTaH.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSSpan-BETzK1-3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BdvsvlI6.js";import"./useBreakpoints-DbdoA89o.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./color-D4nM6Ihv.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./FSCol-CVj0zcU5.js";import"./FSDataTableUI-DPRubWn9.js";import"./vue-router-DrtreIio.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./VIcon-DBlUULm8.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./transition-DtcXiLpW.js";import"./form-thVqu4eJ.js";import"./FSCard-BZyb3dNk.js";import"./FSText-CcQBLJU9.js";import"./useSlots-BM37IFiq.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./FSClickable-Cf6v5KqZ.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./VField-Ddzu1ph-.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./useTranslations-Dmqoe3Kp.js";import"./FSSelectField-BKxSDF0S.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./FSDivider-jFrTxQOo.js";import"./FSChip-CyfHnFR3.js";import"./FSOptionGroup-6zwPUnvh.js";import"./filter-C1K_d8Vd.js";import"./VBtn-DIpB4JrY.js";import"./filter-CS3Mhwo2.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./FSTag-t0YobQoW.js";import"./chartTimeStep-DIQ4HUqp.js";import"./scenarioChart-DT-qM5Ky.js";const T=_({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:V,FSTagGroup:R,FSIcon:p,FSRow:C},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:u,getMany:d}=k(),c=v(()=>({criticity:{fixedFilters:G(z).map(t=>({value:t.value,text:O.criticityLabel(t.value)})),methodFilter:(t,i)=>t==i}})),f=t=>e.modelValue.includes(t);return B(()=>e.scenarioOrganisationFilters,(t,i)=>{(!t&&!i||!P.isEqual(t,i))&&d(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:u,scenarioOrganisations:n,headersOptions:c,AlertTools:O,isSelected:f}}});function J(e,n,u,d,c,f){const t=S("FSTagGroup"),i=S("FSDataTable");return $(),q(i,I({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,headersOptions:e.headersOptions,"onUpdate:modelValue":n[0]||(n[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),w({"item.icon":r(({item:o})=>[a(p,null,{default:r(()=>[m(l(o.icon),1)]),_:2},1024)]),"item.criticity":r(({item:o})=>[a(C,{align:"center-left"},{default:r(()=>[a(p,{color:e.AlertTools.criticityColor(o.criticity)},{default:r(()=>[m(l(e.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),a(j,null,{default:r(()=>[m(l(e.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":r(({item:o})=>[a(t,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[A(e.$slots,(o,g)=>({name:g,fn:r(h=>[D(e.$slots,g,E(N(h)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue","headersOptions"])}const L=M(T,[["render",J]]);T.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const vt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:L,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationsList:L},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var F,y,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenarioOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: []
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Bt=["Default"];export{s as Default,Bt as __namedExportsOrder,vt as default};