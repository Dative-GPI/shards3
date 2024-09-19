import{d as _,c as m,z as f,A as C,B as b,C as l,m as M,G as j,H as I,E as U,v as u,M as L,P}from"./vue.esm-bundler-BwDfg4wG.js";import{F as z}from"./FSAutocompleteField-BJE5Iw2_.js";import{F as O}from"./FSButton-jJkg4qCi.js";import{F as E}from"./FSChip-kw9MOYsi.js";import{F as V}from"./FSIcon-ChaYv6Le.js";import{u as G}from"./useChartOrganisationTypes-oOBHFuQg.js";import{u as H}from"./useChartOrganisations-CzXxwkos.js";import{c as x,a as J}from"./charts-DS3KZe6T.js";import{C as d}from"./charts-BPLoyxCB.js";import{u as K}from"./useAutocomplete-CQJJiztf.js";import{u as Q}from"./useTranslations-CHmpEDXr.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSCol-BEvj3we4.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./FSClickable-Y_T-Cq-9.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";const A=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:z,FSButton:O,FSChip:E,FSIcon:V},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:d.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:g,fetching:c,entities:h}=G(),{getMany:y,fetching:i,entities:s}=H(),{$tr:t}=Q(),p=m(()=>h.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.OrganisationType})).concat(s.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.Organisation})))),q=m(()=>D.value&&(c.value||i.value)),w=m(()=>e.multiple&&e.modelValue?t("ui.autocomplete-chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),k=a=>{Array.isArray(a)?(o("update:modelValue",a.map(r=>r.id)),o("update:type",a.map(r=>r.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},$=a=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(g({...e.chartOrganisationTypeFilters,search:a??void 0})),e.ignoreChartOrganisations||r.push(y({...e.chartOrganisationFilters,search:a??void 0})),Promise.all(r)},{toggleSet:B,init:D,onUpdate:N}=K(p,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,$,k);return{placeholder:w,toggleSet:B,loading:q,charts:p,chartOriginColor:x,chartOriginLabel:J,onUpdate:N}}});function X(e,o,g,c,h,y){const i=f("FSChip"),s=f("FSAutocompleteField");return C(),b(s,M({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:t})=>[t.icon?(C(),b(V,{key:0},{default:l(()=>[j(I(t.icon),1)]),_:2},1024)):U("",!0)]),"item-append":l(({item:t})=>[u(i,{color:e.chartOriginColor(t.type),label:e.chartOriginLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(t=>[u(O,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:P(t.getClass(t.item)),label:t.item.label,onClick:p=>t.toggle(t.item)},L({_:2},[t.item.type?{name:"append",fn:l(()=>[u(i,{color:e.chartOriginColor(t.item.type),label:e.chartOriginLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const T=R(A,[["render",X]]);A.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const Vt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:T,FSCol:W},props:Object.keys(o),setup(){return{...e}},template:`
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
