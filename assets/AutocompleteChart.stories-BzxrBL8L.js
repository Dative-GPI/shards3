var ce=Object.defineProperty;var he=(i,e,l)=>e in i?ce(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l;var t=(i,e,l)=>he(i,typeof e!="symbol"?e+"":e,l);import{d as de,c as _,y as N,z as b,A as f,B as s,m as ue,E as y,G as p,D,I as h,S as ge}from"./vue.esm-bundler-DC82FEWN.js";import{F as be}from"./FSAutocompleteField-iSfPzHk1.js";import{F as q}from"./FSButton-DQTNQ7w6.js";import{F as fe}from"./FSChip-A49gs7Y6.js";import{_ as T}from"./FSIcon-2B0NN_at.js";import{_ as L}from"./FSSpan-CwfDYIua.js";import{_ as x}from"./FSRow-DoCXWKDP.js";import{C as H}from"./base-CMiH1YbJ.js";import{S as d}from"./serviceFactory-Bd5jifNi.js";import{C as I}from"./composableFactory-J8cSLWf9.js";import{C as w}from"./useColors-ATxZ3nb1.js";import{u as ye}from"./useTranslations-DV-taHAL.js";import{u as pe}from"./useAutocomplete-BV7te6qQ.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as me}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DejeNnVl.js";import"./FSTextField-CIgddAfu.js";import"./FSBaseField-3fq9JEyD.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./theme-DMal9AfS.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./VIcon-C6jgSf5f.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./VProgressCircular-BvwZAexL.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./FSDialogMenu-DmBV7Mf4.js";import"./FSCard-DJrzS8t_.js";import"./css-DYOPUjjE.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-CgnmC9k2.js";import"./FSRadio-Czfn0-vM.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-D76-MhYq.js";import"./FSSlideGroup-Buay-X2i.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-BG-AaJX-.js";import"./FSCheckbox-C9nNPPnZ.js";import"./FSFadeOut-7Ilw0XG1.js";import"./FSLoader-B1rWpyEr.js";import"./elevation-xgrzvMGW.js";import"./VSelect-D7F3d6A4.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./FSClickable-Bk5I2JN4.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class S{constructor(e){t(this,"id");t(this,"chartPresetId");t(this,"chartPresetLabel");t(this,"chartFilterId");t(this,"chartFilterLabel");this.id=e.id,this.chartPresetId=e.chartPresetId,this.chartPresetLabel=e.chartPresetLabel,this.chartFilterId=e.chartFilterId,this.chartFilterLabel=e.chartFilterLabel}}class B{constructor(e){t(this,"id");t(this,"label");this.id=e.id,this.label=e.label}}class G{constructor(e){t(this,"id");t(this,"imageId");t(this,"chartId");t(this,"organisationTypeId");t(this,"organisationTypeLabel");t(this,"chartCategoryId");t(this,"chartCategoryLabel");t(this,"scope");t(this,"label");t(this,"title");t(this,"code");t(this,"icon");t(this,"tags");t(this,"multiple");t(this,"chartType");t(this,"modelsLabels");this.id=e.id,this.imageId=e.imageId,this.chartId=e.chartId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.chartCategoryId=e.chartCategoryId,this.chartCategoryLabel=e.chartCategoryLabel,this.scope=e.scope,this.label=e.label,this.title=e.title,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.multiple=e.multiple,this.chartType=e.chartType,this.modelsLabels=e.modelsLabels.map(l=>new B(l))}}class Ie{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class E{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"label");t(this,"labelDefault");t(this,"code");t(this,"valueDefault");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.code=e.code,this.valueDefault=e.valueDefault,this.translations=e.translations.map(l=>new Ie(l))}}class Se{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class j{constructor(e){t(this,"id");t(this,"chartId");t(this,"label");t(this,"labelDefault");t(this,"icon");t(this,"chartFilters");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.label=e.label,this.labelDefault=e.labelDefault,this.icon=e.icon,this.chartFilters=e.chartFilters.map(l=>new S(l)),this.translations=e.translations.map(l=>new Se(l))}}class z{constructor(e){t(this,"languageCode");t(this,"label");t(this,"title");this.languageCode=e.languageCode,this.label=e.label,this.title=e.title}}class Fe{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class Oe{constructor(e){t(this,"startValue");t(this,"endValue");this.startValue=e.startValue,this.endValue=e.endValue}}class Y extends Oe{constructor(l){super(l);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=l.color,this.opacity=l.opacity,this.label=l.label,this.labelDefault=l.labelDefault,this.translations=l.translations.map(a=>new Fe(a))}}class De{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class we{constructor(e){t(this,"startDay");t(this,"startHour");t(this,"startMinute");t(this,"endDay");t(this,"endHour");t(this,"endMinute");this.startDay=e.startDay,this.startHour=e.startHour,this.startMinute=e.startMinute,this.endDay=e.endDay,this.endHour=e.endHour,this.endMinute=e.endMinute}}class Ae extends we{constructor(l){super(l);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=l.color,this.opacity=l.opacity,this.label=l.label,this.labelDefault=l.labelDefault,this.translations=l.translations.map(a=>new De(a))}}var r=(i=>(i[i.None=0]="None",i[i.Organisation=1]="Organisation",i[i.OrganisationType=2]="OrganisationType",i))(r||{}),W=(i=>(i[i.None=0]="None",i[i.Date=1]="Date",i[i.Value=2]="Value",i[i.Category=3]="Category",i))(W||{});class P{constructor(e){t(this,"type");t(this,"logarithmic");t(this,"boundaries");t(this,"min");t(this,"max");t(this,"unit");t(this,"valueRanges");t(this,"timeRanges");e==null?(this.type=W.None,this.logarithmic=!1,this.boundaries=!1,this.unit="",this.valueRanges=[],this.timeRanges=[]):(this.type=e.type,this.logarithmic=e.logarithmic,this.boundaries=e.boundaries,this.min=e.min,this.max=e.max,this.unit=e.unit,this.valueRanges=e.valueRanges.map(l=>new Y(l)),this.timeRanges=e.timeRanges.map(l=>new Ae(l)))}}class Te{constructor(e){t(this,"languageCode");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");this.languageCode=e.languageCode,this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel}}class M{constructor(e){t(this,"use");t(this,"value");t(this,"unit");this.use=e.use,this.value=e.value,this.unit=e.unit}}class C{constructor(e){t(this,"dataDefinitionId");t(this,"hideLabel");this.dataDefinitionId=e.dataDefinitionId,this.hideLabel=e.hideLabel}}class Le{constructor(e){t(this,"id");t(this,"value");t(this,"isCustom");this.id=e.id,this.value=e.value,this.isCustom=e.isCustom}}class xe{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class Ve{constructor(e){t(this,"id");t(this,"dataDefinitionId");t(this,"label");t(this,"labelDefault");t(this,"filterType");t(this,"filterValues");t(this,"filterDynamic");t(this,"chartPresets");t(this,"translations");this.id=e.id,this.dataDefinitionId=e.dataDefinitionId,this.label=e.label,this.labelDefault=e.labelDefault,this.filterType=e.filterType,this.filterValues=e.filterValues.map(l=>new Le(l)),this.filterDynamic=e.filterDynamic,this.chartPresets=e.chartPresets.map(l=>new S(l)),this.translations=e.translations.map(l=>new xe(l))}}class ve{constructor(e){t(this,"id");t(this,"name");t(this,"aggregation");t(this,"modelId");t(this,"modelLabel");t(this,"dataCategoryId");t(this,"dataDefinitionId");t(this,"xAxis");t(this,"yAxis");t(this,"firstModifier");t(this,"secondModifier");t(this,"filters");this.id=e.id,this.name=e.name,this.aggregation=e.aggregation??void 0,this.modelId=e.modelId,this.modelLabel=e.modelLabel,this.dataCategoryId=e.dataCategoryId,this.dataDefinitionId=e.dataDefinitionId,this.xAxis=e.xAxis?new C(e.xAxis):void 0,this.yAxis=e.yAxis?new C(e.yAxis):void 0,this.firstModifier=e.firstModifier?new C(e.firstModifier):void 0,this.secondModifier=e.secondModifier?new C(e.secondModifier):void 0,this.filters=e.filters.map(l=>new Ve(l))}}class Pe{constructor(e){t(this,"id");t(this,"chartPlotId");t(this,"serieType");t(this,"plotPer");t(this,"shift");t(this,"step");t(this,"stacked");t(this,"offsets");t(this,"useOperation");t(this,"operation");t(this,"operationUnit");t(this,"operationGrouped");t(this,"useTrendLine");t(this,"planningType");t(this,"timeInterval");t(this,"useLimit");t(this,"limit");t(this,"heatRule");t(this,"minColor");t(this,"minValue");t(this,"maxColor");t(this,"maxValue");t(this,"heatRanges");t(this,"fixedColor");t(this,"icon");t(this,"decimalPlaces");t(this,"displayAs");t(this,"hideLabels");t(this,"useOther");t(this,"otherThreshold");t(this,"baseBreakdown");t(this,"chartOperands");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");t(this,"labelDefault");t(this,"xAxisLabelDefault");t(this,"yAxisLabelDefault");t(this,"translations");var l,a;this.id=e.id,this.chartPlotId=e.chartPlotId,this.serieType=e.serieType,this.plotPer=e.plotPer,this.shift=e.shift?new M(e.shift):void 0,this.step=e.step?new M(e.step):void 0,this.stacked=e.stacked,this.offsets=e.offsets,this.useOperation=e.useOperation,this.operation=e.operation,this.operationUnit=e.operationUnit,this.operationGrouped=e.operationGrouped,this.useTrendLine=e.useTrendLine,this.planningType=e.planningType,this.timeInterval=e.timeInterval,this.useLimit=e.useLimit,this.limit=e.limit,this.heatRule=e.heatRule,this.minColor=e.minColor,this.minValue=e.minValue,this.maxColor=e.maxColor,this.maxValue=e.maxValue,this.heatRanges=(l=e.heatRanges)==null?void 0:l.map(c=>new Y(c)),this.fixedColor=e.fixedColor,this.icon=e.icon,this.decimalPlaces=e.decimalPlaces,this.displayAs=e.displayAs,this.hideLabels=e.hideLabels,this.useOther=e.useOther,this.otherThreshold=e.otherThreshold,this.baseBreakdown=e.baseBreakdown,this.chartOperands=e.chartOperands.map(c=>new ve(c)),this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel,this.labelDefault=e.labelDefault,this.xAxisLabelDefault=e.xAxisLabelDefault,this.yAxisLabelDefault=e.yAxisLabelDefault,this.translations=(a=e.translations)==null?void 0:a.map(c=>new Te(c))}}class J{constructor(e){t(this,"id");t(this,"chartId");t(this,"yAxis");t(this,"chartSeries");this.id=e.id,this.chartId=e.chartId,this.yAxis=e.yAxis?new P(e.yAxis):void 0,this.chartSeries=e.chartSeries.map(l=>new Pe(l))}}class V extends G{constructor(l){super(l);t(this,"labelDefault");t(this,"titleDefault");t(this,"colorSet");t(this,"colorSeed");t(this,"xAxis");t(this,"aggregates");t(this,"dynamicVariables");t(this,"chartVariables");t(this,"chartPresets");t(this,"chartPresetFilters");t(this,"chartPlots");t(this,"translations");this.labelDefault=l.labelDefault,this.titleDefault=l.titleDefault,this.colorSet=l.colorSet,this.colorSeed=l.colorSeed,this.xAxis=l.xAxis?new P(l.xAxis):null,this.aggregates=l.aggregates,this.dynamicVariables=l.dynamicVariables,this.chartVariables=l.chartVariables.map(a=>new E(a)),this.chartPresets=l.chartPresets.map(a=>new j(a)),this.chartPresetFilters=l.chartPresetFilters.map(a=>new S(a)),this.chartPlots=l.chartPlots.map(a=>new J(a)),this.translations=l.translations.map(a=>new z(a))}}class K{constructor(e){t(this,"id");t(this,"imageId");t(this,"chartId");t(this,"organisationId");t(this,"chartCategoryId");t(this,"chartCategoryLabel");t(this,"scope");t(this,"label");t(this,"title");t(this,"code");t(this,"icon");t(this,"tags");t(this,"multiple");t(this,"chartType");t(this,"modelsLabels");this.id=e.id,this.imageId=e.imageId,this.chartId=e.chartId,this.organisationId=e.organisationId,this.chartCategoryId=e.chartCategoryId,this.chartCategoryLabel=e.chartCategoryLabel,this.scope=e.scope,this.label=e.label,this.title=e.title,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.multiple=e.multiple,this.chartType=e.chartType,this.modelsLabels=e.modelsLabels.map(l=>new B(l))}}class v extends K{constructor(l){super(l);t(this,"labelDefault");t(this,"titleDefault");t(this,"colorSet");t(this,"colorSeed");t(this,"xAxis");t(this,"aggregates");t(this,"dynamicVariables");t(this,"chartVariables");t(this,"chartPresets");t(this,"chartPresetFilters");t(this,"chartPlots");t(this,"translations");this.labelDefault=l.labelDefault,this.titleDefault=l.titleDefault,this.colorSet=l.colorSet,this.colorSeed=l.colorSeed,this.xAxis=l.xAxis?new P(l.xAxis):null,this.aggregates=l.aggregates,this.dynamicVariables=l.dynamicVariables,this.chartVariables=l.chartVariables.map(a=>new E(a)),this.chartPresets=l.chartPresets.map(a=>new j(a)),this.chartPresetFilters=l.chartPresetFilters.map(a=>new S(a)),this.chartPlots=l.chartPlots.map(a=>new J(a)),this.translations=l.translations.map(a=>new z(a))}}const Q=()=>`${H()}/chart-organisations`,X=i=>`${Q()}/${encodeURIComponent(i)}`,Z=()=>`${H()}/chart-organisation-types`,ee=i=>`${Z()}/${encodeURIComponent(i)}`,Re=new d("chartOrganisationType",V).createComplete(Z,ee,G),_e=new d("chartOrganisationType",V).create(i=>i.build(i.addNotify(e=>({...d.addCustom("duplicate",(l,a)=>l.patch(ee(a)),l=>{const a=new V(l);return e.notify("update",a),a})})))),Ne=I.getMany(Re);I.custom(_e.duplicate);const Me=new d("chartOrganisation",v).createComplete(Q,X,K),ke=new d("chartOrganisation",v).create(i=>i.build(i.addNotify(e=>({...d.addCustom("duplicate",(l,a)=>l.patch(X(a)),l=>{const a=new v(l);return e.notify("update",a),a})})))),$e=I.getMany(Me);I.custom(ke.duplicate);const{$tr:A}=ye(),Ue=i=>{switch(i){case r.None:return A("ui.chart-type.none","None");case r.Organisation:return A("ui.chart-type.organisation","Custom");case r.OrganisationType:return A("ui.chart-type.organisation-type","Shared")}},qe=i=>{switch(i){case r.None:return w.Error;case r.Organisation:return w.Primary;case r.OrganisationType:return w.Warning}},te=de({name:"FSAutocompleteChart",components:{FSAutocompleteField:be,FSButton:q,FSChip:fe,FSIcon:T,FSSpan:L,FSRow:x},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:r.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(i,{emit:e}){const{getMany:l,fetching:a,entities:c}=Ne(),{getMany:R,fetching:u,entities:F}=$e(),o=_(()=>c.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:r.OrganisationType})).concat(F.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:r.Organisation})))),g=_(()=>se.value&&(a.value||u.value)),le=n=>{Array.isArray(n)?(e("update:modelValue",n.map(O=>O.id)),e("update:type",n.map(O=>O.type))):(e("update:modelValue",n==null?void 0:n.id),e("update:type",n==null?void 0:n.type))},ae=n=>Promise.all([l({...i.chartOrganisationTypeFilters,search:n??void 0}),R({...i.chartOrganisationFilters,search:n??void 0})]),{toggleSet:oe,search:ne,init:se,onUpdate:re}=pe(o,[()=>i.chartOrganisationTypeFilters,()=>i.chartOrganisationFilters],e,ae,le);return{toggleSet:oe,loading:g,search:ne,charts:o,chartOriginColor:qe,chartOriginLabel:Ue,onUpdate:re}}});function He(i,e,l,a,c,R){const u=N("FSChip"),F=N("FSAutocompleteField");return b(),f(F,ue({toggleSet:!i.$props.toggleSetDisabled&&i.toggleSet,multiple:i.$props.multiple,loading:i.loading,items:i.charts,modelValue:i.$props.modelValue,"onUpdate:modelValue":i.onUpdate},i.$attrs),{"autocomplete-selection":s(({item:o})=>[i.$props.modelValue?(b(),f(x,{key:0,align:"center-center",wrap:!1},{default:s(()=>[o.raw.icon?(b(),f(T,{key:0},{default:s(()=>[y(p(o.raw.icon),1)]),_:2},1024)):D("",!0),h(L,null,{default:s(()=>[y(p(o.raw.label),1)]),_:2},1024),h(u,{color:i.chartOriginColor(o.raw.type),label:i.chartOriginLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):D("",!0)]),"item-label":s(({item:o,font:g})=>[h(x,{align:"center-left",wrap:!1},{default:s(()=>[o.raw.icon?(b(),f(T,{key:0},{default:s(()=>[y(p(o.raw.icon),1)]),_:2},1024)):D("",!0),h(L,{font:g},{default:s(()=>[y(p(o.raw.label),1)]),_:2},1032,["font"]),h(u,{color:i.chartOriginColor(o.raw.type),label:i.chartOriginLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":s(o=>[h(q,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:ge(o.getClass(o.item)),label:o.item.label,onClick:g=>o.toggle(o.item)},{append:s(()=>[h(u,{color:i.chartOriginColor(o.item.type),label:i.chartOriginLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const ie=Ce(te,[["render",He]]);te.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const hi={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:ie,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(i,{argTypes:e})=>({components:{FSAutocompleteChart:ie,FSCol:me},props:Object.keys(e),setup(){return{...i}},template:`
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
    </FSCol>`})};var k,$,U;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2
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
    </FSCol>\`
  })
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const di=["Variations"];export{m as Variations,di as __namedExportsOrder,hi as default};
