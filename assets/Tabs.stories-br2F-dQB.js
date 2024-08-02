import{F as J}from"./FSSlideGroup-B38R2y2I.js";import{F as K}from"./FSFadeOut-CvvHY5il.js";import{F as Q}from"./FSButton-ClOTuXeD.js";import{F as Z}from"./FSWindow-C9BMKErq.js";import{F as ee}from"./FSText-DzNuBvM6.js";import{b as z,c as B,I as f,F as fe,m as y,l as s,d as ae,z as u,A as b,B as S,J as g,E as I,G as W,D as x}from"./vue.esm-bundler-DC82FEWN.js";import{C as $,u as xe}from"./useColors-C2RWUFtR.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as Be,V as D}from"./VBtn-x8pr1gDk.js";import{g as ne,b as ye,u as oe,c as he,p as we}from"./color-DvJT0EEa.js";import{f as Ce,a as Ie,s as We}from"./forwardRefs-DWGaNmQL.js";import{p as le,o as Ve,c as ke,n as $e}from"./theme-B5x8xkbY.js";import{m as Oe,V as R}from"./VSlideGroup-DIpxwRsS.js";import{m as _e,u as Pe}from"./density-CFGlRMM_.js";import{u as qe}from"./proxiedModel-slW9zgh3.js";import{m as Ge}from"./VIcon-Dc-dFojD.js";import{_ as P}from"./FSSpan-CpNfN-10.js";import{_ as q}from"./FSIcon-ClfMDAJS.js";import{_ as re}from"./FSRow-DoCXWKDP.js";import{V as Ee}from"./VSpacer-BjECYW1K.js";import{_ as ie}from"./FSCol-B7HQy3FB.js";import"./uuid-DTaye2KM.js";import"./useSlots-DN9F4SV8.js";import"./css-DYOPUjjE.js";import"./group-szJg_hPo.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./VProgressCircular-C-U4HXtE.js";import"./locale-BC9z6YbT.js";import"./lazy-Cw6rrZWC.js";import"./ssrBoot-D90vJCps.js";import"./transition-yl3lVN6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./rounded-YB6K8mOp.js";import"./dimensions-Dnxg3zhh.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./router-DFGAHh1d.js";import"./index-9jSorrJj.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./index-CvDsTioR.js";import"./display-B8HpKdBf.js";const de=Symbol.for("vuetify:v-tabs"),Me=le({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ve(Be({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),se=ne()({name:"VTab",props:Me(),setup(e,a){let{slots:t,attrs:o}=a;const{textColorClasses:n,textColorStyles:F}=ye(e,"sliderColor"),l=z(),h=z(),r=B(()=>e.direction==="horizontal"),i=B(()=>{var c,d;return((d=(c=l.value)==null?void 0:c.group)==null?void 0:d.isSelected.value)??!1});function Fe(c){var E,M;let{value:d}=c;if(d){const O=(M=(E=l.value)==null?void 0:E.$el.parentElement)==null?void 0:M.querySelector(".v-tab--selected .v-tab__slider"),_=h.value;if(!O||!_)return;const ce=getComputedStyle(O).color,T=O.getBoundingClientRect(),m=_.getBoundingClientRect(),w=r.value?"x":"y",C=r.value?"X":"Y",L=r.value?"right":"bottom",p=r.value?"width":"height",Te=T[w],me=m[w],v=Te>me?T[L]-m[L]:T[w]-m[w],pe=Math.sign(v)>0?r.value?"right":"bottom":Math.sign(v)<0?r.value?"left":"top":"center",ve=(Math.abs(v)+(Math.sign(v)<0?T[p]:m[p]))/Math.max(T[p],m[p])||0,ge=T[p]/m[p]||0,N=1.5;Ie(_,{backgroundColor:[ce,"currentcolor"],transform:[`translate${C}(${v}px) scale${C}(${ge})`,`translate${C}(${v/N}px) scale${C}(${(ve-1)/N+1})`,"none"],transformOrigin:Array(3).fill(pe)},{duration:225,easing:We})}}return oe(()=>{const c=D.filterProps(e);return f(D,y({symbol:de,ref:l,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},c,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":Fe}),{...t,default:()=>{var d;return f(fe,null,[((d=t.default)==null?void 0:d.call(t))??e.text,!e.hideSlider&&f("div",{ref:h,class:["v-tab__slider",n.value],style:F.value},null)])}})}),Ce({},l)}});function Le(e){return e?e.map(a=>$e(a)?a:{text:a,value:a}):[]}const Ne=le({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Oe({mandatory:"force"}),..._e(),...Ge()},"VTabs"),ze=ne()({name:"VTabs",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=qe(e,"modelValue"),n=B(()=>Le(e.items)),{densityClasses:F}=Pe(e),{backgroundColorClasses:l,backgroundColorStyles:h}=he(s(e,"bgColor"));return we({VTab:{color:s(e,"color"),direction:s(e,"direction"),stacked:s(e,"stacked"),fixed:s(e,"fixedTabs"),sliderColor:s(e,"sliderColor"),hideSlider:s(e,"hideSlider")}}),oe(()=>{const r=R.filterProps(e);return f(R,y(r,{modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},F.value,l.value,e.class],style:[{"--v-tabs-height":ke(e.height)},h.value,e.style],role:"tablist",symbol:de}),{default:()=>[t.default?t.default():n.value.map(i=>f(se,y(i,{key:i.text}),null))]})}),{}}}),ue=ae({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:$.Primary}},setup(e){const{getColors:a}=xe(),t=B(()=>a(e.color)),o=a($.Light),n=a($.Dark);return{style:B(()=>({"--fs-group-color":n.soft,"--fs-group-hover-color":n.dark,"--fs-tab-border-color":o.dark,"--fs-tab-hover-border-color":n.dark,"--fs-tab-active-background-color":t.value.light,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast}))}}});function De(e,a,t,o,n,F){return u(),b(ze,y({selectedClass:"fs-tab-active",class:"fs-tabs",sliderColor:e.$props.color,showArrows:!0,style:e.style,grow:!0,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:tab",l))},e.$attrs),{default:S(()=>[g(e.$slots,"default")]),_:3},16,["sliderColor","style","modelValue"])}const G=te(ue,[["render",De]]);ue.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const be=ae({name:"FSTab",components:{FSSpan:P,FSIcon:q,FSRow:re},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:$.Dark}}});function Re(e,a,t,o,n,F){return u(),b(se,y({class:"fs-tab",ripple:!1},e.$attrs),{default:S(()=>[g(e.$slots,"default",{},()=>[f(re,{align:"center-left"},{default:S(()=>[g(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(u(),b(q,{key:0,size:"m"},{default:S(()=>[I(W(e.$props.prependIcon),1)]),_:1})):x("",!0)]),g(e.$slots,"default",{},()=>[e.$props.label?(u(),b(P,{key:0,font:"text-button"},{default:S(()=>[I(W(e.$props.label),1)]),_:1})):x("",!0)]),e.$props.tag?(u(),b(Ee,{key:0})):x("",!0),g(e.$slots,"tag",{},()=>[e.$props.tag?(u(),b(P,{key:0,class:"fs-tab-tag"},{default:S(()=>[I(W(e.$props.tag),1)]),_:1})):x("",!0)]),g(e.$slots,"append",{},()=>[e.$props.appendIcon?(u(),b(q,{key:0,size:"m"},{default:S(()=>[I(W(e.$props.appendIcon),1)]),_:1})):x("",!0)])]),_:3})])]),_:3},16)}const Se=te(be,[["render",Re]]);be.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Ga={title:"Foundation/Shared/Tabs",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3,tab5:0}},render:(e,{argTypes:a})=>({components:{FSTabs:G,FSTab:Se,FSText:ee,FSWindow:Z,FSCol:ie,FSFadeOut:K,FSSlideGroup:J,FSButton:Q},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})},k={args:{args:{tab1:0,tab2:0,tab3:0}},render:(e,{argTypes:a})=>({components:{FSTabs:G,FSTab:Se,FSText:ee,FSWindow:Z,FSCol:ie,FSFadeOut:K,FSSlideGroup:J,FSButton:Q},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Mix v-for and components, v-for first </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab1" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
          </FSTabs>
          <FSWindow :modelValue="args.tab1" width="100%">
            <FSText v-for="(arg, index) in 2" :value="index">
              Tab in v-for {{ index + 1 }}
            </FSText>
            <FSText :value="2">
              Tab outside of v-for
            </FSText>
          </FSWindow>
        </FSCol>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Mix v-for and components, v-for last </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab2" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
          </FSTabs>
          <FSWindow :modelValue="args.tab2" width="100%">
            <FSText :value="0">
              Tab outside of v-for
            </FSText>
            <FSText v-for="(arg, index) in 2" :value="index + 1">
              Tab in v-for {{ index + 2 }}
            </FSText>
          </FSWindow>
        </FSCol>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Mix v-for and components, v-for surrounded </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab3" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4" />
            <FSTab :value="4" label="Tab 5" />
          </FSTabs>
          <FSWindow :modelValue="args.tab3" width="100%">
            <FSText :value="0">
              Tab before v-for
            </FSText>
            <FSText v-for="(arg, index) in 3" :value="index + 1">
              Tab in v-for {{ index + 2 }}
            </FSText>
            <FSText :value="4">
              Tab after v-for
            </FSText>
          </FSWindow>
        </FSCol>
      </div>
    `})};var j,U,A;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(U=V.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var H,X,Y;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0,
      tab3: 0
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
        <FSText> Mix v-for and components, v-for first </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab1" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
          </FSTabs>
          <FSWindow :modelValue="args.tab1" width="100%">
            <FSText v-for="(arg, index) in 2" :value="index">
              Tab in v-for {{ index + 1 }}
            </FSText>
            <FSText :value="2">
              Tab outside of v-for
            </FSText>
          </FSWindow>
        </FSCol>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Mix v-for and components, v-for last </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab2" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
          </FSTabs>
          <FSWindow :modelValue="args.tab2" width="100%">
            <FSText :value="0">
              Tab outside of v-for
            </FSText>
            <FSText v-for="(arg, index) in 2" :value="index + 1">
              Tab in v-for {{ index + 2 }}
            </FSText>
          </FSWindow>
        </FSCol>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Mix v-for and components, v-for surrounded </FSText>
        <FSCol>
          <FSTabs v-model:tab="args.tab3" color="success">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4" />
            <FSTab :value="4" label="Tab 5" />
          </FSTabs>
          <FSWindow :modelValue="args.tab3" width="100%">
            <FSText :value="0">
              Tab before v-for
            </FSText>
            <FSText v-for="(arg, index) in 3" :value="index + 1">
              Tab in v-for {{ index + 2 }}
            </FSText>
            <FSText :value="4">
              Tab after v-for
            </FSText>
          </FSWindow>
        </FSCol>
      </div>
    \`
  })
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ea=["Variations","Tests"];export{k as Tests,V as Variations,Ea as __namedExportsOrder,Ga as default};
