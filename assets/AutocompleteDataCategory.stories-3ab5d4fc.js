import{j as R,e as U,I as q,J as d,K as c,L as a,B as T,A as l,U as n,V as m,N as v,W as N,X as O,_ as B}from"./vue.esm-bundler-41eda46b.js";import{F as E}from"./FSAutocompleteField-95896a23.js";import{F as h}from"./FSCheckbox-90b24572.js";import{F as A}from"./FSButton-d0a22eb6.js";import{_ as g}from"./FSIcon-713345eb.js";import{_ as f}from"./FSSpan-8af5ddcc.js";import{_ as C}from"./FSRow-1508d56d.js";import{C as L}from"./base-72a78366.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as G}from"./composableFactory-00c2f0ee.js";import{u as M}from"./useAutocomplete-0136f2aa.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-defb5d1c.js";import{_ as z}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./useSlots-e8ea556e.js";import"./css-35e8563f.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./useRender-dd35ddd1.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./tag-64b4b0e7.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./filter-133522f7.js";import"./VMenu-499c8185.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";class V{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class J extends V{constructor(o){super(o)}}const k=()=>`${L()}/data-categories`,K=e=>`${k()}/${encodeURIComponent(e)}`,W=new j("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany(k,V),e.addNotify())),X=G.getMany(W),w=R({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:E,FSCheckbox:h,FSButton:A,FSIcon:g,FSSpan:f,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:y,fetching:S,entities:u}=X(),F=U(()=>r.value&&S.value),p=I=>y({...e.dataCategoriesFilters,search:I??void 0}),{toggleSet:t,init:r,onUpdate:i}=M(u,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:u,toggleSet:t,loading:F,onUpdate:i}}});function Y(e,o,y,S,u,F){const p=q("FSAutocompleteField");return d(),c(p,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(d(),c(C,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(g,null,{default:a(()=>[n(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(t.raw.label),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),"autocomplete-item":a(({props:t,item:r})=>[l(x,N(O({...t,title:""})),{default:a(()=>[l(C,{align:"center-left",wrap:!1},{default:a(()=>{var i;return[e.$props.multiple?(d(),c(h,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(r.value),onClick:t.onClick},null,8,["modelValue","onClick"])):v("",!0),l(g,null,{default:a(()=>[n(m(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":a(t=>[l(A,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:B(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:$,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const gt=["Variations"];export{s as Variations,gt as __namedExportsOrder,ct as default};
