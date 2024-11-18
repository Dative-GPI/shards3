import{d as L,c as m,y as S,z as F,A as v,C as r,N as u,F as z,B as E,D as P,E as H,H as G,m as J}from"./vue.esm-bundler-D3ngFwGY.js";import{F as K}from"./FSAutocompleteField-B1f-d-lL.js";import{F as w}from"./FSButton-D8KNVcat.js";import{F as Q}from"./FSChip-CyfHnFR3.js";import{F as A}from"./FSIcon-C0akNC9K.js";import{u as R}from"./useDashboardOrganisationTypes-CgubXi_H.js";import{u as W}from"./useDashboardOrganisations-DsFPtf3i.js";import{u as X}from"./useDashboardShallows-D3qdxsIC.js";import{d as Y,a as Z}from"./dashboards-C7QX9Zqm.js";import{D as i}from"./dashboards-JSNI7pIu.js";import{u as x}from"./useAutocomplete-BepmEoya.js";import{u as ee}from"./useTranslations-Dmqoe3Kp.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSCol-CVj0zcU5.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./dashboardTranslation-CFEUHu6n.js";import"./useAppLanguageCode-CbHleqYG.js";import"./lodash-BiW_TGGX.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./pathCrumb-Db-cq5HI.js";const C=L({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:K,FSButton:w,FSChip:Q,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:i.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(a,{emit:o}){const{getMany:b,fetching:g,entities:h}=R(),{getMany:c,fetching:s,entities:d}=W(),{getMany:t,fetching:y,entities:$}=X(),{$tr:k}=ee(),f=m(()=>h.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.OrganisationType})).concat(d.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Organisation}))).concat($.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Shallow})))),N=m(()=>I.value&&(g.value||s.value||y.value)),B=m(()=>a.multiple&&a.modelValue?k("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",a.modelValue.length):null),M=e=>{if(Array.isArray(e)){const l=e.map(p=>p.id),D=e.map(p=>p.type);o("update:modelValue",l),o("update:type",D),o("update",{modelValue:l,type:D})}else o("update:modelValue",e==null?void 0:e.id),o("update:type",e==null?void 0:e.type),o("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type})},j=e=>{const l=[];return a.ignoreDashboardOrganisationTypes||l.push(b({...a.dashboardOrganisationTypeFilters,search:e??void 0})),a.ignoreDashboardOrganisations||(l.push(c({...a.dashboardOrganisationFilters,search:e??void 0})),l.push(t({...a.dashboardShallowFilters,search:e??void 0}))),Promise.all(l)},{toggleSet:_,init:I,onUpdate:U}=x(f,[()=>a.dashboardOrganisationTypeFilters,()=>a.dashboardOrganisationFilters,()=>a.dashboardShallowFilters],o,j,M);return{placeholder:B,dashboards:f,toggleSet:_,loading:N,dashboardTypeColor:Z,dashboardTypeLabel:Y,onUpdate:U}}});function oe(a,o,b,g,h,c){const s=S("FSChip"),d=S("FSAutocompleteField");return F(),v(d,J({label:a.$props.label??a.$tr("autocomplete.dashboard.label","Dashboard"),toggleSet:!a.$props.toggleSetDisabled&&a.toggleSet,multiple:a.$props.multiple,placeholder:a.placeholder,items:a.dashboards,loading:a.loading,modelValue:a.$props.modelValue,"onUpdate:modelValue":a.onUpdate},a.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(F(),v(A,{key:0},{default:r(()=>[P(H(t.icon),1)]),_:2},1024)):G("",!0)]),"item-append":r(({item:t})=>[u(s,{color:a.dashboardTypeColor(t.type),label:a.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[u(w,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:z(t.getClass(t.item)),label:t.item.label,onClick:y=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[u(s,{color:a.dashboardTypeColor(t.item.type),label:a.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const q=ae(C,[["render",oe]]);C.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const ja={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(a,{argTypes:o})=>({components:{FSAutocompleteDashboard:q,FSCol:te},props:Object.keys(o),setup(){return{...a}},template:`
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
}`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const _a=["Variations"];export{n as Variations,_a as __namedExportsOrder,ja as default};
