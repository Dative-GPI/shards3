import{g as k,t as G,o as a,j as s,k as u,l as _,B as h,F as S,I as W,x as C,y as F,G as v,H as V}from"./vue.esm-bundler-c3efb794.js";import{C as p,u as i}from"./VIcon-c46aeaeb.js";import{R as B}from"./FSRow-531aa6d1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{a as $}from"./VSlideGroup-402024bc.js";import{V as w}from"./VSlideGroupItem-9827450e.js";import{B as P}from"./FSButton-51769087.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./index-f39a8f63.js";import"./display-c606201b.js";import"./VBtn-34cdb178.js";import"./rounded-c9feffd5.js";import"./loader-5b2fe5c8.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";import"./FSSpan-d98aa7bb.js";import"./FSIcon-c64176f8.js";const f=k({name:"FSWrapGroup",components:{FSRow:B},props:{color:{type:String,required:!1,default:p.Primary}},setup(t){const{color:o}=G(t),r=i().getVariants(o.value),e=i().getVariants(p.Dark),l={"--fs-group-light-color":r.light,"--fs-group-base-color":r.base,"--fs-group-dark-color":r.dark,"--fs-group-light-text":e.base,"--fs-group-base-text":e.base,"--fs-group-dark-text":e.dark};return{color:o,style:l}}});function R(t,o,r,e,l,j){return a(),s($,C({class:"fs-wrap-group",style:t.style},t.$attrs),{default:u(()=>[_(B,null,{default:u(()=>[(a(!0),h(W,null,S(t.$slots.default(),(b,y)=>(a(),s(w,{key:y},{default:u(()=>[(a(),s(F(b),v(V({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const g=x(f,[["render",R]]);f.__docgenInfo={displayName:"FSWrapGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWrapGroup.vue"]};const Z={title:"Foundation/Shared/WrapGroup",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{}},render:(t,{argTypes:o})=>({components:{WrapGroup:g,Button:P},props:Object.keys(o),setup(){return{...t}},template:`
      <WrapGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </WrapGroup>
    `})};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      WrapGroup,
      Button
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <WrapGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </WrapGroup>
    \`
  })
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const tt=["Standard"];export{n as Standard,tt as __namedExportsOrder,Z as default};
