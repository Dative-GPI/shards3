import{f as G,g as _,D as A,E as p,F as d,G as r,A as K,K as u,L as c,I as g,P as i,R as W,S as X,X as H}from"./vue.esm-bundler-6f923154.js";import{F as J}from"./FSAutocompleteField-1f0e4128.js";import{F as $}from"./FSCheckbox-4fa3808a.js";import{F as I}from"./FSButton-ff673895.js";import{F as Q}from"./FSChip-3525f285.js";import{_ as F}from"./FSIcon-93774118.js";import{_ as w}from"./FSSpan-7bb94541.js";import{_ as O}from"./FSRow-64caadb9.js";import{u as Y}from"./useDashboardOrganisationTypes-6f823ca5.js";import{u as Z}from"./useDashboardOrganisations-37bfe7a9.js";import{u as x}from"./useDashboardShallows-e10ef54c.js";import{C as y}from"./useColors-9144d90e.js";import{u as ee}from"./useTranslations-59cd146d.js";import{u as ae}from"./useAutocomplete-bac56a24.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-b637e5b8.js";import{_ as re}from"./FSCol-5ed907ac.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./theme-a8226b2e.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./filter-e9cedeb6.js";import"./VMenu-31bd6e5f.js";import"./FSClickable-e71ee20f.js";import"./dashboardTranslation-1af96bca.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./pathCrumb-3dbc85d5.js";import"./index-a0e5e2a3.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";var t=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(t||{});const{$tr:S}=ee(),le=e=>{switch(e){case t.None:return S("ui.dashboard-type.none","None");case t.Organisation:case t.Shallow:return S("ui.dashboard-type.organisation","Custom");case t.OrganisationType:return S("ui.dashboard-type.organisation-type","Shared")}},ne=e=>{switch(e){case t.None:return y.Error;case t.Organisation:case t.Shallow:return y.Primary;case t.OrganisationType:return y.Warning}},L=G({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSCheckbox:$,FSButton:I,FSChip:Q,FSIcon:F,FSSpan:w,FSRow:O},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:t.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:n}){const{getMany:v,fetching:C,entities:V}=Y(),{getMany:D,fetching:s,entities:f}=Z(),{getMany:o,fetching:l,entities:m}=x(),T=_(()=>V.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.OrganisationType})).concat(f.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Organisation}))).concat(m.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Shallow})))),P=_(()=>R.value&&(C.value||s.value||l.value)),j=a=>{Array.isArray(a)?(n("update:modelValue",a.map(h=>h.id)),n("update:type",a.map(h=>h.type))):(n("update:modelValue",a==null?void 0:a.id),n("update:type",a==null?void 0:a.type))},B=a=>Promise.all([v({...e.dashboardOrganisationTypeFilters,search:a??void 0}),D({...e.dashboardOrganisationFilters,search:a??void 0}),o({...e.dashboardShallowFilters,search:a??void 0})]),{toggleSet:U,search:E,init:R,onUpdate:z}=ae(T,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],n,B,j);return{toggleSet:U,loading:P,search:E,dashboards:T,dashboardTypeColor:ne,dashboardTypeLabel:le,onUpdate:z}}});function ie(e,n,v,C,V,D){const s=A("FSChip"),f=A("FSAutocompleteField");return p(),d(f,K({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:o})=>[e.$props.modelValue?(p(),d(O,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.icon?(p(),d(F,{key:0},{default:r(()=>[u(c(o.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(o.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(o.raw.type),label:e.dashboardTypeLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):g("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[i(te,W(X({...o,title:""})),{default:r(()=>[i(O,{align:"center-left",wrap:!1},{default:r(()=>{var m;return[e.$props.multiple?(p(),d($,{key:0,modelValue:(m=e.$props.modelValue)==null?void 0:m.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):g("",!0),l.raw.icon?(p(),d(F,{key:1},{default:r(()=>[u(c(l.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(l.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(l.raw.type),label:e.dashboardTypeLabel(l.raw.type),editable:!1},null,8,["color","label"])]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[i(I,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:H(o.getClass(o.item)),label:o.item.label,onClick:l=>o.toggle(o.item)},{append:r(()=>[i(s,{color:e.dashboardTypeColor(o.item.type),label:e.dashboardTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=oe(L,[["render",ie]]);L.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ma={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:n})=>({components:{FSAutocompleteDashboard:M,FSCol:re},props:Object.keys(n),setup(){return{...e}},template:`
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
