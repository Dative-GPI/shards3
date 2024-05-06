import{j as E,d as $,J as o,K as d,L as c,Q as p,F as f,Y as g,Z as m,v as k,R as A}from"./vue.esm-bundler-3416a090.js";import{F as T}from"./FSSlideGroup-e4eb99d4.js";import{_ as B}from"./FSWrapGroup-367aabb9.js";import{F as y}from"./FSButton-6f3d0d12.js";import{C as h}from"./useColors-1faf681b.js";import{u as R}from"./useSlots-7472d1e2.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{V as L}from"./VInput-77c4eaa4.js";const w=E({name:"FSToggleSet",components:{FSSlideGroup:T,FSWrapGroup:B,FSButton:y},props:{values:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"wrap"},buttonVariant:{type:String,required:!1,default:"standard"},activeVariant:{type:String,required:!1,default:"standard"},buttonClass:{type:[Array,String],required:!1,default:null},activeClass:{type:[Array,String],required:!1,default:null},modelValue:{type:[Array,String,Number],required:!1,default:null},buttonColor:{type:String,required:!1,default:h.Light},activeColor:{type:String,required:!1,default:h.Primary},padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},rules:{type:Array,required:!1,default:()=>[]},multiple:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:u}){const{getFirstChild:V}=R(),l=V("item"),b=$(null),s=$(null),a=(r,n)=>{var v,F,C,q,I,S;switch(r){case"prependIcon":return((v=l==null?void 0:l.props)==null?void 0:v.prependIcon)??n.prependIcon;case"label":return((F=l==null?void 0:l.props)==null?void 0:F.label)??n.label;case"appendIcon":return((C=l==null?void 0:l.props)==null?void 0:C.appendIcon)??n.appendIcon;case"icon":return((q=l==null?void 0:l.props)==null?void 0:q.icon)??n.icon;case"variant":return((I=l==null?void 0:l.props)==null?void 0:I.variant)??t(n);case"color":return((S=l==null?void 0:l.props)==null?void 0:S.color)??i(n);default:return(l==null?void 0:l.props)&&(l==null?void 0:l.props[r])||null}},t=r=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeVariant:e.buttonVariant,i=r=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeColor:e.buttonColor;return{inputRef:b,toggleSetRef:s,firstChild:l,getFromFirstChild:a,getVariant:t,goToStart:()=>{s.value&&s.value.goToStart()},getColor:i,getClass:r=>Array.isArray(e.modelValue)&&e.modelValue.some(n=>n===r.id)||!Array.isArray(e.modelValue)&&e.modelValue===r.id?e.activeClass:e.buttonClass,goToEnd:()=>{s.value&&s.value.goToEnd()},toggle:r=>{if(Array.isArray(e.modelValue))if(e.multiple)if(e.modelValue.length&&e.modelValue.every(n=>n===r.id)){if(!e.required){u("update:modelValue",[]);return}}else if(e.modelValue.some(n=>n===r.id)){u("update:modelValue",e.modelValue.filter(n=>n!==r.id));return}else{u("update:modelValue",[...e.modelValue,r.id]);return}else if(e.modelValue.some(n=>n===r.id)){if(!e.required){u("update:modelValue",[]);return}}else{u("update:modelValue",[r.id]);return}else if(e.modelValue===r.id){if(!e.required){if(e.multiple){u("update:modelValue",[]);return}u("update:modelValue",null);return}}else{if(e.multiple){if(e.modelValue){u("update:modelValue",[e.modelValue,r.id]);return}u("update:modelValue",[r.id]);return}u("update:modelValue",r.id);return}}}}});function G(e,u,V,l,b,s){return o(),d(L,{class:"fs-toggle-set",ref:"inputRef",modelValue:e.$props.modelValue,rules:e.$props.rules},{default:c(()=>[["wrap"].includes(e.$props.variant)?(o(),d(B,{key:0,ref:"toggleSetRef",padding:e.$props.padding,gap:e.$props.gap},{default:c(()=>[e.$props.values.length?(o(),p(f,{key:0},[e.firstChild?(o(!0),p(f,{key:1},g(e.$props.values,(a,t)=>(o(),d(k(e.firstChild),{key:t,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:m(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:i=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(o(!0),p(f,{key:0},g(e.$props.values,(a,t)=>(o(),d(y,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:m(e.getClass(a)),label:a.label,icon:a.icon,key:t,onClick:i=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):A(e.$slots,"default",{key:1})]),_:3},8,["padding","gap"])):(o(),d(T,{key:1,ref:"toggleSetRef",padding:e.$props.padding,gap:e.$props.gap},{default:c(()=>[e.$props.values.length?(o(),p(f,{key:0},[e.firstChild?(o(!0),p(f,{key:1},g(e.$props.values,(a,t)=>(o(),d(k(e.firstChild),{key:t,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:m(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:i=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(o(!0),p(f,{key:0},g(e.$props.values,(a,t)=>(o(),d(y,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:m(e.getClass(a)),label:a.label,icon:a.icon,key:t,onClick:i=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):A(e.$slots,"default",{key:1})]),_:3},8,["padding","gap"]))]),_:3},8,["modelValue","rules"])}const O=N(w,[["render",G]]);w.__docgenInfo={displayName:"FSToggleSet",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"FSToggle[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"activeVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"buttonClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"activeClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSToggleSet.vue"]};export{O as F};
