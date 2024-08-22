import{d as z,c as A,y as T,z as d,A as p,B as l,m as R,E as m,G as u,D as y,L as n,M as G,P as W}from"./vue.esm-bundler-BATn8cDU.js";import{F as H}from"./FSAutocompleteField-kUwtQTfK.js";import{F as N}from"./FSButton-D0V1nthY.js";import{F as J}from"./FSChip-CYf0knBJ.js";import{_ as S}from"./FSIcon-Kk713u84.js";import{_ as F}from"./FSSpan-C8YxV3Vj.js";import{_ as v}from"./FSRow-Gvoj2sTW.js";import{u as K}from"./useDashboardOrganisationTypes-DL9Eyjuq.js";import{u as Q}from"./useDashboardOrganisations-CTiwz0jp.js";import{u as X}from"./useDashboardShallows-C5YmgI_h.js";import{C as h}from"./useColors-D4RQatlL.js";import{u as Y}from"./useTranslations-C_i4rqaX.js";import{u as Z}from"./useAutocomplete-BnddAth7.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-D9tDKebi.js";import"./FSSearchField-T0sLpl1S.js";import"./FSTextField-KD4CRsHh.js";import"./FSBaseField-axT9dPIw.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./FSDialogMenu-aCLCOYe1.js";import"./FSCard-CAgq3XuJ.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-Dx8IK8Wf.js";import"./FSRadio-CXuTMsbF.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-Cm_kcpK6.js";import"./FSSlideGroup-BrYapIVT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-CZbFj3Ra.js";import"./FSCheckbox-Di-LctwI.js";import"./FSFadeOut-8zEGCDGr.js";import"./FSLoader-BBhuF9xD.js";import"./elevation-oWdkHiXv.js";import"./VSelect-BU_B2xFx.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-DYDREYld.js";import"./dashboardTranslation-Cyd42uZC.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./base-DxU3iujb.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-CvKYYcO3.js";import"./pathCrumb-Db-cq5HI.js";import"./index-3zl-tJp_.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:f}=Y(),ae=e=>{switch(e){case o.None:return f("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return f("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return f("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return h.Error;case o.Organisation:case o.Shallow:return h.Primary;case o.OrganisationType:return h.Warning}},$=z({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:H,FSButton:N,FSChip:J,FSIcon:S,FSSpan:F,FSRow:v},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:o.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:r}){const{getMany:w,fetching:D,entities:O}=K(),{getMany:C,fetching:i,entities:g}=Q(),{getMany:a,fetching:s,entities:B}=X(),V=A(()=>O.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.OrganisationType})).concat(g.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Organisation}))).concat(B.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Shallow})))),j=A(()=>P.value&&(D.value||i.value||s.value)),I=t=>{Array.isArray(t)?(r("update:modelValue",t.map(b=>b.id)),r("update:type",t.map(b=>b.type))):(r("update:modelValue",t==null?void 0:t.id),r("update:type",t==null?void 0:t.type))},L=t=>Promise.all([w({...e.dashboardOrganisationTypeFilters,search:t??void 0}),C({...e.dashboardOrganisationFilters,search:t??void 0}),a({...e.dashboardShallowFilters,search:t??void 0})]),{toggleSet:E,init:P,onUpdate:U}=Z(V,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],r,L,I);return{dashboards:V,toggleSet:E,loading:j,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:U}}});function oe(e,r,w,D,O,C){const i=T("FSChip"),g=T("FSAutocompleteField");return d(),p(g,R({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:a})=>[e.$props.modelValue?(d(),p(v,{key:0,align:"center-center",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,null,{default:l(()=>[m(u(a.raw.label),1)]),_:2},1024),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"item-label":l(({item:a,font:s})=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,{font:s},{default:l(()=>[m(u(a.raw.label),1)]),_:2},1032,["font"]),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":l(a=>[n(N,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:W(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},G({_:2},[a.item.type?{name:"append",fn:l(()=>[n(i,{color:e.dashboardTypeColor(a.item.type),label:e.dashboardTypeLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=x($,[["render",oe]]);$.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const qa={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,type1:0,value2:"11",type2:2,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDashboard:M,FSCol:ee},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var _,q,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(q=c.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};const ka=["Variations"];export{c as Variations,ka as __namedExportsOrder,qa as default};
