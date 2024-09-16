import{_ as S}from"./lodash-BiW_TGGX.js";import{d as g,w as y,y as u,z as b,A as T,M as $,N as C,B as p,m as f,I as h,J as q,K as I,L as F,E as L,G as v}from"./vue.esm-bundler-BSyvBTC9.js";import{F as c}from"./FSIcon-DwJNOKvG.js";import{F as B}from"./FSFolderTileUI-DOQyjG0y.js";import{F as D}from"./FSDataTable-xX9JgO_Q.js";import{u as U}from"./useFolders-C2Y4eB4b.js";import{F as N}from"./dashboards-DDo4KjxB.js";import{D as _}from"./dashboards-JSNI7pIu.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSimpleTileUI-B8zfVAtV.js";import"./FSIconCard-G1MZXmQi.js";import"./FSCard-Dakm4bPu.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./FSImage-BxDhaxzU.js";import"./FSImageUI-C0XOuHIu.js";import"./FSLoader-CtbqJzfZ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSTile-ClEhpyRn.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSCheckbox-DPKcfP0u.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./form-B61Sg6X-.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DmL672AK.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSText-DyldgdXP.js";import"./FSSearchField-Cjbg81V-.js";import"./FSTextField-DIyIIzs_.js";import"./FSBaseField-BkzmckaL.js";import"./FSButton-CyN0itWL.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CBLEXrby.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-BogZOmN_.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Cx7T0QZL.js";import"./FSWrapGroup-yFK4C9rw.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VSelect-vIgl-vXK.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSChip-Cu5YGhb-.js";import"./FSOptionGroup-BXRAcD1O.js";import"./filter-CTnmeGG4.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./pathCrumb-Db-cq5HI.js";const V=g({name:"FSBaseFoldersList",components:{FSDataTable:D,FSIcon:c,FSFolderTileUI:B},props:{foldersFilters:{type:Object,default:void 0,required:!1},modelValue:{type:Array,required:!1,default:()=>[]},itemTo:{type:Function,required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:m}){const{entities:s,fetching:l,getMany:d}=U(),n=t=>{m("update:modelValue",t)},a=t=>{var o;return(o=e.modelValue)==null?void 0:o.includes(t)};return y(()=>e.foldersFilters,(t,o)=>{(!t&&!o||!S.isEqual(t,o))&&d(e.foldersFilters,r=>{var i;return r.parentId==((i=e.foldersFilters)==null?void 0:i.parentId)})},{immediate:!0}),{fetchingFolders:l,folders:s,onSelect:n,isSelected:a,FoldersListType:N,DashboardType:_}}});function P(e,m,s,l,d,n){const a=u("FSFolderTileUI"),t=u("FSDataTable");return b(),T(t,f({items:e.folders,"item-to":e.$props.itemTo,loading:e.fetchingFolders,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":m[0]||(m[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),$({"item.icon":p(({item:o})=>[F(c,null,{default:p(()=>[L(v(o.icon),1)]),_:2},1024)]),"item.tile":p(({item:o,toggleSelect:r})=>[F(a,f({bottomColor:o.colors},o,{modelValue:e.isSelected(o.id),"onUpdate:modelValue":i=>r(o),to:e.$props.itemTo&&e.$props.itemTo(o)}),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])]),_:2},[C(e.$slots,(o,r)=>({name:r,fn:p(i=>[h(e.$slots,r,q(I(i)))])}))]),1040,["items","item-to","loading","tableCode","modelValue"])}const $o=w(V,[["render",P]]);V.__docgenInfo={displayName:"FSBaseFoldersList",exportName:"default",description:"",tags:{},props:[{name:"foldersFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/folders/FSBaseFoldersList.vue"]};export{$o as default};
