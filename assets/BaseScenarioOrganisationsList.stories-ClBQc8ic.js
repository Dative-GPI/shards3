import{d as y,w as L,y as d,z as T,A as _,M as B,N as $,B as a,m as q,I as v,J as h,K as D,L as u,E as I,G as N}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as w}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-B6hZuxqM.js";import{_ as O}from"./FSIcon-DHDofKUo.js";import{F as G}from"./FSTagGroup-KaZAzl-t.js";import{u as P}from"./useScenarioOrganisations-_yNGi0NJ.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DIRgKG_M.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CekjR0Nk.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-YoHHo_JV.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-DAS46KTX.js";import"./FSText-8i4Fp1Ld.js";import"./FSSearchField-CnDYBu_t.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CpPmq5Yu.js";import"./FSChip-vR1IHQ3P.js";import"./FSOptionGroup-wuNvwQjf.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTag-Bvc5sF_f.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-DtWQBHMx.js";const F=y({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:S,FSIcon:O,FSTagGroup:G},props:{modelValue:{type:Array,default:()=>[],required:!1},scenarioOrganisationFilters:{type:Object,required:!1,default:null},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{entities:r,fetching:s,getMany:m}=P(),p=t=>e.modelValue.includes(t);return L(()=>e.scenarioOrganisationFilters,(t,i)=>{(!t&&!i||!w.isEqual(t,i))&&m(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:s,scenarioOrganisations:r,isSelected:p}}});function E(e,r,s,m,p,t){const i=d("FSTagGroup"),V=d("FSDataTable");return T(),_(V,q({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,modelValue:e.$props.modelValue,tableCode:e.$props.tableCode,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),B({"item.icon":a(({item:o})=>[u(O,null,{default:a(()=>[I(N(o.icon),1)]),_:2},1024)]),"item.tags":a(({item:o})=>[u(i,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[$(e.$slots,(o,l)=>({name:l,fn:a(C=>[v(e.$slots,l,h(D(C)))])}))]),1040,["items","itemTo","loading","modelValue","tableCode"])}const b=k(F,[["render",E]]);F.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const Oo={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:b,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},n={render:e=>({components:{FSBaseScenarioOrganisationsList:b},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var c,g,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Fo=["Default"];export{n as Default,Fo as __namedExportsOrder,Oo as default};
