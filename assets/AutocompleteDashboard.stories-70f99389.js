import{f as G,g as _,D as A,E as p,F as d,G as r,A as K,K as u,L as c,I as g,Q as i,R as Q,S as W,Y}from"./vue.esm-bundler-1de4ab84.js";import{F as H}from"./FSAutocompleteField-612f5788.js";import{F as $}from"./FSCheckbox-7bc44d7a.js";import{F as I}from"./FSButton-6b0685b3.js";import{F as J}from"./FSChip-5509d5fb.js";import{_ as F}from"./FSIcon-08483052.js";import{_ as w}from"./FSSpan-c5b5f93b.js";import{_ as O}from"./FSRow-0f15051e.js";import{u as X}from"./useDashboardOrganisationTypes-c331a166.js";import{u as Z}from"./useDashboardOrganisations-04732bcc.js";import{u as x}from"./useDashboardShallows-92a3255e.js";import{C as y}from"./useColors-6201f155.js";import{u as ee}from"./useTranslations-df2010ef.js";import{u as ae}from"./useAutocomplete-541ae531.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-46cfbf6f.js";import{_ as re}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./theme-fee57059.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./FSClickable-00bc2ab2.js";import"./widgetInfos-913cb8f0.js";import"./base-d4d5271d.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./pathCrumb-3dbc85d5.js";import"./index-a0e5e2a3.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";var t=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(t||{});const{$tr:S}=ee(),le=e=>{switch(e){case t.None:return S("ui.dashboard-type.none","None");case t.Organisation:case t.Shallow:return S("ui.dashboard-type.organisation","Custom");case t.OrganisationType:return S("ui.dashboard-type.organisation-type","Shared")}},ne=e=>{switch(e){case t.None:return y.Error;case t.Organisation:case t.Shallow:return y.Primary;case t.OrganisationType:return y.Warning}},L=G({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:H,FSCheckbox:$,FSButton:I,FSChip:J,FSIcon:F,FSSpan:w,FSRow:O},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:t.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:n}){const{getMany:v,fetching:C,entities:V}=X(),{getMany:D,fetching:s,entities:f}=Z(),{getMany:o,fetching:l,entities:m}=x(),T=_(()=>V.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.OrganisationType})).concat(f.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Organisation}))).concat(m.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:t.Shallow})))),j=_(()=>R.value&&(C.value||s.value||l.value)),B=a=>{Array.isArray(a)?(n("update:modelValue",a.map(h=>h.id)),n("update:type",a.map(h=>h.type))):(n("update:modelValue",a==null?void 0:a.id),n("update:type",a==null?void 0:a.type))},P=a=>Promise.all([v({...e.dashboardOrganisationTypeFilters,search:a??void 0}),D({...e.dashboardOrganisationFilters,search:a??void 0}),o({...e.dashboardShallowFilters,search:a??void 0})]),{toggleSet:U,search:E,init:R,onUpdate:z}=ae(T,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],n,P,B);return{toggleSet:U,loading:j,search:E,dashboards:T,dashboardTypeColor:ne,dashboardTypeLabel:le,onUpdate:z}}});function ie(e,n,v,C,V,D){const s=A("FSChip"),f=A("FSAutocompleteField");return p(),d(f,K({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:o})=>[e.$props.modelValue?(p(),d(O,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.icon?(p(),d(F,{key:0},{default:r(()=>[u(c(o.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(o.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(o.raw.type),label:e.dashboardTypeLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):g("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[i(te,Q(W({...o,title:""})),{default:r(()=>[i(O,{align:"center-left",wrap:!1},{default:r(()=>{var m;return[e.$props.multiple?(p(),d($,{key:0,modelValue:(m=e.$props.modelValue)==null?void 0:m.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):g("",!0),l.raw.icon?(p(),d(F,{key:1},{default:r(()=>[u(c(l.raw.icon),1)]),_:2},1024)):g("",!0),i(w,null,{default:r(()=>[u(c(l.raw.label),1)]),_:2},1024),i(s,{color:e.dashboardTypeColor(l.raw.type),label:e.dashboardTypeLabel(l.raw.type),editable:!1},null,8,["color","label"])]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[i(I,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:Y(o.getClass(o.item)),label:o.item.label,onClick:l=>o.toggle(o.item)},{append:r(()=>[i(s,{color:e.dashboardTypeColor(o.item.type),label:e.dashboardTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=oe(L,[["render",ie]]);L.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ma={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:n})=>({components:{FSAutocompleteDashboard:M,FSCol:re},props:Object.keys(n),setup(){return{...e}},template:`
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
}`,...(N=(q=b.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const ja=["Variations"];export{b as Variations,ja as __namedExportsOrder,Ma as default};
