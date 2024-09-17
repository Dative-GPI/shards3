import{d as $,c,y as p,z as r,A as s,B as o,L as l,I as k,E as S,G as n,D as f,b as N,m as q,H as I}from"./vue.esm-bundler-BSyvBTC9.js";import{F as _}from"./FSCard-CiUY3jF9.js";import{F as T}from"./FSChip-CtfQSu86.js";import{F as w}from"./FSText-BN3VvfV9.js";import{F as g}from"./FSCol-DZA6pxA1.js";import{u as B}from"./useDateFormat-CNSspUCn.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSColor-C7pBGL-O.js";import{F as b}from"./FSIcon-rAhoF0bo.js";import{F as G}from"./FSRow-CA1vgNXx.js";import{C as O}from"./useColors-Ccf8xVyg.js";import{u as L,s as C}from"./css-DLfrm0pR.js";import{V as M}from"./VMenu-BVgNprPc.js";const h=$({name:"FSColorIcon",components:{FSColor:D,FSIcon:b,FSRow:G},props:{size:{type:[Array,String,Number],required:!1,default:"m"},color:{type:String,required:!1,default:O.Dark},padding:{type:[String,Number],required:!1,default:"0px"}},setup(e){const{isMobileSized:t}=L(),a=c(()=>{switch(e.size){case"s":return t.value?"18px":"20px";case"m":return t.value?"20px":"26px";case"l":return t.value?"36px":"40px";default:return e.size}});return{iconSize:c(()=>e.padding?`calc(${C(a.value)} - ${C(e.padding)})`:a.value),size:a}}});function j(e,t,a,i,F,y){const d=p("FSColor");return r(),s(d,{class:"fs-color-icon",color:e.$props.color,border:!1,height:e.size,width:e.size},{default:o(()=>[l(G,{align:"center-center"},{default:o(()=>[l(b,{color:e.$props.color,size:e.iconSize},{default:o(()=>[k(e.$slots,"default")]),_:3},8,["color","size"])]),_:3})]),_:3},8,["color","height","width"])}const A=v(h,[["render",j]]);h.__docgenInfo={displayName:"FSColorIcon",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"padding",type:{name:"string | number"},required:!1,defaultValue:{func:!1,value:'"0px"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColorIcon.vue"]};const z=$({name:"FSStatusCard",components:{FSCard:_,FSChip:T,FSText:w,FSCol:g},props:{closable:{type:Boolean,default:!0},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},emits:["close"],setup(e){const{epochToLongTimeFormat:t}=B(),a=c(()=>e.statusGroup.label||e.modelStatus.label),i=c(()=>e.statusGroup.value&&!isNaN(parseFloat(e.statusGroup.value))?parseFloat(e.statusGroup.value).toLocaleString("fullwide",{maximumFractionDigits:2}):e.statusGroup.value||"");return{deviceTimestamp:c(()=>e.statusGroup.sourceTimestamp?t(e.statusGroup.sourceTimestamp):""),statusLabel:a,statusValue:i}}});function E(e,t,a,i,F,y){const d=p("FSChip"),m=p("FSText"),u=p("FSCard");return r(),s(u,{padding:"12px 24px",elevation:!0},{default:o(()=>[l(g,{align:"center-center",gap:"12px"},{default:o(()=>[l(d,{prependIcon:e.$props.statusGroup.icon,color:e.$props.statusGroup.color,label:e.statusLabel},null,8,["prependIcon","color","label"]),e.$props.statusGroup.value?(r(),s(g,{key:0,align:"center-center",gap:"0px"},{default:o(()=>[e.$props.statusGroup.value&&e.$props.modelStatus.groupById&&e.$props.statusGroup.groupByValue?(r(),s(m,{key:0},{default:o(()=>[S(n(e.$props.modelStatus.groupByLabel)+" "+n(e.$props.statusGroup.groupByValue),1)]),_:1})):f("",!0),e.$props.statusGroup.value?(r(),s(m,{key:1,font:"text-button",color:e.$props.statusGroup.color},{default:o(()=>[S(n(e.statusValue)+" "+n(e.$props.statusGroup.unit),1)]),_:1},8,["color"])):f("",!0)]),_:1})):f("",!0),e.deviceTimestamp?(r(),s(m,{key:1,font:"text-overline",variant:"soft"},{default:o(()=>[S(n(e.deviceTimestamp),1)]),_:1})):f("",!0)]),_:1})]),_:1})}const H=v(z,[["render",E]]);z.__docgenInfo={displayName:"FSStatusCard",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],events:[{name:"close"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusCard.vue"]};const V=$({name:"FSStatus",components:{FSStatusCard:H,FSColorIcon:A},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0},size:{type:[Array,String,Number],default:"m"},padding:{type:[String,Number],default:"8px"}},setup(){return{menu:N(!1)}}});function P(e,t,a,i,F,y){const d=p("FSColorIcon"),m=p("FSStatusCard");return r(),s(M,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":t[2]||(t[2]=u=>e.menu=u),location:"bottom center"},{activator:o(({props:u})=>[l(d,q({class:"fs-stopclick",size:e.$props.size,color:e.$props.statusGroup.color,padding:e.$props.padding,onClick:t[0]||(t[0]=I(()=>{},["prevent","stop"]))},u),{default:o(()=>[S(n(e.$props.statusGroup.icon),1)]),_:2},1040,["size","color","padding"])]),default:o(()=>[l(m,{modelStatus:e.$props.modelStatus,statusGroup:e.$props.statusGroup,onClose:t[1]||(t[1]=u=>e.menu=!1)},null,8,["modelStatus","statusGroup"])]),_:1},8,["modelValue"])}const ae=v(V,[["render",P]]);V.__docgenInfo={displayName:"FSStatus",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0},{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},defaultValue:{func:!1,value:'"m"'}},{name:"padding",type:{name:"string | number"},defaultValue:{func:!1,value:'"8px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatus.vue"]};export{ae as F,A as a};
