import{d as I,c as p,y as f,z as D,A as S,C as r,m as U,H as L,I as z,F as P,N as m,B as E,D as H}from"./vue.esm-bundler-DTB_q9xr.js";import{F as x}from"./FSAutocompleteField-CaoqKedU.js";import{F as V}from"./FSButton-DblcRn12.js";import{F as G}from"./FSChip-C1Wzm8E1.js";import{F as T}from"./FSIcon-CJgnsR4e.js";import{u as J}from"./useDashboardOrganisationTypes-BWGZtHDq.js";import{u as K}from"./useDashboardOrganisations-kbzoA4Hp.js";import{u as Q}from"./useDashboardShallows-akWuCUc3.js";import{d as R,a as W}from"./dashboards-DNnrn5v4.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as X}from"./useAutocomplete-C_CEUaC2.js";import{u as Y}from"./useTranslations-BehwFxDb.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./VIcon-BCDp5TRU.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./FSClickable-CIKlZ0Uy.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./lodash-BiW_TGGX.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./pathCrumb-Db-cq5HI.js";const w=I({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:x,FSButton:V,FSChip:G,FSIcon:T},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update","update:modelValue","update:type"],setup(a,{emit:l}){const{getMany:u,fetching:g,entities:b}=J(),{getMany:h,fetching:i,entities:d}=K(),{getMany:t,fetching:c,entities:C}=Q(),{$tr:q}=Y(),y=p(()=>b.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.OrganisationType})).concat(d.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.Organisation}))).concat(C.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.Shallow})))),k=p(()=>M.value&&(g.value||i.value||c.value)),$=p(()=>a.multiple&&a.modelValue?q("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",a.modelValue.length):null),N=e=>{Array.isArray(e)?(l("update:modelValue",e.map(o=>o.id)),l("update:type",e.map(o=>o.type)),l("update",{modelValue:e.map(o=>o.id),type:e.map(o=>o.type)})):(l("update:modelValue",e==null?void 0:e.id),l("update:type",e==null?void 0:e.type),l("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type}))},B=e=>{const o=[];return a.ignoreDashboardOrganisationTypes||o.push(u({...a.dashboardOrganisationTypeFilters,search:e??void 0})),a.ignoreDashboardOrganisations||(o.push(h({...a.dashboardOrganisationFilters,search:e??void 0})),o.push(t({...a.dashboardShallowFilters,search:e??void 0}))),Promise.all(o)},{toggleSet:_,init:M,onUpdate:j}=X(y,[()=>a.dashboardOrganisationTypeFilters,()=>a.dashboardOrganisationFilters,()=>a.dashboardShallowFilters],l,B,N);return{placeholder:$,dashboards:y,toggleSet:_,loading:k,dashboardTypeColor:R,dashboardTypeLabel:W,onUpdate:j}}});function ae(a,l,u,g,b,h){const i=f("FSChip"),d=f("FSAutocompleteField");return D(),S(d,U({toggleSet:!a.$props.toggleSetDisabled&&a.toggleSet,multiple:a.$props.multiple,placeholder:a.placeholder,items:a.dashboards,loading:a.loading,modelValue:a.$props.modelValue,"onUpdate:modelValue":a.onUpdate},a.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(D(),S(T,{key:0},{default:r(()=>[L(z(t.icon),1)]),_:2},1024)):P("",!0)]),"item-append":r(({item:t})=>[m(i,{color:a.dashboardTypeColor(t.type),label:a.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[m(V,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:H(t.getClass(t.item)),label:t.item.label,onClick:c=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[m(i,{color:a.dashboardTypeColor(t.item.type),label:a.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=Z(w,[["render",ae]]);w.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const Ba={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(a,{argTypes:l})=>({components:{FSAutocompleteDashboard:A,FSCol:ee},props:Object.keys(l),setup(){return{...a}},template:`
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
}`,...(O=(v=n.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const _a=["Variations"];export{n as Variations,_a as __namedExportsOrder,Ba as default};
