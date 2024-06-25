import{d as w,c as I,y as N,z as r,A as u,B as s,m as y,J as D,K as M,L as d,E as q,G as S,D as k,M as V,N as $,Q as A,C as p,F as m,P as v,S as B}from"./vue.esm-bundler-DeSao-KJ.js";import{F as J}from"./FSClickable-D0rN91iS.js";import{_ as O}from"./FSSpan-t6bMdSRn.js";import{_ as F}from"./FSIcon-29MaMkU3.js";import{_ as z}from"./FSRow-JJutUvlP.js";import{C as b,u as P}from"./useColors-CSspNZdS.js";import{s as G,v as K}from"./css-BnhLLynS.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as R}from"./FSSlideGroup-C6jiw_gL.js";import{F as T}from"./FSWrapGroup-C8aYdVzb.js";const W=w({name:"FSOptionItem",components:{FSClickable:J,FSSpan:O,FSIcon:F,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},ItemWidth:{type:[Array,String,Number],required:!1,default:()=>["32px","28px"]},color:{type:String,required:!1,default:b.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click"],setup(e,{emit:o}){const{getColors:i}=P(),g=I(()=>i(e.color)),c=I(()=>e.label?"fit-content":G(K(e.ItemWidth)));return{colors:g,width:c,onClick:t=>{e.editable&&!e.load&&o("click",t)}}}});function Q(e,o,i,g,c,f){const t=N("FSClickable");return r(),u(t,y({padding:"4px",editable:e.$props.editable,height:["32px","28px"],variant:e.$props.variant,color:e.$props.color,load:e.$props.load,border:!1,width:e.width,onClick:D(e.onClick,["stop"])},e.$attrs),{default:s(()=>[M(z,{align:"center-center",width:"fill",wrap:!1},{default:s(()=>[d(e.$slots,"prepend",V($({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon||e.$props.icon?(r(),u(F,{key:0,size:"l"},{default:s(()=>[q(S(e.$props.prependIcon??e.$props.icon),1)]),_:1})):k("",!0)]),d(e.$slots,"default",V($({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(r(),u(O,{key:0},{default:s(()=>[q(S(e.$props.label),1)]),_:1})):k("",!0)]),d(e.$slots,"append",V($({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(r(),u(F,{key:0,size:"l"},{default:s(()=>[q(S(e.$props.appendIcon),1)]),_:1})):k("",!0)])]),_:3})]),_:3},16,["editable","variant","color","load","width","onClick"])}const j=E(W,[["render",Q]]);W.__docgenInfo={displayName:"FSOptionItem",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","background","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"ItemWidth",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["32px","28px"]'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionItem.vue"]};const L=w({name:"FSOptionGroup",components:{FSOptionItem:j,FSSlideGroup:R,FSWrapGroup:T},props:{values:{type:Array,required:!1,default:()=>[]},border:{type:Boolean,required:!1,default:!0},borderRadius:{type:[String,Number],required:!1,default:"4px"},variant:{type:String,required:!1,default:"wrap"},optionVariant:{type:String,required:!1,default:"standard"},activeVariant:{type:String,required:!1,default:"full"},optionClass:{type:[Array,String],required:!1,default:null},activeClass:{type:[Array,String],required:!1,default:null},modelValue:{type:[Array,String,Number],required:!1,default:null},optionColor:{type:String,required:!1,default:b.Background},activeColor:{type:String,required:!1,default:b.Primary},singleColor:{type:Boolean,required:!1,default:!1},padding:{type:[Array,String,Number],required:!1,default:"3px"},gap:{type:[Array,String,Number],required:!1,default:"8px"},multiple:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{getColors:i}=P(),g=i(b.Light),c=i(b.Background),f=i(e.optionColor),t=I(()=>({"--fs-option-group-background-color":c.base,"--fs-option-group-border-size":e.border?"1px":"0","--fs-option-group-border-radius":G(e.borderRadius),"--fs-option-group-border-color":g.base}));return{props:e,style:t,getVariant:l=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeVariant:e.optionVariant,getColor:l=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.singleColor?f.dark:e.activeColor:e.singleColor?f.base:e.optionColor,getClass:l=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeClass:e.optionClass,toggle:l=>{if(Array.isArray(e.modelValue))if(e.multiple)if(e.modelValue.length&&e.modelValue.every(n=>n===l.id)){if(!e.required){o("update:modelValue",[]);return}}else if(e.modelValue.some(n=>n===l.id)){o("update:modelValue",e.modelValue.filter(n=>n!==l.id));return}else{o("update:modelValue",[...e.modelValue,l.id]);return}else if(e.modelValue.some(n=>n===l.id)){if(!e.required){o("update:modelValue",[]);return}}else{o("update:modelValue",[l.id]);return}else if(e.modelValue===l.id){if(!e.required){o("update:modelValue",null);return}}else{o("update:modelValue",l.id);return}}}}});function H(e,o,i,g,c,f){const t=N("FSOptionItem");return["wrap"].includes(e.props.variant)?(r(),u(T,{key:0,class:"fs-option-group",padding:e.props.padding,gap:e.props.gap,style:A(e.style)},{default:s(()=>[e.props.values.length?(r(),p(m,{key:0},[e.$slots.item?(r(!0),p(m,{key:1},v(e.props.values,a=>d(e.$slots,"item",y({ref_for:!0},{item:a,toggle:e.toggle,getVariant:e.getVariant,getColor:e.getColor,getClass:e.getClass}))),256)):(r(!0),p(m,{key:0},v(e.props.values,(a,C)=>(r(),u(t,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.props.editable,variant:e.getVariant(a),color:e.getColor(a),class:B(e.getClass(a)),label:a.label,icon:a.icon,key:C,onClick:h=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):d(e.$slots,"default",V(y({key:1},{toggle:e.toggle,getVariant:e.getVariant,getColor:e.getColor,getClass:e.getClass})))]),_:3},8,["padding","gap","style"])):(r(),u(R,{key:1,class:"fs-option-group",padding:e.props.padding,gap:e.props.gap,style:A(e.style)},{default:s(()=>[e.props.values.length?(r(),p(m,{key:0},[e.$slots.item?(r(!0),p(m,{key:1},v(e.props.values,a=>d(e.$slots,"item",y({ref_for:!0},{item:a,toggle:e.toggle,getVariant:e.getVariant,getColor:e.getColor,getClass:e.getClass}))),256)):(r(!0),p(m,{key:0},v(e.props.values,(a,C)=>(r(),u(t,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.props.editable,variant:e.getVariant(a),color:e.getColor(a),class:B(e.getClass(a)),label:a.label,icon:a.icon,key:C,onClick:h=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):d(e.$slots,"default",V(y({key:1},{toggle:e.toggle,getVariant:e.getVariant,getColor:e.getColor,getClass:e.getClass})))]),_:3},8,["padding","gap","style"]))}const oe=E(L,[["render",H]]);L.__docgenInfo={displayName:"FSOptionGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"FSToggle[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"optionVariant",values:["standard","background","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"activeVariant",values:["standard","background","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"optionClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"activeClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"optionColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Background"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"singleColor",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"3px"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"toggle",title:"binding"},{name:"getVariant",title:"binding"},{name:"getColor",title:"binding"},{name:"getClass",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"toggle",title:"binding"},{name:"getVariant",title:"binding"},{name:"getColor",title:"binding"},{name:"getClass",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionGroup.vue"]};export{oe as F,j as a};
