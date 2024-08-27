import{d as P,c as p,y as v,z as F,A as D,B as n,m as U,E as z,G,D as W,L as m,M as x,P as H}from"./vue.esm-bundler-B8zP9crO.js";import{F as J}from"./FSAutocompleteField-Ckk4Z3qH.js";import{F as C}from"./FSButton-DOwRPA7_.js";import{F as K}from"./FSChip-C_3kXBVW.js";import{_ as A}from"./FSIcon-DZCYhBaF.js";import{u as Q}from"./useDashboardOrganisationTypes-BTd_3Qzo.js";import{u as R}from"./useDashboardOrganisations-D-ZQC1g-.js";import{u as X}from"./useDashboardShallows-DBMpGRUI.js";import{C as u}from"./useColors-AJGcQHF_.js";import{u as T}from"./useTranslations-Dy1kwog1.js";import{u as Y}from"./useAutocomplete-K7yc0TBd.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-DXkP6ARl.js";import"./FSSearchField-BJ0VhAlh.js";import"./FSTextField-D4e0l-Dp.js";import"./FSBaseField-BirSoEzM.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./theme-DtZVHDBt.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./VIcon-FsSVL6vQ.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./VProgressCircular-DxDQ8azE.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./FSDialogMenu-DDSjHlKl.js";import"./FSCard-DS7Ofz0M.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-BzAT5HFF.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-C0IvZ0dM.js";import"./FSWrapGroup-BtLWKn4p.js";import"./FSCheckbox-C5Shh_eW.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CzH7IW0v.js";import"./VImg-DbvVxLaQ.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-DCbGHBzU.js";import"./VList-D6tbl9Ec.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-YnmM8BsR.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";import"./FSClickable-BCaYx5AP.js";import"./dashboardTranslation-YYcr6rlG.js";import"./useAppLanguageCode-DDLio0r9.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./base-TJZSgE4h.js";import"./useAppOrganisationId-wxL44o-M.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-Bs2ItKgK.js";import"./pathCrumb-Db-cq5HI.js";import"./index-_Z9wfsFC.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:g}=T(),ae=e=>{switch(e){case o.None:return g("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return g("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return g("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return u.Error;case o.Organisation:case o.Shallow:return u.Primary;case o.OrganisationType:return u.Warning}},q=P({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSButton:C,FSChip:K,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:o.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:l}){const{getMany:c,fetching:h,entities:b}=Q(),{getMany:y,fetching:i,entities:d}=R(),{getMany:t,fetching:f,entities:_}=X(),{$tr:k}=T(),S=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Organisation}))).concat(_.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Shallow})))),$=p(()=>E.value&&(h.value||i.value||f.value)),B=p(()=>e.multiple&&e.modelValue?k("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),M=a=>{Array.isArray(a)?(l("update:modelValue",a.map(r=>r.id)),l("update:type",a.map(r=>r.type))):(l("update:modelValue",a==null?void 0:a.id),l("update:type",a==null?void 0:a.type))},j=a=>{const r=[];return e.ignoreDashboardOrganisationTypes||r.push(c({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(r.push(y({...e.dashboardOrganisationFilters,search:a??void 0})),r.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(r)},{toggleSet:I,init:E,onUpdate:L}=Y(S,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],l,j,M);return{placeholder:B,dashboards:S,toggleSet:I,loading:$,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:L}}});function oe(e,l,c,h,b,y){const i=v("FSChip"),d=v("FSAutocompleteField");return F(),D(d,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:t})=>[t.icon?(F(),D(A,{key:0},{default:n(()=>[z(G(t.icon),1)]),_:2},1024)):W("",!0)]),"item-append":n(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(t=>[m(C,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:f=>t.toggle(t.item)},x({_:2},[t.item.type?{name:"append",fn:n(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const N=Z(q,[["render",oe]]);q.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Aa={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:l})=>({components:{FSAutocompleteDashboard:N,FSCol:ee},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})};var O,w,V;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
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
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const Ta=["Variations"];export{s as Variations,Ta as __namedExportsOrder,Aa as default};
