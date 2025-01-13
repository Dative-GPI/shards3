var C=Object.defineProperty;var T=(e,l,o)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o;var m=(e,l,o)=>T(e,typeof l!="symbol"?l+"":l,o);import{d as v,c as g,A as F,B as u,D as r,j as A,I as d,G as S,P as $,E as q}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as _}from"./FSAutocompleteField-DJKWDuqJ.js";import{F as h}from"./FSButton-BDSx2V0J.js";import{F as k}from"./FSChip-9ODtrOs4.js";import{G as z}from"./base-CmdGny12.js";import{S as B}from"./serviceFactory-qtdw0UKd.js";import{C as N}from"./composableFactory-K8W9GIHH.js";import{u as U}from"./useAutocomplete-BnDWNIS6.js";import{C as D}from"./useColors-SBQj5l4a.js";import{u as E}from"./useTranslations-DJOHKWsD.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";class y{constructor(l){m(this,"id");m(this,"offset");this.id=l.id,this.offset=l.offset}}class G extends y{constructor(l){super(l)}}const I=()=>`${z()}/time-zones`,w=new B("timeZone",G).create(e=>e.build(e.addGetMany(I,y),e.addNotify())),j=N.getMany(w),V=v({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:_,FSButton:h,FSChip:k},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:o,fetching:f,entities:i}=j(),{$tr:c}=E(),n=g(()=>Z.value&&f.value),s=g(()=>e.multiple&&e.modelValue?c("autocomplete.time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),t=a=>o({...e.timeZoneFilters,search:a??void 0}),{toggleSet:p,init:Z,onUpdate:b}=U(i,[()=>e.timeZoneFilters],l,t,null,a=>a.id,a=>a.id);return{placeholder:s,ColorEnum:D,timeZones:i,toggleSet:p,loading:n,onUpdate:b}}});function L(e,l,o,f,i,c){const n=F("FSChip"),s=F("FSAutocompleteField");return d(),u(s,A({itemTitle:"id",label:e.$tr("ui.common.time-zone","Time zone"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":r(({item:t})=>[t.offset?(d(),u(n,{key:0,label:t.offset.split(":")[0]},null,8,["label"])):S("",!0)]),"toggle-set-item":r(t=>[$(h,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.id,onClick:p=>t.toggle(t.item)},{append:r(()=>[t.item.offset?(d(),u(n,{key:0,label:t.item.offset.split(":")[0]},null,8,["label"])):S("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const te=M(V,[["render",L]]);V.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};export{te as F};
