import{m as R,t as C,k as _,n as a,q as x,v as h,x as W,F as O,H as N,L as P,C as I,D,I as T,J as z,y as E,K as L,O as $}from"./vue.esm-bundler-d10a8528.js";import{C as c,u as g}from"./VIcon-57787e8c.js";import{_ as s}from"./FSRow-c01fca12.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{a as J}from"./VSlideGroup-80a59d4a.js";import{V as K,_ as j}from"./FSWrapGroup-6930734e.js";import{_ as u}from"./FSCol-b1484c92.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./index-a10acb8c.js";import"./display-f4c4ad19.js";import"./group-6a276766.js";import"./locale-5c0ffb6b.js";import"./resizeObserver-6e691bac.js";const V=R({name:"FSSlideGroup",components:{FSRow:s},props:{color:{type:String,required:!1,default:c.Primary}},setup(d){const{color:e}=C(d),t=g().getVariants(e.value),o=g().getVariants(c.Dark),i=_({"--fs-group-light-color":t.light,"--fs-group-base-color":t.base,"--fs-group-dark-color":t.dark,"--fs-group-light-text":o.base,"--fs-group-base-text":o.base,"--fs-group-dark-text":o.dark});return{color:e,style:i}}});function A(d,e,t,o,i,m){return a(),x(J,I({class:"fs-slide-group","show-arrows":"",style:d.style},d.$attrs),{default:h(()=>[W(s,null,{default:h(()=>[(a(!0),O(P,null,N(d.$slots.default(),(l,q)=>(a(),x(K,{key:q},{default:h(()=>[(a(),x(D(l),T(z({color:d.color})),null,16))]),_:2},1024))),128))]),_:1})]),_:1},16,["style"])}const M=B(V,[["render",A]]);V.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};const H=R({name:"FSFadeOut",components:{FSCol:u},props:{maskHeight:{type:Number,required:!1,default:64},color:{type:String,required:!1,default:c.Background}},setup(d){const{maskHeight:e,color:t}=C(d),o=g().getVariants(t.value),i=_({"--fs-fade-out-mask-color":o.base,"--fs-fade-out-top-mask-height":"0px","--fs-fade-out-bottom-mask-height":`${e.value}px`});return{style:i,onScroll:({target:l})=>{l.scrollHeight-l.scrollTop-l.clientHeight<1?i.value["--fs-fade-out-bottom-mask-height"]="0px":i.value["--fs-fade-out-bottom-mask-height"]=`${e.value}px`,l.scrollTop===0?i.value["--fs-fade-out-top-mask-height"]="0px":i.value["--fs-fade-out-top-mask-height"]=`${e.value}px`}}}}),Q=$("div",{class:"fs-fade-out-top"},null,-1),U=$("div",{class:"fs-fade-out-bottom"},null,-1);function X(d,e,t,o,i,m){return a(),O("div",{class:"fs-fade-out",style:L(d.style),fluid:"",onScroll:e[0]||(e[0]=(...l)=>d.onScroll&&d.onScroll(...l))},[Q,W(u,{height:"fill"},{default:h(()=>[E(d.$slots,"default")]),_:3}),U],36)}const Y=B(H,[["render",X]]);H.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"maskHeight",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"64"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Background"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};const cd={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={render:()=>({components:{FSFadeOut:Y,FSCol:u},template:`
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
    `})},n={render:()=>({components:{FSWrapGroup:j,FSRow:s},template:`
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
    `})},r={render:()=>({components:{FSSlideGroup:M,FSRow:s},template:`
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
    `})};var y,b,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,w,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var F,k,G;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(k=r.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const gd=["FadeOut","WrapGroup","SlideGroup"];export{p as FadeOut,r as SlideGroup,n as WrapGroup,gd as __namedExportsOrder,cd as default};
