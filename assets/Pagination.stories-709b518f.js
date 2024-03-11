import{G as F,e as u,I as o,J as x,K as w,Q as c,O as g,Y as _,_ as V,F as B}from"./vue.esm-bundler-cada065a.js";import{_ as v}from"./FSRow-4ed4317e.js";import{C as t,u as C}from"./useColors-d76e62c3.js";import{s as d}from"./css-50f0aa1d.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as q}from"./FSButton-2b410aba.js";import{F as P}from"./FSText-ac132797.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-077d21c3.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./FSIcon-de67d9ac.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./useRender-aebc0214.js";import"./tag-84fe69a6.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./density-a3d9cfab.js";import"./elevation-a65147a7.js";import"./rounded-c91c5538.js";import"./group-52996811.js";import"./locale-793e4951.js";import"./dimensions-bd9ae89e.js";import"./loader-c6765802.js";import"./router-44442b4b.js";import"./index-79d9264f.js";import"./VDefaultsProvider-1e56270a.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";const h=F({name:"FSPagination",components:{FSRow:v},props:{width:{type:[String,Number],required:!1,default:null},gap:{type:[String,Number],required:!1,default:4},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:t.Dark}},setup(e){const{getColors:a}=C(),s=u(()=>a(e.color)),i=a(t.Light),l=a(t.Dark);return{style:u(()=>{switch(e.color){case t.Light:case t.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":s.value.light,"--fs-pagination-active-background-color":s.value.base}}}),classes:n=>{const p=["fs-pagination-page"];return n<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,s,i,l,S){return o(),x(v,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:c(e.style)},{default:w(()=>[(o(!0),g(B,null,_(e.$props.pages,(k,n)=>(o(),g("div",{class:V(e.classes(n)),style:c(e.style),key:n},null,6))),128))]),_:1},8,["width","gap","style"])}const b=$(h,[["render",N]]);h.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"4"}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const ue={title:"Foundation/Shared/Pagination",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:b,FSButton:q,FSText:P},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ce=["Variations"];export{r as Variations,ce as __namedExportsOrder,ue as default};
