import{d as B,w as _,y as p,z as $,A as q,M as v,N as h,B as t,m as w,I as D,J as I,K as N,L as a,E as m,G as l}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as b}from"./FSDataTable-B_1ARGQp.js";import{F as O}from"./FSRow-CA1vgNXx.js";import{F as P}from"./FSText-DyldgdXP.js";import{F as u}from"./FSIcon-DwJNOKvG.js";import{F as k}from"./FSTagGroup-CJwsUGH6.js";import{a as E,b as M}from"./users-C2Y2e-HI.js";import{u as z}from"./useRoleOrganisationTypes-goQHLrrx.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CfEIni24.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DPKcfP0u.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-Dakm4bPu.js";import"./FSSearchField-HiFV0K1j.js";import"./FSTextField-CxbK-t_X.js";import"./FSBaseField-Dx5t-_IZ.js";import"./FSButton-CyN0itWL.js";import"./FSClickable-CS9kdIxp.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-Cyxds-E_.js";import"./FSDialogMenu-D5T4tlYN.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-BogZOmN_.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Cx7T0QZL.js";import"./FSWrapGroup-yFK4C9rw.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-TwkeP4NY.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-DQ-5tMcN.js";import"./FSChip-Cu5YGhb-.js";import"./FSOptionGroup-BXRAcD1O.js";import"./filter-CTnmeGG4.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTag-jxb5lu-q.js";import"./permissionInfos-BPDgTHQl.js";const S=B({name:"FSBaseRoleOrganisationTypesList",components:{FSRow:O,FSIcon:u,FSText:P,FSTagGroup:k,FSDataTable:b},props:{tableCode:{type:String,required:!0},roleOrganisationTypesFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:g}=z(),c=r=>e.modelValue.includes(r);return _(()=>e.roleOrganisationTypesFilters,(r,s)=>{(!r&&!s||!G.isEqual(r,s))&&i(e.roleOrganisationTypesFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:g,roleOrganisationTypes:d,userTypeLabel:E,userTypeIcon:M,isSelected:c}}});function j(e,i,d,g,c,r){const s=p("FSText"),R=p("FSTagGroup"),C=p("FSDataTable");return $(),q(C,w({items:e.roleOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[m(l(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(O,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[m(l(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[m(l(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,f)=>({name:f,fn:t(L=>[D(e.$slots,f,I(N(L)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const V=A(S,[["render",j]]);S.__docgenInfo={displayName:"FSBaseRoleOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"roleOrganisationTypesFilters",type:{name:"RoleOrganisationTypeFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisationTypes/FSBaseRoleOrganisationTypesList.vue"]};const Ro={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationTypesList",component:V,subcomponents:{FSDataTable:b},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisationTypes1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationTypesList:V},setup(){return{args:e}},template:`
      <FSBaseRoleOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"roleOrganisationTypes1",modelValue:[]}};var y,T,F;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseRoleOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseRoleOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'roleOrganisationTypes1',
    modelValue: []
  }
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const Co=["Default"];export{n as Default,Co as __namedExportsOrder,Ro as default};
