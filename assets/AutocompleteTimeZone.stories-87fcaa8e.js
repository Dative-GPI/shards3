import{j as $,e as q,I as v,J as d,K as c,L as o,B as D,A as l,U as h,V as y,N as Z,W as B,X as N,_ as P}from"./vue.esm-bundler-857e5af7.js";import{F as U}from"./FSAutocompleteField-95ce1ca1.js";import{F as _}from"./FSCheckbox-d1b08f47.js";import{F as w}from"./FSButton-821f7325.js";import{F as j}from"./FSChip-4843d6f3.js";import{_ as g}from"./FSSpan-9f7a3096.js";import{_ as f}from"./FSRow-e30f1dcc.js";import{u as O}from"./useTimeZones-4f582a06.js";import{u as x}from"./useAutocomplete-ecc57bef.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I}from"./VSelect-2f600942.js";import{_ as R}from"./FSCol-439c812a.js";import"./FSToggleSet-32c663bb.js";import"./FSSlideGroup-0f6a80f8.js";import"./FSButtonNextIcon-cf7184c0.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./useSlots-8bee1a74.js";import"./css-ab2bdb81.js";import"./VSlideGroup-23212639.js";import"./index-d6be2044.js";import"./useRender-d5beceb3.js";import"./display-56858c3a.js";import"./goto-975c1e2c.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./group-501836f7.js";import"./tag-7bd029e5.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./FSWrapGroup-47fc2c20.js";import"./VInput-6c2a4fd3.js";import"./transition-2a27d0f7.js";import"./density-69cd8efb.js";import"./dimensions-d7f5c5ad.js";import"./VField-9dc825df.js";import"./VSpacer-37a4cd9a.js";import"./VLabel-820f7887.js";import"./loader-b99105cf.js";import"./VProgressCircular-593755b1.js";import"./rounded-67c03651.js";import"./VDefaultsProvider-51a3a301.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ff56dc12.js";import"./elevation-d5a2e352.js";import"./useRules-b3d475c7.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./filter-24b96659.js";import"./VMenu-ddfad70d.js";import"./VOverlay-dc792521.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./FSIcon-faf0e444.js";import"./VSelectionControl-11aadb82.js";import"./index-f95cc40a.js";import"./FSClickable-d206c837.js";import"./FSCard-c144a688.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./useDebounce-3221123d.js";import"./ssrBoot-4aec2e0b.js";import"./border-43a3c780.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:_,FSButton:w,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=O(),b=q(()=>i.value&&F.value),a=r=>S({...t.timeZoneFilters,search:r??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=x(s,[()=>t.timeZoneFilters],n,a,null,r=>r.id,r=>r.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,D({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(I,B(N({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:P(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=E(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const nt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:R},props:Object.keys(n),setup(){return{...t}},template:`
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
