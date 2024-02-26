import{_ as ce}from"./FSWindow-cef71466.js";import{F as be}from"./FSText-dce49904.js";import{j as R,d as F,z as y,F as H,y as w,m as c,D as L,G as r,H as i,I as b,Q as me,U as pe,n as ge,L as x,M as $,N as I,J as h}from"./vue.esm-bundler-17cb12ce.js";import{C as P,u as B}from"./useColors-04b7b26f.js";import{u as Te,_ as q}from"./FSSpan-2051def6.js";import"./rules-8f4289e2.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Se,V as G}from"./VBtn-7cd9fe35.js";import{g as Y,b as fe,u as J,c as ve,p as Fe}from"./color-d421c344.js";import{f as ye,a as xe,s as he}from"./forwardRefs-e658ad70.js";import{p as Q,u as we,c as Ce,o as ke}from"./theme-c4ac2200.js";import{m as $e,V as O}from"./VSlideGroup-3e268e56.js";import{m as Ie,u as Ve}from"./density-cdecea01.js";import{u as We}from"./locale-2e51016c.js";import{a as _e}from"./VIcon-343130ca.js";import{_ as E}from"./FSIcon-16c55386.js";import{_ as K}from"./FSRow-9ce6aace.js";import{V as Be}from"./VSpacer-bacd1ff2.js";import"./VWindowItem-42addeb6.js";import"./group-a63c5543.js";import"./lazy-04b58018.js";import"./ssrBoot-e21c8f3c.js";import"./transition-4d995a4a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./variant-1223b1b3.js";import"./elevation-cb67bcb5.js";import"./rounded-d330abbe.js";import"./dimensions-10b1de84.js";import"./loader-8675b45d.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";import"./index-c6c13bcc.js";import"./display-4fe57557.js";import"./LexicalSelection.prod-b0bd0f79.js";const Z=Symbol.for("vuetify:v-tabs"),Pe=Q({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...we(Se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ee=Y()({name:"VTab",props:Pe(),setup(e,a){let{slots:l,attrs:t}=a;const{textColorClasses:o,textColorStyles:m}=fe(e,"sliderColor"),n=R(),p=R(),s=F(()=>e.direction==="horizontal"),d=F(()=>{var g,u;return((u=(g=n.value)==null?void 0:g.group)==null?void 0:u.isSelected.value)??!1});function ne(g){var N,D;let{value:u}=g;if(u){const W=(D=(N=n.value)==null?void 0:N.$el.parentElement)==null?void 0:D.querySelector(".v-tab--selected .v-tab__slider"),_=p.value;if(!W||!_)return;const oe=getComputedStyle(W).color,T=W.getBoundingClientRect(),S=_.getBoundingClientRect(),C=s.value?"x":"y",k=s.value?"X":"Y",z=s.value?"right":"bottom",f=s.value?"width":"height",re=T[C],se=S[C],v=re>se?T[z]-S[z]:T[C]-S[C],ie=Math.sign(v)>0?s.value?"right":"bottom":Math.sign(v)<0?s.value?"left":"top":"center",de=(Math.abs(v)+(Math.sign(v)<0?T[f]:S[f]))/Math.max(T[f],S[f])||0,ue=T[f]/S[f]||0,M=1.5;xe(_,{backgroundColor:[oe,"currentcolor"],transform:[`translate${k}(${v}px) scale${k}(${ue})`,`translate${k}(${v/M}px) scale${k}(${(de-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:he})}}return J(()=>{const g=G.filterProps(e);return y(G,w({symbol:Z,ref:n,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},g,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":ne}),{...l,default:()=>{var u;return y(H,null,[((u=l.default)==null?void 0:u.call(l))??e.text,!e.hideSlider&&y("div",{ref:p,class:["v-tab__slider",o.value],style:m.value},null)])}})}),ye({},n)}});function qe(e){return e?e.map(a=>ke(a)?a:{text:a,value:a}):[]}const Ee=Q({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ie(),..._e()},"VTabs"),Ne=Y()({name:"VTabs",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const t=We(e,"modelValue"),o=F(()=>qe(e.items)),{densityClasses:m}=Ve(e),{backgroundColorClasses:n,backgroundColorStyles:p}=ve(c(e,"bgColor"));return Fe({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),J(()=>{const s=O.filterProps(e);return y(O,w(s,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},m.value,n.value,e.class],style:[{"--v-tabs-height":Ce(e.height)},p.value,e.style],role:"tablist",symbol:Z}),{default:()=>[l.default?l.default():o.value.map(d=>y(ee,w(d,{key:d.text}),null))]})}),{}}}),ae=L({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:P.Primary}},setup(e){const{getChildren:a}=Te(),l=F(()=>B().getContrasts(e.color)),t=F(()=>B().getColors(e.color)),o=B().getColors(P.Dark);return{style:F(()=>({"--fs-group-color":o.base,"--fs-group-hover-background-color":t.value.light,"--fs-group-hover-color":o.dark,"--fs-group-disabled-color":o.light,"--fs-group-light":t.value.light,"--fs-group-base":t.value.base,"--fs-group-dark":t.value.dark,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":l.value.light})),getChildren:a}}});function De(e,a,l,t,o,m){return r(),i(Ne,w({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:b(()=>[(r(!0),me(H,null,pe(e.getChildren(),(n,p)=>(r(),i(ge(n),{key:p}))),128))]),_:1},16,["style","sliderColor","modelValue"])}const te=X(ae,[["render",De]]);ae.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const le=L({name:"FSTab",components:{FSSpan:q,FSIcon:E,FSRow:K},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:P.Dark}}});function ze(e,a,l,t,o,m){return r(),i(ee,w({class:"fs-tab",ripple:!1},e.$attrs),{default:b(()=>[x(e.$slots,"default",{},()=>[y(K,{align:"center-left"},{default:b(()=>[x(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(r(),i(E,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.prependIcon),1)]),_:1})):h("",!0)]),x(e.$slots,"default",{},()=>[e.$props.label?(r(),i(q,{key:0,font:"text-button"},{default:b(()=>[$(I(e.$props.label),1)]),_:1})):h("",!0)]),e.$props.tag?(r(),i(Be,{key:0})):h("",!0),x(e.$slots,"tag",{},()=>[e.$props.tag?(r(),i(q,{key:0,class:"fs-tab-tag"},{default:b(()=>[$(I(e.$props.tag),1)]),_:1})):h("",!0)]),x(e.$slots,"append",{},()=>[e.$props.appendIcon?(r(),i(E,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.appendIcon),1)]),_:1})):h("",!0)])]),_:3})])]),_:3},16)}const Me=X(le,[["render",ze]]);le.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const $a={title:"Foundation/Shared/Tabs",component:te,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:te,FSTab:Me,FSText:be,FSWindow:ce},props:Object.keys(a),setup(){return{...e}},template:`
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
          <FSText v-for="arg in 5">
            Tab {{ arg }}
          </FSText>
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
    `})};var j,U,A;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      FSWindow
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
          <FSText v-for="arg in 5">
            Tab {{ arg }}
          </FSText>
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
}`,...(A=(U=V.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const Ia=["Variations"];export{V as Variations,Ia as __namedExportsOrder,$a as default};
