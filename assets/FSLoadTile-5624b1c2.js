import{E as F,e as t,Z as d,H as i,I as u,J as l,R as S,z as a,K as V}from"./vue.esm-bundler-a27e881e.js";import{a as b,F as g}from"./FSCard-ba8b99ab.js";import{F as p}from"./FSCheckbox-384b76cb.js";import{_}from"./FSCol-5941d279.js";import{_ as f}from"./FSRow-e0b07355.js";import{u as y}from"./useBreakpoints-ce1b45c7.js";import{u as k,C as w}from"./useColors-64c3c523.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as m}from"./VSkeletonLoader-6bc87f83.js";class P{constructor(o){this.id=o.id,this.label=o.label,this.index=o.index}}const c=F({name:"FSTile",components:{FSContainer:b,FSCheckbox:p,FSCard:g,FSCol:_,FSRow:f},props:{modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isMobileSized:e}=y(),o=k().getColors(w.Background),s=t(()=>e.value?336:352),n=t(()=>e.value?156:170),r=t(()=>({"--fs-load-tile-background-color":o.base}));return{width:s,height:n,style:r}}});function v(e,o,s,n,r,B){const h=d("FSContainer"),C=d("FSCard");return i(),u(C,{class:"fs-load-tile",padding:"11px",style:S(e.style),width:e.width,height:e.height},{default:l(()=>[a(f,{align:"center-center",height:"fill",gap:"24px"},{default:l(()=>[a(m,{type:"article"}),a(m,{type:"image"})]),_:1}),e.$props.editable?(i(),u(h,{key:0,class:"fs-tile-checkbox",border:!1},{default:l(()=>[a(p,{modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1})):V("",!0)]),_:1},8,["style","width","height"])}const H=$(c,[["render",v]]);c.__docgenInfo={displayName:"FSTile",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSLoadTile.vue"]};export{H as F,P};
