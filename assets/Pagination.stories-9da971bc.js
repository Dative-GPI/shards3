import{f as S,g as u,E as o,F as x,G as w,W as g,H as c,V,Y as _,J as $}from"./vue.esm-bundler-838daa40.js";import{_ as b}from"./FSRow-753b58e5.js";import{C as n,u as q}from"./useColors-4ac7c452.js";import{s as d}from"./css-67cfec15.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{F as C}from"./FSButton-255c9a8d.js";import{F as P}from"./FSText-e5eddad3.js";import"./_commonjsHelpers-de833af9.js";import"./index-2f699bdb.js";import"./theme-f9f3e2d4.js";import"./FSClickable-5b3f625e.js";import"./FSCard-1b892764.js";import"./FSCol-44fe82a9.js";import"./VProgressCircular-95e816d7.js";import"./color-3e53cf3d.js";import"./useRender-f6a4770d.js";import"./resizeObserver-21650322.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./FSIcon-f74a02b4.js";const v=S({name:"FSPagination",components:{FSRow:b},props:{width:{type:[Array,String,Number],required:!1,default:null},gap:{type:[Array,String,Number],required:!1,default:"4px"},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:n.Dark}},setup(e){const{getColors:a}=q(),s=u(()=>a(e.color)),i=a(n.Light),l=a(n.Dark);return{style:u(()=>{switch(e.color){case n.Light:case n.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":s.value.light,"--fs-pagination-active-background-color":s.value.base}}}),classes:t=>{const p=["fs-pagination-page"];return t<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,s,i,l,k){return o(),x(b,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:g(e.style)},{default:w(()=>[(o(!0),c($,null,V(e.$props.pages,(F,t)=>(o(),c("div",{class:_(e.classes(t)),style:g(e.style),key:t},null,6))),128))]),_:1},8,["width","gap","style"])}const h=B(v,[["render",N]]);v.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const ae={title:"Foundation/Shared/Pagination",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:h,FSButton:C,FSText:P},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ne=["Variations"];export{r as Variations,ne as __namedExportsOrder,ae as default};
