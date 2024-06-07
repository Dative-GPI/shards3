import{f as G,g as _,D as A,E as p,F as d,G as r,A as K,K as u,L as c,I as g,P as i,R as W,S as X,X as H}from"./vue.esm-bundler-f632b118.js";import{F as J}from"./FSAutocompleteField-ff78314e.js";import{F as $}from"./FSCheckbox-5ebd306d.js";import{F as I}from"./FSButton-1e8cfafa.js";import{F as Q}from"./FSChip-b2b5f621.js";import{_ as F}from"./FSIcon-110a991e.js";import{_ as w}from"./FSSpan-4ac1bb71.js";import{_ as O}from"./FSRow-76f4ad1e.js";import{u as Y}from"./useDashboardOrganisationTypes-14cf1440.js";import{u as Z}from"./useDashboardOrganisations-892282eb.js";import{u as x}from"./useDashboardShallows-492778a4.js";import{C as y}from"./useColors-c1b539be.js";import{u as ee}from"./useTranslations-f6aba3ae.js";import{u as ae}from"./useAutocomplete-a7e2bf25.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-00399f8e.js";import{_ as re}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./theme-a477330d.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./FSClickable-af644c0d.js";import"./widgetInfos-913cb8f0.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./pathCrumb-3dbc85d5.js";import"./index-a0e5e2a3.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";var t=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(t||{});const{$tr:S}=ee(),le=e=>{switch(e){case t.None:return S("ui.dashboard-type.none","None");case t.Organisation:case t.Shallow:return S("ui.dashboard-type.organisation","Custom");case t.OrganisationType:return S("ui.dashboard-type.organisation-type","Shared")}},ne=e=>{switch(e){case t.None:return y.Error;case t.Organisation:case t.Shallow:return y.Primary;case t.OrganisationType:return y.Warning}},L=G({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSCheckbox:$,FSButton:I,FSChip:Q,FSIcon:F,FSSpan:w,FSRow:O},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:t.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:n}){const{getMany:v,fetching:C,entities:V}=Y(),{getMany:D,fetching:s,entities:f}=Z(),{getMany:o,fetching:l,entities:m}=x(),T=_(()=>V.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.OrganisationType})).concat(f.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Organisation}))).concat(m.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Shallow})))),P=_(()=>R.value&&(C.value||s.value||l.value)),j=a=>{Array.isArray(a)?(n("update:modelValue",a.map(h=>h.id)),n("update:type",a.map(h=>h.type))):(n("update:modelValue",a==null?void 0:a.id),n("update:type",a==null?void 0:a.type))},B=a=>Promise.all([v({...e.dashboardOrganisationTypeFilters,search:a??void 0}),D({...e.dashboardOrganisationFilters,search:a??void 0}),o({...e.dashboardShallowFilters,search:a??void 0})]),{toggleSet:U,search:E,init:R,onUpdate:z}=ae(T,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],n,B,j);return{toggleSet:U,loading:P,search:E,dashboards:T,dashboardTypeColor:ne,dashboardTypeLabel:le,onUpdate:z}}});function ie(e,n,v,C,V,D){const s=A("FSChip"),f=A("FSAutocompleteField");return p(),d(f,K({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:o})=>[e.$props.modelValue?(p(),d(O,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.icon?(p(),d(F,{key:0},{default:r(()=>[u(c(o.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(o.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(o.raw.type),label:e.dashboardTypeLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):g("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[i(te,W(X({...o,title:""})),{default:r(()=>[i(O,{align:"center-left",wrap:!1},{default:r(()=>{var m;return[e.$props.multiple?(p(),d($,{key:0,modelValue:(m=e.$props.modelValue)==null?void 0:m.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):g("",!0),l.raw.icon?(p(),d(F,{key:1},{default:r(()=>[u(c(l.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(l.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(l.raw.type),label:e.dashboardTypeLabel(l.raw.type),editable:!1},null,8,["color","label"])]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[i(I,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:H(o.getClass(o.item)),label:o.item.label,onClick:l=>o.toggle(o.item)},{append:r(()=>[i(s,{color:e.dashboardTypeColor(o.item.type),label:e.dashboardTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=oe(L,[["render",ie]]);L.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ma={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:n})=>({components:{FSAutocompleteDashboard:M,FSCol:re},props:Object.keys(n),setup(){return{...e}},template:`
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
