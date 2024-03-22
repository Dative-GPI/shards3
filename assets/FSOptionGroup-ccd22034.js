import{g as B,j as S,J as N,K as n,L as i,M as d,x as T,X as M,z as W,R as b,N as F,O as q,P as $,S as h,U as I,V as A,Q as f,F as c,Z as C,$ as V,D as w}from"./vue.esm-bundler-0a1af505.js";import{F as j}from"./FSButton-87a8d4ab.js";import{_ as O}from"./FSSpan-50615fe3.js";import{_ as k}from"./FSIcon-8481a0c6.js";import{_ as z}from"./FSRow-852c6353.js";import{C as v,u as P}from"./useColors-128f3c4d.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{F as R}from"./FSSlideGroup-1589ffb4.js";import{_ as E}from"./FSWrapGroup-c4cc1896.js";import{u as J}from"./useSlots-de2ef136.js";import{s as K}from"./css-415780ec.js";const D=B({name:"FSOptionItem",components:{FSClickable:j,FSSpan:O,FSIcon:k,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},label:{type:[String,Function],required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:v.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:o}){const{getColors:m}=P(),g=S(()=>m(e.color)),y=S(()=>e.label?"fit-content":"72px");return{colors:g,width:y,onClick:u=>{e.editable&&!e.load&&o("click",u)}}}});function Q(e,o,m,g,y,t){const u=N("FSClickable");return n(),i(u,T({padding:"12px 0",editable:e.$props.editable,height:["32px","28px"],variant:e.$props.variant,color:e.$props.color,load:e.$props.load,width:e.width,onClick:M(e.onClick,["stop"])},e.$attrs),{default:d(()=>[W(z,{align:"center-center",width:"fill",wrap:!1},{default:d(()=>[b(e.$slots,"prepend",h(I({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon||e.$props.icon?(n(),i(k,{key:0,size:"l"},{default:d(()=>[F(q(e.$props.prependIcon??e.$props.icon),1)]),_:1})):$("",!0)]),b(e.$slots,"default",h(I({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(n(),i(O,{key:0},{default:d(()=>[F(q(e.$props.label),1)]),_:1})):$("",!0)]),b(e.$slots,"append",h(I({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(n(),i(k,{key:0,size:"l"},{default:d(()=>[F(q(e.$props.appendIcon),1)]),_:1})):$("",!0)])]),_:3})]),_:3},16,["editable","variant","color","load","width","onClick"])}const U=G(D,[["render",Q]]);D.__docgenInfo={displayName:"FSOptionItem",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string|func"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionItem.vue"]};const L=B({name:"FSOptionGroup",components:{FSOptionItem:U,FSSlideGroup:R,FSWrapGroup:E},props:{values:{type:Array,required:!1,default:()=>[]},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},variant:{type:String,required:!1,default:"wrap"},optionVariant:{type:String,required:!1,default:"full"},activeVariant:{type:String,required:!1,default:"full"},optionClass:{type:[Array,String],required:!1,default:null},activeClass:{type:[Array,String],required:!1,default:null},modelValue:{type:[Array,String,Number],required:!1,default:!1},optionColor:{type:String,required:!1,default:v.Background},activeColor:{type:String,required:!1,default:v.Primary},padding:{type:[String,Number],required:!1,default:"3px"},gap:{type:[String,Number],required:!1,default:"0"},multiple:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{getFirstChild:m}=J(),{getColors:g}=P(),y=g(v.Light),t=m("item"),u=S(()=>({"--fs-option-group-border-size":e.border?"1px":"0","--fs-option-group-border-radius":K(e.borderRadius),"--fs-option-group-border-color":y.base})),a=(l,r)=>{switch(l){case"prependIcon":return t.props.prependIcon??r.prependIcon;case"label":return t.props.label??r.label;case"appendIcon":return t.props.appendIcon??r.appendIcon;case"icon":return t.props.icon??r.icon;case"variant":return t.props.variant??s(r);case"color":return t.props.color??p(r);default:return t.props[l]}},s=l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeVariant:e.optionVariant,p=l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeColor:e.optionColor;return{firstChild:t,style:u,getFromFirstChild:a,getVariant:s,getColor:p,getClass:l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeClass:e.optionClass,toggle:l=>{if(Array.isArray(e.modelValue))if(e.multiple)if(e.modelValue.length&&e.modelValue.every(r=>r===l.id)){if(!e.required){o("update:modelValue",[]);return}}else if(e.modelValue.some(r=>r===l.id)){o("update:modelValue",e.modelValue.filter(r=>r!==l.id));return}else{o("update:modelValue",[...e.modelValue,l.id]);return}else if(e.modelValue.some(r=>r===l.id)){if(!e.required){o("update:modelValue",[]);return}}else{o("update:modelValue",[l.id]);return}else if(e.modelValue===l.id){if(!e.required){o("update:modelValue",null);return}}else{o("update:modelValue",l.id);return}}}}});function X(e,o,m,g,y,t){const u=N("FSOptionItem");return["wrap"].includes(e.$props.variant)?(n(),i(E,{key:0,class:"fs-option-group",padding:e.$props.padding,gap:e.$props.gap,style:A(e.style)},{default:d(()=>[e.$props.values.length?(n(),f(c,{key:0},[e.firstChild?(n(!0),f(c,{key:1},C(e.$props.values,(a,s)=>(n(),i(w(e.firstChild),{key:s,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:V(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),f(c,{key:0},C(e.$props.values,(a,s)=>(n(),i(u,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:V(e.getClass(a)),label:a.label,icon:a.icon,key:s,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):b(e.$slots,"default",{key:1})]),_:3},8,["padding","gap","style"])):(n(),i(R,{key:1,class:"fs-option-group",padding:e.$props.padding,gap:e.$props.gap,style:A(e.style)},{default:d(()=>[e.$props.values.length?(n(),f(c,{key:0},[e.firstChild?(n(!0),f(c,{key:1},C(e.$props.values,(a,s)=>(n(),i(w(e.firstChild),{key:s,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:V(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),f(c,{key:0},C(e.$props.values,(a,s)=>(n(),i(u,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:V(e.getClass(a)),label:a.label,icon:a.icon,key:s,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):b(e.$slots,"default",{key:1})]),_:3},8,["padding","gap","style"]))}const ie=G(L,[["render",X]]);L.__docgenInfo={displayName:"FSOptionGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"FSToggle[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"optionVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"activeVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"optionClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"activeClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"(string | number)[] | string | number"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"optionColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Background"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"3px"'}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionGroup.vue"]};export{ie as F,U as a};
