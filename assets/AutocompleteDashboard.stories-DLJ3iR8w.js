import{d as P,c as p,y as v,z as F,A as D,B as n,m as U,E as z,G,D as W,L as m,M as x,P as H}from"./vue.esm-bundler-BSwA4uJo.js";import{F as J}from"./FSAutocompleteField-CzLKCgFf.js";import{F as C}from"./FSButton-BsHdwUXb.js";import{F as K}from"./FSChip-QWvQ-7YA.js";import{_ as A}from"./FSIcon-BnX9YboA.js";import{u as Q}from"./useDashboardOrganisationTypes-DUd2s6K3.js";import{u as R}from"./useDashboardOrganisations-CXJfS-66.js";import{u as X}from"./useDashboardShallows-JDM217mu.js";import{C as u}from"./useColors-CVvq99EA.js";import{u as T}from"./useTranslations-9ULn9k53.js";import{u as Y}from"./useAutocomplete-CsDNIjqd.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-B2fYQH2g.js";import"./FSSearchField-CPQWVqWj.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./VSpacer-Bggt-xuP.js";import"./color-D9V7QeIP.js";import"./theme-CJjFLd5E.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./transition-_APBsTwD.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./locale-CpxwvVE1.js";import"./VIcon-5UD9vI9m.js";import"./tag-VYeYJ1FC.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./VProgressCircular-Dac4kH3U.js";import"./anchor-CkzTvcVP.js";import"./rounded-CO2AQG9_.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BhqZCjBr.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./router-Cl1v_ijq.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./group-CrHjrh7w.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./filter-BvtvTs1b.js";import"./FSClickable-DxIbWXqH.js";import"./dashboardTranslation-qmbFiQWV.js";import"./useAppLanguageCode-DTo4I1JE.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./base-COZVLn_8.js";import"./useAppOrganisationId-DRTS5QPJ.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D4M238ur.js";import"./pathCrumb-Db-cq5HI.js";import"./index-3zl-tJp_.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:g}=T(),ae=e=>{switch(e){case o.None:return g("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return g("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return g("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return u.Error;case o.Organisation:case o.Shallow:return u.Primary;case o.OrganisationType:return u.Warning}},q=P({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSButton:C,FSChip:K,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:o.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:l}){const{getMany:c,fetching:h,entities:b}=Q(),{getMany:y,fetching:i,entities:d}=R(),{getMany:t,fetching:f,entities:_}=X(),{$tr:k}=T(),S=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Organisation}))).concat(_.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Shallow})))),$=p(()=>E.value&&(h.value||i.value||f.value)),B=p(()=>e.multiple&&e.modelValue?k("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),M=a=>{Array.isArray(a)?(l("update:modelValue",a.map(r=>r.id)),l("update:type",a.map(r=>r.type))):(l("update:modelValue",a==null?void 0:a.id),l("update:type",a==null?void 0:a.type))},j=a=>{const r=[];return e.ignoreDashboardOrganisationTypes||r.push(c({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(r.push(y({...e.dashboardOrganisationFilters,search:a??void 0})),r.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(r)},{toggleSet:I,init:E,onUpdate:L}=Y(S,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],l,j,M);return{placeholder:B,dashboards:S,toggleSet:I,loading:$,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:L}}});function oe(e,l,c,h,b,y){const i=v("FSChip"),d=v("FSAutocompleteField");return F(),D(d,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:t})=>[t.icon?(F(),D(A,{key:0},{default:n(()=>[z(G(t.icon),1)]),_:2},1024)):W("",!0)]),"item-append":n(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(t=>[m(C,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:f=>t.toggle(t.item)},x({_:2},[t.item.type?{name:"append",fn:n(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const N=Z(q,[["render",oe]]);q.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const qa={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:l})=>({components:{FSAutocompleteDashboard:N,FSCol:ee},props:Object.keys(l),setup(){return{...e}},template:`
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
