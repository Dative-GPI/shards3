var ae=Object.defineProperty;var ne=(l,e,i)=>e in l?ae(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i;var t=(l,e,i)=>ne(l,typeof e!="symbol"?e+"":e,i);import{d as se,c as f,y as A,z as O,A as F,B as h,m as re,E as de,G as he,D as ce,L as p,M as ue,P as ge}from"./vue.esm-bundler--l9E1zCM.js";import{F as Ce}from"./FSAutocompleteField-CTffwpro.js";import{F as V}from"./FSButton-BPKnQ3W2.js";import{F as be}from"./FSChip-7TUmekWj.js";import{_ as w}from"./FSIcon-BHbXv1sW.js";import{C as P}from"./base-BcjN1n8z.js";import{S as d}from"./serviceFactory-Bd5jifNi.js";import{C}from"./composableFactory-BJn24iiy.js";import{C as m,c as ye,b as fe}from"./charts-BhBi0NR-.js";import{u as pe}from"./useAutocomplete-C1ph6JPC.js";import{u as me}from"./useTranslations-ByKtt_-5.js";import{_ as Ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as xe}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-B3SNj64H.js";import"./FSTextField-CORSOnFI.js";import"./FSBaseField-vXRxqDM_.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-CcOmb8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-B4qN8dQk.js";import"./FSCard-DXUcd4gZ.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-DeeIs7LB.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BsXD3GQs.js";import"./FSWrapGroup-BLHTvc8Y.js";import"./FSCheckbox-O0BYl1sh.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-D6eFi9gL.js";import"./VImg-r61Tw9eL.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-CPRKwXqX.js";import"./VList-CMkQDUHu.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-DuVohGsR.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./FSClickable-BjrLGEPN.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./lodash-BiW_TGGX.js";class H{constructor(e){t(this,"id");t(this,"chartId");t(this,"chartPresetHiddenCode");t(this,"chartFilterHiddenCode");t(this,"chartFilterLabel");t(this,"chartPresetLabel");this.id=e.id,this.chartId=e.chartId,this.chartPresetHiddenCode=e.chartPresetHiddenCode,this.chartFilterHiddenCode=e.chartFilterHiddenCode,this.chartFilterLabel=e.chartFilterLabel,this.chartPresetLabel=e.chartPresetLabel}}class R{constructor(e){t(this,"id");t(this,"label");this.id=e.id,this.label=e.label}}class M{constructor(e){t(this,"id");t(this,"imageId");t(this,"chartId");t(this,"organisationTypeId");t(this,"organisationTypeLabel");t(this,"chartCategoryId");t(this,"chartCategoryLabel");t(this,"scope");t(this,"label");t(this,"title");t(this,"code");t(this,"icon");t(this,"tags");t(this,"multiple");t(this,"chartType");t(this,"modelsLabels");this.id=e.id,this.imageId=e.imageId,this.chartId=e.chartId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.chartCategoryId=e.chartCategoryId,this.chartCategoryLabel=e.chartCategoryLabel,this.scope=e.scope,this.label=e.label,this.title=e.title,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.multiple=e.multiple,this.chartType=e.chartType,this.modelsLabels=e.modelsLabels.map(i=>new R(i))}}class Se{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class _{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"label");t(this,"labelDefault");t(this,"code");t(this,"valueDefault");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.code=e.code,this.valueDefault=e.valueDefault,this.translations=e.translations.map(i=>new Se(i))}}class Ae{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class N{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"label");t(this,"labelDefault");t(this,"icon");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.icon=e.icon,this.translations=e.translations.map(i=>new Ae(i))}}class k{constructor(e){t(this,"languageCode");t(this,"label");t(this,"title");this.languageCode=e.languageCode,this.label=e.label,this.title=e.title}}class Oe{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class Fe{constructor(e){t(this,"startValue");t(this,"endValue");this.startValue=e.startValue,this.endValue=e.endValue}}class q extends Fe{constructor(i){super(i);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=i.color,this.opacity=i.opacity,this.label=i.label,this.labelDefault=i.labelDefault,this.translations=i.translations.map(o=>new Oe(o))}}class Te{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class ve{constructor(e){t(this,"startDay");t(this,"startHour");t(this,"startMinute");t(this,"endDay");t(this,"endHour");t(this,"endMinute");this.startDay=e.startDay,this.startHour=e.startHour,this.startMinute=e.startMinute,this.endDay=e.endDay,this.endHour=e.endHour,this.endMinute=e.endMinute}}class De extends ve{constructor(i){super(i);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=i.color,this.opacity=i.opacity,this.label=i.label,this.labelDefault=i.labelDefault,this.translations=i.translations.map(o=>new Te(o))}}class g{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"type");t(this,"logarithmic");t(this,"boundaries");t(this,"min");t(this,"max");t(this,"unit");t(this,"valueRanges");t(this,"timeRanges");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.type=e.type,this.logarithmic=e.logarithmic,this.boundaries=e.boundaries,this.min=e.min,this.max=e.max,this.unit=e.unit,this.valueRanges=e.valueRanges.map(i=>new q(i)),this.timeRanges=e.timeRanges.map(i=>new De(i))}}class ${constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"yAxisHiddenCode");t(this,"index");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.yAxisHiddenCode=e.yAxisHiddenCode,this.index=e.index}}class Le{constructor(e){t(this,"id");t(this,"value");t(this,"isCustom");this.id=e.id,this.value=e.value,this.isCustom=e.isCustom}}class Ve{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class U{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartOperandHiddenCode");t(this,"dataDefinitionId");t(this,"label");t(this,"labelDefault");t(this,"filterType");t(this,"filterValues");t(this,"filterDynamic");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartOperandHiddenCode=e.chartOperandHiddenCode,this.dataDefinitionId=e.dataDefinitionId,this.label=e.label,this.labelDefault=e.labelDefault,this.filterType=e.filterType,this.filterValues=e.filterValues.map(i=>new Le(i)),this.filterDynamic=e.filterDynamic,this.translations=e.translations.map(i=>new Ve(i))}}class B{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"dataDefinitionId");t(this,"hideLabel");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.dataDefinitionId=e.dataDefinitionId,this.hideLabel=e.hideLabel}}class G{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartSerieHiddenCode");t(this,"name");t(this,"aggregation");t(this,"modelId");t(this,"modelLabel");t(this,"dataCategoryId");t(this,"dataDefinitionId");t(this,"xAxisModifierHiddenCode");t(this,"yAxisModifierHiddenCode");t(this,"firstModifierHiddenCode");t(this,"secondModifierHiddenCode");t(this,"index");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartSerieHiddenCode=e.chartSerieHiddenCode,this.name=e.name,this.aggregation=e.aggregation??void 0,this.modelId=e.modelId,this.modelLabel=e.modelLabel,this.dataCategoryId=e.dataCategoryId,this.dataDefinitionId=e.dataDefinitionId,this.xAxisModifierHiddenCode=e.xAxisModifierHiddenCode,this.yAxisModifierHiddenCode=e.yAxisModifierHiddenCode,this.firstModifierHiddenCode=e.firstModifierHiddenCode,this.secondModifierHiddenCode=e.secondModifierHiddenCode,this.index=e.index}}class we{constructor(e){t(this,"languageCode");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");this.languageCode=e.languageCode,this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel}}class T{constructor(e){t(this,"use");t(this,"value");t(this,"unit");this.use=e.use,this.value=e.value,this.unit=e.unit}}class E{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartPlotHiddenCode");t(this,"serieType");t(this,"plotPer");t(this,"shift");t(this,"step");t(this,"stacked");t(this,"offsets");t(this,"useOperation");t(this,"operation");t(this,"operationUnit");t(this,"operationGrouped");t(this,"useTrendLine");t(this,"planningType");t(this,"timeInterval");t(this,"useLimit");t(this,"limit");t(this,"heatRule");t(this,"minColor");t(this,"minValue");t(this,"maxColor");t(this,"maxValue");t(this,"heatRanges");t(this,"fixedColor");t(this,"icon");t(this,"decimalPlaces");t(this,"displayAs");t(this,"hideLabels");t(this,"useOther");t(this,"otherThreshold");t(this,"baseBreakdown");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");t(this,"labelDefault");t(this,"xAxisLabelDefault");t(this,"yAxisLabelDefault");t(this,"translations");var i,o;this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartPlotHiddenCode=e.chartPlotHiddenCode,this.serieType=e.serieType,this.plotPer=e.plotPer,this.shift=e.shift?new T(e.shift):void 0,this.step=e.step?new T(e.step):void 0,this.stacked=e.stacked,this.offsets=e.offsets,this.useOperation=e.useOperation,this.operation=e.operation,this.operationUnit=e.operationUnit,this.operationGrouped=e.operationGrouped,this.useTrendLine=e.useTrendLine,this.planningType=e.planningType,this.timeInterval=e.timeInterval,this.useLimit=e.useLimit,this.limit=e.limit,this.heatRule=e.heatRule,this.minColor=e.minColor,this.minValue=e.minValue,this.maxColor=e.maxColor,this.maxValue=e.maxValue,this.heatRanges=(i=e.heatRanges)==null?void 0:i.map(r=>new q(r)),this.fixedColor=e.fixedColor,this.icon=e.icon,this.decimalPlaces=e.decimalPlaces,this.displayAs=e.displayAs,this.hideLabels=e.hideLabels,this.useOther=e.useOther,this.otherThreshold=e.otherThreshold,this.baseBreakdown=e.baseBreakdown,this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel,this.labelDefault=e.labelDefault,this.xAxisLabelDefault=e.xAxisLabelDefault,this.yAxisLabelDefault=e.yAxisLabelDefault,this.translations=(o=e.translations)==null?void 0:o.map(r=>new we(r))}}class I extends M{constructor(i){super(i);t(this,"labelDefault");t(this,"titleDefault");t(this,"colorSet");t(this,"colorSeed");t(this,"xAxis");t(this,"aggregates");t(this,"dynamicVariables");t(this,"chartVariables");t(this,"chartPresets");t(this,"chartPresetFilters");t(this,"chartPlots");t(this,"chartSeries");t(this,"chartOperands");t(this,"chartFilters");t(this,"chartModifiers");t(this,"yAxis");t(this,"translations");this.labelDefault=i.labelDefault,this.titleDefault=i.titleDefault,this.colorSet=i.colorSet,this.colorSeed=i.colorSeed,this.xAxis=i.xAxis?new g(i.xAxis):null,this.aggregates=i.aggregates,this.dynamicVariables=i.dynamicVariables,this.chartVariables=i.chartVariables.map(o=>new _(o)),this.chartPresets=i.chartPresets.map(o=>new N(o)),this.chartPresetFilters=i.chartPresetFilters.map(o=>new H(o)),this.chartPlots=i.chartPlots.map(o=>new $(o)),this.chartSeries=i.chartSeries.map(o=>new E(o)),this.chartOperands=i.chartOperands.map(o=>new G(o)),this.chartFilters=i.chartFilters.map(o=>new U(o)),this.chartModifiers=i.chartModifiers.map(o=>new B(o)),this.yAxis=i.yAxis.map(o=>new g(o)),this.translations=i.translations.map(o=>new k(o))}}class j{constructor(e){t(this,"id");t(this,"imageId");t(this,"chartId");t(this,"organisationId");t(this,"chartCategoryId");t(this,"chartCategoryLabel");t(this,"scope");t(this,"label");t(this,"title");t(this,"code");t(this,"icon");t(this,"tags");t(this,"multiple");t(this,"chartType");t(this,"modelsLabels");this.id=e.id,this.imageId=e.imageId,this.chartId=e.chartId,this.organisationId=e.organisationId,this.chartCategoryId=e.chartCategoryId,this.chartCategoryLabel=e.chartCategoryLabel,this.scope=e.scope,this.label=e.label,this.title=e.title,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.multiple=e.multiple,this.chartType=e.chartType,this.modelsLabels=e.modelsLabels.map(i=>new R(i))}}class x extends j{constructor(i){super(i);t(this,"labelDefault");t(this,"titleDefault");t(this,"colorSet");t(this,"colorSeed");t(this,"xAxis");t(this,"aggregates");t(this,"dynamicVariables");t(this,"chartVariables");t(this,"chartPresets");t(this,"chartPresetFilters");t(this,"chartPlots");t(this,"chartSeries");t(this,"chartOperands");t(this,"chartModifiers");t(this,"chartFilters");t(this,"yAxis");t(this,"translations");this.labelDefault=i.labelDefault,this.titleDefault=i.titleDefault,this.colorSet=i.colorSet,this.colorSeed=i.colorSeed,this.xAxis=i.xAxis?new g(i.xAxis):null,this.aggregates=i.aggregates,this.dynamicVariables=i.dynamicVariables,this.chartVariables=i.chartVariables.map(o=>new _(o)),this.chartPresets=i.chartPresets.map(o=>new N(o)),this.chartPresetFilters=i.chartPresetFilters.map(o=>new H(o)),this.chartPlots=i.chartPlots.map(o=>new $(o)),this.chartSeries=i.chartSeries.map(o=>new E(o)),this.chartOperands=i.chartOperands.map(o=>new G(o)),this.chartModifiers=i.chartModifiers.map(o=>new B(o)),this.chartFilters=i.chartFilters.map(o=>new U(o)),this.yAxis=i.yAxis.map(o=>new g(o)),this.translations=i.translations.map(o=>new k(o))}}const z=()=>`${P()}/chart-organisations`,Y=l=>`${z()}/${encodeURIComponent(l)}`,J=()=>`${P()}/chart-organisation-types`,K=l=>`${J()}/${encodeURIComponent(l)}`,Pe=new d("chartOrganisationType",I).createComplete(J,K,M),He=new d("chartOrganisationType",I).create(l=>l.build(l.addNotify(e=>({...d.addCustom("duplicate",(i,o)=>i.patch(K(o)),i=>{const o=new I(i);return e.notify("update",o),o})})))),Re=C.getMany(Pe);C.custom(He.duplicate);const Me=new d("chartOrganisation",x).createComplete(z,Y,j),_e=new d("chartOrganisation",x).create(l=>l.build(l.addNotify(e=>({...d.addCustom("duplicate",(i,o)=>i.patch(Y(o)),i=>{const o=new x(i);return e.notify("update",o),o})})))),Ne=C.getMany(Me);C.custom(_e.duplicate);const Q=se({name:"FSAutocompleteChart",components:{FSAutocompleteField:Ce,FSButton:V,FSChip:be,FSIcon:w},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:m.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(l,{emit:e}){const{getMany:i,fetching:o,entities:r}=Re(),{getMany:S,fetching:c,entities:b}=Ne(),{$tr:a}=me(),y=f(()=>r.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:m.OrganisationType})).concat(b.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:m.Organisation})))),X=f(()=>le.value&&(o.value||c.value)),Z=f(()=>l.multiple&&l.modelValue?a("ui.autocomplete-chart.placeholder","{0} chart(s) selected",l.modelValue.length):null),ee=n=>{Array.isArray(n)?(e("update:modelValue",n.map(s=>s.id)),e("update:type",n.map(s=>s.type))):(e("update:modelValue",n==null?void 0:n.id),e("update:type",n==null?void 0:n.type))},te=n=>{const s=[];return l.ignoreChartOrganisationTypes||s.push(i({...l.chartOrganisationTypeFilters,search:n??void 0})),l.ignoreChartOrganisations||s.push(S({...l.chartOrganisationFilters,search:n??void 0})),Promise.all(s)},{toggleSet:ie,init:le,onUpdate:oe}=pe(y,[()=>l.chartOrganisationTypeFilters,()=>l.chartOrganisationFilters],e,te,ee);return{placeholder:Z,toggleSet:ie,loading:X,charts:y,chartOriginColor:ye,chartOriginLabel:fe,onUpdate:oe}}});function ke(l,e,i,o,r,S){const c=A("FSChip"),b=A("FSAutocompleteField");return O(),F(b,re({toggleSet:!l.$props.toggleSetDisabled&&l.toggleSet,multiple:l.$props.multiple,placeholder:l.placeholder,loading:l.loading,items:l.charts,modelValue:l.$props.modelValue,"onUpdate:modelValue":l.onUpdate},l.$attrs),{"item-prepend":h(({item:a})=>[a.icon?(O(),F(w,{key:0},{default:h(()=>[de(he(a.icon),1)]),_:2},1024)):ce("",!0)]),"item-append":h(({item:a})=>[p(c,{color:l.chartOriginColor(a.type),label:l.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":h(a=>[p(V,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:ge(a.getClass(a.item)),label:a.item.label,onClick:y=>a.toggle(a.item)},ue({_:2},[a.item.type?{name:"append",fn:h(()=>[p(c,{color:l.chartOriginColor(a.item.type),label:l.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const W=Ie(Q,[["render",ke]]);Q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const ai={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:W,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(l,{argTypes:e})=>({components:{FSAutocompleteChart:W,FSCol:xe},props:Object.keys(e),setup(){return{...l}},template:`
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
    </FSCol>`})};var v,D,L;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(D=u.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const ni=["Variations"];export{u as Variations,ni as __namedExportsOrder,ai as default};
