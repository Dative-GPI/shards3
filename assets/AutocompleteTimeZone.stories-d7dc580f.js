import{f as N,g as B,D as v,E as d,F as c,G as o,A as O,M as l,K as h,L as y,I as Z,N as P,O as E,Y as L}from"./vue.esm-bundler-838daa40.js";import{F as U}from"./FSAutocompleteField-e5f1c281.js";import{F as w}from"./FSCheckbox-42258fdd.js";import{F as _}from"./FSButton-255c9a8d.js";import{F as j}from"./FSChip-0ce38a8d.js";import{_ as g}from"./FSSpan-3df08200.js";import{_ as f}from"./FSRow-753b58e5.js";import{u as I}from"./useTimeZones-9742f647.js";import{u as M}from"./useAutocomplete-e45b9115.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-d3bb8d0c.js";import{_ as z}from"./FSCol-44fe82a9.js";import"./FSSearchField-95a58430.js";import"./FSTextField-55dfca8e.js";import"./VField-b386f766.js";import"./useColors-4ac7c452.js";import"./_commonjsHelpers-de833af9.js";import"./index-2f699bdb.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-0e4010b4.js";import"./FSCard-1b892764.js";import"./css-67cfec15.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-a74abc32.js";import"./FSIcon-f74a02b4.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-269e3af4.js";import"./FSSlideGroup-136b708c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-ca330e4e.js";import"./FSFadeOut-afe887fc.js";import"./FSLoader-cd805965.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./FSClickable-5b3f625e.js";import"./base-0de1729e.js";import"./serviceFactory-f4b29260.js";import"./lodash-ee9167ea.js";import"./composableFactory-5509dfbf.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";const A=N({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSCheckbox:w,FSButton:_,FSChip:j,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){const{getMany:F,fetching:S,entities:p}=I(),b=B(()=>n.value&&S.value),a=r=>F({...t.timeZoneFilters,search:r??void 0}),u=(r,D,q)=>q.raw.id.toLowerCase().includes(D.toLowerCase()),{toggleSet:e,search:i,init:n,onUpdate:$}=M(p,[()=>t.timeZoneFilters],m,a,null,r=>r.id,r=>r.id);return{timeZones:p,toggleSet:e,loading:b,search:i,customFilter:u,onUpdate:$}}});function G(t,m,F,S,p,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,O({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(x,P(E({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var n;return[t.$props.multiple?(d(),c(w,{key:0,modelValue:(n=t.$props.modelValue)==null?void 0:n.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(_,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:L(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=R(A,[["render",G]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const Ft={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:m})=>({components:{FSAutocompleteTimeZone:k,FSCol:z},props:Object.keys(m),setup(){return{...t}},template:`
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
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const St=["Variations"];export{s as Variations,St as __namedExportsOrder,Ft as default};
