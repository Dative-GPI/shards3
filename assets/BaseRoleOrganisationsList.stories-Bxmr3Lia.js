import{d as B,w as _,y as m,z as $,A as q,M as v,N as h,B as t,m as w,I as D,J as I,K as N,L as a,E as l,G as p}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-CIruG7xe.js";import{F as y}from"./FSRow-CA1vgNXx.js";import{F as u}from"./FSIcon-BVNp7pcM.js";import{F as P}from"./FSText-BN3VvfV9.js";import{F as k}from"./FSTagGroup-BuAqKeGP.js";import{u as E}from"./useRoleOrganisations-kSA9kDUh.js";import{a as M,b as z}from"./users-C2Y2e-HI.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader--MJuLA8w.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./color--o2QfpAv.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./VSpacer-DvdcLDtW.js";import"./FSDataTableUI-C7faQcjJ.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-M73AcfXp.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./VIcon-BQIm0b3J.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-CiUY3jF9.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSButton-CzT4qk-w.js";import"./FSClickable-D0EdtzT9.js";import"./VProgressCircular-D09FP1rk.js";import"./VField-C6F5sWZK.js";import"./loader-C8KBePTS.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-DbrO_Qw0.js";import"./FSDialogMenu-Bh07lE_k.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./FSDivider-CW2X6WDB.js";import"./FSChip-CZ8TO10U.js";import"./FSOptionGroup-BeYA2w7U.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B3SFyF18.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSTag-CA-pAfrN.js";import"./permissionInfos-BPDgTHQl.js";const T=B({name:"FSBaseRoleOrganisationsList",components:{FSDataTable:S,FSRow:y,FSIcon:u,FSText:P,FSTagGroup:k},props:{tableCode:{type:String,required:!0},roleOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:g}=E(),c=r=>e.modelValue.includes(r);return _(()=>e.roleOrganisationsFilters,(r,s)=>{(!r&&!s||!G.isEqual(r,s))&&i(e.roleOrganisationsFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:g,roleOrganisations:d,userTypeLabel:M,userTypeIcon:z,isSelected:c}}});function j(e,i,d,g,c,r){const s=m("FSText"),R=m("FSTagGroup"),C=m("FSDataTable");return $(),q(C,w({items:e.roleOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[l(p(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(y,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[l(p(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[l(p(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,f)=>({name:f,fn:t(L=>[D(e.$slots,f,I(N(L)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const V=A(T,[["render",j]]);T.__docgenInfo={displayName:"FSBaseRoleOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"roleOrganisationsFilters",type:{name:"RoleOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue"]};const Ro={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList",component:V,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisations1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationsList:V},setup(){return{args:e}},template:`
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"roleOrganisations1",modelValue:[]}};var F,b,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseRoleOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'roleOrganisations1',
    modelValue: []
  }
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const Co=["Default"];export{n as Default,Co as __namedExportsOrder,Ro as default};
