import{j as k,e as $,I as q,J as r,K as a,L as o,B as D,U as u,V as i,N as m,A as s,W as N,X as B}from"./vue.esm-bundler-41eda46b.js";import{F as I}from"./FSAutocompleteField-95896a23.js";import{F as _}from"./FSCheckbox-90b24572.js";import{_ as f}from"./FSIcon-713345eb.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{u as U}from"./useGroups-a441d96f.js";import{u as j}from"./useAutocomplete-0136f2aa.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T}from"./VSelect-defb5d1c.js";import{_ as P}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./css-35e8563f.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./filter-133522f7.js";import"./VMenu-499c8185.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./pathCrumb-3dbc85d5.js";import"./base-72a78366.js";import"./useAppOrganisationId-de810534.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";const w=k({name:"FSAutocompleteGroup",components:{FSAutocompleteField:I,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{getMany:v,fetching:b,entities:c}=U(),y=$(()=>l.value&&b.value),g=C=>v({...e.groupFilters,search:C??void 0}),{toggleSet:t,init:l,onUpdate:n}=j(c,[()=>e.groupFilters],p,g);return{toggleSet:t,loading:y,groups:c,onUpdate:n}}});function R(e,p,v,b,c,y){const g=q("FSAutocompleteField");return r(),a(g,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(r(),a(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(r(),a(f,{key:0},{default:o(()=>[u(i(t.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:t,item:l})=>[s(T,N(B({...t,title:""})),{default:o(()=>[s(F,{align:"center-left",wrap:!1},{default:o(()=>{var n;return[e.$props.multiple?(r(),a(_,{key:0,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l.value),onClick:t.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),a(f,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=O(w,[["render",R]]);w.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const ao={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:p})=>({components:{FSAutocompleteGroup:A,FSCol:P},props:Object.keys(p),setup(){return{...e}},template:`
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
    </FSCol>`})};var G,V,h;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(h=(V=d.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const po=["Variations"];export{d as Variations,po as __namedExportsOrder,ao as default};
