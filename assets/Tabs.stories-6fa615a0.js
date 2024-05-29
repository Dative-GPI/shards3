import{F as me}from"./FSSlideGroup-ce06c6c2.js";import{F as Fe}from"./FSFadeOut-ad56c427.js";import{F as pe}from"./FSButton-ecc11eb7.js";import{m as ge,V as A,a as Te,b as j,F as ve}from"./FSWindow-ff92c6fb.js";import{F as fe}from"./FSText-92e9b97f.js";import{j as Y,g as h,A as u,F as z,B as g,e as Be,x as T,f as Z,J as b,K as p,L as v,M as xe,Y as ye,v as he,V as C,O as W,P as $,N as I}from"./vue.esm-bundler-cd768bc3.js";import{C as L,u as we}from"./useColors-91ab292c.js";import{u as Ce}from"./useSlots-2af30a3d.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ie,V as H}from"./VBtn-c02fe116.js";import{a as Ve,b as ke}from"./color-4e667524.js";import{f as We,a as $e,s as Pe}from"./forwardRefs-e658ad70.js";import{p as _,C as te,c as _e,A as Oe}from"./theme-33f5ac1a.js";import{g as O,u as q,p as qe}from"./useRender-b3fd6f8b.js";import{u as ae}from"./proxiedModel-80cf7d0e.js";import{m as Ge,a as X}from"./VSlideGroup-cd82e4b3.js";import{m as Ee,u as Le}from"./density-80e773e2.js";import{u as Ne}from"./scopeId-7a393669.js";import{m as De}from"./tag-bc86e39f.js";import{_ as N}from"./FSSpan-da6dde8e.js";import{_ as D}from"./FSIcon-203715fb.js";import{_ as ne}from"./FSRow-1d7c2545.js";import{V as ze}from"./VSpacer-0c52efc7.js";import{_ as Me}from"./FSCol-ff457bc3.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./css-c2ea3b68.js";import"./VSlideGroupItem-249d9261.js";import"./group-9e3f1093.js";import"./useDebounce-8f204f15.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./locale-d1b7e37d.js";import"./lazy-07480c2b.js";import"./ssrBoot-a9e4f1d0.js";import"./transition-2948fa2b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./dimensions-9d1d90d7.js";import"./loader-3bcfb6cd.js";import"./anchor-9469ffd7.js";import"./router-12edcf18.js";import"./index-f4fa4c36.js";import"./VDefaultsProvider-22eb0e57.js";import"./index-055d6469.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";const M=Symbol.for("vuetify:v-tabs"),Re=_({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...te(Ie({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=O()({name:"VTab",props:Re(),setup(e,a){let{slots:r,attrs:t}=a;const{textColorClasses:l,textColorStyles:d}=Ve(e,"sliderColor"),n=Y(),c=Y(),S=h(()=>e.direction==="horizontal"),w=h(()=>{var m,o;return((o=(m=n.value)==null?void 0:m.group)==null?void 0:o.isSelected.value)??!1});function G(m){var i,F;let{value:o}=m;if(o){const s=(F=(i=n.value)==null?void 0:i.$el.parentElement)==null?void 0:F.querySelector(".v-tab--selected .v-tab__slider"),E=c.value;if(!s||!E)return;const ue=getComputedStyle(s).color,f=s.getBoundingClientRect(),B=E.getBoundingClientRect(),V=S.value?"x":"y",k=S.value?"X":"Y",R=S.value?"right":"bottom",x=S.value?"width":"height",de=f[V],se=B[V],y=de>se?f[R]-B[R]:f[V]-B[V],be=Math.sign(y)>0?S.value?"right":"bottom":Math.sign(y)<0?S.value?"left":"top":"center",ce=(Math.abs(y)+(Math.sign(y)<0?f[x]:B[x]))/Math.max(f[x],B[x])||0,Se=f[x]/B[x]||0,U=1.5;$e(E,{backgroundColor:[ue,"currentcolor"],transform:[`translate${k}(${y}px) scale${k}(${Se})`,`translate${k}(${y/U}px) scale${k}(${(ce-1)/U+1})`,"none"],transformOrigin:Array(3).fill(be)},{duration:225,easing:Pe})}}return q(()=>{const m=H.filterProps(e);return u(H,g({symbol:M,ref:n,class:["v-tab",e.class],style:e.style,tabindex:w.value?0:-1,role:"tab","aria-selected":String(w.value),active:!1},m,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":G}),{...r,default:()=>{var o;return u(z,null,[((o=r.default)==null?void 0:o.call(r))??e.text,!e.hideSlider&&u("div",{ref:c,class:["v-tab__slider",l.value],style:d.value},null)])}})}),We({},n)}});const Ue=_({...te(ge(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Ae=O()({name:"VTabsWindow",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const t=Be(M,null),l=ae(e,"modelValue"),d=h({get(){var n;return l.value!=null||!t?l.value:(n=t.items.value.find(c=>t.selected.value.includes(c.id)))==null?void 0:n.value},set(n){l.value=n}});return q(()=>{const n=A.filterProps(e);return u(A,g({_as:"VTabsWindow"},n,{modelValue:d.value,"onUpdate:modelValue":c=>d.value=c,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),r)}),{}}}),je=_({...Te()},"VTabsWindowItem"),Ye=O()({name:"VTabsWindowItem",props:je(),setup(e,a){let{slots:r}=a;return q(()=>{const t=j.filterProps(e);return u(j,g({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),r)}),{}}});function He(e){return e?e.map(a=>Oe(a)?a:{text:a,value:a}):[]}const Xe=_({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ge({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Ee(),...De()},"VTabs"),Je=O()({name:"VTabs",props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:r,slots:t}=a;const l=ae(e,"modelValue"),d=h(()=>He(e.items)),{densityClasses:n}=Le(e),{backgroundColorClasses:c,backgroundColorStyles:S}=ke(T(e,"bgColor")),{scopeId:w}=Ne();return qe({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),q(()=>{const G=X.filterProps(e),m=!!(t.window||e.items.length>0);return u(z,null,[u(X,g(G,{modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},n.value,c.value,e.class],style:[{"--v-tabs-height":_e(e.height)},S.value,e.style],role:"tablist",symbol:M},w,r),{default:()=>{var o;return[((o=t.default)==null?void 0:o.call(t))??d.value.map(i=>{var F;return((F=t.tab)==null?void 0:F.call(t,{item:i}))??u(oe,g(i,{key:i.text,value:i.value}),{default:()=>{var s;return(s=t[`tab.${i.value}`])==null?void 0:s.call(t,{item:i})}})})]}}),m&&u(Ae,g({modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,key:"tabs-window"},w),{default:()=>{var o;return[d.value.map(i=>{var F;return((F=t.item)==null?void 0:F.call(t,{item:i}))??u(Ye,{value:i.value},{default:()=>{var s;return(s=t[`item.${i.value}`])==null?void 0:s.call(t,{item:i})}})}),(o=t.window)==null?void 0:o.call(t)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:L.Primary}},setup(e){const{getChildren:a}=Ce(),{getColors:r}=we(),t=h(()=>r(e.color)),l=r(L.Dark);return{style:h(()=>({"--fs-group-color":l.base,"--fs-group-disabled-color":l.light,"--fs-group-hover-background-color":t.value.light,"--fs-group-hover-color":l.dark,"--fs-group-light":t.value.light,"--fs-group-base":t.value.base,"--fs-group-dark":t.value.dark,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast})),getChildren:a}}});function Ke(e,a,r,t,l,d){return b(),p(Je,g({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:v(()=>[(b(!0),xe(z,null,ye(e.getChildren(),n=>(b(),p(he(n)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const re=ee(le,[["render",Ke]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ie=Z({name:"FSTab",components:{FSSpan:N,FSIcon:D,FSRow:ne},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:L.Dark}}});function Qe(e,a,r,t,l,d){return b(),p(oe,g({class:"fs-tab",ripple:!1},e.$attrs),{default:v(()=>[C(e.$slots,"default",{},()=>[u(ne,{align:"center-left"},{default:v(()=>[C(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(b(),p(D,{key:0,size:"m"},{default:v(()=>[W($(e.$props.prependIcon),1)]),_:1})):I("",!0)]),C(e.$slots,"default",{},()=>[e.$props.label?(b(),p(N,{key:0,font:"text-button"},{default:v(()=>[W($(e.$props.label),1)]),_:1})):I("",!0)]),e.$props.tag?(b(),p(ze,{key:0})):I("",!0),C(e.$slots,"tag",{},()=>[e.$props.tag?(b(),p(N,{key:0,class:"fs-tab-tag"},{default:v(()=>[W($(e.$props.tag),1)]),_:1})):I("",!0)]),C(e.$slots,"append",{},()=>[e.$props.appendIcon?(b(),p(D,{key:0,size:"m"},{default:v(()=>[W($(e.$props.appendIcon),1)]),_:1})):I("",!0)])]),_:3})])]),_:3},16)}const Ze=ee(ie,[["render",Qe]]);ie.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Zt={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:re,FSTab:Ze,FSText:fe,FSWindow:ve,FSCol:Me,FSFadeOut:Fe,FSSlideGroup:me,FSButton:pe},props:Object.keys(a),setup(){return{...e}},template:`
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

        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab4" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
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
      FSFadeOut,
      FSSlideGroup,
      FSButton
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

        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab4" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ea=["Variations"];export{P as Variations,ea as __namedExportsOrder,Zt as default};
