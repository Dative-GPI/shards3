import{d as V,b as w,o as F,w as P,y as v,z as b,A as k,m as I}from"./vue.esm-bundler-DC82FEWN.js";import{_}from"./lodash-BiW_TGGX.js";import{A as h}from"./address-CE2z3AEI.js";import{F as U}from"./FSAutocompleteField-C-lggkun.js";import{u as O}from"./useAutocomplete-DM6mLb0u.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $=()=>{let a=!1,d,u,i;const c=async()=>{await window.initMap,d=new google.maps.places.AutocompleteService,u=new google.maps.places.PlacesService(document.getElementById("places")),i=new google.maps.places.AutocompleteSessionToken,a=!0},m=async t=>(a||await c(),y(t).then(o=>_.map(o,s=>({id:s.place_id,label:s.description}))).catch(()=>[])),p=async t=>{var s,n;a||await c();const o=await g(t.id);if(i=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new h({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((s=o.geometry.location)==null?void 0:s.lat())??0,longitude:((n=o.geometry.location)==null?void 0:n.lng())??0,placeId:t.id,placeLabel:t.label});throw new Error("missing informations")},f=async(t,o)=>(a||await c(),A(t,o).then(s=>{var n,r;if(s.length>0){const l=s[0];if(l.address_components&&l.formatted_address&&l.geometry)return new h({formattedAddress:l.formatted_address,locality:e(l.address_components,"locality"),country:e(l.address_components,"country"),latitude:((n=l.geometry.location)==null?void 0:n.lat())??0,longitude:((r=l.geometry.location)==null?void 0:r.lng())??0,placeId:l.place_id,placeLabel:l.formatted_address})}throw new Error("missing informations")})),y=t=>new Promise((o,s)=>{d.getPlacePredictions({input:t,sessionToken:i},function(n,r){r!=google.maps.places.PlacesServiceStatus.OK||!n?s(r):o(n)})}),A=(t,o)=>new Promise((s,n)=>{new google.maps.Geocoder().geocode({location:{lat:t,lng:o}},(r,l)=>{l!=google.maps.GeocoderStatus.OK||!r?n(l):s(r)})}),g=t=>new Promise((o,s)=>{u.getDetails({placeId:t,sessionToken:i,fields:["formatted_address","geometry","address_components","name"]},(n,r)=>{r!=google.maps.places.PlacesServiceStatus.OK||!n?s(r):o(n)})}),e=(t,o)=>{const s=_.find(t,n=>_.some(n.types,r=>r===o));return(s==null?void 0:s.long_name)??""};return{search:m,get:p,reverseSearch:f}},S=V({name:"FSAutocompleteAddress",components:{FSAutocompleteField:U},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(a,{emit:d}){const{search:u,get:i}=$(),c=w([]),m=w(null),p=async e=>e===null?Promise.resolve([]):(c.value=await u(e),Promise.resolve([])),f=async e=>{if(e===null){d("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const t=await i(e);d("update:modelValue",t)},{search:y,onUpdate:A}=O(c,[],d,p,f,e=>e.id,e=>e.label,!0,!1),g=e=>({id:e.placeId,label:e.placeLabel});return F(()=>{a.modelValue&&(m.value=g(a.modelValue))}),P(()=>a.modelValue,e=>{e&&(m.value=g(e))}),{modelValuePlace:m,places:c,search:y,onUpdate:A}}});function B(a,d,u,i,c,m){const p=v("FSAutocompleteField");return b(),k(p,I({clearable:!1,toggleSet:!1,multiple:!1,items:a.places,modelValue:a.modelValuePlace,"onUpdate:modelValue":a.onUpdate,search:a.search,"onUpdate:search":d[0]||(d[0]=f=>a.search=f)},a.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const z=T(S,[["render",B]]);S.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};export{z as F,$ as u};
