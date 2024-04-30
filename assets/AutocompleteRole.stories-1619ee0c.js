import{j as w,e as u,I as q,J as E,K as k,A as D}from"./vue.esm-bundler-82a4b45a.js";import{F as M}from"./FSAutocompleteField-61ca200a.js";import{P as O}from"./permissionInfos-da95e15e.js";import{C as h}from"./base-ec6565f2.js";import{S as F}from"./serviceFactory-7552fe10.js";import{C as S}from"./composableFactory-2f513de5.js";import{u as G}from"./useAutocomplete-14a2146a.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSCol-8326ac62.js";import"./FSButton-fa754e08.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./FSRow-2ccfd21b.js";import"./css-c39c4a6e.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-6b833922.js";import"./FSSlideGroup-8338acae.js";import"./FSButtonNextIcon-e9cfd47b.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VSelect-fca10f65.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VMenu-9dbbffaa.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./index-0f4b4beb.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./filter-4073c1af.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";var a=(o=>(o[o.None=0]="None",o[o.Organisation=1]="Organisation",o[o.OrganisationType=2]="OrganisationType",o))(a||{});class R{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class B extends R{constructor(e){super(e),this.description=e.description}}class b{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.userType=e.userType,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class Y extends b{constructor(e){super(e),this.description=e.description}}const T=()=>`${h()}/role-organisations`,J=o=>`${T()}/${encodeURIComponent(o)}`,A=()=>`${h()}/role-organisation-types`,K=o=>`${A()}/${encodeURIComponent(o)}`,x=new F("roleOrganisation",B).createComplete(T,J,R),z=S.getMany(x),H=new F("roleOrganisationType",Y).create(o=>o.build(o.addGet(K),o.addGetMany(A,b),o.addNotify())),Q=S.getMany(H),I=w({name:"FSAutocompleteRole",components:{FSAutocompleteField:M},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(o,{emit:e}){const{getMany:i,fetching:p,entities:m}=Q(),{getMany:d,fetching:r,entities:s}=z(),c=u(()=>m.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.OrganisationType})).concat(s.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.Organisation})))),C=t=>{Array.isArray(t)?(e("update:modelValue",t.map(l=>l.id)),e("update:type",t.map(l=>l.type))):(e("update:modelValue",t==null?void 0:t.id),e("update:type",t==null?void 0:t.type))},_=t=>Promise.all([i({...o.roleOrganisationTypeFilters,search:t??void 0}),d({...o.roleOrganisationFilters,search:t??void 0})]),{toggleSet:V,search:N,init:U,onUpdate:$}=G(c,[()=>o.roleOrganisationTypeFilters,()=>o.roleOrganisationFilters],e,_,C),L=u(()=>U.value&&(p.value||r.value));return{toggleSet:V,loading:L,search:N,roles:c,onUpdate:$}}});function W(o,e,i,p,m,d){const r=q("FSAutocompleteField");return E(),k(r,D({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,loading:o.loading,items:o.roles,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":e[0]||(e[0]=s=>o.search=s)},o.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const v=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const go={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"11"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteRole:v,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
