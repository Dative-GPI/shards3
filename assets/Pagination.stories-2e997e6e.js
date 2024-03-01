import{E as F,e as c,H as s,I as S,J as b,Q as u,V as h,X as _,R as C,F as V}from"./vue.esm-bundler-a27e881e.js";import{_ as f}from"./FSRow-68eabf56.js";import{C as t,u as B}from"./useColors-64c3c523.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{F as w}from"./FSButton-80bad2c6.js";import{F as j}from"./FSText-a3fbfc82.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./FSIcon-98d9a930.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./group-9102b821.js";import"./locale-d8beded1.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";const y=F({name:"FSPagination",components:{FSRow:f},props:{modelValue:{type:Number,required:!1,default:0},pages:{type:Number,required:!1,default:1},color:{type:String,required:!1,default:t.Dark}},setup(e){const{getColors:a}=B(),r=c(()=>a(e.color)),i=a(t.Light),l=a(t.Dark);return{style:c(()=>{switch(e.color){case t.Light:case t.Dark:return{"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-background-color":r.value.light,"--fs-pagination-active-background-color":r.value.base}}}),classes:n=>{const p=["fs-pagination"];return n===e.modelValue&&p.push("fs-pagination-active"),p}}}});function q(e,a,r,i,l,k){return s(),S(f,{align:"center-center",gap:"4px"},{default:b(()=>[(s(!0),u(V,null,h(e.$props.pages,(x,n)=>(s(),u("div",{class:_(e.classes(n)),style:C(e.style),key:n},null,6))),128))]),_:1})}const v=P(y,[["render",q]]);y.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const ie={title:"Foundation/Shared/Pagination",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:v,FSButton:w,FSText:j},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var d,g,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const le=["Variations"];export{o as Variations,le as __namedExportsOrder,ie as default};
