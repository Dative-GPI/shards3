import{j as F,w as O,H as S,I as f,J as b,x as v}from"./vue.esm-bundler-96d0a5cc.js";import{_ as y}from"./lodash-569b8a6d.js";import{F as A}from"./FSAutocompleteField-32584ecc.js";import{G as C}from"./base-0de1729e.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as I}from"./composableFactory-2f95db4a.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSCol-71088900.js";import"./_commonjsHelpers-725317a4.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./FSCard-907ca4bc.js";import"./FSRow-959288e5.js";import"./css-187645c7.js";import"./useColors-a5c6eb1e.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./VProgressCircular-b96acd02.js";import"./color-0e7f3458.js";import"./useRender-864589a6.js";import"./resizeObserver-608b050a.js";import"./VIcon-356fc7cc.js";import"./tag-2ee5b375.js";import"./FSSpan-572d1125.js";import"./useSlots-8f090340.js";import"./FSIcon-1f958509.js";import"./FSLoader-a4b17375.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./locale-ebcc9fd1.js";import"./proxiedModel-80fa8b72.js";import"./FSToggleSet-89d4360e.js";import"./FSSlideGroup-ee02b27e.js";import"./FSButtonNextIcon-9bb04157.js";import"./VSlideGroup-56c5a05a.js";import"./index-09e6aad2.js";import"./display-382afec5.js";import"./group-f931bb93.js";import"./FSWrapGroup-33fbf5d1.js";import"./VInput-b0770754.js";import"./transition-2009bd3b.js";import"./density-9320d724.js";import"./useRules-d4bb430c.js";import"./VSpacer-f03e5178.js";import"./VSelect-a10f1a69.js";import"./VTextField-10bbe6c7.js";import"./VField-12172b20.js";import"./VLabel-6f956079.js";import"./loader-f509b4a4.js";import"./rounded-7d5adaf8.js";import"./VDefaultsProvider-638492ec.js";import"./forwardRefs-e658ad70.js";import"./index-ab6a3e98.js";import"./VOverlay-511e4751.js";import"./border-66fb56b2.js";import"./lazy-e9f80e5f.js";import"./router-b0143796.js";import"./VMenu-564fd94d.js";import"./ssrBoot-67be078c.js";import"./index-b26b5e2a.js";import"./VImg-7ef13259.js";import"./VDivider-5b8aa1c7.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./filter-14ef3d92.js";class N{constructor(t){this.id=t.id,this.code=t.code,this.label=t.label}}class d{constructor(t){this.id=t.id,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.label=t.label,this.userOrganisationsCount=t.userOrganisationsCount,this.adminId=t.adminId,this.adminName=t.adminName}}class $ extends d{constructor(t){super(t),this.code=t.code,this.organisationTypeId=t.organisationTypeId,this.mainDashboardType=t.mainDashboardType,this.mainDashboardId=t.mainDashboardId,this.description=t.description,this.locationsCount=t.locationsCount,this.deviceOrganisationsCount=t.deviceOrganisationsCount,this.permissions=t.permissions.map(i=>new N(i))}}const c=()=>`${C()}/organisations`,a=o=>`${c()}/${encodeURIComponent(o)}`,k=new _("organisation",$).create(o=>o.build(o.addGet(a),o.addGetMany(c,d),o.addUpdate(a),o.addNotify())),x=I.getMany(k),g=F({name:"FSAutocompleteOrganisation",components:{FSAutocompleteField:A},props:{organisationFilters:{type:Object,required:!1,default:null}},setup(o){const{entities:t,fetching:i,getMany:r}=x();return O(()=>o.organisationFilters,async(n,s)=>{y.isEqual(n,s)||await r(n)},{immediate:!0}),{organisations:t,fetching:i}}});function G(o,t,i,r,n,s){const h=S("FSAutocompleteField");return f(),b(h,v({loading:o.fetching,items:o.organisations},o.$attrs),null,16,["loading","items"])}const u=T(g,[["render",G]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisation",exportName:"default",description:"",tags:{},props:[{name:"organisationFilters",type:{name:"OrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteOrganisation.vue"]};const Pt={title:"Foundation/Shared/Autcompletes/OrganisationAutocomplete",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:t})=>({components:{FSAutocompleteOrganisation:u,FSCol:w},props:Object.keys(t),setup(){return{...o}},template:`
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Vt=["Variations"];export{e as Variations,Vt as __namedExportsOrder,Pt as default};
