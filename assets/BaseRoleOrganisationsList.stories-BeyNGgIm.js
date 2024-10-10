import{d as _,w as B,y as l,z as $,A as q,B as v,O as h,C as t,m as w,K as D,L as I,M as N,N as a,H as m,I as p}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as k}from"./FSTagGroup-CKZ3VPWy.js";import{F as u}from"./FSIcon-CaaGuK6D.js";import{F as G}from"./FSText-7jyalPrS.js";import{_ as S}from"./FSRow-CFFgZ74C.js";import{F as y}from"./FSDataTable-DwlnRbbs.js";import{u as M}from"./useRoleOrganisations-CtFWj6Te.js";import{a as z,b as A}from"./users-CBCe4eL2.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSWrapGroup-Dplk4rjv.js";import"./uuid-DTaye2KM.js";import"./useSlots-BnylMYIF.js";import"./useColors-BWKJNLz8.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-UH0ZuYvc.js";import"./color-Du5JXqac.js";import"./display-BhWGQDVt.js";import"./VIcon-DzZvThha.js";import"./locale-BJQwrXJ7.js";import"./resizeObserver-BhfhgZOk.js";import"./FSTag-D14VAPlw.js";import"./FSSpan-DGSHCe_l.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./density-CmGe4Vfq.js";import"./elevation-JfXKLVfD.js";import"./rounded-ErtzAGHK.js";import"./dimensions-CqoZOW6j.js";import"./loader-BYp4SDfR.js";import"./VProgressCircular-DjSdELIn.js";import"./anchor-0mwNUa2-.js";import"./router-DxFny788.js";import"./index-DMxVfgfA.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSSlideGroup--K704DO9.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./FSButton-C0EbsNmZ.js";import"./FSClickable-BkJRwj5f.js";import"./FSCard-C6D9gNrD.js";import"./FSCol-CYWCfIBP.js";import"./FSLoader-BFHjXl9p.js";import"./VSpacer-Di7g3RCw.js";import"./FSDataTableUI-Yt4QkxZA.js";import"./vue-router-Bp8FxDoy.js";import"./FSCheckbox-Bdwx0Alv.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./transition-DhTIerNz.js";import"./form-_oo3cshG.js";import"./FSSearchField-CAI8fEsN.js";import"./FSTextField-B-binuYf.js";import"./FSBaseField-D2wwYX9r.js";import"./VField-Do2gtyNA.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-D3PrfN9X.js";import"./FSDialogMenu-BA4IKkHH.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./lazy-CgkI0iJG.js";import"./FSToggleSet-CvGKl15-.js";import"./FSFadeOut-DevRILST.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./FSDivider-BNA1ohhL.js";import"./FSChip-D8HPW226.js";import"./FSOptionGroup-CYF5vXq9.js";import"./filter-C1K_d8Vd.js";import"./filter-COIlslko.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./permissionInfos-BPDgTHQl.js";const T=_({name:"FSBaseRoleOrganisationsList",components:{FSDataTable:y,FSTagGroup:k,FSIcon:u,FSText:G,FSRow:S},props:{tableCode:{type:String,required:!1,default:null},roleOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:f}=M(),g=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationsFilters,(r,s)=>{(!r&&!s||!P.isEqual(r,s))&&i(e.roleOrganisationsFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:f,roleOrganisations:d,userTypeLabel:z,userTypeIcon:A,isSelected:g}}});function j(e,i,d,f,g,r){const s=l("FSText"),R=l("FSTagGroup"),C=l("FSDataTable");return $(),q(C,w({loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,items:e.roleOrganisations,itemTo:e.$props.itemTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[m(p(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(S,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[m(p(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[m(p(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,c)=>({name:c,fn:t(L=>[D(e.$slots,c,I(N(L)))])}))]),1040,["loading","showSelect","tableCode","items","itemTo","modelValue"])}const V=E(T,[["render",j]]);T.__docgenInfo={displayName:"FSBaseRoleOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationsFilters",type:{name:"RoleOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue"]};const _o={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList",component:V,subcomponents:{FSDataTable:y},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisations1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationsList:V},setup(){return{args:e}},template:`
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
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const Bo=["Default"];export{n as Default,Bo as __namedExportsOrder,_o as default};