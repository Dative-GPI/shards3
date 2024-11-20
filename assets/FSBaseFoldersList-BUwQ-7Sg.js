import{_ as V}from"./lodash-BiW_TGGX.js";import{d as T,w as b,y as l,z as y,A as $,B as C,O as h,C as m,m as c,K as q,L as v,M as I,N as s,H as L,I as B}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as g}from"./FSIcon-DfjSexyz.js";import{F as D}from"./FSTagGroup-C14rkXPu.js";import{F as _}from"./FSFolderTileUI-B8NkEl3X.js";import{F as U}from"./FSDataTable-CUA9EG44.js";import{u as N}from"./useFolders-Cix7RvnI.js";import{F as w}from"./dashboards-BpLQ7OAN.js";import{D as M}from"./dashboards-JSNI7pIu.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-DnoeDx-P.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./VIcon-zho7mIKV.js";import"./color-DdAXPAA0.js";import"./FSWrapGroup-DCzWuvHX.js";import"./uuid-DTaye2KM.js";import"./useSlots-C9mZt9CQ.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./index-B-qTxNvr.js";import"./display-BUGvawh3.js";import"./locale-CA7yUTVs.js";import"./resizeObserver-wyIwxSZb.js";import"./FSTag-B6pa7vMu.js";import"./FSSpan-Bh1X02mE.js";import"./FSRow-CSQtiyAx.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./dimensions-DL1AZk-8.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./anchor-BdD5yCeG.js";import"./router-C4YP2PAT.js";import"./index-BF2Ge4Ib.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSCol-D8gLxM2E.js";import"./FSSimpleTileUI-DE06GMYG.js";import"./FSIconCard-DcSf6Mbi.js";import"./FSImage-9J49soYl.js";import"./FSImageUI-CifHzJ5L.js";import"./FSLoader-PksHGtEK.js";import"./VImg-Bi-pKvLj.js";import"./transition-BtBp4lzQ.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSTile-BHCSbyjx.js";import"./FSCheckbox-3iIuKfLX.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./form-vji0TmoR.js";import"./FSDataTableUI-jFJeeCeX.js";import"./FSText-CAGI2dEo.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./VField-DrieYqTb.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-WQNi82Nz.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./lazy-BsoIJm2g.js";import"./ssrBoot-BXK87sqN.js";import"./FSToggleSet-CjZBl77R.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-CDvYXrsD.js";import"./FSChip-B-qI2KQy.js";import"./FSOptionGroup-CjsCGHE4.js";import"./filter-C1K_d8Vd.js";import"./filter-MqAtiUjL.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./pathCrumb-Db-cq5HI.js";const S=T({name:"FSBaseFoldersList",components:{FSFolderTileUI:_,FSDataTable:U,FSTagGroup:D,FSIcon:g},props:{tableCode:{type:String,required:!1,default:null},foldersFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const{entities:n,fetching:d,getMany:u}=N(),f=t=>{a("update:modelValue",t)},p=t=>{var r;return(r=e.modelValue)==null?void 0:r.includes(t)};return b(()=>e.foldersFilters,(t,r)=>{(!t&&!r||!V.isEqual(t,r))&&u(e.foldersFilters,o=>{var i;return o.parentId==((i=e.foldersFilters)==null?void 0:i.parentId)})},{immediate:!0}),{fetchingFolders:d,folders:n,onSelect:f,isSelected:p,FoldersListType:w,DashboardType:M}}});function k(e,a,n,d,u,f){const p=l("FSTagGroup"),t=l("FSFolderTileUI"),r=l("FSDataTable");return y(),$(r,c({defaultMode:"iterator",items:e.folders,itemTo:e.$props.itemTo,loading:e.fetchingFolders,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),C({"item.icon":m(({item:o})=>[s(g,null,{default:m(()=>[L(B(o.icon),1)]),_:2},1024)]),"item.tags":m(({item:o})=>[s(p,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),"item.tile":m(({item:o,toggleSelect:i})=>[s(t,c({bottomColor:o.colors},o,{modelValue:e.isSelected(o.id),"onUpdate:modelValue":F=>i(o),to:e.$props.itemTo&&e.$props.itemTo(o)}),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])]),_:2},[h(e.$slots,(o,i)=>({name:i,fn:m(F=>[q(e.$slots,i,v(I(F)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const Bo=P(S,[["render",k]]);S.__docgenInfo={displayName:"FSBaseFoldersList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"foldersFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/folders/FSBaseFoldersList.vue"]};export{Bo as default};
