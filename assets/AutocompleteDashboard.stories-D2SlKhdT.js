import{d as z,c as A,y as T,z as d,A as p,B as l,m as R,E as m,G as u,D as y,I as n,S as G}from"./vue.esm-bundler-DC82FEWN.js";import{F as W}from"./FSAutocompleteField-BjVs_BJa.js";import{F as k}from"./FSButton-Dt6DpUVX.js";import{F as H}from"./FSChip-MLyYDCOE.js";import{_ as S}from"./FSIcon-BZTGzEA5.js";import{_ as F}from"./FSSpan-CwfDYIua.js";import{_ as v}from"./FSRow-BPJXOzs-.js";import{u as J}from"./useDashboardOrganisationTypes-BGTZBco-.js";import{u as K}from"./useDashboardOrganisations-QukQI2Y8.js";import{u as Q}from"./useDashboardShallows-DC2ZXHMN.js";import{C as h}from"./useColors-CXl0hRe0.js";import{u as X}from"./useTranslations-DV-taHAL.js";import{u as Y}from"./useAutocomplete-DblNVG4s.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-CkM6DP-d.js";import"./FSSearchField-Dm_DgX5J.js";import"./FSTextField-BHg2KNCG.js";import"./VField-C3DtoroY.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./theme-CDGAP9oX.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./FSDialogMenu-eZGMPoMT.js";import"./FSCard-CQ3lfryo.js";import"./css-DYOPUjjE.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-ekhc2J0d.js";import"./FSRadio-CscXF7IF.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-D4frsOr2.js";import"./FSSlideGroup-CgPOoi2Q.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-C6w0lG87.js";import"./FSCheckbox-M8Bs7S24.js";import"./FSFadeOut-DJfcYfqT.js";import"./FSLoader-D_G7mk7-.js";import"./elevation-BoGrGvdU.js";import"./VSelect-DqMGXfw3.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./FSClickable-D1l62sMQ.js";import"./dashboardTranslation-CcLHITut.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./pathCrumb-Db-cq5HI.js";import"./index-3zl-tJp_.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:f}=X(),ee=e=>{switch(e){case o.None:return f("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return f("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return f("ui.dashboard-type.organisation-type","Shared")}},ae=e=>{switch(e){case o.None:return h.Error;case o.Organisation:case o.Shallow:return h.Primary;case o.OrganisationType:return h.Warning}},$=z({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:W,FSButton:k,FSChip:H,FSIcon:S,FSSpan:F,FSRow:v},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:o.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:r}){const{getMany:w,fetching:D,entities:O}=J(),{getMany:C,fetching:i,entities:g}=K(),{getMany:a,fetching:s,entities:I}=Q(),V=A(()=>O.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.OrganisationType})).concat(g.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Organisation}))).concat(I.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Shallow})))),M=A(()=>L.value&&(D.value||i.value||s.value)),j=t=>{Array.isArray(t)?(r("update:modelValue",t.map(b=>b.id)),r("update:type",t.map(b=>b.type))):(r("update:modelValue",t==null?void 0:t.id),r("update:type",t==null?void 0:t.type))},U=t=>Promise.all([w({...e.dashboardOrganisationTypeFilters,search:t??void 0}),C({...e.dashboardOrganisationFilters,search:t??void 0}),a({...e.dashboardShallowFilters,search:t??void 0})]),{toggleSet:E,init:L,onUpdate:P}=Y(V,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],r,U,j);return{dashboards:V,toggleSet:E,loading:M,dashboardTypeColor:ae,dashboardTypeLabel:ee,onUpdate:P}}});function te(e,r,w,D,O,C){const i=T("FSChip"),g=T("FSAutocompleteField");return d(),p(g,R({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:a})=>[e.$props.modelValue?(d(),p(v,{key:0,align:"center-center",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,null,{default:l(()=>[m(u(a.raw.label),1)]),_:2},1024),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"item-label":l(({item:a,font:s})=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,{font:s},{default:l(()=>[m(u(a.raw.label),1)]),_:2},1032,["font"]),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":l(a=>[n(k,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:G(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},{append:l(()=>[n(i,{color:e.dashboardTypeColor(a.item.type),label:e.dashboardTypeLabel(a.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const B=Z($,[["render",te]]);$.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ta={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,type1:0,value2:"11",type2:2,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDashboard:B,FSCol:x},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const _a=["Variations"];export{c as Variations,_a as __namedExportsOrder,Ta as default};
