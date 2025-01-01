import{d as L,c as m,A as S,B as F,D as r,j as P,I as v,J as E,K as z,G,P as u,C as J,E as K}from"./vue.esm-bundler-DSwHwgKw.js";import{F as H}from"./FSAutocompleteField-_rtaZsEI.js";import{F as w}from"./FSButton-DYhqzqie.js";import{F as Q}from"./FSChip-DaD2DBV3.js";import{F as A}from"./FSIcon-DbV5muRp.js";import{u as R}from"./useDashboardOrganisationTypes-gF-tnCWC.js";import{u as W}from"./useDashboardOrganisations-Bjn6tiIE.js";import{u as X}from"./useDashboardShallows-DMGAPZeP.js";import{d as Y,a as Z}from"./dashboards-DRamaDJ9.js";import{D as i}from"./dashboards-JSNI7pIu.js";import{u as x}from"./useAutocomplete-BUZ9ESIm.js";import{u as ee}from"./useTranslations-BhPzmPwL.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSCol-DdGVae5t.js";import"./FSSearchField-rPpNr1Yi.js";import"./FSTextField-G5bYyIVj.js";import"./FSBaseField-MsaseDuX.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./FSRow-BtkEywPN.js";import"./css-XXwFKvUE.js";import"./useColors-BO83iJ4k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-4AjdAhIV.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./color-uBYwhjku.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./VIcon-CdjjMQ6V.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./VList-BGOhPHad.js";import"./FSCard-BWyLcCxk.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./router-C4I-dA4c.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./FSSlideGroup-CDErVpPi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bh5NMaHJ.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-nldesQt9.js";import"./FSWrapGroup-CpuWIkHs.js";import"./FSCheckbox-B7I9yKzI.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut--vL84uZt.js";import"./FSLoader-BCTnX9Pa.js";import"./FSRadio-BRXP-khf.js";import"./VSelect-CCGZIyvT.js";import"./VMenu-B9SE09pj.js";import"./filter-CxK7Dp-c.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DngCBs65.js";import"./dashboardTranslation-DO1hOIF0.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./lodash-BiW_TGGX.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-BC5Ev-17.js";import"./pathCrumb-Db-cq5HI.js";const C=L({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:H,FSButton:w,FSChip:Q,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:i.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(a,{emit:o}){const{getMany:b,fetching:g,entities:h}=R(),{getMany:c,fetching:s,entities:d}=W(),{getMany:t,fetching:y,entities:$}=X(),{$tr:k}=ee(),f=m(()=>h.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.OrganisationType})).concat(d.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Organisation}))).concat($.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Shallow})))),B=m(()=>_.value&&(g.value||s.value||y.value)),N=m(()=>a.multiple&&a.modelValue?k("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",a.modelValue.length):null),M=e=>{if(Array.isArray(e)){const l=e.map(p=>p.id),D=e.map(p=>p.type);o("update:modelValue",l),o("update:type",D),o("update",{modelValue:l,type:D})}else o("update:modelValue",e==null?void 0:e.id),o("update:type",e==null?void 0:e.type),o("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type})},j=e=>{const l=[];return a.ignoreDashboardOrganisationTypes||l.push(b({...a.dashboardOrganisationTypeFilters,search:e??void 0})),a.ignoreDashboardOrganisations||(l.push(c({...a.dashboardOrganisationFilters,search:e??void 0})),l.push(t({...a.dashboardShallowFilters,search:e??void 0}))),Promise.all(l)},{toggleSet:I,init:_,onUpdate:U}=x(f,[()=>a.dashboardOrganisationTypeFilters,()=>a.dashboardOrganisationFilters,()=>a.dashboardShallowFilters],o,j,M);return{placeholder:N,dashboards:f,toggleSet:I,loading:B,dashboardTypeColor:Y,dashboardTypeLabel:Z,onUpdate:U}}});function oe(a,o,b,g,h,c){const s=S("FSChip"),d=S("FSAutocompleteField");return v(),F(d,P({label:a.$props.label??a.$tr("ui.common.dashboard","Dashboard"),toggleSet:!a.$props.toggleSetDisabled&&a.toggleSet,multiple:a.$props.multiple,placeholder:a.placeholder,items:a.dashboards,loading:a.loading,modelValue:a.$props.modelValue,"onUpdate:modelValue":a.onUpdate},a.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(v(),F(A,{key:0},{default:r(()=>[E(z(t.icon),1)]),_:2},1024)):G("",!0)]),"item-append":r(({item:t})=>[u(s,{color:a.dashboardTypeColor(t.type),label:a.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[u(w,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:K(t.getClass(t.item)),label:t.item.label,onClick:y=>t.toggle(t.item)},J({_:2},[t.item.type?{name:"append",fn:r(()=>[u(s,{color:a.dashboardTypeColor(t.item.type),label:a.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const q=ae(C,[["render",oe]]);C.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const ja={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(a,{argTypes:o})=>({components:{FSAutocompleteDashboard:q,FSCol:te},props:Object.keys(o),setup(){return{...a}},template:`
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
    </FSCol>`})};var O,V,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const Ia=["Variations"];export{n as Variations,Ia as __namedExportsOrder,ja as default};
