import{d as b,b as S,o as C,w as V,y as P,z as k,A as I,m as N}from"./vue.esm-bundler-DeSao-KJ.js";import{_ as A}from"./lodash-BiW_TGGX.js";import{A as _}from"./address-CE2z3AEI.js";import{F as R}from"./FSAutocompleteField-CBJWUiM8.js";import{u as T}from"./useAutocomplete-BjXljuos.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as E}from"./FSCol-CA6NzDpV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-DwhyMBBv.js";import"./FSTextField-xG_kerPN.js";import"./VField-DEMHFDPm.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./FSRow-JJutUvlP.js";import"./css-BnhLLynS.js";import"./useColors-DL92kHTE.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CUXN7UlR.js";import"./FSClickable-7AMX5jTq.js";import"./FSCard-B1Oet1YO.js";import"./FSIcon-DuYoAbGq.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-D74RUSZ7.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-D4D4UEOO.js";import"./FSRadio-x2anfynz.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-B3jJ7hmw.js";import"./FSSlideGroup-DGX0Yc4-.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BNjss27o.js";import"./FSCheckbox-BfU8RDs1.js";import"./FSFadeOut-IHk7VvTz.js";import"./FSLoader-D-GHyjSx.js";import"./elevation-BBJMtRPf.js";import"./VSelect-DRB1q99h.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";const U=()=>{let o=!1,n,p,a;const l=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,p=new google.maps.places.PlacesService(document.getElementById("places")),a=new google.maps.places.AutocompleteSessionToken,o=!0},m=async t=>(o||await l(),c(t).then(e=>A.map(e,r=>({id:r.place_id,label:r.description}))).catch(()=>[])),d=async t=>{var r,s;o||await l();const e=await f(t.id);if(a=new google.maps.places.AutocompleteSessionToken,e.address_components&&e.formatted_address&&e.geometry)return new _({formattedAddress:e.formatted_address,locality:u(e.address_components,"locality"),country:u(e.address_components,"country"),latitude:((r=e.geometry.location)==null?void 0:r.lat())??0,longitude:((s=e.geometry.location)==null?void 0:s.lng())??0,placeId:t.id,placeLabel:t.label});throw new Error("missing informations")},c=t=>new Promise((e,r)=>{n.getPlacePredictions({input:t,sessionToken:a},function(s,i){i!=google.maps.places.PlacesServiceStatus.OK||!s?r(i):e(s)})}),f=t=>new Promise((e,r)=>{p.getDetails({placeId:t,sessionToken:a,fields:["formatted_address","geometry","address_components","name"]},(s,i)=>{i!=google.maps.places.PlacesServiceStatus.OK||!s?r(i):e(s)})}),u=(t,e)=>{const r=A.find(t,s=>A.some(s.types,i=>i===e));return r&&r.long_name||""};return{search:m,get:d}},h=b({name:"FSAutocompleteAddress",components:{FSAutocompleteField:R},props:{modelValue:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(o,{emit:n}){const{search:p,get:a}=U(),l=S([]),m=S(null),d=async e=>e===null?Promise.resolve([]):(l.value=await p(e),Promise.resolve([])),c=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const r=await a(e);n("update:modelValue",r)},{search:f,onUpdate:u}=T(l,[],n,d,c,e=>e.id,e=>e.label,!0,!1),t=e=>({id:e.placeId,label:e.placeLabel});return C(()=>{o.modelValue&&(m.value=t(o.modelValue))}),V(()=>o.modelValue,e=>{e&&(m.value=t(e))}),{modelValuePlace:m,places:l,search:f,onUpdate:u}}});function O(o,n,p,a,l,m){const d=P("FSAutocompleteField");return k(),I(d,N({clearable:!1,toggleSet:!1,multiple:!1,items:o.places,modelValue:o.modelValuePlace,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":n[0]||(n[0]=c=>o.search=c)},o.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const w=D(h,[["render",O]]);h.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Function as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const to={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:new _({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})}},render:(o,{argTypes:n})=>({components:{FSAutocompleteAddress:w,FSCol:E},props:Object.keys(n),setup(){return{...o}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>`})};var F,y,v;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(y=g.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const ro=["Variations"];export{g as Variations,ro as __namedExportsOrder,to as default};
