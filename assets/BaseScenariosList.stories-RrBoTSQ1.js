import{d as N,c as y,w as D,y as T,z as k,A as E,B as M,O as R,C as i,m as G,K as H,L as P,M as j,N as n,H as S,I as O}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-CZlIsS5H.js";import{F as K}from"./FSTagGroup-BsxwbMOW.js";import{F as b}from"./FSIcon-CJgnsR4e.js";import{_ as A}from"./FSRow-CFFgZ74C.js";import{A as r}from"./applications-pqrfQrBX.js";import{u as U}from"./useAppOrganisationId-C2nceDRs.js";import{u as J}from"./useScenarioOrganisations-tnMv7b4J.js";import{u as Q}from"./useScenarioOrganisationTypes-ChHwcwS7.js";import{A as C,C as h}from"./alertsTools-BlCYN6_6.js";import{C as W}from"./useColors-Du1QHlOW.js";import{g as X}from"./enumTools-BEsapygt.js";import{u as Y}from"./useTranslations-BehwFxDb.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSSpan-DGSHCe_l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-y57uLHf2.js";import"./useBreakpoints-ERBVGIQe.js";import"./css-B7hQ34V-.js";import"./color-DBJfw4cY.js";import"./theme-BKYtCmay.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./FSCol-CYWCfIBP.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-CzA-nZbb.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./VIcon-BCDp5TRU.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./form-D8F-RrsG.js";import"./FSCard-GtkwWKOo.js";import"./FSText-D77NGEvR.js";import"./useSlots-BnylMYIF.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSSelectField-DkqD7weE.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-BzJJodRe.js";import"./FSChip-C1Wzm8E1.js";import"./FSOptionGroup-zh6WLY4n.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";import"./base-XmH0JLOD.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./FSTag-DNHIlbaN.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const ee=()=>{const{organisationId:a}=U();return{$r:t=>(t.params?t.params.organisationId=a.value:t.params={organisationId:a.value},t)}},$=N({name:"FSBaseScenariosList",components:{FSDataTable:V,FSTagGroup:K,FSIcon:b,FSRow:A},props:{tableCode:{type:String,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},scenarioOrganisationFilters:{type:Object,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},showAssociation:{type:Boolean,required:!1,default:!0},scope:{type:Number,required:!1,default:r.None}},emits:["update:modelValue"],setup(a){const{$tr:s}=Y(),{entities:t,fetching:F,getMany:u}=J(),{entities:l,fetching:f,getMany:m}=Q(),{$r:o}=ee(),p=y(()=>{if(a.showAssociation)return[{columnId:"association",text:s("ui.common.association",""),value:"association",sortable:!1,filterable:!1,index:-1,hidden:!1}]}),g=y(()=>({criticity:{fixedFilters:X(h).filter(e=>e.value!=h.None).map(e=>({value:e.value,text:C.criticityLabel(e.value)})),methodFilter:(e,d)=>e==d}})),B=y(()=>a.scope==r.Organisation?t.value:a.scope==r.OrganisationType?l.value:t.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})).concat(l.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})))),_=e=>e.scope==r.OrganisationType?o({name:"scenario-organisation-type",params:{entityId:e.id}}):o({name:"scenario-organisation",params:{entityId:e.id}}),w=()=>{a.scope==r.OrganisationType?m(a.scenarioOrganisationTypeFilters):a.scope==r.Organisation?u(a.scenarioOrganisationFilters):(u(a.scenarioOrganisationFilters),m(a.scenarioOrganisationTypeFilters))};return D(()=>[a.scenarioOrganisationFilters,a.scenarioOrganisationTypeFilters,a.scope],(e,d)=>{(!e&&!d||!z.isEqual(e,d))&&w()},{immediate:!0}),{fetchingScenarioOrganisationTypes:f,fetchingScenarioOrganisations:F,scenarioOrganisationTypes:l,scenarioOrganisations:t,headerAssociation:p,ApplicationScope:r,headersOptions:g,AlertTools:C,ColorEnum:W,scenarios:B,routerLink:_}}});function ae(a,s,t,F,u,l){const f=T("FSTagGroup"),m=T("FSDataTable");return k(),E(m,G({loading:a.fetchingScenarioOrganisationTypes||a.fetchingScenarioOrganisations,headersOptions:a.headersOptions,extraHeaders:a.headerAssociation,items:a.scenarios,itemTo:a.routerLink,modelValue:a.$props.modelValue,tableCode:a.$props.tableCode,"onUpdate:modelValue":s[0]||(s[0]=o=>a.$emit("update:modelValue",o))},a.$attrs),M({"item.icon":i(({item:o})=>[n(b,null,{default:i(()=>[S(O(o.icon),1)]),_:2},1024)]),"item.criticity":i(({item:o})=>[n(A,{align:"center-left"},{default:i(()=>[n(b,{color:a.AlertTools.criticityColor(o.criticity)},{default:i(()=>[S(O(a.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),n(x,null,{default:i(()=>[S(O(a.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":i(({item:o})=>[n(f,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[R(a.$slots,(o,p)=>({name:p,fn:i(g=>[H(a.$slots,p,P(j(g)))])}))]),1040,["loading","headersOptions","extraHeaders","items","itemTo","modelValue","tableCode"])}const q=Z($,[["render",ae]]);$.__docgenInfo={displayName:"FSBaseScenariosList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showAssociation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"scope",type:{name:"ApplicationScope"},required:!1,defaultValue:{func:!1,value:"ApplicationScope.None"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarios/FSBaseScenariosList.vue"]};const Ha={title:"Foundation/Core/Lists/Base Lists/BaseScenariosList",component:q,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},c={render:a=>({components:{FSBaseScenariosList:q},setup(){return{args:a}},template:`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var L,v,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const Pa=["Default"];export{c as Default,Pa as __namedExportsOrder,Ha as default};