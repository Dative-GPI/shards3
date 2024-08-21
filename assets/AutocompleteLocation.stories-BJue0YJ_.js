var $=Object.defineProperty;var k=(o,e,i)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var t=(o,e,i)=>k(o,typeof e!="symbol"?e+"":e,i);import{d as q,c as D,y as U,z as r,A as l,B as n,m as N,E as s,G as p,D as g,L as f}from"./vue.esm-bundler-gWFTcvUr.js";import{F as R}from"./FSAutocompleteField-G63UuZXo.js";import{_ as S}from"./FSIcon-C7-l9IT-.js";import{_ as F}from"./FSSpan-BlywDO8Z.js";import{_ as v}from"./FSRow-Bpa2jjpJ.js";import{A as T}from"./address-CE2z3AEI.js";import{C as B}from"./base-DV1z3red.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-CZGZ62iP.js";import{u as M}from"./useAutocomplete-C7hDSQ2w.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-C0cjY78b.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class C{constructor(e){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.color=e.color,this.label=e.label,this.tags=e.tags.slice(),this.address=new T(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class G extends C{constructor(i){super(i);t(this,"description");this.description=i.description}}const A=()=>`${B()}/locations`,P=o=>`${A()}/${encodeURIComponent(o)}`,H=new j("location",G).createComplete(A,P,C),J=E.getMany(H),V=q({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:S,FSSpan:F,FSRow:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:i,fetching:y,entities:c}=J(),_=D(()=>u.value&&y.value),d=O=>i({...o.locationFilters,search:O??void 0}),{toggleSet:a,init:u,onUpdate:I}=M(c,[()=>o.locationFilters],e,d);return{locations:c,toggleSet:a,loading:_,onUpdate:I}}});function K(o,e,i,y,c,_){const d=U("FSAutocompleteField");return r(),l(d,N({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":n(({item:a})=>[o.$props.modelValue?(r(),l(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,null,{default:n(()=>[s(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":n(({item:a,font:u})=>[f(v,{align:"center-left",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,{font:u},{default:n(()=>[s(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=x(V,[["render",K]]);V.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:w,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>`})};var b,h,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const vo=["Variations"];export{m as Variations,vo as __namedExportsOrder,Fo as default};
