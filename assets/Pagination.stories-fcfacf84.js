import{j as S,e as u,J as o,K as x,L as w,M as g,Q as c,Z as V,_,F as $}from"./vue.esm-bundler-41eda46b.js";import{_ as b}from"./FSRow-1508d56d.js";import{C as n,u as q}from"./useColors-c7c61044.js";import{s as d}from"./css-35e8563f.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{F as C}from"./FSButton-6f4c5e31.js";import{F as P}from"./FSText-833d800f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-720d9fd7.js";import"./FSClickable-25f814f4.js";import"./FSCard-5c9795f4.js";import"./FSCol-282cc158.js";import"./VProgressCircular-9cdac648.js";import"./color-92f22fcc.js";import"./useRender-55bb8ab6.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-33b1b769.js";const v=S({name:"FSPagination",components:{FSRow:b},props:{width:{type:[Array,String,Number],required:!1,default:null},gap:{type:[Array,String,Number],required:!1,default:"4px"},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:n.Dark}},setup(e){const{getColors:a}=q(),s=u(()=>a(e.color)),i=a(n.Light),l=a(n.Dark);return{style:u(()=>{switch(e.color){case n.Light:case n.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":s.value.light,"--fs-pagination-active-background-color":s.value.base}}}),classes:t=>{const p=["fs-pagination-page"];return t<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,s,i,l,k){return o(),x(b,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:g(e.style)},{default:w(()=>[(o(!0),c($,null,V(e.$props.pages,(F,t)=>(o(),c("div",{class:_(e.classes(t)),style:g(e.style),key:t},null,6))),128))]),_:1},8,["width","gap","style"])}const h=B(v,[["render",N]]);v.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const ae={title:"Foundation/Shared/Pagination",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:h,FSButton:C,FSText:P},props:Object.keys(a),setup(){return{...e}},template:`
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
