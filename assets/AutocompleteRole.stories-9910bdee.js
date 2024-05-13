import{j as x,e as T,I as z,J as a,K as s,L as i,B as J,U as m,V as u,N as d,A as c,W as K,X as W}from"./vue.esm-bundler-857e5af7.js";import{F as X}from"./FSAutocompleteField-95ce1ca1.js";import{F as C}from"./FSCheckbox-d1b08f47.js";import{_ as O}from"./FSIcon-faf0e444.js";import{_ as S}from"./FSSpan-9f7a3096.js";import{_ as F}from"./FSRow-e30f1dcc.js";import{P as v}from"./permissionInfos-da95e15e.js";import{C as w}from"./base-0cefeb30.js";import{S as N}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-64294cb0.js";import{u as H}from"./useAutocomplete-ecc57bef.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSelect-2f600942.js";import{_ as ee}from"./FSCol-439c812a.js";import"./FSToggleSet-32c663bb.js";import"./FSSlideGroup-0f6a80f8.js";import"./FSButtonNextIcon-cf7184c0.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSCard-c144a688.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./css-ab2bdb81.js";import"./VProgressCircular-593755b1.js";import"./color-5d3cc229.js";import"./useRender-d5beceb3.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./useSlots-8bee1a74.js";import"./VSlideGroup-23212639.js";import"./index-d6be2044.js";import"./display-56858c3a.js";import"./goto-975c1e2c.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./group-501836f7.js";import"./FSWrapGroup-47fc2c20.js";import"./VInput-6c2a4fd3.js";import"./transition-2a27d0f7.js";import"./density-69cd8efb.js";import"./dimensions-d7f5c5ad.js";import"./VField-9dc825df.js";import"./VSpacer-37a4cd9a.js";import"./VLabel-820f7887.js";import"./loader-b99105cf.js";import"./rounded-67c03651.js";import"./VDefaultsProvider-51a3a301.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ff56dc12.js";import"./elevation-d5a2e352.js";import"./useRules-b3d475c7.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./filter-24b96659.js";import"./VMenu-ddfad70d.js";import"./VOverlay-dc792521.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./VSelectionControl-11aadb82.js";import"./index-f95cc40a.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./useDebounce-3221123d.js";import"./ssrBoot-4aec2e0b.js";import"./border-43a3c780.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";var h=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(h||{});class k{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class oe extends k{constructor(o){super(o),this.description=o.description}}class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class te extends L{constructor(o){super(o),this.description=o.description}}const U=()=>`${w()}/role-organisations`,ie=e=>`${U()}/${encodeURIComponent(e)}`,q=()=>`${w()}/role-organisation-types`,ne=e=>`${q()}/${encodeURIComponent(e)}`,re=new N("roleOrganisation",oe).createComplete(U,ie,k),le=$.getMany(re),ae=new N("roleOrganisationType",te).create(e=>e.build(e.addGet(ne),e.addGetMany(q,L),e.addNotify())),se=$.getMany(ae),D=x({name:"FSAutocompleteRole",components:{FSAutocompleteField:X,FSCheckbox:C,FSIcon:O,FSSpan:S,FSRow:F},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:l,fetching:R,entities:b}=se(),{getMany:_,fetching:f,entities:n}=le(),r=T(()=>b.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.OrganisationType})).concat(n.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.Organisation})))),p=T(()=>B.value&&(R.value||f.value)),P=t=>{Array.isArray(t)?(o("update:modelValue",t.map(y=>y.id)),o("update:type",t.map(y=>y.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},M=t=>Promise.all([l({...e.roleOrganisationTypeFilters,search:t??void 0}),_({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:G,search:j,init:B,onUpdate:Y}=H(r,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,M,P);return{toggleSet:G,loading:p,search:j,roles:r,onUpdate:Y}}});function pe(e,o,l,R,b,_){const f=z("FSAutocompleteField");return a(),s(f,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:n})=>[e.$props.modelValue?(a(),s(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[n.raw.icon?(a(),s(O,{key:0},{default:i(()=>[m(u(n.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(n.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"autocomplete-item":i(({props:n,item:r})=>[c(Z,K(W({...n,title:""})),{default:i(()=>[c(F,{align:"center-left",wrap:!1},{default:i(()=>{var p;return[e.$props.multiple?(a(),s(C,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(r.value),onClick:n.onClick},null,8,["modelValue","onClick"])):d("",!0),r.raw.icon?(a(),s(O,{key:1},{default:i(()=>[m(u(r.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const E=Q(D,[["render",pe]]);D.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const Co={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:E,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const vo=["Variations"];export{g as Variations,vo as __namedExportsOrder,Co as default};
