import{d as C,w as B,y as u,z as L,A as T,M as $,N as q,B as i,m as h,I as v,J as _,K as w,L as d,E as D,G as N}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-CnLYfQb-.js";import{F as O}from"./FSIcon-lOMM3dv0.js";import{F as I}from"./FSTagGroup-DwKcNwrc.js";import{u as P}from"./useScenarioOrganisations-_yNGi0NJ.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-7EueGG7H.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./css-BRRCqIav.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-VI0SCCBU.js";import"./FSText-BN3VvfV9.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-TaDedv2I.js";import"./FSChip-BJGyRW3u.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTag-DHDcqttn.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-DtWQBHMx.js";const F=C({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:S,FSIcon:O,FSTagGroup:I},props:{tableCode:{type:String,required:!0},scenarioOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:r,fetching:s,getMany:m}=P(),p=t=>e.modelValue.includes(t);return B(()=>e.scenarioOrganisationFilters,(t,a)=>{(!t&&!a||!G.isEqual(t,a))&&m(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:s,scenarioOrganisations:r,isSelected:p}}});function E(e,r,s,m,p,t){const a=u("FSTagGroup"),V=u("FSDataTable");return L(),T(V,h({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),$({"item.icon":i(({item:o})=>[d(O,null,{default:i(()=>[D(N(o.icon),1)]),_:2},1024)]),"item.tags":i(({item:o})=>[d(a,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[q(e.$slots,(o,l)=>({name:l,fn:i(y=>[v(e.$slots,l,_(w(y)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const b=k(F,[["render",E]]);F.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const bo={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:b,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},n={render:e=>({components:{FSBaseScenarioOrganisationsList:b},setup(){return{args:e}},template:`
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Vo=["Default"];export{n as Default,Vo as __namedExportsOrder,bo as default};
