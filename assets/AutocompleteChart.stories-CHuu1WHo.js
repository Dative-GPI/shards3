import{d as M,c as u,A as b,B as F,D as l,j as _,I as S,J as U,K as L,G as P,P as d,C as E,E as z}from"./vue.esm-bundler-DSwHwgKw.js";import{F as G}from"./FSAutocompleteField-URe1p5_o.js";import{F as A}from"./FSButton-CN1ZIktz.js";import{F as J}from"./FSChip-CCuCpK86.js";import{F as T}from"./FSIcon-TpFvudaY.js";import{u as K}from"./useChartOrganisationTypes-CWTUnLok.js";import{u as H}from"./useChartOrganisations-OLe58m9-.js";import{a as g,b as Q,d as R}from"./chartsTools-Bvcwjd5E.js";import{u as W}from"./useAutocomplete-Djmc0I1i.js";import{u as X}from"./useTranslations-BhPzmPwL.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-DdGVae5t.js";import"./FSSearchField-izSr2Wf8.js";import"./FSTextField-CnPHb7kI.js";import"./FSBaseField-D2ow2gVm.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./FSRow-BtkEywPN.js";import"./css-XXwFKvUE.js";import"./useColors-C4EmrkDp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-4AjdAhIV.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./color-uBYwhjku.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./VIcon-CdjjMQ6V.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./VList-CvbK1pQh.js";import"./FSCard-Dby8iWqU.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./router-C4I-dA4c.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./FSSlideGroup-DmKSX9y1.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSWrapGroup-DErk_6Fw.js";import"./FSCheckbox-Bv5yvgVA.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSLoader-CB4bV0N-.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./VMenu-B9SE09pj.js";import"./filter-CxK7Dp-c.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BC5Ev-17.js";const q=M({name:"FSAutocompleteChart",components:{FSAutocompleteField:G,FSButton:A,FSChip:J,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:c,fetching:y,entities:h}=K(),{getMany:f,fetching:i,entities:p}=H(),{$tr:a}=X(),s=u(()=>h.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.Organisation})))),$=u(()=>j.value&&(y.value||i.value)),k=u(()=>e.multiple&&e.modelValue?a("autocomplete.chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),D=t=>{if(Array.isArray(t)){const r=t.map(m=>m.id),C=t.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type),o("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},B=t=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(c({...e.chartOrganisationTypeFilters,search:t??void 0})),e.ignoreChartOrganisations||r.push(f({...e.chartOrganisationFilters,search:t??void 0})),Promise.all(r)},{toggleSet:N,init:j,onUpdate:I}=W(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,B,D);return{placeholder:k,toggleSet:N,loading:$,charts:s,chartOriginColor:Q,chartOriginLabel:R,onUpdate:I}}});function x(e,o,c,y,h,f){const i=b("FSChip"),p=b("FSAutocompleteField");return S(),F(p,_({label:e.$props.label??e.$tr("ui.common.chart","Chart"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(S(),F(T,{key:0},{default:l(()=>[U(L(a.icon),1)]),_:2},1024)):P("",!0)]),"item-append":l(({item:a})=>[d(i,{color:e.chartOriginColor(a.type),label:e.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:z(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},E({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:e.chartOriginColor(a.item.type),label:e.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=Y(q,[["render",x]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const wt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Z},props:Object.keys(o),setup(){return{...e}},template:`
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
