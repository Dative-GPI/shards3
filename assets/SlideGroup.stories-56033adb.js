import{g as S,t as y,j as k,o as n,k as s,l,m as h,v as G,E as _,F,y as C,z as v,G as w,H as V}from"./vue.esm-bundler-66d46254.js";import{C as $,u as p}from"./useColors-c3e7013c.js";import{F as x,b as P}from"./FSRow-c0589bf9.js";import{a as R}from"./VSlideGroup-67ad961f.js";import{V as j}from"./VSlideGroupItem-2a7411be.js";import{B as E}from"./FSButton-baf84254.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./index-2557a64d.js";import"./display-db0dbf7d.js";import"./VBtn-4b6c71c6.js";import"./rounded-249030ea.js";import"./loader-72eca065.js";import"./router-f5bee237.js";import"./index-26618c09.js";import"./FSIcon-a97ae0a7.js";const m=S({name:"FSSlideGroup",components:{FSRow:x},props:{color:{type:String,required:!1,default:$.Primary}},setup(t){const{color:o}=y(t),e=p().getVariants(o.value),r=p().getDark(),u={"--fs-group-light-color":e.light,"--fs-group-base-color":e.base,"--fs-group-dark-color":e.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{color:o,style:u}}});function N(t,o,e,r,u,O){const f=k("FSRow");return n(),s(R,C({class:"fs-slide-group","show-arrows":"",style:t.style},t.$attrs),{default:l(()=>[h(f,{height:"hug"},{default:l(()=>[(n(!0),G(F,null,_(t.$slots.default(),(g,b)=>(n(),s(j,{key:b},{default:l(()=>[(n(),s(v(g),w(V({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const B=P(m,[["render",N]]);m.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const Z={title:"Foundation/SlideGroup",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{SlideGroup:B,Button:E},props:Object.keys(o),setup(){return{...t}},template:`
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
    `})};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const tt=["Standard"];export{a as Standard,tt as __namedExportsOrder,Z as default};
