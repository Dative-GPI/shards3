import{d as I,c as p,y as f,z as D,A as S,B as r,m as L,E as U,G as P,D as z,L as m,M as E,P as G}from"./vue.esm-bundler-DjjVIdVI.js";import{F as x}from"./FSAutocompleteField-DOTJQYwk.js";import{F as T}from"./FSButton-P9SybKcj.js";import{F as H}from"./FSChip-Cp6DW4fA.js";import{F as V}from"./FSIcon-DCIvejCK.js";import{u as J}from"./useDashboardOrganisationTypes-DjSccxnz.js";import{u as K}from"./useDashboardOrganisations-MqxkUBbg.js";import{u as Q}from"./useDashboardShallows-C0yDStMF.js";import{d as R,a as W}from"./dashboards-JLSbnrkp.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as X}from"./useAutocomplete-BGpKVulV.js";import{u as Y}from"./useTranslations-f9CWAvtI.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSCol-TPWSQPHs.js";import"./FSSearchField-Dqt7dw0w.js";import"./FSTextField-grpW8GtP.js";import"./FSBaseField-Dw6CfABe.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSRow-CpogXLW8.js";import"./css-BkQhD285.js";import"./useColors-C-2usiDI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-v7reDO7s.js";import"./VSpacer-CrqXaTz-.js";import"./color-BKGJvBEr.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./FSDialogMenu-cFa_PrXl.js";import"./FSCard-Ce4y4X7Y.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-HvDhUL_D.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-DRfIDUxK.js";import"./FSWrapGroup-B1tkF8GY.js";import"./FSCheckbox-3q2xNHw_.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-Gld6KvqW.js";import"./FSLoader-EdeUV0_k.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-oVBzLccc.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BJ7aZkTZ.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./FSClickable-CYzkUmw_.js";import"./dashboardTranslation-B3HYPjZl.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./lodash-BiW_TGGX.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./pathCrumb-Db-cq5HI.js";const w=I({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:x,FSButton:T,FSChip:H,FSIcon:V},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:u,fetching:g,entities:b}=J(),{getMany:h,fetching:i,entities:d}=K(),{getMany:t,fetching:c,entities:C}=Q(),{$tr:q}=Y(),y=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Organisation}))).concat(C.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Shallow})))),k=p(()=>_.value&&(g.value||i.value||c.value)),$=p(()=>e.multiple&&e.modelValue?q("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),B=a=>{Array.isArray(a)?(o("update:modelValue",a.map(l=>l.id)),o("update:type",a.map(l=>l.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},N=a=>{const l=[];return e.ignoreDashboardOrganisationTypes||l.push(u({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(l.push(h({...e.dashboardOrganisationFilters,search:a??void 0})),l.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(l)},{toggleSet:M,init:_,onUpdate:j}=X(y,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],o,N,B);return{placeholder:$,dashboards:y,toggleSet:M,loading:k,dashboardTypeColor:R,dashboardTypeLabel:W,onUpdate:j}}});function ae(e,o,u,g,b,h){const i=f("FSChip"),d=f("FSAutocompleteField");return D(),S(d,L({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(D(),S(V,{key:0},{default:r(()=>[U(P(t.icon),1)]),_:2},1024)):z("",!0)]),"item-append":r(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[m(T,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:G(t.getClass(t.item)),label:t.item.label,onClick:c=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=Z(w,[["render",ae]]);w.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ba={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDashboard:A,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,F,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Na=["Variations"];export{n as Variations,Na as __namedExportsOrder,Ba as default};
