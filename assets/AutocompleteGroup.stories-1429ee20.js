import{j as k,e as $,I as q,J as r,K as a,L as o,B as D,O as u,P as i,N as m,A as s,Q as N,R as B}from"./vue.esm-bundler-01006032.js";import{F as I}from"./FSAutocompleteField-c1dfb31d.js";import{F as _}from"./FSCheckbox-40e0c55f.js";import{_ as f}from"./FSIcon-15b738c8.js";import{_ as S}from"./FSSpan-6e79caf3.js";import{_ as F}from"./FSRow-83e75060.js";import{u as O}from"./useGroups-32f8b702.js";import{u as j}from"./useAutocomplete-3cb054e4.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as R}from"./VSelect-450b500f.js";import{_ as T}from"./FSCol-c97fad61.js";import"./FSToggleSet-be653781.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./FSButton-be94d44f.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./css-279a0029.js";import"./VProgressCircular-f05fef1e.js";import"./color-8c62b342.js";import"./useRender-4bcbb6ac.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./useSlots-e0d7ab7c.js";import"./VSlideGroup-e0f01fc0.js";import"./index-491d6eb9.js";import"./display-77f43728.js";import"./goto-9bab4060.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./group-e9c3615d.js";import"./FSWrapGroup-83a13764.js";import"./VInput-50bb839f.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./VField-f1a9daf9.js";import"./VSpacer-78b81ef3.js";import"./VLabel-f27c70ae.js";import"./loader-878147ed.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useRules-54978858.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./filter-9717b913.js";import"./VMenu-4c05ddd6.js";import"./VOverlay-d4d3a71f.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./pathCrumb-3dbc85d5.js";import"./base-d6256dbd.js";import"./useAppOrganisationId-2267e850.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-25aa3ef9.js";import"./useDebounce-ff82ad1d.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";const w=k({name:"FSAutocompleteGroup",components:{FSAutocompleteField:I,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{getMany:v,fetching:b,entities:c}=O(),y=$(()=>l.value&&b.value),g=C=>v({...e.groupFilters,search:C??void 0}),{toggleSet:t,init:l,onUpdate:n}=j(c,[()=>e.groupFilters],p,g);return{toggleSet:t,loading:y,groups:c,onUpdate:n}}});function U(e,p,v,b,c,y){const g=q("FSAutocompleteField");return r(),a(g,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(r(),a(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(r(),a(f,{key:0},{default:o(()=>[u(i(t.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:t,item:l})=>[s(R,N(B({...t,title:""})),{default:o(()=>[s(F,{align:"center-left",wrap:!1},{default:o(()=>{var n;return[e.$props.multiple?(r(),a(_,{key:0,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l.value),onClick:t.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),a(f,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=P(w,[["render",U]]);w.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const po={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:p})=>({components:{FSAutocompleteGroup:A,FSCol:T},props:Object.keys(p),setup(){return{...e}},template:`
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
}`,...(V=(h=d.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const no=["Variations"];export{d as Variations,no as __namedExportsOrder,po as default};
