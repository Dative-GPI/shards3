import{d as C,c as _,w as I,y as l,z as u,A as c,B as r,m as V,L as a,E as b,G as v,D as $}from"./vue.esm-bundler-gWFTcvUr.js";import{F as q}from"./FSAutocompleteField-b3Xz2NwJ.js";import{F as k}from"./FSChip-C4GLzprG.js";import{_ as m}from"./FSRow-Bpa2jjpJ.js";import{_ as s}from"./FSCol-DX423FHf.js";import{u as T}from"./useDataDefinitions-B52T8OOG.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-CDk00Rln.js";import"./FSClickable-BVFP8bZP.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./FSIcon-C5ELG8c1.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";const F=C({components:{FSAutocompleteField:q,FSChip:k,FSRow:m,FSCol:s},props:{modelValue:{type:String,required:!1},modelId:{type:String,required:!1},dataCategoryId:{type:String,required:!1},label:{type:String,required:!1},width:{type:String,required:!1}},emits:["update:modelValue"],setup(e){const{getMany:t,entities:p}=T(),d=_(()=>p.value.map(o=>({id:o.id,label:o.label,showUnit:o.unit&&o.unit.trim().length>0,unit:o.unit})));return I(()=>[e.modelId,e.dataCategoryId],async()=>{await t({modelsIds:e.modelId?[e.modelId]:void 0,dataCategoryId:e.dataCategoryId})},{immediate:!0}),{toggleDataDefinitions:d,dataDefinitions:p}}});function A(e,t,p,d,o,B){const D=l("FSText"),h=l("FSChip"),w=l("FSAutocompleteField");return u(),c(w,V({width:e.$props.width?e.$props.width:"100%",label:e.label??e.$tr("ui.common.data-definition","Data"),items:e.toggleDataDefinitions,modelValue:e.modelValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.$emit("update:modelValue",i))},e.$attrs),{"autocomplete-selection":r(({item:i})=>[a(m,{wrap:!1,align:"center-center",width:e.$props.width?e.$props.width:"100vh"},{default:r(()=>[a(s,null,{default:r(()=>[a(D,null,{default:r(()=>[b(v(i.raw.label),1)]),_:2},1024)]),_:2},1024),i.raw.showUnit?(u(),c(m,{key:0},{default:r(()=>[a(m,{align:"center-right"},{default:r(()=>[a(h,{label:i.raw.unit},null,8,["label"])]),_:2},1024)]),_:2},1024)):$("",!0)]),_:2},1032,["width"])]),_:1},16,["width","label","items","modelValue"])}const y=N(F,[["render",A]]);F.__docgenInfo={exportName:"default",displayName:"FSDataDefinitionSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1},{name:"modelId",type:{name:"string"},required:!1},{name:"dataCategoryId",type:{name:"string"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"width",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/selects/FSDataDefinitionSelector.vue"]};const tt={title:"Foundation/Core/Selects/DataDefinitionSelector",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:null}},render:(e,{argTypes:t})=>({components:{FSDataDefinitionSelector:y,FSCol:s},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSDataDefinitionSelector
      modelId="1"
      width="600px"
      categoryId="1"
      v-model="args.value"
      />
    </FSCol>`})};var f,g,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      value: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataDefinitionSelector,
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
      <FSDataDefinitionSelector
      modelId="1"
      width="600px"
      categoryId="1"
      v-model="args.value"
      />
    </FSCol>\`
  })
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const ot=["Variations"];export{n as Variations,ot as __namedExportsOrder,tt as default};
