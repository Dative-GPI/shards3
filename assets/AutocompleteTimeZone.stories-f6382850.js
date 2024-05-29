import{f as B,g as N,I as v,J as d,K as c,L as o,B as P,A as l,O as h,P as y,N as Z,Q as O,R as L,_ as R}from"./vue.esm-bundler-cd768bc3.js";import{F as U}from"./FSAutocompleteField-3ba4e905.js";import{F as w}from"./FSCheckbox-0f33b66c.js";import{F as _}from"./FSButton-ecc11eb7.js";import{F as j}from"./FSChip-0b35e4ee.js";import{_ as g}from"./FSSpan-da6dde8e.js";import{_ as f}from"./FSRow-1d7c2545.js";import{u as E}from"./useTimeZones-bef1af75.js";import{u as I}from"./useAutocomplete-26502e10.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z}from"./VSelect-9e784020.js";import{_ as M}from"./FSCol-ff457bc3.js";import"./FSToggleSet-a67ca94c.js";import"./FSSlideGroup-ce06c6c2.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./useSlots-2af30a3d.js";import"./css-c2ea3b68.js";import"./VSlideGroup-cd82e4b3.js";import"./index-055d6469.js";import"./useRender-b3fd6f8b.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./tag-bc86e39f.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./color-4e667524.js";import"./VSlideGroupItem-249d9261.js";import"./FSWrapGroup-81657079.js";import"./VInput-5fe9e616.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VLabel-a834020c.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./filter-7dfa57ec.js";import"./VMenu-501341cc.js";import"./VOverlay-43a7a638.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSIcon-203715fb.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";const A=B({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:w,FSButton:_,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:F,fetching:S,entities:p}=E(),b=N(()=>m.value&&S.value),a=r=>F({...t.timeZoneFilters,search:r??void 0}),u=(r,q,D)=>D.raw.id.toLowerCase().includes(q.toLowerCase()),{toggleSet:e,search:i,init:m,onUpdate:$}=I(p,[()=>t.timeZoneFilters],n,a,null,r=>r.id,r=>r.id);return{timeZones:p,toggleSet:e,loading:b,search:i,customFilter:u,onUpdate:$}}});function J(t,n,F,S,p,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,P({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(z,O(L({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(w,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(_,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:R(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=x(A,[["render",J]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const dt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:M},props:Object.keys(n),setup(){return{...t}},template:`
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
    </FSCol>`})};var T,C,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const ct=["Variations"];export{s as Variations,ct as __namedExportsOrder,dt as default};
