import{F as pe}from"./FSFadeOut-0e321526.js";import{m as Se,V as j,a as Fe,b as G,F as ge}from"./FSWindow-81381dad.js";import{F as Te}from"./FSText-c8879522.js";import{d as H,e as w,A as s,F as U,B as g,g as ve,x as T,j as Z,J as c,K as F,L as v,Q as fe,Z as xe,v as ye,R as I,U as $,V as P,N as V}from"./vue.esm-bundler-7c237656.js";import{C as N,u as he}from"./useColors-8171fc39.js";import{u as we}from"./useSlots-338ea3fb.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ce,V as X}from"./VBtn-0c5a0e13.js";import{a as Ie,b as Ve}from"./color-8b3e8a76.js";import{f as ke,a as We,s as $e}from"./forwardRefs-e658ad70.js";import{p as O,C as ae,c as Pe,A as _e}from"./theme-6b978bcd.js";import{g as B,u as q,p as Oe}from"./useRender-e696dd75.js";import{u as ne}from"./proxiedModel-255ed77f.js";import{m as Be,V as Y}from"./VSlideGroup-688ca79d.js";import{m as qe,u as Ee}from"./density-ba2627df.js";import{u as Le}from"./scopeId-01507e41.js";import{m as Ne}from"./tag-d0e3859f.js";import{_ as D}from"./FSSpan-661158f8.js";import{_ as R}from"./FSIcon-84236a8c.js";import{_ as te}from"./FSRow-0e15f868.js";import{V as De}from"./VSpacer-5d7851f1.js";import{_ as Re}from"./FSCol-76ddd6d9.js";import"./useDebounce-3b8c8385.js";import"./css-aa928277.js";import"./group-114c8e76.js";import"./locale-842c83ae.js";import"./lazy-ba583f92.js";import"./ssrBoot-ce89aa70.js";import"./transition-99224378.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-07f356f9.js";import"./elevation-322d7ef7.js";import"./rounded-5c48e6dc.js";import"./dimensions-506d0d5f.js";import"./loader-1ca0c22d.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./VIcon-ea625dc1.js";import"./anchor-4da81316.js";import"./router-0c914c7c.js";import"./index-b834f342.js";import"./VDefaultsProvider-8ad05cd7.js";import"./index-bed3da0c.js";import"./display-f7c4d7d9.js";import"./goto-5a330938.js";const z=Symbol.for("vuetify:v-tabs"),Ue=O({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ae(Ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=B()({name:"VTab",props:Ue(),setup(e,n){let{slots:r,attrs:a}=n;const{textColorClasses:l,textColorStyles:d}=Ie(e,"sliderColor"),t=H(),b=H(),m=w(()=>e.direction==="horizontal"),C=w(()=>{var p,o;return((o=(p=t.value)==null?void 0:p.group)==null?void 0:o.isSelected.value)??!1});function E(p){var i,S;let{value:o}=p;if(o){const u=(S=(i=t.value)==null?void 0:i.$el.parentElement)==null?void 0:S.querySelector(".v-tab--selected .v-tab__slider"),L=b.value;if(!u||!L)return;const se=getComputedStyle(u).color,f=u.getBoundingClientRect(),x=L.getBoundingClientRect(),k=m.value?"x":"y",W=m.value?"X":"Y",A=m.value?"right":"bottom",y=m.value?"width":"height",de=f[k],ue=x[k],h=de>ue?f[A]-x[A]:f[k]-x[k],ce=Math.sign(h)>0?m.value?"right":"bottom":Math.sign(h)<0?m.value?"left":"top":"center",be=(Math.abs(h)+(Math.sign(h)<0?f[y]:x[y]))/Math.max(f[y],x[y])||0,me=f[y]/x[y]||0,M=1.5;We(L,{backgroundColor:[se,"currentcolor"],transform:[`translate${W}(${h}px) scale${W}(${me})`,`translate${W}(${h/M}px) scale${W}(${(be-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ce)},{duration:225,easing:$e})}}return q(()=>{const p=X.filterProps(e);return s(X,g({symbol:z,ref:t,class:["v-tab",e.class],style:e.style,tabindex:C.value?0:-1,role:"tab","aria-selected":String(C.value),active:!1},p,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":E}),{...r,default:()=>{var o;return s(U,null,[((o=r.default)==null?void 0:o.call(r))??e.text,!e.hideSlider&&s("div",{ref:b,class:["v-tab__slider",l.value],style:d.value},null)])}})}),ke({},t)}});const ze=O({...ae(Se(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Ae=B()({name:"VTabsWindow",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:r}=n;const a=ve(z,null),l=ne(e,"modelValue"),d=w({get(){var t;return l.value!=null||!a?l.value:(t=a.items.value.find(b=>a.selected.value.includes(b.id)))==null?void 0:t.value},set(t){l.value=t}});return q(()=>{const t=j.filterProps(e);return s(j,g({_as:"VTabsWindow"},t,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),r)}),{}}}),Me=O({...Fe()},"VTabsWindowItem"),je=B()({name:"VTabsWindowItem",props:Me(),setup(e,n){let{slots:r}=n;return q(()=>{const a=G.filterProps(e);return s(G,g({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),r)}),{}}});function Ge(e){return e?e.map(n=>_e(n)?n:{text:n,value:n}):[]}const He=O({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force",selectedClass:"v-tab-item--selected"}),...qe(),...Ne()},"VTabs"),Xe=B()({name:"VTabs",props:He(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:r,slots:a}=n;const l=ne(e,"modelValue"),d=w(()=>Ge(e.items)),{densityClasses:t}=Ee(e),{backgroundColorClasses:b,backgroundColorStyles:m}=Ve(T(e,"bgColor")),{scopeId:C}=Le();return Oe({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),q(()=>{const E=Y.filterProps(e),p=!!(a.window||e.items.length>0);return s(U,null,[s(Y,g(E,{modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},t.value,b.value,e.class],style:[{"--v-tabs-height":Pe(e.height)},m.value,e.style],role:"tablist",symbol:z},C,r),{default:()=>{var o;return[((o=a.default)==null?void 0:o.call(a))??d.value.map(i=>{var S;return((S=a.tab)==null?void 0:S.call(a,{item:i}))??s(oe,g(i,{key:i.text,value:i.value}),{default:()=>{var u;return(u=a[`tab.${i.value}`])==null?void 0:u.call(a,{item:i})}})})]}}),p&&s(Ae,g({modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,key:"tabs-window"},C),{default:()=>{var o;return[d.value.map(i=>{var S;return((S=a.item)==null?void 0:S.call(a,{item:i}))??s(je,{value:i.value},{default:()=>{var u;return(u=a[`item.${i.value}`])==null?void 0:u.call(a,{item:i})}})}),(o=a.window)==null?void 0:o.call(a)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:N.Primary}},setup(e){const{getChildren:n}=we(),{getColors:r}=he(),a=w(()=>r(e.color)),l=r(N.Dark);return{style:w(()=>({"--fs-group-color":l.base,"--fs-group-disabled-color":l.light,"--fs-group-hover-background-color":a.value.light,"--fs-group-hover-color":l.dark,"--fs-group-light":a.value.light,"--fs-group-base":a.value.base,"--fs-group-dark":a.value.dark,"--fs-tab-tag-background-color":a.value.base,"--fs-tab-tag-color":a.value.baseContrast})),getChildren:n}}});function Ye(e,n,r,a,l,d){return c(),F(Xe,g({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":n[0]||(n[0]=t=>e.$emit("update:tab",t))},e.$attrs),{default:v(()=>[(c(!0),fe(U,null,xe(e.getChildren(),t=>(c(),F(ye(t)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const re=ee(le,[["render",Ye]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ie=Z({name:"FSTab",components:{FSSpan:D,FSIcon:R,FSRow:te},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:N.Dark}}});function Je(e,n,r,a,l,d){return c(),F(oe,g({class:"fs-tab",ripple:!1},e.$attrs),{default:v(()=>[I(e.$slots,"default",{},()=>[s(te,{align:"center-left"},{default:v(()=>[I(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(c(),F(R,{key:0,size:"m"},{default:v(()=>[$(P(e.$props.prependIcon),1)]),_:1})):V("",!0)]),I(e.$slots,"default",{},()=>[e.$props.label?(c(),F(D,{key:0,font:"text-button"},{default:v(()=>[$(P(e.$props.label),1)]),_:1})):V("",!0)]),e.$props.tag?(c(),F(De,{key:0})):V("",!0),I(e.$slots,"tag",{},()=>[e.$props.tag?(c(),F(D,{key:0,class:"fs-tab-tag"},{default:v(()=>[$(P(e.$props.tag),1)]),_:1})):V("",!0)]),I(e.$slots,"append",{},()=>[e.$props.appendIcon?(c(),F(R,{key:0,size:"m"},{default:v(()=>[$(P(e.$props.appendIcon),1)]),_:1})):V("",!0)])]),_:3})])]),_:3},16)}const Ke=ee(ie,[["render",Je]]);ie.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ja={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},_={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:n})=>({components:{FSTabs:re,FSTab:Ke,FSText:Te,FSWindow:ge,FSCol:Re,FSFadeOut:pe},props:Object.keys(n),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab4" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab4" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Fade outs in tabs </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab4" width="100%">
          <FSFadeOut :value="0" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 50">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
          <FSFadeOut :value="1" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 5">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab1">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
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
    `})};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      FSWindow,
      FSCol,
      FSFadeOut
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab4" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab4" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Fade outs in tabs </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab4" width="100%">
          <FSFadeOut :value="0" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 50">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
          <FSFadeOut :value="1" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 5">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab1">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
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
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ga=["Variations"];export{_ as Variations,Ga as __namedExportsOrder,ja as default};
