import{n as W,t as D,l as O,q as p,u as x,v as c,B as L,K as $,M as I,N as E,G as z,H as T,y as A,z as K,x as M,A as U,U as H}from"./vue.esm-bundler-722d5586.js";import{C as S,u as h}from"./useTimeZone-e2d91037.js";import{_ as g}from"./FSRow-adbe3642.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{a as j}from"./VSlideGroup-5b2c4ef9.js";import{V as J,_ as Q}from"./FSWrapGroup-713c725d.js";import{_ as u}from"./FSCol-73c0912e.js";import{F as X}from"./FSColor-f6026768.js";import{_ as Y}from"./FSIcon-420cc903.js";import{_ as Z}from"./FSSpan-25dfede3.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./index-debb29c6.js";import"./VIcon-3294e246.js";import"./display-1081d62c.js";import"./group-a0dbf136.js";import"./locale-4b40caf6.js";import"./resizeObserver-c610ad12.js";const V=W({name:"FSSlideGroup",components:{FSRow:g},props:{color:{type:String,required:!1,default:S.Primary}},setup(o){const{color:l}=D(o);h().getContrasts(l.value);const e=h().getColors(l.value),t=h().getColors(S.Dark),d=O({"--fs-group-color":t.base,"--fs-group-hover-background-color":e.light,"--fs-group-hover-color":t.dark,"--fs-group-disabled-color":t.light,"--fs-group-light":e.light,"--fs-group-base":e.base,"--fs-group-dark":e.dark});return{color:l,colors:e,style:d}}});function oo(o,l,e,t,d,m){return p(),x(j,z({class:"fs-slide-group","show-arrows":"",style:o.style},o.$attrs),{default:c(()=>[L(g,null,{default:c(()=>[(p(!0),$(E,null,I(o.$slots.default(),(a,P)=>(p(),x(J,{key:P},{default:c(()=>[(p(),x(T(a),A(K({color:o.color,colors:o.colors,style:o.style})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const lo=N(V,[["render",oo]]);V.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const q=W({name:"FSFadeOut",components:{FSCol:u},props:{maskHeight:{type:Number,required:!1,default:64},color:{type:String,required:!1,default:S.Background}},setup(o){const{maskHeight:l,color:e}=D(o),t=h().getColors(e.value),d=O({"--fs-fade-out-mask-color":t.base,"--fs-fade-out-top-mask-height":"0px","--fs-fade-out-bottom-mask-height":`${l.value}px`});return{style:d,onScroll:({target:a})=>{a.scrollHeight-a.scrollTop-a.clientHeight<1?d.value["--fs-fade-out-bottom-mask-height"]="0px":d.value["--fs-fade-out-bottom-mask-height"]=`${l.value}px`,a.scrollTop===0?d.value["--fs-fade-out-top-mask-height"]="0px":d.value["--fs-fade-out-top-mask-height"]=`${l.value}px`}}}}),eo=H("div",{class:"fs-fade-out-top"},null,-1),ao=H("div",{class:"fs-fade-out-bottom"},null,-1);function to(o,l,e,t,d,m){return p(),$("div",{class:"fs-fade-out",style:U(o.style),fluid:"",onScroll:l[0]||(l[0]=(...a)=>o.onScroll&&o.onScroll(...a))},[eo,L(u,{height:"fill"},{default:c(()=>[M(o.$slots,"default")]),_:3}),ao],36)}const po=N(q,[["render",to]]);q.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"maskHeight",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"64"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Background"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};const Co={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={render:()=>({components:{FSFadeOut:po,FSCol:u},template:`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSFadeOut style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut style="width: 150px; height: 200px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
        FSFadeOut scrollbar is hidden but its space is reserved
      </div>
      <div style="display: flex; flex-direction: column;">
      <pre>&lt;FSFadeOut maskHeight="128" style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut maskHeight="128" style="width: 150px; height: 200px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
      </div>
    </div>
    `})},n={render:()=>({components:{FSWrapGroup:Q,FSRow:g},template:`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup content is forced to shrink to allow wrapping
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup slides on mobile instead of wrapping
      </div>
    </div>
    `})},r={render:()=>({components:{FSSlideGroup:lo,FSRow:g},template:`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup children can fill it
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup arrows take the container's height on desktop, but are hidden on mobile
      </div>
    </div>
    `})},s={render:()=>({components:{FSColor:X,FSIcon:Y,FSSpan:Z},template:`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; gap: 20px;">
        <FSColor color="primary" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Primary </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="success" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Success </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="warning" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Warning </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="error" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Error </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="light" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Light </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="dark" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Dark </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="#FF0000" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #FF0000 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#00FF00" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #00FF00 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#0000FF" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #0000FF </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
    </div>`})};var F,y,f;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSFadeOut,
      FSCol
    },
    template: \`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSFadeOut style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut style="width: 150px; height: 200px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
        FSFadeOut scrollbar is hidden but its space is reserved
      </div>
      <div style="display: flex; flex-direction: column;">
      <pre>&lt;FSFadeOut maskHeight="128" style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut maskHeight="128" style="width: 150px; height: 200px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
      </div>
    </div>
    \`
  })
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSWrapGroup,
      FSRow
    },
    template: \`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup content is forced to shrink to allow wrapping
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup slides on mobile instead of wrapping
      </div>
    </div>
    \`
  })
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,C,G;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSlideGroup,
      FSRow
    },
    template: \`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup children can fill it
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup arrows take the container's height on desktop, but are hidden on mobile
      </div>
    </div>
    \`
  })
}`,...(G=(C=r.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var R,_,B;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSColor,
      FSIcon,
      FSSpan
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; gap: 20px;">
        <FSColor color="primary" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Primary </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="success" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Success </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="warning" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Warning </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="error" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Error </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="light" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Light </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="dark" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Dark </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="#FF0000" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #FF0000 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#00FF00" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #00FF00 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#0000FF" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #0000FF </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
    </div>\`
  })
}`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Go=["FadeOut","WrapGroup","SlideGroup","Color"];export{s as Color,i as FadeOut,r as SlideGroup,n as WrapGroup,Go as __namedExportsOrder,Co as default};
