import{d as S,c as u,z as o,A as x,B as w,O as c,C as g,N as V,P as _,F as B}from"./vue.esm-bundler-DR8xMV81.js";import{_ as b}from"./FSRow-Dfo2nEmE.js";import{C as n,u as C}from"./useColors-nvbUnVB9.js";import{s as d}from"./css-DYbKqpMF.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSButton-Bvd0naOX.js";import{F as q}from"./FSText-ZRfoDIrD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./FSCol-CeBQ3oDD.js";import"./VProgressCircular-CQOkkHxu.js";import"./color-DRqqT5iF.js";import"./VIcon-CB8o8wL4.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSIcon-CYA01Pg8.js";const v=S({name:"FSPagination",components:{FSRow:b},props:{width:{type:[Array,String,Number],required:!1,default:null},gap:{type:[Array,String,Number],required:!1,default:"4px"},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:n.Dark}},setup(e){const{getColors:a}=C(),r=u(()=>a(e.color)),i=a(n.Light),l=a(n.Dark);return{style:u(()=>{switch(e.color){case n.Light:case n.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":r.value.light,"--fs-pagination-active-background-color":r.value.base}}}),classes:t=>{const p=["fs-pagination-page"];return t<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,r,i,l,k){return o(),x(b,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:c(e.style)},{default:w(()=>[(o(!0),g(B,null,V(e.$props.pages,(F,t)=>(o(),g("div",{class:_(e.classes(t)),style:c(e.style),key:t},null,6))),128))]),_:1},8,["width","gap","style"])}const h=P(v,[["render",N]]);v.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const Y={title:"Foundation/Shared/Pagination",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:h,FSButton:$,FSText:q},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Z=["Variations"];export{s as Variations,Z as __namedExportsOrder,Y as default};
