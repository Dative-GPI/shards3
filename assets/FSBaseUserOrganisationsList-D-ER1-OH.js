import{d as U,w as v,y as a,z as F,A as S,M as h,N as $,B as o,m as y,I as C,J as _,K as q,L as i,E as p,D as w,G as b}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as B}from"./FSDataTable-DzuCpuxN.js";import{_ as l}from"./FSSpan-CCGpb4KF.js";import{F as k}from"./FSImage-BxDhaxzU.js";import{F as N}from"./FSTagGroup-DAvzeC4G.js";import{F as D}from"./FSIconCheck-CX-utQD8.js";import{F as E}from"./FSUserOrganisationTileUI-BEv4PG0w.js";import{a as G}from"./useUserOrganisations-CrfAsfeZ.js";import{u as P,a as z}from"./users-C2Y2e-HI.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSIcon-DwJNOKvG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-BeqwcZnN.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DPKcfP0u.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-Dakm4bPu.js";import"./FSText-DyldgdXP.js";import"./useSlots-P12pG1X5.js";import"./FSSearchField-fyCoX-Sm.js";import"./FSTextField-DOjRjaWh.js";import"./FSBaseField-BkzmckaL.js";import"./FSButton-BjjxnBJw.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-DGC4MS1S.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CDcZ7it9.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-dT-IKU0T.js";import"./FSWrapGroup-DgP826LK.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B7wMH5Gc.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSChip-Cu5YGhb-.js";import"./FSOptionGroup-BgNblDTh.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-C0XOuHIu.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTag-CiTQmVvb.js";import"./FSTile-ClEhpyRn.js";import"./permissionInfos-BPDgTHQl.js";const V=U({name:"FSBaseUserOrganisationsList",components:{FSDataTable:B,FSImage:k,FSUserOrganisationTileUI:E,FSSpan:l,FSTagGroup:N,FSIconCheck:D},props:{tableCode:{type:String,required:!0},userOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:s,entities:u,fetching:d}=G(),f=r=>e.modelValue.includes(r);return v(()=>e.userOrganisationsFilters,(r,m)=>{(!r&&!m||!L.isEqual(r,m))&&s(e.userOrganisationsFilters??void 0)},{immediate:!0}),{fetchingUserOrganisations:d,userOrganisations:u,userValidityLabel:P,userTypeLabel:z,isSelected:f}}});function R(e,s,u,d,f,r){const m=a("FSImage"),g=a("FSIconCheck"),O=a("FSTagGroup"),T=a("FSUserOrganisationTileUI"),I=a("FSDataTable");return F(),S(I,y({items:e.userOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingUserOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),h({"header.imageId-title":o(()=>[i(M,null,{default:o(()=>[p(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(F(),S(m,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):w("",!0)]),"item.allowEmails":o(({item:t})=>[i(g,{value:t.allowEmails},null,8,["value"])]),"item.allowSms":o(({item:t})=>[i(g,{value:t.allowSms},null,8,["value"])]),"item.tags":o(({item:t})=>[i(O,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":o(({item:t,toggleSelect:n})=>[i(T,y({to:e.$props.itemTo&&e.$props.itemTo(t),editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":c=>n(t)},t),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(t,n)=>({name:n,fn:o(c=>[C(e.$slots,n,_(q(c)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const _t=A(V,[["render",R]]);V.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{_t as default};
