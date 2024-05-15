import{j as $,e as q,I as v,J as d,K as c,L as o,B as D,A as l,U as h,V as y,N as Z,W as B,X as N,_ as P}from"./vue.esm-bundler-857e5af7.js";import{F as U}from"./FSAutocompleteField-85bc039c.js";import{F as _}from"./FSCheckbox-54879197.js";import{F as w}from"./FSButton-0aa1c2d4.js";import{F as j}from"./FSChip-16722832.js";import{_ as g}from"./FSSpan-9f7a3096.js";import{_ as f}from"./FSRow-e30f1dcc.js";import{u as O}from"./useTimeZones-4f582a06.js";import{u as x}from"./useAutocomplete-ecc57bef.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I}from"./VSelect-aabfcd61.js";import{_ as R}from"./FSCol-439c812a.js";import"./FSToggleSet-d37d9311.js";import"./FSSlideGroup-5383341a.js";import"./FSButtonNextIcon-32c0573f.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./useSlots-8bee1a74.js";import"./css-ab2bdb81.js";import"./VSlideGroup-09af52b3.js";import"./index-900eb6c5.js";import"./useRender-1606c976.js";import"./display-cdda29b9.js";import"./goto-9c8518f8.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./group-db11312a.js";import"./tag-41ce785e.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./FSWrapGroup-79594a2b.js";import"./VInput-7e8bc521.js";import"./transition-8ae71e6c.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./VField-05970d63.js";import"./VSpacer-2ef0dee2.js";import"./VLabel-5378811f.js";import"./loader-c881e63b.js";import"./VProgressCircular-b85c805e.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-da23fb58.js";import"./elevation-c9d86896.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./filter-621d2885.js";import"./VMenu-1d4626f8.js";import"./VOverlay-e7c006b1.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./FSIcon-d0ab000b.js";import"./VSelectionControl-ac658b6e.js";import"./index-1a539509.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./useDebounce-3221123d.js";import"./ssrBoot-4aec2e0b.js";import"./border-adb63d5e.js";import"./VImg-617a4396.js";import"./VDivider-54e4b012.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:_,FSButton:w,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=O(),b=q(()=>i.value&&F.value),a=r=>S({...t.timeZoneFilters,search:r??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=x(s,[()=>t.timeZoneFilters],n,a,null,r=>r.id,r=>r.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,D({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(I,B(N({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:P(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=E(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const nt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:R},props:Object.keys(n),setup(){return{...t}},template:`
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
    </FSCol>`})};var T,V,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const mt=["Variations"];export{p as Variations,mt as __namedExportsOrder,nt as default};
