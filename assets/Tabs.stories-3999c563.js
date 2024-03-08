import{_ as ue}from"./FSWindow-71e3278b.js";import{F as ce}from"./FSText-776f12dd.js";import{d as M,e as F,z as y,F as H,A as w,q as m,G as U,H as o,L as i,M as p,I as be,W as me,v as pe,J as x,O as $,P as I,N as h}from"./vue.esm-bundler-d8049c85.js";import{C as B,u as ge}from"./useColors-5c9cff43.js";import{u as Te}from"./useSlots-bdda8306.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Se,V as R}from"./VBtn-05fbe885.js";import{a as fe,u as ve}from"./color-339b05ed.js";import{f as Fe,a as ye,s as xe}from"./forwardRefs-e658ad70.js";import{p as X,y as he,e as we,D as Ce}from"./theme-540b65c4.js";import{g as Y,u as J,p as ke}from"./useRender-29d234e5.js";import{m as $e,V as O}from"./VSlideGroup-28438428.js";import{m as Ie,u as Ve}from"./density-de8a38cb.js";import{u as We}from"./locale-0b822523.js";import{m as _e}from"./tag-fffb6ba6.js";import{_ as P}from"./FSSpan-9f00eaf4.js";import{_ as q}from"./FSIcon-4847f868.js";import{_ as K}from"./FSRow-b5482a77.js";import{V as Be}from"./VSpacer-e253cf80.js";import"./VWindowItem-d1b25b3d.js";import"./group-9e62ecfa.js";import"./lazy-a24e86b5.js";import"./ssrBoot-93e7847f.js";import"./transition-a0827c0d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./rounded-0d200380.js";import"./dimensions-c0ade26a.js";import"./loader-cb170f8e.js";import"./router-e2bea4dd.js";import"./VIcon-76640d9b.js";import"./index-ea9d807b.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./index-a9977cc4.js";import"./display-bfe8ef0e.js";import"./css-50f0aa1d.js";const Q=Symbol.for("vuetify:v-tabs"),Pe=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...he(Se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Z=Y()({name:"VTab",props:Pe(),setup(e,a){let{slots:l,attrs:r}=a;const{textColorClasses:d,textColorStyles:n}=fe(e,"sliderColor"),t=M(),u=M(),s=F(()=>e.direction==="horizontal"),c=F(()=>{var g,b;return((b=(g=t.value)==null?void 0:g.group)==null?void 0:b.isSelected.value)??!1});function le(g){var E,N;let{value:b}=g;if(b){const W=(N=(E=t.value)==null?void 0:E.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),_=u.value;if(!W||!_)return;const ne=getComputedStyle(W).color,T=W.getBoundingClientRect(),S=_.getBoundingClientRect(),C=s.value?"x":"y",k=s.value?"X":"Y",D=s.value?"right":"bottom",f=s.value?"width":"height",oe=T[C],re=S[C],v=oe>re?T[D]-S[D]:T[C]-S[C],se=Math.sign(v)>0?s.value?"right":"bottom":Math.sign(v)<0?s.value?"left":"top":"center",ie=(Math.abs(v)+(Math.sign(v)<0?T[f]:S[f]))/Math.max(T[f],S[f])||0,de=T[f]/S[f]||0,z=1.5;ye(_,{backgroundColor:[ne,"currentcolor"],transform:[`translate${k}(${v}px) scale${k}(${de})`,`translate${k}(${v/z}px) scale${k}(${(ie-1)/z+1})`,"none"],transformOrigin:Array(3).fill(se)},{duration:225,easing:xe})}}return J(()=>{const g=R.filterProps(e);return y(R,w({symbol:Q,ref:t,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},g,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":le}),{...l,default:()=>{var b;return y(H,null,[((b=l.default)==null?void 0:b.call(l))??e.text,!e.hideSlider&&y("div",{ref:u,class:["v-tab__slider",d.value],style:n.value},null)])}})}),Fe({},t)}});function qe(e){return e?e.map(a=>Ce(a)?a:{text:a,value:a}):[]}const Ee=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ie(),..._e()},"VTabs"),Ne=Y()({name:"VTabs",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const r=We(e,"modelValue"),d=F(()=>qe(e.items)),{densityClasses:n}=Ve(e),{backgroundColorClasses:t,backgroundColorStyles:u}=ve(m(e,"bgColor"));return ke({VTab:{color:m(e,"color"),direction:m(e,"direction"),stacked:m(e,"stacked"),fixed:m(e,"fixedTabs"),sliderColor:m(e,"sliderColor"),hideSlider:m(e,"hideSlider")}}),J(()=>{const s=O.filterProps(e);return y(O,w(s,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},n.value,t.value,e.class],style:[{"--v-tabs-height":we(e.height)},u.value,e.style],role:"tablist",symbol:Q}),{default:()=>[l.default?l.default():d.value.map(c=>y(Z,w(c,{key:c.text}),null))]})}),{}}}),ee=U({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:B.Primary}},setup(e){const{getColors:a,getContrasts:l}=ge(),{getChildren:r}=Te(),d=F(()=>l(e.color)),n=F(()=>a(e.color)),t=a(B.Dark);return{style:F(()=>({"--fs-group-color":t.base,"--fs-group-hover-background-color":n.value.light,"--fs-group-hover-color":t.dark,"--fs-group-disabled-color":t.light,"--fs-group-light":n.value.light,"--fs-group-base":n.value.base,"--fs-group-dark":n.value.dark,"--fs-tab-tag-background-color":n.value.base,"--fs-tab-tag-color":d.value.light})),getChildren:r}}});function De(e,a,l,r,d,n){return o(),i(Ne,w({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.$emit("update:tab",t))},e.$attrs),{default:p(()=>[(o(!0),be(H,null,me(e.getChildren(),(t,u)=>(o(),i(pe(t),{key:u}))),128))]),_:1},16,["style","sliderColor","modelValue"])}const ae=L(ee,[["render",De]]);ee.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=U({name:"FSTab",components:{FSSpan:P,FSIcon:q,FSRow:K},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:B.Dark}}});function ze(e,a,l,r,d,n){return o(),i(Z,w({class:"fs-tab",ripple:!1},e.$attrs),{default:p(()=>[x(e.$slots,"default",{},()=>[y(K,{align:"center-left"},{default:p(()=>[x(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(o(),i(q,{key:0,size:"m"},{default:p(()=>[$(I(e.$props.prependIcon),1)]),_:1})):h("",!0)]),x(e.$slots,"default",{},()=>[e.$props.label?(o(),i(P,{key:0,font:"text-button"},{default:p(()=>[$(I(e.$props.label),1)]),_:1})):h("",!0)]),e.$props.tag?(o(),i(Be,{key:0})):h("",!0),x(e.$slots,"tag",{},()=>[e.$props.tag?(o(),i(P,{key:0,class:"fs-tab-tag"},{default:p(()=>[$(I(e.$props.tag),1)]),_:1})):h("",!0)]),x(e.$slots,"append",{},()=>[e.$props.appendIcon?(o(),i(q,{key:0,size:"m"},{default:p(()=>[$(I(e.$props.appendIcon),1)]),_:1})):h("",!0)])]),_:3})])]),_:3},16)}const Me=L(te,[["render",ze]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const $a={title:"Foundation/Shared/Tabs",component:ae,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:ae,FSTab:Me,FSText:ce,FSWindow:ue},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab1">
          <FSText v-for="arg in 5">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab2" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab2">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab3">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    `})};var G,A,j;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      FSTab,
      FSText,
      FSWindow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab1">
          <FSText v-for="arg in 5">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab2" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab2">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab3">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    \`
  })
}`,...(j=(A=V.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const Ia=["Variations"];export{V as Variations,Ia as __namedExportsOrder,$a as default};
