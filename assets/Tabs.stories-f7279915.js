import{F as pe}from"./FSFadeOut-77aed403.js";import{m as Se,V as A,a as ge,b as G,_ as Te}from"./FSWindow-c222eb4f.js";import{F as Fe}from"./FSText-f60941a6.js";import{d as H,e as w,A as s,F as R,B as T,g as ve,x as F,j as Z,J as c,K as g,L as v,Q as fe,Z as ye,v as xe,R as V,U as W,V as _,N as I}from"./vue.esm-bundler-41eda46b.js";import{C as z,u as he}from"./useColors-baaa98f5.js";import{u as we}from"./useSlots-e8ea556e.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ce,V as X}from"./VBtn-66b397c8.js";import{a as Ve,b as Ie}from"./color-45753032.js";import{f as ke,a as $e,s as We}from"./forwardRefs-e658ad70.js";import{p as B,B as ae,c as _e,z as Pe}from"./theme-be1bd2db.js";import{g as q,u as O,p as Be}from"./useRender-dd35ddd1.js";import{u as te}from"./proxiedModel-03601969.js";import{m as qe,V as Y}from"./VSlideGroup-aeb2e4a4.js";import{m as Oe,u as Ee}from"./density-b42ba92f.js";import{u as Ne}from"./scopeId-2fcf2157.js";import{m as ze}from"./tag-64b4b0e7.js";import{_ as D}from"./FSSpan-8af5ddcc.js";import{_ as L}from"./FSIcon-713345eb.js";import{_ as ne}from"./FSRow-1508d56d.js";import{V as De}from"./VSpacer-63a59a9e.js";import{_ as Le}from"./FSCol-282cc158.js";import"./useDebounce-c713d9ff.js";import"./css-35e8563f.js";import"./group-2589989a.js";import"./locale-84078765.js";import"./lazy-12081f09.js";import"./ssrBoot-5c61be23.js";import"./transition-695cd20f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-eea26164.js";import"./elevation-878f110a.js";import"./rounded-3de0fd3d.js";import"./dimensions-5b54e342.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./router-09f0866b.js";import"./index-4ba2035c.js";import"./VDefaultsProvider-7d12961d.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";const U=Symbol.for("vuetify:v-tabs"),Re=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ae(Ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=q()({name:"VTab",props:Re(),setup(e,t){let{slots:r,attrs:a}=t;const{textColorClasses:l,textColorStyles:d}=Ve(e,"sliderColor"),n=H(),b=H(),m=w(()=>e.direction==="horizontal"),C=w(()=>{var p,o;return((o=(p=n.value)==null?void 0:p.group)==null?void 0:o.isSelected.value)??!1});function E(p){var i,S;let{value:o}=p;if(o){const u=(S=(i=n.value)==null?void 0:i.$el.parentElement)==null?void 0:S.querySelector(".v-tab--selected .v-tab__slider"),N=b.value;if(!u||!N)return;const se=getComputedStyle(u).color,f=u.getBoundingClientRect(),y=N.getBoundingClientRect(),k=m.value?"x":"y",$=m.value?"X":"Y",M=m.value?"right":"bottom",x=m.value?"width":"height",de=f[k],ue=y[k],h=de>ue?f[M]-y[M]:f[k]-y[k],ce=Math.sign(h)>0?m.value?"right":"bottom":Math.sign(h)<0?m.value?"left":"top":"center",be=(Math.abs(h)+(Math.sign(h)<0?f[x]:y[x]))/Math.max(f[x],y[x])||0,me=f[x]/y[x]||0,j=1.5;$e(N,{backgroundColor:[se,"currentcolor"],transform:[`translate${$}(${h}px) scale${$}(${me})`,`translate${$}(${h/j}px) scale${$}(${(be-1)/j+1})`,"none"],transformOrigin:Array(3).fill(ce)},{duration:225,easing:We})}}return O(()=>{const p=X.filterProps(e);return s(X,T({symbol:U,ref:n,class:["v-tab",e.class],style:e.style,tabindex:C.value?0:-1,role:"tab","aria-selected":String(C.value),active:!1},p,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":E}),{...r,default:()=>{var o;return s(R,null,[((o=r.default)==null?void 0:o.call(r))??e.text,!e.hideSlider&&s("div",{ref:b,class:["v-tab__slider",l.value],style:d.value},null)])}})}),ke({},n)}});const Ue=B({...ae(Se(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Me=q()({name:"VTabsWindow",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:r}=t;const a=ve(U,null),l=te(e,"modelValue"),d=w({get(){var n;return l.value!=null||!a?l.value:(n=a.items.value.find(b=>a.selected.value.includes(b.id)))==null?void 0:n.value},set(n){l.value=n}});return O(()=>{const n=A.filterProps(e);return s(A,T({_as:"VTabsWindow"},n,{modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),r)}),{}}}),je=B({...ge()},"VTabsWindowItem"),Ae=q()({name:"VTabsWindowItem",props:je(),setup(e,t){let{slots:r}=t;return O(()=>{const a=G.filterProps(e);return s(G,T({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),r)}),{}}});function Ge(e){return e?e.map(t=>Pe(t)?t:{text:t,value:t}):[]}const He=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...qe({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Oe(),...ze()},"VTabs"),Xe=q()({name:"VTabs",props:He(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:r,slots:a}=t;const l=te(e,"modelValue"),d=w(()=>Ge(e.items)),{densityClasses:n}=Ee(e),{backgroundColorClasses:b,backgroundColorStyles:m}=Ie(F(e,"bgColor")),{scopeId:C}=Ne();return Be({VTab:{color:F(e,"color"),direction:F(e,"direction"),stacked:F(e,"stacked"),fixed:F(e,"fixedTabs"),sliderColor:F(e,"sliderColor"),hideSlider:F(e,"hideSlider")}}),O(()=>{const E=Y.filterProps(e),p=!!(a.window||e.items.length>0);return s(R,null,[s(Y,T(E,{modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},n.value,b.value,e.class],style:[{"--v-tabs-height":_e(e.height)},m.value,e.style],role:"tablist",symbol:U},C,r),{default:()=>{var o;return[((o=a.default)==null?void 0:o.call(a))??d.value.map(i=>{var S;return((S=a.tab)==null?void 0:S.call(a,{item:i}))??s(oe,T(i,{key:i.text,value:i.value}),{default:()=>{var u;return(u=a[`tab.${i.value}`])==null?void 0:u.call(a,{item:i})}})})]}}),p&&s(Me,T({modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,key:"tabs-window"},C),{default:()=>{var o;return[d.value.map(i=>{var S;return((S=a.item)==null?void 0:S.call(a,{item:i}))??s(Ae,{value:i.value},{default:()=>{var u;return(u=a[`item.${i.value}`])==null?void 0:u.call(a,{item:i})}})}),(o=a.window)==null?void 0:o.call(a)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:z.Primary}},setup(e){const{getChildren:t}=we(),{getColors:r}=he(),a=w(()=>r(e.color)),l=r(z.Dark);return{style:w(()=>({"--fs-group-color":l.base,"--fs-group-disabled-color":l.light,"--fs-group-hover-background-color":a.value.light,"--fs-group-hover-color":l.dark,"--fs-group-light":a.value.light,"--fs-group-base":a.value.base,"--fs-group-dark":a.value.dark,"--fs-tab-tag-background-color":a.value.base,"--fs-tab-tag-color":a.value.baseContrast})),getChildren:t}}});function Ye(e,t,r,a,l,d){return c(),g(Xe,T({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":t[0]||(t[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:v(()=>[(c(!0),fe(R,null,ye(e.getChildren(),n=>(c(),g(xe(n)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const re=ee(le,[["render",Ye]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ie=Z({name:"FSTab",components:{FSSpan:D,FSIcon:L,FSRow:ne},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:z.Dark}}});function Je(e,t,r,a,l,d){return c(),g(oe,T({class:"fs-tab",ripple:!1},e.$attrs),{default:v(()=>[V(e.$slots,"default",{},()=>[s(ne,{align:"center-left"},{default:v(()=>[V(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(c(),g(L,{key:0,size:"m"},{default:v(()=>[W(_(e.$props.prependIcon),1)]),_:1})):I("",!0)]),V(e.$slots,"default",{},()=>[e.$props.label?(c(),g(D,{key:0,font:"text-button"},{default:v(()=>[W(_(e.$props.label),1)]),_:1})):I("",!0)]),e.$props.tag?(c(),g(De,{key:0})):I("",!0),V(e.$slots,"tag",{},()=>[e.$props.tag?(c(),g(D,{key:0,class:"fs-tab-tag"},{default:v(()=>[W(_(e.$props.tag),1)]),_:1})):I("",!0)]),V(e.$slots,"append",{},()=>[e.$props.appendIcon?(c(),g(L,{key:0,size:"m"},{default:v(()=>[W(_(e.$props.appendIcon),1)]),_:1})):I("",!0)])]),_:3})])]),_:3},16)}const Ke=ee(ie,[["render",Je]]);ie.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const ja={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:t})=>({components:{FSTabs:re,FSTab:Ke,FSText:Fe,FSWindow:Te,FSCol:Le,FSFadeOut:pe},props:Object.keys(t),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Aa=["Variations"];export{P as Variations,Aa as __namedExportsOrder,ja as default};
