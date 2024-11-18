import{_ as h}from"./lodash-BiW_TGGX.js";import{d as A,a as z,c as V,g as R,w as f,y as b,z as n,A as d,B as H,O as J,C as i,J as K,K as G,L as Q,m as c,H as m,D as v,N as W,E as X}from"./vue.esm-bundler-D3ngFwGY.js";import{F as Y}from"./FSDataTable-DlxIKonB.js";import{F as y}from"./FSIcon-C0akNC9K.js";import{F as Z}from"./FSDashboardShallowTileUI-IINzKQ1F.js";import{F as _}from"./FSDashboardOrganisationTileUI-BXWYfQ1t.js";import{F as x}from"./FSDashboardOrganisationTypeTileUI-DRn1Hcwq.js";import{u as aa}from"./useDashboardOrganisationTypes-CgubXi_H.js";import{u as ea}from"./useDashboardOrganisations-DsFPtf3i.js";import{u as oa}from"./useDashboardShallows-D3qdxsIC.js";import{u as ta}from"./useUserOrganisations-CzsBXx5H.js";import{u as ra}from"./organisationDetails-lSLR5gRB.js";import{u as ia}from"./useAppOrganisationId-BemUUsho.js";import{D as g}from"./dashboards-JSNI7pIu.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-BdvsvlI6.js";import"./useBreakpoints-DbdoA89o.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./color-D4nM6Ihv.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./FSCol-CVj0zcU5.js";import"./FSRow-CYD73_tT.js";import"./FSDataTableUI-DPRubWn9.js";import"./vue-router-DrtreIio.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BdK031Hz.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./VIcon-DBlUULm8.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./transition-DtcXiLpW.js";import"./form-thVqu4eJ.js";import"./FSCard-BZyb3dNk.js";import"./FSText-CcQBLJU9.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./FSClickable-Cf6v5KqZ.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./VField-Ddzu1ph-.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./useTranslations-Dmqoe3Kp.js";import"./FSSelectField-BKxSDF0S.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./FSDivider-jFrTxQOo.js";import"./FSChip-CyfHnFR3.js";import"./FSOptionGroup-6zwPUnvh.js";import"./filter-C1K_d8Vd.js";import"./VBtn-DIpB4JrY.js";import"./filter-CS3Mhwo2.js";import"./base-DtpW3JT2.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./FSSimpleTileUI-BmZz_fcw.js";import"./FSIconCard-CFQKFaqv.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSTile-Bl0RN2m-.js";import"./dashboardTranslation-CFEUHu6n.js";import"./useAppLanguageCode-CbHleqYG.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const k=A({name:"FSBaseDashboardsList",components:{FSDataTable:Y,FSIcon:y,FSDashboardOrganisationTileUI:_,FSDashboardOrganisationTypeTileUI:x,FSDashboardShallowTileUI:Z},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:type"],setup(a,{emit:p}){const{entities:w,fetching:I,getMany:U}=aa(),{entities:$,fetching:T,getMany:D}=ea(),{entities:F,fetching:O,getMany:e}=oa(),{fetch:r,entity:s}=ta(),{entity:B,get:L}=ra(),{organisationId:S}=ia(),u=z(a.modelValue),C=V(()=>h.sortBy([...w.value.map(o=>({...o,dashboardType:g.OrganisationType})),...$.value.map(o=>({...o,dashboardType:g.Organisation})),...F.value.map(o=>({...o,dashboardType:g.Shallow}))],o=>o.label)),N=V(()=>{var o;return(o=s.value)==null?void 0:o.mainDashboardId}),E=V(()=>{var o;return(o=B.value)==null?void 0:o.mainDashboardId}),P=o=>{u.value=o;const t=C.value.filter(l=>u.value.includes(l.id)),q=t.map(l=>l.id),M=t.map(l=>l.dashboardType);p("update:modelValue",q),p("update:type",M),p("update",{modelValue:q,type:M})},j=o=>{var t;return(t=u.value)==null?void 0:t.includes(o)};return R(()=>{r()}),f(()=>S.value,()=>{S.value&&L(S.value)},{immediate:!0}),f(()=>a.dashboardOrganisationTypeFetchFilter,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&U(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),f(()=>a.dashboardOrganisationsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),f(()=>a.dashboardShallowsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&e(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:I,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:u,items:C,mainUserDashboardId:N,mainOrganisationDashboardId:E,onSelect:P,isSelected:j,DashboardType:g}}});function na(a,p,w,I,U,$){const T=b("FSDashboardOrganisationTypeTileUI"),D=b("FSDashboardOrganisationTileUI"),F=b("FSDashboardShallowTileUI"),O=b("FSDataTable");return n(),d(O,c({defaultMode:"iterator",items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),H({"item.icon":i(({item:e})=>[W(y,null,{default:i(()=>[v(X(e.icon),1)]),_:2},1024)]),"item.main":i(({item:e})=>[e.id===a.mainOrganisationDashboardId?(n(),d(y,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):m("",!0),e.id===a.mainUserDashboardId?(n(),d(y,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):m("",!0)]),"item.tile":i(({item:e,toggleSelect:r})=>[e.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,c({key:0,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Organisation?(n(),d(D,c({key:1,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Shallow?(n(),d(F,c({key:2,bottomColor:e.colors,modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e),to:a.$props.itemTo&&a.$props.itemTo(e)},e),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):m("",!0)]),_:2},[J(a.$slots,(e,r)=>({name:r,fn:i(s=>[K(a.$slots,r,G(Q(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const ro=sa(k,[["render",na]]);k.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{ro as default};
