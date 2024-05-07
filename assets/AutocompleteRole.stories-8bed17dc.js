import{j as x,e as T,I as z,J as a,K as s,L as i,B as J,U as m,V as u,N as d,A as c,W as K,X as W}from"./vue.esm-bundler-41eda46b.js";import{F as X}from"./FSAutocompleteField-d788c579.js";import{F as C}from"./FSCheckbox-9aa0fdbb.js";import{_ as O}from"./FSIcon-6dc797d3.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{P as v}from"./permissionInfos-da95e15e.js";import{C as w}from"./base-72a78366.js";import{S as N}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-00c2f0ee.js";import{u as H}from"./useAutocomplete-0136f2aa.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSelect-994061f1.js";import{_ as ee}from"./FSCol-282cc158.js";import"./FSToggleSet-ddc99f4f.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./css-35e8563f.js";import"./VProgressCircular-e304a31d.js";import"./color-7b12579a.js";import"./useRender-b120e115.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./tag-585bbcbd.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-d28ddfe3.js";import"./index-ad5199eb.js";import"./display-40264291.js";import"./goto-e7ba55f0.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./group-53103ce4.js";import"./FSWrapGroup-8ef956e3.js";import"./VInput-1f6e9963.js";import"./transition-87ba966b.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./VField-7c3f9689.js";import"./VSpacer-b889274d.js";import"./VLabel-674db0eb.js";import"./loader-912691d5.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-b9d57263.js";import"./elevation-74b749d9.js";import"./useRules-d33c1ab7.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./filter-fb6ce324.js";import"./VMenu-40d1577e.js";import"./VOverlay-aedbdfa0.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./VSelectionControl-6bfa0431.js";import"./index-35b22454.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";var h=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(h||{});class k{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class oe extends k{constructor(o){super(o),this.description=o.description}}class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class te extends L{constructor(o){super(o),this.description=o.description}}const U=()=>`${w()}/role-organisations`,ie=e=>`${U()}/${encodeURIComponent(e)}`,q=()=>`${w()}/role-organisation-types`,ne=e=>`${q()}/${encodeURIComponent(e)}`,re=new N("roleOrganisation",oe).createComplete(U,ie,k),le=$.getMany(re),ae=new N("roleOrganisationType",te).create(e=>e.build(e.addGet(ne),e.addGetMany(q,L),e.addNotify())),se=$.getMany(ae),D=x({name:"FSAutocompleteRole",components:{FSAutocompleteField:X,FSCheckbox:C,FSIcon:O,FSSpan:S,FSRow:F},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:l,fetching:R,entities:b}=se(),{getMany:_,fetching:f,entities:n}=le(),r=T(()=>b.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.OrganisationType})).concat(n.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.Organisation})))),p=T(()=>B.value&&(R.value||f.value)),P=t=>{Array.isArray(t)?(o("update:modelValue",t.map(y=>y.id)),o("update:type",t.map(y=>y.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},M=t=>Promise.all([l({...e.roleOrganisationTypeFilters,search:t??void 0}),_({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:G,search:j,init:B,onUpdate:Y}=H(r,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,M,P);return{toggleSet:G,loading:p,search:j,roles:r,onUpdate:Y}}});function pe(e,o,l,R,b,_){const f=z("FSAutocompleteField");return a(),s(f,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:n})=>[e.$props.modelValue?(a(),s(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[n.raw.icon?(a(),s(O,{key:0},{default:i(()=>[m(u(n.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(n.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"autocomplete-item":i(({props:n,item:r})=>[c(Z,K(W({...n,title:""})),{default:i(()=>[c(F,{align:"center-left",wrap:!1},{default:i(()=>{var p;return[e.$props.multiple?(a(),s(C,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(r.value),onClick:n.onClick},null,8,["modelValue","onClick"])):d("",!0),r.raw.icon?(a(),s(O,{key:1},{default:i(()=>[m(u(r.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const E=Q(D,[["render",pe]]);D.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const Io={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:E,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>`})};var V,A,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "11"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteRole,
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
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Co=["Variations"];export{g as Variations,Co as __namedExportsOrder,Io as default};
