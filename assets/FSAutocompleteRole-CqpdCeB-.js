import{d as M,c as d,y as V,z as h,A as S,C as r,N as m,F as I,B as U,D as E,E as L,H as P,m as _}from"./vue.esm-bundler-D3ngFwGY.js";import{F as j}from"./FSAutocompleteField-B1f-d-lL.js";import{F as T}from"./FSButton-D8KNVcat.js";import{F as v}from"./FSChip-CyfHnFR3.js";import{F as C}from"./FSIcon-C0akNC9K.js";import{u as z}from"./useRoleOrganisationTypes-BFSXS3EN.js";import{u as H}from"./useRoleOrganisations-DDFC6ugK.js";import{u as W}from"./useAutocomplete-BepmEoya.js";import{u as q}from"./useTranslations-Dmqoe3Kp.js";import{C as f}from"./useColors-B-331F-F.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(o||{});const{$tr:c}=q(),J=e=>{switch(e){case o.None:return c("ui.role-type.none","None");case o.Organisation:return c("ui.role-type.organisation","Custom");case o.OrganisationType:return c("ui.role-type.organisation-type","Shared")}},K=e=>{switch(e){case o.None:return f.Error;case o.Organisation:return f.Primary;case o.OrganisationType:return f.Warning}},R=M({name:"FSAutocompleteRole",components:{FSAutocompleteField:j,FSButton:T,FSChip:v,FSIcon:C},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:o.None},ignoreRoleOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreRoleOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:t}){const{getMany:g,fetching:y,entities:O}=z(),{getMany:b,fetching:i,entities:s}=H(),{$tr:l}=q(),u=d(()=>O.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.OrganisationType})).concat(s.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:o.Organisation})))),N=d(()=>w.value&&(y.value||i.value)),A=d(()=>e.multiple&&e.modelValue?l("autocomplete.role.placeholder","{0} role(s) selected",e.modelValue.length):null),$=a=>{if(Array.isArray(a)){const n=a.map(p=>p.id),F=a.map(p=>p.type);t("update:modelValue",n),t("update:type",F),t("update",{modelValue:n,type:F})}else t("update:modelValue",a==null?void 0:a.id),t("update:type",a==null?void 0:a.type),t("update",{modelValue:a==null?void 0:a.id,type:a==null?void 0:a.type})},B=a=>{const n=[];return e.ignoreRoleOrganisations||n.push(b({...e.roleOrganisationFilters,search:a??void 0})),e.ignoreRoleOrganisationTypes||n.push(g({...e.roleOrganisationTypeFilters,search:a??void 0})),Promise.all(n)},{toggleSet:k,init:w,onUpdate:D}=W(u,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],t,B,$);return{placeholder:A,toggleSet:k,RoleType:o,loading:N,roles:u,roleTypeColor:K,roleTypeLabel:J,onUpdate:D}}});function Q(e,t,g,y,O,b){const i=V("FSChip"),s=V("FSAutocompleteField");return h(),S(s,_({label:e.$props.label??e.$tr("autocomplete.role.label","Role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":r(({item:l})=>[l.icon?(h(),S(C,{key:0},{default:r(()=>[E(L(l.icon),1)]),_:2},1024)):P("",!0)]),"item-append":r(({item:l})=>[m(i,{color:e.roleTypeColor(l.type),label:e.roleTypeLabel(l.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(l=>[m(T,{prependIcon:l.item.icon,variant:l.getVariant(l.item),color:l.getColor(l.item),class:I(l.getClass(l.item)),label:l.item.label,onClick:u=>l.toggle(l.item)},U({_:2},[l.item.type?{name:"append",fn:r(()=>[m(i,{color:e.roleTypeColor(l.item.type),label:e.roleTypeLabel(l.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const ie=G(R,[["render",Q]]);R.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType[] | RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"ignoreRoleOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreRoleOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};export{ie as F};