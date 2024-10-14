import{d as _,c as A,y as F,z as c,A as S,C as y,m as ve,N as h,H as Ge,I as Ze,b as g,E as O,G as B,O as j,g as z,U as he,F as M,X as oe,a1 as te,V as Se,P as _e,K as q,i as R,w as V,p as Q,a8 as ze}from"./vue.esm-bundler-DTB_q9xr.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Pe}from"./FSClickable-B6-SRbsx.js";import{_ as Fe}from"./FSSpan-DGSHCe_l.js";import{_ as b}from"./FSRow-CFFgZ74C.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSButton-BpVntGX1.js";import{F as Ne}from"./FSDialog-D1K8QHIm.js";import{F as Le}from"./FSCard-B1dz5tzT.js";import{F as I}from"./FSCol-CYWCfIBP.js";import{u as Me}from"./useBreakpoints-ERBVGIQe.js";import{b as Te}from"./VOverlay-Coy41zxg.js";import{u as Y,C as D}from"./useColors-CeHYzu6a.js";import{u as De}from"./useTranslations-BehwFxDb.js";import{_ as xe}from"./FSFadeOut-BcBUJmEE.js";import{F as We}from"./FSDialogMultiForm-C_mRQz7Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-B7hQ34V-.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./theme-CX_N7n5F.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-8KdV556C.js";import"./FSText-GEqj0Yf_.js";import"./VSpacer-Di7g3RCw.js";import"./VDialog-5T0GPOZ7.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Atn7Z0Ko.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./index-3zl-tJp_.js";import"./uuid-DTaye2KM.js";import"./FSPagination-D9EwAnw0.js";import"./FSForm-CUiL74ui.js";import"./form-_oo3cshG.js";import"./FSWindow-Brcf5j8v.js";import"./group-CBQYGNTq.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./density-CmGe4Vfq.js";import"./elevation-JfXKLVfD.js";import"./rounded-ErtzAGHK.js";import"./loader-BYp4SDfR.js";import"./index-DMxVfgfA.js";import"./ssrBoot-BTOmRKcz.js";const Ue=(e,a,o="")=>`
  <div title="${o}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,He=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,je=()=>'<div class="fs-map-mylocation-pin" />',Ke=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,be=_({name:"FSImageCard",components:{FSClickable:Pe,FSSpan:Fe,FSRow:b},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:A(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function Qe(e,a,o,t,r,n){const m=F("FSClickable");return c(),S(m,ve({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[h(b,{align:"bottom-left",height:"fill"},{default:y(()=>[h(b,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[h(Fe,{font:"text-overline"},{default:y(()=>[Ge(Ze(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const Ye=k(be,[["render",Qe]]);be.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const we=_({name:"FSMapLayerButton",components:{FSImageCard:Ye,FSButton:$,FSDialog:Ne,FSRow:b},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const o=g(!1);return{dialog:o,onLayerClick:r=>{a("update:modelValue",r),o.value=!1}}}});function Je(e,a,o,t,r,n){const m=F("FSImageCard"),p=F("FSDialog");return c(),O(B,null,[h($,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=u=>e.dialog=!0)}),h(p,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=u=>e.dialog=u),width:"500px",title:e.$tr("ui.map.select-layer","Select layer"),contained:!0},{body:y(()=>[h(b,{align:"center-center"},{default:y(()=>[(c(!0),O(B,null,j(e.layers,u=>(c(),S(m,{variant:e.modelValue===u.name?"full":"background",color:e.modelValue===u.name?"primary":"light",label:u.label,src:u.image,key:u.name,onClick:i=>e.onLayerClick(u.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Xe=k(we,[["render",Je]]);we.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const $e=_({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:$,FSCard:Le,FSCol:I,FSRow:b},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:o}=Me(),t=g(null),r=g(null),n=g(null),m=g(null);return z(()=>{n.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:height",u.contentRect.height)})}),m.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:width",u.contentRect.width)})}),t.value&&(n.value.observe(t.value),a("update:height",t.value.offsetHeight)),r.value&&(m.value.observe(r.value.$el),a("update:width",r.value.$el.offsetWidth))}),he(()=>{n.value&&n.value.disconnect(),m.value&&m.value.disconnect()}),{isExtraSmall:o,mobileOverlayWrapper:t,desktopOverlay:r}}});function ea(e,a,o,t,r,n){const m=F("FSCard");return c(),O(B,null,[e.isExtraSmall?(c(),S(Te,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=p=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):M("",!0),oe(Se("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:_e({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px"})},[h(m,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[h(I,{height:"100%",gap:"0px"},{default:y(()=>[h(b,{align:"center-center",onTouchstart:a[2]||(a[2]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[h($,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),S(I,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[q(e.$slots,"body")]),_:3})):M("",!0)]),_:3})]),_:3})],4),[[te,e.isExtraSmall]]),oe(h(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[h(I,{height:"fill"},{default:y(()=>[q(e.$slots,"body")]),_:3})]),_:3},512),[[te,!e.isExtraSmall]])],64)}const aa=k($e,[["render",ea]]);$e.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const oa="featureGroup",P="map",ta="markerClusterGroup",ke={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1}},emits:["click"],setup(e,{emit:a}){const o=R(P),t=R(ta,g(null)),{getColors:r}=Y(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlng)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));let p=null;e.variant==="gps"?p=f.divIcon({html:je(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?p=f.divIcon({html:Ue(e.icon,r(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):p=f.divIcon({html:Ke(r(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),n.value=f.marker(e.latlng,{icon:p}),n.value.on("click",u=>{a("click",u)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value)};z(m),V(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function na(e,a,o,t,r,n){return q(e.$slots,"default")}const ra=k(ke,[["render",na]]);ke.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Ce={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=R(P),o=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const t=()=>{!e.layer||!a.value||(o&&a.value.removeLayer(o),e.layer.addTo(a.value))};z(t),V(()=>e.layer,t)}};function la(e,a,o,t,r,n){return q(e.$slots,"default")}const sa=k(Ce,[["render",la]]);Ce.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Ie={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=R(P);let t=!1;if(!o)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=g(new f.FeatureGroup);Q("featureGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function ia(e,a,o,t,r,n){return q(e.$slots,"default")}const ua=k(Ie,[["render",ia]]);Ie.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const qe={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const o=R(P);let t=!1;if(!o)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=g(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(n){return f.divIcon({html:He(n.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));Q("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function da(e,a,o,t,r,n){return q(e.$slots,"default")}const pa=k(qe,[["render",da]]);qe.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const Ve={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const o=R(P),t=R(oa,g(null)),{getColors:r}=Y(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlngs)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));const p=r(e.color).base;n.value=f.polygon(e.latlngs.map(u=>[u.lat,u.lng]),{color:p,fillColor:p+"50",fillOpacity:.5,className:"fs-map-area"}),n.value.on("click",u=>{a("click",u)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value)};z(m),V(()=>[e.color,e.latlngs],m)}};function ma(e,a,o,t,r,n){return q(e.$slots,"default")}const ca=k(Ve,[["render",ma]]);Ve.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ne={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const Re=_({name:"FSMap",components:{FSMapMarker:ra,FSMapTileLayer:sa,FSMapFeatureGroup:ua,FSMapMarkerClusterGroup:pa,FSMapPolygon:ca,FSMapLayerButton:Xe,FSMapOverlay:aa,FSButton:$,FSCard:Le,FSCol:I},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:o}=De(),{getColors:t}=Y(),{isExtraSmall:r}=Me(),n=g(),m=g(),p=g(),u=g(null),i=g(null),G=g(),Z=g();Q("map",i);const w=16,T=new ResizeObserver(()=>{i.value&&i.value.invalidateSize()}),E=[{name:"map",label:o("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ne.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:o("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ne.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],l=A(()=>e.overlayMode!=="expand"&&G.value&&r.value?G.value:0),L=A(()=>Z.value&&!r.value?Z.value:0),Ae=A(()=>({"--fs-map-location-pin-color":t(D.Primary).base,"--fs-map-mylocation-pin-color":t(D.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(D.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${l.value}px`})),Oe=A(()=>{var d;return((d=E.find(s=>s.name===e.currentLayer))==null?void 0:d.layer)??E[0].layer}),Be=A(()=>{if(!m.value&&!p.value)return null;let d=m.value;return d&&p.value?d.extend(p.value):p.value&&(d=p.value),d}),J=(d,s)=>{if(!i.value)return d;s=s??i.value.getZoom();const v=i.value.project(d,s).subtract([L.value/2,-l.value/2]);return i.value.unproject(v,s)},X=(d,s,v=w,C)=>{i.value&&i.value.flyTo(J(f.latLng(d,s),v),v,C)},ee=(d,s,v)=>{i.value&&i.value.setView(J(f.latLng(d,s)),v)},ae=(d,s)=>{if(!i.value)return;let v=1;L.value?v=L.value/i.value.getSize().x:l.value&&(v=l.value/i.value.getSize().y),v>.5&&(v=.5);const C=d.pad(v);i.value.fitBounds(C,s)};return z(()=>{if(!n.value)return;const d={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};i.value=ze(f.map(n.value,d)),ee(e.center[0],e.center[1],w),i.value.on("click",s=>{a("click:latlng",s.latlng)}),i.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(i.value),i.value.on("locationfound",s=>{s.latlng&&(u.value=s.latlng,i.value&&X(s.latlng.lat,s.latlng.lng))}),T.observe(n.value)}),he(()=>{T.disconnect()}),V(()=>e.center,d=>{i.value&&ee(d[0],d[1],w)}),V(()=>e.selectedLocationId,d=>{if(!i.value)return;const s=e.locations.find(v=>v.id===d);s&&X(s==null?void 0:s.address.latitude,s==null?void 0:s.address.longitude,w,{animate:!1})},{immediate:!0}),V(()=>e.selectedAreaId,d=>{if(!i.value)return;const s=e.areas.find(C=>C.id===d);if(!s)return;const v=f.latLngBounds(s.coordinates.map(C=>f.latLng(C.latitude,C.longitude)));ae(v)},{immediate:!0}),V(()=>Be.value,d=>{!i.value||!d||ae(d,{maxZoom:w})}),{ColorEnum:D,defaultZoom:w,leafletContainer:n,locationGroupBounds:m,overlayHeight:G,overlayWidth:Z,areaGroupBounds:p,map:i,actualLayer:Oe,mapLayers:E,gpsPosition:u,style:Ae}}}),fa={ref:"leafletContainer",class:"fs-leaflet-container"};function ya(e,a,o,t,r,n){const m=F("FSMapTileLayer"),p=F("FSMapMarker"),u=F("FSMapPolygon"),i=F("FSMapFeatureGroup"),G=F("FSMapMarkerClusterGroup"),Z=F("FSMapLayerButton"),w=F("FSCard"),T=F("FSMapOverlay");return c(),S(w,ve({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var E;return[Se("div",fa,[e.map?(c(),O(B,{key:0},[h(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),S(p,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):M("",!0),e.$props.areas?(c(),S(i,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=l=>e.areaGroupBounds=l)},{default:y(()=>[(c(!0),O(B,null,j(e.areas,l=>(c(),S(u,{key:l.id,color:l.color,latlngs:l.coordinates.map(L=>({lat:L.latitude,lng:L.longitude})),onClick:L=>e.$emit("update:selectedAreaId",l.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):M("",!0),e.$props.locations?(c(),S(G,{key:2,"expected-layers":e.$props.locations.length,disableClusteringAtZoom:e.defaultZoom,"onUpdate:bounds":a[1]||(a[1]=l=>e.locationGroupBounds=l)},{default:y(()=>[(c(!0),O(B,null,j(e.$props.locations,l=>(c(),S(p,{selected:l.id===e.$props.selectedLocationId,key:l.id,label:l.label,color:l.color??e.ColorEnum.Primary,icon:l.icon??"mdi-map-marker",latlng:{lat:l.address.latitude,lng:l.address.longitude},onClick:L=>e.$emit("update:selectedLocationId",l.id)},null,8,["selected","label","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers","disableClusteringAtZoom"])):M("",!0)],64)):M("",!0)],512),(E=e.$props.allowedLayers)!=null&&E.length&&e.$props.allowedLayers.length>1?(c(),S(Z,{key:0,layers:e.mapLayers.filter(l=>{var L;return((L=e.$props.allowedLayers)==null?void 0:L.includes(l.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:currentLayer",l))},null,8,["layers","modelValue"])):M("",!0),e.map?(c(),S(I,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),S($,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):M("",!0),e.$props.showZoomButtons?(c(),S(w,{key:1,elevation:!0},{default:y(()=>[h(I,{gap:"0"},{default:y(()=>[h($,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),h($,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):M("",!0)]),_:1})):M("",!0),e.$slots.overlay?(c(),S(T,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=l=>e.$emit("update:overlayMode",l)),"onUpdate:height":a[7]||(a[7]=l=>e.overlayHeight=l),"onUpdate:width":a[8]||(a[8]=l=>e.overlayWidth=l)},{body:y(()=>[q(e.$slots,"overlay")]),_:3},8,["mode"])):M("",!0)]}),_:3},16,["width","height","style"])}const N=k(Re,[["render",ya]]);Re.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const Fo={title:"Foundation/Shared/Map",component:N,tags:["autodocs"]},K={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},Ee={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},ga={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},va={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},ha={id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}},Sa={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},x={args:{locations:[K],selectedLocationId:K.id,overlayMode:"collapse",currentLayer:"map",height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>_({components:{FSMap:N,FSRow:b},inheritAttrs:!1,setup(){return{args:e}},template:`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template v-slot:overlay>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      `})},W={args:{locations:[Ee,ga,va,ha],selectedLocationId:null,overlayMode:"half",currentLayer:"imagery"},render:e=>({components:{FSMap:N,FSFadeOut:xe,FSRow:b,FSCol:I},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow
            padding="8px"
          >
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
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
    `})},U={args:{locations:[K,Ee],areas:[Sa],selectedLocationId:null,selectedAreaId:null,overlayMode:"collapse",currentLayer:"map"},render:e=>({components:{FSMap:N,FSRow:b},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
      </FSMap>
    `})},H={args:{showDialog:!1},render:e=>({components:{FSMap:N,FSDialogMultiForm:We,FSButton:$},setup(){return{args:e}},template:`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    `})};var re,le,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    locations: [location1],
    selectedLocationId: location1.id,
    overlayMode: 'collapse',
    currentLayer: 'map',
    height: '100%',
    width: '100%',
    grayscale: false,
    showMyLocation: true,
    showZoomButtons: true,
    enableScrollWheelZoom: true
  },
  render: args => defineComponent({
    components: {
      FSMap,
      FSRow
    },
    inheritAttrs: false,
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template v-slot:overlay>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      \`
  })
}`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,ue,de;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    locations: [location2, location3, location4, location5],
    selectedLocationId: null,
    overlayMode: 'half',
    currentLayer: 'imagery'
  },
  render: args => ({
    components: {
      FSMap,
      FSFadeOut,
      FSRow,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow
            padding="8px"
          >
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
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
    \`
  })
}`,...(de=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ce;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    locations: [location1, location2],
    areas: [area1],
    selectedLocationId: null,
    selectedAreaId: null,
    overlayMode: 'collapse',
    currentLayer: 'map'
  },
  render: args => ({
    components: {
      FSMap,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
      </FSMap>
    \`
  })
}`,...(ce=(me=U.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var fe,ye,ge;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    showDialog: false
  },
  render: args => ({
    components: {
      FSMap,
      FSDialogMultiForm,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    \`
  })
}`,...(ge=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};const Lo=["SingleLocationMap","MultiLocationMap","AreaMap","MapInDialog"];export{U as AreaMap,H as MapInDialog,W as MultiLocationMap,x as SingleLocationMap,Lo as __namedExportsOrder,Fo as default};
