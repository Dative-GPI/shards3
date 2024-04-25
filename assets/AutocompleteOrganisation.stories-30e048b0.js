import{j as F,w as O,I as S,J as f,K as b,x as v}from"./vue.esm-bundler-b2d5d1a7.js";import{_ as y}from"./lodash-569b8a6d.js";import{F as A}from"./FSAutocompleteField-9a2ba8dd.js";import{P as C}from"./permissionInfos-da95e15e.js";import{G as _}from"./base-0de1729e.js";import{S as I}from"./serviceFactory-3393b4e4.js";import{C as T}from"./composableFactory-6dbd7c00.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as N}from"./FSCol-8af42802.js";import"./_commonjsHelpers-725317a4.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./FSRow-ad0fe7ea.js";import"./css-9d61559d.js";import"./useColors-1799ca43.js";import"./index-a0e5e2a3.js";import"./theme-66179376.js";import"./VProgressCircular-b30bdd5e.js";import"./color-1b074b3b.js";import"./useRender-3dd3f3c7.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./FSIcon-6a2b7637.js";import"./FSLoader-d736f414.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./FSToggleSet-d64083d4.js";import"./FSSlideGroup-a03e159b.js";import"./FSButtonNextIcon-23a13277.js";import"./VSlideGroup-7f8275f9.js";import"./index-c0240410.js";import"./display-5af9f9da.js";import"./group-d1f5e06d.js";import"./FSWrapGroup-983c1296.js";import"./VInput-16b8deac.js";import"./transition-42bdb3ea.js";import"./density-aec4d930.js";import"./useRules-999feed4.js";import"./VSpacer-73e95d50.js";import"./VSelect-13b35610.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./VLabel-fe75201b.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./VOverlay-9625a4d7.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./VMenu-03edebad.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./index-7713af82.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./filter-dab5f9d0.js";class d{constructor(o){this.id=o.id,this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.label=o.label,this.userOrganisationsCount=o.userOrganisationsCount,this.adminId=o.adminId,this.adminName=o.adminName}}class $ extends d{constructor(o){super(o),this.code=o.code,this.organisationTypeId=o.organisationTypeId,this.mainDashboardType=o.mainDashboardType,this.mainDashboardId=o.mainDashboardId,this.description=o.description,this.locationsCount=o.locationsCount,this.deviceOrganisationsCount=o.deviceOrganisationsCount,this.permissions=o.permissions.map(i=>new C(i))}}const c=()=>`${_()}/organisations`,a=t=>`${c()}/${encodeURIComponent(t)}`,k=new I("organisation",$).create(t=>t.build(t.addGet(a),t.addGetMany(c,d),t.addUpdate(a),t.addNotify())),x=T.getMany(k),g=F({name:"FSAutocompleteOrganisation",components:{FSAutocompleteField:A},props:{organisationFilters:{type:Object,required:!1,default:null}},setup(t){const{entities:o,fetching:i,getMany:r}=x();return O(()=>t.organisationFilters,async(n,s)=>{y.isEqual(n,s)||await r(n)},{immediate:!0}),{organisations:o,fetching:i}}});function G(t,o,i,r,n,s){const h=S("FSAutocompleteField");return f(),b(h,v({loading:t.fetching,items:t.organisations},t.$attrs),null,16,["loading","items"])}const u=w(g,[["render",G]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisation",exportName:"default",description:"",tags:{},props:[{name:"organisationFilters",type:{name:"OrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue"]};const Jo={title:"Foundation/Shared/Autocompletes/AutocompleteOrganisation",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"1"}},render:(t,{argTypes:o})=>({components:{FSAutocompleteOrganisation:u,FSCol:N},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Ko=["Variations"];export{e as Variations,Ko as __namedExportsOrder,Jo as default};
