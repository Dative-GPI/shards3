import{j as x,e as T,I as z,J as a,K as s,L as i,B as J,U as m,V as u,N as d,A as c,W as K,X as W}from"./vue.esm-bundler-41eda46b.js";import{F as X}from"./FSAutocompleteField-95896a23.js";import{F as C}from"./FSCheckbox-90b24572.js";import{_ as O}from"./FSIcon-713345eb.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{P as v}from"./permissionInfos-da95e15e.js";import{C as w}from"./base-72a78366.js";import{S as N}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-00c2f0ee.js";import{u as H}from"./useAutocomplete-0136f2aa.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSelect-defb5d1c.js";import{_ as ee}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./css-35e8563f.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./filter-133522f7.js";import"./VMenu-499c8185.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";var h=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(h||{});class k{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class oe extends k{constructor(o){super(o),this.description=o.description}}class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(l=>new v(l))}}class te extends L{constructor(o){super(o),this.description=o.description}}const U=()=>`${w()}/role-organisations`,ie=e=>`${U()}/${encodeURIComponent(e)}`,q=()=>`${w()}/role-organisation-types`,ne=e=>`${q()}/${encodeURIComponent(e)}`,re=new N("roleOrganisation",oe).createComplete(U,ie,k),le=$.getMany(re),ae=new N("roleOrganisationType",te).create(e=>e.build(e.addGet(ne),e.addGetMany(q,L),e.addNotify())),se=$.getMany(ae),D=x({name:"FSAutocompleteRole",components:{FSAutocompleteField:X,FSCheckbox:C,FSIcon:O,FSSpan:S,FSRow:F},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:l,fetching:R,entities:b}=se(),{getMany:_,fetching:f,entities:n}=le(),r=T(()=>b.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.OrganisationType})).concat(n.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:h.Organisation})))),p=T(()=>B.value&&(R.value||f.value)),P=t=>{Array.isArray(t)?(o("update:modelValue",t.map(y=>y.id)),o("update:type",t.map(y=>y.type))):(o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type))},M=t=>Promise.all([l({...e.roleOrganisationTypeFilters,search:t??void 0}),_({...e.roleOrganisationFilters,search:t??void 0})]),{toggleSet:G,search:j,init:B,onUpdate:Y}=H(r,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,M,P);return{toggleSet:G,loading:p,search:j,roles:r,onUpdate:Y}}});function pe(e,o,l,R,b,_){const f=z("FSAutocompleteField");return a(),s(f,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:n})=>[e.$props.modelValue?(a(),s(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[n.raw.icon?(a(),s(O,{key:0},{default:i(()=>[m(u(n.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(n.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"autocomplete-item":i(({props:n,item:r})=>[c(Z,K(W({...n,title:""})),{default:i(()=>[c(F,{align:"center-left",wrap:!1},{default:i(()=>{var p;return[e.$props.multiple?(a(),s(C,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(r.value),onClick:n.onClick},null,8,["modelValue","onClick"])):d("",!0),r.raw.icon?(a(),s(O,{key:1},{default:i(()=>[m(u(r.raw.icon),1)]),_:2},1024)):d("",!0),c(S,null,{default:i(()=>[m(u(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const E=Q(D,[["render",pe]]);D.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const Co={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"11"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:E,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const vo=["Variations"];export{g as Variations,vo as __namedExportsOrder,Co as default};
