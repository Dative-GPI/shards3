import{d as P,c as p,y as v,z as F,A as D,B as n,m as U,E as z,G,D as W,L as m,M as x,P as H}from"./vue.esm-bundler-Vj2X7okO.js";import{F as J}from"./FSAutocompleteField-Dcx_zOza.js";import{F as C}from"./FSButton-Dxr_k2yH.js";import{F as K}from"./FSChip-S01Wkgw-.js";import{_ as A}from"./FSIcon-CNrZYw3j.js";import{u as Q}from"./useDashboardOrganisationTypes-BQhrME5D.js";import{u as R}from"./useDashboardOrganisations-BW570YHZ.js";import{u as X}from"./useDashboardShallows-kbS-SNBD.js";import{C as u}from"./useColors-ClGgFu9Q.js";import{u as T}from"./useTranslations-DyPMaPr_.js";import{u as Y}from"./useAutocomplete-BIo_snCx.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-Bk577joi.js";import"./FSSearchField-ByY1EROu.js";import"./FSTextField-nbXKtPgl.js";import"./FSBaseField-DIHRCDOI.js";import"./FSSpan-C4TWI1ol.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./theme-DqOMA9k1.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-DJMBxSqq.js";import"./FSCard-IkM7vPXg.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DwZDosIV.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-D0rXU8K8.js";import"./FSWrapGroup-tsnhcXEt.js";import"./FSCheckbox-oizSWMk6.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-tlatQCTU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DBjzeRFm.js";import"./VList-CE84Ungi.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DDOJpQXv.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-B6i4bUTy.js";import"./dashboardTranslation-Dj0q9RwI.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./pathCrumb-Db-cq5HI.js";import"./index-DfSX31J9.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:g}=T(),ae=e=>{switch(e){case o.None:return g("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return g("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return g("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return u.Error;case o.Organisation:case o.Shallow:return u.Primary;case o.OrganisationType:return u.Warning}},q=P({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSButton:C,FSChip:K,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:o.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:l}){const{getMany:c,fetching:h,entities:b}=Q(),{getMany:y,fetching:i,entities:d}=R(),{getMany:t,fetching:f,entities:_}=X(),{$tr:k}=T(),S=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Organisation}))).concat(_.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Shallow})))),$=p(()=>E.value&&(h.value||i.value||f.value)),B=p(()=>e.multiple&&e.modelValue?k("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),M=a=>{Array.isArray(a)?(l("update:modelValue",a.map(r=>r.id)),l("update:type",a.map(r=>r.type))):(l("update:modelValue",a==null?void 0:a.id),l("update:type",a==null?void 0:a.type))},j=a=>{const r=[];return e.ignoreDashboardOrganisationTypes||r.push(c({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(r.push(y({...e.dashboardOrganisationFilters,search:a??void 0})),r.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(r)},{toggleSet:I,init:E,onUpdate:L}=Y(S,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],l,j,M);return{placeholder:B,dashboards:S,toggleSet:I,loading:$,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:L}}});function oe(e,l,c,h,b,y){const i=v("FSChip"),d=v("FSAutocompleteField");return F(),D(d,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:t})=>[t.icon?(F(),D(A,{key:0},{default:n(()=>[z(G(t.icon),1)]),_:2},1024)):W("",!0)]),"item-append":n(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(t=>[m(C,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:f=>t.toggle(t.item)},x({_:2},[t.item.type?{name:"append",fn:n(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const N=Z(q,[["render",oe]]);q.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const qa={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:l})=>({components:{FSAutocompleteDashboard:N,FSCol:ee},props:Object.keys(l),setup(){return{...e}},template:`
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
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const Na=["Variations"];export{s as Variations,Na as __namedExportsOrder,qa as default};
