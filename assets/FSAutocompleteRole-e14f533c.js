import{f as j,g as I,D as C,E as c,F as p,G as l,x as Y,K as d,L as g,I as y,P as i,X as z}from"./vue.esm-bundler-a0893183.js";import{F as K}from"./FSAutocompleteField-6360297d.js";import{F as w}from"./FSButton-29e96b8a.js";import{F as W}from"./FSChip-db263eca.js";import{_ as F}from"./FSIcon-9d61ed62.js";import{_ as T}from"./FSSpan-4daadeb4.js";import{_ as b}from"./FSRow-821d23a1.js";import{P as N}from"./permissionInfos-da95e15e.js";import{C as V}from"./base-168b8f74.js";import{S as A}from"./serviceFactory-2dfad3af.js";import{C as $}from"./composableFactory-2d4a69cc.js";import{u as X}from"./useAutocomplete-cc546bbe.js";import{C as O}from"./useColors-6c375bb5.js";import{u as H}from"./useTranslations-95b4a686.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";var a=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(a||{});class L{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(s=>new N(s))}}class Q extends L{constructor(o){super(o),this.description=o.description}}class q{constructor(o){this.id=o.id,this.roleId=o.roleId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.scope=o.scope,this.userType=o.userType,this.tags=o.tags.slice(),this.permissions=o.permissions.map(s=>new N(s))}}class Z extends q{constructor(o){super(o),this.description=o.description}}const U=()=>`${V()}/role-organisations`,x=e=>`${U()}/${encodeURIComponent(e)}`,v=()=>`${V()}/role-organisation-types`,ee=e=>`${v()}/${encodeURIComponent(e)}`,oe=new A("roleOrganisation",Q).createComplete(U,x,L),te=$.getMany(oe),ne=new A("roleOrganisationType",Z).create(e=>e.build(e.addGet(ee),e.addGetMany(v,q),e.addNotify())),ae=$.getMany(ne),{$tr:h}=H(),le=e=>{switch(e){case a.None:return h("ui.role-type.none","None");case a.Organisation:return h("ui.role-type.organisation","Custom");case a.OrganisationType:return h("ui.role-type.organisation-type","Shared")}},ie=e=>{switch(e){case a.None:return O.Error;case a.Organisation:return O.Primary;case a.OrganisationType:return O.Warning}},E=j({name:"FSAutocompleteRole",components:{FSAutocompleteField:K,FSButton:w,FSChip:W,FSIcon:F,FSSpan:T,FSRow:b},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:a.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:s,fetching:S,entities:R}=ae(),{getMany:_,fetching:r,entities:m}=te(),t=I(()=>R.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:a.OrganisationType})).concat(m.value.map(n=>({id:n.id,icon:n.icon,label:n.label,type:a.Organisation})))),u=I(()=>M.value&&(S.value||r.value)),k=n=>{Array.isArray(n)?(o("update:modelValue",n.map(f=>f.id)),o("update:type",n.map(f=>f.type))):(o("update:modelValue",n==null?void 0:n.id),o("update:type",n==null?void 0:n.type))},P=n=>Promise.all([s({...e.roleOrganisationTypeFilters,search:n??void 0}),_({...e.roleOrganisationFilters,search:n??void 0})]),{toggleSet:D,search:G,init:M,onUpdate:B}=X(t,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],o,P,k);return{toggleSet:D,RoleType:a,loading:u,search:G,roles:t,roleTypeColor:ie,roleTypeLabel:le,onUpdate:B}}});function se(e,o,s,S,R,_){const r=C("FSChip"),m=C("FSAutocompleteField");return c(),p(m,Y({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:t})=>[e.$props.modelValue?(c(),p(b,{key:0,align:"center-center",wrap:!1},{default:l(()=>[t.raw.icon?(c(),p(F,{key:0},{default:l(()=>[d(g(t.raw.icon),1)]),_:2},1024)):y("",!0),i(T,null,{default:l(()=>[d(g(t.raw.label),1)]),_:2},1024),i(r,{color:e.roleTypeColor(t.raw.type),label:e.roleTypeLabel(t.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):y("",!0)]),"item-label":l(({item:t,font:u})=>[i(b,{align:"center-left",wrap:!1},{default:l(()=>[t.raw.icon?(c(),p(F,{key:0},{default:l(()=>[d(g(t.raw.icon),1)]),_:2},1024)):y("",!0),i(T,{font:u},{default:l(()=>[d(g(t.raw.label),1)]),_:2},1032,["font"]),i(r,{color:e.roleTypeColor(t.raw.type),label:e.roleTypeLabel(t.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":l(t=>[i(w,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:z(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},{append:l(()=>[i(r,{color:e.roleTypeColor(t.item.type),label:e.roleTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const Re=J(E,[["render",se]]);E.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};export{Re as F};