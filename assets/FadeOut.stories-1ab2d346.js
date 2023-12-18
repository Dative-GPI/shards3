import{g as k,t as y,C as F,o as O,B as v,l as S,k as x,q as C,n as _,D as c}from"./vue.esm-bundler-c3efb794.js";import{C as $,u as H}from"./VIcon-c46aeaeb.js";import{C as B}from"./FSCol-6013107c.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{B as f}from"./FSButton-51769087.js";import{R as g}from"./FSRow-531aa6d1.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-d98aa7bb.js";import"./FSIcon-c64176f8.js";import"./VBtn-34cdb178.js";import"./rounded-c9feffd5.js";import"./loader-5b2fe5c8.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";const b=k({name:"FSFadeOut",components:{FSCol:B},props:{maskHeight:{type:Number,required:!1,default:64},color:{type:String,required:!1,default:$.Background}},setup(o){const{maskHeight:t,color:l}=y(o),u=H().getVariants(l.value),e=F({"--fs-fade-out-mask-color":u.base,"--fs-fade-out-top-mask-height":"0px","--fs-fade-out-bottom-mask-height":`${t.value}px`});return{style:e,onScroll:({target:n})=>{n.scrollHeight-n.scrollTop-n.clientHeight<1?e.value["--fs-fade-out-bottom-mask-height"]="0px":e.value["--fs-fade-out-bottom-mask-height"]=`${t.value}px`,n.scrollTop===0?e.value["--fs-fade-out-top-mask-height"]="0px":e.value["--fs-fade-out-top-mask-height"]=`${t.value}px`}}}}),q=c("div",{class:"fs-fade-out-top"},null,-1),N=c("div",{class:"fs-fade-out-bottom"},null,-1);function V(o,t,l,u,e,h){return O(),v("div",{class:"fs-fade-out",style:_(o.style),fluid:"",onScroll:t[0]||(t[0]=(...n)=>o.onScroll&&o.onScroll(...n))},[q,S(B,{height:"fill"},{default:x(()=>[C(o.$slots,"default")]),_:3}),N],36)}const r=T(b,[["render",V]]);b.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"maskHeight",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"64"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Background"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};const X={title:"Foundation/Shared/FadeOut",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{}},render:(o,{argTypes:t})=>({components:{FadeOut:r,Button:f,Row:g},props:Object.keys(t),setup(){return{...o}},template:`
      <FadeOut v-bind="args" style="height: 250px;">
        <Row>
          <Button label="Row 1: Button 1" />
        </Row>
        <Row>
          <Button label="Row 2: Button 1" />
        </Row>
        <Row>
          <Button label="Row 3: Button 1" />
        </Row>
        <Row>
          <Button label="Row 4: Button 1" />
        </Row>
        <Row>
          <Button label="Row 5: Button 1" />
        </Row>
        <Row>
          <Button label="Row 6: Button 1" />
        </Row>
        <Row>
          <Button label="Row 7: Button 1" />
        </Row>
      </FadeOut>
    `})},s={args:{args:{maskHeight:128}},render:(o,{argTypes:t})=>({components:{FadeOut:r,Button:f,Row:g},props:Object.keys(t),setup(){return{...o}},template:`
      <FadeOut v-bind="args" style="height: 250px;">
        <Row>
          <Button label="Row 1: Button 1" />
        </Row>
        <Row>
          <Button label="Row 2: Button 1" />
        </Row>
        <Row>
          <Button label="Row 3: Button 1" />
        </Row>
        <Row>
          <Button label="Row 4: Button 1" />
        </Row>
        <Row>
          <Button label="Row 5: Button 1" />
        </Row>
        <Row>
          <Button label="Row 6: Button 1" />
        </Row>
        <Row>
          <Button label="Row 7: Button 1" />
        </Row>
      </FadeOut>
    `})};var p,w,R;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FadeOut,
      Button,
      Row
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FadeOut v-bind="args" style="height: 250px;">
        <Row>
          <Button label="Row 1: Button 1" />
        </Row>
        <Row>
          <Button label="Row 2: Button 1" />
        </Row>
        <Row>
          <Button label="Row 3: Button 1" />
        </Row>
        <Row>
          <Button label="Row 4: Button 1" />
        </Row>
        <Row>
          <Button label="Row 5: Button 1" />
        </Row>
        <Row>
          <Button label="Row 6: Button 1" />
        </Row>
        <Row>
          <Button label="Row 7: Button 1" />
        </Row>
      </FadeOut>
    \`
  })
}`,...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var d,i,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      maskHeight: 128
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FadeOut,
      Button,
      Row
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FadeOut v-bind="args" style="height: 250px;">
        <Row>
          <Button label="Row 1: Button 1" />
        </Row>
        <Row>
          <Button label="Row 2: Button 1" />
        </Row>
        <Row>
          <Button label="Row 3: Button 1" />
        </Row>
        <Row>
          <Button label="Row 4: Button 1" />
        </Row>
        <Row>
          <Button label="Row 5: Button 1" />
        </Row>
        <Row>
          <Button label="Row 6: Button 1" />
        </Row>
        <Row>
          <Button label="Row 7: Button 1" />
        </Row>
      </FadeOut>
    \`
  })
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Y=["Standard","Large"];export{s as Large,a as Standard,Y as __namedExportsOrder,X as default};
