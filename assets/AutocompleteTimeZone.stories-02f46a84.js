import{j as $,e as q,I as v,J as d,K as c,L as o,B as D,A as l,U as h,V as y,N as Z,W as B,X as N,_ as P}from"./vue.esm-bundler-7c237656.js";import{F as U}from"./FSAutocompleteField-3e0e956b.js";import{F as _}from"./FSCheckbox-da06ce33.js";import{F as w}from"./FSButton-2de03eb9.js";import{F as j}from"./FSChip-d3978a1b.js";import{_ as g}from"./FSSpan-661158f8.js";import{_ as f}from"./FSRow-0e15f868.js";import{u as O}from"./useTimeZones-84f84075.js";import{u as x}from"./useAutocomplete-c9cb8b74.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I}from"./VSelect-735dad66.js";import{_ as R}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./useSlots-338ea3fb.js";import"./css-aa928277.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./useRender-e0e7d9de.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./tag-7dab75b7.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./filter-9f13a693.js";import"./VMenu-2484e62c.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./FSIcon-5ad13b7e.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-08360cd4.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:_,FSButton:w,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=O(),b=q(()=>i.value&&F.value),a=r=>S({...t.timeZoneFilters,search:r??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=x(s,[()=>t.timeZoneFilters],n,a,null,r=>r.id,r=>r.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,D({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(I,B(N({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:P(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=E(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const nt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:R},props:Object.keys(n),setup(){return{...t}},template:`
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
