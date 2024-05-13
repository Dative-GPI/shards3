import{j as k,e as $,I as q,J as r,K as a,L as o,B as D,U as u,V as i,N as m,A as s,W as N,X as B}from"./vue.esm-bundler-41eda46b.js";import{F as I}from"./FSAutocompleteField-ab144f6b.js";import{F as _}from"./FSCheckbox-fb1efdda.js";import{_ as f}from"./FSIcon-33b1b769.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{u as U}from"./useGroups-a441d96f.js";import{u as j}from"./useAutocomplete-0136f2aa.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T}from"./VSelect-343e1eb1.js";import{_ as P}from"./FSCol-282cc158.js";import"./FSToggleSet-d830be43.js";import"./FSSlideGroup-dc19142a.js";import"./FSButtonNextIcon-d492a2d3.js";import"./FSButton-6f4c5e31.js";import"./FSClickable-25f814f4.js";import"./FSCard-5c9795f4.js";import"./useColors-c7c61044.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-720d9fd7.js";import"./css-35e8563f.js";import"./VProgressCircular-9cdac648.js";import"./color-92f22fcc.js";import"./useRender-55bb8ab6.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-be2a9962.js";import"./index-3d73431e.js";import"./display-a55575e0.js";import"./goto-e333168a.js";import"./locale-850d67a0.js";import"./proxiedModel-a34e17b7.js";import"./group-4938f20b.js";import"./FSWrapGroup-9d68a093.js";import"./VInput-8f2c12b1.js";import"./transition-a4f3f1b4.js";import"./density-a7a72377.js";import"./dimensions-9ac12c80.js";import"./VField-095c5517.js";import"./VSpacer-19440644.js";import"./VLabel-484dc627.js";import"./loader-0baaac91.js";import"./rounded-e85715e4.js";import"./VDefaultsProvider-b40931ed.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-f72d1bee.js";import"./elevation-c799c3f5.js";import"./useRules-d33c1ab7.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./filter-ee19de16.js";import"./VMenu-9445716e.js";import"./VOverlay-d8fd5084.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./VSelectionControl-09c80f59.js";import"./index-1668950c.js";import"./pathCrumb-3dbc85d5.js";import"./base-72a78366.js";import"./useAppOrganisationId-de810534.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-ac5393da.js";import"./VImg-8e58296a.js";import"./VDivider-6afe813a.js";const w=k({name:"FSAutocompleteGroup",components:{FSAutocompleteField:I,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{getMany:v,fetching:b,entities:c}=U(),y=$(()=>l.value&&b.value),g=C=>v({...e.groupFilters,search:C??void 0}),{toggleSet:t,init:l,onUpdate:n}=j(c,[()=>e.groupFilters],p,g);return{toggleSet:t,loading:y,groups:c,onUpdate:n}}});function R(e,p,v,b,c,y){const g=q("FSAutocompleteField");return r(),a(g,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(r(),a(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(r(),a(f,{key:0},{default:o(()=>[u(i(t.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:t,item:l})=>[s(T,N(B({...t,title:""})),{default:o(()=>[s(F,{align:"center-left",wrap:!1},{default:o(()=>{var n;return[e.$props.multiple?(r(),a(_,{key:0,modelValue:(n=e.$props.modelValue)==null?void 0:n.includes(l.value),onClick:t.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),a(f,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=O(w,[["render",R]]);w.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const ao={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:p})=>({components:{FSAutocompleteGroup:A,FSCol:P},props:Object.keys(p),setup(){return{...e}},template:`
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
