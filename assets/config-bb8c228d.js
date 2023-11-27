import{l as lodashExports}from"./lodash-3d9a9be8.js";import{d as v,r as N,a as T}from"./lodash-3d9a9be8.js";import{e as enhanceArgTypes,a as extractComponentDescription,h as hasDocgen,b as extractComponentProps,c as convert4,S as SourceType,d as SNIPPET_RENDERED}from"./index-9f656a0c.js";import{w as watch,h,b as baseParse,i as isVNode}from"./vue.esm-bundler-4539b11d.js";import"./_commonjsHelpers-725317a4.js";const{addons}=__STORYBOOK_MODULE_PREVIEW_API__;var SECTIONS=["props","events","slots","methods"],extractArgTypes=e=>{if(!hasDocgen(e))return null;let r={};return SECTIONS.forEach(t=>{extractComponentProps(e,t).forEach(({propDef:n,docgenInfo:o,jsDocTags:s})=>{let{name:a,type:p,description:c,defaultValue:l,required:i}=n,m=t==="props"?convert4(o):{name:"void"};r[a]={name:a,description:c,type:{required:i,...m},table:{type:p,jsDocTags:s,defaultValue:l,category:t}}})}),r},omitEvent=e=>e?Object.fromEntries(Object.entries(e).filter(([r,t])=>!r.startsWith("on"))):{},displayObject=e=>e&&typeof e=="object"?`{${Object.keys(e).map(r=>`${r}:${displayObject(e[r])}`).join(",")}}`:typeof e=="string"?`'${e}'`:e==null?void 0:e.toString(),htmlEventAttributeToVueEventAttribute=e=>/^on[A-Za-z]/.test(e)?e.replace(/^on/,"v-on:").toLowerCase():e,directiveSource=(e,r)=>e.includes("on")?`${htmlEventAttributeToVueEventAttribute(e)}='()=>({})'`:`${e}="${r}"`,attributeSource=(e,r,t)=>["boolean","number","object"].includes(typeof r)||t&&["style","class"].includes(e)?`:${e}="${displayObject(r)}"`:directiveSource(e,r),evalExp=(e,r)=>{let t=e;return t&&/v-bind="(\w+)"/.test(t)?t.replace(/"(\w+)"/g,`"${displayObject(r)}"`):(Object.keys(r).forEach(n=>{let o=new RegExp(`(\\w+)\\.${n}`,"g"),s=new RegExp(`(\\w+)\\.${n}`,"g");o.test(t)&&(t=t.replace(s,displayObject(r[n])))}),t)},replaceValueWithRef=(e,r,t)=>{let n=t?r[t]:"args",o=()=>{let a=Object.fromEntries(Object.entries(r).map(([p])=>[p,p]));return displayObject(a).replace(/'/g,"")},s=new RegExp(`="${n}"`,"g");return e.replace(s,`="${t??o()}"`)};function generateExpression(e){let r=e.toString().split("=>")[1].trim().replace("return","").trim();return r.startsWith("{")&&r.endsWith("}")&&(r=r.substring(1,r.length-1).trim()),`{{${r}}}`}var skipSourceRender=e=>{var o;let r=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source,t=e==null?void 0:e.parameters.__isArgsStory,n=(e==null?void 0:e.viewMode)==="docs";return(r==null?void 0:r.type)===SourceType.DYNAMIC?!1:!n||!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===SourceType.CODE};function generateAttributesSource(e,r,t,n){return Object.keys(e).map(o=>{var p;let s=e[o].loc.source.replace(/\$props/g,"args"),a=(p=e[o].arg)==null?void 0:p.loc.source;return n&&a?replaceValueWithRef(s,r,a):evalExp(s,omitEvent(r))}).join(" ")}function mapAttributesAndDirectives(e){let r=t=>t.startsWith("on")?t:lodashExports.kebabCase(t);return Object.keys(e).map(t=>({name:"bind",type:["v-","@","v-on"].includes(t)?7:6,arg:{content:r(t),loc:{source:r(t)}},loc:{source:attributeSource(r(t),e[t])},exp:{isStatic:!1,loc:{source:e[t]}},modifiers:[""]}))}function mapSlots(e,r,t){return Object.keys(e).map(n=>{var c,l;let o=e[n],s="",a=(l=(c=t.find(i=>i.name===n&&i.scoped))==null?void 0:c.bindings)==null?void 0:l.map(i=>i.name).join(",");typeof o=="string"?s=o:typeof o=="function"?s=generateExpression(o):isVNode(o)?s=r(o):typeof o=="object"&&!isVNode(o)&&(s=JSON.stringify(o));let p=a?`="{${a}}"`:"";return s=o?`<template #${n}${p}>${s}</template>`:"",{type:2,content:s,loc:{source:s,start:{offset:0,line:1,column:0},end:{offset:0,line:1,column:0}}}})}function generateScriptSetup(e,r,t){let n=Object.keys(e).map(o=>`const ${o} = ${typeof e[o]=="function"?"()=>{}":`ref(${JSON.stringify(e[o])});`}`);return n.unshift('import { ref } from "vue";'),`<script lang='ts' setup>${n.join(`
`)}<\/script>`}function getTemplateComponents(e,r){try{let t=e,n=t?t(r==null?void 0:r.args,r):r==null?void 0:r.component,o=typeof n=="function"?n():n,{template:s}=o;return s?getComponents(s):[h(o,r==null?void 0:r.args)]}catch(t){return console.log("error",t),[]}}function getComponents(e){var t;return((t=baseParse(e))==null?void 0:t.children)||[]}function generateTemplateSource(componentOrNodes,{args,argTypes},byRef=!1){let isElementNode=e=>e&&e.type===1,isInterpolationNode=e=>e&&e.type===5,isTextNode=e=>e&&e.type===2,generateComponentSource=componentOrNode=>{var e,r;if(isElementNode(componentOrNode)){let{tag:t,props:n,children:o}=componentOrNode,s=typeof o=="string"?o:o.map(p=>generateComponentSource(p)).join(""),a=generateAttributesSource(n,args,argTypes,byRef);return s===""?`<${t} ${a} />`:`<${t} ${a}>${s}</${t}>`}if(isTextNode(componentOrNode)){let{content:t}=componentOrNode;return t}if(isInterpolationNode(componentOrNode)){let{content}=componentOrNode,expValue=evalExp(content.loc.source,args);return expValue===content.loc.source?`{{${expValue}}}`:eval(expValue)}if(isVNode(componentOrNode)){let t=componentOrNode,{props:n,type:o,children:s}=t,a=typeof s=="string"?void 0:s,p=(e=o==null?void 0:o.__docgenInfo)==null?void 0:e.slots,c=a?Object.fromEntries(Object.entries(n??{}).filter(([u,g])=>!a[u]&&!["class","style"].includes(u)).map(([u,g])=>[u,g])):n,l=mapAttributesAndDirectives(c??{}),i=Object.fromEntries(Object.entries(n??{}).filter(([u,g])=>a==null?void 0:a[u])),m=s?typeof s=="string"?s:mapSlots(i,generateComponentSource,p??[]).map(u=>u.content).join(""):"",d=typeof o=="string"?o:o.name||o.__name||((r=o.__docgenInfo)==null?void 0:r.displayName),f=generateAttributesSource(l,args,argTypes,byRef);return m.trim()===""?`<${d} ${f}/>`:`<${d} ${f}>${m}</${d}>`}return null},componentsOrNodes=Array.isArray(componentOrNodes)?componentOrNodes:[componentOrNodes],source=componentsOrNodes.map(e=>generateComponentSource(e)).join(" ");return source||null}var sourceDecorator=(e,r)=>{let t=skipSourceRender(r),n=e();return watch(()=>r.args,()=>{t||generateSource(r)},{immediate:!0,deep:!0}),n};function generateSource(e){var l,i,m;let r=addons.getChannel(),{args:t={},argTypes:n={},id:o}=e||{},s=getTemplateComponents(e==null?void 0:e.originalStoryFn,e),a=((m=(i=(l=e==null?void 0:e.parameters)==null?void 0:l.docs)==null?void 0:i.source)==null?void 0:m.withScriptSetup)||!1,p=a?generateScriptSetup(t):"",c=generateTemplateSource(s,e,a);if(c){let d=`${p}
 <template>
 ${c} 
</template>`;return r.emit(SNIPPET_RENDERED,{id:o,args:t,source:d,format:"vue"}),d}return null}var parameters={docs:{story:{inline:!0},extractArgTypes,extractComponentDescription}},decorators=[sourceDecorator],argTypesEnhancers=[enhanceArgTypes],parameters2={renderer:"vue3",...parameters};export{v as applyDecorators,argTypesEnhancers,decorators,parameters2 as parameters,N as render,T as renderToCanvas};
//# sourceMappingURL=config-bb8c228d.js.map
