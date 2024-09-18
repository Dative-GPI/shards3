import{d as q,c as O,o as U,w as D,y as d,z as s,A as n,M as k,N as M,B as t,m as S,I as N,J as w,K as A,L as f,E as y,D as C,G as P}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as E}from"./lodash-BiW_TGGX.js";import{F as $}from"./FSDataTable-DzuCpuxN.js";import{F as u}from"./FSIcon-DwJNOKvG.js";import{F as v}from"./FSRow-CA1vgNXx.js";import{F as R}from"./FSText-DyldgdXP.js";import{F as z}from"./FSChip-Cu5YGhb-.js";import{F as j}from"./FSDashboardOrganisationTypeTileUI-BtFQXhYD.js";import{u as G}from"./useUserOrganisations-CrfAsfeZ.js";import{u as J}from"./useOrganisations-BZ8t9e4-.js";import{u as K}from"./useDashboardOrganisationTypes-DLMSqsPu.js";import{u as H}from"./useAppOrganisationId-BfPsGMlN.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-BeqwcZnN.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DPKcfP0u.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-Dakm4bPu.js";import"./FSSearchField-fyCoX-Sm.js";import"./FSTextField-DOjRjaWh.js";import"./FSBaseField-BkzmckaL.js";import"./FSButton-BjjxnBJw.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-DGC4MS1S.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CDcZ7it9.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-dT-IKU0T.js";import"./FSWrapGroup-DgP826LK.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B7wMH5Gc.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSOptionGroup-BgNblDTh.js";import"./filter-DC84psoM.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSSimpleTileUI-B8zfVAtV.js";import"./FSIconCard-G1MZXmQi.js";import"./FSImage-BxDhaxzU.js";import"./FSImageUI-C0XOuHIu.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSTile-ClEhpyRn.js";import"./permissionInfos-BPDgTHQl.js";import"./dashboardTranslation-DcIli75P.js";import"./useAppLanguageCode-CwkNj4O3.js";const B=q({name:"FSBaseDashboardOrganisationTypesList",components:{FSDataTable:$,FSIcon:u,FSRow:v,FSText:R,FSChip:z,FSDashboardOrganisationTypeTileUI:j},props:{dashboardOrganisationTypeFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,required:!1,default:()=>[]},tableCode:{type:String,required:!0}},setup(o){const{getMany:p,entities:T}=K(),{fetch:h,entity:g}=G(),{get:F,entity:m}=J(),{organisationId:r}=H(),c=O(()=>g.value?g.value.mainDashboardId:null),b=O(()=>m.value?m.value.mainDashboardId:null),e=a=>o.modelValue.includes(a);return U(()=>{h()}),D(r,()=>{r.value&&F(r.value)},{immediate:!0}),D(()=>o.dashboardOrganisationTypeFilters,(a,i)=>{(!a&&!i||!E.isEqual(a,i))&&p(o.dashboardOrganisationTypeFilters)},{immediate:!0}),{userOrganisationMainDashboardId:c,organisationMainDashboardId:b,dashboardOrganisationTypes:T,isSelected:e}}});function W(o,p,T,h,g,F){const m=d("FSText"),r=d("FSChip"),c=d("FSDashboardOrganisationTypeTileUI"),b=d("FSDataTable");return s(),n(b,S({items:o.dashboardOrganisationTypes,itemTo:o.$props.itemTo,tableCode:o.$props.tableCode,modelValue:o.$props.modelValue,"onUpdate:modelValue":p[0]||(p[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),k({"item.main":t(({item:e})=>[f(v,null,{default:t(()=>[e.id===o.organisationMainDashboardId?(s(),n(u,{key:0},{default:t(()=>[y(" mdi-account-group-outline ")]),_:1})):C("",!0),e.id===o.userOrganisationMainDashboardId?(s(),n(u,{key:1},{default:t(()=>[y(" mdi-home ")]),_:1})):C("",!0)]),_:2},1024)]),"item.icon":t(({item:e})=>[f(u,null,{default:t(()=>[y(P(e.icon),1)]),_:2},1024)]),"item.organisationTypeLabel":t(({item:e})=>[e.organisationTypeId?(s(),n(m,{key:0,label:e.organisationTypeLabel},null,8,["label"])):(s(),n(r,{key:1,variant:"standard",label:o.$tr("ui.common.all","All")},null,8,["label"]))]),"item.tile":t(({item:e,toggleSelect:a})=>[f(c,S({bottomColor:e.colors,to:o.$props.itemTo&&o.$props.itemTo(e),modelValue:o.isSelected(e.id),"onUpdate:modelValue":i=>a(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])]),_:2},[M(o.$slots,(e,a)=>({name:a,fn:t(i=>[N(o.$slots,a,w(A(i)))])}))]),1040,["items","itemTo","tableCode","modelValue"])}const _=Q(B,[["render",W]]);B.__docgenInfo={displayName:"FSBaseDashboardOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboardOrganisationTypes/FSBaseDashboardOrganisationTypesList.vue"]};const Ae={title:"Foundation/Core/Lists/Base Lists/BaseDashboardOrganisationTypesList",component:_,subcomponents:{FSDataTable:$},tags:["autodocs"],argTypes:{}},l={render:o=>({components:{FSBaseDashboardOrganisationTypesList:_},setup(){return{args:o}},template:`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dashboardOrganisationTypes1"}};var V,I,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDashboardOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dashboardOrganisationTypes1'
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Pe=["Default"];export{l as Default,Pe as __namedExportsOrder,Ae as default};
