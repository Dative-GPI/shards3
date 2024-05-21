import{j as C,e as u,I as p,J as o,K as t,L as s,B as r,R as h,A as y,N as n,a0 as g,M as b,Q as k}from"./vue.esm-bundler-7c237656.js";import{F as S}from"./FSClickable-e8caff35.js";import{F as d}from"./FSCheckbox-da06ce33.js";import{F}from"./FSCard-c7069f2a.js";import{u as v}from"./css-aa928277.js";import{u as q}from"./useColors-0c4b5dc8.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const V=C({name:"FSTile",components:{FSClickable:S,FSCheckbox:d,FSCard:F},props:{to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},bottomColor:{type:[Array,String],required:!1,default:null},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:l}=v(),{getGradients:i}=q(),f=u(()=>e.bottomColor?{"--fs-tile-border-color":i(e.bottomColor).base}:{}),m=u(()=>l.value?336:352);return{height:u(()=>l.value?156:170),width:m,style:f}}});function w(e,l,i,f,m,$){const a=p("FSCard"),c=p("FSClickable");return e.$props.href||e.$props.to||e.$attrs.onClick?(o(),t(c,r({key:0,variant:"background",class:"fs-tile",padding:"12px",height:e.height,width:e.width,style:e.style,href:e.$props.href,to:e.$props.to},e.$attrs),{default:s(()=>[h(e.$slots,"default"),e.$props.editable?(o(),t(a,r({key:0,class:"fs-tile-checkbox",border:!1},e.$attrs),{default:s(()=>[y(d,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1},16)):n("",!0),g("div",{class:"fs-tile-bottom",style:b(e.style)},null,4)]),_:3},16,["height","width","style","href","to"])):(o(),t(a,r({key:1,class:"fs-tile",padding:"12px",style:e.style,width:e.width,height:e.height},e.$attrs),{default:s(()=>[h(e.$slots,"default"),e.$props.editable?(o(),t(a,r({key:0,class:"fs-tile-checkbox",border:!1},e.$attrs),{default:s(()=>[y(d,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[1]||(l[1]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1},16)):n("",!0),e.$props.bottomColor?(o(),k("div",{key:1,class:"fs-tile-bottom",style:b(e.style)},null,4)):n("",!0)]),_:3},16,["style","width","height"]))}const M=B(V,[["render",w]]);V.__docgenInfo={displayName:"FSTile",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"bottomColor",type:{name:"ColorBase[] | ColorBase | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSTile.vue"]};export{M as F};
