import{_ as pe}from"./FSWindow-2777e132.js";import{F as ge}from"./FSText-833d800f.js";import{d as G,e as h,A as i,F as M,B as S,g as Te,x as f,j as Z,J as c,K as T,L as v,Q as Se,Z as fe,v as ve,R as C,U as W,V as _,N as I}from"./vue.esm-bundler-41eda46b.js";import{C as D,u as Fe}from"./useColors-c7c61044.js";import{u as ye}from"./useSlots-e8ea556e.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as we,V as L}from"./VBtn-3461afbb.js";import{a as xe,b as he}from"./color-92f22fcc.js";import{f as Ve,a as Ce,s as Ie}from"./forwardRefs-e658ad70.js";import{p as B,B as ae,c as ke,z as $e}from"./theme-720d9fd7.js";import{g as q,u as E,p as We}from"./useRender-55bb8ab6.js";import{m as _e,V as H,b as Pe,a as X}from"./VWindowItem-1a6a4277.js";import{u as te}from"./proxiedModel-a34e17b7.js";import{m as Be,V as Y}from"./VSlideGroup-be2a9962.js";import{m as qe,u as Ee}from"./density-a7a72377.js";import{u as Ne}from"./scopeId-862e559a.js";import{m as ze}from"./tag-984e6215.js";import{_ as R}from"./FSSpan-8af5ddcc.js";import{_ as U}from"./FSIcon-33b1b769.js";import{_ as oe}from"./FSRow-1508d56d.js";import{V as De}from"./VSpacer-19440644.js";import{_ as Re}from"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-ac5393da.js";import"./elevation-c799c3f5.js";import"./rounded-e85715e4.js";import"./group-4938f20b.js";import"./dimensions-9ac12c80.js";import"./loader-0baaac91.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./locale-850d67a0.js";import"./router-4498b821.js";import"./index-1668950c.js";import"./VDefaultsProvider-b40931ed.js";import"./lazy-5500c0d6.js";import"./ssrBoot-5c61be23.js";import"./transition-a4f3f1b4.js";import"./index-3d73431e.js";import"./display-a55575e0.js";import"./goto-e333168a.js";const j=Symbol.for("vuetify:v-tabs"),Ue=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ae(we({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ne=q()({name:"VTab",props:Ue(),setup(e,t){let{slots:r,attrs:a}=t;const{textColorClasses:l,textColorStyles:d}=xe(e,"sliderColor"),o=G(),b=G(),m=h(()=>e.direction==="horizontal"),V=h(()=>{var p,n;return((n=(p=o.value)==null?void 0:p.group)==null?void 0:n.isSelected.value)??!1});function N(p){var s,g;let{value:n}=p;if(n){const u=(g=(s=o.value)==null?void 0:s.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),z=b.value;if(!u||!z)return;const ie=getComputedStyle(u).color,F=u.getBoundingClientRect(),y=z.getBoundingClientRect(),k=m.value?"x":"y",$=m.value?"X":"Y",A=m.value?"right":"bottom",w=m.value?"width":"height",de=F[k],ue=y[k],x=de>ue?F[A]-y[A]:F[k]-y[k],ce=Math.sign(x)>0?m.value?"right":"bottom":Math.sign(x)<0?m.value?"left":"top":"center",be=(Math.abs(x)+(Math.sign(x)<0?F[w]:y[w]))/Math.max(F[w],y[w])||0,me=F[w]/y[w]||0,O=1.5;Ce(z,{backgroundColor:[ie,"currentcolor"],transform:[`translate${$}(${x}px) scale${$}(${me})`,`translate${$}(${x/O}px) scale${$}(${(be-1)/O+1})`,"none"],transformOrigin:Array(3).fill(ce)},{duration:225,easing:Ie})}}return E(()=>{const p=L.filterProps(e);return i(L,S({symbol:j,ref:o,class:["v-tab",e.class],style:e.style,tabindex:V.value?0:-1,role:"tab","aria-selected":String(V.value),active:!1},p,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":N}),{...r,default:()=>{var n;return i(M,null,[((n=r.default)==null?void 0:n.call(r))??e.text,!e.hideSlider&&i("div",{ref:b,class:["v-tab__slider",l.value],style:d.value},null)])}})}),Ve({},o)}});const Me=B({...ae(_e(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),je=q()({name:"VTabsWindow",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:r}=t;const a=Te(j,null),l=te(e,"modelValue"),d=h({get(){var o;return l.value!=null||!a?l.value:(o=a.items.value.find(b=>a.selected.value.includes(b.id)))==null?void 0:o.value},set(o){l.value=o}});return E(()=>{const o=H.filterProps(e);return i(H,S({_as:"VTabsWindow"},o,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),r)}),{}}}),Ae=B({...Pe()},"VTabsWindowItem"),Oe=q()({name:"VTabsWindowItem",props:Ae(),setup(e,t){let{slots:r}=t;return E(()=>{const a=X.filterProps(e);return i(X,S({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),r)}),{}}});function Ge(e){return e?e.map(t=>$e(t)?t:{text:t,value:t}):[]}const Le=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Be({mandatory:"force",selectedClass:"v-tab-item--selected"}),...qe(),...ze()},"VTabs"),He=q()({name:"VTabs",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:r,slots:a}=t;const l=te(e,"modelValue"),d=h(()=>Ge(e.items)),{densityClasses:o}=Ee(e),{backgroundColorClasses:b,backgroundColorStyles:m}=he(f(e,"bgColor")),{scopeId:V}=Ne();return We({VTab:{color:f(e,"color"),direction:f(e,"direction"),stacked:f(e,"stacked"),fixed:f(e,"fixedTabs"),sliderColor:f(e,"sliderColor"),hideSlider:f(e,"hideSlider")}}),E(()=>{const N=Y.filterProps(e),p=!!(a.window||e.items.length>0);return i(M,null,[i(Y,S(N,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,b.value,e.class],style:[{"--v-tabs-height":ke(e.height)},m.value,e.style],role:"tablist",symbol:j},V,r),{default:()=>{var n;return[((n=a.default)==null?void 0:n.call(a))??d.value.map(s=>{var g;return((g=a.tab)==null?void 0:g.call(a,{item:s}))??i(ne,S(s,{key:s.text,value:s.value}),{default:()=>{var u;return(u=a[`tab.${s.value}`])==null?void 0:u.call(a,{item:s})}})})]}}),p&&i(je,S({modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,key:"tabs-window"},V),{default:()=>{var n;return[d.value.map(s=>{var g;return((g=a.item)==null?void 0:g.call(a,{item:s}))??i(Oe,{value:s.value},{default:()=>{var u;return(u=a[`item.${s.value}`])==null?void 0:u.call(a,{item:s})}})}),(n=a.window)==null?void 0:n.call(a)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:D.Primary}},setup(e){const{getChildren:t}=ye(),{getColors:r}=Fe(),a=h(()=>r(e.color)),l=r(D.Dark);return{style:h(()=>({"--fs-group-color":l.base,"--fs-group-disabled-color":l.light,"--fs-group-hover-background-color":a.value.light,"--fs-group-hover-color":l.dark,"--fs-group-light":a.value.light,"--fs-group-base":a.value.base,"--fs-group-dark":a.value.dark,"--fs-tab-tag-background-color":a.value.base,"--fs-tab-tag-color":a.value.baseContrast})),getChildren:t}}});function Xe(e,t,r,a,l,d){return c(),T(He,S({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:tab",o))},e.$attrs),{default:v(()=>[(c(!0),Se(M,null,fe(e.getChildren(),o=>(c(),T(ve(o)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const re=ee(le,[["render",Xe]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const se=Z({name:"FSTab",components:{FSSpan:R,FSIcon:U,FSRow:oe},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:D.Dark}}});function Ye(e,t,r,a,l,d){return c(),T(ne,S({class:"fs-tab",ripple:!1},e.$attrs),{default:v(()=>[C(e.$slots,"default",{},()=>[i(oe,{align:"center-left"},{default:v(()=>[C(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(c(),T(U,{key:0,size:"m"},{default:v(()=>[W(_(e.$props.prependIcon),1)]),_:1})):I("",!0)]),C(e.$slots,"default",{},()=>[e.$props.label?(c(),T(R,{key:0,font:"text-button"},{default:v(()=>[W(_(e.$props.label),1)]),_:1})):I("",!0)]),e.$props.tag?(c(),T(De,{key:0})):I("",!0),C(e.$slots,"tag",{},()=>[e.$props.tag?(c(),T(R,{key:0,class:"fs-tab-tag"},{default:v(()=>[W(_(e.$props.tag),1)]),_:1})):I("",!0)]),C(e.$slots,"append",{},()=>[e.$props.appendIcon?(c(),T(U,{key:0,size:"m"},{default:v(()=>[W(_(e.$props.appendIcon),1)]),_:1})):I("",!0)])]),_:3})])]),_:3},16)}const Je=ee(se,[["render",Ye]]);se.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ja={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:t})=>({components:{FSTabs:re,FSTab:Je,FSText:ge,FSWindow:pe,FSCol:Re},props:Object.keys(t),setup(){return{...e}},template:`
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
    `})};var J,K,Q;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Aa=["Variations"];export{P as Variations,Aa as __namedExportsOrder,ja as default};
