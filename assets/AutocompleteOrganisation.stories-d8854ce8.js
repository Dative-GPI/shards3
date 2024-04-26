import{j as A,e as C,I,J as V,K as T,A as U}from"./vue.esm-bundler-3386cb71.js";import{F as _}from"./FSAutocompleteField-c07b5f3c.js";import{P as $}from"./permissionInfos-da95e15e.js";import{G as N}from"./base-0de1729e.js";import{S as D}from"./serviceFactory-3393b4e4.js";import{C as k}from"./composableFactory-0f23559b.js";import{u as w}from"./useAutocomplete-e0c21e85.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as G}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSRow-9733beba.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VSelect-748790cd.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VMenu-e9f9429e.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./index-dcfb76a3.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./filter-a78161c9.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";class h{constructor(e){this.id=e.id,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.label=e.label,this.userOrganisationsCount=e.userOrganisationsCount,this.adminId=e.adminId,this.adminName=e.adminName}}class R extends h{constructor(e){super(e),this.code=e.code,this.organisationTypeId=e.organisationTypeId,this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.description=e.description,this.locationsCount=e.locationsCount,this.deviceOrganisationsCount=e.deviceOrganisationsCount,this.permissions=e.permissions.map(o=>new $(o))}}const f=()=>`${N()}/organisations`,d=t=>`${f()}/${encodeURIComponent(t)}`,B=new D("organisation",R).create(t=>t.build(t.addGet(d),t.addGetMany(f,h),t.addUpdate(d),t.addNotify())),j=k.getMany(B),S=A({name:"FSAutocompleteOrganisation",components:{FSAutocompleteField:_},props:{organisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emit:["update:modelValue"],setup(t,{emit:e}){const{entities:o,fetching:s,getMany:l}=j(),m=r=>l({...t.organisationFilters,search:r??void 0}),{toggleSet:n,search:a,init:O,onUpdate:b}=w(o,[()=>t.organisationFilters],e,m),v=r=>{var p;return(p=t.modelValue)==null?void 0:p.includes(r)},y=C(()=>O.value&&s.value);return{organisations:o,toggleSet:n,loading:y,search:a,isSelected:v,onUpdate:b}}});function H(t,e,o,s,l,m){const n=I("FSAutocompleteField");return V(),T(n,U({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,loading:t.loading,items:t.organisations,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":e[0]||(e[0]=a=>t.search=a)},t.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const F=q(S,[["render",H]]);S.__docgenInfo={displayName:"FSAutocompleteOrganisation",exportName:"default",description:"",tags:{},props:[{name:"organisationFilters",type:{name:"OrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue"]};const tt={title:"Foundation/Shared/Autocompletes/AutocompleteOrganisation",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:"1"}},render:(t,{argTypes:e})=>({components:{FSAutocompleteOrganisation:F,FSCol:G},props:Object.keys(e),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteOrganisation
        label="Organisation"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisation
        label="Organisation with toggleset disabled"
        :disableToggleSet="true"
        v-model="args.value1"
      />
    </FSCol>`})};var u,g,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteOrganisation,
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
      <FSAutocompleteOrganisation
        label="Organisation"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisation
        label="Organisation with toggleset disabled"
        :disableToggleSet="true"
        v-model="args.value1"
      />
    </FSCol>\`
  })
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const ot=["Variations"];export{i as Variations,ot as __namedExportsOrder,tt as default};
