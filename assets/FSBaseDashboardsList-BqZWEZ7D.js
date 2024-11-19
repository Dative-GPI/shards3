import{_ as h}from"./lodash-BiW_TGGX.js";import{d as E,b as z,c as V,g as R,w as b,y as f,z as n,A as d,B as H,O as K,C as i,m as c,K as G,L as J,M as Q,N as W,H as v,I as X,F as m}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as Y}from"./FSDataTable-4pMRBcam.js";import{F as y}from"./FSIcon-DfjSexyz.js";import{F as Z}from"./FSDashboardShallowTileUI-BcEixP5m.js";import{F as _}from"./FSDashboardOrganisationTileUI-fC3HpQql.js";import{F as x}from"./FSDashboardOrganisationTypeTileUI-Dal3zLUH.js";import{u as aa}from"./useDashboardOrganisationTypes-DAOOKznG.js";import{u as ea}from"./useDashboardOrganisations-SYuIiyjn.js";import{u as oa}from"./useDashboardShallows-CIMorXGl.js";import{u as ta}from"./useUserOrganisations-nGQjkFjx.js";import{u as ra}from"./organisationDetails-Bs58eQFy.js";import{u as ia}from"./useAppOrganisationId-4oKdl_5X.js";import{D as g}from"./dashboards-JSNI7pIu.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-PksHGtEK.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-DnoeDx-P.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./color-DdAXPAA0.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./FSCol-D8gLxM2E.js";import"./FSRow-CSQtiyAx.js";import"./FSDataTableUI-BvMeHmFR.js";import"./vue-router-9d6tV3EF.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-3iIuKfLX.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./VIcon-zho7mIKV.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./form-vji0TmoR.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSText-CAGI2dEo.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./FSClickable-D7sul-uP.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VField-DrieYqTb.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-WQNi82Nz.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-CDvYXrsD.js";import"./FSChip-B-qI2KQy.js";import"./FSOptionGroup-CjsCGHE4.js";import"./filter-C1K_d8Vd.js";import"./VBtn-GP0Uljy4.js";import"./filter-MqAtiUjL.js";import"./base-DCZJTx46.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-H3XPfy7N.js";import"./FSSimpleTileUI-DE06GMYG.js";import"./FSIconCard-DcSf6Mbi.js";import"./FSImage-9J49soYl.js";import"./FSImageUI-CifHzJ5L.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSTile-BHCSbyjx.js";import"./dashboardTranslation-C6soLE7g.js";import"./useAppLanguageCode-C2XicOK_.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const k=E({name:"FSBaseDashboardsList",components:{FSDataTable:Y,FSIcon:y,FSDashboardOrganisationTileUI:_,FSDashboardOrganisationTypeTileUI:x,FSDashboardShallowTileUI:Z},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:type"],setup(a,{emit:p}){const{entities:I,fetching:w,getMany:U}=aa(),{entities:$,fetching:T,getMany:D}=ea(),{entities:F,fetching:O,getMany:e}=oa(),{fetch:r,entity:s}=ta(),{entity:B,get:L}=ra(),{organisationId:S}=ia(),u=z(a.modelValue),C=V(()=>h.sortBy([...I.value.map(o=>({...o,dashboardType:g.OrganisationType})),...$.value.map(o=>({...o,dashboardType:g.Organisation})),...F.value.map(o=>({...o,dashboardType:g.Shallow}))],o=>o.label)),N=V(()=>{var o;return(o=s.value)==null?void 0:o.mainDashboardId}),P=V(()=>{var o;return(o=B.value)==null?void 0:o.mainDashboardId}),j=o=>{u.value=o;const t=C.value.filter(l=>u.value.includes(l.id)),q=t.map(l=>l.id),M=t.map(l=>l.dashboardType);p("update:modelValue",q),p("update:type",M),p("update",{modelValue:q,type:M})},A=o=>{var t;return(t=u.value)==null?void 0:t.includes(o)};return R(()=>{r()}),b(()=>S.value,()=>{S.value&&L(S.value)},{immediate:!0}),b(()=>a.dashboardOrganisationTypeFetchFilter,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&U(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),b(()=>a.dashboardOrganisationsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),b(()=>a.dashboardShallowsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&e(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:w,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:u,items:C,mainUserDashboardId:N,mainOrganisationDashboardId:P,onSelect:j,isSelected:A,DashboardType:g}}});function na(a,p,I,w,U,$){const T=f("FSDashboardOrganisationTypeTileUI"),D=f("FSDashboardOrganisationTileUI"),F=f("FSDashboardShallowTileUI"),O=f("FSDataTable");return n(),d(O,c({defaultMode:"iterator",items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),H({"item.icon":i(({item:e})=>[W(y,null,{default:i(()=>[v(X(e.icon),1)]),_:2},1024)]),"item.main":i(({item:e})=>[e.id===a.mainOrganisationDashboardId?(n(),d(y,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):m("",!0),e.id===a.mainUserDashboardId?(n(),d(y,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):m("",!0)]),"item.tile":i(({item:e,toggleSelect:r})=>[e.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,c({key:0,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Organisation?(n(),d(D,c({key:1,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Shallow?(n(),d(F,c({key:2,bottomColor:e.colors,modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e),to:a.$props.itemTo&&a.$props.itemTo(e)},e),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):m("",!0)]),_:2},[K(a.$slots,(e,r)=>({name:r,fn:i(s=>[G(a.$slots,r,J(Q(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const ro=sa(k,[["render",na]]);k.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{ro as default};
