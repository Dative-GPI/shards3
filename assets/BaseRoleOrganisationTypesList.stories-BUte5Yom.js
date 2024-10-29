import{d as _,w as B,y as p,z as $,A as q,B as v,O as h,C as t,m as w,K as D,L as I,M as N,N as a,H as l,I as m}from"./vue.esm-bundler-l-siv0w9.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as b}from"./FSDataTable-BVUgtWuH.js";import{_ as O}from"./FSRow-CbEgVN08.js";import{F as k}from"./FSText-BwKgSTLP.js";import{F as u}from"./FSIcon-uIr9VdFq.js";import{F as G}from"./FSTagGroup-B8vm8ffE.js";import{a as M,b as z}from"./users-C0O-H65U.js";import{u as A}from"./useRoleOrganisationTypes-ayjwzfDW.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-DzCwNAwg.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-DcUuAZqz.js";import"./FSClickable-Up0p3Vk8.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DpVu8WDf.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-CELx6cWV.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSTag-ErOwxBbY.js";import"./permissionInfos-BPDgTHQl.js";const S=_({name:"FSBaseRoleOrganisationTypesList",components:{FSRow:O,FSIcon:u,FSText:k,FSTagGroup:G,FSDataTable:b},props:{tableCode:{type:String,required:!1,default:null},roleOrganisationTypesFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:f}=A(),g=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationTypesFilters,(r,s)=>{(!r&&!s||!P.isEqual(r,s))&&i(e.roleOrganisationTypesFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:f,roleOrganisationTypes:d,userTypeLabel:M,userTypeIcon:z,isSelected:g}}});function j(e,i,d,f,g,r){const s=p("FSText"),R=p("FSTagGroup"),C=p("FSDataTable");return $(),q(C,w({items:e.roleOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[l(m(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(O,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[l(m(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[l(m(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,c)=>({name:c,fn:t(L=>[D(e.$slots,c,I(N(L)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const V=E(S,[["render",j]]);S.__docgenInfo={displayName:"FSBaseRoleOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationTypesFilters",type:{name:"RoleOrganisationTypeFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisationTypes/FSBaseRoleOrganisationTypesList.vue"]};const Lo={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationTypesList",component:V,subcomponents:{FSDataTable:b},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisationTypes1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationTypesList:V},setup(){return{args:e}},template:`
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
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const _o=["Default"];export{n as Default,_o as __namedExportsOrder,Lo as default};
