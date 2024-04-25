import{j as w,e as u,I as q,J as E,K as k,x as D}from"./vue.esm-bundler-b2d5d1a7.js";import{F as M}from"./FSAutocompleteField-9a2ba8dd.js";import{P as O}from"./permissionInfos-da95e15e.js";import{C as h}from"./base-647aa1fa.js";import{S as F}from"./serviceFactory-3393b4e4.js";import{C as S}from"./composableFactory-6dbd7c00.js";import{u as G}from"./useAutocomplete-7cd31b28.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSCol-8af42802.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./FSRow-ad0fe7ea.js";import"./css-9d61559d.js";import"./useColors-1799ca43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-66179376.js";import"./VProgressCircular-b30bdd5e.js";import"./color-1b074b3b.js";import"./useRender-3dd3f3c7.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./FSIcon-6a2b7637.js";import"./FSLoader-d736f414.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./FSToggleSet-d64083d4.js";import"./FSSlideGroup-a03e159b.js";import"./FSButtonNextIcon-23a13277.js";import"./VSlideGroup-7f8275f9.js";import"./index-c0240410.js";import"./display-5af9f9da.js";import"./group-d1f5e06d.js";import"./FSWrapGroup-983c1296.js";import"./VInput-16b8deac.js";import"./transition-42bdb3ea.js";import"./density-aec4d930.js";import"./useRules-999feed4.js";import"./VSpacer-73e95d50.js";import"./VSelect-13b35610.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./VLabel-fe75201b.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./VOverlay-9625a4d7.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./VMenu-03edebad.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./index-7713af82.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./filter-dab5f9d0.js";import"./useAppOrganisationId-66e3eeba.js";import"./lodash-569b8a6d.js";import"./useDebounce-f8cba0e6.js";var a=(o=>(o[o.None=0]="None",o[o.Organisation=1]="Organisation",o[o.OrganisationType=2]="OrganisationType",o))(a||{});class R{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class B extends R{constructor(e){super(e),this.description=e.description}}class b{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.userType=e.userType,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class Y extends b{constructor(e){super(e),this.description=e.description}}const T=()=>`${h()}/role-organisations`,x=o=>`${T()}/${encodeURIComponent(o)}`,A=()=>`${h()}/role-organisation-types`,J=o=>`${A()}/${encodeURIComponent(o)}`,K=new F("roleOrganisation",B).createComplete(T,x,R),z=S.getMany(K),H=new F("roleOrganisationType",Y).create(o=>o.build(o.addGet(J),o.addGetMany(A,b),o.addNotify())),Q=S.getMany(H),I=w({name:"FSAutocompleteRole",components:{FSAutocompleteField:M},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(o,{emit:e}){const{getMany:i,fetching:p,entities:m}=Q(),{getMany:d,fetching:r,entities:s}=z(),c=u(()=>m.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.OrganisationType})).concat(s.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.Organisation})))),C=t=>{Array.isArray(t)?(e("update:modelValue",t.map(l=>l.id)),e("update:type",t.map(l=>l.type))):(e("update:modelValue",t==null?void 0:t.id),e("update:type",t==null?void 0:t.type))},_=t=>Promise.all([i({...o.roleOrganisationTypeFilters,search:t??void 0}),d({...o.roleOrganisationFilters,search:t??void 0})]),{toggleSet:V,search:N,init:U,onUpdate:$}=G(c,[()=>o.roleOrganisationTypeFilters,()=>o.roleOrganisationFilters],e,_,C),L=u(()=>U.value&&(p.value||r.value));return{toggleSet:V,loading:L,search:N,roles:c,onUpdate:$}}});function W(o,e,i,p,m,d){const r=q("FSAutocompleteField");return E(),k(r,D({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,loading:o.loading,items:o.roles,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":e[0]||(e[0]=s=>o.search=s)},o.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const v=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const go={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"11"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteRole:v,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const yo=["Variations"];export{n as Variations,yo as __namedExportsOrder,go as default};
