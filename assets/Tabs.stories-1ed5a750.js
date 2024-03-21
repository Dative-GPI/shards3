import{_ as ue}from"./FSWindow-f17deee0.js";import{F as ce}from"./FSText-9a3c7352.js";import{d as R,j as h,z as v,F as L,x as C,E as c,g as A,K as r,L as i,M as b,Q as be,Z as me,D as pe,R as y,N as $,O as V,P as x}from"./vue.esm-bundler-0a1af505.js";import{C as B,u as ge}from"./useColors-128f3c4d.js";import{u as Se}from"./useSlots-de2ef136.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Te,V as M}from"./VBtn-bd41b5e0.js";import{u as fe,b as Fe}from"./color-68d45c69.js";import{f as ve,a as ye,s as xe}from"./forwardRefs-e658ad70.js";import{p as X,z as he,e as Ce,E as we}from"./theme-2d24b19c.js";import{g as Y,u as K,p as ke}from"./useRender-cc726afb.js";import{m as $e,V as O}from"./VSlideGroup-6393fefa.js";import{m as Ve,u as Ie}from"./density-99d9a31c.js";import{u as _e}from"./proxiedModel-7a45f3f8.js";import{m as We}from"./tag-e48f136a.js";import{_ as P}from"./FSSpan-50615fe3.js";import{_ as q}from"./FSIcon-8481a0c6.js";import{_ as Q}from"./FSRow-852c6353.js";import{V as Be}from"./VSpacer-a7d8920b.js";import{_ as Pe}from"./FSCol-5b91b447.js";import"./VWindowItem-91924032.js";import"./group-439abacb.js";import"./lazy-298c1133.js";import"./ssrBoot-e032939a.js";import"./transition-c9646b8b.js";import"./locale-767f04a5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-dd08b1f1.js";import"./elevation-eb45930f.js";import"./rounded-94c7156f.js";import"./dimensions-21b90dfd.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./router-817fd49a.js";import"./VIcon-a19d44fc.js";import"./index-0339a920.js";import"./VDefaultsProvider-0c713390.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./index-d90e6acb.js";import"./display-b22dea51.js";import"./css-415780ec.js";const Z=Symbol.for("vuetify:v-tabs"),qe=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...he(Te({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),J=Y()({name:"VTab",props:qe(),setup(e,a){let{slots:o,attrs:t}=a;const{textColorClasses:n,textColorStyles:m}=fe(e,"sliderColor"),l=R(),p=R(),s=h(()=>e.direction==="horizontal"),d=h(()=>{var g,u;return((u=(g=l.value)==null?void 0:g.group)==null?void 0:u.isSelected.value)??!1});function oe(g){var E,N;let{value:u}=g;if(u){const _=(N=(E=l.value)==null?void 0:E.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),W=p.value;if(!_||!W)return;const le=getComputedStyle(_).color,S=_.getBoundingClientRect(),T=W.getBoundingClientRect(),w=s.value?"x":"y",k=s.value?"X":"Y",z=s.value?"right":"bottom",f=s.value?"width":"height",ne=S[w],re=T[w],F=ne>re?S[z]-T[z]:S[w]-T[w],se=Math.sign(F)>0?s.value?"right":"bottom":Math.sign(F)<0?s.value?"left":"top":"center",ie=(Math.abs(F)+(Math.sign(F)<0?S[f]:T[f]))/Math.max(S[f],T[f])||0,de=S[f]/T[f]||0,D=1.5;ye(W,{backgroundColor:[le,"currentcolor"],transform:[`translate${k}(${F}px) scale${k}(${de})`,`translate${k}(${F/D}px) scale${k}(${(ie-1)/D+1})`,"none"],transformOrigin:Array(3).fill(se)},{duration:225,easing:xe})}}return K(()=>{const g=M.filterProps(e);return v(M,C({symbol:Z,ref:l,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},g,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":oe}),{...o,default:()=>{var u;return v(L,null,[((u=o.default)==null?void 0:u.call(o))??e.text,!e.hideSlider&&v("div",{ref:p,class:["v-tab__slider",n.value],style:m.value},null)])}})}),ve({},l)}});function Ee(e){return e?e.map(a=>we(a)?a:{text:a,value:a}):[]}const Ne=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ve(),...We()},"VTabs"),ze=Y()({name:"VTabs",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const t=_e(e,"modelValue"),n=h(()=>Ee(e.items)),{densityClasses:m}=Ie(e),{backgroundColorClasses:l,backgroundColorStyles:p}=Fe(c(e,"bgColor"));return ke({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),K(()=>{const s=O.filterProps(e);return v(O,C(s,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},m.value,l.value,e.class],style:[{"--v-tabs-height":Ce(e.height)},p.value,e.style],role:"tablist",symbol:Z}),{default:()=>[o.default?o.default():n.value.map(d=>v(J,C(d,{key:d.text}),null))]})}),{}}}),ee=A({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:B.Primary}},setup(e){const{getChildren:a}=Se(),{getColors:o}=ge(),t=h(()=>o(e.color)),n=o(B.Dark);return{style:h(()=>({"--fs-group-color":n.base,"--fs-group-disabled-color":n.light,"--fs-group-hover-background-color":t.value.light,"--fs-group-hover-color":n.dark,"--fs-group-light":t.value.light,"--fs-group-base":t.value.base,"--fs-group-dark":t.value.dark,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast})),getChildren:a}}});function De(e,a,o,t,n,m){return r(),i(ze,C({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:tab",l))},e.$attrs),{default:b(()=>[(r(!0),be(L,null,me(e.getChildren(),(l,p)=>(r(),i(pe(l),{key:p}))),128))]),_:1},16,["style","sliderColor","modelValue"])}const ae=H(ee,[["render",De]]);ee.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=A({name:"FSTab",components:{FSSpan:P,FSIcon:q,FSRow:Q},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:B.Dark}}});function Re(e,a,o,t,n,m){return r(),i(J,C({class:"fs-tab",ripple:!1},e.$attrs),{default:b(()=>[y(e.$slots,"default",{},()=>[v(Q,{align:"center-left"},{default:b(()=>[y(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(r(),i(q,{key:0,size:"m"},{default:b(()=>[$(V(e.$props.prependIcon),1)]),_:1})):x("",!0)]),y(e.$slots,"default",{},()=>[e.$props.label?(r(),i(P,{key:0,font:"text-button"},{default:b(()=>[$(V(e.$props.label),1)]),_:1})):x("",!0)]),e.$props.tag?(r(),i(Be,{key:0})):x("",!0),y(e.$slots,"tag",{},()=>[e.$props.tag?(r(),i(P,{key:0,class:"fs-tab-tag"},{default:b(()=>[$(V(e.$props.tag),1)]),_:1})):x("",!0)]),y(e.$slots,"append",{},()=>[e.$props.appendIcon?(r(),i(q,{key:0,size:"m"},{default:b(()=>[$(V(e.$props.appendIcon),1)]),_:1})):x("",!0)])]),_:3})])]),_:3},16)}const Me=H(te,[["render",Re]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Wa={title:"Foundation/Shared/Tabs",component:ae,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:ae,FSTab:Me,FSText:ce,FSWindow:ue,FSCol:Pe},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow :modelValue="args.tab1">
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
    `})};var U,j,G;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <FSWindow :modelValue="args.tab1">
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
}`,...(G=(j=I.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const Ba=["Variations"];export{I as Variations,Ba as __namedExportsOrder,Wa as default};
