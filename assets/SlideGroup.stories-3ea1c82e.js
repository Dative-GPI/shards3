import{g as S,t as y,o as n,j as s,k as l,l as k,u as h,D as G,F as _,x as C,y as F,E as v,G as w}from"./vue.esm-bundler-df2b59eb.js";import{C as x,u as p}from"./useColors-91d774bf.js";import{b as m,c as V}from"./FSRow-a4346a5f.js";import{a as $}from"./VSlideGroup-60604f24.js";import{V as P}from"./VSlideGroupItem-5be9f6a4.js";import{B as R}from"./FSButton-a52ab918.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./index-6f1c38e0.js";import"./display-be8f8c93.js";import"./VBtn-28fa37b4.js";import"./rounded-801f8536.js";import"./loader-f4b8bce6.js";import"./router-e08994c5.js";import"./index-eb1e0225.js";import"./FSIcon-f96262eb.js";const B=S({name:"FSSlideGroup",components:{FSRow:m},props:{color:{type:String,required:!1,default:x.Primary}},setup(t){const{color:o}=y(t),e=p().getVariants(o.value),r=p().getDark(),u={"--fs-group-light-color":e.light,"--fs-group-base-color":e.base,"--fs-group-dark-color":e.dark,"--fs-group-light-text":r.base,"--fs-group-base-text":r.base,"--fs-group-dark-text":r.dark};return{color:o,style:u}}});function j(t,o,e,r,u,D){return n(),s($,C({class:"fs-slide-group","show-arrows":"",style:t.style},t.$attrs),{default:l(()=>[k(m,{height:"hug"},{default:l(()=>[(n(!0),h(_,null,G(t.$slots.default(),(g,b)=>(n(),s(P,{key:b},{default:l(()=>[(n(),s(F(g),v(w({color:t.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const f=V(B,[["render",j]]);B.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const X={title:"Foundation/SlideGroup",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{SlideGroup:f,Button:R},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Y=["Standard"];export{a as Standard,Y as __namedExportsOrder,X as default};
