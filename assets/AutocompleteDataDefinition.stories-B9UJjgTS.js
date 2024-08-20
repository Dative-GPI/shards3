import{d as k,c as $,y as b,z as a,A as l,B as o,m as q,D as m,L as p,E as F,G as v,S as B}from"./vue.esm-bundler-gWFTcvUr.js";import{F as N}from"./FSAutocompleteField-mXLZc6AN.js";import{F as w}from"./FSButton-C0cjY78b.js";import{F as O}from"./FSChip-3bZvXIoL.js";import{_ as f}from"./FSSpan-BlywDO8Z.js";import{_ as c}from"./FSRow-Bpa2jjpJ.js";import{u as T}from"./useDataDefinitions-B52T8OOG.js";import{u as U}from"./useAutocomplete-C7hDSQ2w.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./FSIcon-C7-l9IT-.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";const A=k({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:N,FSButton:w,FSChip:O,FSSpan:f,FSRow:c},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:g,fetching:D,entities:s}=T(),S=$(()=>e.value&&D.value),i=V=>g({...t.dataDefinitionFilters,search:V??void 0}),{toggleSet:d,init:e,onUpdate:r}=U(s,[()=>t.dataDefinitionFilters],n,i);return{dataDefinitions:s,toggleSet:d,loading:S,onUpdate:r}}});function z(t,n,g,D,s,S){const i=b("FSChip"),d=b("FSAutocompleteField");return a(),l(d,q({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataDefinitions,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(a(),l(c,{key:0,align:"center-center",wrap:!1},{default:o(()=>[e.raw.unit?(a(),l(i,{key:0,label:e.raw.unit},null,8,["label"])):m("",!0),p(f,null,{default:o(()=>[F(v(e.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"item-label":o(({item:e,font:r})=>[p(c,{align:"center-left",wrap:!1},{default:o(()=>[e.raw.unit?(a(),l(i,{key:0,label:e.raw.unit},null,8,["label"])):m("",!0),p(f,{font:r},{default:o(()=>[F(v(e.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":o(e=>[p(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:B(e.getClass(e.item)),label:e.item.label,onClick:r=>e.toggle(e.item)},{prepend:o(()=>[e.item.unit?(a(),l(i,{key:0,label:e.item.unit},null,8,["label"])):m("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const C=j(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const nt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteDataDefinition:C,FSCol:x},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var y,h,_;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDataDefinition,
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
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(h=u.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const rt=["Variations"];export{u as Variations,rt as __namedExportsOrder,nt as default};
