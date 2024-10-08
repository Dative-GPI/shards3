import{d as L,w as _,y as p,z as k,A as q,B as v,O as w,C as i,m as c,K as E,L as N,M as P,N as e,H as T,I}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as O}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-BIgFSJSE.js";import{_ as b}from"./FSRow-BnsweOMX.js";import{_ as g}from"./FSSpan-Bnbdrku6.js";import{F as l}from"./FSIcon-CyS8zLbP.js";import{F as R}from"./FSClickable-JTcIAbNo.js";import{F as z}from"./FSButtonCheckbox-ea5IDamM.js";import{u as A}from"./useDataDefinitions-CV77ZSuV.js";import{C as M}from"./useColors-CrLBSafx.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-DLFo12A6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-h4slsrT9.js";import"./useBreakpoints-INFVV7da.js";import"./css-BWDYXGFo.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-CvoATp5Q.js";import"./FSDataTableUI-C4myWXVd.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-bKRtBqVc.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-BxmDRzjE.js";import"./FSText-BIOb5fBT.js";import"./useSlots-zwOl0abH.js";import"./FSSearchField-_SEFeUDc.js";import"./FSTextField-BLVYx7ij.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSButton-Bc8wnoJs.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-CvyvsNwI.js";import"./FSDialogMenu-D9HgWnX3.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-qOOOxz_-.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./FSFadeOut-BhgieYVE.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-LluqAkon.js";import"./FSChip-BRgg5HGZ.js";import"./FSOptionGroup-DEt-ejts.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./index-DfSX31J9.js";const V=L({name:"FSBaseDataDefinitionsList",components:{FSButtonCheckbox:z,FSDataTable:S,FSClickable:R,FSSpan:g,FSIcon:l,FSRow:b},props:{tableCode:{type:String,required:!1,default:null},dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{getMany:r,fetching:d,entities:u}=A(),f=a=>t.modelValue.includes(a);return _(()=>t.dataDefinitionFilters,(a,n)=>{(!a&&!n||!O.isEqual(a,n))&&r(t.dataDefinitionFilters)},{immediate:!0}),{fetchingDataDefinitions:d,dataDefinitions:u,ColorEnum:M,isSelected:f}}});function K(t,r,d,u,f,a){const n=p("FSButtonCheckbox"),y=p("FSClickable"),B=p("FSDataTable");return k(),q(B,c({loading:t.fetchingDataDefinitions,items:t.dataDefinitions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>t.$emit("update:modelValue",o))},t.$attrs),v({toolbar:i(()=>[e(n,{label:t.$tr("ui.common.data-correlated","Correlated only"),color:t.ColorEnum.Success},null,8,["label","color"])]),"item.tile":i(({item:o})=>[e(y,c({padding:"12px",height:"60px",width:"233px",color:t.isSelected(o.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:s=>t.$emit("update:modelValue",[o.id])},t.$attrs),{default:i(()=>[e(b,{align:"center-center"},{default:i(()=>[e(l,{icon:"mdi-thermometer"}),e(g,{lineClamp:1},{default:i(()=>[T(I(o.label),1)]),_:2},1024),e(H),e(l,{color:t.ColorEnum.Primary,icon:"mdi-link"},null,8,["color"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[w(t.$slots,(o,s)=>({name:s,fn:i($=>[E(t.$slots,s,N(P($)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=j(V,[["render",K]]);V.__docgenInfo={displayName:"FSBaseDataDefinitionsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue"]};const ye={title:"Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList",component:h,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataDefinitions1"]}}},m={render:t=>({components:{FSBaseDataDefinitionsList:h},setup(){return{args:t}},template:`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataDefinitions1"}};var D,C,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDataDefinitionsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dataDefinitions1'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Be=["Default"];export{m as Default,Be as __namedExportsOrder,ye as default};