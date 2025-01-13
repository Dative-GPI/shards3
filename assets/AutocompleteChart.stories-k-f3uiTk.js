import{d as M,c as u,A as b,B as F,D as l,j as _,I as S,J as U,K as L,G as P,P as d,C as E,E as z}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as G}from"./FSAutocompleteField-DJKWDuqJ.js";import{F as A}from"./FSButton-BDSx2V0J.js";import{F as J}from"./FSChip-9ODtrOs4.js";import{F as T}from"./FSIcon-BwW5Hq8i.js";import{u as K}from"./useChartOrganisationTypes-BZsopCR2.js";import{u as H}from"./useChartOrganisations-C2HOHf61.js";import{a as g,b as Q,d as R}from"./chartsTools-BXrINYUk.js";import{u as W}from"./useAutocomplete-BnDWNIS6.js";import{u as X}from"./useTranslations-DJOHKWsD.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-D35grUmj.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./chartAllowedStep-BBjUr5Kj.js";import"./chartTimeStep-DIQ4HUqp.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./composableFactory-K8W9GIHH.js";const q=M({name:"FSAutocompleteChart",components:{FSAutocompleteField:G,FSButton:A,FSChip:J,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:c,fetching:y,entities:h}=K(),{getMany:f,fetching:n,entities:p}=H(),{$tr:a}=X(),s=u(()=>h.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.Organisation})))),$=u(()=>j.value&&(y.value||n.value)),k=u(()=>e.multiple&&e.modelValue?a("autocomplete.chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),D=t=>{if(Array.isArray(t)){const r=t.map(m=>m.id),C=t.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type),o("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},B=t=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(c({...e.chartOrganisationTypeFilters,search:t??void 0})),e.ignoreChartOrganisations||r.push(f({...e.chartOrganisationFilters,search:t??void 0})),Promise.all(r)},{toggleSet:N,init:j,onUpdate:I}=W(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,B,D);return{placeholder:k,toggleSet:N,loading:$,charts:s,chartOriginColor:Q,chartOriginLabel:R,onUpdate:I}}});function x(e,o,c,y,h,f){const n=b("FSChip"),p=b("FSAutocompleteField");return S(),F(p,_({label:e.$props.label??e.$tr("ui.common.chart","Chart"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(S(),F(T,{key:0},{default:l(()=>[U(L(a.icon),1)]),_:2},1024)):P("",!0)]),"item-append":l(({item:a})=>[d(n,{color:e.chartOriginColor(a.type),label:e.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:z(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},E({_:2},[a.item.type?{name:"append",fn:l(()=>[d(n,{color:e.chartOriginColor(a.item.type),label:e.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=Y(q,[["render",x]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const wt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Z},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var O,v,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(v=i.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const $t=["Variations"];export{i as Variations,$t as __namedExportsOrder,wt as default};
