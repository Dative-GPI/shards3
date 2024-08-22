import{d as E,c as B,y as g,z as i,A as f,B as u,m as U,L as c,E as le,G as se,b as F,C,F as I,N as T,I as b,D as h,i as w,o as x,w as q,p as z,W as ie}from"./vue.esm-bundler-BATn8cDU.js";import{l as y}from"./leaflet-src-CVI3lIVZ.js";import{F as ue}from"./FSClickable-DYDREYld.js";import{_ as j}from"./FSSpan-C8YxV3Vj.js";import{_ as $}from"./FSRow-Gvoj2sTW.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSButton-D0V1nthY.js";import{F as de}from"./FSDialog-DM-K97kC.js";import{F as Q}from"./FSCard-CAgq3XuJ.js";import{_ as M}from"./FSCol-D9tDKebi.js";import{u as pe}from"./css-C5boehQC.js";import{b as me}from"./VOverlay-D8zq6d1f.js";import{u as P,C as V}from"./useColors-D4RQatlL.js";import{u as ce}from"./useTranslations-C_i4rqaX.js";import{F as fe}from"./FSFadeOut-8zEGCDGr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VProgressCircular-Bi_qA2kG.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./VIcon-BgP_kyAH.js";import"./useSlots-iSUV1mlj.js";import"./FSIcon-Kk713u84.js";import"./FSText-oSl_EFxG.js";import"./VSpacer-Bp_e_Kvt.js";import"./VDialog-BAAsSUMi.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-D0bPfire.js";import"./VDefaultsProvider-DeTRucHm.js";import"./anchor-CBLqXyZM.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./locale-Cm_eUAdw.js";import"./router-BSq-7NWC.js";import"./transition-O2x8Myu8.js";import"./index-3zl-tJp_.js";import"./uuid-DTaye2KM.js";const ye=(e,a)=>`
  <div style="--fs-map-mylocation-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,ge=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,ve=()=>'<div class="fs-map-mylocation-pin" />',K=E({name:"FSImageCard",components:{FSClickable:ue,FSSpan:j,FSRow:$},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:B(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function he(e,a,o,n,r,t){const d=g("FSClickable");return i(),f(d,U({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:u(()=>[c($,{align:"bottom-left",height:"fill"},{default:u(()=>[c($,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:u(()=>[c(j,{font:"text-overline"},{default:u(()=>[le(se(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const Fe=S(K,[["render",he]]);K.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const Y=E({name:"FSMapLayerButton",components:{FSImageCard:Fe,FSButton:L,FSDialog:de,FSRow:$},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const o=F(!1);return{dialog:o,onLayerClick:r=>{a("update:modelValue",r),o.value=!1}}}});function Se(e,a,o,n,r,t){const d=g("FSImageCard"),l=g("FSDialog");return i(),C(I,null,[c(L,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=s=>e.dialog=!0)}),c(l,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=s=>e.dialog=s),width:"500px",title:e.$tr("ui.map.select-layer","Select layer")},{body:u(()=>[c($,{align:"center-center",padding:"0 16px 0 0"},{default:u(()=>[(i(!0),C(I,null,T(e.layers,s=>(i(),f(d,{variant:e.modelValue===s.name?"full":"background",color:e.modelValue===s.name?"primary":"light",label:s.label,src:s.image,key:s.name,onClick:_=>e.onLayerClick(s.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Le=S(Y,[["render",Se]]);Y.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const J=E({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:L,FSCard:Q,FSCol:M,FSRow:$},emits:["update:mode"],setup(){const{isExtraSmall:e}=pe();return{isExtraSmall:e}}});function Me(e,a,o,n,r,t){const d=g("FSCard");return e.isExtraSmall?(i(),C(I,{key:0},[c(me,{modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=l=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"]),c(d,{class:"fs-map-overlay-mobile",elevation:!0,height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px",border:!1},{default:u(()=>[c(M,{height:"100%",gap:"0px"},{default:u(()=>[c($,{align:"center-center",onTouchstart:a[2]||(a[2]=l=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:u(()=>[c(L,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=l=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(i(),f(M,{key:0,height:"fill",style:{"min-height":"0"}},{default:u(()=>[b(e.$slots,"body")]),_:3})):h("",!0)]),_:3})]),_:3},8,["height"])],64)):(i(),f(d,{key:1,class:"fs-map-overlay-desktop",elevation:!0,border:!1},{default:u(()=>[c(M,{height:"fill"},{default:u(()=>[b(e.$slots,"body")]),_:3})]),_:3}))}const be=S(J,[["render",Me]]);J.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const X={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:a}){const o=w("map"),n=w("markerClusterGroup",F(null)),{getColors:r}=P(),t=F(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const d=()=>{if(!o.value||!e.latlng)return;t.value&&(n&&n.value?n.value.removeLayer(t.value):o.value.removeLayer(t.value));let l=null;e.variant==="gps"?l=y.divIcon({html:ve(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon&&(l=y.divIcon({html:ye(e.icon,r(e.color).base),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]})),l&&(t.value=y.marker(e.latlng,{icon:l}),t.value.on("click",s=>{a("click",s)}),n&&n.value?t.value.addTo(n.value):t.value.addTo(o.value))};x(d),q(()=>[e.variant,e.color,e.latlng,e.selected],d)}};function $e(e,a,o,n,r,t){return b(e.$slots,"default")}const ke=S(X,[["render",$e]]);X.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const ee={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=w("map"),o=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const n=()=>{!e.layer||!a.value||(o&&a.value.removeLayer(o),e.layer.addTo(a.value))};x(n),q(()=>e.layer,n)}};function we(e,a,o,n,r,t){return b(e.$slots,"default")}const Ce=S(ee,[["render",we]]);ee.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const ae={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=w("map");let n=!1;if(!o)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=F(new y.FeatureGroup);z("featureGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&(n||(r.value.addTo(o.value),n=!0),a("update:bounds",r.value.getBounds()))})}};function Ie(e,a,o,n,r,t){return b(e.$slots,"default")}const qe=S(ae,[["render",Ie]]);ae.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const oe={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=w("map");let n=!1;if(!o)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=F(new y.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:17,iconCreateFunction:function(t){return y.divIcon({html:ge(t.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));z("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&(n||(r.value.addTo(o.value),n=!0),a("update:bounds",r.value.getBounds()))})}};function _e(e,a,o,n,r,t){return b(e.$slots,"default")}const Ve=S(oe,[["render",_e]]);oe.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const ne={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const o=w("map"),n=w("featureGroup",F(null)),{getColors:r}=P(),t=F(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const d=()=>{if(!o.value||!e.latlngs)return;t.value&&(n&&n.value?n.value.removeLayer(t.value):o.value.removeLayer(t.value));const l=r(e.color).base;t.value=y.polygon(e.latlngs.map(s=>[s.lat,s.lng]),{color:l,fillColor:l+"50",fillOpacity:.5,className:"fs-map-area"}),t.value.on("click",s=>{a("click",s)}),n&&n.value?t.value.addTo(n.value):t.value.addTo(o.value)};x(d),q(()=>[e.color,e.latlngs],d)}};function Ge(e,a,o,n,r,t){return b(e.$slots,"default")}const Ee=S(ne,[["render",Ge]]);ne.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var Z={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const te=E({name:"FSMap",components:{FSMapMarker:ke,FSMapTileLayer:Ce,FSMapFeatureGroup:qe,FSMapMarkerClusterGroup:Ve,FSMapPolygon:Ee,FSMapLayerButton:Le,FSMapOverlay:be,FSButton:L,FSCard:Q,FSCol:M},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:o}=ce(),{getColors:n}=P(),r=F(),t=15,d=F(null),l=F(null);z("map",l);const s=[{name:"map",label:o("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:y.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${Z.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:o("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:y.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${Z.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],_=B(()=>({"--fs-map-location-pin-color":n(V.Primary).base,"--fs-map-mylocation-pin-color":n(V.Primary).base,"--fs-map-mylocation-pin-color-alpha":n(V.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0"})),A=B(()=>{var v;return((v=s.find(p=>p.name===e.currentLayer))==null?void 0:v.layer)??s[0].layer});return x(()=>{if(!r.value)return;const v={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:y.latLngBounds(y.latLng(-90,-180),y.latLng(90,180)),maxBoundsViscosity:1};l.value=y.map(r.value,v).setView([e.center[0],e.center[1]],t),l.value.on("click",p=>{a("click:latlng",p.latlng)}),l.value.attributionControl.remove(),y.control.attribution({position:"bottomleft"}).addTo(l.value),l.value.on("locationfound",p=>{p.latlng&&(d.value=p.latlng,l.value&&l.value.panTo(p.latlng))})}),q(()=>e.center,v=>{l.value&&l.value.setView([v[0],v[1]],t)}),q(()=>e.selectedLocationId,v=>{if(!l.value)return;const p=e.locations.find(N=>N.id===v);p&&l.value.panTo(y.latLng(p==null?void 0:p.address.latitude,p==null?void 0:p.address.longitude))},{immediate:!0}),{ColorEnum:V,leafletContainer:r,map:l,actualLayer:A,mapLayers:s,gpsPosition:d,style:_}}}),xe={ref:"leafletContainer",class:"fs-leaflet-container"};function Ae(e,a,o,n,r,t){const d=g("FSMapTileLayer"),l=g("FSMapMarker"),s=g("FSMapPolygon"),_=g("FSMapFeatureGroup"),A=g("FSMapMarkerClusterGroup"),v=g("FSMapLayerButton"),p=g("FSCard"),N=g("FSMapOverlay");return i(),f(p,U({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:u(()=>{var R;return[ie("div",xe,[e.map?(i(),C(I,{key:0},[c(d,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(i(),f(l,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):h("",!0),e.$props.areas?(i(),f(_,{key:1,"expected-layers":e.$props.areas.length},{default:u(()=>[(i(!0),C(I,null,T(e.areas,m=>(i(),f(s,{key:m.id,color:m.color,latlngs:m.coordinates.map(k=>({lat:k.latitude,lng:k.longitude})),onClick:k=>e.$emit("update:selectedAreaId",m.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):h("",!0),e.$props.locations?(i(),f(A,{key:2,"expected-layers":e.$props.locations.length},{default:u(()=>[(i(!0),C(I,null,T(e.$props.locations,m=>(i(),f(l,{selected:m.id===e.$props.selectedLocationId,key:m.id,color:m.color,icon:m.icon,latlng:{lat:m.address.latitude,lng:m.address.longitude},onClick:k=>e.$emit("update:selectedLocationId",m.id)},null,8,["selected","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers"])):h("",!0)],64)):h("",!0)],512),(R=e.$props.allowedLayers)!=null&&R.length&&e.$props.allowedLayers.length>1?(i(),f(v,{key:0,layers:e.mapLayers.filter(m=>{var k;return((k=e.$props.allowedLayers)==null?void 0:k.includes(m.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[0]||(a[0]=m=>e.$emit("update:currentLayer",m))},null,8,["layers","modelValue"])):h("",!0),e.map?(i(),f(M,{key:1,class:"fs-map-control-buttons"},{default:u(()=>[e.$props.showMyLocation?(i(),f(L,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[1]||(a[1]=()=>e.map.locate())})):h("",!0),e.$props.showZoomButtons?(i(),f(p,{key:1,elevation:!0},{default:u(()=>[c(M,{gap:"0"},{default:u(()=>[c(L,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[2]||(a[2]=()=>e.map.zoomIn()),border:!1}),c(L,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[3]||(a[3]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):h("",!0)]),_:1})):h("",!0),e.$slots.overlay?(i(),f(N,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[4]||(a[4]=m=>e.$emit("update:overlayMode",m))},{body:u(()=>[b(e.$slots,"overlay")]),_:3},8,["mode"])):h("",!0)]}),_:3},16,["width","height","style"])}const re=S(te,[["render",Ae]]);te.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const ba={title:"Foundation/Shared/Map",component:re,tags:["autodocs"]},O={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",icon:"mdi-factory",color:"primary",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"}},Ne={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},Oe={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},Be={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},Te={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},G={args:{args:{locations1:[{...O}],locations2:[{...O}],locations3:[{...Oe},{...Ne},{...Be}],selectedLocationId1:O.id,selectedLocationId2:null,selectedLocationId3:null,overlayMode1:"collapse",overlayMode2:"half",currentLayer1:"map",currentLayer2:"imagery",areas1:[Te]}},render:(e,{argTypes:a})=>({components:{FSMap:re,FSRow:$,FSCol:M,FSFadeOut:fe},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
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
    </div>`})};var H,D,W;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(D=G.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const $a=["Variations"];export{G as Variations,$a as __namedExportsOrder,ba as default};
