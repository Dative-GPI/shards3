import{j as $,e as q,I as v,J as d,K as c,L as o,B as D,A as l,O as h,P as y,N as Z,Q as B,R as N,_ as P}from"./vue.esm-bundler-01006032.js";import{F as O}from"./FSAutocompleteField-c1dfb31d.js";import{F as _}from"./FSCheckbox-40e0c55f.js";import{F as w}from"./FSButton-be94d44f.js";import{F as j}from"./FSChip-f497d1b7.js";import{_ as g}from"./FSSpan-6e79caf3.js";import{_ as f}from"./FSRow-83e75060.js";import{u as R}from"./useTimeZones-37ade56e.js";import{u as U}from"./useAutocomplete-3cb054e4.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as E}from"./VSelect-450b500f.js";import{_ as I}from"./FSCol-c97fad61.js";import"./FSToggleSet-be653781.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./useSlots-e0d7ab7c.js";import"./css-279a0029.js";import"./VSlideGroup-e0f01fc0.js";import"./index-491d6eb9.js";import"./useRender-4bcbb6ac.js";import"./display-77f43728.js";import"./goto-9bab4060.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./group-e9c3615d.js";import"./tag-1f5f74bd.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./FSWrapGroup-83a13764.js";import"./VInput-50bb839f.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./VField-f1a9daf9.js";import"./VSpacer-78b81ef3.js";import"./VLabel-f27c70ae.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useRules-54978858.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./filter-9717b913.js";import"./VMenu-4c05ddd6.js";import"./VOverlay-d4d3a71f.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./FSIcon-15b738c8.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-25aa3ef9.js";import"./useDebounce-ff82ad1d.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:O,FSCheckbox:_,FSButton:w,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=R(),b=q(()=>i.value&&F.value),a=r=>S({...t.timeZoneFilters,search:r??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=U(s,[()=>t.timeZoneFilters],n,a,null,r=>r.id,r=>r.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,D({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(E,B(N({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:P(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=x(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const mt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:I},props:Object.keys(n),setup(){return{...t}},template:`
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
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const pt=["Variations"];export{p as Variations,pt as __namedExportsOrder,mt as default};
