import{g as b,j as g,o as r,k as u,l,m as f,x as G,y,F,z as k}from"./vue.esm-bundler-c22e4d53.js";import{F as v,m as C,u as h}from"./VBtn-da6b1963.js";import{a as w,_ as x}from"./VIcon-7572c30d.js";import{V as I,a as V}from"./VSlideGroup-9b5aff2f.js";import{B as $}from"./FSButton-4bb0f036.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./display-4b221e9b.js";import"./FSIcon-4838725b.js";const i=b({name:"FSSlideGroup",components:{FSRow:v},props:{},setup(t){return{}}});const j=w()({name:"VSlideGroupItem",props:C(),emits:{"group:selected":t=>!0},setup(t,o){let{slots:n}=o;const e=h(t,I);return()=>{var s;return(s=n.default)==null?void 0:s.call(n,{isSelected:e.isSelected.value,select:e.select,toggle:e.toggle,selectedClass:e.selectedClass.value})}}});function N(t,o,n,e,s,O){const B=g("FSRow");return r(),u(V,{class:"fs-slide-group","show-arrows":""},{default:l(()=>[f(B,null,{default:l(()=>[(r(!0),G(F,null,y(t.$slots.default(),(S,_)=>(r(),u(j,{key:_},{default:l(()=>[(r(),u(k(S)))]),_:2},1024))),128))]),_:1})]),_:1})}const m=x(i,[["render",N],["__scopeId","data-v-d0ab1279"]]);i.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSSlideGroup.vue"]};const H={title:"Foundation/SlideGroup",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(t,{argTypes:o})=>({components:{SlideGroup:m,Button:$},props:Object.keys(o),setup(){return{...t}},template:`
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
//# sourceMappingURL=SlideGroup.stories-d9253f0c.js.map
