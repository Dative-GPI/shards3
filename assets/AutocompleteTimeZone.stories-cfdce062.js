import{f as $,g as D,D as v,E as d,F as c,G as o,A as q,P as l,K as h,L as y,I as Z,R as P,S as B,X as N}from"./vue.esm-bundler-6f923154.js";import{F as E}from"./FSAutocompleteField-1f0e4128.js";import{F as _}from"./FSCheckbox-4fa3808a.js";import{F as w}from"./FSButton-ff673895.js";import{F as O}from"./FSChip-3525f285.js";import{_ as g}from"./FSSpan-7bb94541.js";import{_ as f}from"./FSRow-64caadb9.js";import{u as R}from"./useTimeZones-d6f8fb82.js";import{u as U}from"./useAutocomplete-bac56a24.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-b637e5b8.js";import{_ as I}from"./FSCol-5ed907ac.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./useTranslations-59cd146d.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./FSIcon-93774118.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./filter-e9cedeb6.js";import"./VMenu-31bd6e5f.js";import"./FSClickable-e71ee20f.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:E,FSCheckbox:_,FSButton:w,FSChip:O,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=R(),b=D(()=>i.value&&F.value),r=a=>S({...t.timeZoneFilters,search:a??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=U(s,[()=>t.timeZoneFilters],n,r,null,a=>a.id,a=>a.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const r=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,q({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(r,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(x,P(B({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(r,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:N(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(r,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=j(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const ct={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:I},props:Object.keys(n),setup(){return{...t}},template:`
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
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const gt=["Variations"];export{p as Variations,gt as __namedExportsOrder,ct as default};
