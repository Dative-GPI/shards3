import{d as O,b as T,c as U,y as D,z as N,A as R,m as j}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{A as _}from"./address-CE2z3AEI.js";import{F as $}from"./FSAutocompleteField-BsuqiUNA.js";import{u as L}from"./useAutocomplete-By7-59rq.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-CvoATp5Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-OYD9-eLG.js";import"./FSTextField-JGjjGRZ0.js";import"./FSBaseField-D0m8YJR6.js";import"./FSSpan-Bnbdrku6.js";import"./useBreakpoints-INFVV7da.js";import"./useSlots-zwOl0abH.js";import"./FSRow-BnsweOMX.js";import"./css-BWDYXGFo.js";import"./useColors-3CjboYRA.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./FSButton-C0E8ILJw.js";import"./FSClickable-DTqk3LMl.js";import"./FSCard-BOEac87c.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSIcon-kERq0rd3.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDialogMenu-pzU7lUOk.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CDRvV-qZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BAVwN0SI.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-XllH3ja9.js";import"./FSWrapGroup-Cj-lYBpD.js";import"./FSCheckbox-BnhjVDBp.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-DxMiSoxL.js";import"./FSLoader-DzvXQnnL.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-vYSNhBy9.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-B1CQJS6i.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";const B=()=>{let r=!1,n,c,d;const p=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),d=new google.maps.places.AutocompleteSessionToken,r=!0},f=async t=>(r||await p(),g(t).then(o=>V.map(o,a=>({id:a.place_id,label:a.description}))).catch(()=>[])),u=async t=>{var a,s;r||await p();const o=await F(t.id);if(d=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new _({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((s=o.geometry.location)==null?void 0:s.lng())??0,placeId:t.id,placeLabel:t.label});throw new Error("missing informations")},i=async(t,o)=>(r||await p(),A(t,o).then(a=>{var s,l;if(a.length>0){const m=a[0];if(m.address_components&&m.formatted_address&&m.geometry)return new _({formattedAddress:m.formatted_address,locality:e(m.address_components,"locality"),country:e(m.address_components,"country"),latitude:((s=m.geometry.location)==null?void 0:s.lat())??0,longitude:((l=m.geometry.location)==null?void 0:l.lng())??0,placeId:m.place_id,placeLabel:m.formatted_address})}throw new Error("missing informations")})),g=t=>new Promise((o,a)=>{n.getPlacePredictions({input:t,sessionToken:d},function(s,l){l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),A=(t,o)=>new Promise((a,s)=>{new google.maps.Geocoder().geocode({location:{lat:t,lng:o}},(l,m)=>{m!=google.maps.GeocoderStatus.OK||!l?s(m):a(l)})}),F=t=>new Promise((o,a)=>{c.getDetails({placeId:t,sessionToken:d,fields:["formatted_address","geometry","address_components","name"]},(s,l)=>{l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),e=(t,o)=>{const a=V.find(t,s=>V.some(s.types,l=>l===o));return(a==null?void 0:a.long_name)??""};return{search:f,get:u,reverseSearch:i}},E=O({name:"FSAutocompleteAddress",components:{FSAutocompleteField:$},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(r,{emit:n}){const{search:c,get:d}=B(),p=T([]),f=U(()=>{if(r.modelValue){const e=F(r.modelValue),t=p.value.filter(o=>o.id!==e.id);return[e,...t]}return p.value}),u=async e=>e===null?Promise.resolve([]):(p.value=await c(e),Promise.resolve([])),i=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const t=await d(e);n("update:modelValue",t)},{search:g,onUpdate:A}=L(p,[],n,u,i,e=>e.id,e=>e.label,!0,!1,0,500),F=e=>({id:e.placeId,label:e.placeLabel});return{places:p,items:f,search:g,onUpdate:A}}});function K(r,n,c,d,p,f){var i;const u=D("FSAutocompleteField");return N(),R(u,j({clearable:!1,toggleSet:!1,multiple:!1,items:r.items,modelValue:(i=r.$props.modelValue)==null?void 0:i.placeId,"onUpdate:modelValue":r.onUpdate,search:r.search,"onUpdate:search":n[0]||(n[0]=g=>r.search=g)},r.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const h=x(E,[["render",K]]);E.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const mo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},S={args:{modelValue:new _({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(r,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:r}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},y={args:{modelValue:null},render:(r,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:r}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var w,b,v;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: new Address({
      placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
      placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
      formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
      locality: 'Colombier-Saugnieu',
      country: 'France',
      latitude: 45.711741,
      longitude: 5.071675
    })
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(v=(b=S.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,P,I;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: null
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(I=(P=y.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const po=["Default","VariationEmpty"];export{S as Default,y as VariationEmpty,po as __namedExportsOrder,mo as default};
