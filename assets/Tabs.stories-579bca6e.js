import{a1 as ce,N as be,h as me,m as L,t as pe,k as P,f as X,s as ge,x as m,L as Y,C as y,g as u,n as s,q as b,v as c,F as fe,H as Te,D as ve,y as S,z as V,A as $,B as k}from"./vue.esm-bundler-d10a8528.js";import{c as z,j as Se,C as M,u as G,p as W,P as ye,x as Fe,l as J,k as he,E as Ie,e as Ve,y as $e,z as ke}from"./VIcon-57787e8c.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ce,V as O}from"./VBtn-3a7ed80e.js";import{a as xe,s as we}from"./easing-9998643d.js";import{m as Be,a as j}from"./VSlideGroup-80a59d4a.js";import{a as Pe,b as _e}from"./rounded-6f26bd38.js";import{u as qe}from"./locale-5c0ffb6b.js";import{F as _}from"./FSSpan-abccc23b.js";import{_ as q}from"./FSIcon-27c19cbf.js";import{_ as Q}from"./FSRow-c01fca12.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./group-6a276766.js";import"./loader-d94ba622.js";import"./VDefaultsProvider-1a074de6.js";import"./index-915a05f1.js";import"./resizeObserver-6e691bac.js";import"./index-a10acb8c.js";import"./display-f4c4ad19.js";function ze(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0;return z()({name:l??ce(be(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...Se()},setup(n,r){let{slots:o}=r;return()=>{var t;return me(n.tag,{class:[e,n.class],style:n.style},(t=o.default)==null?void 0:t.call(o))}}})}const Z=L({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:M.Primary}},emits:["update:tab"],setup(e,{emit:a}){const{tab:l,color:n}=pe(e),r=G().getVariants(n.value),o=G().getVariants(M.Dark),t=P({"--fs-group-light-color":r.light,"--fs-group-base-color":r.base,"--fs-group-light-text":o.base,"--fs-group-dark-text":o.dark});return{tab:l,colors:r,style:t,emit:a}}});const ee=Symbol.for("vuetify:v-tabs"),Ne=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ye(Ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ae=z()({name:"VTab",props:Ne(),setup(e,a){let{slots:l,attrs:n}=a;const{textColorClasses:r,textColorStyles:o}=Fe(e,"sliderColor"),t=X(()=>e.direction==="horizontal"),i=ge(!1),F=P(),d=P();function ne(x){var N,E;let{value:v}=x;if(i.value=v,v){const w=(E=(N=F.value)==null?void 0:N.$el.parentElement)==null?void 0:E.querySelector(".v-tab--selected .v-tab__slider"),B=d.value;if(!w||!B)return;const oe=getComputedStyle(w).color,p=w.getBoundingClientRect(),g=B.getBoundingClientRect(),h=t.value?"x":"y",I=t.value?"X":"Y",R=t.value?"right":"bottom",f=t.value?"width":"height",re=p[h],se=g[h],T=re>se?p[R]-g[R]:p[h]-g[h],ie=Math.sign(T)>0?t.value?"right":"bottom":Math.sign(T)<0?t.value?"left":"top":"center",de=(Math.abs(T)+(Math.sign(T)<0?p[f]:g[f]))/Math.max(p[f],g[f])||0,ue=p[f]/g[f]||0,D=1.5;xe(B,{backgroundColor:[oe,"currentcolor"],transform:[`translate${I}(${T}px) scale${I}(${ue})`,`translate${I}(${T/D}px) scale${I}(${(de-1)/D+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:we})}}return J(()=>{const x=O.filterProps(e);return m(O,y({symbol:ee,ref:F,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},x,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":ne}),{...l,default:()=>{var v;return m(Y,null,[((v=l.default)==null?void 0:v.call(l))??e.text,!e.hideSlider&&m("div",{ref:d,class:["v-tab__slider",r.value],style:o.value},null)])}})}),{}}});function Ee(e){return e?e.map(a=>ke(a)?a:{text:a,value:a}):[]}const Re=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force"}),...Pe(),...he()},"VTabs"),De=z()({name:"VTabs",props:Re(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const n=qe(e,"modelValue"),r=X(()=>Ee(e.items)),{densityClasses:o}=_e(e),{backgroundColorClasses:t,backgroundColorStyles:i}=Ie(u(e,"bgColor"));return Ve({VTab:{color:u(e,"color"),direction:u(e,"direction"),stacked:u(e,"stacked"),fixed:u(e,"fixedTabs"),sliderColor:u(e,"sliderColor"),hideSlider:u(e,"hideSlider")}}),J(()=>{const F=j.filterProps(e);return m(j,y(F,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,t.value,e.class],style:[{"--v-tabs-height":$e(e.height)},i.value,e.style],role:"tablist",symbol:ee}),{default:()=>[l.default?l.default():r.value.map(d=>m(ae,y(d,{key:d.text}),null))]})}),{}}});function Me(e,a,l,n,r,o){return s(),b(De,y({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:e.style,modelValue:e.tab,"slider-color":e.colors.base,"onUpdate:modelValue":a[0]||(a[0]=t=>e.emit("update:tab",t))},e.$attrs),{default:c(()=>[(s(!0),fe(Y,null,Te(e.$slots.default(),(t,i)=>(s(),b(ve(t),{key:i}))),128))]),_:1},16,["style","modelValue","slider-color"])}const te=K(Z,[["render",Me]]);Z.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const le=L({name:"FSTab",components:{FSSpan:_,FSIcon:q,FSRow:Q},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null}}});const Ge=ze("v-spacer","div","VSpacer");function Oe(e,a,l,n,r,o){return s(),b(ae,y({class:"fs-tab",ripple:!1},e.$attrs),{default:c(()=>[S(e.$slots,"default",{},()=>[m(Q,{align:"center-left"},{default:c(()=>[S(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(s(),b(q,{key:0,size:"m"},{default:c(()=>[V($(e.$props.prependIcon),1)]),_:1})):k("",!0)]),S(e.$slots,"default",{},()=>[e.$props.label?(s(),b(_,{key:0,font:"text-button"},{default:c(()=>[V($(e.$props.label),1)]),_:1})):k("",!0)]),m(Ge),S(e.$slots,"tag",{},()=>[e.$props.tag?(s(),b(_,{key:0,class:"fs-tab-tag"},{default:c(()=>[V($(e.$props.tag),1)]),_:1})):k("",!0)]),S(e.$slots,"append",{},()=>[e.$props.appendIcon?(s(),b(q,{key:0,size:"m"},{default:c(()=>[V($(e.$props.appendIcon),1)]),_:1})):k("",!0)])]),_:3})])]),_:3},16)}const je=K(le,[["render",Oe]]);le.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ua={title:"Foundation/Shared/Tabs",component:te,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:te,FSTab:je},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab2" color="secondary">
          <FSTab label="Tab 1" :value="0" tag="1" />
          <FSTab label="Tab 2" :value="1" tag="2" />
          <FSTab label="Tab 3" :value="2" tag="3" />
          <FSTab label="Tab 4" :value="3" tag="4" />
          <FSTab label="Tab 5" :value="4" tag="5" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
      </div>
    `})};var A,H,U;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 1,
      tab3: 2,
      tab4: 3
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab2" color="secondary">
          <FSTab label="Tab 1" :value="0" tag="1" />
          <FSTab label="Tab 2" :value="1" tag="2" />
          <FSTab label="Tab 3" :value="2" tag="3" />
          <FSTab label="Tab 4" :value="3" tag="4" />
          <FSTab label="Tab 5" :value="4" tag="5" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
      </div>
    \`
  })
}`,...(U=(H=C.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const ca=["Variations"];export{C as Variations,ca as __namedExportsOrder,ua as default};
