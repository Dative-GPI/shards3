import{d as _,c as m,y as f,z as C,A as b,C as l,m as I,H as j,I as M,F as U,N as d,B as L,D as z}from"./vue.esm-bundler-DTB_q9xr.js";import{F as P}from"./FSAutocompleteField-CaoqKedU.js";import{F as v}from"./FSButton-DblcRn12.js";import{F as E}from"./FSChip-C1Wzm8E1.js";import{F as V}from"./FSIcon-CJgnsR4e.js";import{u as H}from"./useChartOrganisationTypes-D7z7JGcZ.js";import{u as x}from"./useChartOrganisations-d6GOstCx.js";import{C as u,a as G,b as J}from"./chartsTools-I26pug4z.js";import{u as K}from"./useAutocomplete-C_CEUaC2.js";import{u as Q}from"./useTranslations-BehwFxDb.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./VIcon-BCDp5TRU.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./FSClickable-CIKlZ0Uy.js";import"./chartSerie-BOhDkcUt.js";import"./timeRange-Bfx7KHHy.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";const A=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:P,FSButton:v,FSChip:E,FSIcon:V},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:u.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update","update:modelValue","update:type"],setup(t,{emit:r}){const{getMany:g,fetching:c,entities:y}=H(),{getMany:h,fetching:i,entities:p}=x(),{$tr:a}=Q(),s=m(()=>y.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:u.OrganisationType})).concat(p.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:u.Organisation})))),q=m(()=>N.value&&(c.value||i.value)),w=m(()=>t.multiple&&t.modelValue?a("ui.autocomplete-chart.placeholder","{0} chart(s) selected",t.modelValue.length):null),k=e=>{Array.isArray(e)?(r("update:modelValue",e.map(o=>o.id)),r("update:type",e.map(o=>o.type)),r("update",{modelValue:e.map(o=>o.id),type:e.map(o=>o.type)})):(r("update:modelValue",e==null?void 0:e.id),r("update:type",e==null?void 0:e.type),r("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type}))},$=e=>{const o=[];return t.ignoreChartOrganisationTypes||o.push(g({...t.chartOrganisationTypeFilters,search:e??void 0})),t.ignoreChartOrganisations||o.push(h({...t.chartOrganisationFilters,search:e??void 0})),Promise.all(o)},{toggleSet:D,init:N,onUpdate:B}=K(s,[()=>t.chartOrganisationTypeFilters,()=>t.chartOrganisationFilters],r,$,k);return{placeholder:w,toggleSet:D,loading:q,charts:s,chartOriginColor:G,chartOriginLabel:J,onUpdate:B}}});function X(t,r,g,c,y,h){const i=f("FSChip"),p=f("FSAutocompleteField");return C(),b(p,I({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,placeholder:t.placeholder,loading:t.loading,items:t.charts,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(C(),b(V,{key:0},{default:l(()=>[j(M(a.icon),1)]),_:2},1024)):U("",!0)]),"item-append":l(({item:a})=>[d(i,{color:t.chartOriginColor(a.type),label:t.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(v,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:z(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},L({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:t.chartOriginColor(a.item.type),label:t.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const T=R(A,[["render",X]]);A.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const Tt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(t,{argTypes:r})=>({components:{FSAutocompleteChart:T,FSCol:W},props:Object.keys(r),setup(){return{...t}},template:`
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
    </FSCol>`})};var F,S,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const qt=["Variations"];export{n as Variations,qt as __namedExportsOrder,Tt as default};
