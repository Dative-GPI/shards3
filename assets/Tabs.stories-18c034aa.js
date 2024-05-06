import{_ as pe}from"./FSWindow-c36bf493.js";import{F as ge}from"./FSText-4221a42d.js";import{d as G,e as x,A as d,F as z,B as f,g as Te,x as T,j as Z,J as c,K as g,L as S,Q as Se,Y as fe,v as ve,R as h,S as $,U as W,N as V}from"./vue.esm-bundler-3416a090.js";import{C as D,u as Fe}from"./useColors-1faf681b.js";import{u as ye}from"./useSlots-7472d1e2.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as we,V as L}from"./VBtn-f59107e2.js";import{a as xe,b as he}from"./color-5c733e3b.js";import{f as Ve,a as Ce,s as Ie}from"./forwardRefs-e658ad70.js";import{p as P,A as ae,c as ke,y as $e}from"./theme-2c100cd8.js";import{g as B,u as q,p as We}from"./useRender-fb717f1b.js";import{m as _e,V as Y,b as Pe,a as H}from"./VWindowItem-d08ad5ba.js";import{u as te}from"./proxiedModel-868611da.js";import{m as Be,V as X}from"./VSlideGroup-057adefe.js";import{m as qe,u as Ee}from"./density-174ddef7.js";import{m as Ne}from"./tag-a6c90b0c.js";import{_ as R}from"./FSSpan-b519c994.js";import{_ as U}from"./FSIcon-f518d728.js";import{_ as ne}from"./FSRow-5edf997c.js";import{V as De}from"./VSpacer-819449a6.js";import{_ as Re}from"./FSCol-5731c3c4.js";import"./css-69ed11d9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-1657a325.js";import"./elevation-9288a0e5.js";import"./rounded-e101edac.js";import"./group-f3cba4ff.js";import"./dimensions-97f2f62c.js";import"./loader-b2c56b78.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./locale-be130c16.js";import"./router-b1b24156.js";import"./index-a9118fe7.js";import"./VDefaultsProvider-ef2fd514.js";import"./lazy-939e8bde.js";import"./ssrBoot-c0668163.js";import"./transition-6086c96b.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";const A=Symbol.for("vuetify:v-tabs"),Ue=P({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ae(we({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=B()({name:"VTab",props:Ue(),setup(e,n){let{slots:a,attrs:t}=n;const{textColorClasses:r,textColorStyles:u}=xe(e,"sliderColor"),l=G(),b=G(),m=x(()=>e.direction==="horizontal"),C=x(()=>{var o,s;return((s=(o=l.value)==null?void 0:o.group)==null?void 0:s.isSelected.value)??!1});function i(o){var p,M;let{value:s}=o;if(s){const E=(M=(p=l.value)==null?void 0:p.$el.parentElement)==null?void 0:M.querySelector(".v-tab--selected .v-tab__slider"),N=b.value;if(!E||!N)return;const ie=getComputedStyle(E).color,v=E.getBoundingClientRect(),F=N.getBoundingClientRect(),I=m.value?"x":"y",k=m.value?"X":"Y",j=m.value?"right":"bottom",y=m.value?"width":"height",de=v[I],ue=F[I],w=de>ue?v[j]-F[j]:v[I]-F[I],ce=Math.sign(w)>0?m.value?"right":"bottom":Math.sign(w)<0?m.value?"left":"top":"center",be=(Math.abs(w)+(Math.sign(w)<0?v[y]:F[y]))/Math.max(v[y],F[y])||0,me=v[y]/F[y]||0,O=1.5;Ce(N,{backgroundColor:[ie,"currentcolor"],transform:[`translate${k}(${w}px) scale${k}(${me})`,`translate${k}(${w/O}px) scale${k}(${(be-1)/O+1})`,"none"],transformOrigin:Array(3).fill(ce)},{duration:225,easing:Ie})}}return q(()=>{const o=L.filterProps(e);return d(L,f({symbol:A,ref:l,class:["v-tab",e.class],style:e.style,tabindex:C.value?0:-1,role:"tab","aria-selected":String(C.value),active:!1},o,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":i}),{...a,default:()=>{var s;return d(z,null,[((s=a.default)==null?void 0:s.call(a))??e.text,!e.hideSlider&&d("div",{ref:b,class:["v-tab__slider",r.value],style:u.value},null)])}})}),Ve({},l)}});const ze=P({...ae(_e(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Ae=B()({name:"VTabsWindow",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Te(A,null),r=te(e,"modelValue"),u=x({get(){var l;return r.value!=null||!t?r.value:(l=t.items.value.find(b=>t.selected.value.includes(b.id)))==null?void 0:l.value},set(l){r.value=l}});return q(()=>{const l=Y.filterProps(e);return d(Y,f({_as:"VTabsWindow"},l,{modelValue:u.value,"onUpdate:modelValue":b=>u.value=b,class:"v-tabs-window",mandatory:!1,touch:!1}),a)}),{}}}),Me=P({...Pe()},"VTabsWindowItem"),je=B()({name:"VTabsWindowItem",props:Me(),setup(e,n){let{slots:a}=n;return q(()=>{const t=H.filterProps(e);return d(H,f({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function Oe(e){return e?e.map(n=>$e(n)?n:{text:n,value:n}):[]}const Ge=P({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force",selectedClass:"v-tab-item--selected"}),...qe(),...Ne()},"VTabs"),Le=B()({name:"VTabs",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=te(e,"modelValue"),r=x(()=>Oe(e.items)),{densityClasses:u}=Ee(e),{backgroundColorClasses:l,backgroundColorStyles:b}=he(T(e,"bgColor"));return We({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),q(()=>{const m=X.filterProps(e),C=!!(a.window||e.items.length>0);return d(z,null,[d(X,f(m,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},u.value,l.value,e.class],style:[{"--v-tabs-height":ke(e.height)},b.value,e.style],role:"tablist",symbol:A}),{default:()=>{var i;return[((i=a.default)==null?void 0:i.call(a))??r.value.map(o=>{var s;return((s=a.tab)==null?void 0:s.call(a,{item:o}))??d(oe,f(o,{key:o.text,value:o.value}),{default:()=>{var p;return(p=a[`tab.${o.value}`])==null?void 0:p.call(a,{item:o})}})})]}}),C&&d(Ae,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,key:"tabs-window"},{default:()=>{var i;return[r.value.map(o=>{var s;return((s=a.item)==null?void 0:s.call(a,{item:o}))??d(je,{value:o.value},{default:()=>{var p;return(p=a[`item.${o.value}`])==null?void 0:p.call(a,{item:o})}})}),(i=a.window)==null?void 0:i.call(a)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:D.Primary}},setup(e){const{getChildren:n}=ye(),{getColors:a}=Fe(),t=x(()=>a(e.color)),r=a(D.Dark);return{style:x(()=>({"--fs-group-color":r.base,"--fs-group-disabled-color":r.light,"--fs-group-hover-background-color":t.value.light,"--fs-group-hover-color":r.dark,"--fs-group-light":t.value.light,"--fs-group-base":t.value.base,"--fs-group-dark":t.value.dark,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast})),getChildren:n}}});function Ye(e,n,a,t,r,u){return c(),g(Le,f({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":n[0]||(n[0]=l=>e.$emit("update:tab",l))},e.$attrs),{default:S(()=>[(c(!0),Se(z,null,fe(e.getChildren(),l=>(c(),g(ve(l)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const re=ee(le,[["render",Ye]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const se=Z({name:"FSTab",components:{FSSpan:R,FSIcon:U,FSRow:ne},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:D.Dark}}});function He(e,n,a,t,r,u){return c(),g(oe,f({class:"fs-tab",ripple:!1},e.$attrs),{default:S(()=>[h(e.$slots,"default",{},()=>[d(ne,{align:"center-left"},{default:S(()=>[h(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(c(),g(U,{key:0,size:"m"},{default:S(()=>[$(W(e.$props.prependIcon),1)]),_:1})):V("",!0)]),h(e.$slots,"default",{},()=>[e.$props.label?(c(),g(R,{key:0,font:"text-button"},{default:S(()=>[$(W(e.$props.label),1)]),_:1})):V("",!0)]),e.$props.tag?(c(),g(De,{key:0})):V("",!0),h(e.$slots,"tag",{},()=>[e.$props.tag?(c(),g(R,{key:0,class:"fs-tab-tag"},{default:S(()=>[$(W(e.$props.tag),1)]),_:1})):V("",!0)]),h(e.$slots,"append",{},()=>[e.$props.appendIcon?(c(),g(U,{key:0,size:"m"},{default:S(()=>[$(W(e.$props.appendIcon),1)]),_:1})):V("",!0)])]),_:3})])]),_:3},16)}const Xe=ee(se,[["render",He]]);se.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const za={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},_={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:n})=>({components:{FSTabs:re,FSTab:Xe,FSText:ge,FSWindow:pe,FSCol:Re},props:Object.keys(n),setup(){return{...e}},template:`
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
      FSCol
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
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Aa=["Variations"];export{_ as Variations,Aa as __namedExportsOrder,za as default};
