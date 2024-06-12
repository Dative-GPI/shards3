import{f as G,g as _,D as A,E as p,F as d,G as r,A as K,K as u,L as c,I as g,P as i,R as W,S as X,X as H}from"./vue.esm-bundler-f632b118.js";import{F as J}from"./FSAutocompleteField-643ca4a2.js";import{F as $}from"./FSCheckbox-bde4293d.js";import{F as I}from"./FSButton-08a91e21.js";import{F as Q}from"./FSChip-ff59a050.js";import{_ as F}from"./FSIcon-8032a9d1.js";import{_ as w}from"./FSSpan-4ac1bb71.js";import{_ as O}from"./FSRow-76f4ad1e.js";import{u as Y}from"./useDashboardOrganisationTypes-62e02b0a.js";import{u as Z}from"./useDashboardOrganisations-f90bb599.js";import{u as x}from"./useDashboardShallows-92017797.js";import{C as y}from"./useColors-5866e399.js";import{u as ee}from"./useTranslations-f6aba3ae.js";import{u as ae}from"./useAutocomplete-5bae40b5.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-3062dd8b.js";import{_ as re}from"./FSCol-606e8271.js";import"./FSSearchField-b1f9a31f.js";import"./FSTextField-58ff63bb.js";import"./VField-d1df4052.js";import"./useSlots-de625f75.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./theme-7fcd5c30.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./FSDialogMenu-29d13699.js";import"./FSCard-491552ba.js";import"./css-185b4786.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./filter-dd5b3c74.js";import"./VMenu-d9a134b2.js";import"./FSClickable-4011125f.js";import"./widgetInfos-c25eff74.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./pathCrumb-3dbc85d5.js";import"./index-a0e5e2a3.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";var t=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(t||{});const{$tr:S}=ee(),le=e=>{switch(e){case t.None:return S("ui.dashboard-type.none","None");case t.Organisation:case t.Shallow:return S("ui.dashboard-type.organisation","Custom");case t.OrganisationType:return S("ui.dashboard-type.organisation-type","Shared")}},ne=e=>{switch(e){case t.None:return y.Error;case t.Organisation:case t.Shallow:return y.Primary;case t.OrganisationType:return y.Warning}},L=G({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSCheckbox:$,FSButton:I,FSChip:Q,FSIcon:F,FSSpan:w,FSRow:O},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:t.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:n}){const{getMany:v,fetching:C,entities:V}=Y(),{getMany:D,fetching:s,entities:f}=Z(),{getMany:o,fetching:l,entities:m}=x(),T=_(()=>V.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.OrganisationType})).concat(f.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Organisation}))).concat(m.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Shallow})))),P=_(()=>R.value&&(C.value||s.value||l.value)),j=a=>{Array.isArray(a)?(n("update:modelValue",a.map(h=>h.id)),n("update:type",a.map(h=>h.type))):(n("update:modelValue",a==null?void 0:a.id),n("update:type",a==null?void 0:a.type))},B=a=>Promise.all([v({...e.dashboardOrganisationTypeFilters,search:a??void 0}),D({...e.dashboardOrganisationFilters,search:a??void 0}),o({...e.dashboardShallowFilters,search:a??void 0})]),{toggleSet:U,search:E,init:R,onUpdate:z}=ae(T,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],n,B,j);return{toggleSet:U,loading:P,search:E,dashboards:T,dashboardTypeColor:ne,dashboardTypeLabel:le,onUpdate:z}}});function ie(e,n,v,C,V,D){const s=A("FSChip"),f=A("FSAutocompleteField");return p(),d(f,K({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:o})=>[e.$props.modelValue?(p(),d(O,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.icon?(p(),d(F,{key:0},{default:r(()=>[u(c(o.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(o.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(o.raw.type),label:e.dashboardTypeLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):g("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[i(te,W(X({...o,title:""})),{default:r(()=>[i(O,{align:"center-left",wrap:!1},{default:r(()=>{var m;return[e.$props.multiple?(p(),d($,{key:0,modelValue:(m=e.$props.modelValue)==null?void 0:m.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):g("",!0),l.raw.icon?(p(),d(F,{key:1},{default:r(()=>[u(c(l.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(l.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(l.raw.type),label:e.dashboardTypeLabel(l.raw.type),editable:!1},null,8,["color","label"])]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[i(I,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:H(o.getClass(o.item)),label:o.item.label,onClick:l=>o.toggle(o.item)},{append:r(()=>[i(s,{color:e.dashboardTypeColor(o.item.type),label:e.dashboardTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=oe(L,[["render",ie]]);L.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ma={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:n})=>({components:{FSAutocompleteDashboard:M,FSCol:re},props:Object.keys(n),setup(){return{...e}},template:`
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
    </FSCol>`})};var k,q,N;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2
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
    </FSCol>\`
  })
}`,...(N=(q=b.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const Pa=["Variations"];export{b as Variations,Pa as __namedExportsOrder,Ma as default};
