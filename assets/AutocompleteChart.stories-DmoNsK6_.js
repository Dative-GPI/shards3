import{d as j,c as u,y as b,z as F,A as S,C as l,N as d,F as I,B as U,D as L,E as z,H as E,m as P}from"./vue.esm-bundler-D3ngFwGY.js";import{F as H}from"./FSAutocompleteField-B1f-d-lL.js";import{F as A}from"./FSButton-D8KNVcat.js";import{F as G}from"./FSChip-CyfHnFR3.js";import{F as T}from"./FSIcon-C0akNC9K.js";import{u as J}from"./useChartOrganisationTypes-BxI8tLzd.js";import{u as K}from"./useChartOrganisations-Cau9RvzJ.js";import{a as g,b as Q,d as R}from"./chartsTools-B2ddZd44.js";import{u as W}from"./useAutocomplete-BepmEoya.js";import{u as X}from"./useTranslations-Dmqoe3Kp.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-CVj0zcU5.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";const q=j({name:"FSAutocompleteChart",components:{FSAutocompleteField:H,FSButton:A,FSChip:G,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:c,fetching:y,entities:h}=J(),{getMany:f,fetching:i,entities:p}=K(),{$tr:a}=X(),s=u(()=>h.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.Organisation})))),$=u(()=>M.value&&(y.value||i.value)),k=u(()=>e.multiple&&e.modelValue?a("autocomplete.chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),D=t=>{if(Array.isArray(t)){const r=t.map(m=>m.id),C=t.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type),o("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},N=t=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(c({...e.chartOrganisationTypeFilters,search:t??void 0})),e.ignoreChartOrganisations||r.push(f({...e.chartOrganisationFilters,search:t??void 0})),Promise.all(r)},{toggleSet:B,init:M,onUpdate:_}=W(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,N,D);return{placeholder:k,toggleSet:B,loading:$,charts:s,chartOriginColor:R,chartOriginLabel:Q,onUpdate:_}}});function x(e,o,c,y,h,f){const i=b("FSChip"),p=b("FSAutocompleteField");return F(),S(p,P({label:e.$props.label??e.$tr("autocomplete.chart.label","Chart"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(F(),S(T,{key:0},{default:l(()=>[L(z(a.icon),1)]),_:2},1024)):E("",!0)]),"item-append":l(({item:a})=>[d(i,{color:e.chartOriginColor(a.type),label:e.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:I(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},U({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:e.chartOriginColor(a.item.type),label:e.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=Y(q,[["render",x]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const wt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Z},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const $t=["Variations"];export{n as Variations,$t as __namedExportsOrder,wt as default};
