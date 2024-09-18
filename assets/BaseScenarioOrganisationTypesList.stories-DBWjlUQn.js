import{d as L,w as h,y as s,z as u,A as c,M as I,N as $,B as r,m as q,I as _,J as v,K as w,L as g,E as D,G as N,D as k}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as T}from"./FSDataTable-CnLYfQb-.js";import{F}from"./FSIcon-lOMM3dv0.js";import{F as P}from"./FSImage-DFpAkaKA.js";import{F as E}from"./FSTagGroup-DwKcNwrc.js";import{u as M}from"./useScenarioOrganisationTypes-z9YwJfI0.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-7EueGG7H.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./css-BRRCqIav.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-VI0SCCBU.js";import"./FSText-BN3VvfV9.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-TaDedv2I.js";import"./FSChip-BJGyRW3u.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-D0IdOlS8.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTag-DHDcqttn.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-DtWQBHMx.js";const O=L({name:"FSBaseScenarioOrganisationTypesList",components:{FSDataTable:T,FSIcon:F,FSImage:P,FSTagGroup:E},props:{tableCode:{type:String,required:!0},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:a,fetching:m,getMany:p}=M(),l=t=>e.modelValue.includes(t);return h(()=>e.scenarioOrganisationTypeFilters,(t,i)=>{(!t&&!i||!G.isEqual(t,i))&&p(e.scenarioOrganisationTypeFilters)},{immediate:!0}),{fetchingScenarioOrganisationTypes:m,scenarioOrganisationTypes:a,isSelected:l}}});function A(e,a,m,p,l,t){const i=s("FSImage"),V=s("FSTagGroup"),C=s("FSDataTable");return u(),c(C,q({items:e.scenarioOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisationTypes,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),I({"item.icon":r(({item:o})=>[g(F,null,{default:r(()=>[D(N(o.icon),1)]),_:2},1024)]),"item.imageId":r(({item:o})=>[o.imageId?(u(),c(i,{key:0,height:"32px",width:"32px",imageId:o.imageId},null,8,["imageId"])):k("",!0)]),"item.tags":r(({item:o})=>[g(V,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[$(e.$slots,(o,d)=>({name:d,fn:r(B=>[_(e.$slots,d,v(w(B)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const b=z(O,[["render",A]]);O.__docgenInfo={displayName:"FSBaseScenarioOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisationTypes/FSBaseScenarioOrganisationTypesList.vue"]};const ho={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationTypesList",component:b,subcomponents:{FSDataTable:T},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisationTypes1"]}}},n={render:e=>({components:{FSBaseScenarioOrganisationTypesList:b},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisationTypes1",modelValue:[]}};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Io=["Default"];export{n as Default,Io as __namedExportsOrder,ho as default};
