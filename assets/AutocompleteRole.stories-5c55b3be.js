import{j as w,e as u,I as q,J as E,K as k,A as D}from"./vue.esm-bundler-3386cb71.js";import{F as M}from"./FSAutocompleteField-c07b5f3c.js";import{P as O}from"./permissionInfos-da95e15e.js";import{C as h}from"./base-4e5ccaa5.js";import{S as F}from"./serviceFactory-3393b4e4.js";import{C as S}from"./composableFactory-0f23559b.js";import{u as G}from"./useAutocomplete-e0c21e85.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSRow-9733beba.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VSelect-748790cd.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VMenu-e9f9429e.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./index-dcfb76a3.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./filter-a78161c9.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";var a=(o=>(o[o.None=0]="None",o[o.Organisation=1]="Organisation",o[o.OrganisationType=2]="OrganisationType",o))(a||{});class R{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class B extends R{constructor(e){super(e),this.description=e.description}}class b{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.userType=e.userType,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class Y extends b{constructor(e){super(e),this.description=e.description}}const T=()=>`${h()}/role-organisations`,J=o=>`${T()}/${encodeURIComponent(o)}`,A=()=>`${h()}/role-organisation-types`,K=o=>`${A()}/${encodeURIComponent(o)}`,x=new F("roleOrganisation",B).createComplete(T,J,R),z=S.getMany(x),H=new F("roleOrganisationType",Y).create(o=>o.build(o.addGet(K),o.addGetMany(A,b),o.addNotify())),Q=S.getMany(H),I=w({name:"FSAutocompleteRole",components:{FSAutocompleteField:M},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(o,{emit:e}){const{getMany:i,fetching:p,entities:m}=Q(),{getMany:d,fetching:r,entities:s}=z(),c=u(()=>m.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.OrganisationType})).concat(s.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.Organisation})))),C=t=>{Array.isArray(t)?(e("update:modelValue",t.map(l=>l.id)),e("update:type",t.map(l=>l.type))):(e("update:modelValue",t==null?void 0:t.id),e("update:type",t==null?void 0:t.type))},_=t=>Promise.all([i({...o.roleOrganisationTypeFilters,search:t??void 0}),d({...o.roleOrganisationFilters,search:t??void 0})]),{toggleSet:V,search:N,init:U,onUpdate:$}=G(c,[()=>o.roleOrganisationTypeFilters,()=>o.roleOrganisationFilters],e,_,C),L=u(()=>U.value&&(p.value||r.value));return{toggleSet:V,loading:L,search:N,roles:c,onUpdate:$}}});function W(o,e,i,p,m,d){const r=q("FSAutocompleteField");return E(),k(r,D({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,loading:o.loading,items:o.roles,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":e[0]||(e[0]=s=>o.search=s)},o.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const v=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const go={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"11"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteRole:v,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
