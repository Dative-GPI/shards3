import{d as B,c as f,w as q,y as b,z as _,A as D,B as w,O as M,C as n,m as N,K as k,L as E,M as G,N as y,H as P,I as j}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-NOw_AMP7.js";import{F as O}from"./FSIcon-vAlkpflo.js";import{F as A}from"./FSTagGroup-BoqJeS7c.js";import{u as H}from"./useScenarioOrganisations-ZnmnQzcZ.js";import{u as K}from"./useScenarioOrganisationTypes-f2V6NXWE.js";import{C as R}from"./useColors-CrLBSafx.js";import{u as U}from"./useTranslations-CEnu7PZQ.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DxfJongP.js";import"./css-DVhR3h-A.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-hxDZWA7i.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-18K-cCtB.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-D8qRc7rc.js";import"./FSText-BxoWgsr8.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSSelectField-DzKPXup4.js";import"./FSDialogMenu-CzbYQerh.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CcLnrzQE.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-BbeeTMn-.js";import"./FSChip-D308mzkb.js";import"./FSOptionGroup-B1EDvnD9.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSTag-BRNenXXv.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-DtWQBHMx.js";import"./index-DfSX31J9.js";const L=B({name:"FSBaseScenariosList",components:{FSDataTable:V,FSIcon:O,FSTagGroup:A},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationFilters:{type:Object,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(a,{emit:r}){const{$tr:o}=U(),{entities:m,fetching:c,getMany:g}=H(),{entities:s,fetching:p,getMany:t}=K(),i=e=>a.modelValue.includes(e),d=f(()=>[{text:o("entity.scenario.icon","Icon"),value:"icon",sortable:!1},{text:o("entity.scenario.label","Label"),value:"label",sortable:!0},{text:o("entity.scenario.model-label","Model label"),value:"modelLabel",sortable:!0},{text:o("entity.scenario.data-category-label","Data category label"),value:"dataCategoryLabel",sortable:!0},{text:o("ui.common.action",""),value:"action",sortable:!1}]),h=f(()=>m.value.map(e=>({id:`${e.id}_${e.scope}`,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})).concat(s.value.map(e=>({id:`${e.id}_${e.scope}`,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})))),v=()=>{g(a.scenarioOrganisationFilters),t(a.scenarioOrganisationTypeFilters)},I=e=>{i(e)?r("update:modelValue",a.modelValue.filter($=>$!=e)):r("update:modelValue",[...a.modelValue,e])};return q(()=>[a.scenarioOrganisationFilters,a.scenarioOrganisationTypeFilters],(e,u)=>{(!e&&!u||!z.isEqual(e,u))&&v()},{immediate:!0}),{fetchingScenarioOrganisationTypes:p,fetchingScenarioOrganisations:c,scenarioOrganisationTypes:s,scenarioOrganisations:m,ColorEnum:R,scenarios:h,headers:d,isSelected:i,update:I}}});function J(a,r,o,m,c,g){const s=b("FSTagGroup"),p=b("FSDataTable");return _(),D(p,N({loading:a.fetchingScenarioOrganisationTypes||a.fetchingScenarioOrganisations,headers:a.headers,items:a.scenarios,showSelect:a.$props.editable,tableCode:a.$props.tableCode,modelValue:a.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>a.$emit("update:modelValue",t))},a.$attrs),w({"item.icon":n(({item:t})=>[y(O,null,{default:n(()=>[P(j(t.icon),1)]),_:2},1024)]),"item.tags":n(({item:t})=>[y(s,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),_:2},[M(a.$slots,(t,i)=>({name:i,fn:n(d=>[k(a.$slots,i,E(G(d)))])}))]),1040,["loading","headers","items","showSelect","tableCode","modelValue"])}const T=x(L,[["render",J]]);L.__docgenInfo={displayName:"FSBaseScenariosList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarios/FSBaseScenariosList.vue"]};const qa={title:"Foundation/Core/Lists/Base Lists/BaseScenariosList",component:T,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarios1"]}}},l={render:a=>({components:{FSBaseScenariosList:T},setup(){return{args:a}},template:`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarios1",modelValue:[]}};var S,F,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'scenarios1',
    modelValue: []
  }
}`,...(C=(F=l.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const _a=["Default"];export{l as Default,_a as __namedExportsOrder,qa as default};
