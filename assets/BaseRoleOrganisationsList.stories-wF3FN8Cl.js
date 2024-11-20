import{d as L,w as B,A as l,B as $,C as q,D as v,Q as h,E as t,j as w,M as D,N as I,O as N,P as a,J as m,K as p}from"./vue.esm-bundler-Zcuj-zyO.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as k}from"./FSTagGroup-CWOOUSdp.js";import{F as u}from"./FSIcon-CKEWDmaC.js";import{F as E}from"./FSText-DqK2dTtm.js";import{_ as S}from"./FSRow-4Qz6Bbpg.js";import{F as y}from"./FSDataTable-BuAXJYGo.js";import{u as G}from"./useRoleOrganisations-BiM86AS_.js";import{a as M,b as j}from"./users-C58YoaZM.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSWrapGroup-DSD82cKU.js";import"./uuid-DTaye2KM.js";import"./useSlots-DzOFTavN.js";import"./useColors-Cz5tOQmp.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-D14OnwAh.js";import"./color-mm3JSYKM.js";import"./display-Db__yhk9.js";import"./locale-Beavd5eP.js";import"./VIcon-DsLd3bsf.js";import"./resizeObserver-BOpsWgva.js";import"./FSTag-CHJ-tL1L.js";import"./FSSpan-Bb6VK1Ws.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./dimensions-BWgpWc0X.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./index-CMMTOWvF.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./FSLoader-CRmsosiO.js";import"./FSDataTableUI-DXYgOSv2.js";import"./FSCheckbox-CunxM6rm.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./transition-shOmLEJh.js";import"./form-ChxmsGl9.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./VField-BtCsV974.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./useTranslations-DN7QCs30.js";import"./FSSelectField-ChNtQfMF.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./VImg-DaKoZ_qJ.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSDivider-DOHnDXxM.js";import"./FSChip-DMpdcIDo.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";import"./permissionInfos-BPDgTHQl.js";const T=L({name:"FSBaseRoleOrganisationsList",components:{FSDataTable:y,FSTagGroup:k,FSIcon:u,FSText:E,FSRow:S},props:{tableCode:{type:String,required:!1,default:null},roleOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:f}=G(),g=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationsFilters,(r,s)=>{(!r&&!s||!P.isEqual(r,s))&&i(e.roleOrganisationsFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:f,roleOrganisations:d,userTypeLabel:M,userTypeIcon:j,isSelected:g}}});function z(e,i,d,f,g,r){const s=l("FSText"),R=l("FSTagGroup"),C=l("FSDataTable");return $(),q(C,w({loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,items:e.roleOrganisations,itemTo:e.$props.itemTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[m(p(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(S,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[m(p(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[m(p(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,c)=>({name:c,fn:t(_=>[D(e.$slots,c,I(N(_)))])}))]),1040,["loading","showSelect","tableCode","items","itemTo","modelValue"])}const V=A(T,[["render",z]]);T.__docgenInfo={displayName:"FSBaseRoleOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationsFilters",type:{name:"RoleOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue"]};const _o={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList",component:V,subcomponents:{FSDataTable:y},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisations1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationsList:V},setup(){return{args:e}},template:`
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
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const Lo=["Default"];export{n as Default,Lo as __namedExportsOrder,_o as default};
