import{F as se}from"./FSSlideGroup-C2ZnN_TW.js";import{F as be}from"./FSFadeOut-XCSRvsBX.js";import{F as ce}from"./FSButton-Qg63Bn8h.js";import{F as Se}from"./FSWindow-Bo6wAotL.js";import{F as Fe}from"./FSText-BUnAe0F7.js";import{b as N,c as y,I as f,F as A,m as h,l as c,d as j,z as r,A as d,B as S,C as me,N as pe,k as ge,J as B,E as I,G as k,D as x}from"./vue.esm-bundler-DC82FEWN.js";import{C as V,u as Te}from"./useColors-CErFNXJM.js";import{u as ve}from"./useSlots-V2mVelz6.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as fe,V as D}from"./VBtn-u1aQHI0Z.js";import{g as X,b as Be,u as Y,c as xe,p as ye}from"./color-C5d3UYhE.js";import{f as he,a as Ce,s as we}from"./forwardRefs-DWGaNmQL.js";import{p as J,o as Ie,c as ke,n as $e}from"./theme-DMal9AfS.js";import{m as Ve,V as z}from"./VSlideGroup-Ch4AqzX6.js";import{m as We,u as Oe}from"./density-oYDdQVKs.js";import{u as _e}from"./proxiedModel-BHphZos0.js";import{m as Pe}from"./VIcon-C6jgSf5f.js";import{_}from"./FSSpan-CwfDYIua.js";import{_ as P}from"./FSIcon-B9OmXzeb.js";import{_ as K}from"./FSRow-DoCXWKDP.js";import{V as qe}from"./VSpacer-NvTsfghw.js";import{_ as Ge}from"./FSCol-B7HQy3FB.js";import"./uuid-DTaye2KM.js";import"./css-DYOPUjjE.js";import"./group-dnu-odUE.js";import"./FSClickable-DvDb5RUi.js";import"./FSCard-dcNQ4DyO.js";import"./VProgressCircular-BvwZAexL.js";import"./locale-BC9z6YbT.js";import"./lazy-BmX3oan4.js";import"./ssrBoot-D90vJCps.js";import"./transition-DSqAHFz2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./border-Bvz87W_3.js";import"./elevation-xgrzvMGW.js";import"./rounded-jRyYRXzo.js";import"./dimensions-Dx7VlQQe.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./router-uZykNX6c.js";import"./index-DUaylBew.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./index-Drj2M_tW.js";import"./display-v5wGO8bo.js";const Q=Symbol.for("vuetify:v-tabs"),Ee=J({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ie(fe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Z=X()({name:"VTab",props:Ee(),setup(e,t){let{slots:a,attrs:o}=t;const{textColorClasses:u,textColorStyles:l}=Be(e,"sliderColor"),n=N(),F=N(),i=y(()=>e.direction==="horizontal"),s=y(()=>{var m,b;return((b=(m=n.value)==null?void 0:m.group)==null?void 0:b.isSelected.value)??!1});function ne(m){var q,G;let{value:b}=m;if(b){const W=(G=(q=n.value)==null?void 0:q.$el.parentElement)==null?void 0:G.querySelector(".v-tab--selected .v-tab__slider"),O=F.value;if(!W||!O)return;const oe=getComputedStyle(W).color,p=W.getBoundingClientRect(),g=O.getBoundingClientRect(),C=i.value?"x":"y",w=i.value?"X":"Y",E=i.value?"right":"bottom",T=i.value?"width":"height",le=p[C],re=g[C],v=le>re?p[E]-g[E]:p[C]-g[C],ie=Math.sign(v)>0?i.value?"right":"bottom":Math.sign(v)<0?i.value?"left":"top":"center",de=(Math.abs(v)+(Math.sign(v)<0?p[T]:g[T]))/Math.max(p[T],g[T])||0,ue=p[T]/g[T]||0,L=1.5;Ce(O,{backgroundColor:[oe,"currentcolor"],transform:[`translate${w}(${v}px) scale${w}(${ue})`,`translate${w}(${v/L}px) scale${w}(${(de-1)/L+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:we})}}return Y(()=>{const m=D.filterProps(e);return f(D,h({symbol:Q,ref:n,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1},m,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":ne}),{...a,default:()=>{var b;return f(A,null,[((b=a.default)==null?void 0:b.call(a))??e.text,!e.hideSlider&&f("div",{ref:F,class:["v-tab__slider",u.value],style:l.value},null)])}})}),he({},n)}});function Le(e){return e?e.map(t=>$e(t)?t:{text:t,value:t}):[]}const Ne=J({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ve({mandatory:"force"}),...We(),...Pe()},"VTabs"),De=X()({name:"VTabs",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const o=_e(e,"modelValue"),u=y(()=>Le(e.items)),{densityClasses:l}=Oe(e),{backgroundColorClasses:n,backgroundColorStyles:F}=xe(c(e,"bgColor"));return ye({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),Y(()=>{const i=z.filterProps(e);return f(z,h(i,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,n.value,e.class],style:[{"--v-tabs-height":ke(e.height)},F.value,e.style],role:"tablist",symbol:Q}),{default:()=>[a.default?a.default():u.value.map(s=>f(Z,h(s,{key:s.text}),null))]})}),{}}}),ee=j({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:V.Primary}},setup(e){const{getChildren:t}=ve(),{getColors:a}=Te(),o=y(()=>a(e.color)),u=a(V.Light),l=a(V.Dark);return{style:y(()=>({"--fs-group-color":l.soft,"--fs-group-hover-color":l.dark,"--fs-tab-border-color":u.dark,"--fs-tab-hover-border-color":l.dark,"--fs-tab-active-background-color":o.value.light,"--fs-tab-tag-background-color":o.value.base,"--fs-tab-tag-color":o.value.baseContrast})),getChildren:t}}});function ze(e,t,a,o,u,l){return r(),d(De,h({selectedClass:"fs-tab-active",class:"fs-tabs",sliderColor:e.$props.color,showArrows:!0,style:e.style,grow:!0,modelValue:e.$props.tab,"onUpdate:modelValue":t[0]||(t[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:S(()=>[(r(!0),me(A,null,pe(e.getChildren(),(n,F)=>(r(),d(ge(n),{key:F}))),128))]),_:1},16,["sliderColor","style","modelValue"])}const te=H(ee,[["render",ze]]);ee.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ae=j({name:"FSTab",components:{FSSpan:_,FSIcon:P,FSRow:K},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:V.Dark}}});function Re(e,t,a,o,u,l){return r(),d(Z,h({class:"fs-tab",ripple:!1},e.$attrs),{default:S(()=>[B(e.$slots,"default",{},()=>[f(K,{align:"center-left"},{default:S(()=>[B(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(r(),d(P,{key:0,size:"m"},{default:S(()=>[I(k(e.$props.prependIcon),1)]),_:1})):x("",!0)]),B(e.$slots,"default",{},()=>[e.$props.label?(r(),d(_,{key:0,font:"text-button"},{default:S(()=>[I(k(e.$props.label),1)]),_:1})):x("",!0)]),e.$props.tag?(r(),d(qe,{key:0})):x("",!0),B(e.$slots,"tag",{},()=>[e.$props.tag?(r(),d(_,{key:0,class:"fs-tab-tag"},{default:S(()=>[I(k(e.$props.tag),1)]),_:1})):x("",!0)]),B(e.$slots,"append",{},()=>[e.$props.appendIcon?(r(),d(P,{key:0,size:"m"},{default:S(()=>[I(k(e.$props.appendIcon),1)]),_:1})):x("",!0)])]),_:3})])]),_:3},16)}const Me=H(ae,[["render",Re]]);ae.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Gt={title:"Foundation/Shared/Tabs",component:te,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},$={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:t})=>({components:{FSTabs:te,FSTab:Me,FSText:Fe,FSWindow:Se,FSCol:Ge,FSFadeOut:be,FSSlideGroup:se,FSButton:ce},props:Object.keys(t),setup(){return{...e}},template:`
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
    `})};var R,M,U;$.parameters={...$.parameters,docs:{...(R=$.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(U=(M=$.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Et=["Variations"];export{$ as Variations,Et as __namedExportsOrder,Gt as default};
