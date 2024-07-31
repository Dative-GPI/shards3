import{F as ue}from"./FSSlideGroup-zMKQpTZ9.js";import{F as se}from"./FSFadeOut-CvvHY5il.js";import{F as be}from"./FSButton-DI_m72P8.js";import{F as ce}from"./FSWindow-B5bWszEG.js";import{F as Se}from"./FSText-BZ0dNgPI.js";import{b as N,c as x,I as f,F as Fe,m as y,l as u,d as A,z as s,A as b,B as c,J as v,E as I,G as k,D as B}from"./vue.esm-bundler-DC82FEWN.js";import{C as V,u as me}from"./useColors-C2RWUFtR.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as pe,V as z}from"./VBtn-x8pr1gDk.js";import{g as H,b as ge,u as X,c as Te,p as ve}from"./color-DvJT0EEa.js";import{f as fe,a as Be,s as xe}from"./forwardRefs-DWGaNmQL.js";import{p as Y,o as ye,c as he,n as Ce}from"./theme-B5x8xkbY.js";import{m as we,V as D}from"./VSlideGroup-DIpxwRsS.js";import{m as Ie,u as ke}from"./density-CFGlRMM_.js";import{u as $e}from"./proxiedModel-slW9zgh3.js";import{m as Ve}from"./VIcon-Dc-dFojD.js";import{_}from"./FSSpan-CEjD71wr.js";import{_ as P}from"./FSIcon-ClfMDAJS.js";import{_ as J}from"./FSRow-DoCXWKDP.js";import{V as We}from"./VSpacer-BjECYW1K.js";import{_ as Oe}from"./FSCol-B7HQy3FB.js";import"./uuid-DTaye2KM.js";import"./useSlots-Dr5tdD4b.js";import"./css-DYOPUjjE.js";import"./group-szJg_hPo.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./VProgressCircular-C-U4HXtE.js";import"./locale-BC9z6YbT.js";import"./lazy-Cw6rrZWC.js";import"./ssrBoot-D90vJCps.js";import"./transition-yl3lVN6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./rounded-YB6K8mOp.js";import"./dimensions-Dnxg3zhh.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./router-DFGAHh1d.js";import"./index-9jSorrJj.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./index-CvDsTioR.js";import"./display-B8HpKdBf.js";const K=Symbol.for("vuetify:v-tabs"),_e=Y({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ye(pe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Q=H()({name:"VTab",props:_e(),setup(e,t){let{slots:a,attrs:o}=t;const{textColorClasses:n,textColorStyles:S}=ge(e,"sliderColor"),l=N(),h=N(),r=x(()=>e.direction==="horizontal"),i=x(()=>{var F,d;return((d=(F=l.value)==null?void 0:F.group)==null?void 0:d.isSelected.value)??!1});function ae(F){var q,G;let{value:d}=F;if(d){const W=(G=(q=l.value)==null?void 0:q.$el.parentElement)==null?void 0:G.querySelector(".v-tab--selected .v-tab__slider"),O=h.value;if(!W||!O)return;const ne=getComputedStyle(W).color,m=W.getBoundingClientRect(),p=O.getBoundingClientRect(),C=r.value?"x":"y",w=r.value?"X":"Y",E=r.value?"right":"bottom",g=r.value?"width":"height",oe=m[C],le=p[C],T=oe>le?m[E]-p[E]:m[C]-p[C],re=Math.sign(T)>0?r.value?"right":"bottom":Math.sign(T)<0?r.value?"left":"top":"center",ie=(Math.abs(T)+(Math.sign(T)<0?m[g]:p[g]))/Math.max(m[g],p[g])||0,de=m[g]/p[g]||0,L=1.5;Be(O,{backgroundColor:[ne,"currentcolor"],transform:[`translate${w}(${T}px) scale${w}(${de})`,`translate${w}(${T/L}px) scale${w}(${(ie-1)/L+1})`,"none"],transformOrigin:Array(3).fill(re)},{duration:225,easing:xe})}}return X(()=>{const F=z.filterProps(e);return f(z,y({symbol:K,ref:l,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},F,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":ae}),{...a,default:()=>{var d;return f(Fe,null,[((d=a.default)==null?void 0:d.call(a))??e.text,!e.hideSlider&&f("div",{ref:h,class:["v-tab__slider",n.value],style:S.value},null)])}})}),fe({},l)}});function Pe(e){return e?e.map(t=>Ce(t)?t:{text:t,value:t}):[]}const qe=Y({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...we({mandatory:"force"}),...Ie(),...Ve()},"VTabs"),Ge=H()({name:"VTabs",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const o=$e(e,"modelValue"),n=x(()=>Pe(e.items)),{densityClasses:S}=ke(e),{backgroundColorClasses:l,backgroundColorStyles:h}=Te(u(e,"bgColor"));return ve({VTab:{color:u(e,"color"),direction:u(e,"direction"),stacked:u(e,"stacked"),fixed:u(e,"fixedTabs"),sliderColor:u(e,"sliderColor"),hideSlider:u(e,"hideSlider")}}),X(()=>{const r=D.filterProps(e);return f(D,y(r,{modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},S.value,l.value,e.class],style:[{"--v-tabs-height":he(e.height)},h.value,e.style],role:"tablist",symbol:K}),{default:()=>[a.default?a.default():n.value.map(i=>f(Q,y(i,{key:i.text}),null))]})}),{}}}),Z=A({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:V.Primary}},setup(e){const{getColors:t}=me(),a=x(()=>t(e.color)),o=t(V.Light),n=t(V.Dark);return{style:x(()=>({"--fs-group-color":n.soft,"--fs-group-hover-color":n.dark,"--fs-tab-border-color":o.dark,"--fs-tab-hover-border-color":n.dark,"--fs-tab-active-background-color":a.value.light,"--fs-tab-tag-background-color":a.value.base,"--fs-tab-tag-color":a.value.baseContrast}))}}});function Ee(e,t,a,o,n,S){return s(),b(Ge,y({selectedClass:"fs-tab-active",class:"fs-tabs",sliderColor:e.$props.color,showArrows:!0,style:e.style,grow:!0,modelValue:e.$props.tab,"onUpdate:modelValue":t[0]||(t[0]=l=>e.$emit("update:tab",l))},e.$attrs),{default:c(()=>[v(e.$slots,"default")]),_:3},16,["sliderColor","style","modelValue"])}const ee=j(Z,[["render",Ee]]);Z.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=A({name:"FSTab",components:{FSSpan:_,FSIcon:P,FSRow:J},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:V.Dark}}});function Le(e,t,a,o,n,S){return s(),b(Q,y({class:"fs-tab",ripple:!1},e.$attrs),{default:c(()=>[v(e.$slots,"default",{},()=>[f(J,{align:"center-left"},{default:c(()=>[v(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(s(),b(P,{key:0,size:"m"},{default:c(()=>[I(k(e.$props.prependIcon),1)]),_:1})):B("",!0)]),v(e.$slots,"default",{},()=>[e.$props.label?(s(),b(_,{key:0,font:"text-button"},{default:c(()=>[I(k(e.$props.label),1)]),_:1})):B("",!0)]),e.$props.tag?(s(),b(We,{key:0})):B("",!0),v(e.$slots,"tag",{},()=>[e.$props.tag?(s(),b(_,{key:0,class:"fs-tab-tag"},{default:c(()=>[I(k(e.$props.tag),1)]),_:1})):B("",!0)]),v(e.$slots,"append",{},()=>[e.$props.appendIcon?(s(),b(P,{key:0,size:"m"},{default:c(()=>[I(k(e.$props.appendIcon),1)]),_:1})):B("",!0)])]),_:3})])]),_:3},16)}const Ne=j(te,[["render",Le]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Ot={title:"Foundation/Shared/Tabs",component:ee,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},$={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3,tab5:0}},render:(e,{argTypes:t})=>({components:{FSTabs:ee,FSTab:Ne,FSText:Se,FSWindow:ce,FSCol:Oe,FSFadeOut:se,FSSlideGroup:ue,FSButton:be},props:Object.keys(t),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab5" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab5" width="100%">
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
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab5" width="100%">
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
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab5" width="100%">
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
      tab4: 3,
      tab5: 0
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
            <FSTabs v-model:tab="args.tab5" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab5" width="100%">
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
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab5" width="100%">
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
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab5" width="100%">
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
}`,...(U=(M=$.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const _t=["Variations"];export{$ as Variations,_t as __namedExportsOrder,Ot as default};
