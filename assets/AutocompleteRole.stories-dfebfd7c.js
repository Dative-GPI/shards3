import{j as x,e as T,I as z,J as a,K as s,L as i,B as J,U as m,V as u,N as d,A as c,W as K,X as W}from"./vue.esm-bundler-7c237656.js";import{F as X}from"./FSAutocompleteField-8290612b.js";import{F as C}from"./FSCheckbox-2107f3ac.js";import{_ as O}from"./FSIcon-84236a8c.js";import{_ as S}from"./FSSpan-661158f8.js";import{_ as F}from"./FSRow-0e15f868.js";import{P as v}from"./permissionInfos-da95e15e.js";import{C as w}from"./base-cc0281c0.js";import{S as N}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-08360cd4.js";import{u as H}from"./useAutocomplete-c9cb8b74.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSelect-6f1247c6.js";import{_ as ee}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-60e07ad2.js";import"./FSSlideGroup-3826bb87.js";import"./FSButtonNextIcon-c829e5dd.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./FSCard-be090350.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./css-aa928277.js";import"./VProgressCircular-84d930cf.js";import"./color-8b3e8a76.js";import"./useRender-e696dd75.js";import"./resizeObserver-78a25be2.js";import"./VIcon-ea625dc1.js";import"./tag-d0e3859f.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-688ca79d.js";import"./index-bed3da0c.js";import"./display-f7c4d7d9.js";import"./goto-5a330938.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./group-114c8e76.js";import"./FSWrapGroup-1451daa8.js";import"./VInput-cb53917c.js";import"./transition-99224378.js";import"./density-ba2627df.js";import"./dimensions-506d0d5f.js";import"./VField-1b5a23ea.js";import"./VSpacer-5d7851f1.js";import"./VLabel-25f2a1ef.js";import"./loader-1ca0c22d.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./VDefaultsProvider-8ad05cd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ff2c3104.js";import"./elevation-322d7ef7.js";import"./useRules-30f7bcaa.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./filter-ec24e360.js";import"./VMenu-ecd47b95.js";import"./VOverlay-215d3759.js";import"./lazy-ba583f92.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./VSelectionControl-4d654956.js";import"./index-b834f342.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-07f356f9.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";var h=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(h||{});class k{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class oe extends k{constructor(o){super(o),this.description=o.description}}class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class te extends L{constructor(o){super(o),this.description=o.description}}const U=()=>`${w()}/role-organisations`,ie=e=>`${U()}/${encodeURIComponent(e)}`,q=()=>`${w()}/role-organisation-types`,ne=e=>`${q()}/${encodeURIComponent(e)}`,re=new N("roleOrganisation",oe).createComplete(U,ie,k),le=$.getMany(re),ae=new N("roleOrganisationType",te).create(e=>e.build(e.addGet(ne),e.addGetMany(q,L),e.addNotify())),se=$.getMany(ae),D=x({name:"FSAutocompleteRole",components:{FSAutocompleteField:X,FSCheckbox:C,FSIcon:O,FSSpan:S,FSRow:F},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:l,fetching:R,entities:b}=se(),{getMany:_,fetching:f,entities:n}=le(),r=T(()=>b.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.OrganisationType})).concat(n.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.Organisation})))),p=T(()=>B.value&&(R.value||f.value)),P=t=>{Array.isArray(t)?(o("update:modelValue",t.map(y=>y.id)),o("update:type",t.map(y=>y.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},M=t=>Promise.all([l({...e.roleOrganisationTypeFilters,search:t??void 0}),_({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:G,search:j,init:B,onUpdate:Y}=H(r,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,M,P);return{toggleSet:G,loading:p,search:j,roles:r,onUpdate:Y}}});function pe(e,o,l,R,b,_){const f=z("FSAutocompleteField");return a(),s(f,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:n})=>[e.$props.modelValue?(a(),s(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[n.raw.icon?(a(),s(O,{key:0},{default:i(()=>[m(u(n.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(n.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"autocomplete-item":i(({props:n,item:r})=>[c(Z,K(W({...n,title:""})),{default:i(()=>[c(F,{align:"center-left",wrap:!1},{default:i(()=>{var p;return[e.$props.multiple?(a(),s(C,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(r.value),onClick:n.onClick},null,8,["modelValue","onClick"])):d("",!0),r.raw.icon?(a(),s(O,{key:1},{default:i(()=>[m(u(r.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const E=Q(D,[["render",pe]]);D.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const vo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:E,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const wo=["Variations"];export{g as Variations,wo as __namedExportsOrder,vo as default};
