import{g as v,j as S,K as s,Q as l,z as m,M as t,F as n,Z as f,L as g,W as c,O as i,V as w}from"./vue.esm-bundler-0a1af505.js";import{u as B,a as D}from"./useColors-340c59f9.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as C}from"./FSCol-5b91b447.js";import{_}from"./FSRow-852c6353.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";import"./css-415780ec.js";const F=v({name:"Color2",components:{},props:{color:{type:String,required:!1,default:"primary"}},setup(o){const{getColors:u}=B(),d=S(()=>Object.entries(u(o.color)));return{describeColor:p=>{const r=new D(p);return{h:r.hue().toFixed(2),s:r.saturationv().toFixed(2),b:r.value().toFixed(2),d:r.isDark()}},colors:d}}}),V={style:{"font-weight":"bold"}};function $(o,u,d,k,p,r){return s(),l(n,null,[m(_,null,{default:t(()=>[(s(!0),l(n,null,f(o.colors.length/2,e=>(s(),g(C,{align:"center-center",style:w({backgroundColor:o.colors[(e-1)*2][1],color:o.colors[(e-1)*2+1][1],height:"100px"})},{default:t(()=>[c("div",V,i(o.colors[(e-1)*2][0]),1)]),_:2},1032,["style"]))),256))]),_:1}),m(_,null,{default:t(()=>[(s(!0),l(n,null,f(o.colors.length/2,e=>(s(),g(C,{align:""},{default:t(()=>[c("div",null," Background : "+i(o.describeColor(o.colors[(e-1)*2][1])),1),c("div",null," Text : "+i(o.describeColor(o.colors[(e-1)*2+1][1])),1)]),_:2},1024))),256))]),_:1})],64)}const O=N(F,[["render",$]]);F.__docgenInfo={displayName:"Color2",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Colors2.vue"]};const K={title:"Foundation/Shared/Global/Colors2",component:O,tags:["autodocs"],argTypes:{}},a={};var h,y,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,K as default};
