import{d as I,w as U,y as a,z as F,A as S,B as h,O as $,C as o,m as y,K as C,L as _,M as q,N as i,H as p,F as w,I as b}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as B}from"./FSDataTable-D-Vw4zo7.js";import{_ as l}from"./FSSpan-WKxYfmnu.js";import{F as k}from"./FSImage-DYrQmZ2M.js";import{F as N}from"./FSTagGroup-DIVU5VWH.js";import{F as D}from"./FSIconCheck-DxWsRqdF.js";import{F as P}from"./FSUserOrganisationTileUI-CcR2ImIl.js";import{a as E}from"./useUserOrganisations-t1LTn7L9.js";import{u as G,a as M}from"./users-Dlz9JeAv.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as A}from"./FSIcon-CF3g_zZI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BuPx1Vmx.js";import"./useBreakpoints-DVmyWqF2.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-rhgMLwoH.js";import"./color-B0htL_ZM.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-DyDZsJ9U.js";import"./FSRow-D9oM1Ufa.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-vuXcrYWK.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-CaqPs9O0.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./VIcon-Bo7R9vIQ.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-CN9NbS7f.js";import"./FSText-BvtpuDSr.js";import"./useSlots-zwOl0abH.js";import"./FSSearchField-DhTJXKam.js";import"./FSTextField-DiTX7r-c.js";import"./FSBaseField-CVTPeQEI.js";import"./FSButton-BpyUfJIg.js";import"./FSClickable-CWKuMNrW.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-BxqOi3HU.js";import"./FSDialogMenu-B5BSmELO.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSWrapGroup-L0hGNovc.js";import"./FSFadeOut-BkMq8VeO.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-7B3TLkE6.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-Dkj5LzZl.js";import"./FSChip-lauGnn4d.js";import"./FSOptionGroup-BMa6Hpmw.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSImageUI-DRh0C2Kt.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSTag-BWcm_tL1.js";import"./FSTile-T7YcP5W6.js";import"./permissionInfos-BPDgTHQl.js";const V=I({name:"FSBaseUserOrganisationsList",components:{FSDataTable:B,FSImage:k,FSUserOrganisationTileUI:P,FSSpan:l,FSTagGroup:N,FSIconCheck:D},props:{tableCode:{type:String,required:!1,default:null},userOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:s,entities:u,fetching:d}=E(),f=r=>e.modelValue.includes(r);return U(()=>e.userOrganisationsFilters,(r,m)=>{(!r&&!m||!L.isEqual(r,m))&&s(e.userOrganisationsFilters??void 0)},{immediate:!0}),{fetchingUserOrganisations:d,userOrganisations:u,userValidityLabel:G,userTypeLabel:M,isSelected:f}}});function R(e,s,u,d,f,r){const m=a("FSImage"),g=a("FSIconCheck"),O=a("FSTagGroup"),T=a("FSUserOrganisationTileUI"),v=a("FSDataTable");return F(),S(v,y({defaultMode:"iterator",items:e.userOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingUserOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),h({"header.imageId-title":o(()=>[i(A,null,{default:o(()=>[p(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(F(),S(m,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):w("",!0)]),"item.allowEmails":o(({item:t})=>[i(g,{value:t.allowEmails},null,8,["value"])]),"item.allowSms":o(({item:t})=>[i(g,{value:t.allowSms},null,8,["value"])]),"item.tags":o(({item:t})=>[i(O,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":o(({item:t,toggleSelect:n})=>[i(T,y({to:e.$props.itemTo&&e.$props.itemTo(t),editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":c=>n(t)},t),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(t,n)=>({name:n,fn:o(c=>[C(e.$slots,n,_(q(c)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const Bt=z(V,[["render",R]]);V.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{Bt as default};
