import{f as J,g as V,I as K,J as s,K as p,L as n,B as Q,O as d,P as c,N as g,A as f,Q as H,R as W}from"./vue.esm-bundler-cd768bc3.js";import{F as X}from"./FSAutocompleteField-2c5ab937.js";import{F as N}from"./FSCheckbox-0f33b66c.js";import{_ as h}from"./FSIcon-203715fb.js";import{_ as R}from"./FSSpan-da6dde8e.js";import{_ as b}from"./FSRow-1d7c2545.js";import{P as $}from"./permissionInfos-da95e15e.js";import{C as k}from"./base-a00c89a9.js";import{S as O}from"./serviceFactory-2dfad3af.js";import{C as A}from"./composableFactory-c82cc213.js";import{u as Z}from"./useAutocomplete-26502e10.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as oe}from"./VSelect-faa1eb31.js";import{_ as te}from"./FSCol-ff457bc3.js";import"./FSToggleSet-ab7c55f3.js";import"./FSSlideGroup-df6ede8b.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./useSlots-2af30a3d.js";import"./VSlideGroup-61bc8bc9.js";import"./index-055d6469.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./FSWrapGroup-8dc071a4.js";import"./VInput-5fe9e616.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-d090f013.js";import"./VSpacer-0c52efc7.js";import"./VLabel-a834020c.js";import"./loader-3bcfb6cd.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./filter-7dfa57ec.js";import"./VMenu-501341cc.js";import"./VOverlay-43a7a638.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VSelectionControl-e9dab1c2.js";import"./index-f4fa4c36.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";var _=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(_||{});class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(i=>new $(i))}}class T extends L{constructor(o){super(o),this.description=o.description}}class U{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(i=>new $(i))}}class ie extends U{constructor(o){super(o),this.description=o.description}}const P=()=>`${k()}/role-organisations`,q=e=>`${P()}/${encodeURIComponent(e)}`,D=()=>`${k()}/role-organisation-types`,ne=e=>`${D()}/${encodeURIComponent(e)}`,re=new O("roleOrganisation",T).createComplete(P,q,L),ae=new O("roleOrganisation",T).create(e=>e.build(e.addNotify(o=>({...O.addCustom("updatePermissions",(i,a,m)=>i.patch(q(a),m),i=>{const a=new T(i);return o.notify("update",a),a})})))),le=A.getMany(re);A.custom(ae.updatePermissions);const se=new O("roleOrganisationType",ie).create(e=>e.build(e.addGet(ne),e.addGetMany(D,U),e.addNotify())),pe=A.getMany(se),E=J({name:"FSAutocompleteRole",components:{FSAutocompleteField:X,FSCheckbox:N,FSIcon:h,FSSpan:R,FSRow:b},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:i,fetching:a,entities:m}=pe(),{getMany:I,fetching:S,entities:r}=le(),l=V(()=>m.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:_.OrganisationType})).concat(r.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:_.Organisation})))),u=V(()=>x.value&&(a.value||S.value)),G=t=>{Array.isArray(t)?(o("update:modelValue",t.map(F=>F.id)),o("update:type",t.map(F=>F.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},B=t=>Promise.all([i({...e.roleOrganisationTypeFilters,search:t??void 0}),I({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:j,search:Y,init:x,onUpdate:z}=Z(l,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,B,G);return{toggleSet:j,loading:u,search:Y,roles:l,onUpdate:z}}});function me(e,o,i,a,m,I){const S=K("FSAutocompleteField");return s(),p(S,Q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":n(({item:r})=>[e.$props.modelValue?(s(),p(b,{key:0,align:"center-center",wrap:!1},{default:n(()=>[r.raw.icon?(s(),p(h,{key:0},{default:n(()=>[d(c(r.raw.icon),1)]),_:2},1024)):g("",!0),f(R,null,{default:n(()=>[d(c(r.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"autocomplete-item":n(({props:r,item:l})=>[f(oe,H(W({...r,title:""})),{default:n(()=>[f(b,{align:"center-left",wrap:!1},{default:n(()=>{var u;return[e.$props.multiple?(s(),p(N,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(l.value),onClick:r.onClick},null,8,["modelValue","onClick"])):g("",!0),l.raw.icon?(s(),p(h,{key:1},{default:n(()=>[d(c(l.raw.icon),1)]),_:2},1024)):g("",!0),f(R,null,{default:n(()=>[d(c(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const M=ee(E,[["render",me]]);E.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const wo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:M,FSCol:te},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var C,v,w;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(v=y.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const No=["Variations"];export{y as Variations,No as __namedExportsOrder,wo as default};
