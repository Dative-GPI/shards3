import{d as M,c as u,y as b,z as F,A as S,C as l,m as j,H as U,I as L,F as z,N as d,B as P,D as E}from"./vue.esm-bundler-l-siv0w9.js";import{F as H}from"./FSAutocompleteField-C4SlKDTq.js";import{F as A}from"./FSButton-Cj1rvnYn.js";import{F as x}from"./FSChip-CH8gQQD0.js";import{F as T}from"./FSIcon-uIr9VdFq.js";import{u as G}from"./useChartOrganisationTypes-D9UWUssW.js";import{u as J}from"./useChartOrganisations-CRfsN2xB.js";import{a as g,b as K,d as Q}from"./chartsTools-EfUqT6mw.js";import{u as R}from"./useAutocomplete-ConHaqE0.js";import{u as W}from"./useTranslations-CJK8D24x.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Y}from"./FSCol-BvqytbKT.js";import"./FSSearchField-Dn043iEv.js";import"./FSTextField-CK_MvsiW.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-2hgW8eHf.js";import"./FSCard-DL4SLpmS.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-D8RSeXs4.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-u-Z9nGtY.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-Dj7SGfxv.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSCheckbox-BlsFOPfN.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSLoader-kY4Od3NB.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-Dp-yowPl.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSRouterLink-2qKFAEm5.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DfRcT5kA.js";import"./chartAllowedStep-TTV4b-8I.js";import"./timeRange-Bfx7KHHy.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";const q=M({name:"FSAutocompleteChart",components:{FSAutocompleteField:H,FSButton:A,FSChip:x,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update","update:modelValue","update:type"],setup(t,{emit:o}){const{getMany:c,fetching:y,entities:h}=G(),{getMany:f,fetching:i,entities:p}=J(),{$tr:a}=W(),s=u(()=>h.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:g.OrganisationType})).concat(p.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:g.Organisation})))),k=u(()=>_.value&&(y.value||i.value)),$=u(()=>t.multiple&&t.modelValue?a("ui.autocomplete-chart.placeholder","{0} chart(s) selected",t.modelValue.length):null),D=e=>{if(Array.isArray(e)){const r=e.map(m=>m.id),C=e.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",e==null?void 0:e.id),o("update:type",e==null?void 0:e.type),o("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type})},N=e=>{const r=[];return t.ignoreChartOrganisationTypes||r.push(c({...t.chartOrganisationTypeFilters,search:e??void 0})),t.ignoreChartOrganisations||r.push(f({...t.chartOrganisationFilters,search:e??void 0})),Promise.all(r)},{toggleSet:B,init:_,onUpdate:I}=R(s,[()=>t.chartOrganisationTypeFilters,()=>t.chartOrganisationFilters],o,N,D);return{placeholder:$,toggleSet:B,loading:k,charts:s,chartOriginColor:K,chartOriginLabel:Q,onUpdate:I}}});function Z(t,o,c,y,h,f){const i=b("FSChip"),p=b("FSAutocompleteField");return F(),S(p,j({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,placeholder:t.placeholder,loading:t.loading,items:t.charts,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(F(),S(T,{key:0},{default:l(()=>[U(L(a.icon),1)]),_:2},1024)):z("",!0)]),"item-append":l(({item:a})=>[d(i,{color:t.chartOriginColor(a.type),label:t.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:E(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},P({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:t.chartOriginColor(a.item.type),label:t.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=X(q,[["render",Z]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const kt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(t,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Y},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})};var O,v,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const $t=["Variations"];export{n as Variations,$t as __namedExportsOrder,kt as default};
