import{f as E,g as b,j as M,D as z,E as u,H as F,M as y,U as m,V as C,A as $,F as v,I as p,W as S,G as h,S as P,R as w,N as V,O as q}from"./vue.esm-bundler-838daa40.js";import{F as A}from"./FSCard-f7958fe9.js";import{C as i,u as D}from"./useColors-95e93720.js";import{s as o}from"./css-67cfec15.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as R}from"./VProgressCircular-95e816d7.js";const N=E({name:"FSClickable",components:{FSCard:A},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},type:{type:String,required:!1,default:"button"},color:{type:String,required:!1,default:i.Light},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},borderStyle:{type:String,required:!1,default:"solid"},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:l}){const{getColors:c}=D(),r=b(()=>c(e.color)),g=c(i.Background),s=c(i.Light),n=c(i.Dark),f=M(!1),a=M(!1),t=b(()=>{if(!e.editable)return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":s.light,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":s.dark,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};switch(e.variant){case"standard":switch(e.color){case i.Dark:case i.Light:return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":g.base,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":s.lightContrast,"--fs-clickable-hover-background-color":s.base,"--fs-clickable-hover-border-color":s.dark,"--fs-clickable-hover-color":s.baseContrast,"--fs-clickable-active-background-color":s.dark,"--fs-clickable-active-border-color":s.dark,"--fs-clickable-active-color":s.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};default:return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":r.value.light,"--fs-clickable-border-color":r.value.lightContrast,"--fs-clickable-color":r.value.lightContrast,"--fs-clickable-hover-background-color":r.value.base,"--fs-clickable-hover-border-color":r.value.base,"--fs-clickable-hover-color":r.value.baseContrast,"--fs-clickable-active-background-color":r.value.dark,"--fs-clickable-active-border-color":r.value.darkContrast,"--fs-clickable-active-color":r.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)}}case"background":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":g.base,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":n.base,"--fs-clickable-hover-background-color":r.value.base,"--fs-clickable-hover-border-color":r.value.baseContrast,"--fs-clickable-hover-color":r.value.baseContrast,"--fs-clickable-active-background-color":r.value.dark,"--fs-clickable-active-border-color":r.value.darkContrast,"--fs-clickable-active-color":r.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};case"full":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":r.value.base,"--fs-clickable-border-color":r.value.base,"--fs-clickable-color":r.value.baseContrast,"--fs-clickable-hover-background-color":r.value.base,"--fs-clickable-hover-border-color":r.value.base,"--fs-clickable-hover-color":r.value.baseContrast,"--fs-clickable-active-background-color":r.value.dark,"--fs-clickable-active-border-color":r.value.dark,"--fs-clickable-active-color":r.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)}}}),d=b(()=>{if(a.value)return"darkContrast";if(f.value)return"baseContrast";switch(e.variant){case"standard":return"lightContrast";case"background":return"base";case"full":return"baseContrast"}}),B=b(()=>{const k=["fs-clickable"];return e.editable||k.push("fs-clickable-disabled"),k}),L=b(()=>{switch(e.color){case i.Primary:case i.Success:case i.Warning:case i.Error:return["full"].includes(e.variant)?r.value.light:r.value.dark;default:return["full"].includes(e.variant)?n.light:n.dark}});return{contentVariant:d,loadColor:L,classes:B,active:a,hover:f,style:t,onClick:k=>{!e.to&&!e.href&&e.editable&&!e.load&&l("click",k)}}}}),I=["href"],O=["type"];function W(e,l,c,r,g,s){const n=z("FSCard"),f=z("router-link");return e.$props.href?(u(),F("a",{key:0,href:e.$props.href,style:S(e.style),onMouseover:l[0]||(l[0]=a=>e.hover=!0),onMouseleave:l[1]||(l[1]=a=>e.hover=!1),onMousedown:l[2]||(l[2]=a=>e.active=!0),onMouseup:l[3]||(l[3]=a=>e.active=!1)},[y(n,$({borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,height:e.$props.height,width:e.$props.width,class:e.classes,style:e.style},e.$attrs),m({_:2},[C(e.$slots,(a,t)=>({name:t,fn:h(d=>[w(e.$slots,t,V(q({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","height","width","class","style"]),e.$props.load?(u(),v(R,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):p("",!0)],44,I)):e.$props.to?(u(),v(f,{key:1,style:S(e.style),to:e.$props.to,onMouseover:l[4]||(l[4]=a=>e.hover=!0),onMouseleave:l[5]||(l[5]=a=>e.hover=!1),onMousedown:l[6]||(l[6]=a=>e.active=!0),onMouseup:l[7]||(l[7]=a=>e.active=!1)},{default:h(()=>[y(n,$({borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,height:e.$props.height,width:e.$props.width,class:e.classes,style:e.style},e.$attrs),m({_:2},[C(e.$slots,(a,t)=>({name:t,fn:h(d=>[w(e.$slots,t,V(q({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","height","width","class","style"]),e.$props.load?(u(),v(R,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):p("",!0)]),_:3},8,["style","to"])):(u(),F("button",{key:2,type:e.$props.type,style:S(e.style),onClick:l[8]||(l[8]=P((...a)=>e.onClick&&e.onClick(...a),["stop"])),onMouseover:l[9]||(l[9]=a=>e.hover=!0),onMouseleave:l[10]||(l[10]=a=>e.hover=!1),onMousedown:l[11]||(l[11]=a=>e.active=!0),onMouseup:l[12]||(l[12]=a=>e.active=!1)},[y(n,$({borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,height:e.$props.height,width:e.$props.width,class:e.classes,style:e.style},e.$attrs),m({_:2},[C(e.$slots,(a,t)=>({name:t,fn:h(d=>[w(e.$slots,t,V(q({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","height","width","class","style"]),e.$props.load?(u(),v(R,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):p("",!0)],44,O))}const X=j(N,[["render",W]]);N.__docgenInfo={displayName:"FSClickable",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","background","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"type",values:["button","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"button"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"borderStyle",values:["solid","dashed","dotted","double","groove","ridge","inset","outset","none"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"solid"'}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"name",scoped:!0,bindings:[{name:"contentVariant",title:"binding"},{name:"name",title:"binding"},{name:"v-bind",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClickable.vue"]};export{X as F};
