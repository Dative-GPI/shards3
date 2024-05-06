import{j as k,e as $,I as v,J as u,K as d,L as t,B as q,A as l,S as b,U as h,N as Z,W as D,X as N}from"./vue.esm-bundler-3416a090.js";import{F as B}from"./FSAutocompleteField-a04215fa.js";import{F as w}from"./FSCheckbox-422b3b91.js";import{F as I}from"./FSChip-e95fe78b.js";import{_ as g}from"./FSSpan-b519c994.js";import{_ as c}from"./FSRow-5edf997c.js";import{u as P}from"./useTimeZones-7bf0b9fd.js";import{u as U}from"./useAutocomplete-ca462ffd.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as O}from"./VSelect-f25e0916.js";import{_ as E}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./css-69ed11d9.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSIcon-f518d728.js";import"./useSlots-7472d1e2.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./filter-d102117b.js";import"./VMenu-39a0be1f.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-8605555f.js";import"./useDebounce-736cfd0a.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";const A=k({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:B,FSCheckbox:w,FSChip:I,FSSpan:g,FSRow:c},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:f,fetching:S,entities:p}=P(),F=$(()=>r.value&&S.value),n=i=>f({...e.timeZoneFilters,search:i??void 0}),{toggleSet:s,search:o,init:r,onUpdate:C}=U(p,[()=>e.timeZoneFilters],a,n,null,i=>i.id,i=>i.id);return{timeZones:p,toggleSet:s,loading:F,search:o,onUpdate:C}}});function R(e,a,f,S,p,F){const n=v("FSChip"),s=v("FSAutocompleteField");return u(),d(s,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,toggleSetItems:e.timeZones,multiple:e.$props.multiple,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(u(),d(c,{key:0,align:"center-center",wrap:!1},{default:t(()=>[l(n,{label:o.raw.offset},null,8,["label"]),l(g,null,{default:t(()=>[b(h(o.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":t(({props:o,item:r})=>[l(O,D(N({...o,title:""})),{default:t(()=>[l(c,{align:"center-left"},{default:t(()=>[e.$props.multiple?(u(),d(w,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):Z("",!0),l(n,{label:r.raw.offset},null,8,["label"]),l(g,null,{default:t(()=>[b(h(r.raw.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","toggleSetItems","multiple","loading","items","modelValue","onUpdate:modelValue"])}const _=j(A,[["render",R]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const rt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteTimeZone:_,FSCol:E},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,T,V;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const it=["Variations"];export{m as Variations,it as __namedExportsOrder,rt as default};
