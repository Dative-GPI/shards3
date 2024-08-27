import{d as P,b as _,o as k,w as I,y as E,z as N,A as O,m as R}from"./vue.esm-bundler-B8zP9crO.js";import{_ as v}from"./lodash-BiW_TGGX.js";import{A as F}from"./address-CE2z3AEI.js";import{F as T}from"./FSAutocompleteField-BUW9KFV5.js";import{u as D}from"./useAutocomplete-52r75jCK.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSCol-DXkP6ARl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-LBpB0oyV.js";import"./FSTextField-RqWidZvM.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-CHFZqh9D.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSButton-CSLtAyqZ.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./FSIcon-DoasTXhc.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./useTranslations-Dy1kwog1.js";import"./FSDialogMenu-DKdGQhSx.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-B6I8kdKO.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-BlitZcd6.js";import"./FSWrapGroup-iC8XkZDM.js";import"./FSCheckbox-CeNyMIyO.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CJxs5U7i.js";import"./VImg-nkm3QF3p.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-BildyJ8g.js";import"./VList-DrakP2K3.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-BmtbTONd.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";const $=()=>{let r=!1,i,c,d;const m=async()=>{await window.initMap,i=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),d=new google.maps.places.AutocompleteSessionToken,r=!0},p=async s=>(r||await m(),S(s).then(o=>v.map(o,t=>({id:t.place_id,label:t.description}))).catch(()=>[])),u=async s=>{var t,a;r||await m();const o=await f(s.id);if(d=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new F({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((t=o.geometry.location)==null?void 0:t.lat())??0,longitude:((a=o.geometry.location)==null?void 0:a.lng())??0,placeId:s.id,placeLabel:s.label});throw new Error("missing informations")},g=async(s,o)=>(r||await m(),y(s,o).then(t=>{var a,n;if(t.length>0){const l=t[0];if(l.address_components&&l.formatted_address&&l.geometry)return new F({formattedAddress:l.formatted_address,locality:e(l.address_components,"locality"),country:e(l.address_components,"country"),latitude:((a=l.geometry.location)==null?void 0:a.lat())??0,longitude:((n=l.geometry.location)==null?void 0:n.lng())??0,placeId:l.place_id,placeLabel:l.formatted_address})}throw new Error("missing informations")})),S=s=>new Promise((o,t)=>{i.getPlacePredictions({input:s,sessionToken:d},function(a,n){n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),y=(s,o)=>new Promise((t,a)=>{new google.maps.Geocoder().geocode({location:{lat:s,lng:o}},(n,l)=>{l!=google.maps.GeocoderStatus.OK||!n?a(l):t(n)})}),f=s=>new Promise((o,t)=>{c.getDetails({placeId:s,sessionToken:d,fields:["formatted_address","geometry","address_components","name"]},(a,n)=>{n!=google.maps.places.PlacesServiceStatus.OK||!a?t(n):o(a)})}),e=(s,o)=>{const t=v.find(s,a=>v.some(a.types,n=>n===o));return(t==null?void 0:t.long_name)??""};return{search:p,get:u,reverseSearch:g}},C=P({name:"FSAutocompleteAddress",components:{FSAutocompleteField:T},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(r,{emit:i}){const{search:c,get:d}=$(),m=_([]),p=_(null),u=async e=>e===null?Promise.resolve([]):(m.value=await c(e),Promise.resolve([])),g=async e=>{if(e===null){i("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const s=await d(e);i("update:modelValue",s)},{search:S,onUpdate:y}=D(m,[],i,u,g,e=>e.id,e=>e.label,!0,!1),f=e=>({id:e.placeId,label:e.placeLabel});return k(()=>{r.modelValue&&(p.value=f(r.modelValue))}),I(()=>r.modelValue,e=>{e&&(p.value=f(e))}),{modelValuePlace:p,places:m,search:S,onUpdate:y}}});function j(r,i,c,d,m,p){const u=E("FSAutocompleteField");return N(),O(u,R({clearable:!1,toggleSet:!1,multiple:!1,items:r.places,modelValue:r.modelValuePlace,"onUpdate:modelValue":r.onUpdate,search:r.search,"onUpdate:search":i[0]||(i[0]=g=>r.search=g)},r.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const V=L(C,[["render",j]]);C.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:null,value2:new F({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})}},render:(r,{argTypes:i})=>({components:{FSAutocompleteAddress:V,FSCol:U},props:Object.keys(i),setup(){return{...r}},template:`
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
}`,...(b=(w=A.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const eo=["Variations"];export{A as Variations,eo as __namedExportsOrder,Ze as default};
