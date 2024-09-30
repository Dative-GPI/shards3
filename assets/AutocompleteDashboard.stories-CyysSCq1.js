import{d as I,c as p,y as f,z as D,A as S,B as r,m as L,E as U,G as P,D as z,L as m,M as E,P as G}from"./vue.esm-bundler-CxS4_7kK.js";import{F as x}from"./FSAutocompleteField-BVddpNXD.js";import{F as T}from"./FSButton-D4qgd2ja.js";import{F as H}from"./FSChip-Dvm8S3l9.js";import{F as V}from"./FSIcon-DKHuRfPI.js";import{u as J}from"./useDashboardOrganisationTypes-Da9ItV1J.js";import{u as K}from"./useDashboardOrganisations-BV1i54IJ.js";import{u as Q}from"./useDashboardShallows-aq0ZV6fV.js";import{d as R,a as W}from"./dashboards-DWPTFkiQ.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as X}from"./useAutocomplete-Crlbd48I.js";import{u as Y}from"./useTranslations-ZMyFjr19.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSCol-Co9r7Klj.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSRow-D546kqFt.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./VSpacer-DaRxrr8q.js";import"./color-DpQhyQC8.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSDialogMenu-1exdynOQ.js";import"./FSCard-uGx4g-q0.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSClickable-xECbCdT3.js";import"./dashboardTranslation-DyCT8EWT.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./lodash-BiW_TGGX.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-935AgDKu.js";import"./pathCrumb-Db-cq5HI.js";const w=I({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:x,FSButton:T,FSChip:H,FSIcon:V},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:u,fetching:g,entities:b}=J(),{getMany:h,fetching:i,entities:d}=K(),{getMany:t,fetching:c,entities:C}=Q(),{$tr:q}=Y(),y=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Organisation}))).concat(C.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Shallow})))),k=p(()=>_.value&&(g.value||i.value||c.value)),$=p(()=>e.multiple&&e.modelValue?q("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),B=a=>{Array.isArray(a)?(o("update:modelValue",a.map(l=>l.id)),o("update:type",a.map(l=>l.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},N=a=>{const l=[];return e.ignoreDashboardOrganisationTypes||l.push(u({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(l.push(h({...e.dashboardOrganisationFilters,search:a??void 0})),l.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(l)},{toggleSet:M,init:_,onUpdate:j}=X(y,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],o,N,B);return{placeholder:$,dashboards:y,toggleSet:M,loading:k,dashboardTypeColor:R,dashboardTypeLabel:W,onUpdate:j}}});function ae(e,o,u,g,b,h){const i=f("FSChip"),d=f("FSAutocompleteField");return D(),S(d,L({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(D(),S(V,{key:0},{default:r(()=>[U(P(t.icon),1)]),_:2},1024)):z("",!0)]),"item-append":r(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[m(T,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:G(t.getClass(t.item)),label:t.item.label,onClick:c=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=Z(w,[["render",ae]]);w.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Na={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDashboard:A,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Ma=["Variations"];export{n as Variations,Ma as __namedExportsOrder,Na as default};
