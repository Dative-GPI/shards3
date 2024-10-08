import{d as C,w as B,y as u,z as L,A as T,B as $,O as q,C as i,m as v,K as h,L as _,M as w,N as d,H as D,I as N}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as I}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-BIgFSJSE.js";import{F as O}from"./FSIcon-CyS8zLbP.js";import{F as P}from"./FSTagGroup-2BtamG5h.js";import{u as k}from"./useScenarioOrganisations-ZnmnQzcZ.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-h4slsrT9.js";import"./useBreakpoints-INFVV7da.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-BWDYXGFo.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-CvoATp5Q.js";import"./FSRow-BnsweOMX.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-C4myWXVd.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-bKRtBqVc.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-BxmDRzjE.js";import"./FSText-BIOb5fBT.js";import"./FSSearchField-_SEFeUDc.js";import"./FSTextField-BLVYx7ij.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSButton-Bc8wnoJs.js";import"./FSClickable-JTcIAbNo.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-CvyvsNwI.js";import"./FSDialogMenu-D9HgWnX3.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-qOOOxz_-.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./FSFadeOut-BhgieYVE.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-LluqAkon.js";import"./FSChip-BRgg5HGZ.js";import"./FSOptionGroup-DEt-ejts.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSTag-leYgsToX.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-DtWQBHMx.js";const F=C({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:S,FSIcon:O,FSTagGroup:P},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:a,fetching:s,getMany:m}=k(),p=t=>e.modelValue.includes(t);return B(()=>e.scenarioOrganisationFilters,(t,r)=>{(!t&&!r||!I.isEqual(t,r))&&m(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:s,scenarioOrganisations:a,isSelected:p}}});function M(e,a,s,m,p,t){const r=u("FSTagGroup"),V=u("FSDataTable");return L(),T(V,v({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),$({"item.icon":i(({item:o})=>[d(O,null,{default:i(()=>[D(N(o.icon),1)]),_:2},1024)]),"item.tags":i(({item:o})=>[d(r,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[q(e.$slots,(o,l)=>({name:l,fn:i(y=>[h(e.$slots,l,_(w(y)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const b=G(F,[["render",M]]);F.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const yo={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:b,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},n={render:e=>({components:{FSBaseScenarioOrganisationsList:b},setup(){return{args:e}},template:`
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Co=["Default"];export{n as Default,Co as __namedExportsOrder,yo as default};