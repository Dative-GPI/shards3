import{d as $,z as a,C as t,A as o,B as u,J as p,m as i,D as d,F as n,N as f,I as m}from"./vue.esm-bundler-BSyvBTC9.js";import{F as v}from"./FSWrapGroup-BrSPku3K.js";import{F as s}from"./FSTag-C2eH4Bqh.js";import{C as c}from"./useColors-Ccf8xVyg.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F}from"./FSSlideGroup-D8p4gDD2.js";const g=$({name:"FSTagGroup",components:{FSWrapGroup:v,FSTag:s},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"wrap"},tagVariant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:c.Light},editable:{type:Boolean,required:!1,default:!0}}});function b(e,S,q,V,h,k){return a(),t(n,null,[e.$props.variant==="wrap"?(a(),o(v,p(i({key:0},e.$attrs)),{default:u(()=>[(a(!0),t(n,null,f(e.$props.tags,(r,l)=>(a(),o(s,{variant:e.$props.tagVariant,editable:e.$props.editable,color:e.$props.color,label:r,key:l,onRemove:()=>e.$emit("remove",r)},null,8,["variant","editable","color","label","onRemove"]))),128)),m(e.$slots,"default")]),_:3},16)):d("",!0),e.$props.variant==="slide"?(a(),o(F,p(i({key:1},e.$attrs)),{default:u(()=>[(a(!0),t(n,null,f(e.$props.tags,(r,l)=>(a(),o(s,{variant:e.$props.tagVariant,editable:e.$props.editable,color:e.$props.color,label:r,key:l,onRemove:()=>e.$emit("remove",r)},null,8,["variant","editable","color","label","onRemove"]))),128)),m(e.$slots,"default")]),_:3},16)):d("",!0)],64)}const R=y(g,[["render",b]]);g.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};export{R as F};
