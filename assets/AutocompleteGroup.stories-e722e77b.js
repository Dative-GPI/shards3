import{f as k,g as $,D,E as r,F as a,G as o,A as q,K as u,L as i,I as m,P as s,R as I,S as N}from"./vue.esm-bundler-6f923154.js";import{F as B}from"./FSAutocompleteField-1f0e4128.js";import{F as _}from"./FSCheckbox-4fa3808a.js";import{_ as f}from"./FSIcon-93774118.js";import{_ as S}from"./FSSpan-7bb94541.js";import{_ as F}from"./FSRow-64caadb9.js";import{u as O}from"./useGroups-dd45edc4.js";import{u as P}from"./useAutocomplete-bac56a24.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T}from"./VSelect-b637e5b8.js";import{_ as U}from"./FSCol-5ed907ac.js";import"./FSSearchField-ec495859.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./useRender-1cb09274.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./css-0cf2e273.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./useTranslations-59cd146d.js";import"./FSDialogMenu-7aaa5a49.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./FSRadioGroup-52f2d9ef.js";import"./VSelectionControl-40c897c6.js";import"./index-55248dcb.js";import"./FSToggleSet-294c6bb8.js";import"./FSSlideGroup-ddac1e24.js";import"./uuid-08309875.js";import"./VSlideGroup-60f1b829.js";import"./goto-4db1c431.js";import"./group-91945d16.js";import"./FSWrapGroup-a40e4a86.js";import"./FSFadeOut-1de34239.js";import"./FSLoader-6b86cc0d.js";import"./elevation-2c5be1c3.js";import"./filter-e9cedeb6.js";import"./VMenu-31bd6e5f.js";import"./pathCrumb-3dbc85d5.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./ssrBoot-082b8501.js";import"./border-f53cef89.js";import"./VImg-8e65ad17.js";import"./VDivider-dfa46b18.js";const w=k({name:"FSAutocompleteGroup",components:{FSAutocompleteField:B,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{getMany:v,fetching:b,entities:c}=O(),y=$(()=>l.value&&b.value),g=C=>v({...e.groupFilters,search:C??void 0}),{toggleSet:t,init:l,onUpdate:n}=P(c,[()=>e.groupFilters],p,g);return{toggleSet:t,loading:y,groups:c,onUpdate:n}}});function j(e,p,v,b,c,y){const g=D("FSAutocompleteField");return r(),a(g,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(r(),a(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(r(),a(f,{key:0},{default:o(()=>[u(i(t.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:t,item:l})=>[s(T,I(N({...t,title:""})),{default:o(()=>[s(F,{align:"center-left",wrap:!1},{default:o(()=>{var n;return[e.$props.multiple?(r(),a(_,{key:0,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l.value),onClick:t.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),a(f,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=R(w,[["render",j]]);w.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const so={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:p})=>({components:{FSAutocompleteGroup:A,FSCol:U},props:Object.keys(p),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var G,h,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteGroup,
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
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(V=(h=d.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const co=["Variations"];export{d as Variations,co as __namedExportsOrder,so as default};
