import{f as B,g as N,D as v,E as d,F as c,G as o,A as P,Q as l,K as h,L as y,I as Z,R as E,S as L,Y as O}from"./vue.esm-bundler-1de4ab84.js";import{F as R}from"./FSAutocompleteField-326a230c.js";import{F as w}from"./FSCheckbox-7bc44d7a.js";import{F as _}from"./FSButton-6b0685b3.js";import{F as U}from"./FSChip-5509d5fb.js";import{_ as g}from"./FSSpan-c5b5f93b.js";import{_ as f}from"./FSRow-0f15051e.js";import{u as j}from"./useTimeZones-93386e1a.js";import{u as I}from"./useAutocomplete-541ae531.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z}from"./VSelect-46cfbf6f.js";import{_ as M}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./FSIcon-08483052.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./FSClickable-00bc2ab2.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";const A=B({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:R,FSCheckbox:w,FSButton:_,FSChip:U,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){const{getMany:F,fetching:S,entities:p}=j(),b=N(()=>n.value&&S.value),a=r=>F({...t.timeZoneFilters,search:r??void 0}),u=(r,D,q)=>q.raw.id.toLowerCase().includes(D.toLowerCase()),{toggleSet:e,search:i,init:n,onUpdate:$}=I(p,[()=>t.timeZoneFilters],m,a,null,r=>r.id,r=>r.id);return{timeZones:p,toggleSet:e,loading:b,search:i,customFilter:u,onUpdate:$}}});function G(t,m,F,S,p,b){const a=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,P({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(a,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(z,E(L({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var n;return[t.$props.multiple?(d(),c(w,{key:0,modelValue:(n=t.$props.modelValue)==null?void 0:n.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(a,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(_,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:O(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(a,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=x(A,[["render",G]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const Ft={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:m})=>({components:{FSAutocompleteTimeZone:k,FSCol:M},props:Object.keys(m),setup(){return{...t}},template:`
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
