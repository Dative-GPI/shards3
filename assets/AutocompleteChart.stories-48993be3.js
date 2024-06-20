import{f as rt,g as R,D as _,E as g,F as f,G as a,x as ht,K as y,L as b,I as w,P as h,X as ct}from"./vue.esm-bundler-a0893183.js";import{F as dt}from"./FSAutocompleteField-6360297d.js";import{F as U}from"./FSButton-29e96b8a.js";import{F as ut}from"./FSChip-db263eca.js";import{_ as A}from"./FSIcon-9d61ed62.js";import{_ as v}from"./FSSpan-4daadeb4.js";import{_ as V}from"./FSRow-821d23a1.js";import{C as q}from"./base-168b8f74.js";import{S as c}from"./serviceFactory-2dfad3af.js";import{C as m}from"./composableFactory-2d4a69cc.js";import{C as I}from"./useColors-6c375bb5.js";import{u as gt}from"./useTranslations-95b4a686.js";import{u as ft}from"./useAutocomplete-cc546bbe.js";import{_ as yt}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as bt}from"./FSCol-e45ac157.js";import"./FSSearchField-e802dd1a.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./theme-41eca2c8.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSClickable-550391c2.js";import"./useAppOrganisationId-a0837ade.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";class O{constructor(t){this.id=t.id,this.chartPresetId=t.chartPresetId,this.chartPresetLabel=t.chartPresetLabel,this.chartFilterId=t.chartFilterId,this.chartFilterLabel=t.chartFilterLabel}}class H{constructor(t){this.id=t.id,this.label=t.label}}class B{constructor(t){this.id=t.id,this.imageId=t.imageId,this.chartId=t.chartId,this.organisationTypeId=t.organisationTypeId,this.organisationTypeLabel=t.organisationTypeLabel,this.chartCategoryId=t.chartCategoryId,this.chartCategoryLabel=t.chartCategoryLabel,this.scope=t.scope,this.label=t.label,this.title=t.title,this.code=t.code,this.icon=t.icon,this.tags=t.tags.slice(),this.multiple=t.multiple,this.chartType=t.chartType,this.modelsLabels=t.modelsLabels.map(i=>new H(i))}}class pt{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class E{constructor(t){this.id=t.id,this.chartId=t.chartId,this.label=t.label,this.labelDefault=t.labelDefault,this.code=t.code,this.valueDefault=t.valueDefault,this.translations=t.translations.map(i=>new pt(i))}}class Ct{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class G{constructor(t){this.id=t.id,this.chartId=t.chartId,this.label=t.label,this.labelDefault=t.labelDefault,this.icon=t.icon,this.chartFilters=t.chartFilters.map(i=>new O(i)),this.translations=t.translations.map(i=>new Ct(i))}}class j{constructor(t){this.languageCode=t.languageCode,this.label=t.label,this.title=t.title}}class mt{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class Ot{constructor(t){this.startValue=t.startValue,this.endValue=t.endValue}}class Y extends Ot{constructor(t){super(t),this.color=t.color,this.opacity=t.opacity,this.label=t.label,this.labelDefault=t.labelDefault,this.translations=t.translations.map(i=>new mt(i))}}class Ft{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class St{constructor(t){this.startDay=t.startDay,this.startHour=t.startHour,this.startMinute=t.startMinute,this.endDay=t.endDay,this.endHour=t.endHour,this.endMinute=t.endMinute}}class wt extends St{constructor(t){super(t),this.color=t.color,this.opacity=t.opacity,this.label=t.label,this.labelDefault=t.labelDefault,this.translations=t.translations.map(i=>new Ft(i))}}var s=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(s||{}),z=(e=>(e[e.None=0]="None",e[e.Date=1]="Date",e[e.Value=2]="Value",e[e.Category=3]="Category",e))(z||{});class x{constructor(t){t==null?(this.type=z.None,this.logarithmic=!1,this.boundaries=!1,this.unit="",this.valueRanges=[],this.timeRanges=[]):(this.type=t.type,this.logarithmic=t.logarithmic,this.boundaries=t.boundaries,this.min=t.min,this.max=t.max,this.unit=t.unit,this.valueRanges=t.valueRanges.map(i=>new Y(i)),this.timeRanges=t.timeRanges.map(i=>new wt(i)))}}class It{constructor(t){this.languageCode=t.languageCode,this.label=t.label,this.xAxisLabel=t.xAxisLabel,this.yAxisLabel=t.yAxisLabel}}class N{constructor(t){this.use=t.use,this.value=t.value,this.unit=t.unit}}class p{constructor(t){this.dataDefinitionId=t.dataDefinitionId,this.hideLabel=t.hideLabel}}class Tt{constructor(t){this.id=t.id,this.value=t.value,this.isCustom=t.isCustom}}class At{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class vt{constructor(t){this.id=t.id,this.dataDefinitionId=t.dataDefinitionId,this.label=t.label,this.labelDefault=t.labelDefault,this.filterType=t.filterType,this.filterValues=t.filterValues.map(i=>new Tt(i)),this.filterDynamic=t.filterDynamic,this.chartPresets=t.chartPresets.map(i=>new O(i)),this.translations=t.translations.map(i=>new At(i))}}class Vt{constructor(t){this.id=t.id,this.name=t.name,this.aggregation=t.aggregation??void 0,this.modelId=t.modelId,this.modelLabel=t.modelLabel,this.dataCategoryId=t.dataCategoryId,this.dataDefinitionId=t.dataDefinitionId,this.xAxis=t.xAxis?new p(t.xAxis):void 0,this.yAxis=t.yAxis?new p(t.yAxis):void 0,this.firstModifier=t.firstModifier?new p(t.firstModifier):void 0,this.secondModifier=t.secondModifier?new p(t.secondModifier):void 0,this.filters=t.filters.map(i=>new vt(i))}}class Dt{constructor(t){var i,n;this.id=t.id,this.chartPlotId=t.chartPlotId,this.serieType=t.serieType,this.plotPer=t.plotPer,this.shift=t.shift?new N(t.shift):void 0,this.step=t.step?new N(t.step):void 0,this.stacked=t.stacked,this.offsets=t.offsets,this.useOperation=t.useOperation,this.operation=t.operation,this.operationUnit=t.operationUnit,this.operationGrouped=t.operationGrouped,this.useTrendLine=t.useTrendLine,this.planningType=t.planningType,this.timeInterval=t.timeInterval,this.useLimit=t.useLimit,this.limit=t.limit,this.heatRule=t.heatRule,this.minColor=t.minColor,this.minValue=t.minValue,this.maxColor=t.maxColor,this.maxValue=t.maxValue,this.heatRanges=(i=t.heatRanges)==null?void 0:i.map(r=>new Y(r)),this.fixedColor=t.fixedColor,this.icon=t.icon,this.decimalPlaces=t.decimalPlaces,this.displayAs=t.displayAs,this.hideLabels=t.hideLabels,this.useOther=t.useOther,this.otherThreshold=t.otherThreshold,this.baseBreakdown=t.baseBreakdown,this.chartOperands=t.chartOperands.map(r=>new Vt(r)),this.label=t.label,this.xAxisLabel=t.xAxisLabel,this.yAxisLabel=t.yAxisLabel,this.labelDefault=t.labelDefault,this.xAxisLabelDefault=t.xAxisLabelDefault,this.yAxisLabelDefault=t.yAxisLabelDefault,this.translations=(n=t.translations)==null?void 0:n.map(r=>new It(r))}}class K{constructor(t){this.id=t.id,this.chartId=t.chartId,this.yAxis=t.yAxis?new x(t.yAxis):void 0,this.chartSeries=t.chartSeries.map(i=>new Dt(i))}}class D extends B{constructor(t){super(t),this.labelDefault=t.labelDefault,this.titleDefault=t.titleDefault,this.colorSet=t.colorSet,this.colorSeed=t.colorSeed,this.xAxis=t.xAxis?new x(t.xAxis):null,this.aggregates=t.aggregates,this.dynamicVariables=t.dynamicVariables,this.chartVariables=t.chartVariables.map(i=>new E(i)),this.chartPresets=t.chartPresets.map(i=>new G(i)),this.chartPresetFilters=t.chartPresetFilters.map(i=>new O(i)),this.chartPlots=t.chartPlots.map(i=>new K(i)),this.translations=t.translations.map(i=>new j(i))}}class W{constructor(t){this.id=t.id,this.imageId=t.imageId,this.chartId=t.chartId,this.organisationId=t.organisationId,this.chartCategoryId=t.chartCategoryId,this.chartCategoryLabel=t.chartCategoryLabel,this.scope=t.scope,this.label=t.label,this.title=t.title,this.code=t.code,this.icon=t.icon,this.tags=t.tags.slice(),this.multiple=t.multiple,this.chartType=t.chartType,this.modelsLabels=t.modelsLabels.map(i=>new H(i))}}class L extends W{constructor(t){super(t),this.labelDefault=t.labelDefault,this.titleDefault=t.titleDefault,this.colorSet=t.colorSet,this.colorSeed=t.colorSeed,this.xAxis=t.xAxis?new x(t.xAxis):null,this.aggregates=t.aggregates,this.dynamicVariables=t.dynamicVariables,this.chartVariables=t.chartVariables.map(i=>new E(i)),this.chartPresets=t.chartPresets.map(i=>new G(i)),this.chartPresetFilters=t.chartPresetFilters.map(i=>new O(i)),this.chartPlots=t.chartPlots.map(i=>new K(i)),this.translations=t.translations.map(i=>new j(i))}}const X=()=>`${q()}/chart-organisations`,J=e=>`${X()}/${encodeURIComponent(e)}`,Q=()=>`${q()}/chart-organisation-types`,Z=e=>`${Q()}/${encodeURIComponent(e)}`,Lt=new c("chartOrganisationType",D).createComplete(Q,Z,B),xt=new c("chartOrganisationType",D).create(e=>e.build(e.addNotify(t=>({...c.addCustom("chartOrganisationType",(i,n)=>i.patch(Z(n)),i=>{const n=new D(i);return t.notify("update",n),n})})))),Pt=m.getMany(Lt);m.custom(xt.chartOrganisationType);const Rt=new c("chartOrganisation",L).createComplete(X,J,W),_t=new c("chartOrganisation",L).create(e=>e.build(e.addNotify(t=>({...c.addCustom("chartOrganisation",(i,n)=>i.patch(J(n)),i=>{const n=new L(i);return t.notify("update",n),n})})))),Nt=m.getMany(Rt);m.custom(_t.chartOrganisation);const{$tr:T}=gt(),Mt=e=>{switch(e){case s.None:return T("ui.chart-type.none","None");case s.Organisation:return T("ui.chart-type.organisation","Custom");case s.OrganisationType:return T("ui.chart-type.organisation-type","Shared")}},$t=e=>{switch(e){case s.None:return I.Error;case s.Organisation:return I.Primary;case s.OrganisationType:return I.Warning}},tt=rt({name:"FSAutocompleteChart",components:{FSAutocompleteField:dt,FSButton:U,FSChip:ut,FSIcon:A,FSSpan:v,FSRow:V},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:s.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=Pt(),{getMany:P,fetching:d,entities:F}=Nt(),o=R(()=>r.value.map(l=>({id:l.id,icon:l.icon,label:l.label,type:s.OrganisationType})).concat(F.value.map(l=>({id:l.id,icon:l.icon,label:l.label,type:s.Organisation})))),u=R(()=>at.value&&(n.value||d.value)),it=l=>{Array.isArray(l)?(t("update:modelValue",l.map(S=>S.id)),t("update:type",l.map(S=>S.type))):(t("update:modelValue",l==null?void 0:l.id),t("update:type",l==null?void 0:l.type))},ot=l=>Promise.all([i({...e.chartOrganisationTypeFilters,search:l??void 0}),P({...e.chartOrganisationFilters,search:l??void 0})]),{toggleSet:lt,search:nt,init:at,onUpdate:st}=ft(o,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],t,ot,it);return{toggleSet:lt,loading:u,search:nt,charts:o,chartOriginColor:$t,chartOriginLabel:Mt,onUpdate:st}}});function kt(e,t,i,n,r,P){const d=_("FSChip"),F=_("FSAutocompleteField");return g(),f(F,ht({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(g(),f(V,{key:0,align:"center-center",wrap:!1},{default:a(()=>[o.raw.icon?(g(),f(A,{key:0},{default:a(()=>[y(b(o.raw.icon),1)]),_:2},1024)):w("",!0),h(v,null,{default:a(()=>[y(b(o.raw.label),1)]),_:2},1024),h(d,{color:e.chartOriginColor(o.raw.type),label:e.chartOriginLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):w("",!0)]),"item-label":a(({item:o,font:u})=>[h(V,{align:"center-left",wrap:!1},{default:a(()=>[o.raw.icon?(g(),f(A,{key:0},{default:a(()=>[y(b(o.raw.icon),1)]),_:2},1024)):w("",!0),h(v,{font:u},{default:a(()=>[y(b(o.raw.label),1)]),_:2},1032,["font"]),h(d,{color:e.chartOriginColor(o.raw.type),label:e.chartOriginLabel(o.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":a(o=>[h(U,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:ct(o.getClass(o.item)),label:o.item.label,onClick:u=>o.toggle(o.item)},{append:a(()=>[h(d,{color:e.chartOriginColor(o.item.type),label:e.chartOriginLabel(o.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const et=yt(tt,[["render",kt]]);tt.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const ci={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:et,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:t})=>({components:{FSAutocompleteChart:et,FSCol:bt},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var M,$,k;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=($=C.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const di=["Variations"];export{C as Variations,di as __namedExportsOrder,ci as default};