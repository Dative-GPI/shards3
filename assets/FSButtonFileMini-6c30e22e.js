import{f as d,E as p,F as _,A as c,j as h,H as B,P as I,_ as l,$ as S,a6 as g}from"./vue.esm-bundler-6f923154.js";import{F as i}from"./FSButton-ff673895.js";import{C as m}from"./useColors-9144d90e.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{G as k}from"./base-0de1729e.js";const w=()=>`${k()}/files`,C=e=>`${w()}/${encodeURIComponent(e)}`,y=()=>({downloadFile:t=>{window.open(C(t),"_blank")},readFile:t=>new Promise((n,s)=>{const r=new FileReader;r.addEventListener("load",a=>{n(a.target&&a.target.result)}),r.addEventListener("error",a=>{s(a)}),r.readAsDataURL(t)})}),F=d({name:"FSButtonRemoveMini",components:{FSButton:i},setup(){return{ColorEnum:m}}});function E(e,o,t,n,s,r){return p(),_(i,c({prependIcon:"mdi-delete-outline",color:e.ColorEnum.Error},e.$attrs),null,16,["color"])}const b=f(F,[["render",E]]);F.__docgenInfo={displayName:"FSButtonRemoveMini",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonRemoveMini.vue"]};const v=d({name:"FSButtonFileMini",components:{FSButton:i},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:"mdi-upload-outline"}},emits:["update:modelValue","update:metadata"],setup(e,{emit:o}){const{readFile:t}=y(),n=h(null),s=()=>{n.value&&n.value.form&&n.value.form.reset()};return{ColorEnum:m,input:n,onClick:()=>{n.value&&n.value.click()},onInput:async()=>{if(!n.value)return;const u=n.value.files&&n.value.files[0];if(u)if(o("update:metadata",u),!e.readFile)s();else{const $=await t(u);o("update:modelValue",$)}}}}}),R=["accept"];function L(e,o,t,n,s,r){return p(),B("div",null,[I(i,c({prependIcon:e.$props.icon,color:e.ColorEnum.Light,onClick:e.onClick},e.$attrs),null,16,["prependIcon","color","onClick"]),l("form",null,[S(l("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:o[0]||(o[0]=(...a)=>e.onInput&&e.onInput(...a))},null,40,R),[[g,!1]])])])}const A=f(v,[["render",L]]);v.__docgenInfo={displayName:"FSButtonFileMini",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-upload-outline"'}}],events:[{name:"update:modelValue"},{name:"update:metadata"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonFileMini.vue"]};export{b as F,A as a,y as u};
