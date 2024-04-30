import{j as A,e as C,I,J as V,K as T,A as U}from"./vue.esm-bundler-82a4b45a.js";import{F as _}from"./FSAutocompleteField-9928e23d.js";import{P as $}from"./permissionInfos-da95e15e.js";import{G as N}from"./base-0de1729e.js";import{S as D}from"./serviceFactory-7552fe10.js";import{C as k}from"./composableFactory-2f513de5.js";import{u as w}from"./useAutocomplete-14a2146a.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as G}from"./FSCol-8326ac62.js";import"./FSButton-c71cf6ce.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./FSRow-2ccfd21b.js";import"./css-c39c4a6e.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-7d54313a.js";import"./FSSlideGroup-35b11b76.js";import"./FSButtonNextIcon-3fcfc95d.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VSelect-fca10f65.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VMenu-9dbbffaa.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./index-0f4b4beb.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./filter-4073c1af.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";class h{constructor(e){this.id=e.id,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.label=e.label,this.userOrganisationsCount=e.userOrganisationsCount,this.adminId=e.adminId,this.adminName=e.adminName}}class R extends h{constructor(e){super(e),this.code=e.code,this.organisationTypeId=e.organisationTypeId,this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.description=e.description,this.locationsCount=e.locationsCount,this.deviceOrganisationsCount=e.deviceOrganisationsCount,this.permissions=e.permissions.map(o=>new $(o))}}const f=()=>`${N()}/organisations`,d=t=>`${f()}/${encodeURIComponent(t)}`,B=new D("organisation",R).create(t=>t.build(t.addGet(d),t.addGetMany(f,h),t.addUpdate(d),t.addNotify())),j=k.getMany(B),S=A({name:"FSAutocompleteOrganisation",components:{FSAutocompleteField:_},props:{organisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emit:["update:modelValue"],setup(t,{emit:e}){const{entities:o,fetching:s,getMany:l}=j(),m=r=>l({...t.organisationFilters,search:r??void 0}),{toggleSet:n,search:a,init:O,onUpdate:b}=w(o,[()=>t.organisationFilters],e,m),v=r=>{var p;return(p=t.modelValue)==null?void 0:p.includes(r)},y=C(()=>O.value&&s.value);return{organisations:o,toggleSet:n,loading:y,search:a,isSelected:v,onUpdate:b}}});function H(t,e,o,s,l,m){const n=I("FSAutocompleteField");return V(),T(n,U({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,loading:t.loading,items:t.organisations,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":e[0]||(e[0]=a=>t.search=a)},t.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const F=q(S,[["render",H]]);S.__docgenInfo={displayName:"FSAutocompleteOrganisation",exportName:"default",description:"",tags:{},props:[{name:"organisationFilters",type:{name:"OrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue"]};const tt={title:"Foundation/Shared/Autocompletes/AutocompleteOrganisation",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:"1"}},render:(t,{argTypes:e})=>({components:{FSAutocompleteOrganisation:F,FSCol:G},props:Object.keys(e),setup(){return{...t}},template:`
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
