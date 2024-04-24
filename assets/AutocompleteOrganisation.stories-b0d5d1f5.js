import{j as F,w as O,I as S,J as f,K as b,x as v}from"./vue.esm-bundler-0c8496bd.js";import{_ as y}from"./lodash-569b8a6d.js";import{F as A}from"./FSAutocompleteField-022e7e15.js";import{P as C}from"./permissionInfos-da95e15e.js";import{G as _}from"./base-0de1729e.js";import{S as I}from"./serviceFactory-3393b4e4.js";import{C as T}from"./composableFactory-ad68cfdd.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as N}from"./FSCol-0a323bdc.js";import"./_commonjsHelpers-725317a4.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./FSRow-547598b4.js";import"./css-0fb78066.js";import"./useColors-b1c35b1c.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./FSToggleSet-f583e42c.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./VSlideGroup-8312a613.js";import"./index-5d52efe8.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSWrapGroup-53ffd2f5.js";import"./VInput-523a6986.js";import"./transition-893c383a.js";import"./density-22f26472.js";import"./useRules-a67d9042.js";import"./VSpacer-989c3452.js";import"./VSelect-f6dc4f4d.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./VLabel-e60bde78.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VOverlay-471318e4.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./filter-981204f7.js";class d{constructor(t){this.id=t.id,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.label=t.label,this.userOrganisationsCount=t.userOrganisationsCount,this.adminId=t.adminId,this.adminName=t.adminName}}class $ extends d{constructor(t){super(t),this.code=t.code,this.organisationTypeId=t.organisationTypeId,this.mainDashboardType=t.mainDashboardType,this.mainDashboardId=t.mainDashboardId,this.description=t.description,this.locationsCount=t.locationsCount,this.deviceOrganisationsCount=t.deviceOrganisationsCount,this.permissions=t.permissions.map(i=>new C(i))}}const c=()=>`${_()}/organisations`,a=o=>`${c()}/${encodeURIComponent(o)}`,k=new I("organisation",$).create(o=>o.build(o.addGet(a),o.addGetMany(c,d),o.addUpdate(a),o.addNotify())),x=T.getMany(k),g=F({name:"FSAutocompleteOrganisation",components:{FSAutocompleteField:A},props:{organisationFilters:{type:Object,required:!1,default:null}},setup(o){const{entities:t,fetching:i,getMany:r}=x();return O(()=>o.organisationFilters,async(n,s)=>{y.isEqual(n,s)||await r(n)},{immediate:!0}),{organisations:t,fetching:i}}});function G(o,t,i,r,n,s){const h=S("FSAutocompleteField");return f(),b(h,v({loading:o.fetching,items:o.organisations},o.$attrs),null,16,["loading","items"])}const u=w(g,[["render",G]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisation",exportName:"default",description:"",tags:{},props:[{name:"organisationFilters",type:{name:"OrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue"]};const Vt={title:"Foundation/Shared/Autcompletes/OrganisationAutocomplete",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:t})=>({components:{FSAutocompleteOrganisation:u,FSCol:N},props:Object.keys(t),setup(){return{...o}},template:`
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
    </FSCol>`})};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Jt=["Variations"];export{e as Variations,Jt as __namedExportsOrder,Vt as default};
