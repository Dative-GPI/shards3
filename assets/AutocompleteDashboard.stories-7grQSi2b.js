import{d as I,c as p,y as f,z as D,A as S,C as r,m as U,H as L,I as z,F as P,N as m,B as E,D as H}from"./vue.esm-bundler-CWdIlc2r.js";import{F as x}from"./FSAutocompleteField-CwC6d7OJ.js";import{F as T}from"./FSButton-CVLEcQTp.js";import{F as G}from"./FSChip-DY3DJn_Y.js";import{F as V}from"./FSIcon-DUHP8dRZ.js";import{u as J}from"./useDashboardOrganisationTypes-BvzdPd0m.js";import{u as K}from"./useDashboardOrganisations-BPwICFB4.js";import{u as Q}from"./useDashboardShallows-CDfWwfZ-.js";import{d as R,a as W}from"./dashboards-Bb40paeF.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as X}from"./useAutocomplete-Dltt32Dx.js";import{u as Y}from"./useTranslations-CEnu7PZQ.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSCol-Bj1WIVag.js";import"./FSSearchField-B0yI9yuZ.js";import"./FSTextField-KbqtOOXa.js";import"./FSBaseField-CkKSPx2p.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./FSRow-D4JfwQlG.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./VIcon-Bo7R9vIQ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSDialogMenu-B1YbpCEf.js";import"./FSCard-CPhdbHks.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-l9gZ_81L.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Byp9YOIJ.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-D1nUZzQm.js";import"./FSWrapGroup-C-l9ybIX.js";import"./FSCheckbox-DZWstXnV.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BVg8JJoP.js";import"./FSLoader-S8abBhij.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-CKmzEXUE.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-DZ_uFpFv.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./FSClickable-DB2xZ1ce.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./lodash-BiW_TGGX.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-Dh-waxQE.js";import"./pathCrumb-Db-cq5HI.js";const w=I({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:x,FSButton:T,FSChip:G,FSIcon:V},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:u,fetching:g,entities:b}=J(),{getMany:h,fetching:i,entities:d}=K(),{getMany:t,fetching:c,entities:C}=Q(),{$tr:q}=Y(),y=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Organisation}))).concat(C.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Shallow})))),k=p(()=>M.value&&(g.value||i.value||c.value)),$=p(()=>e.multiple&&e.modelValue?q("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),N=a=>{Array.isArray(a)?(o("update:modelValue",a.map(l=>l.id)),o("update:type",a.map(l=>l.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},B=a=>{const l=[];return e.ignoreDashboardOrganisationTypes||l.push(u({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(l.push(h({...e.dashboardOrganisationFilters,search:a??void 0})),l.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(l)},{toggleSet:_,init:M,onUpdate:j}=X(y,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],o,B,N);return{placeholder:$,dashboards:y,toggleSet:_,loading:k,dashboardTypeColor:R,dashboardTypeLabel:W,onUpdate:j}}});function ae(e,o,u,g,b,h){const i=f("FSChip"),d=f("FSAutocompleteField");return D(),S(d,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(D(),S(V,{key:0},{default:r(()=>[L(z(t.icon),1)]),_:2},1024)):P("",!0)]),"item-append":r(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[m(T,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:c=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=Z(w,[["render",ae]]);w.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Na={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDashboard:A,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,v,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(v=n.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const Ba=["Variations"];export{n as Variations,Ba as __namedExportsOrder,Na as default};
