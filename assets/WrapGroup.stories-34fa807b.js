import{g as y,t as k,o as n,j as s,k as u,l as h,u as G,D as _,F as S,x as W,y as C,E as F,G as v}from"./vue.esm-bundler-3a71544d.js";import{C as x,u as p}from"./useColors-f8bf713a.js";import{b as d,c as V}from"./FSRow-c6493f26.js";import{a as $}from"./VSlideGroup-c9174448.js";import{V as w}from"./VSlideGroupItem-648f9a29.js";import{B as P}from"./FSButton-d51241dd.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./index-98ae0985.js";import"./display-e7c079d1.js";import"./VBtn-650379c0.js";import"./rounded-81fca583.js";import"./loader-b55f2f66.js";import"./router-e438556e.js";import"./index-fe6eebca.js";import"./FSIcon-7efa0d30.js";const B=y({name:"FSWrapGroup",components:{FSRow:d},props:{color:{type:String,required:!1,default:x.Primary}},setup(t){const{color:o}=k(t),r=p().getVariants(o.value),e=p().getDark(),l={"--fs-group-light-color":r.light,"--fs-group-base-color":r.base,"--fs-group-dark-color":r.dark,"--fs-group-light-text":e.base,"--fs-group-base-text":e.base,"--fs-group-dark-text":e.dark};return{color:o,style:l}}});function R(t,o,r,e,l,j){return n(),s($,W({class:"fs-wrap-group",style:t.style},t.$attrs),{default:u(()=>[h(d,{height:"hug"},{default:u(()=>[(n(!0),G(S,null,_(t.$slots.default(),(g,b)=>(n(),s(w,{key:b},{default:u(()=>[(n(),s(C(g),F(v({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const f=V(B,[["render",R]]);B.__docgenInfo={displayName:"FSWrapGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWrapGroup.vue"]};const X={title:"Foundation/WrapGroup",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{WrapGroup:f,Button:P},props:Object.keys(o),setup(){return{...t}},template:`
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
    `})};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Y=["Standard"];export{a as Standard,Y as __namedExportsOrder,X as default};
