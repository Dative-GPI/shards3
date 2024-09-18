import{d as y,w as I,y as a,z as f,A as c,M as h,N as $,B as t,m as g,I as T,J as _,K as q,D as C,L as s,E as v,G as B}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as w}from"./lodash-BiW_TGGX.js";import{F as L}from"./FSDataTable-CnLYfQb-.js";import{F}from"./FSIcon-lOMM3dv0.js";import{F as N}from"./FSImage-DFpAkaKA.js";import{F as U}from"./FSTagGroup-DwKcNwrc.js";import{F as D}from"./FSGroupTileUI-T1vJn86Z.js";import{u as k}from"./useGroups-BEpPMhMx.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-7EueGG7H.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./css-BRRCqIav.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-CtQDyyQv.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DMOSpZOv.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-VI0SCCBU.js";import"./FSText-BN3VvfV9.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CwdkTkty.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSFadeOut-DGMvjjet.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-TaDedv2I.js";import"./FSChip-BJGyRW3u.js";import"./FSOptionGroup-4rULTFhS.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-D0IdOlS8.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTag-DHDcqttn.js";import"./FSColor-DJALVf1r.js";import"./FSTile-DgvD4gki.js";import"./pathCrumb-Db-cq5HI.js";const S=y({name:"FSBaseGroupsList",components:{FSDataTable:L,FSImage:N,FSIcon:F,FSGroupTileUI:D,FSTagGroup:U},props:{tableCode:{type:String,required:!0},groupsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,fetching:l,entities:n}=k(),u=r=>e.modelValue.includes(r);return I(()=>e.groupsFilters,(r,p)=>{(!r&&!p||!w.isEqual(r,p))&&i(e.groupsFilters)},{immediate:!0}),{fetchingGroups:l,groups:n,isSelected:u}}});function z(e,i,l,n,u,r){const p=a("FSImage"),V=a("FSTagGroup"),b=a("FSGroupTileUI"),G=a("FSDataTable");return f(),c(G,g({loading:e.fetchingGroups,items:e.groups,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),h({"item.imageId":t(({item:o})=>[o.imageId?(f(),c(p,{key:0,height:"38px",width:"38px",imageId:o.imageId},null,8,["imageId"])):C("",!0)]),"item.icon":t(({item:o})=>[s(F,null,{default:t(()=>[v(B(o.icon),1)]),_:2},1024)]),"item.tags":t(({item:o})=>[s(V,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),"item.tile":t(({item:o,toggleSelect:m})=>[s(b,g({editable:e.$props.editable,modelValue:e.isSelected(o.id),"onUpdate:modelValue":d=>m(o)},o),null,16,["editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(o,m)=>({name:m,fn:t(d=>[T(e.$slots,m,_(q(d)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const To=P(S,[["render",z]]);S.__docgenInfo={displayName:"FSBaseGroupsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"groupsFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/groups/FSBaseGroupsList.vue"]};export{To as default};
