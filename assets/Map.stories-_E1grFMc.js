import{d as Z,c as N,y as S,z as c,A as h,B as y,m as ee,L as v,E as ye,G as ve,b as g,C as A,F as _,N as W,o as T,V as ge,X as H,a1 as U,I as k,D as L,i as q,w as C,p as j,W as he}from"./vue.esm-bundler-BATn8cDU.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Se}from"./FSClickable-DYDREYld.js";import{_ as ae}from"./FSSpan-C8YxV3Vj.js";import{_ as I}from"./FSRow-Gvoj2sTW.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSButton-D0V1nthY.js";import{F as Fe}from"./FSDialog-DM-K97kC.js";import{F as oe}from"./FSCard-CAgq3XuJ.js";import{_ as w}from"./FSCol-D9tDKebi.js";import{u as te}from"./css-C5boehQC.js";import{b as Le}from"./VOverlay-D8zq6d1f.js";import{u as Q,C as P}from"./useColors-D4RQatlL.js";import{u as Me}from"./useTranslations-C_i4rqaX.js";import{F as be}from"./FSFadeOut-8zEGCDGr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VProgressCircular-Bi_qA2kG.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./VIcon-BgP_kyAH.js";import"./useSlots-iSUV1mlj.js";import"./FSIcon-Kk713u84.js";import"./FSText-oSl_EFxG.js";import"./VSpacer-Bp_e_Kvt.js";import"./VDialog-BAAsSUMi.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-D0bPfire.js";import"./VDefaultsProvider-DeTRucHm.js";import"./anchor-CBLqXyZM.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./locale-Cm_eUAdw.js";import"./router-BSq-7NWC.js";import"./transition-O2x8Myu8.js";import"./index-3zl-tJp_.js";import"./uuid-DTaye2KM.js";const $e=(e,a)=>`
  <div style="--fs-map-mylocation-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,we=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,ke=()=>'<div class="fs-map-mylocation-pin" />',ne=Z({name:"FSImageCard",components:{FSClickable:Se,FSSpan:ae,FSRow:I},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:N(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function Ie(e,a,o,t,r,n){const m=S("FSClickable");return c(),h(m,ee({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[v(I,{align:"bottom-left",height:"fill"},{default:y(()=>[v(I,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[v(ae,{font:"text-overline"},{default:y(()=>[ye(ve(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const Ce=b(ne,[["render",Ie]]);ne.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const re=Z({name:"FSMapLayerButton",components:{FSImageCard:Ce,FSButton:$,FSDialog:Fe,FSRow:I},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const o=g(!1);return{dialog:o,onLayerClick:r=>{a("update:modelValue",r),o.value=!1}}}});function qe(e,a,o,t,r,n){const m=S("FSImageCard"),i=S("FSDialog");return c(),A(_,null,[v($,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=d=>e.dialog=!0)}),v(i,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=d=>e.dialog=d),width:"500px",title:e.$tr("ui.map.select-layer","Select layer")},{body:y(()=>[v(I,{align:"center-center",padding:"0 16px 0 0"},{default:y(()=>[(c(!0),A(_,null,W(e.layers,d=>(c(),h(m,{variant:e.modelValue===d.name?"full":"background",color:e.modelValue===d.name?"primary":"light",label:d.label,src:d.image,key:d.name,onClick:u=>e.onLayerClick(d.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Ve=b(re,[["render",qe]]);re.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const le=Z({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:$,FSCard:oe,FSCol:w,FSRow:I},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:o}=te(),t=g(null),r=g(null),n=g(null);return T(()=>{t.value=new ResizeObserver(m=>{m.forEach(i=>{n.value&&i.target===n.value.$el&&(console.log("desktopOverlay change"),a("update:width",i.contentRect.width)),r.value&&i.target===r.value.$el&&(console.log("mobileOverlay change"),a("update:height",i.contentRect.height))})}),r.value&&t.value.observe(r.value.$el),n.value&&t.value.observe(n.value.$el)}),ge(()=>{t.value&&t.value.disconnect()}),{isExtraSmall:o,mobileOverlay:r,desktopOverlay:n}}});function Ae(e,a,o,t,r,n){const m=S("FSCard");return c(),A(_,null,[H(v(Le,{modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=i=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"]),[[U,e.isExtraSmall]]),H(v(m,{class:"fs-map-overlay-mobile",ref:"mobileOverlay",elevation:!0,height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px",border:!1},{default:y(()=>[v(w,{height:"100%",gap:"0px"},{default:y(()=>[v(I,{align:"center-center",onTouchstart:a[2]||(a[2]=i=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[v($,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=i=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),h(w,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[k(e.$slots,"body")]),_:3})):L("",!0)]),_:3})]),_:3},8,["height"]),[[U,e.isExtraSmall]]),H(v(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[v(w,{height:"fill"},{default:y(()=>[k(e.$slots,"body")]),_:3})]),_:3},512),[[U,!e.isExtraSmall]])],64)}const _e=b(le,[["render",Ae]]);le.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const se={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:a}){const o=q("map"),t=q("markerClusterGroup",g(null)),{getColors:r}=Q(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlng)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));let i=null;e.variant==="gps"?i=f.divIcon({html:ke(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon&&(i=f.divIcon({html:$e(e.icon,r(e.color).base),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]})),i&&(n.value=f.marker(e.latlng,{icon:i}),n.value.on("click",d=>{a("click",d)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value))};T(m),C(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function Ge(e,a,o,t,r,n){return k(e.$slots,"default")}const Oe=b(se,[["render",Ge]]);se.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const ue={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=q("map"),o=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const t=()=>{!e.layer||!a.value||(o&&a.value.removeLayer(o),e.layer.addTo(a.value))};T(t),C(()=>e.layer,t)}};function Ee(e,a,o,t,r,n){return k(e.$slots,"default")}const xe=b(ue,[["render",Ee]]);ue.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const ie={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=q("map");let t=!1;if(!o)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=g(new f.FeatureGroup);j("featureGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function Be(e,a,o,t,r,n){return k(e.$slots,"default")}const Ne=b(ie,[["render",Be]]);ie.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const de={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=q("map");let t=!1;if(!o)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=g(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:17,iconCreateFunction:function(n){return f.divIcon({html:we(n.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));j("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function Te(e,a,o,t,r,n){return k(e.$slots,"default")}const ze=b(de,[["render",Te]]);de.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const pe={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const o=q("map"),t=q("featureGroup",g(null)),{getColors:r}=Q(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlngs)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));const i=r(e.color).base;n.value=f.polygon(e.latlngs.map(d=>[d.lat,d.lng]),{color:i,fillColor:i+"50",fillOpacity:.5,className:"fs-map-area"}),n.value.on("click",d=>{a("click",d)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value)};T(m),C(()=>[e.color,e.latlngs],m)}};function Pe(e,a,o,t,r,n){return k(e.$slots,"default")}const Re=b(pe,[["render",Pe]]);pe.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var K={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const me=Z({name:"FSMap",components:{FSMapMarker:Oe,FSMapTileLayer:xe,FSMapFeatureGroup:Ne,FSMapMarkerClusterGroup:ze,FSMapPolygon:Re,FSMapLayerButton:Ve,FSMapOverlay:_e,FSButton:$,FSCard:oe,FSCol:w},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:o}=Me(),{getColors:t}=Q(),{isExtraSmall:r}=te(),n=g(),m=g(),i=g(),d=g(null),u=g(null),G=g(),O=g(),V=15;j("map",u);const E=[{name:"map",label:o("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${K.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:o("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${K.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],x=N(()=>{let p=0;return e.overlayMode!=="expand"&&G.value&&r.value&&(p+=G.value),p}),l=N(()=>{let p=0;return O.value&&!r.value&&(p+=O.value),p}),M=N(()=>({"--fs-map-location-pin-color":t(P.Primary).base,"--fs-map-mylocation-pin-color":t(P.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(P.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${x.value}px`})),fe=N(()=>{var p;return((p=E.find(s=>s.name===e.currentLayer))==null?void 0:p.layer)??E[0].layer}),B=p=>{if(!u.value)return p;const s=u.value.getZoom(),F=u.value.project(p,s).subtract([l.value/2,-x.value/2]);return u.value.unproject(F,s)};return T(()=>{if(!n.value)return;const p={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};u.value=f.map(n.value,p).setView(B(f.latLng(e.center[0],e.center[1])),V),u.value.on("click",s=>{a("click:latlng",s.latlng)}),u.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(u.value),u.value.on("locationfound",s=>{s.latlng&&(d.value=s.latlng,u.value&&u.value.panTo(B(s.latlng)))})}),C(()=>e.center,p=>{u.value&&u.value.setView(B(f.latLng(p[0],p[1])),V)}),C(()=>e.selectedLocationId,p=>{if(!u.value)return;const s=e.locations.find(F=>F.id===p);s&&u.value.panTo(B(f.latLng(s==null?void 0:s.address.latitude,s==null?void 0:s.address.longitude)))},{immediate:!0}),C(()=>e.selectedAreaId,p=>{if(!u.value)return;const s=e.areas.find(z=>z.id===p);if(!s)return;const F=f.latLngBounds(s.coordinates.map(z=>B(f.latLng(z.latitude,z.longitude))));u.value.fitBounds(F)},{immediate:!0}),C(()=>[m.value,i.value],([p,s])=>{if(!u.value)return;let F=p;F&&s?F.extend(s):s&&(F=s),F&&u.value.fitBounds(F,{maxZoom:V})}),{ColorEnum:P,leafletContainer:n,locationGroupBounds:m,overlayHeight:G,overlayWidth:O,areaGroupBounds:i,map:u,actualLayer:fe,mapLayers:E,gpsPosition:d,style:M}}}),Ze={ref:"leafletContainer",class:"fs-leaflet-container"};function He(e,a,o,t,r,n){const m=S("FSMapTileLayer"),i=S("FSMapMarker"),d=S("FSMapPolygon"),u=S("FSMapFeatureGroup"),G=S("FSMapMarkerClusterGroup"),O=S("FSMapLayerButton"),V=S("FSCard"),E=S("FSMapOverlay");return c(),h(V,ee({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var x;return[he("div",Ze,[e.map?(c(),A(_,{key:0},[v(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),h(i,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):L("",!0),e.$props.areas?(c(),h(u,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=l=>e.areaGroupBounds=l)},{default:y(()=>[(c(!0),A(_,null,W(e.areas,l=>(c(),h(d,{key:l.id,color:l.color,latlngs:l.coordinates.map(M=>({lat:M.latitude,lng:M.longitude})),onClick:M=>e.$emit("update:selectedAreaId",l.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):L("",!0),e.$props.locations?(c(),h(G,{key:2,"expected-layers":e.$props.locations.length,"onUpdate:bounds":a[1]||(a[1]=l=>e.locationGroupBounds=l)},{default:y(()=>[(c(!0),A(_,null,W(e.$props.locations,l=>(c(),h(i,{selected:l.id===e.$props.selectedLocationId,key:l.id,color:l.color,icon:l.icon,latlng:{lat:l.address.latitude,lng:l.address.longitude},onClick:M=>e.$emit("update:selectedLocationId",l.id)},null,8,["selected","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers"])):L("",!0)],64)):L("",!0)],512),(x=e.$props.allowedLayers)!=null&&x.length&&e.$props.allowedLayers.length>1?(c(),h(O,{key:0,layers:e.mapLayers.filter(l=>{var M;return((M=e.$props.allowedLayers)==null?void 0:M.includes(l.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:currentLayer",l))},null,8,["layers","modelValue"])):L("",!0),e.map?(c(),h(w,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),h($,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):L("",!0),e.$props.showZoomButtons?(c(),h(V,{key:1,elevation:!0},{default:y(()=>[v(w,{gap:"0"},{default:y(()=>[v($,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),v($,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):L("",!0)]),_:1})):L("",!0),e.$slots.overlay?(c(),h(E,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=l=>e.$emit("update:overlayMode",l)),"onUpdate:height":a[7]||(a[7]=l=>e.overlayHeight=l),"onUpdate:width":a[8]||(a[8]=l=>e.overlayWidth=l)},{body:y(()=>[k(e.$slots,"overlay")]),_:3},8,["mode"])):L("",!0)]}),_:3},16,["width","height","style"])}const ce=b(me,[["render",He]]);me.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const _a={title:"Foundation/Shared/Map",component:ce,tags:["autodocs"]},D={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",icon:"mdi-factory",color:"primary",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"}},Ue={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},De={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},We={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},je={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},R={args:{args:{locations1:[{...D}],locations2:[{...D}],locations3:[{...De},{...Ue},{...We}],selectedLocationId1:D.id,selectedLocationId2:null,selectedLocationId3:null,selectedAreaId1:null,selectedAreaId2:null,overlayMode1:"collapse",overlayMode2:"half",currentLayer1:"map",currentLayer2:"imagery",areas1:[je]}},render:(e,{argTypes:a})=>({components:{FSMap:ce,FSRow:I,FSCol:w,FSFadeOut:be},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
        v-model:selectedAreaId="args.selectedAreaId1"
        :locations="args.locations3"
      >
        <template v-slot:overlay >
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :locations="args.locations3"
        :enableScrollWheelZoom="true"
        v-model:overlayMode="args.overlayMode2"
        v-model:currentLayer="args.currentLayer2"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        v-model:selectedAreaId="args.selectedAreaId2"
        :areas="args.areas1"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
                <div style="padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
      <FSMap
        :editable="true"
        :locations="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      <FSMap
        :editable="false"
        :locations="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        :selectedLocationId="args.selectedLocationId2"
      />
    </div>`})};var Y,X,J;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    args: {
      locations1: [{
        ...location1
      }],
      locations2: [{
        ...location1
      }],
      locations3: [{
        ...location3
      }, {
        ...location2
      }, {
        ...location4
      }],
      selectedLocationId1: location1.id,
      selectedLocationId2: null,
      selectedLocationId3: null,
      selectedAreaId1: null,
      selectedAreaId2: null,
      overlayMode1: 'collapse',
      overlayMode2: 'half',
      currentLayer1: 'map',
      currentLayer2: 'imagery',
      areas1: [area1]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMap,
      FSRow,
      FSCol,
      FSFadeOut
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
        v-model:selectedAreaId="args.selectedAreaId1"
        :locations="args.locations3"
      >
        <template v-slot:overlay >
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :locations="args.locations3"
        :enableScrollWheelZoom="true"
        v-model:overlayMode="args.overlayMode2"
        v-model:currentLayer="args.currentLayer2"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        v-model:selectedAreaId="args.selectedAreaId2"
        :areas="args.areas1"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
                <div style="padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
      <FSMap
        :editable="true"
        :locations="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      <FSMap
        :editable="false"
        :locations="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        :selectedLocationId="args.selectedLocationId2"
      />
    </div>\`
  })
}`,...(J=(X=R.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const Ga=["Variations"];export{R as Variations,Ga as __namedExportsOrder,_a as default};
