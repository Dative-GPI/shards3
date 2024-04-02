import{j as I,d as k,K as n,L as i,M as V,Q as s,F as f,Y as g,_ as c,D as b,R as v}from"./vue.esm-bundler-37de1696.js";import{F as h}from"./FSSlideGroup-3bb8b83f.js";import{_ as q}from"./FSWrapGroup-603b7e9b.js";import{_ as m}from"./FSButton-26bb7e89.js";import{C as F}from"./useColors-ba22af06.js";import{u as $}from"./useSlots-df9def22.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const S=I({name:"FSToggleSet",components:{FSSlideGroup:h,FSWrapGroup:q,FSButton:m},props:{values:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"wrap"},buttonVariant:{type:String,required:!1,default:"standard"},activeVariant:{type:String,required:!1,default:"standard"},buttonClass:{type:[Array,String],required:!1,default:null},activeClass:{type:[Array,String],required:!1,default:null},modelValue:{type:[Array,String,Number],required:!1,default:null},buttonColor:{type:String,required:!1,default:F.Light},activeColor:{type:String,required:!1,default:F.Primary},padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},multiple:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:u}){const{getFirstChild:y}=$(),t=y("item"),d=k(null),C=(l,r)=>{switch(l){case"prependIcon":return t.props.prependIcon??r.prependIcon;case"label":return t.props.label??r.label;case"appendIcon":return t.props.appendIcon??r.appendIcon;case"icon":return t.props.icon??r.icon;case"variant":return t.props.variant??a(r);case"color":return t.props.color??o(r);default:return t.props[l]}},a=l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeVariant:e.buttonVariant,o=l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeColor:e.buttonColor;return{toggleSetRef:d,firstChild:t,getFromFirstChild:C,getVariant:a,goToStart:()=>{d.value&&d.value.goToStart()},getColor:o,getClass:l=>Array.isArray(e.modelValue)&&e.modelValue.some(r=>r===l.id)||!Array.isArray(e.modelValue)&&e.modelValue===l.id?e.activeClass:e.buttonClass,goToEnd:()=>{d.value&&d.value.goToEnd()},toggle:l=>{if(Array.isArray(e.modelValue))if(e.multiple)if(e.modelValue.length&&e.modelValue.every(r=>r===l.id)){if(!e.required){u("update:modelValue",[]);return}}else if(e.modelValue.some(r=>r===l.id)){u("update:modelValue",e.modelValue.filter(r=>r!==l.id));return}else{u("update:modelValue",[...e.modelValue,l.id]);return}else if(e.modelValue.some(r=>r===l.id)){if(!e.required){u("update:modelValue",[]);return}}else{u("update:modelValue",[l.id]);return}else if(e.modelValue===l.id){if(!e.required){u("update:modelValue",null);return}}else{u("update:modelValue",l.id);return}}}}});function T(e,u,y,t,d,C){return["wrap"].includes(e.$props.variant)?(n(),i(q,{key:0,ref:"toggleSetRef",padding:e.$props.padding,gap:e.$props.gap},{default:V(()=>[e.$props.values.length?(n(),s(f,{key:0},[e.firstChild?(n(!0),s(f,{key:1},g(e.$props.values,(a,o)=>(n(),i(b(e.firstChild),{key:o,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:c(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),s(f,{key:0},g(e.$props.values,(a,o)=>(n(),i(m,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:c(e.getClass(a)),label:a.label,icon:a.icon,key:o,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):v(e.$slots,"default",{key:1})]),_:3},8,["padding","gap"])):(n(),i(h,{key:1,ref:"toggleSetRef",padding:e.$props.padding,gap:e.$props.gap},{default:V(()=>[e.$props.values.length?(n(),s(f,{key:0},[e.firstChild?(n(!0),s(f,{key:1},g(e.$props.values,(a,o)=>(n(),i(b(e.firstChild),{key:o,prependIcon:e.getFromFirstChild("prependIcon",a),appendIcon:e.getFromFirstChild("appendIcon",a),variant:e.getFromFirstChild("variant",a),color:e.getFromFirstChild("color",a),class:c(e.getFromFirstChild("class",a)),label:e.getFromFirstChild("label",a),icon:e.getFromFirstChild("icon",a),editable:e.$props.editable,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","variant","color","class","label","icon","editable","onClick"]))),128)):(n(!0),s(f,{key:0},g(e.$props.values,(a,o)=>(n(),i(m,{prependIcon:a.prependIcon,appendIcon:a.appendIcon,editable:e.$props.editable,variant:e.getVariant(a),color:e.getColor(a),class:c(e.getClass(a)),label:a.label,icon:a.icon,key:o,onClick:p=>e.toggle(a)},null,8,["prependIcon","appendIcon","editable","variant","color","class","label","icon","onClick"]))),128))],64)):v(e.$slots,"default",{key:1})]),_:3},8,["padding","gap"]))}const j=A(S,[["render",T]]);S.__docgenInfo={displayName:"FSToggleSet",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"FSToggle[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"activeVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"buttonClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"activeClass",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSToggleSet.vue"]};export{j as F};
