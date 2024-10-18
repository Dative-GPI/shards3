import{d as O,b as T,c as U,y as D,z as N,A as R,m as j}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{A as _}from"./address-CE2z3AEI.js";import{F as $}from"./FSAutocompleteField-CSd4usHi.js";import{u as L}from"./useAutocomplete-C4vba3wV.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-B-Vfvg0L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-DJ1HQDjY.js";import"./FSTextField-DPsTjA6v.js";import"./FSBaseField-DL008ZG5.js";import"./FSSpan-CHspDDbd.js";import"./useBreakpoints-BGn0bPYv.js";import"./useSlots-BnylMYIF.js";import"./FSRow-BkWeXIi_.js";import"./css-i8JhJBs1.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./FSButton-BQje8JZk.js";import"./FSClickable-Dnlrfn2W.js";import"./FSCard-DrQswI-1.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSIcon-CtLYuQJX.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSDialogMenu-DQd6lGHm.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-CuNxa7LX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Df26-_J5.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-Bu237MSN.js";import"./FSWrapGroup-B9QcRiHf.js";import"./FSCheckbox-BLdBQVgd.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CzSmEb-b.js";import"./FSLoader-DQSvmWsx.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-CN98aZYT.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-DXUxnIIu.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";const B=()=>{let r=!1,n,c,d;const p=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),d=new google.maps.places.AutocompleteSessionToken,r=!0},f=async t=>(r||await p(),g(t).then(o=>V.map(o,a=>({id:a.place_id,label:a.description}))).catch(()=>[])),u=async t=>{var a,s;r||await p();const o=await F(t.id);if(d=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new _({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((s=o.geometry.location)==null?void 0:s.lng())??0,placeId:t.id,placeLabel:t.label});throw new Error("missing informations")},i=async(t,o)=>(r||await p(),A(t,o).then(a=>{var s,l;if(a.length>0){const m=a[0];if(m.address_components&&m.formatted_address&&m.geometry)return new _({formattedAddress:m.formatted_address,locality:e(m.address_components,"locality"),country:e(m.address_components,"country"),latitude:((s=m.geometry.location)==null?void 0:s.lat())??0,longitude:((l=m.geometry.location)==null?void 0:l.lng())??0,placeId:m.place_id,placeLabel:m.formatted_address})}throw new Error("missing informations")})),g=t=>new Promise((o,a)=>{n.getPlacePredictions({input:t,sessionToken:d},function(s,l){l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),A=(t,o)=>new Promise((a,s)=>{new google.maps.Geocoder().geocode({location:{lat:t,lng:o}},(l,m)=>{m!=google.maps.GeocoderStatus.OK||!l?s(m):a(l)})}),F=t=>new Promise((o,a)=>{c.getDetails({placeId:t,sessionToken:d,fields:["formatted_address","geometry","address_components","name"]},(s,l)=>{l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),e=(t,o)=>{const a=V.find(t,s=>V.some(s.types,l=>l===o));return(a==null?void 0:a.long_name)??""};return{search:f,get:u,reverseSearch:i}},E=O({name:"FSAutocompleteAddress",components:{FSAutocompleteField:$},props:{modelValue:{type:Object,required:!1,default:null}},emits:["update:modelValue"],setup(r,{emit:n}){const{search:c,get:d}=B(),p=T([]),f=U(()=>{if(r.modelValue){const e=F(r.modelValue),t=p.value.filter(o=>o.id!==e.id);return[e,...t]}return p.value}),u=async e=>e===null?Promise.resolve([]):(p.value=await c(e),Promise.resolve([])),i=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const t=await d(e);n("update:modelValue",t)},{search:g,onUpdate:A}=L(p,[],n,u,i,e=>e.id,e=>e.label,!0,!1,0,500),F=e=>({id:e.placeId,label:e.placeLabel});return{places:p,items:f,search:g,onUpdate:A}}});function K(r,n,c,d,p,f){var i;const u=D("FSAutocompleteField");return N(),R(u,j({clearable:!1,toggleSet:!1,multiple:!1,items:r.items,modelValue:(i=r.$props.modelValue)==null?void 0:i.placeId,"onUpdate:modelValue":r.onUpdate,search:r.search,"onUpdate:search":n[0]||(n[0]=g=>r.search=g)},r.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const h=x(E,[["render",K]]);E.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const mo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},S={args:{modelValue:new _({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(r,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:r}},template:`
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
