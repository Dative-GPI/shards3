import{f as H,g as V,D as I,E as m,F as u,G as l,A as J,K as d,L as g,I as y,Q as a,R as X,S as Z,Y as x}from"./vue.esm-bundler-1de4ab84.js";import{F as ee}from"./FSAutocompleteField-612f5788.js";import{F as $}from"./FSCheckbox-7bc44d7a.js";import{F as k}from"./FSButton-6b0685b3.js";import{F as oe}from"./FSChip-5509d5fb.js";import{_ as h}from"./FSIcon-08483052.js";import{_ as R}from"./FSSpan-c5b5f93b.js";import{_ as T}from"./FSRow-0f15051e.js";import{P as L}from"./permissionInfos-da95e15e.js";import{C as q}from"./base-d4d5271d.js";import{S as U}from"./serviceFactory-2dfad3af.js";import{C as E}from"./composableFactory-7269e9d8.js";import{C as O}from"./useColors-6201f155.js";import{u as te}from"./useTranslations-df2010ef.js";import{u as ne}from"./useAutocomplete-541ae531.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{V as re}from"./VSelect-46cfbf6f.js";import{_ as ie}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./theme-fee57059.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./FSClickable-00bc2ab2.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./index-a0e5e2a3.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";var r=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(r||{});class D{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(s=>new L(s))}}class ae extends D{constructor(o){super(o),this.description=o.description}}class P{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(s=>new L(s))}}class se extends P{constructor(o){super(o),this.description=o.description}}const G=()=>`${q()}/role-organisations`,pe=e=>`${G()}/${encodeURIComponent(e)}`,M=()=>`${q()}/role-organisation-types`,me=e=>`${M()}/${encodeURIComponent(e)}`,ue=new U("roleOrganisation",ae).createComplete(G,pe,D),ce=E.getMany(ue),de=new U("roleOrganisationType",se).create(e=>e.build(e.addGet(me),e.addGetMany(M,P),e.addNotify())),ge=E.getMany(de),{$tr:b}=te(),ye=e=>{switch(e){case r.None:return b("ui.role-type.none","None");case r.Organisation:return b("ui.role-type.organisation","Custom");case r.OrganisationType:return b("ui.role-type.organisation-type","Shared")}},fe=e=>{switch(e){case r.None:return O.Error;case r.Organisation:return O.Primary;case r.OrganisationType:return O.Warning}},B=H({name:"FSAutocompleteRole",components:{FSAutocompleteField:ee,FSCheckbox:$,FSButton:k,FSChip:oe,FSIcon:h,FSSpan:R,FSRow:T},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:r.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:s,fetching:C,entities:_}=ge(),{getMany:v,fetching:p,entities:S}=ce(),t=V(()=>_.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:r.OrganisationType})).concat(S.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:r.Organisation})))),i=V(()=>Q.value&&(C.value||p.value)),c=n=>{Array.isArray(n)?(o("update:modelValue",n.map(F=>F.id)),o("update:type",n.map(F=>F.type))):(o("update:modelValue",n==null?void 0:n.id),o("update:type",n==null?void 0:n.type))},Y=n=>Promise.all([s({...e.roleOrganisationTypeFilters,search:n??void 0}),v({...e.roleOrganisationFilters,search:n??void 0})]),{toggleSet:z,search:K,init:Q,onUpdate:W}=ne(t,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,Y,c);return{toggleSet:z,RoleType:r,loading:i,search:K,roles:t,roleTypeColor:fe,roleTypeLabel:ye,onUpdate:W}}});function Se(e,o,s,C,_,v){const p=I("FSChip"),S=I("FSAutocompleteField");return m(),u(S,J({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(m(),u(T,{key:0,align:"center-center",wrap:!1},{default:l(()=>[t.raw.icon?(m(),u(h,{key:0},{default:l(()=>[d(g(t.raw.icon),1)]),_:2},1024)):y("",!0),a(R,null,{default:l(()=>[d(g(t.raw.label),1)]),_:2},1024),a(p,{color:e.roleTypeColor(t.raw.type),label:e.roleTypeLabel(t.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"autocomplete-item":l(({props:t,item:i})=>[a(re,X(Z({...t,title:""})),{default:l(()=>[a(T,{align:"center-left",wrap:!1},{default:l(()=>{var c;return[e.$props.multiple?(m(),u($,{key:0,modelValue:(c=e.$props.modelValue)==null?void 0:c.includes(i.value),onClick:t.onClick},null,8,["modelValue","onClick"])):y("",!0),i.raw.icon?(m(),u(h,{key:1},{default:l(()=>[d(g(i.raw.icon),1)]),_:2},1024)):y("",!0),a(R,null,{default:l(()=>[d(g(i.raw.label),1)]),_:2},1024),a(p,{color:e.roleTypeColor(i.raw.type),label:e.roleTypeLabel(i.raw.type),editable:!1},null,8,["color","label"])]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":l(t=>[a(k,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:x(t.getClass(t.item)),label:t.item.label,onClick:i=>t.toggle(t.item)},{append:l(()=>[a(p,{color:e.roleTypeColor(t.item.type),label:e.roleTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const j=le(B,[["render",Se]]);B.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const jo={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,type1:0,value2:"11",type2:2}},render:(e,{argTypes:o})=>({components:{FSAutocompleteRole:j,FSCol:ie},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
    </FSCol>`})};var A,w,N;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2
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
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
    </FSCol>\`
  })
}`,...(N=(w=f.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const Yo=["Variations"];export{f as Variations,Yo as __namedExportsOrder,jo as default};
