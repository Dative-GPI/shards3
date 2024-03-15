import{g as L,j as r,J as W,K as i,Q as I,z as q,Y as N,Z as R,x as w,$ as z,X as O,M as o,R as h,S as y,U as $,L as p,P as k,N as g,O as v}from"./vue.esm-bundler-0a1af505.js";import{u as T}from"./vue-router-f60daad6.js";import{F as J}from"./FSCard-2d7fb699.js";import{C as c,u as E}from"./useColors-1745df70.js";import{s as F}from"./css-403c87e6.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as V}from"./FSSpan-50615fe3.js";import{_ as C}from"./FSIcon-61d2f8ac.js";import{_ as B}from"./FSRow-f7e9ea33.js";import{u as K}from"./useSlots-de2ef136.js";const D=L({name:"FSClickable",components:{FSCard:J},props:{to:{type:[String,Object],required:!1,default:null},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},variant:{type:String,required:!1,default:"standard"},type:{type:String,required:!1,default:"submit"},color:{type:String,required:!1,default:c.Light},fullWidth:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:s}){const{getColors:f,getContrasts:u}=E(),b=T(),l=r(()=>u(e.color)),a=r(()=>f(e.color)),t=f(c.Light),n=r(()=>{if(!e.editable)return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-radius":F(e.borderRadius),"--fs-clickable-background-color":t.base,"--fs-clickable-border-color":t.dark,"--fs-clickable-color":t.dark};switch(e.variant){case"standard":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-radius":F(e.borderRadius),"--fs-clickable-background-color":a.value.light,"--fs-clickable-border-color":a.value.base,"--fs-clickable-color":l.value.base,"--fs-clickable-hover-background-color":a.value.base,"--fs-clickable-hover-border-color":a.value.base,"--fs-clickable-hover-color":l.value.light,"--fs-clickable-active-background-color":a.value.dark,"--fs-clickable-active-border-color":a.value.dark,"--fs-clickable-active-color":l.value.light};case"full":return{"--fs-clickable-border-size":e.border?"1px":"0","--fs-clickable-border-radius":F(e.borderRadius),"--fs-clickable-background-color":a.value.base,"--fs-clickable-border-color":a.value.base,"--fs-clickable-color":l.value.light,"--fs-clickable-hover-background-color":a.value.base,"--fs-clickable-hover-border-color":a.value.base,"--fs-clickable-hover-color":l.value.light,"--fs-clickable-active-background-color":a.value.dark,"--fs-clickable-active-border-color":a.value.dark,"--fs-clickable-active-color":l.value.light}}}),d=r(()=>{const m=["fs-clickable"];return e.editable||m.push("fs-clickable-disabled"),m}),S=r(()=>{const m=[];return e.fullWidth&&m.push("fs-clickable-wrapper-full-width"),m}),M=r(()=>e.to?typeof e.to=="string"?e.to:b.resolve(e.to).href:null);return{wrapperClasses:S,classes:d,style:n,href:M,onClick:()=>{e.editable&&s("click")}}}}),Q=["type"],U=["href"];function X(e,s,f,u,b,l){const a=W("FSCard");return e.href?(i(),I("a",{key:1,class:z(e.wrapperClasses),href:e.href},[q(a,w({border:e.$props.border,class:e.classes,style:e.style},e.$attrs),N({_:2},[R(e.$slots,(t,n)=>({name:n,fn:o(d=>[h(e.$slots,n,y($(d)))])}))]),1040,["border","class","style"])],10,U)):(i(),I("button",{key:0,class:z(e.wrapperClasses),type:e.$props.type,onClick:s[0]||(s[0]=O((...t)=>e.onClick&&e.onClick(...t),["stop"]))},[q(a,w({border:e.$props.border,class:e.classes,style:e.style},e.$attrs),N({_:2},[R(e.$slots,(t,n)=>({name:n,fn:o(d=>[h(e.$slots,n,y($(d)))])}))]),1040,["border","class","style"])],10,Q))}const Y=P(D,[["render",X]]);D.__docgenInfo={displayName:"FSClickable",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string | RouteLocation"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"type",values:["button","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"fullWidth",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClickable.vue"]};const j=L({name:"FSButton",components:{FSClickable:Y,FSSpan:V,FSIcon:C,FSRow:B},props:{prependIcon:{type:String,required:!1,default:null},label:{type:[String,Function],required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:c.Light},fullWidth:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:s}=E(),{slots:f}=K(),u=r(()=>s(e.color)),b=s(c.Light),l=s(c.Dark),a=r(()=>{if(!e.editable)switch(e.variant){case"icon":return{"--fs-button-color":b.dark}}switch(e.variant){case"icon":switch(e.color){case c.Dark:case c.Light:return{"--fs-button-color":l.base,"--fs-button-hover-color":l.dark};default:return{"--fs-button-color":u.value.base,"--fs-button-hover-color":u.value.dark}}}}),t=r(()=>{const S=["fs-button-icon"];return e.editable||S.push("fs-button-disabled"),S}),n=r(()=>{switch(e.variant){case"standard":case"full":return!f.default&&!e.label?"0 7px":"0 16px";default:return"0px"}}),d=r(()=>e.fullWidth?"100%":"fit-content");return{iconClasses:t,padding:n,colors:u,style:a,width:d}}});function Z(e,s,f,u,b,l){const a=W("FSClickable");return["icon"].includes(e.$props.variant)?e.$props.icon?(i(),p(B,w({key:1,align:"center-center",width:"hug",class:e.iconClasses,style:e.style},e.$attrs),{default:o(()=>[q(C,{size:"l"},{default:o(()=>[g(v(e.$props.icon),1)]),_:1}),e.$props.label?(i(),p(V,{key:0,font:"text-overline"},{default:o(()=>[g(v(e.$props.label),1)]),_:1})):k("",!0)]),_:1},16,["class","style"])):k("",!0):(i(),p(a,w({key:0,fullWidth:e.$props.fullWidth,editable:e.$props.editable,height:["40px","36px"],variant:e.$props.variant,color:e.$props.color,padding:e.padding,style:e.style,width:e.width},e.$attrs),{default:o(()=>[q(B,{align:"center-center",width:"fill",wrap:!1},{default:o(()=>[h(e.$slots,"prepend",y($({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon||e.$props.icon?(i(),p(C,{key:0,size:"l"},{default:o(()=>[g(v(e.$props.prependIcon??e.$props.icon),1)]),_:1})):k("",!0)]),h(e.$slots,"default",y($({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(i(),p(V,{key:0},{default:o(()=>[g(v(e.$props.label),1)]),_:1})):k("",!0)]),h(e.$slots,"append",y($({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(i(),p(C,{key:0,size:"l"},{default:o(()=>[g(v(e.$props.appendIcon),1)]),_:1})):k("",!0)])]),_:3})]),_:3},16,["fullWidth","editable","variant","color","padding","style","width"]))}const te=P(j,[["render",Z]]);j.__docgenInfo={displayName:"FSButton",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string|func"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"fullWidth",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSButton.vue"]};export{te as _};
