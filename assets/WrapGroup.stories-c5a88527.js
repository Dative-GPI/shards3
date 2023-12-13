import{g as y,t as k,j as h,o as n,k as s,l as u,m as G,v as _,E as S,F,y as C,z as W,G as v,H as w}from"./vue.esm-bundler-66d46254.js";import{C as V,u as p}from"./useColors-c3e7013c.js";import{F as $,b as x}from"./FSRow-c0589bf9.js";import{a as P}from"./VSlideGroup-67ad961f.js";import{V as R}from"./VSlideGroupItem-2a7411be.js";import{B as j}from"./FSButton-baf84254.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./index-2557a64d.js";import"./display-db0dbf7d.js";import"./VBtn-4b6c71c6.js";import"./rounded-249030ea.js";import"./loader-72eca065.js";import"./router-f5bee237.js";import"./index-26618c09.js";import"./FSIcon-a97ae0a7.js";const d=y({name:"FSWrapGroup",components:{FSRow:$},props:{color:{type:String,required:!1,default:V.Primary}},setup(t){const{color:o}=k(t),e=p().getVariants(o.value),r=p().getDark(),l={"--fs-group-light-color":e.light,"--fs-group-base-color":e.base,"--fs-group-dark-color":e.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{color:o,style:l}}});function E(t,o,e,r,l,N){const f=h("FSRow");return n(),s(P,C({class:"fs-wrap-group",style:t.style},t.$attrs),{default:u(()=>[G(f,{height:"hug"},{default:u(()=>[(n(!0),_(F,null,S(t.$slots.default(),(g,b)=>(n(),s(R,{key:b},{default:u(()=>[(n(),s(W(g),v(w({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const B=x(d,[["render",E]]);d.__docgenInfo={displayName:"FSWrapGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWrapGroup.vue"]};const Z={title:"Foundation/WrapGroup",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{WrapGroup:B,Button:j},props:Object.keys(o),setup(){return{...t}},template:`
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
    `})};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const tt=["Standard"];export{a as Standard,tt as __namedExportsOrder,Z as default};
