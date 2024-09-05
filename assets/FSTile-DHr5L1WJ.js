import{d as k,c as i,y as C,z as a,A as r,B as t,m as s,I as f,L as b,D as n,C as h,O as V}from"./vue.esm-bundler-Vj2X7okO.js";import{F as v}from"./FSClickable-HpeyF8B8.js";import{F as p}from"./FSCheckbox-CEveiKls.js";import{F as S}from"./FSCard-CD3PuQHv.js";import{C as m,u as q}from"./useColors-ClJ5KOuK.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./FSCol-Bk577joi.js";const $=k({name:"FSTile",components:{FSClickable:v,FSCheckbox:p,FSCard:S},props:{to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},activeColor:{type:[Array,String],required:!1,default:m.Primary},bottomColor:{type:[Array,String],required:!1,default:null},leftColor:{type:[Array,String],required:!1,default:null},editable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:()=>[170,156]}},emits:["update:modelValue"],setup(e){const{getGradients:l}=q(),y=i(()=>{const u={};if(e.bottomColor){const o=l(e.bottomColor);u["--fs-tile-bottom-border-color"]=o.base}if(e.leftColor){const o=l(e.leftColor);u["--fs-tile-left-border-color"]=o.base}return u}),c=i(()=>e.singleSelect&&e.modelValue?"standard":"background"),g=i(()=>e.singleSelect&&e.modelValue?e.activeColor:m.Background);return{ColorEnum:m,variant:c,color:g,style:y}}});function w(e,l,y,c,g,u){const o=C("FSClickable"),d=C("FSCard");return a(),r(B,{class:"fs-tile",height:e.$props.height,width:e.$props.width},{default:t(()=>[e.$props.singleSelect?(a(),r(o,s({key:0,padding:"12px",variant:e.variant,color:e.color,style:e.style,width:"100%",height:"100%",onClick:l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},e.$attrs),{default:t(()=>[f(e.$slots,"default")]),_:3},16,["variant","color","style"])):e.$props.href||e.$props.to||e.$attrs.onClick?(a(),r(o,s({key:1,variant:"background",class:"fs-tile",padding:"12px",color:e.ColorEnum.Background,href:e.$props.href,width:"100%",height:"100%",to:e.$props.to,style:e.style},e.$attrs),{default:t(()=>[f(e.$slots,"default"),e.$props.editable?(a(),r(d,s({key:0,class:"fs-tile-checkbox",variant:"background",color:e.ColorEnum.Background,border:!1},e.$attrs),{default:t(()=>[b(p,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[1]||(l[1]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1},16,["color"])):n("",!0)]),_:3},16,["color","href","to","style"])):(a(),r(d,s({key:2,variant:"background",class:"fs-tile",padding:"12px",color:e.color,style:e.style,width:"100%",height:"100%"},e.$attrs),{default:t(()=>[f(e.$slots,"default"),e.$props.editable?(a(),r(d,s({key:0,class:"fs-tile-checkbox",variant:"background",border:!1},e.$attrs),{default:t(()=>[b(p,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[2]||(l[2]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1},16)):n("",!0)]),_:3},16,["color","style"])),e.$props.leftColor?(a(),h("div",{key:3,class:"fs-tile-left",style:V(e.style)},null,4)):n("",!0),e.$props.bottomColor?(a(),h("div",{key:4,class:"fs-tile-bottom",style:V(e.style)},null,4)):n("",!0)]),_:3},8,["height","width"])}const L=F($,[["render",w]]);$.__docgenInfo={displayName:"FSTile",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"bottomColor",type:{name:"ColorBase[] | ColorBase | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftColor",type:{name:"ColorBase[] | ColorBase | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [170, 156]"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSTile.vue"]};export{L as F};
