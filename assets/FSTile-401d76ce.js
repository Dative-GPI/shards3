import{j as g,e as a,J as p,K as t,L as s,M as r,x as k,V as u,R as h,z as y,P as c,W as V}from"./vue.esm-bundler-8d1b7c9b.js";import{F as S}from"./FSClickable-40575f4d.js";import{F as n}from"./FSCheckbox-b3ab5f5c.js";import{F}from"./FSCard-067bcc3b.js";import{C as b,u as v}from"./useColors-fe8562a0.js";import{u as q}from"./css-19c8f0ab.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const C=g({name:"FSTile",components:{FSClickable:S,FSCheckbox:n,FSCard:F},props:{to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},bottomColor:{type:[Array,String],required:!1,default:b.Primary},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:l}=q(),{getGradients:d}=v(),i=a(()=>d(e.bottomColor)),m=a(()=>({"--fs-tile-border-color":i.value.base})),f=a(()=>l.value?336:352),o=a(()=>l.value?156:170);return{ColorEnum:b,style:m,width:f,height:o}}});function B(e,l,d,i,m,f){const o=p("FSCard"),$=p("FSClickable");return e.$props.href||e.$props.to||e.$attrs.onClick?(t(),s($,k({key:0,class:"fs-tile",padding:"12px",height:e.height,width:e.width,style:e.style,href:e.$props.href,to:e.$props.to},e.$attrs),{default:r(()=>[h(e.$slots,"default"),e.$props.editable?(t(),s(o,{key:0,class:"fs-tile-checkbox",border:!1},{default:r(()=>[y(n,{color:e.ColorEnum.Dark,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["color","modelValue"])]),_:1})):c("",!0),V("div",{class:"fs-tile-bottom",style:u(e.style)},null,4)]),_:3},16,["height","width","style","href","to"])):(t(),s(o,{key:1,class:"fs-tile",padding:"12px",style:u(e.style),width:e.width,height:e.height},{default:r(()=>[h(e.$slots,"default"),e.$props.editable?(t(),s(o,{key:0,class:"fs-tile-checkbox",border:!1},{default:r(()=>[y(n,{color:e.ColorEnum.Dark,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[1]||(l[1]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["color","modelValue"])]),_:1})):c("",!0),V("div",{class:"fs-tile-bottom",style:u(e.style)},null,4)]),_:3},8,["style","width","height"]))}const L=w(C,[["render",B]]);C.__docgenInfo={displayName:"FSTile",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"bottomColor",type:{name:"ColorBase[] | ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSTile.vue"]};export{L as F};
