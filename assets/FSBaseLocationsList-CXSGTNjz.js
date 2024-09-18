import{_ as F}from"./lodash-BiW_TGGX.js";import{d as L,w as V,y as n,z as b,A as y,M as q,N as $,B as m,m as u,I as T,J as h,K as C,L as d,E as B,G as v}from"./vue.esm-bundler-BSyvBTC9.js";import{F as c}from"./FSIcon-lOMM3dv0.js";import{F as I}from"./FSDataTable-CnLYfQb-.js";import{F as w}from"./FSLocationTileUI-Cp0AuSn-.js";import{u as U}from"./useLocations-Bj7Qu8qZ.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSLoader-7EueGG7H.js";import"./css-BRRCqIav.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-VI0SCCBU.js";import"./FSText-BN3VvfV9.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-TaDedv2I.js";import"./FSChip-BJGyRW3u.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSIconCard-BMSUO8Ab.js";import"./FSColor-DJALVf1r.js";import"./FSTile-DgvD4gki.js";import"./address-CE2z3AEI.js";const f=L({name:"FSBaseLocationsList",components:{FSLocationTileUI:w,FSDataTable:I,FSIcon:c},props:{locationsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1},itemTo:{type:Function,required:!1},singleSelect:{type:Boolean,required:!1,default:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(e){const{getMany:r,fetching:l,entities:p}=U();return V(()=>e.locationsFilters,(i,t)=>{(!i&&!t||!F.isEqual(i,t))&&r(e.locationsFilters)},{immediate:!0}),{fetchingLocations:l,isSelected:i=>{var t;return(t=e.modelValue)==null?void 0:t.includes(i)},locations:p}}});function D(e,r,l,p,S,i){const t=n("FSLocationTileUI"),g=n("FSDataTable");return b(),y(g,u({loading:e.fetchingLocations,items:e.locations,showSelect:e.$props.editable,tableCode:e.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),q({"item.icon":m(({item:o})=>[d(c,null,{default:m(()=>[B(v(o.icon),1)]),_:2},1024)]),"item.tile":m(({item:o,toggleSelect:a})=>[d(t,u(o,{bottomColor:o.colors,editable:!0,singleSelect:e.singleSelect,modelValue:e.isSelected(o.id),to:e.$props.itemTo&&e.$props.itemTo(o),"onUpdate:modelValue":s=>a(o)}),null,16,["bottomColor","singleSelect","modelValue","to","onUpdate:modelValue"])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:m(s=>[T(e.$slots,a,h(C(s)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const So=N(f,[["render",D]]);f.__docgenInfo={displayName:"FSBaseLocationsList",exportName:"default",description:"",tags:{},props:[{name:"locationsFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"itemTo",type:{name:"(item: LocationInfos) => Partial<RouteLocation>"},required:!1},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue"]};export{So as default};
