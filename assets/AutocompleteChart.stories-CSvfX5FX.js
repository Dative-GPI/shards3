import{d as _,c as m,y as f,z as C,A as b,B as l,m as M,E as j,G as I,D as L,L as u,M as U,P}from"./vue.esm-bundler-BSyvBTC9.js";import{F as z}from"./FSAutocompleteField-BTQ6M528.js";import{F as O}from"./FSButton-BjjxnBJw.js";import{F as E}from"./FSChip-Cu5YGhb-.js";import{F as V}from"./FSIcon-DwJNOKvG.js";import{u as G}from"./useChartOrganisationTypes-dJN_rUrd.js";import{u as x}from"./useChartOrganisations-Da2b9mlX.js";import{c as H,a as J}from"./charts-DXJpbK1o.js";import{C as d}from"./charts-BPLoyxCB.js";import{u as K}from"./useAutocomplete-DJoKtg4o.js";import{u as Q}from"./useTranslations-CdSqQFV3.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSCol-DZA6pxA1.js";import"./FSSearchField-fyCoX-Sm.js";import"./FSTextField-DOjRjaWh.js";import"./FSBaseField-BkzmckaL.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-D5T4tlYN.js";import"./FSCard-Dakm4bPu.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CDcZ7it9.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-dT-IKU0T.js";import"./FSWrapGroup-DgP826LK.js";import"./FSCheckbox-DPKcfP0u.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-D96pvLZm.js";import"./FSLoader-CtbqJzfZ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-CTi9smel.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B7wMH5Gc.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./FSClickable-CS9kdIxp.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const A=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:z,FSButton:O,FSChip:E,FSIcon:V},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:d.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:g,fetching:c,entities:h}=G(),{getMany:y,fetching:i,entities:s}=x(),{$tr:t}=Q(),p=m(()=>h.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.OrganisationType})).concat(s.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.Organisation})))),q=m(()=>B.value&&(c.value||i.value)),w=m(()=>e.multiple&&e.modelValue?t("ui.autocomplete-chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),k=a=>{Array.isArray(a)?(o("update:modelValue",a.map(r=>r.id)),o("update:type",a.map(r=>r.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},$=a=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(g({...e.chartOrganisationTypeFilters,search:a??void 0})),e.ignoreChartOrganisations||r.push(y({...e.chartOrganisationFilters,search:a??void 0})),Promise.all(r)},{toggleSet:D,init:B,onUpdate:N}=K(p,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,$,k);return{placeholder:w,toggleSet:D,loading:q,charts:p,chartOriginColor:H,chartOriginLabel:J,onUpdate:N}}});function X(e,o,g,c,h,y){const i=f("FSChip"),s=f("FSAutocompleteField");return C(),b(s,M({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:t})=>[t.icon?(C(),b(V,{key:0},{default:l(()=>[j(I(t.icon),1)]),_:2},1024)):L("",!0)]),"item-append":l(({item:t})=>[u(i,{color:e.chartOriginColor(t.type),label:e.chartOriginLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(t=>[u(O,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:P(t.getClass(t.item)),label:t.item.label,onClick:p=>t.toggle(t.item)},U({_:2},[t.item.type?{name:"append",fn:l(()=>[u(i,{color:e.chartOriginColor(t.item.type),label:e.chartOriginLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const T=R(A,[["render",X]]);A.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const Vt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:T,FSCol:W},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteChart
        label="Chart"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var v,F,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      FSAutocompleteChart,
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
      <FSAutocompleteChart
        label="Chart"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const At=["Variations"];export{n as Variations,At as __namedExportsOrder,Vt as default};
