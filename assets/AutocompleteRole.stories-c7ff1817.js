import{f as x,g as T,I as z,J as a,K as s,L as i,B as J,O as m,P as u,N as d,A as c,Q as K,R as Q}from"./vue.esm-bundler-cd768bc3.js";import{F as H}from"./FSAutocompleteField-e48f1242.js";import{F as C}from"./FSCheckbox-0f33b66c.js";import{_ as O}from"./FSIcon-203715fb.js";import{_ as S}from"./FSSpan-da6dde8e.js";import{_ as F}from"./FSRow-1d7c2545.js";import{P as v}from"./permissionInfos-da95e15e.js";import{C as w}from"./base-a00c89a9.js";import{S as N}from"./serviceFactory-6fc44bfb.js";import{C as $}from"./composableFactory-c82cc213.js";import{u as W}from"./useAutocomplete-26502e10.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSelect-faa1eb31.js";import{_ as ee}from"./FSCol-ff457bc3.js";import"./FSToggleSet-a86c3fe6.js";import"./FSSlideGroup-cca5a53c.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./useSlots-2af30a3d.js";import"./VSlideGroup-61bc8bc9.js";import"./index-055d6469.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./FSWrapGroup-528d68da.js";import"./VInput-5fe9e616.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VLabel-a834020c.js";import"./loader-3bcfb6cd.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./filter-7dfa57ec.js";import"./VMenu-501341cc.js";import"./VOverlay-43a7a638.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";var h=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(h||{});class k{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class oe extends k{constructor(o){super(o),this.description=o.description}}class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class te extends L{constructor(o){super(o),this.description=o.description}}const U=()=>`${w()}/role-organisations`,ie=e=>`${U()}/${encodeURIComponent(e)}`,q=()=>`${w()}/role-organisation-types`,ne=e=>`${q()}/${encodeURIComponent(e)}`,re=new N("roleOrganisation",oe).createComplete(U,ie,k),le=$.getMany(re),ae=new N("roleOrganisationType",te).create(e=>e.build(e.addGet(ne),e.addGetMany(q,L),e.addNotify())),se=$.getMany(ae),P=x({name:"FSAutocompleteRole",components:{FSAutocompleteField:H,FSCheckbox:C,FSIcon:O,FSSpan:S,FSRow:F},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:l,fetching:R,entities:b}=se(),{getMany:_,fetching:f,entities:n}=le(),r=T(()=>b.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.OrganisationType})).concat(n.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.Organisation})))),p=T(()=>j.value&&(R.value||f.value)),E=t=>{Array.isArray(t)?(o("update:modelValue",t.map(y=>y.id)),o("update:type",t.map(y=>y.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},M=t=>Promise.all([l({...e.roleOrganisationTypeFilters,search:t??void 0}),_({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:G,search:B,init:j,onUpdate:Y}=W(r,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,M,E);return{toggleSet:G,loading:p,search:B,roles:r,onUpdate:Y}}});function pe(e,o,l,R,b,_){const f=z("FSAutocompleteField");return a(),s(f,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:n})=>[e.$props.modelValue?(a(),s(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[n.raw.icon?(a(),s(O,{key:0},{default:i(()=>[m(u(n.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(n.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"autocomplete-item":i(({props:n,item:r})=>[c(Z,K(Q({...n,title:""})),{default:i(()=>[c(F,{align:"center-left",wrap:!1},{default:i(()=>{var p;return[e.$props.multiple?(a(),s(C,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(r.value),onClick:n.onClick},null,8,["modelValue","onClick"])):d("",!0),r.raw.icon?(a(),s(O,{key:1},{default:i(()=>[m(u(r.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const D=X(P,[["render",pe]]);P.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const vo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:D,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var A,V,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(V=g.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const wo=["Variations"];export{g as Variations,wo as __namedExportsOrder,vo as default};
