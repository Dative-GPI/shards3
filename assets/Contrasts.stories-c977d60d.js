import{j as C,e as _,K as y,L as b,M as r,z as a,W as t,O as e,V as n}from"./vue.esm-bundler-a79f6a7e.js";import{u as F,a as k}from"./useColors-060213ee.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as l}from"./FSCol-bf5a0ca3.js";import{_ as w}from"./FSRow-997087e7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1ec486f5.js";import"./css-6f95cab1.js";const g=C({name:"Contrasts",components:{},props:{color:{type:String,required:!1,default:"#F0FFF0"}},setup(o){const{getColors:d}=F(),c=_(()=>d(o.color));return{describeColor:u=>{const s=new k(u);return{h:s.hue().toFixed(2),s:s.saturationv().toFixed(2),b:s.value().toFixed(2),d:s.isDark()}},colors:c}}}),S={style:{"font-weight":"bold"}},D={style:{"font-weight":"bold"}},N={style:{"font-weight":"bold"}},V={style:{"font-weight":"bold"}},$={style:{"font-weight":"bold"}},B={style:{"font-weight":"bold"}},q={style:{"font-weight":"bold"}},z={style:{"font-weight":"bold"}};function O(o,d,c,m,u,s){return y(),b(w,null,{default:r(()=>[a(l,{align:"center-center",style:n({backgroundColor:o.colors.light,color:o.colors.lightContrast,height:"100px"})},{default:r(()=>[t("div",S,e(o.colors.light),1),t("div",D,e(o.colors.lightContrast),1)]),_:1},8,["style"]),a(l,{align:"center-center",style:n({backgroundColor:o.colors.soft,color:o.colors.softContrast,height:"100px"})},{default:r(()=>[t("div",N,e(o.colors.soft),1),t("div",V,e(o.colors.softContrast),1)]),_:1},8,["style"]),a(l,{align:"center-center",style:n({backgroundColor:o.colors.base,color:o.colors.baseContrast,height:"100px"})},{default:r(()=>[t("div",$,e(o.colors.base),1),t("div",B,e(o.colors.baseContrast),1)]),_:1},8,["style"]),a(l,{align:"center-center",style:n({backgroundColor:o.colors.dark,color:o.colors.darkContrast,height:"100px"})},{default:r(()=>[t("div",q,e(o.colors.dark),1),t("div",z,e(o.colors.darkContrast),1)]),_:1},8,["style"])]),_:1})}const j=v(g,[["render",O]]);g.__docgenInfo={displayName:"Contrasts",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#F0FFF0'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Contrasts.vue"]};const A={title:"Foundation/Shared/Global/Contrasts",component:j,tags:["autodocs"],argTypes:{}},i={};var p,f,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const H=["Default"];export{i as Default,H as __namedExportsOrder,A as default};