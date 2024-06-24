import{d as z,c as A,y as T,z as d,A as p,B as l,m as R,E as m,G as u,D as y,K as n,S as G}from"./vue.esm-bundler-BLBBrD1D.js";import{F as K}from"./FSAutocompleteField-UqibJclk.js";import{F as k}from"./FSButton-Ctk-czeT.js";import{F as W}from"./FSChip-DA7j5rr-.js";import{_ as S}from"./FSIcon-CgTCRlvx.js";import{_ as F}from"./FSSpan-DNHXfhpi.js";import{_ as v}from"./FSRow-BZVvIgLd.js";import{u as H}from"./useDashboardOrganisationTypes-Dcjquws8.js";import{u as J}from"./useDashboardOrganisations-ucyqAD-n.js";import{u as Q}from"./useDashboardShallows-r8AXCo-N.js";import{C as h}from"./useColors-CxkvBPqy.js";import{u as X}from"./useTranslations-CT7kkIpn.js";import{u as Y}from"./useAutocomplete-CXUsAi9P.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-OnQTHx6W.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./useRender-CTGr_J4i.js";import"./theme-BarOeKl-.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./FSCard-fA5aX9kp.js";import"./css-DU1X_fj1.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSCheckbox-DJm00ahm.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./FSClickable-BcsUSOO8.js";import"./dashboardTranslation-BBvk7tfF.js";import"./base-B_HXG24o.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DeG9aq0N.js";import"./pathCrumb-D0_87whe.js";import"./index-3zl-tJp_.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:f}=X(),ee=e=>{switch(e){case o.None:return f("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return f("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return f("ui.dashboard-type.organisation-type","Shared")}},ae=e=>{switch(e){case o.None:return h.Error;case o.Organisation:case o.Shallow:return h.Primary;case o.OrganisationType:return h.Warning}},$=z({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:K,FSButton:k,FSChip:W,FSIcon:S,FSSpan:F,FSRow:v},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:o.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:r}){const{getMany:w,fetching:D,entities:O}=H(),{getMany:C,fetching:i,entities:g}=J(),{getMany:a,fetching:s,entities:M}=Q(),V=A(()=>O.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.OrganisationType})).concat(g.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Organisation}))).concat(M.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Shallow})))),j=A(()=>L.value&&(D.value||i.value||s.value)),I=t=>{Array.isArray(t)?(r("update:modelValue",t.map(b=>b.id)),r("update:type",t.map(b=>b.type))):(r("update:modelValue",t==null?void 0:t.id),r("update:type",t==null?void 0:t.type))},U=t=>Promise.all([w({...e.dashboardOrganisationTypeFilters,search:t??void 0}),C({...e.dashboardOrganisationFilters,search:t??void 0}),a({...e.dashboardShallowFilters,search:t??void 0})]),{toggleSet:E,init:L,onUpdate:P}=Y(V,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],r,U,I);return{dashboards:V,toggleSet:E,loading:j,dashboardTypeColor:ae,dashboardTypeLabel:ee,onUpdate:P}}});function te(e,r,w,D,O,C){const i=T("FSChip"),g=T("FSAutocompleteField");return d(),p(g,R({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:a})=>[e.$props.modelValue?(d(),p(v,{key:0,align:"center-center",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,null,{default:l(()=>[m(u(a.raw.label),1)]),_:2},1024),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"item-label":l(({item:a,font:s})=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,{font:s},{default:l(()=>[m(u(a.raw.label),1)]),_:2},1032,["font"]),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":l(a=>[n(k,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:G(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},{append:l(()=>[n(i,{color:e.dashboardTypeColor(a.item.type),label:e.dashboardTypeLabel(a.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const B=Z($,[["render",te]]);$.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Na={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,type1:0,value2:"11",type2:2,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDashboard:B,FSCol:x},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var _,q,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDashboard,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const ka=["Variations"];export{c as Variations,ka as __namedExportsOrder,Na as default};
