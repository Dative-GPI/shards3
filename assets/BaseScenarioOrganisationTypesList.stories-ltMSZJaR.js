import{d as $,c as q,w,y as m,z as S,A as T,B as A,O as N,C as i,m as D,K as k,L as E,M as P,N as a,H as p,I as l,F as R}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as _}from"./FSDataTable-BZK_4wly.js";import{F as u}from"./FSIcon-CJgnsR4e.js";import{F as M}from"./FSImage-Eyb6nJ-g.js";import{F as z}from"./FSTagGroup-BsxwbMOW.js";import{_ as L}from"./FSRow-CFFgZ74C.js";import{u as j}from"./useScenarioOrganisationTypes-ChHwcwS7.js";import{A as F,C as O}from"./alertsTools-BlCYN6_6.js";import{g as H}from"./enumTools-BEsapygt.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSSpan-DGSHCe_l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-y57uLHf2.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./color-DBJfw4cY.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./FSCol-CYWCfIBP.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-Bl7tphhx.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./VIcon-BCDp5TRU.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./form-D8F-RrsG.js";import"./FSCard-GtkwWKOo.js";import"./FSText-D77NGEvR.js";import"./useSlots-BnylMYIF.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-DkqD7weE.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-BzJJodRe.js";import"./FSChip-C1Wzm8E1.js";import"./FSOptionGroup-zh6WLY4n.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./FSImageUI-CN7Xmnjm.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSTag-DNHIlbaN.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";const h=$({name:"FSBaseScenarioOrganisationTypesList",components:{FSDataTable:_,FSTagGroup:z,FSImage:M,FSIcon:u,FSRow:L},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:d,getMany:c}=j(),g=q(()=>({criticity:{fixedFilters:H(O).filter(t=>t.value!=O.None).map(t=>({value:t.value,text:F.criticityLabel(t.value)})),methodFilter:(t,r)=>t==r}})),f=t=>e.modelValue.includes(t);return w(()=>e.scenarioOrganisationTypeFilters,(t,r)=>{(!t&&!r||!G.isEqual(t,r))&&c(e.scenarioOrganisationTypeFilters)},{immediate:!0}),{fetchingScenarioOrganisationTypes:d,scenarioOrganisationTypes:n,headersOptions:g,AlertTools:F,isSelected:f}}});function J(e,n,d,c,g,f){const t=m("FSImage"),r=m("FSTagGroup"),B=m("FSDataTable");return S(),T(B,D({items:e.scenarioOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisationTypes,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),A({"item.icon":i(({item:o})=>[a(u,null,{default:i(()=>[p(l(o.icon),1)]),_:2},1024)]),"item.criticity":i(({item:o})=>[a(L,{align:"center-left"},{default:i(()=>[a(u,{color:e.AlertTools.criticityColor(o.criticity)},{default:i(()=>[p(l(e.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),a(U,null,{default:i(()=>[p(l(e.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.imageId":i(({item:o})=>[o.imageId?(S(),T(t,{key:0,height:"32px",width:"32px",imageId:o.imageId},null,8,["imageId"])):R("",!0)]),"item.tags":i(({item:o})=>[a(r,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[N(e.$slots,(o,y)=>({name:y,fn:i(I=>[k(e.$slots,y,E(P(I)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const v=K(h,[["render",J]]);h.__docgenInfo={displayName:"FSBaseScenarioOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisationTypes/FSBaseScenarioOrganisationTypesList.vue"]};const kt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationTypesList",component:v,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisationTypes1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationTypesList:v},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisationTypes1",modelValue:[]}};var b,V,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenarioOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisationTypes1',
    modelValue: []
  }
}`,...(C=(V=s.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const Et=["Default"];export{s as Default,Et as __namedExportsOrder,kt as default};
