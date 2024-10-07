import{_ as F}from"./lodash-BiW_TGGX.js";import{d as L,w as V,y as n,z as b,A as y,B as q,O as $,C as l,m as u,K as C,L as T,M as h,N as d,H as v,I as B}from"./vue.esm-bundler-CWdIlc2r.js";import{F as c}from"./FSIcon-CF3g_zZI.js";import{F as I}from"./FSDataTable-D-Vw4zo7.js";import{F as w}from"./FSLocationTileUI-B-O1yJJO.js";import{u as U}from"./useLocations-qazNkG6i.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-DVmyWqF2.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./css-rhgMLwoH.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSLoader-BuPx1Vmx.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./FSCol-DyDZsJ9U.js";import"./FSRow-D9oM1Ufa.js";import"./VSpacer-DLFo12A6.js";import"./FSDataTableUI-vuXcrYWK.js";import"./vue-router-DThl0PGU.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-CaqPs9O0.js";import"./FSSpan-WKxYfmnu.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSCard-CN9NbS7f.js";import"./FSText-BvtpuDSr.js";import"./FSSearchField-DhTJXKam.js";import"./FSTextField-DiTX7r-c.js";import"./FSBaseField-CVTPeQEI.js";import"./FSButton-BpyUfJIg.js";import"./FSClickable-CWKuMNrW.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VField-Bf3tV3N7.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSSelectField-BxqOi3HU.js";import"./FSDialogMenu-B5BSmELO.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-gtoPHKCV.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSWrapGroup-L0hGNovc.js";import"./FSFadeOut-BkMq8VeO.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-7B3TLkE6.js";import"./VMenu-OPxqXTkz.js";import"./FSDivider-Dkj5LzZl.js";import"./FSChip-lauGnn4d.js";import"./FSOptionGroup-BMa6Hpmw.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B6If6-we.js";import"./filter-pNTMaczj.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./FSIconCard-DUUapLAP.js";import"./FSColor-WTKpWCLm.js";import"./FSTile-T7YcP5W6.js";import"./address-CE2z3AEI.js";const f=L({name:"FSBaseLocationsList",components:{FSLocationTileUI:w,FSDataTable:I,FSIcon:c},props:{tableCode:{type:String,required:!1,default:null},locationsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},itemTo:{type:Function,required:!1},singleSelect:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:r,fetching:m,entities:s}=U();return V(()=>e.locationsFilters,(i,t)=>{(!i&&!t||!F.isEqual(i,t))&&r(e.locationsFilters)},{immediate:!0}),{fetchingLocations:m,isSelected:i=>{var t;return(t=e.modelValue)==null?void 0:t.includes(i)},locations:s}}});function D(e,r,m,s,S,i){const t=n("FSLocationTileUI"),g=n("FSDataTable");return b(),y(g,u({defaultMode:"iterator",loading:e.fetchingLocations,items:e.locations,showSelect:e.$props.editable,tableCode:e.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),q({"item.icon":l(({item:o})=>[d(c,null,{default:l(()=>[v(B(o.icon),1)]),_:2},1024)]),"item.tile":l(({item:o,toggleSelect:a})=>[d(t,u(o,{bottomColor:o.colors,address:o.address.placeLabel,editable:!0,singleSelect:e.singleSelect,modelValue:e.isSelected(o.id),to:e.$props.itemTo&&e.$props.itemTo(o),"onUpdate:modelValue":p=>a(o)}),null,16,["bottomColor","address","singleSelect","modelValue","to","onUpdate:modelValue"])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:l(p=>[C(e.$slots,a,T(h(p)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const Fo=N(f,[["render",D]]);f.__docgenInfo={displayName:"FSBaseLocationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"locationsFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"itemTo",type:{name:"(item: LocationInfos) => Partial<RouteLocation>"},required:!1},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue"]};export{Fo as default};