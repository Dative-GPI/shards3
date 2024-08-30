import{d as P,c as p,y as v,z as F,A as D,B as n,m as U,E as z,G,D as W,L as m,M as x,P as H}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as J}from"./FSAutocompleteField-Bl3plbXe.js";import{F as C}from"./FSButton-DS5pJwRE.js";import{F as K}from"./FSChip-eZ2gUZl5.js";import{_ as A}from"./FSIcon-CEcP550-.js";import{u as Q}from"./useDashboardOrganisationTypes-BgE-R3N5.js";import{u as R}from"./useDashboardOrganisations-BmH3tPlf.js";import{u as X}from"./useDashboardShallows-CILdDa5u.js";import{C as u}from"./useColors-nFEwMWzN.js";import{u as T}from"./useTranslations-DflIUxSJ.js";import{u as Y}from"./useAutocomplete-DzUOI0K-.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-BmcQ_82r.js";import"./FSTextField-CMLUeGZH.js";import"./FSBaseField-D2jPE59R.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./theme-C1riLSun.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./tag-CMGfbRyB.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-BUF-R31v.js";import"./FSCard-BdS37dLD.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DDUHPpf0.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-BtGm8wWU.js";import"./FSWrapGroup-B-W0vR2W.js";import"./FSCheckbox-jcMp7y2y.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-DssjZXn_.js";import"./VImg-DlvaTCkZ.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-Db7coB6b.js";import"./VList-BjkR6psD.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-B8V0bATO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSClickable-Dn475adk.js";import"./dashboardTranslation-TteDG7qe.js";import"./useAppLanguageCode-DB-OA7iE.js";import"./lodash-BiW_TGGX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-DYaDCbjS.js";import"./pathCrumb-Db-cq5HI.js";import"./index-_Z9wfsFC.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:g}=T(),ae=e=>{switch(e){case o.None:return g("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return g("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return g("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return u.Error;case o.Organisation:case o.Shallow:return u.Primary;case o.OrganisationType:return u.Warning}},q=P({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:J,FSButton:C,FSChip:K,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:o.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:l}){const{getMany:c,fetching:h,entities:b}=Q(),{getMany:y,fetching:i,entities:d}=R(),{getMany:t,fetching:f,entities:_}=X(),{$tr:k}=T(),S=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Organisation}))).concat(_.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Shallow})))),$=p(()=>E.value&&(h.value||i.value||f.value)),B=p(()=>e.multiple&&e.modelValue?k("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),M=a=>{Array.isArray(a)?(l("update:modelValue",a.map(r=>r.id)),l("update:type",a.map(r=>r.type))):(l("update:modelValue",a==null?void 0:a.id),l("update:type",a==null?void 0:a.type))},j=a=>{const r=[];return e.ignoreDashboardOrganisationTypes||r.push(c({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(r.push(y({...e.dashboardOrganisationFilters,search:a??void 0})),r.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(r)},{toggleSet:I,init:E,onUpdate:L}=Y(S,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],l,j,M);return{placeholder:B,dashboards:S,toggleSet:I,loading:$,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:L}}});function oe(e,l,c,h,b,y){const i=v("FSChip"),d=v("FSAutocompleteField");return F(),D(d,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:t})=>[t.icon?(F(),D(A,{key:0},{default:n(()=>[z(G(t.icon),1)]),_:2},1024)):W("",!0)]),"item-append":n(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(t=>[m(C,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:f=>t.toggle(t.item)},x({_:2},[t.item.type?{name:"append",fn:n(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const N=Z(q,[["render",oe]]);q.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const qa={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:l})=>({components:{FSAutocompleteDashboard:N,FSCol:ee},props:Object.keys(l),setup(){return{...e}},template:`
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
