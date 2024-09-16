import{d as _,c as v,y as u,z as p,A as g,B as r,L as t,E as b,G as h,D as $,t as E,X as oe,a2 as ie,m as w,I as L,b as U,H as M,C as D,N as se,F as N}from"./vue.esm-bundler-BSyvBTC9.js";import{a as j,b as le,F as ue}from"./FSStatusesCarousel-BntSfOUI.js";import{F as T}from"./FSButton-CyN0itWL.js";import{F as z}from"./FSCard-Dakm4bPu.js";import{F as G}from"./FSChip-Cu5YGhb-.js";import{F as x}from"./FSText-DyldgdXP.js";import{_ as A}from"./FSSpan-CCGpb4KF.js";import{F as S}from"./FSCol-DZA6pxA1.js";import{F as y}from"./FSRow-CA1vgNXx.js";import{u as X}from"./useTranslations-CdSqQFV3.js";import{u as Y}from"./useDateFormat-CNSspUCn.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VMenu-BVgNprPc.js";import{C as F}from"./useColors-DlnF7i6T.js";import{C as V,A as l}from"./alerts-pw2xvgtT.js";import{m as de,g as ce,c as me,b as fe,a as pe}from"./color-BygXFKwQ.js";import{I as ve,V as ge}from"./VIcon-BIpY_noq.js";import{u as Se}from"./locale-C-s_GJlL.js";import{a as ye,b as Ce}from"./loader-pPiux2KM.js";import{m as Fe,u as be}from"./rounded-Dg8mz8II.js";import{a as he}from"./tag-DB5D_XjQ.js";import{p as $e,s as Ae,M as _e,V as qe}from"./theme-D4rXHj3O.js";import{m as Ie,M as we}from"./transition-CNA6wh-m.js";import{F as ke}from"./FSDivider-DQ-5tMcN.js";import{F as Ve}from"./FSImage-IM8kgYGK.js";import{F as Te}from"./FSTile-ClEhpyRn.js";import{u as De}from"./css-DLfrm0pR.js";var I=(e=>(e[e.None=0]="None",e[e.Connected=1]="Connected",e[e.PartiallyConnected=2]="PartiallyConnected",e[e.AlmostOffline=3]="AlmostOffline",e[e.Offline=4]="Offline",e))(I||{});const{$tr:k}=X(),Ne=e=>{switch(e){case I.Connected:return k("ui.connectivity-status.connected","Connected");case I.PartiallyConnected:return k("ui.connectivity-status.partially-connected","Partially connected");case I.AlmostOffline:return k("ui.connectivity-status.almost-offline","Almost offline");default:return k("ui.connectivity-status.offline","Offline")}},J=_({name:"FSWorstAlertCard",components:{FSButton:T,FSCard:z,FSChip:G,FSText:x,FSSpan:A,FSCol:S,FSRow:y},props:{deviceAlert:{type:Object,required:!0}},emits:["close"],setup(e){const{epochToLongTimeFormat:n}=Y(),{$tr:o}=X(),c=v(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.criticity){case V.Error:return F.Error;case V.Warning:return F.Warning;default:return F.Primary}}),m=v(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.status){case l.Pending:return"mdi-timer-outline";case l.Untriggered:return"mdi-timer-off-outline";case l.Unresolved:return"mdi-alert-circle-outline";case l.Resolved:return"mdi-check-circle-outline";case l.Expired:return"mdi-clock-outline";case l.Triggered:return"mdi-alert-circle-outline";case l.Abandoned:return"mdi-cancel";default:return""}}),d=v(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.status){case l.Pending:return o("ui.alert-status.pending","Pending");case l.Untriggered:return o("ui.alert-status.untriggered","Untriggered");case l.Unresolved:return o("ui.alert-status.unresolved","Unresolved");case l.Resolved:return o("ui.alert-status.resolved","Resolved");case l.Expired:return o("ui.alert-status.expired","Expired");case l.Triggered:return o("ui.alert-status.triggered","Triggered");case l.Abandoned:return o("ui.alert-status.abandoned","Abandoned");default:return""}});return{deviceTimestamp:v(()=>e.deviceAlert.sourceTimestamp?n(e.deviceAlert.sourceTimestamp):""),criticityColor:c,statusLabel:d,statusIcon:m}}});function We(e,n,o,c,m,d){const f=u("FSChip"),s=u("FSText"),a=u("FSCard");return p(),g(a,{padding:"2px 2px 8px 2px",elevation:!0,border:!1},{default:r(()=>[t(S,{align:"center-center"},{default:r(()=>[t(S,{align:"center-center",gap:"0px"},{default:r(()=>[t(y,{align:"center-right"},{default:r(()=>[t(T,{icon:"mdi-close",variant:"icon",onClick:n[0]||(n[0]=i=>e.$emit("close"))})]),_:1}),t(S,{align:"center-center",padding:"0px 24px",gap:"12px"},{default:r(()=>[t(f,{label:e.$props.deviceAlert.label,prependIcon:e.statusIcon,color:e.criticityColor},null,8,["label","prependIcon","color"]),t(y,{width:"hug"},{default:r(()=>[t(s,null,{default:r(()=>[b(h(e.statusLabel),1)]),_:1})]),_:1})]),_:1})]),_:1}),e.deviceTimestamp?(p(),g(y,{key:0,padding:"0px 24px",width:"hug"},{default:r(()=>[t(A,{font:"text-overline"},{default:r(()=>[b(h(e.deviceTimestamp),1)]),_:1})]),_:1})):$("",!0)]),_:1})]),_:1})}const Be=q(J,[["render",We]]);J.__docgenInfo={displayName:"FSWorstAlertCard",exportName:"default",description:"",tags:{},props:[{name:"deviceAlert",type:{name:"FSDeviceAlert"},required:!0}],events:[{name:"close"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSWorstAlertCard.vue"]};const K=_({name:"FSBadge",props:{content:{type:String,required:!1,default:null},color:{type:String,required:!1,default:F.Primary}}}),Oe=$e({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:ve,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...de(),...ye({location:"top end"}),...Fe(),...he(),...Ae(),...Ie({transition:"scale-rotate-transition"})},"VBadge"),Pe=ce()({name:"VBadge",inheritAttrs:!1,props:Oe(),setup(e,n){const{backgroundColorClasses:o,backgroundColorStyles:c}=me(E(e,"color")),{roundedClasses:m}=be(e),{t:d}=Se(),{textColorClasses:f,textColorStyles:s}=fe(E(e,"textColor")),{themeClasses:a}=_e(),{locationStyles:i}=Ce(e,!0,C=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(C)?+(e.offsetY??0):["left","right"].includes(C)?+(e.offsetX??0):0));return pe(()=>{const C=Number(e.content),W=!e.max||isNaN(C)?e.content:C<=+e.max?C:`${e.max}+`,[re,ae]=qe(n.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,w({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},ae,{style:e.style}),{default:()=>{var B,O;return[t("div",{class:"v-badge__wrapper"},[(O=(B=n.slots).default)==null?void 0:O.call(B),t(we,{transition:e.transition},{default:()=>{var P,R;return[oe(t("span",w({class:["v-badge__badge",a.value,o.value,m.value,f.value],style:[c.value,s.value,e.inline?{}:i.value],"aria-atomic":"true","aria-label":d(e.label,C),"aria-live":"polite",role:"status"},re),[e.dot?void 0:n.slots.badge?(R=(P=n.slots).badge)==null?void 0:R.call(P):e.icon?t(ge,{icon:e.icon},null):W]),[[ie,e.modelValue]])]}})])]}})}),{}}});function Re(e,n,o,c,m,d){return e.$props.content?(p(),g(Pe,{key:0,content:e.$props.content,color:e.$props.color,bordered:!0},{default:r(()=>[L(e.$slots,"default")]),_:3},8,["content","color"])):L(e.$slots,"default",{key:1})}const Ee=q(K,[["render",Re]]);K.__docgenInfo={displayName:"FSBadge",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBadge.vue"]};const Q=_({name:"FSWorstAlert",components:{FSWorstAlertCard:Be,FSColorIcon:j,FSBadge:Ee},props:{deviceAlert:{type:Object,required:!0},deviceAlerts:{type:Number,required:!1,default:0}},setup(e){const n=U(!1),o=v(()=>{var d;switch((d=e.deviceAlert)==null?void 0:d.criticity){case V.Error:return F.Error;case V.Warning:return F.Warning;default:return F.Primary}}),c=v(()=>{var d;switch((d=e.deviceAlert)==null?void 0:d.status){case l.Pending:return"mdi-timer-outline";case l.Untriggered:return"mdi-timer-off-outline";case l.Unresolved:return"mdi-alert-circle-outline";case l.Resolved:return"mdi-check-circle-outline";case l.Expired:return"mdi-clock-outline";case l.Triggered:return"mdi-alert-circle-outline";case l.Abandoned:return"mdi-cancel";default:return""}}),m=v(()=>e.deviceAlerts<1?null:e.deviceAlerts>9?"9+":e.deviceAlerts.toString());return{criticityColor:o,statusIcon:c,badgeLabel:m,menu:n}}});function Le(e,n,o,c,m,d){const f=u("FSColorIcon"),s=u("FSBadge"),a=u("FSWorstAlertCard");return p(),g(H,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":n[2]||(n[2]=i=>e.menu=i)},{activator:r(({props:i})=>[t(s,{content:e.badgeLabel,color:e.criticityColor},{default:r(()=>[t(f,w({class:"fs-stopclick",size:"m",color:e.criticityColor,onClick:n[0]||(n[0]=M(()=>{},["prevent","stop"]))},i),{default:r(()=>[b(h(e.statusIcon),1)]),_:2},1040,["color"])]),_:2},1032,["content","color"])]),default:r(()=>[t(a,{deviceAlert:e.deviceAlert,onClose:n[1]||(n[1]=i=>e.menu=!1)},null,8,["deviceAlert"])]),_:1},8,["modelValue"])}const Ue=q(Q,[["render",Le]]);Q.__docgenInfo={displayName:"FSWorstAlert",exportName:"default",description:"",tags:{},props:[{name:"deviceAlert",type:{name:"FSDeviceAlert"},required:!0},{name:"deviceAlerts",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSWorstAlert.vue"]};const Z=_({name:"FSConnectivityCard",components:{FSButton:T,FSCard:z,FSChip:G,FSText:x,FSSpan:A,FSCol:S,FSRow:y},props:{deviceConnectivity:{type:Object,required:!0}},emit:["close"],setup(e){const{epochToLongTimeFormat:n}=Y();return{deviceTimestamp:v(()=>e.deviceConnectivity.sourceTimestamp?n(e.deviceConnectivity.sourceTimestamp):""),connectivityLabel:Ne}}});function Me(e,n,o,c,m,d){const f=u("FSChip"),s=u("FSText"),a=u("FSCard");return p(),g(a,{padding:"2px 2px 8px 2px",elevation:!0,border:!1},{default:r(()=>[t(S,{align:"center-center"},{default:r(()=>[t(S,{align:"center-center",gap:"0px"},{default:r(()=>[t(y,{align:"center-right"},{default:r(()=>[t(T,{icon:"mdi-close",variant:"icon",onClick:n[0]||(n[0]=i=>e.$emit("close"))})]),_:1}),t(S,{align:"center-center",padding:"0px 24px",gap:"12px"},{default:r(()=>[t(f,{prependIcon:e.$props.deviceConnectivity.icon,color:e.$props.deviceConnectivity.color,label:e.connectivityLabel(e.$props.deviceConnectivity.status)},null,8,["prependIcon","color","label"]),t(y,{width:"hug"},{default:r(()=>[t(s,null,{default:r(()=>[b(h(e.$tr("ui.shared.device-connectivity.last-message","Last message")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e.deviceTimestamp?(p(),g(y,{key:0,padding:"0px 24px",width:"hug"},{default:r(()=>[t(A,{font:"text-overline"},{default:r(()=>[b(h(e.deviceTimestamp),1)]),_:1})]),_:1})):$("",!0)]),_:1})]),_:1})}const je=q(Z,[["render",Me]]);Z.__docgenInfo={displayName:"FSConnectivityCard",exportName:"default",description:"",tags:{},props:[{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!0}],events:[{name:"close"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSConnectivityCard.vue"]};const ee=_({name:"FSConnectivity",components:{FSConnectivityCard:je,FSColorIcon:j},props:{deviceConnectivity:{type:Object,required:!0}},setup(){return{menu:U(!1)}}});function ze(e,n,o,c,m,d){const f=u("FSColorIcon"),s=u("FSConnectivityCard");return p(),g(H,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":n[2]||(n[2]=a=>e.menu=a)},{activator:r(({props:a})=>[t(f,w({class:"fs-stopclick",size:"m",color:e.$props.deviceConnectivity.color,onClick:n[0]||(n[0]=M(()=>{},["prevent","stop"]))},a),{default:r(()=>[b(h(e.$props.deviceConnectivity.icon),1)]),_:2},1040,["color"])]),default:r(()=>[t(s,{deviceConnectivity:e.$props.deviceConnectivity,onClose:n[1]||(n[1]=a=>e.menu=!1)},null,8,["deviceConnectivity"])]),_:1},8,["modelValue"])}const Ge=q(ee,[["render",ze]]);ee.__docgenInfo={displayName:"FSConnectivity",exportName:"default",description:"",tags:{},props:[{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSConnectivity.vue"]};const te=_({name:"FSStatusesRow",components:{FSConnectivity:Ge,FSWorstAlert:Ue,FSStatus:le,FSRow:y},props:{deviceConnectivity:{type:Object,required:!1,default:null},deviceWorstAlert:{type:Object,required:!1,default:null},deviceAlerts:{type:Array,required:!1,default:()=>[]},modelStatuses:{type:Array,required:!0},deviceStatuses:{type:Array,required:!0}},setup(e){return{ConnectivityStatus:I,deviceStatus:o=>{const c=e.deviceStatuses.find(m=>m.modelStatusId===o.id);return c!=null?c.statusGroups[0]:o.showDefault?{label:o.label,icon:o.iconDefault,color:o.colorDefault}:null}}}});function xe(e,n,o,c,m,d){const f=u("FSConnectivity"),s=u("FSWorstAlert"),a=u("FSStatus");return p(),g(y,{align:"center-left",gap:"4px",wrap:!1},{default:r(()=>[e.$props.deviceConnectivity&&e.$props.deviceConnectivity.status!=e.ConnectivityStatus.None?(p(),g(f,{key:0,deviceConnectivity:e.$props.deviceConnectivity},null,8,["deviceConnectivity"])):$("",!0),e.$props.deviceWorstAlert?(p(),g(s,{key:1,deviceAlerts:e.$props.deviceAlerts.length,deviceAlert:e.$props.deviceWorstAlert},null,8,["deviceAlerts","deviceAlert"])):$("",!0),(p(!0),D(N,null,se(e.$props.modelStatuses,(i,C)=>(p(),D(N,null,[e.deviceStatus(i)?(p(),g(a,{statusGroup:e.deviceStatus(i),modelStatus:i,key:C},null,8,["statusGroup","modelStatus"])):$("",!0)],64))),256))]),_:1})}const Xe=q(te,[["render",xe]]);te.__docgenInfo={displayName:"FSStatusesRow",exportName:"default",description:"",tags:{},props:[{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceWorstAlert",type:{name:"FSDeviceAlert"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceAlerts",type:{name:"FSDeviceAlert[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusesRow.vue"]};const ne=_({name:"FSDeviceOrganisationTileUI",components:{FSStatusesCarousel:ue,FSStatusesRow:Xe,FSDivider:ke,FSImage:Ve,FSSpan:A,FSTile:Te,FSCol:S,FSRow:y},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},deviceConnectivity:{type:Object,required:!1,default:null},deviceWorstAlert:{type:Object,required:!1,default:null},deviceAlerts:{type:Array,required:!1,default:()=>[]},modelStatuses:{type:Array,required:!0,default:()=>[]},deviceStatuses:{type:Array,required:!0,default:()=>[]},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:n}=De(),o=v(()=>e.modelStatuses.filter(a=>!(a.groupById!=null||!a.showDefault&&!e.deviceStatuses.some(i=>i.modelStatusId===a.id))).slice(0,5).sort((a,i)=>a.index-i.index)),c=v(()=>e.deviceStatuses.filter(a=>o.value.some(i=>i.id===a.modelStatusId))),m=v(()=>e.modelStatuses.filter(a=>!(a.groupById==null||!a.showDefault&&!e.deviceStatuses.some(i=>i.modelStatusId===a.id))).sort((a,i)=>a.index-i.index)),d=v(()=>e.deviceStatuses.filter(a=>m.value.some(i=>i.id===a.modelStatusId))),f=v(()=>n.value?90:100),s=v(()=>e.imageId?`calc(100% - ${f.value}px - 24px)`:"100%");return{carouselDeviceStatuses:d,carouselModelStatuses:m,singleDeviceStatuses:c,singleModelStatuses:o,ColorEnum:F,imageSize:f,infoWidth:s}}});function Ye(e,n,o,c,m,d){const f=u("FSStatusesRow"),s=u("FSImage"),a=u("FSDivider"),i=u("FSStatusesCarousel"),C=u("FSTile");return p(),g(C,w({activeColor:e.ColorEnum.Primary,bottomColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(S,{align:"center-center",width:"fill"},{default:r(()=>[t(y,{align:"center-center",gap:"24px",height:e.imageSize,wrap:!1},{default:r(()=>[t(S,{gap:"12px",width:e.infoWidth},{default:r(()=>[t(S,{gap:"6px"},{default:r(()=>[t(A,{font:"text-button",lineClamp:2},{default:r(()=>[b(h(e.$props.label),1)]),_:1}),t(A,{font:"text-overline",variant:"soft"},{default:r(()=>[b(h(e.$props.code),1)]),_:1})]),_:1}),t(f,{deviceConnectivity:e.$props.deviceConnectivity,deviceWorstAlert:e.$props.deviceWorstAlert,deviceStatuses:e.singleDeviceStatuses,modelStatuses:e.singleModelStatuses,deviceAlerts:e.$props.deviceAlerts},null,8,["deviceConnectivity","deviceWorstAlert","deviceStatuses","modelStatuses","deviceAlerts"])]),_:1},8,["width"]),e.$props.imageId?(p(),g(s,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):$("",!0)]),_:1},8,["height"]),e.carouselModelStatuses.length?(p(),D(N,{key:0},[t(a),t(i,{modelStatuses:e.carouselModelStatuses,deviceStatuses:e.carouselDeviceStatuses},null,8,["modelStatuses","deviceStatuses"])],64)):$("",!0)]),_:1})]),_:1},16,["activeColor","bottomColor","editable","width","modelValue"])}const ht=q(ne,[["render",Ye]]);ne.__docgenInfo={displayName:"FSDeviceOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceWorstAlert",type:{name:"FSDeviceAlert"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceAlerts",type:{name:"FSDeviceAlert[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue"]};export{I as C,ht as F,Ge as a,Ue as b};
