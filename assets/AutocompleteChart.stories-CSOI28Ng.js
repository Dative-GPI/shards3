import{d as _,c as m,y as f,z as C,A as b,B as l,m as M,E as j,G as I,D as L,L as u,M as U,P}from"./vue.esm-bundler-CxS4_7kK.js";import{F as z}from"./FSAutocompleteField-DDSyQXPr.js";import{F as O}from"./FSButton-D4qgd2ja.js";import{F as E}from"./FSChip-Dvm8S3l9.js";import{F as V}from"./FSIcon-DKHuRfPI.js";import{u as G}from"./useChartOrganisationTypes-DiDxGEby.js";import{u as x}from"./useChartOrganisations-C5RkPYWI.js";import{c as H,a as J}from"./charts-tWVze332.js";import{C as d}from"./charts-BPLoyxCB.js";import{u as K}from"./useAutocomplete-Crlbd48I.js";import{u as Q}from"./useTranslations-ZMyFjr19.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSCol-Co9r7Klj.js";import"./FSSearchField-jGkYIgq2.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSRow-D546kqFt.js";import"./css-D18ueKtB.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./VSpacer-DaRxrr8q.js";import"./color-DpQhyQC8.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSDialogMenu-1exdynOQ.js";import"./FSCard-uGx4g-q0.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-Cseplt4t.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./FSCheckbox-BJ0zq37S.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-D40FnrcD.js";import"./FSLoader-BMQDJgx0.js";import"./elevation-8SXivnh1.js";import"./FSRadio-Ca4jzJ0S.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-CEzGyfN4.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSClickable-xECbCdT3.js";import"./chartSerie-IzOK_6i2.js";import"./timeRange-DtWQBHMx.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";const A=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:z,FSButton:O,FSChip:E,FSIcon:V},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:d.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:g,fetching:c,entities:h}=G(),{getMany:y,fetching:i,entities:p}=x(),{$tr:t}=Q(),s=m(()=>h.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.OrganisationType})).concat(p.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:d.Organisation})))),q=m(()=>B.value&&(c.value||i.value)),w=m(()=>e.multiple&&e.modelValue?t("ui.autocomplete-chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),k=a=>{Array.isArray(a)?(o("update:modelValue",a.map(r=>r.id)),o("update:type",a.map(r=>r.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},$=a=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(g({...e.chartOrganisationTypeFilters,search:a??void 0})),e.ignoreChartOrganisations||r.push(y({...e.chartOrganisationFilters,search:a??void 0})),Promise.all(r)},{toggleSet:D,init:B,onUpdate:N}=K(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,$,k);return{placeholder:w,toggleSet:D,loading:q,charts:s,chartOriginColor:H,chartOriginLabel:J,onUpdate:N}}});function X(e,o,g,c,h,y){const i=f("FSChip"),p=f("FSAutocompleteField");return C(),b(p,M({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:t})=>[t.icon?(C(),b(V,{key:0},{default:l(()=>[j(I(t.icon),1)]),_:2},1024)):L("",!0)]),"item-append":l(({item:t})=>[u(i,{color:e.chartOriginColor(t.type),label:e.chartOriginLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(t=>[u(O,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:P(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},U({_:2},[t.item.type?{name:"append",fn:l(()=>[u(i,{color:e.chartOriginColor(t.item.type),label:e.chartOriginLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const T=R(A,[["render",X]]);A.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const qt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:T,FSCol:W},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const wt=["Variations"];export{n as Variations,wt as __namedExportsOrder,qt as default};
