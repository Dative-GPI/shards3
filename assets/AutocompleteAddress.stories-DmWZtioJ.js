import{d as P,b as _,o as k,w as I,y as E,z as N,A as O,m as R}from"./vue.esm-bundler-DR8xMV81.js";import{_ as v}from"./lodash-BiW_TGGX.js";import{A as F}from"./address-CE2z3AEI.js";import{F as T}from"./FSAutocompleteField-p0X-UdBZ.js";import{u as D}from"./useAutocomplete-C0O9yddU.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSCol-CeBQ3oDD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-D014VcGV.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./FSButton-Bvd0naOX.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./FSIcon-CYA01Pg8.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./useTranslations-yeF_ketc.js";import"./FSDialogMenu-BsX2O1U3.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./FSSlideGroup-CAnEdTCM.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./FSToggleSet-WVf1v7XO.js";import"./FSWrapGroup-DmnpIXuG.js";import"./FSCheckbox-DNmwW8YA.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSFadeOut-DVFTxjCH.js";import"./FSLoader-KrLuz6mY.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-4MLyqnfX.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./VImg-MapJeLY6.js";import"./VSelect-CgtGyyn0.js";import"./VMenu-5z8CiYXe.js";import"./filter-Ct2lxthn.js";const $=()=>{let r=!1,i,c,p;const m=async()=>{await window.initMap,i=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),p=new google.maps.places.AutocompleteSessionToken,r=!0},d=async s=>(r||await m(),S(s).then(o=>v.map(o,t=>({id:t.place_id,label:t.description}))).catch(()=>[])),u=async s=>{var t,a;r||await m();const o=await f(s.id);if(p=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new F({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((t=o.geometry.location)==null?void 0:t.lat())??0,longitude:((a=o.geometry.location)==null?void 0:a.lng())??0,placeId:s.id,placeLabel:s.label});throw new Error("missing informations")},g=async(s,o)=>(r||await m(),y(s,o).then(t=>{var a,n;if(t.length>0){const l=t[0];if(l.address_components&&l.formatted_address&&l.geometry)return new F({formattedAddress:l.formatted_address,locality:e(l.address_components,"locality"),country:e(l.address_components,"country"),latitude:((a=l.geometry.location)==null?void 0:a.lat())??0,longitude:((n=l.geometry.location)==null?void 0:n.lng())??0,placeId:l.place_id,placeLabel:l.formatted_address})}throw new Error("missing informations")})),S=s=>new Promise((o,t)=>{i.getPlacePredictions({input:s,sessionToken:p},function(a,n){n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),y=(s,o)=>new Promise((t,a)=>{new google.maps.Geocoder().geocode({location:{lat:s,lng:o}},(n,l)=>{l!=google.maps.GeocoderStatus.OK||!n?a(l):t(n)})}),f=s=>new Promise((o,t)=>{c.getDetails({placeId:s,sessionToken:p,fields:["formatted_address","geometry","address_components","name"]},(a,n)=>{n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),e=(s,o)=>{const t=v.find(s,a=>v.some(a.types,n=>n===o));return(t==null?void 0:t.long_name)??""};return{search:d,get:u,reverseSearch:g}},C=P({name:"FSAutocompleteAddress",components:{FSAutocompleteField:T},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(r,{emit:i}){const{search:c,get:p}=$(),m=_([]),d=_(null),u=async e=>e===null?Promise.resolve([]):(m.value=await c(e),Promise.resolve([])),g=async e=>{if(e===null){i("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const s=await p(e);i("update:modelValue",s)},{search:S,onUpdate:y}=D(m,[],i,u,g,e=>e.id,e=>e.label,!0,!1),f=e=>({id:e.placeId,label:e.placeLabel});return k(()=>{r.modelValue&&(d.value=f(r.modelValue))}),I(()=>r.modelValue,e=>{e&&(d.value=f(e))}),{modelValuePlace:d,places:m,search:S,onUpdate:y}}});function j(r,i,c,p,m,d){const u=E("FSAutocompleteField");return N(),O(u,R({clearable:!1,toggleSet:!1,multiple:!1,items:r.places,modelValue:r.modelValuePlace,"onUpdate:modelValue":r.onUpdate,search:r.search,"onUpdate:search":i[0]||(i[0]=g=>r.search=g)},r.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const V=L(C,[["render",j]]);C.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const oo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:null,value2:new F({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})}},render:(r,{argTypes:i})=>({components:{FSAutocompleteAddress:V,FSCol:U},props:Object.keys(i),setup(){return{...r}},template:`
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
}`,...(b=(w=A.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const to=["Variations"];export{A as Variations,to as __namedExportsOrder,oo as default};
