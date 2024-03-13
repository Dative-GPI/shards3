import{g as F,j as u,I as o,J as x,K as w,S as c,O as g,X as _,Z as V,F as B}from"./vue.esm-bundler-72feb788.js";import{_ as v}from"./FSRow-ae483077.js";import{C as n,u as C}from"./useColors-1fcec14a.js";import{s as d}from"./css-a2b3c3ca.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as q}from"./FSButton-051e4a14.js";import{F as P}from"./FSText-74aefad9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1fe57d71.js";import"./vue-router-c36f9e85.js";import"./FSCard-692a57a9.js";import"./FSCol-df85c70b.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./FSIcon-f69578a9.js";import"./VIcon-cb64ea3c.js";import"./color-564bd659.js";import"./useRender-c1d2bc01.js";import"./tag-39781742.js";const h=F({name:"FSPagination",components:{FSRow:v},props:{width:{type:[String,Number],required:!1,default:null},gap:{type:[String,Number],required:!1,default:4},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:n.Dark}},setup(e){const{getColors:a}=C(),r=u(()=>a(e.color)),i=a(n.Light),l=a(n.Dark);return{style:u(()=>{switch(e.color){case n.Light:case n.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":r.value.light,"--fs-pagination-active-background-color":r.value.base}}}),classes:t=>{const p=["fs-pagination-page"];return t<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,r,i,l,b){return o(),x(v,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:c(e.style)},{default:w(()=>[(o(!0),g(B,null,_(e.$props.pages,(k,t)=>(o(),g("div",{class:V(e.classes(t)),style:c(e.style),key:t},null,6))),128))]),_:1},8,["width","gap","style"])}const S=$(h,[["render",N]]);h.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"4"}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const Y={title:"Foundation/Shared/Pagination",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:S,FSButton:q,FSText:P},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var m,f,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ee=["Variations"];export{s as Variations,ee as __namedExportsOrder,Y as default};
