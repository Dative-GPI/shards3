import{d as v,c as _,w as B,y as S,z as $,A as q,B as w,O as A,C as r,m as D,K as N,L as I,M as E,N as a,H as m,I as l}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as C}from"./FSDataTable-DEXZS1fy.js";import{F as p}from"./FSIcon-CJgnsR4e.js";import{F as k}from"./FSTagGroup-BsxwbMOW.js";import{u as G}from"./useScenarioOrganisations-tnMv7b4J.js";import{A as O,C as F}from"./alertsTools-BlCYN6_6.js";import{g as M}from"./enumTools-BEsapygt.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSRow-CFFgZ74C.js";import{_ as j}from"./FSSpan-DGSHCe_l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-y57uLHf2.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./color-DBJfw4cY.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./FSCol-CYWCfIBP.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-CzA-nZbb.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./VIcon-BCDp5TRU.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./form-D8F-RrsG.js";import"./FSCard-GtkwWKOo.js";import"./FSText-D77NGEvR.js";import"./useSlots-BnylMYIF.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-DkqD7weE.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-BzJJodRe.js";import"./FSChip-C1Wzm8E1.js";import"./FSOptionGroup-zh6WLY4n.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./FSTag-DNHIlbaN.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";const T=v({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:C,FSIcon:p,FSTagGroup:k},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:u,getMany:d}=G(),c=_(()=>({criticity:{fixedFilters:M(F).filter(t=>t.value!=F.None).map(t=>({value:t.value,text:O.criticityLabel(t.value)})),methodFilter:(t,i)=>t==i}})),f=t=>e.modelValue.includes(t);return B(()=>e.scenarioOrganisationFilters,(t,i)=>{(!t&&!i||!P.isEqual(t,i))&&d(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:u,scenarioOrganisations:n,headersOptions:c,AlertTools:O,isSelected:f}}});function H(e,n,u,d,c,f){const t=S("FSTagGroup"),i=S("FSDataTable");return $(),q(i,D({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,headersOptions:e.headersOptions,"onUpdate:modelValue":n[0]||(n[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),w({"item.icon":r(({item:o})=>[a(p,null,{default:r(()=>[m(l(o.icon),1)]),_:2},1024)]),"item.criticity":r(({item:o})=>[a(z,{align:"center-left"},{default:r(()=>[a(p,{color:e.AlertTools.criticityColor(o.criticity)},{default:r(()=>[m(l(e.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),a(j,null,{default:r(()=>[m(l(e.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":r(({item:o})=>[a(t,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[A(e.$slots,(o,g)=>({name:g,fn:r(h=>[N(e.$slots,g,I(E(h)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue","headersOptions"])}const L=R(T,[["render",H]]);T.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const Bt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:L,subcomponents:{FSDataTable:C},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationsList:L},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var y,b,V;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(b=s.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const $t=["Default"];export{s as Default,$t as __namedExportsOrder,Bt as default};
