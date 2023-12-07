import{g,l as f,o as r,m as u,n as l,k as b,j as G,y,F,z as k}from"./vue.esm-bundler-735ffdc4.js";import{F as v,m as h,u as C}from"./VBtn-e0eaa48e.js";import{a as w,_ as I}from"./VIcon-69a4d912.js";import{V as x,a as V}from"./VSlideGroup-54b45e46.js";import{B as $}from"./FSButton-e3642b0d.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./display-e65a1996.js";import"./FSIcon-cfab466a.js";const i=g({name:"FSSlideGroup",components:{FSRow:v},props:{},setup(t){return{}}});const j=w()({name:"VSlideGroupItem",props:h(),emits:{"group:selected":t=>!0},setup(t,o){let{slots:n}=o;const e=C(t,x);return()=>{var s;return(s=n.default)==null?void 0:s.call(n,{isSelected:e.isSelected.value,select:e.select,toggle:e.toggle,selectedClass:e.selectedClass.value})}}});function N(t,o,n,e,s,O){const B=f("FSRow");return r(),u(V,{class:"fs-slide-group","show-arrows":""},{default:l(()=>[b(B,null,{default:l(()=>[(r(!0),G(F,null,y(t.$slots.default(),(S,_)=>(r(),u(j,{key:_},{default:l(()=>[(r(),u(k(S)))]),_:2},1024))),128))]),_:1})]),_:1})}const m=I(i,[["render",N],["__scopeId","data-v-668f9c05"]]);i.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const H={title:"Foundation/Shared/SlideGroup",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{SlideGroup:m,Button:$},props:Object.keys(o),setup(){return{...t}},template:`
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
    `})};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const J=["Standard"];export{a as Standard,J as __namedExportsOrder,H as default};
