import{d as w,c as y,w as N,y as T,z as D,A as E,B as k,O as M,C as i,J as R,K as G,L as P,N as n,D as S,E as O,m as j}from"./vue.esm-bundler-D3ngFwGY.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as v}from"./FSDataTable-DlxIKonB.js";import{F as H}from"./FSTagGroup-DXeygGL2.js";import{F as b}from"./FSIcon-C0akNC9K.js";import{_ as I}from"./FSRow-CYD73_tT.js";import{u as J}from"./useAppOrganisationId-BemUUsho.js";import{A as r}from"./applications-pqrfQrBX.js";import{u as K}from"./useScenarioOrganisations-DorjSskg.js";import{u as U}from"./useScenarioOrganisationTypes-D-rpT2mx.js";import{u as Q}from"./useTranslations-Dmqoe3Kp.js";import{g as W}from"./enumTools-BEsapygt.js";import{C as X,A as C}from"./alertsTools-BS2bJTaH.js";import{C as Y}from"./useColors-B-331F-F.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSSpan-BETzK1-3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BdvsvlI6.js";import"./useBreakpoints-DbdoA89o.js";import"./css-BOQ-6X_w.js";import"./color-D4nM6Ihv.js";import"./theme-DFFIkVWm.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./FSCol-CVj0zcU5.js";import"./FSDataTableUI-DPRubWn9.js";import"./vue-router-DrtreIio.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./VIcon-DBlUULm8.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./transition-DtcXiLpW.js";import"./form-thVqu4eJ.js";import"./FSCard-BZyb3dNk.js";import"./FSText-CcQBLJU9.js";import"./useSlots-BM37IFiq.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./FSClickable-Cf6v5KqZ.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./VField-Ddzu1ph-.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./FSSelectField-BKxSDF0S.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./FSDivider-jFrTxQOo.js";import"./FSChip-CyfHnFR3.js";import"./FSOptionGroup-6zwPUnvh.js";import"./filter-C1K_d8Vd.js";import"./VBtn-DIpB4JrY.js";import"./filter-CS3Mhwo2.js";import"./base-DtpW3JT2.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./FSTag-t0YobQoW.js";import"./chartTimeStep-DIQ4HUqp.js";import"./scenarioChart-DT-qM5Ky.js";import"./index-DfSX31J9.js";const ee=()=>{const{organisationId:a}=J();return{$r:t=>(t.params?t.params.organisationId=a.value:t.params={organisationId:a.value},t)}},A=w({name:"FSBaseScenariosList",components:{FSDataTable:v,FSTagGroup:H,FSIcon:b,FSRow:I},props:{tableCode:{type:String,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},scenarioOrganisationFilters:{type:Object,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},showAssociation:{type:Boolean,required:!1,default:!0},scope:{type:Number,required:!1,default:r.None}},emits:["update:modelValue"],setup(a){const{$tr:s}=Q(),{entities:t,fetching:F,getMany:u}=K(),{entities:l,fetching:g,getMany:m}=U(),{$r:o}=ee(),p=y(()=>{if(a.showAssociation)return[{columnId:"association",text:s("ui.common.association",""),value:"association",sortable:!1,filterable:!1,index:-1,hidden:!1}]}),f=y(()=>({criticity:{fixedFilters:W(X).map(e=>({value:e.value,text:C.criticityLabel(e.value)})),methodFilter:(e,d)=>e==d}})),q=y(()=>a.scope==r.Organisation?t.value:a.scope==r.OrganisationType?l.value:t.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})).concat(l.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})))),B=e=>e.scope==r.OrganisationType?o({name:"scenario-organisation-type",params:{entityId:e.id}}):o({name:"scenario-organisation",params:{entityId:e.id}}),_=()=>{a.scope==r.OrganisationType?m(a.scenarioOrganisationTypeFilters):a.scope==r.Organisation?u(a.scenarioOrganisationFilters):(u(a.scenarioOrganisationFilters),m(a.scenarioOrganisationTypeFilters))};return N(()=>[a.scenarioOrganisationFilters,a.scenarioOrganisationTypeFilters,a.scope],(e,d)=>{(!e&&!d||!z.isEqual(e,d))&&_()},{immediate:!0}),{fetchingScenarioOrganisationTypes:g,fetchingScenarioOrganisations:F,scenarioOrganisationTypes:l,scenarioOrganisations:t,headerAssociation:p,ApplicationScope:r,headersOptions:f,AlertTools:C,ColorEnum:Y,scenarios:q,routerLink:B}}});function ae(a,s,t,F,u,l){const g=T("FSTagGroup"),m=T("FSDataTable");return D(),E(m,j({loading:a.fetchingScenarioOrganisationTypes||a.fetchingScenarioOrganisations,headersOptions:a.headersOptions,extraHeaders:a.headerAssociation,items:a.scenarios,itemTo:a.routerLink,modelValue:a.$props.modelValue,tableCode:a.$props.tableCode,"onUpdate:modelValue":s[0]||(s[0]=o=>a.$emit("update:modelValue",o))},a.$attrs),k({"item.icon":i(({item:o})=>[n(b,null,{default:i(()=>[S(O(o.icon),1)]),_:2},1024)]),"item.criticity":i(({item:o})=>[n(I,{align:"center-left"},{default:i(()=>[n(b,{color:a.AlertTools.criticityColor(o.criticity)},{default:i(()=>[S(O(a.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),n(x,null,{default:i(()=>[S(O(a.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":i(({item:o})=>[n(g,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[M(a.$slots,(o,p)=>({name:p,fn:i(f=>[R(a.$slots,p,G(P(f)))])}))]),1040,["loading","headersOptions","extraHeaders","items","itemTo","modelValue","tableCode"])}const $=Z(A,[["render",ae]]);A.__docgenInfo={displayName:"FSBaseScenariosList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showAssociation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"scope",type:{name:"ApplicationScope"},required:!1,defaultValue:{func:!1,value:"ApplicationScope.None"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarios/FSBaseScenariosList.vue"]};const Ga={title:"Foundation/Core/Lists/Base Lists/BaseScenariosList",component:$,subcomponents:{FSDataTable:v},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},c={render:a=>({components:{FSBaseScenariosList:$},setup(){return{args:a}},template:`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var h,L,V;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenariosList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: []
  }
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const Pa=["Default"];export{c as Default,Pa as __namedExportsOrder,Ga as default};