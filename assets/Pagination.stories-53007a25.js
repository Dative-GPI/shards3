import{G as F,e as u,I as o,J as x,K as w,S as c,R as g,W as V,Y as _,F as C}from"./vue.esm-bundler-588e96c7.js";import{_ as v}from"./FSRow-e442cab6.js";import{C as t,u as $}from"./useColors-0a17cef8.js";import{s as d}from"./css-50f0aa1d.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{F as B}from"./FSButton-03b2e657.js";import{F as P}from"./FSText-12fda099.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6917f69d.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./FSIcon-2736b3f2.js";import"./VIcon-56fbcc42.js";import"./color-56e2ae46.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./density-79e1d57e.js";import"./elevation-1ac0f37f.js";import"./rounded-ef9fdb42.js";import"./group-6ed4811d.js";import"./locale-56b7257e.js";import"./dimensions-e6c6eed7.js";import"./loader-b5f87c49.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";const h=F({name:"FSPagination",components:{FSRow:v},props:{width:{type:[String,Number],required:!1,default:null},gap:{type:[String,Number],required:!1,default:4},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:t.Dark}},setup(e){const{getColors:a}=$(),s=u(()=>a(e.color)),i=a(t.Light),l=a(t.Dark);return{style:u(()=>{switch(e.color){case t.Light:case t.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":s.value.light,"--fs-pagination-active-background-color":s.value.base}}}),classes:n=>{const p=["fs-pagination-page"];return n<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,s,i,l,S){return o(),x(v,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:c(e.style)},{default:w(()=>[(o(!0),g(C,null,V(e.$props.pages,(k,n)=>(o(),g("div",{class:_(e.classes(n)),style:c(e.style),key:n},null,6))),128))]),_:1},8,["width","gap","style"])}const b=q(h,[["render",N]]);h.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"4"}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const le={title:"Foundation/Shared/Pagination",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:b,FSButton:B,FSText:P},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    `})};var m,f,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      page1: 0,
      pages1: 3
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPagination,
      FSButton,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const pe=["Variations"];export{r as Variations,pe as __namedExportsOrder,le as default};
