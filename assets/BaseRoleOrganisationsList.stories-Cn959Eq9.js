import{d as L,w as B,y as m,z as $,A as q,M as v,N as h,B as t,m as I,I as w,J as D,K as N,L as a,E as p,G as l}from"./vue.esm-bundler-Vj2X7okO.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as b}from"./FSDataTable-CVvjSdti.js";import{_ as T}from"./FSRow-BuYwVvwM.js";import{_ as u}from"./FSIcon-DYxpTLuT.js";import{F as P}from"./FSText-DhsiUbil.js";import{F as k}from"./FSTagGroup-DpmakQzf.js";import{u as E}from"./useRoleOrganisations-CKugOgbR.js";import{a as M,b as z}from"./users-BgX2v5Eq.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VImg-Da3f9R37.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./color-CxiNukW_.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSCol-Bk577joi.js";import"./VSpacer-YT0o3rZT.js";import"./FSDataTableUI-BHj-0v-F.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-B0fh_Rt7.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./density-BM1QLeh4.js";import"./VIcon-DptP6m9n.js";import"./tag-DxanhlL3.js";import"./proxiedModel-BE9FlVMJ.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./FSCard-D5wiJKub.js";import"./FSSearchField-Br299av8.js";import"./FSTextField-BQbZuAPn.js";import"./FSBaseField-DEWTBdWD.js";import"./FSButton-D9OonqCF.js";import"./FSClickable-CfNRAgb8.js";import"./VProgressCircular-DnrgPZB3.js";import"./VField-DaMwaaXY.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DyPMaPr_.js";import"./FSSelectField-C0lWTIfj.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-COYtI-Nu.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSWrapGroup-CSqxXTzY.js";import"./FSFadeOut-CB131b1X.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-iR212XTF.js";import"./VMenu-DOKVMVxb.js";import"./FSDivider-BJmJfrRD.js";import"./FSChip-BzumMGJt.js";import"./FSOptionGroup-CE9M3vJW.js";import"./VBtn-CJflX_3O.js";import"./filter-CkY1Z-lm.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./FSTag--B310hl1.js";import"./permissionInfos-BPDgTHQl.js";const y=L({name:"FSBaseRoleOrganisationsList",components:{FSDataTable:b,FSRow:T,FSIcon:u,FSText:P,FSTagGroup:k},props:{roleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:g}=E(),c=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationsFilters,(r,s)=>{(!r&&!s||!G.isEqual(r,s))&&i(e.roleOrganisationsFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:g,roleOrganisations:d,userTypeLabel:M,userTypeIcon:z,isSelected:c}}});function j(e,i,d,g,c,r){const s=m("FSText"),_=m("FSTagGroup"),R=m("FSDataTable");return $(),q(R,I({items:e.roleOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingRoleOrganisations,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[p(l(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(T,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[p(l(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[p(l(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(_,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,f)=>({name:f,fn:t(C=>[w(e.$slots,f,D(N(C)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const V=A(y,[["render",j]]);y.__docgenInfo={displayName:"FSBaseRoleOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationsFilters",type:{name:"RoleOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: RoleOrganisationInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue"]};const yo={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList",component:V,subcomponents:{FSDataTable:b},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisations1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationsList:V},setup(){return{args:e}},template:`
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"roleOrganisations1",modelValue:[]}};var F,O,S;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(O=n.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const Vo=["Default"];export{n as Default,Vo as __namedExportsOrder,yo as default};
