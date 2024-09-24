import{_ as u}from"./lodash-BiW_TGGX.js";import{d as P,b as j,c as V,g as A,w as h,y as b,z as n,A as d,M as z,N as R,B as i,m as f,I as G,J,K,L as H,E as v,G as Q,D as l}from"./vue.esm-bundler-DjjVIdVI.js";import{F as W}from"./FSDataTable-B2Et5lGC.js";import{F as g}from"./FSIcon-BCbpBdVG.js";import{F as X}from"./FSDashboardShallowTileUI-DcxicDDS.js";import{F as Y}from"./FSDashboardOrganisationTileUI-4AjwMhFh.js";import{F as Z}from"./FSDashboardOrganisationTypeTileUI-E-SoLXtR.js";import{u as _}from"./useDashboardOrganisationTypes-DjSccxnz.js";import{u as x}from"./useDashboardOrganisations-MqxkUBbg.js";import{u as aa}from"./useDashboardShallows-C0yDStMF.js";import{u as oa}from"./useUserOrganisations-BPpZ3OaV.js";import{u as ea}from"./useOrganisations-DOKCdqjG.js";import{u as ta}from"./useAppOrganisationId-BeeiXv5V.js";import{D as c}from"./dashboards-JSNI7pIu.js";import{_ as ra}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DpMpI5Qw.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./color-BKGJvBEr.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CpogXLW8.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-BxNu3vqV.js";import"./vue-router-C7inxZoN.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./form-B7NlTRtd.js";import"./FSCard-C9IdgJNY.js";import"./FSText-Der-WemT.js";import"./FSSearchField-CGsun2bQ.js";import"./FSTextField-DSbw_bnX.js";import"./FSBaseField-CruMavxg.js";import"./FSButton-DS0wrBKk.js";import"./FSClickable-DnsFhA6_.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./useTranslations-f9CWAvtI.js";import"./FSSelectField-BNF0cunm.js";import"./FSDialogMenu-CUwupOm-.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DlNGN2Nb.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSFadeOut-CNI_FQpM.js";import"./FSRadio-ChOxIOPt.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-DlfHU1SC.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-BmaXZ3H9.js";import"./FSChip-BaGlgeX3.js";import"./FSOptionGroup-DXtDjFR4.js";import"./filter-C1K_d8Vd.js";import"./VBtn-el1a73sG.js";import"./filter-BS4_e9hb.js";import"./base-LOOo-Z1R.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./FSSimpleTileUI-CDPrhZQK.js";import"./FSIconCard-ge-YrHOD.js";import"./FSImage-Bf-rzOTG.js";import"./FSImageUI-DCipACiG.js";import"./useImages-DPyqwdzZ.js";import"./base-CmdGny12.js";import"./FSTile-CFEc0iwO.js";import"./dashboardTranslation-B3HYPjZl.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const q=P({name:"FSBaseDashboardsList",components:{FSDataTable:W,FSIcon:g,FSDashboardOrganisationTileUI:Y,FSDashboardOrganisationTypeTileUI:Z,FSDashboardShallowTileUI:X},props:{dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},tableCode:{type:String,required:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue","update:type"],setup(a,{emit:y}){const{entities:I,fetching:U,getMany:w}=_(),{entities:$,fetching:T,getMany:D}=x(),{entities:F,fetching:O,getMany:o}=aa(),{fetch:r,entity:s}=oa(),{entity:k,get:B}=ea(),{organisationId:S}=ta(),p=j(a.modelValue),C=V(()=>u.sortBy([...I.value.map(e=>({...e,dashboardType:c.OrganisationType})),...$.value.map(e=>({...e,dashboardType:c.Organisation})),...F.value.map(e=>({...e,dashboardType:c.Shallow}))],e=>e.label)),M=V(()=>{var e;return(e=s.value)==null?void 0:e.mainDashboardId}),L=V(()=>{var e;return(e=k.value)==null?void 0:e.mainDashboardId}),N=e=>{p.value=e;const t=C.value.filter(m=>p.value.includes(m.id));y("update:modelValue",t.map(m=>m.id)),y("update:type",t.map(m=>m.dashboardType))},E=e=>{var t;return(t=p.value)==null?void 0:t.includes(e)};return A(()=>{r()}),h(()=>S.value,()=>{S.value&&B(S.value)},{immediate:!0}),h(()=>a.dashboardOrganisationTypeFetchFilter,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&w(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),h(()=>a.dashboardOrganisationsFilters,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),h(()=>a.dashboardShallowsFilters,(e,t)=>{(!e&&!t||!u.isEqual(e,t))&&o(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:U,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:p,items:C,mainUserDashboardId:M,mainOrganisationDashboardId:L,onSelect:N,isSelected:E,DashboardType:c}}});function ia(a,y,I,U,w,$){const T=b("FSDashboardOrganisationTypeTileUI"),D=b("FSDashboardOrganisationTileUI"),F=b("FSDashboardShallowTileUI"),O=b("FSDataTable");return n(),d(O,f({items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),z({"item.icon":i(({item:o})=>[H(g,null,{default:i(()=>[v(Q(o.icon),1)]),_:2},1024)]),"item.main":i(({item:o})=>[o.id===a.mainOrganisationDashboardId?(n(),d(g,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):l("",!0),o.id===a.mainUserDashboardId?(n(),d(g,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):l("",!0)]),"item.tile":i(({item:o,toggleSelect:r})=>[o.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,f({key:0,bottomColor:o.colors,to:a.$props.itemTo&&a.$props.itemTo(o),modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o)},o),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):l("",!0),o.dashboardType==a.DashboardType.Organisation?(n(),d(D,f({key:1,bottomColor:o.colors,to:a.$props.itemTo&&a.$props.itemTo(o),modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o)},o),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):l("",!0),o.dashboardType==a.DashboardType.Shallow?(n(),d(F,f({key:2,bottomColor:o.colors,modelValue:a.isSelected(o.id),"onUpdate:modelValue":s=>r(o),to:a.$props.itemTo&&a.$props.itemTo(o)},o),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):l("",!0)]),_:2},[R(a.$slots,(o,r)=>({name:r,fn:i(s=>[G(a.$slots,r,J(K(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const ee=ra(q,[["render",ia]]);q.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"tableCode",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{ee as default};
