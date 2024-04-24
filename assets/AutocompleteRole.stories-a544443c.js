import{j as w,e as u,I as q,J as E,K as k,x as D}from"./vue.esm-bundler-0c8496bd.js";import{F as M}from"./FSAutocompleteField-022e7e15.js";import{P as O}from"./permissionInfos-da95e15e.js";import{C as h}from"./base-d0065ec9.js";import{S as F}from"./serviceFactory-3393b4e4.js";import{C as S}from"./composableFactory-ad68cfdd.js";import{u as G}from"./useAutocomplete-bb48c17a.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSCol-0a323bdc.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./FSRow-547598b4.js";import"./css-0fb78066.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./FSToggleSet-f583e42c.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./VSlideGroup-8312a613.js";import"./index-5d52efe8.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSWrapGroup-53ffd2f5.js";import"./VInput-523a6986.js";import"./transition-893c383a.js";import"./density-22f26472.js";import"./useRules-a67d9042.js";import"./VSpacer-989c3452.js";import"./VSelect-f6dc4f4d.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./VLabel-e60bde78.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VOverlay-471318e4.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./filter-981204f7.js";import"./useAppOrganisationId-df946d5a.js";import"./lodash-569b8a6d.js";import"./useDebounce-9a2b81c6.js";var a=(o=>(o[o.None=0]="None",o[o.Organisation=1]="Organisation",o[o.OrganisationType=2]="OrganisationType",o))(a||{});class R{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class B extends R{constructor(e){super(e),this.description=e.description}}class b{constructor(e){this.id=e.id,this.roleId=e.roleId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.userType=e.userType,this.icon=e.icon,this.code=e.code,this.label=e.label,this.scope=e.scope,this.userType=e.userType,this.tags=e.tags.slice(),this.permissions=e.permissions.map(i=>new O(i))}}class Y extends b{constructor(e){super(e),this.description=e.description}}const T=()=>`${h()}/role-organisations`,x=o=>`${T()}/${encodeURIComponent(o)}`,A=()=>`${h()}/role-organisation-types`,J=o=>`${A()}/${encodeURIComponent(o)}`,K=new F("roleOrganisation",B).createComplete(T,x,R),z=S.getMany(K),H=new F("roleOrganisationType",Y).create(o=>o.build(o.addGet(J),o.addGetMany(A,b),o.addNotify())),Q=S.getMany(H),I=w({name:"FSAutocompleteRole",components:{FSAutocompleteField:M},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(o,{emit:e}){const{getMany:i,fetching:p,entities:m}=Q(),{getMany:d,fetching:r,entities:s}=z(),c=u(()=>m.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.OrganisationType})).concat(s.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:a.Organisation})))),C=t=>{Array.isArray(t)?(e("update:modelValue",t.map(l=>l.id)),e("update:type",t.map(l=>l.type))):(e("update:modelValue",t==null?void 0:t.id),e("update:type",t==null?void 0:t.type))},_=t=>Promise.all([i({...o.roleOrganisationTypeFilters,search:t??void 0}),d({...o.roleOrganisationFilters,search:t??void 0})]),{toggleSet:V,search:N,init:U,onUpdate:$}=G(c,[()=>o.roleOrganisationTypeFilters,()=>o.roleOrganisationFilters],e,_,C),L=u(()=>U.value&&(p.value||r.value));return{toggleSet:V,loading:L,search:N,roles:c,onUpdate:$}}});function W(o,e,i,p,m,d){const r=q("FSAutocompleteField");return E(),k(r,D({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,loading:o.loading,items:o.roles,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":e[0]||(e[0]=s=>o.search=s)},o.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const v=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const go={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"11"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteRole:v,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
