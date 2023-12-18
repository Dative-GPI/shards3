import{Z as $e,K as Ve,h as Ce,g as se,t as xe,f as oe,s as Be,C as L,l as p,I as ie,x as S,z as c,o,j as b,k as d,B as we,F as Fe,y as Pe,q as y,m as V,p as C,u as x}from"./vue.esm-bundler-c3efb794.js";import{g as M,f as _e,C as U,u as A,p as ue,K as qe,t as je,j as ce,i as Ne,y as Oe,c as ze,v as Me,w as Re}from"./VIcon-c46aeaeb.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import{c as Ee,V as H}from"./VBtn-34cdb178.js";import{a as De,s as Ge}from"./easing-9998643d.js";import{m as Le,a as K}from"./VSlideGroup-402024bc.js";import{m as Ue,u as Ae}from"./rounded-c9feffd5.js";import{b as He}from"./loader-5b2fe5c8.js";import{S as O}from"./FSSpan-d98aa7bb.js";import{_ as z}from"./FSIcon-c64176f8.js";import{R as be}from"./FSRow-531aa6d1.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";import"./index-f39a8f63.js";import"./display-c606201b.js";function Ke(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return M()({name:t??$e(Ve(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},..._e()},setup(r,s){let{slots:l}=s;return()=>{var n;return Ce(r.tag,{class:[e,r.class],style:r.style},(n=l.default)==null?void 0:n.call(l))}}})}const pe=se({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:U.Primary}},emits:["update:tab"],setup(e,{emit:a}){const{tab:t,color:r}=xe(e),s=A().getVariants(r.value),l=A().getVariants(U.Dark),n={"--fs-group-light-color":s.light,"--fs-group-base-color":s.base,"--fs-group-light-text":l.base,"--fs-group-dark-text":l.dark};return{tab:t,colors:s,style:n,emit:a}}});const me=Symbol.for("vuetify:v-tabs"),Xe=ue({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...qe(Ee({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ge=M()({name:"VTab",props:Xe(),setup(e,a){let{slots:t,attrs:r}=a;const{textColorClasses:s,textColorStyles:l}=je(e,"sliderColor"),n=oe(()=>e.direction==="horizontal"),i=Be(!1),I=L(),u=L();function fe(q){var R,E;let{value:v}=q;if(i.value=v,v){const j=(E=(R=I.value)==null?void 0:R.$el.parentElement)==null?void 0:E.querySelector(".v-tab--selected .v-tab__slider"),N=u.value;if(!j||!N)return;const ve=getComputedStyle(j).color,m=j.getBoundingClientRect(),g=N.getBoundingClientRect(),k=n.value?"x":"y",$=n.value?"X":"Y",D=n.value?"right":"bottom",T=n.value?"width":"height",ye=m[k],Se=g[k],f=ye>Se?m[D]-g[D]:m[k]-g[k],he=Math.sign(f)>0?n.value?"right":"bottom":Math.sign(f)<0?n.value?"left":"top":"center",Ie=(Math.abs(f)+(Math.sign(f)<0?m[T]:g[T]))/Math.max(m[T],g[T])||0,ke=m[T]/g[T]||0,G=1.5;De(N,{backgroundColor:[ve,"currentcolor"],transform:[`translate${$}(${f}px) scale${$}(${ke})`,`translate${$}(${f/G}px) scale${$}(${(Ie-1)/G+1})`,"none"],transformOrigin:Array(3).fill(he)},{duration:225,easing:Ge})}}return ce(()=>{const q=H.filterProps(e);return p(H,S({symbol:me,ref:I,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},q,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":fe}),{...t,default:()=>{var v;return p(ie,null,[((v=t.default)==null?void 0:v.call(t))??e.text,!e.hideSlider&&p("div",{ref:u,class:["v-tab__slider",s.value],style:l.value},null)])}})}),{}}});function Ye(e){return e?e.map(a=>Re(a)?a:{text:a,value:a}):[]}const We=ue({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Le({mandatory:"force"}),...Ue(),...Ne()},"VTabs"),Ze=M()({name:"VTabs",props:We(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const r=He(e,"modelValue"),s=oe(()=>Ye(e.items)),{densityClasses:l}=Ae(e),{backgroundColorClasses:n,backgroundColorStyles:i}=Oe(c(e,"bgColor"));return ze({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),ce(()=>{const I=K.filterProps(e);return p(K,S(I,{modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,n.value,e.class],style:[{"--v-tabs-height":Me(e.height)},i.value,e.style],role:"tablist",symbol:me}),{default:()=>[t.default?t.default():s.value.map(u=>p(ge,S(u,{key:u.text}),null))]})}),{}}});function Je(e,a,t,r,s,l){return o(),b(Ze,S({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:e.style,modelValue:e.tab,"slider-color":e.colors.base,"onUpdate:modelValue":a[0]||(a[0]=n=>e.emit("update:tab",n))},e.$attrs),{default:d(()=>[(o(!0),we(ie,null,Fe(e.$slots.default(),(n,i)=>(o(),b(Pe(n),{key:i}))),128))]),_:1},16,["style","modelValue","slider-color"])}const h=de(pe,[["render",Je]]);pe.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const Te=se({name:"FSTab",components:{FSSpan:O,FSIcon:z,FSRow:be},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null}}});const Qe=Ke("v-spacer","div","VSpacer");function ea(e,a,t,r,s,l){return o(),b(ge,S({class:"fs-tab",ripple:!1},e.$attrs),{default:d(()=>[y(e.$slots,"default",{},()=>[p(be,{align:"center-left"},{default:d(()=>[y(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(o(),b(z,{key:0,size:"m"},{default:d(()=>[V(C(e.$props.prependIcon),1)]),_:1})):x("",!0)]),y(e.$slots,"default",{},()=>[e.$props.label?(o(),b(O,{key:0,font:"text-button"},{default:d(()=>[V(C(e.$props.label),1)]),_:1})):x("",!0)]),p(Qe),y(e.$slots,"tag",{},()=>[e.$props.tag?(o(),b(O,{key:0,class:"fs-tab-tag"},{default:d(()=>[V(C(e.$props.tag),1)]),_:1})):x("",!0)]),y(e.$slots,"append",{},()=>[e.$props.appendIcon?(o(),b(z,{key:0,size:"m"},{default:d(()=>[V(C(e.$props.appendIcon),1)]),_:1})):x("",!0)])]),_:3})])]),_:3},16)}const _=de(Te,[["render",ea]]);Te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ya={title:"Foundation/Shared/Tabs",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},B={args:{args:{tab:0,color:"primary"}},render:(e,{argTypes:a})=>({components:{Tabs:h,Tab:_},props:Object.keys(a),setup(){return{...e}},template:`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <Tab label="Tab 1" :value="0" />
          <Tab label="Tab 2" :value="1" />
          <Tab label="Tab 3" :value="2" />
          <Tab label="Tab 4" :value="3" />
          <Tab label="Tab 5" :value="4" />
          <Tab label="Tab 6" :value="5" />
        </Tabs>
    `})},w={args:{args:{color:"primary"}},render:(e,{argTypes:a})=>({components:{Tabs:h,Tab:_},props:Object.keys(a),setup(){return{...e}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" tag="1" />
        <Tab label="Tab 2" :value="1" tag="2" />
        <Tab label="Tab 3" :value="2" tag="3" />
        <Tab label="Tab 4" :value="3" tag="4" />
        <Tab label="Tab 5" :value="4" tag="5" />
        <Tab label="Tab 6" :value="5" tag="6" />
      </Tabs>
    `})},F={args:{args:{color:"warning"}},render:(e,{argTypes:a})=>({components:{Tabs:h,Tab:_},props:Object.keys(a),setup(){return{...e}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
        <Tab label="Tab 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
        <Tab label="Tab 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
        <Tab label="Tab 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
        <Tab label="Tab 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        <Tab label="Tab 6" :value="5" prependIcon="mdi-numeric-6-circle-outline" />
      </Tabs>
    `})},P={args:{args:{color:"error"}},render:(e,{argTypes:a})=>({components:{Tabs:h,Tab:_},props:Object.keys(a),setup(){return{...e}},template:`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
        <Tab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        <Tab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
        <Tab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
        <Tab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
      </Tabs>
    `})};var X,Y,W;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    args: {
      tab: 0,
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <Tab label="Tab 1" :value="0" />
          <Tab label="Tab 2" :value="1" />
          <Tab label="Tab 3" :value="2" />
          <Tab label="Tab 4" :value="3" />
          <Tab label="Tab 5" :value="4" />
          <Tab label="Tab 6" :value="5" />
        </Tabs>
    \`
  })
}`,...(W=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var Z,J,Q;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    args: {
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" tag="1" />
        <Tab label="Tab 2" :value="1" tag="2" />
        <Tab label="Tab 3" :value="2" tag="3" />
        <Tab label="Tab 4" :value="3" tag="4" />
        <Tab label="Tab 5" :value="4" tag="5" />
        <Tab label="Tab 6" :value="5" tag="6" />
      </Tabs>
    \`
  })
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,ne;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    args: {
      color: "warning"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
        <Tab label="Tab 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
        <Tab label="Tab 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
        <Tab label="Tab 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
        <Tab label="Tab 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        <Tab label="Tab 6" :value="5" prependIcon="mdi-numeric-6-circle-outline" />
      </Tabs>
    \`
  })
}`,...(ne=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,le;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    args: {
      color: "error"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
        <Tab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        <Tab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
        <Tab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
        <Tab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
      </Tabs>
    \`
  })
}`,...(le=(re=P.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Sa=["Labels","Tags","Icons","MixNMatch"];export{F as Icons,B as Labels,P as MixNMatch,w as Tags,Sa as __namedExportsOrder,ya as default};
