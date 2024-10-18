import{_ as F}from"./lodash-BiW_TGGX.js";import{d as L,w as V,y as n,z as b,A as y,B as q,O as $,C as l,m as u,K as C,L as T,M as h,N as d,H as v,I as B}from"./vue.esm-bundler-DTB_q9xr.js";import{F as c}from"./FSIcon-CJgnsR4e.js";import{F as I}from"./FSDataTable-BZK_4wly.js";import{F as w}from"./FSLocationTileUI-CMcc3SZn.js";import{u as U}from"./useLocations-CjGzyaax.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./VIcon-BCDp5TRU.js";import"./color-DBJfw4cY.js";import"./FSLoader-y57uLHf2.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-Bl7tphhx.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlU3VZ1O.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./form-D8F-RrsG.js";import"./FSCard-GtkwWKOo.js";import"./FSText-D77NGEvR.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VField-2PlKy0GK.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-DkqD7weE.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-BzJJodRe.js";import"./FSChip-C1Wzm8E1.js";import"./FSOptionGroup-zh6WLY4n.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CCHUxMdD.js";import"./filter-iZr2_yz2.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./FSIconCard-DDDdS0ns.js";import"./FSColor-7Ymgn3WF.js";import"./FSTile-BI_kc6PW.js";import"./address-CE2z3AEI.js";const f=L({name:"FSBaseLocationsList",components:{FSLocationTileUI:w,FSDataTable:I,FSIcon:c},props:{tableCode:{type:String,required:!1,default:null},locationsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},itemTo:{type:Function,required:!1},singleSelect:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:r,fetching:m,entities:s}=U();return V(()=>e.locationsFilters,(i,t)=>{(!i&&!t||!F.isEqual(i,t))&&r(e.locationsFilters)},{immediate:!0}),{fetchingLocations:m,isSelected:i=>{var t;return(t=e.modelValue)==null?void 0:t.includes(i)},locations:s}}});function D(e,r,m,s,S,i){const t=n("FSLocationTileUI"),g=n("FSDataTable");return b(),y(g,u({defaultMode:"iterator",loading:e.fetchingLocations,items:e.locations,showSelect:e.$props.editable,tableCode:e.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),q({"item.icon":l(({item:o})=>[d(c,null,{default:l(()=>[v(B(o.icon),1)]),_:2},1024)]),"item.tile":l(({item:o,toggleSelect:a})=>[d(t,u(o,{bottomColor:o.colors,address:o.address.placeLabel,editable:!0,singleSelect:e.singleSelect,modelValue:e.isSelected(o.id),to:e.$props.itemTo&&e.$props.itemTo(o),"onUpdate:modelValue":p=>a(o)}),null,16,["bottomColor","address","singleSelect","modelValue","to","onUpdate:modelValue"])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:l(p=>[C(e.$slots,a,T(h(p)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const Fo=N(f,[["render",D]]);f.__docgenInfo={displayName:"FSBaseLocationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"locationsFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"itemTo",type:{name:"(item: LocationInfos) => Partial<RouteLocation>"},required:!1},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue"]};export{Fo as default};
