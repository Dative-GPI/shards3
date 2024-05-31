import{f as k,g as $,D,E as r,F as a,G as o,A as q,K as u,L as i,I as m,M as s,N,O as I}from"./vue.esm-bundler-838daa40.js";import{F as O}from"./FSAutocompleteField-730efa84.js";import{F as _}from"./FSCheckbox-884ec95b.js";import{_ as f}from"./FSIcon-48205264.js";import{_ as S}from"./FSSpan-3df08200.js";import{_ as F}from"./FSRow-753b58e5.js";import{u as B}from"./useGroups-d22c28be.js";import{u as T}from"./useAutocomplete-f4f2ca8a.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{V as j}from"./VSelect-73f86563.js";import{_ as M}from"./FSCol-44fe82a9.js";import"./FSSearchField-fd4e58de.js";import"./FSTextField-5838a9fc.js";import"./VField-b5e232d6.js";import"./useColors-8c9c4d1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-b3e7898e.js";import"./FSClickable-104d21f2.js";import"./FSCard-b76495e8.js";import"./css-67cfec15.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-fb154c77.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-9a5da185.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-89f81a7c.js";import"./FSSlideGroup-9fadb36c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-d7904dc1.js";import"./FSFadeOut-ce6cecc6.js";import"./FSLoader-d60b60c7.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./pathCrumb-3dbc85d5.js";import"./base-ef43f4ed.js";import"./useAppOrganisationId-ac05104a.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-5509dfbf.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";const w=k({name:"FSAutocompleteGroup",components:{FSAutocompleteField:O,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{getMany:v,fetching:b,entities:c}=B(),y=$(()=>l.value&&b.value),g=C=>v({...e.groupFilters,search:C??void 0}),{toggleSet:t,init:l,onUpdate:n}=T(c,[()=>e.groupFilters],p,g);return{toggleSet:t,loading:y,groups:c,onUpdate:n}}});function P(e,p,v,b,c,y){const g=D("FSAutocompleteField");return r(),a(g,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(r(),a(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(r(),a(f,{key:0},{default:o(()=>[u(i(t.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:t,item:l})=>[s(j,N(I({...t,title:""})),{default:o(()=>[s(F,{align:"center-left",wrap:!1},{default:o(()=>{var n;return[e.$props.multiple?(r(),a(_,{key:0,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l.value),onClick:t.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),a(f,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=U(w,[["render",P]]);w.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const so={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:p})=>({components:{FSAutocompleteGroup:A,FSCol:M},props:Object.keys(p),setup(){return{...e}},template:`
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
