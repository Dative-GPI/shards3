import{d as p,z as c,A as h,m,b as B,E as I,N as _,V as d,X as g,a0 as k}from"./vue.esm-bundler-l-siv0w9.js";import{F as l}from"./FSButton-DSUuKlnr.js";import{C as f}from"./useColors-r8nvatqt.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as S}from"./useAppAuthToken-CwPnmj0J.js";import{u as C}from"./FSRouterLink-BeSr6Wr-.js";import{G as R}from"./base-CmdGny12.js";const y=()=>`${R()}/files`,E=(e,o)=>{let t=`${y()}/${encodeURIComponent(e)}`;return o&&(t+=`?access_token=${encodeURIComponent(o)}`),t},w=()=>{const{authToken:e}=S(),{openTab:o}=C();return{downloadFile:a=>{o(E(a,e.value))},readFile:a=>new Promise((u,i)=>{const r=new FileReader;r.addEventListener("load",s=>{u(s.target&&s.target.result)}),r.addEventListener("error",s=>{i(s)}),r.readAsDataURL(a)})}},v=p({name:"FSButtonRemoveMini",components:{FSButton:l},setup(){return{ColorEnum:f}}});function L(e,o,t,n,a,u){return c(),h(l,m({prependIcon:"mdi-delete-outline",color:e.ColorEnum.Error},e.$attrs),null,16,["color"])}const G=F(v,[["render",L]]);v.__docgenInfo={displayName:"FSButtonRemoveMini",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonRemoveMini.vue"]};const $=p({name:"FSButtonFileMini",components:{FSButton:l},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:"mdi-upload-outline"}},emits:["update:modelValue","update:metadata"],setup(e,{emit:o}){const{readFile:t}=w(),n=B(null),a=()=>{n.value&&n.value.form&&n.value.form.reset()};return{ColorEnum:f,input:n,onClick:()=>{n.value&&n.value.click()},onInput:async()=>{if(!n.value)return;const r=n.value.files&&n.value.files[0];if(r)if(o("update:metadata",r),!e.readFile)a();else{const s=await t(r);o("update:modelValue",s)}}}}}),V=["accept"];function M(e,o,t,n,a,u){return c(),I("div",null,[_(l,m({prependIcon:e.$props.icon,color:e.ColorEnum.Light,onClick:e.onClick},e.$attrs),null,16,["prependIcon","color","onClick"]),d("form",null,[g(d("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:o[0]||(o[0]=(...i)=>e.onInput&&e.onInput(...i))},null,40,V),[[k,!1]])])])}const P=F($,[["render",M]]);$.__docgenInfo={displayName:"FSButtonFileMini",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-upload-outline"'}}],events:[{name:"update:modelValue"},{name:"update:metadata"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonFileMini.vue"]};export{G as F,P as a,w as u};
