import{d as A,c as b,b as z,y as F,z as u,E as N,N as h,B as y,O as p,m as C,A as v,F as $,P as S,D as q,J as E,C as g,K as w,L as V,M as R}from"./vue.esm-bundler-l-siv0w9.js";import{F as D}from"./FSCard-DL4SLpmS.js";import{C as i,u as O}from"./useColors-Bs2u1_6J.js";import{s as o}from"./css-CP2C2-Fe.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M}from"./VProgressCircular-RI9KLr8_.js";const B=A({name:"FSClickable",components:{FSCard:D},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"0"},class:{type:[String,Array],required:!1,default:null},to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},type:{type:String,required:!1,default:"button"},color:{type:String,required:!1,default:i.Light},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},borderStyle:{type:String,required:!1,default:"solid"},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:a}){const{getColors:c}=O(),l=b(()=>c(e.color)),m=c(i.Background),s=c(i.Light),n=c(i.Dark),f=z(!1),r=z(!1),t=b(()=>{if(!e.editable)return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":s.light,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":s.dark,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};switch(e.variant){case"standard":switch(e.color){case i.Dark:case i.Light:return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":m.base,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":s.lightContrast,"--fs-clickable-hover-background-color":s.base,"--fs-clickable-hover-border-color":s.dark,"--fs-clickable-hover-color":s.baseContrast,"--fs-clickable-active-background-color":s.dark,"--fs-clickable-active-border-color":s.dark,"--fs-clickable-active-color":s.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};default:return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":l.value.light,"--fs-clickable-border-color":l.value.lightContrast,"--fs-clickable-color":l.value.lightContrast,"--fs-clickable-hover-background-color":l.value.base,"--fs-clickable-hover-border-color":l.value.base,"--fs-clickable-hover-color":l.value.baseContrast,"--fs-clickable-active-background-color":l.value.dark,"--fs-clickable-active-border-color":l.value.darkContrast,"--fs-clickable-active-color":l.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)}}case"background":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":m.base,"--fs-clickable-border-color":s.dark,"--fs-clickable-color":n.base,"--fs-clickable-hover-background-color":l.value.base,"--fs-clickable-hover-border-color":l.value.baseContrast,"--fs-clickable-hover-color":l.value.baseContrast,"--fs-clickable-active-background-color":l.value.dark,"--fs-clickable-active-border-color":l.value.darkContrast,"--fs-clickable-active-color":l.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)};case"full":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-style":e.borderStyle,"--fs-clickable-border-radius":o(e.borderRadius),"--fs-clickable-background-color":l.value.base,"--fs-clickable-border-color":l.value.base,"--fs-clickable-color":l.value.baseContrast,"--fs-clickable-hover-background-color":l.value.base,"--fs-clickable-hover-border-color":l.value.base,"--fs-clickable-hover-color":l.value.baseContrast,"--fs-clickable-active-background-color":l.value.dark,"--fs-clickable-active-border-color":l.value.dark,"--fs-clickable-active-color":l.value.darkContrast,"--fs-clickable-height":o(e.height),"--fs-clickable-width":o(e.width)}}}),d=b(()=>{if(r.value)return"darkContrast";if(f.value)return"baseContrast";switch(e.variant){case"standard":return"lightContrast";case"background":return"base";case"full":return"baseContrast"}}),L=b(()=>{const k=["fs-clickable"];return e.editable||k.push("fs-clickable-disabled"),k}),P=b(()=>{switch(e.color){case i.Primary:case i.Success:case i.Warning:case i.Error:return["full"].includes(e.variant)?l.value.light:l.value.dark;default:return["full"].includes(e.variant)?n.soft:n.dark}});return{contentVariant:d,loadColor:P,classes:L,active:r,hover:f,style:t,onClick:k=>{!e.to&&!e.href&&e.editable&&!e.load&&a("click",k)}}}}),I=["href"],J=["type","disabled"];function K(e,a,c,l,m,s){const n=F("FSCard"),f=F("router-link");return e.$props.href?(u(),N("a",{key:0,href:e.$props.href,style:S(e.style),class:q(e.$props.class),onMouseover:a[0]||(a[0]=r=>e.hover=!0),onMouseleave:a[1]||(a[1]=r=>e.hover=!1),onMousedown:a[2]||(a[2]=r=>e.active=!0),onMouseup:a[3]||(a[3]=r=>e.active=!1)},[h(n,C({height:"100%",width:"100%",borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,padding:e.$props.padding,class:e.classes},e.$attrs),y({_:2},[p(e.$slots,(r,t)=>({name:t,fn:g(d=>[w(e.$slots,t,V(R({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","padding","class"]),e.$props.load?(u(),v(M,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):$("",!0)],46,I)):e.$props.to?(u(),v(f,{key:1,style:S(e.style),to:e.$props.to,class:q(e.$props.class),onMouseover:a[4]||(a[4]=r=>e.hover=!0),onMouseleave:a[5]||(a[5]=r=>e.hover=!1),onMousedown:a[6]||(a[6]=r=>e.active=!0),onMouseup:a[7]||(a[7]=r=>e.active=!1)},{default:g(()=>[h(n,C({height:"100%",width:"100%",borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,padding:e.$props.padding,class:e.classes},e.$attrs),y({_:2},[p(e.$slots,(r,t)=>({name:t,fn:g(d=>[w(e.$slots,t,V(R({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","padding","class"]),e.$props.load?(u(),v(M,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):$("",!0)]),_:3},8,["style","to","class"])):(u(),N("button",{key:2,type:e.$props.type,style:S(e.style),class:q(e.$props.class),disabled:e.$props.load||!e.$props.editable,onClick:a[8]||(a[8]=E((...r)=>e.onClick&&e.onClick(...r),["stop"])),onMouseover:a[9]||(a[9]=r=>e.hover=!0),onMouseleave:a[10]||(a[10]=r=>e.hover=!1),onMousedown:a[11]||(a[11]=r=>e.active=!0),onMouseup:a[12]||(a[12]=r=>e.active=!1)},[h(n,C({height:"100%",width:"100%",borderRadius:e.$props.borderRadius,borderStyle:e.$props.borderStyle,padding:e.$props.padding,class:e.classes},e.$attrs),y({_:2},[p(e.$slots,(r,t)=>({name:t,fn:g(d=>[w(e.$slots,t,V(R({...d,contentVariant:e.contentVariant})))])}))]),1040,["borderRadius","borderStyle","padding","class"]),e.$props.load?(u(),v(M,{key:0,class:"fs-clickable-load",width:"2",size:"24",indeterminate:!0,color:e.loadColor},null,8,["color"])):$("",!0)],46,J))}const Y=j(B,[["render",K]]);B.__docgenInfo={displayName:"FSClickable",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"class",type:{name:"string | string[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","background","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"type",values:["button","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"button"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"borderStyle",values:["solid","dashed","dotted","double","groove","ridge","inset","outset","none"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"solid"'}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"name",scoped:!0,bindings:[{name:"contentVariant",title:"binding"},{name:"name",title:"binding"},{name:"v-bind",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClickable.vue"]};export{Y as F};
