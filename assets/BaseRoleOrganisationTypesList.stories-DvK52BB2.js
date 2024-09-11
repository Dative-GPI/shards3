import{d as L,w as B,y as p,z as $,A as q,M as v,N as h,B as t,m as I,I as w,J as D,K as N,L as a,E as m,G as l}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as O}from"./FSDataTable-B6hZuxqM.js";import{_ as S}from"./FSRow-CVY2l52N.js";import{F as P}from"./FSText-8i4Fp1Ld.js";import{_ as u}from"./FSIcon-DHDofKUo.js";import{F as k}from"./FSTagGroup-KaZAzl-t.js";import{a as E,b as M}from"./users-C2Y2e-HI.js";import{u as z}from"./useRoleOrganisationTypes-goQHLrrx.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-DIRgKG_M.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-CekjR0Nk.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-YoHHo_JV.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-DAS46KTX.js";import"./FSSearchField-CnDYBu_t.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-D8_kFGVg.js";import"./FSDialogMenu-CjU7jTTU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-CpPmq5Yu.js";import"./FSChip-vR1IHQ3P.js";import"./FSOptionGroup-wuNvwQjf.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTag-Bvc5sF_f.js";import"./permissionInfos-BPDgTHQl.js";const b=L({name:"FSBaseRoleOrganisationTypesList",components:{FSRow:S,FSIcon:u,FSText:P,FSTagGroup:k,FSDataTable:O},props:{roleOrganisationTypesFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:g}=z(),c=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationTypesFilters,(r,s)=>{(!r&&!s||!G.isEqual(r,s))&&i(e.roleOrganisationTypesFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:g,roleOrganisationTypes:d,userTypeLabel:E,userTypeIcon:M,isSelected:c}}});function j(e,i,d,g,c,r){const s=p("FSText"),_=p("FSTagGroup"),R=p("FSDataTable");return $(),q(R,I({items:e.roleOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingRoleOrganisations,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[m(l(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(S,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[m(l(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[m(l(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(_,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,f)=>({name:f,fn:t(C=>[w(e.$slots,f,D(N(C)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const V=A(b,[["render",j]]);b.__docgenInfo={displayName:"FSBaseRoleOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypesFilters",type:{name:"RoleOrganisationTypeFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: RoleOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisationTypes/FSBaseRoleOrganisationTypesList.vue"]};const Vo={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationTypesList",component:V,subcomponents:{FSDataTable:O},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisationTypes1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationTypesList:V},setup(){return{args:e}},template:`
      <FSBaseRoleOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"roleOrganisationTypes1",modelValue:[]}};var T,y,F;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(y=n.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const _o=["Default"];export{n as Default,_o as __namedExportsOrder,Vo as default};
