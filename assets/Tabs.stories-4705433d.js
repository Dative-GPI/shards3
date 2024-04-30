import{_ as ue}from"./FSWindow-a766ff71.js";import{F as ce}from"./FSText-4ee7bf26.js";import{d as R,e as x,z as F,F as G,A as h,x as c,j as L,J as r,K as i,L as b,Q as be,Y as me,v as pe,R as v,S as $,U as I,N as y}from"./vue.esm-bundler-82a4b45a.js";import{C as B,u as ge}from"./useColors-698e8610.js";import{u as Se}from"./useSlots-f55d2513.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Te,V as M}from"./VBtn-68d719d2.js";import{a as fe,b as Fe}from"./color-616211f8.js";import{f as ve,a as ye,s as xe}from"./forwardRefs-e658ad70.js";import{p as H,o as he,c as Ce,y as we}from"./theme-380662da.js";import{g as X,u as J,p as ke}from"./useRender-9b5fad83.js";import{m as $e,V as U}from"./VSlideGroup-4309af86.js";import{m as Ie,u as Ve}from"./density-d6a10252.js";import{u as _e}from"./proxiedModel-6f61b602.js";import{m as We}from"./tag-c823df72.js";import{_ as P}from"./FSSpan-4bf272e8.js";import{_ as q}from"./FSIcon-97799824.js";import{_ as K}from"./FSRow-2ccfd21b.js";import{V as Be}from"./VSpacer-dfdceece.js";import{_ as Pe}from"./FSCol-8326ac62.js";import"./css-c39c4a6e.js";import"./VWindowItem-2077a2fd.js";import"./group-a18b2437.js";import"./lazy-ee12d092.js";import"./ssrBoot-4291a4a7.js";import"./transition-0cde2f94.js";import"./locale-c97048b2.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-7fe0702c.js";import"./elevation-2177f5c6.js";import"./rounded-523f3a06.js";import"./dimensions-7b60e06e.js";import"./loader-80aadcba.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./router-7318af59.js";import"./index-0f4b4beb.js";import"./VDefaultsProvider-d7814c60.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";const Q=Symbol.for("vuetify:v-tabs"),qe=H({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...he(Te({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Z=X()({name:"VTab",props:qe(),setup(e,a){let{slots:o,attrs:t}=a;const{textColorClasses:n,textColorStyles:m}=fe(e,"sliderColor"),l=R(),C=R(),s=x(()=>e.direction==="horizontal"),d=x(()=>{var p,u;return((u=(p=l.value)==null?void 0:p.group)==null?void 0:u.isSelected.value)??!1});function oe(p){var E,N;let{value:u}=p;if(u){const _=(N=(E=l.value)==null?void 0:E.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),W=C.value;if(!_||!W)return;const le=getComputedStyle(_).color,g=_.getBoundingClientRect(),S=W.getBoundingClientRect(),w=s.value?"x":"y",k=s.value?"X":"Y",z=s.value?"right":"bottom",T=s.value?"width":"height",ne=g[w],re=S[w],f=ne>re?g[z]-S[z]:g[w]-S[w],se=Math.sign(f)>0?s.value?"right":"bottom":Math.sign(f)<0?s.value?"left":"top":"center",ie=(Math.abs(f)+(Math.sign(f)<0?g[T]:S[T]))/Math.max(g[T],S[T])||0,de=g[T]/S[T]||0,D=1.5;ye(W,{backgroundColor:[le,"currentcolor"],transform:[`translate${k}(${f}px) scale${k}(${de})`,`translate${k}(${f/D}px) scale${k}(${(ie-1)/D+1})`,"none"],transformOrigin:Array(3).fill(se)},{duration:225,easing:xe})}}return J(()=>{const p=M.filterProps(e);return F(M,h({symbol:Q,ref:l,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},p,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":oe}),{...o,default:()=>{var u;return F(G,null,[((u=o.default)==null?void 0:u.call(o))??e.text,!e.hideSlider&&F("div",{ref:C,class:["v-tab__slider",n.value],style:m.value},null)])}})}),ve({},l)}});function Ee(e){return e?e.map(a=>we(a)?a:{text:a,value:a}):[]}const Ne=H({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ie(),...We()},"VTabs"),ze=X()({name:"VTabs",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const t=_e(e,"modelValue"),n=x(()=>Ee(e.items)),{densityClasses:m}=Ve(e),{backgroundColorClasses:l,backgroundColorStyles:C}=Fe(c(e,"bgColor"));return ke({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),J(()=>{const s=U.filterProps(e);return F(U,h(s,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},m.value,l.value,e.class],style:[{"--v-tabs-height":Ce(e.height)},C.value,e.style],role:"tablist",symbol:Q}),{default:()=>[o.default?o.default():n.value.map(d=>F(Z,h(d,{key:d.text}),null))]})}),{}}}),ee=L({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:B.Primary}},setup(e){const{getChildren:a}=Se(),{getColors:o}=ge(),t=x(()=>o(e.color)),n=o(B.Dark);return{style:x(()=>({"--fs-group-color":n.base,"--fs-group-disabled-color":n.light,"--fs-group-hover-background-color":t.value.light,"--fs-group-hover-color":n.dark,"--fs-group-light":t.value.light,"--fs-group-base":t.value.base,"--fs-group-dark":t.value.dark,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast})),getChildren:a}}});function De(e,a,o,t,n,m){return r(),i(ze,h({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:tab",l))},e.$attrs),{default:b(()=>[(r(!0),be(G,null,me(e.getChildren(),l=>(r(),i(pe(l)))),256))]),_:1},16,["style","sliderColor","modelValue"])}const ae=Y(ee,[["render",De]]);ee.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=L({name:"FSTab",components:{FSSpan:P,FSIcon:q,FSRow:K},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:B.Dark}}});function Re(e,a,o,t,n,m){return r(),i(Z,h({class:"fs-tab",ripple:!1},e.$attrs),{default:b(()=>[v(e.$slots,"default",{},()=>[F(K,{align:"center-left"},{default:b(()=>[v(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(r(),i(q,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.prependIcon),1)]),_:1})):y("",!0)]),v(e.$slots,"default",{},()=>[e.$props.label?(r(),i(P,{key:0,font:"text-button"},{default:b(()=>[$(I(e.$props.label),1)]),_:1})):y("",!0)]),e.$props.tag?(r(),i(Be,{key:0})):y("",!0),v(e.$slots,"tag",{},()=>[e.$props.tag?(r(),i(P,{key:0,class:"fs-tab-tag"},{default:b(()=>[$(I(e.$props.tag),1)]),_:1})):y("",!0)]),v(e.$slots,"append",{},()=>[e.$props.appendIcon?(r(),i(q,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.appendIcon),1)]),_:1})):y("",!0)])]),_:3})])]),_:3},16)}const Me=Y(te,[["render",Re]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const _a={title:"Foundation/Shared/Tabs",component:ae,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:ae,FSTab:Me,FSText:ce,FSWindow:ue,FSCol:Pe},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var O,j,A;V.parameters={...V.parameters,docs:{...(O=V.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(j=V.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const Wa=["Variations"];export{V as Variations,Wa as __namedExportsOrder,_a as default};
