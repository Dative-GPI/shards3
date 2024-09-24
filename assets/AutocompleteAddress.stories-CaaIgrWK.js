import{d as P,b as _,o as k,w as I,y as E,z as N,A as O,m as R}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as v}from"./lodash-BiW_TGGX.js";import{A as F}from"./address-CE2z3AEI.js";import{F as T}from"./FSAutocompleteField-DYa8eseR.js";import{u as D}from"./useAutocomplete-BLpvFch6.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-DZA6pxA1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-DvdcLDtW.js";import"./color--o2QfpAv.js";import"./FSButton-CzT4qk-w.js";import"./FSClickable-D0EdtzT9.js";import"./FSCard-CiUY3jF9.js";import"./VProgressCircular-D09FP1rk.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-BVNp7pcM.js";import"./VIcon-BQIm0b3J.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-C8KBePTS.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSDialogMenu-Bh07lE_k.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSCheckbox-M73AcfXp.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader--MJuLA8w.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./filter-DuGNEgHB.js";const $=()=>{let r=!1,i,c,p;const m=async()=>{await window.initMap,i=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),p=new google.maps.places.AutocompleteSessionToken,r=!0},d=async s=>(r||await m(),y(s).then(o=>v.map(o,t=>({id:t.place_id,label:t.description}))).catch(()=>[])),u=async s=>{var t,a;r||await m();const o=await f(s.id);if(p=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new F({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((t=o.geometry.location)==null?void 0:t.lat())??0,longitude:((a=o.geometry.location)==null?void 0:a.lng())??0,placeId:s.id,placeLabel:s.label});throw new Error("missing informations")},g=async(s,o)=>(r||await m(),S(s,o).then(t=>{var a,n;if(t.length>0){const l=t[0];if(l.address_components&&l.formatted_address&&l.geometry)return new F({formattedAddress:l.formatted_address,locality:e(l.address_components,"locality"),country:e(l.address_components,"country"),latitude:((a=l.geometry.location)==null?void 0:a.lat())??0,longitude:((n=l.geometry.location)==null?void 0:n.lng())??0,placeId:l.place_id,placeLabel:l.formatted_address})}throw new Error("missing informations")})),y=s=>new Promise((o,t)=>{i.getPlacePredictions({input:s,sessionToken:p},function(a,n){n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),S=(s,o)=>new Promise((t,a)=>{new google.maps.Geocoder().geocode({location:{lat:s,lng:o}},(n,l)=>{l!=google.maps.GeocoderStatus.OK||!n?a(l):t(n)})}),f=s=>new Promise((o,t)=>{c.getDetails({placeId:s,sessionToken:p,fields:["formatted_address","geometry","address_components","name"]},(a,n)=>{n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),e=(s,o)=>{const t=v.find(s,a=>v.some(a.types,n=>n===o));return(t==null?void 0:t.long_name)??""};return{search:d,get:u,reverseSearch:g}},C=P({name:"FSAutocompleteAddress",components:{FSAutocompleteField:T},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(r,{emit:i}){const{search:c,get:p}=$(),m=_([]),d=_(null),u=async e=>e===null?Promise.resolve([]):(m.value=await c(e),Promise.resolve([])),g=async e=>{if(e===null){i("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const s=await p(e);i("update:modelValue",s)},{search:y,onUpdate:S}=D(m,[],i,u,g,e=>e.id,e=>e.label,!0,!1),f=e=>({id:e.placeId,label:e.placeLabel});return k(()=>{r.modelValue&&(d.value=f(r.modelValue))}),I(()=>r.modelValue,e=>{e&&(d.value=f(e))}),{modelValuePlace:d,places:m,search:y,onUpdate:S}}});function j(r,i,c,p,m,d){const u=E("FSAutocompleteField");return N(),O(u,R({clearable:!1,toggleSet:!1,multiple:!1,items:r.places,modelValue:r.modelValuePlace,"onUpdate:modelValue":r.onUpdate,search:r.search,"onUpdate:search":i[0]||(i[0]=g=>r.search=g)},r.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const V=L(C,[["render",j]]);C.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const to={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:null,value2:new F({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})}},render:(r,{argTypes:i})=>({components:{FSAutocompleteAddress:V,FSCol:U},props:Object.keys(i),setup(){return{...r}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>`})};var h,w,b;A.parameters={...A.parameters,docs:{...(h=A.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: new Address({
        placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
        placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
        formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
        locality: 'Colombier-Saugnieu',
        country: 'France',
        latitude: 45.711741,
        longitude: 5.071675
      })
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteAddress,
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
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(b=(w=A.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const ro=["Variations"];export{A as Variations,ro as __namedExportsOrder,to as default};
