import{g as F,t as k,C as y,o as C,v,D as h,x as O,n as S}from"./vue.esm-bundler-66d46254.js";import{C as x,u as _}from"./useColors-c3e7013c.js";import{b as $,F as c}from"./FSRow-c0589bf9.js";import{B as m}from"./FSButton-baf84254.js";import{F as B}from"./FSCol-b1d44a51.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSIcon-a97ae0a7.js";import"./VBtn-4b6c71c6.js";import"./rounded-249030ea.js";import"./loader-72eca065.js";import"./router-f5bee237.js";import"./index-26618c09.js";const f=F({name:"FSFadeOut",props:{maskHeight:{type:Number,required:!1,default:64},color:{type:String,required:!1,default:x.Background}},setup(t){const{maskHeight:o,color:l}=k(t),r=_().getVariants(l.value),e=y({"--fs-fade-out-mask-color":r.base,"--fs-fade-out-top-mask-height":"0px","--fs-fade-out-bottom-mask-height":`${o.value}px`});return{style:e,onScroll:({target:n})=>{n.scrollHeight-n.scrollTop-n.clientHeight<1?e.value["--fs-fade-out-bottom-mask-height"]="0px":e.value["--fs-fade-out-bottom-mask-height"]=`${o.value}px`,n.scrollTop===0?e.value["--fs-fade-out-top-mask-height"]="0px":e.value["--fs-fade-out-top-mask-height"]=`${o.value}px`}}}}),H=h("div",{class:"fs-fade-out-top"},null,-1),T={class:"fs-fade-out-inner"},j=h("div",{class:"fs-fade-out-bottom"},null,-1);function q(t,o,l,r,e,b){return C(),v("div",{class:"fs-fade-out",style:S(t.style),fluid:"",onScroll:o[0]||(o[0]=(...n)=>t.onScroll&&t.onScroll(...n))},[H,h("div",T,[O(t.$slots,"default")]),j],36)}const s=$(f,[["render",q]]);f.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"maskHeight",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"64"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Background"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};const Q={title:"Foundation/FadeOut",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{}},render:(t,{argTypes:o})=>({components:{FadeOut:s,Button:m,Col:B,Row:c},props:Object.keys(o),setup(){return{...t}},template:`
      <FadeOut v-bind="args" style="height: 250px;">
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    `})},a={args:{args:{maskHeight:128}},render:(t,{argTypes:o})=>({components:{FadeOut:s,Button:m,Col:B,Row:c},props:Object.keys(o),setup(){return{...t}},template:`
      <FadeOut v-bind="args" style="height: 250px;">
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    `})};var g,i,w;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FadeOut,
      Button,
      Col,
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
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    \`
  })
}`,...(w=(i=u.parameters)==null?void 0:i.docs)==null?void 0:w.source}}};var d,R,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      Col,
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
        <Col width="hug" height="hug">
          <Row width="hug" height="hug">
            <Button label="Row 1: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 2: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 3: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 4: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 5: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 6: Button 1" />
          </Row>
          <Row width="hug" height="hug">
            <Button label="Row 7: Button 1" />
          </Row>
        </Col>
      </FadeOut>
    \`
  })
}`,...(p=(R=a.parameters)==null?void 0:R.docs)==null?void 0:p.source}}};const U=["Standard","Large"];export{a as Large,u as Standard,U as __namedExportsOrder,Q as default};
