import{d as z,c as A,y as T,z as d,A as p,B as l,m as R,E as m,G as u,D as y,I as n,S as G}from"./vue.esm-bundler-DC82FEWN.js";import{F as W}from"./FSAutocompleteField-iSfPzHk1.js";import{F as k}from"./FSButton-DQTNQ7w6.js";import{F as H}from"./FSChip-A49gs7Y6.js";import{_ as S}from"./FSIcon-2B0NN_at.js";import{_ as F}from"./FSSpan-CwfDYIua.js";import{_ as v}from"./FSRow-DoCXWKDP.js";import{u as J}from"./useDashboardOrganisationTypes-ManOq75q.js";import{u as K}from"./useDashboardOrganisations-kGqGUzzT.js";import{u as Q}from"./useDashboardShallows-DdGEDK7p.js";import{C as h}from"./useColors-ATxZ3nb1.js";import{u as X}from"./useTranslations-DV-taHAL.js";import{u as Y}from"./useAutocomplete-BV7te6qQ.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DejeNnVl.js";import"./FSTextField-CIgddAfu.js";import"./FSBaseField-3fq9JEyD.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./theme-DMal9AfS.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./VIcon-C6jgSf5f.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./VProgressCircular-BvwZAexL.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./FSDialogMenu-DmBV7Mf4.js";import"./FSCard-DJrzS8t_.js";import"./css-DYOPUjjE.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-CgnmC9k2.js";import"./FSRadio-Czfn0-vM.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-D76-MhYq.js";import"./FSSlideGroup-Buay-X2i.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-BG-AaJX-.js";import"./FSCheckbox-C9nNPPnZ.js";import"./FSFadeOut-7Ilw0XG1.js";import"./FSLoader-B1rWpyEr.js";import"./elevation-xgrzvMGW.js";import"./VSelect-D7F3d6A4.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./FSClickable-Bk5I2JN4.js";import"./dashboardTranslation-CGe8lPc2.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./pathCrumb-Db-cq5HI.js";import"./index-_Z9wfsFC.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:f}=X(),ee=e=>{switch(e){case o.None:return f("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return f("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return f("ui.dashboard-type.organisation-type","Shared")}},ae=e=>{switch(e){case o.None:return h.Error;case o.Organisation:case o.Shallow:return h.Primary;case o.OrganisationType:return h.Warning}},$=z({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:W,FSButton:k,FSChip:H,FSIcon:S,FSSpan:F,FSRow:v},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:o.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:r}){const{getMany:w,fetching:D,entities:O}=J(),{getMany:C,fetching:i,entities:g}=K(),{getMany:a,fetching:s,entities:I}=Q(),V=A(()=>O.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.OrganisationType})).concat(g.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Organisation}))).concat(I.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Shallow})))),M=A(()=>L.value&&(D.value||i.value||s.value)),j=t=>{Array.isArray(t)?(r("update:modelValue",t.map(b=>b.id)),r("update:type",t.map(b=>b.type))):(r("update:modelValue",t==null?void 0:t.id),r("update:type",t==null?void 0:t.type))},U=t=>Promise.all([w({...e.dashboardOrganisationTypeFilters,search:t??void 0}),C({...e.dashboardOrganisationFilters,search:t??void 0}),a({...e.dashboardShallowFilters,search:t??void 0})]),{toggleSet:E,init:L,onUpdate:P}=Y(V,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],r,U,j);return{dashboards:V,toggleSet:E,loading:M,dashboardTypeColor:ae,dashboardTypeLabel:ee,onUpdate:P}}});function te(e,r,w,D,O,C){const i=T("FSChip"),g=T("FSAutocompleteField");return d(),p(g,R({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:a})=>[e.$props.modelValue?(d(),p(v,{key:0,align:"center-center",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,null,{default:l(()=>[m(u(a.raw.label),1)]),_:2},1024),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"item-label":l(({item:a,font:s})=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[a.raw.icon?(d(),p(S,{key:0},{default:l(()=>[m(u(a.raw.icon),1)]),_:2},1024)):y("",!0),n(F,{font:s},{default:l(()=>[m(u(a.raw.label),1)]),_:2},1032,["font"]),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":l(a=>[n(k,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:G(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},{append:l(()=>[n(i,{color:e.dashboardTypeColor(a.item.type),label:e.dashboardTypeLabel(a.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const B=Z($,[["render",te]]);$.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const _a={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,type1:0,value2:"11",type2:2,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDashboard:B,FSCol:x},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const qa=["Variations"];export{c as Variations,qa as __namedExportsOrder,_a as default};
