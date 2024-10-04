import{d as M,c as D,g as U,w as S,y as d,z as s,A as n,B as k,O as w,C as a,m as C,K as N,L as A,M as P,N as b,H as y,F as V,I as R}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as $}from"./FSDataTable-NOw_AMP7.js";import{F as u}from"./FSIcon-vAlkpflo.js";import{_}from"./FSRow-D4JfwQlG.js";import{F as E}from"./FSText-BxoWgsr8.js";import{F as j}from"./FSChip-D308mzkb.js";import{F as H}from"./FSDashboardOrganisationTypeTileUI-C_xslPFd.js";import{u as K}from"./useUserOrganisations-t1LTn7L9.js";import{u as G}from"./useOrganisations-DicskG1O.js";import{u as J}from"./useDashboardOrganisationTypes-BvzdPd0m.js";import{u as Q}from"./useAppOrganisationId-BmirlPAl.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DxfJongP.js";import"./css-DVhR3h-A.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-Bj1WIVag.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-hxDZWA7i.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-18K-cCtB.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-D8qRc7rc.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-DzKPXup4.js";import"./FSDialogMenu-CzbYQerh.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CcLnrzQE.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-BbeeTMn-.js";import"./FSOptionGroup-B1EDvnD9.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSSimpleTileUI-CC8veE7H.js";import"./FSIconCard-TnxQlSY2.js";import"./FSImage-D-VbLOPJ.js";import"./FSImageUI-D64m-s1x.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTile-CBWW7c3A.js";import"./permissionInfos-BPDgTHQl.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";const B=M({name:"FSBaseDashboardOrganisationTypesList",components:{FSDataTable:$,FSIcon:u,FSRow:_,FSText:E,FSChip:j,FSDashboardOrganisationTypeTileUI:H},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,required:!1,default:()=>[]}},setup(o){const{getMany:p,fetching:T,entities:h}=J(),{fetch:O,entity:g}=K(),{get:c,entity:m}=G(),{organisationId:i}=Q(),f=D(()=>g.value?g.value.mainDashboardId:null),e=D(()=>m.value?m.value.mainDashboardId:null),r=t=>o.modelValue.includes(t);return U(()=>{O()}),S(i,()=>{i.value&&c(i.value)},{immediate:!0}),S(()=>o.dashboardOrganisationTypeFilters,(t,F)=>{(!t&&!F||!z.isEqual(t,F))&&p(o.dashboardOrganisationTypeFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:T,userOrganisationMainDashboardId:f,organisationMainDashboardId:e,dashboardOrganisationTypes:h,isSelected:r}}});function X(o,p,T,h,O,g){const c=d("FSText"),m=d("FSChip"),i=d("FSDashboardOrganisationTypeTileUI"),f=d("FSDataTable");return s(),n(f,C({defaultMode:"iterator",loading:o.fetchingDashboardOrganisationTypes,items:o.dashboardOrganisationTypes,itemTo:o.$props.itemTo,tableCode:o.$props.tableCode,modelValue:o.$props.modelValue,"onUpdate:modelValue":p[0]||(p[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),k({"item.main":a(({item:e})=>[b(_,null,{default:a(()=>[e.id===o.organisationMainDashboardId?(s(),n(u,{key:0},{default:a(()=>[y(" mdi-account-group-outline ")]),_:1})):V("",!0),e.id===o.userOrganisationMainDashboardId?(s(),n(u,{key:1},{default:a(()=>[y(" mdi-home ")]),_:1})):V("",!0)]),_:2},1024)]),"item.icon":a(({item:e})=>[b(u,null,{default:a(()=>[y(R(e.icon),1)]),_:2},1024)]),"item.organisationTypeLabel":a(({item:e})=>[e.organisationTypeId?(s(),n(c,{key:0,label:e.organisationTypeLabel},null,8,["label"])):(s(),n(m,{key:1,variant:"standard",label:o.$tr("ui.common.all","All")},null,8,["label"]))]),"item.tile":a(({item:e,toggleSelect:r})=>[b(i,C({bottomColor:e.colors,to:o.$props.itemTo&&o.$props.itemTo(e),modelValue:o.isSelected(e.id),"onUpdate:modelValue":t=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])]),_:2},[w(o.$slots,(e,r)=>({name:r,fn:a(t=>[N(o.$slots,r,A(P(t)))])}))]),1040,["loading","items","itemTo","tableCode","modelValue"])}const q=W(B,[["render",X]]);B.__docgenInfo={displayName:"FSBaseDashboardOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboardOrganisationTypes/FSBaseDashboardOrganisationTypesList.vue"]};const Ee={title:"Foundation/Core/Lists/Base Lists/BaseDashboardOrganisationTypesList",component:q,subcomponents:{FSDataTable:$},tags:["autodocs"],argTypes:{}},l={render:o=>({components:{FSBaseDashboardOrganisationTypesList:q},setup(){return{args:o}},template:`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dashboardOrganisationTypes1"}};var I,v,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDashboardOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dashboardOrganisationTypes1'
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const je=["Default"];export{l as Default,je as __namedExportsOrder,Ee as default};
