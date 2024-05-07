import{j as $,e as q,I as v,J as d,K as c,L as o,B as D,A as l,U as h,V as y,N as Z,W as B,X as N,_ as P}from"./vue.esm-bundler-41eda46b.js";import{F as U}from"./FSAutocompleteField-d788c579.js";import{F as w}from"./FSCheckbox-9aa0fdbb.js";import{F as A}from"./FSButton-cdb730f5.js";import{F as j}from"./FSChip-0962e240.js";import{_ as g}from"./FSSpan-8af5ddcc.js";import{_ as f}from"./FSRow-1508d56d.js";import{u as O}from"./useTimeZones-239f38ea.js";import{u as x}from"./useAutocomplete-a7c26244.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I}from"./VSelect-994061f1.js";import{_ as R}from"./FSCol-282cc158.js";import"./FSToggleSet-ddc99f4f.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./useSlots-e8ea556e.js";import"./css-35e8563f.js";import"./VSlideGroup-d28ddfe3.js";import"./index-ad5199eb.js";import"./useRender-b120e115.js";import"./display-40264291.js";import"./goto-e7ba55f0.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./group-53103ce4.js";import"./tag-585bbcbd.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./color-7b12579a.js";import"./FSWrapGroup-8ef956e3.js";import"./VInput-1f6e9963.js";import"./transition-87ba966b.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./VField-7c3f9689.js";import"./VSpacer-b889274d.js";import"./VLabel-674db0eb.js";import"./loader-912691d5.js";import"./VProgressCircular-e304a31d.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-b9d57263.js";import"./elevation-74b749d9.js";import"./useRules-d33c1ab7.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./filter-fb6ce324.js";import"./VMenu-40d1577e.js";import"./VOverlay-aedbdfa0.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./FSIcon-6dc797d3.js";import"./VSelectionControl-6bfa0431.js";import"./index-35b22454.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";const C=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:w,FSButton:A,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=O(),b=q(()=>a.value&&F.value),i=r=>S({...t.timeZoneFilters,search:r??void 0}),{toggleSet:u,search:e,init:a,onUpdate:m}=x(s,[()=>t.timeZoneFilters],n,i,null,r=>r.id,r=>r.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const i=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,D({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(i,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:a})=>[l(I,B(N({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(w,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(a.value)},null,8,["modelValue"])):Z("",!0),l(i,{label:a.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(a.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(A,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:P(e.getClass(e.item)),label:e.item.id,onClick:a=>e.toggle(e.item)},{prepend:o(()=>[l(i,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=E(C,[["render",z]]);C.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const rt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:R},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var T,V,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Europe/Paris",
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTimeZone,
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
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const nt=["Variations"];export{p as Variations,nt as __namedExportsOrder,rt as default};
