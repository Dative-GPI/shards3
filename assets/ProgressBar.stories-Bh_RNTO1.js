import{d as V,c as o,A as b,B as i,D as m,R as v,I as c,J as B,K as w,G as x,X as p}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as h}from"./FSRow-CAJM3FZ0.js";import{F as q}from"./FSText-BhZd10FY.js";import{u as P,C as n}from"./useColors-SBQj5l4a.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";const C=V({name:"FSProgressBar",components:{FSText:q,FSRow:h},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=P(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),_=o(()=>e.startColor??d.base),F=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":_.value,"--progress-bar-gradient-end-color":F.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}}),$=p("div",{class:"fs-progress-bar-gradient"},[p("div")],-1);function k(e,r,l,u,d,s){const a=b("FSText");return c(),i(h,{align:"center-center",style:v(e.style)},{default:m(()=>[$,e.$props.showValue?(c(),i(a,{key:0,font:"text-button"},{default:m(()=>[B(w(e.fixedRate)+"% ",1)]),_:1})):x("",!0)]),_:1},8,["style"])}const S=T(C,[["render",k]]);C.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const W={title:"Foundation/Shared/ProgressBar",component:S,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:S},setup(){return{args:e}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: 0.70,
    showValue: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressBar
        v-bind="args"
      />
    \`
  })
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
