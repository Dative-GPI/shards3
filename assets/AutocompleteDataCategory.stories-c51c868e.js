import{j as R,e as U,I as q,J as d,K as c,L as a,B as T,A as l,U as n,V as m,N as v,W as N,X as O,_ as B}from"./vue.esm-bundler-7c237656.js";import{F as E}from"./FSAutocompleteField-8290612b.js";import{F as h}from"./FSCheckbox-2107f3ac.js";import{F as A}from"./FSButton-f0f5de23.js";import{_ as g}from"./FSIcon-84236a8c.js";import{_ as f}from"./FSSpan-661158f8.js";import{_ as C}from"./FSRow-0e15f868.js";import{C as L}from"./base-cc0281c0.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as G}from"./composableFactory-08360cd4.js";import{u as M}from"./useAutocomplete-c9cb8b74.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-6f1247c6.js";import{_ as z}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-60e07ad2.js";import"./FSSlideGroup-3826bb87.js";import"./FSButtonNextIcon-c829e5dd.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./useSlots-338ea3fb.js";import"./css-aa928277.js";import"./VSlideGroup-688ca79d.js";import"./index-bed3da0c.js";import"./useRender-e696dd75.js";import"./display-f7c4d7d9.js";import"./goto-5a330938.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./group-114c8e76.js";import"./tag-d0e3859f.js";import"./resizeObserver-78a25be2.js";import"./VIcon-ea625dc1.js";import"./color-8b3e8a76.js";import"./FSWrapGroup-1451daa8.js";import"./VInput-cb53917c.js";import"./transition-99224378.js";import"./density-ba2627df.js";import"./dimensions-506d0d5f.js";import"./VField-1b5a23ea.js";import"./VSpacer-5d7851f1.js";import"./VLabel-25f2a1ef.js";import"./loader-1ca0c22d.js";import"./VProgressCircular-84d930cf.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./VDefaultsProvider-8ad05cd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ff2c3104.js";import"./elevation-322d7ef7.js";import"./useRules-30f7bcaa.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./filter-ec24e360.js";import"./VMenu-ecd47b95.js";import"./VOverlay-215d3759.js";import"./lazy-ba583f92.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./VSelectionControl-4d654956.js";import"./index-b834f342.js";import"./FSClickable-b2b2bac7.js";import"./FSCard-be090350.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-07f356f9.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";class V{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class J extends V{constructor(o){super(o)}}const k=()=>`${L()}/data-categories`,K=e=>`${k()}/${encodeURIComponent(e)}`,W=new j("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany(k,V),e.addNotify())),X=G.getMany(W),w=R({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:E,FSCheckbox:h,FSButton:A,FSIcon:g,FSSpan:f,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:y,fetching:S,entities:p}=X(),F=U(()=>r.value&&S.value),u=I=>y({...e.dataCategoriesFilters,search:I??void 0}),{toggleSet:t,init:r,onUpdate:i}=M(p,[()=>e.dataCategoriesFilters],o,u);return{dataCategories:p,toggleSet:t,loading:F,onUpdate:i}}});function Y(e,o,y,S,p,F){const u=q("FSAutocompleteField");return d(),c(u,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(d(),c(C,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(g,null,{default:a(()=>[n(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(t.raw.label),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),"autocomplete-item":a(({props:t,item:r})=>[l(x,N(O({...t,title:""})),{default:a(()=>[l(C,{align:"center-left",wrap:!1},{default:a(()=>{var i;return[e.$props.multiple?(d(),c(h,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(r.value),onClick:t.onClick},null,8,["modelValue","onClick"])):v("",!0),l(g,null,{default:a(()=>[n(m(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":a(t=>[l(A,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:B(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:$,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var b,D,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      FSAutocompleteDataCategory,
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
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ft=["Variations"];export{s as Variations,ft as __namedExportsOrder,gt as default};
