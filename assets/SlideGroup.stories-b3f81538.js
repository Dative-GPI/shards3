import{g as y,t as k,o as n,j as s,k as l,l as G,B as h,F as _,I as C,x as F,y as v,G as V,H as w}from"./vue.esm-bundler-c3efb794.js";import{C as p,u as i}from"./VIcon-c46aeaeb.js";import{R as B}from"./FSRow-531aa6d1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{a as $}from"./VSlideGroup-402024bc.js";import{V as P}from"./VSlideGroupItem-9827450e.js";import{B as R}from"./FSButton-51769087.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./index-f39a8f63.js";import"./display-c606201b.js";import"./VBtn-34cdb178.js";import"./rounded-c9feffd5.js";import"./loader-5b2fe5c8.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";import"./FSSpan-d98aa7bb.js";import"./FSIcon-c64176f8.js";const f=y({name:"FSSlideGroup",components:{FSRow:B},props:{color:{type:String,required:!1,default:p.Primary}},setup(t){const{color:o}=k(t),e=i().getVariants(o.value),r=i().getVariants(p.Dark),u={"--fs-group-light-color":e.light,"--fs-group-base-color":e.base,"--fs-group-dark-color":e.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{color:o,style:u}}});function j(t,o,e,r,u,I){return n(),s($,F({class:"fs-slide-group","show-arrows":"",style:t.style},t.$attrs),{default:l(()=>[G(B,null,{default:l(()=>[(n(!0),h(C,null,_(t.$slots.default(),(b,S)=>(n(),s(P,{key:S},{default:l(()=>[(n(),s(v(b),V(w({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const g=x(f,[["render",j]]);f.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const Z={title:"Foundation/Shared/SlideGroup",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{SlideGroup:g,Button:R},props:Object.keys(o),setup(){return{...t}},template:`
      <SlideGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </SlideGroup>
    `})};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      SlideGroup,
      Button
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <SlideGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </SlideGroup>
    \`
  })
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const tt=["Standard"];export{a as Standard,tt as __namedExportsOrder,Z as default};
