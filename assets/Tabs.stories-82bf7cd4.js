import{_ as ce}from"./FSWindow-d529f132.js";import{F as be}from"./FSText-8dc1b884.js";import{d as R,e as F,z as y,F as U,A as w,m as c,E as L,H as r,I as i,J as b,Q as me,V as pe,q as ge,L as x,M as $,N as I,K as h}from"./vue.esm-bundler-a27e881e.js";import{C as P,u as B}from"./useColors-64c3c523.js";import{u as Te}from"./useSlots-f8c8bb5a.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Se,V as O}from"./VBtn-2c9b0d3f.js";import{g as Y,c as fe,u as J,d as ve,p as Fe}from"./color-17bc18af.js";import{f as ye,a as xe,s as he}from"./forwardRefs-e658ad70.js";import{p as K,u as we,c as Ce,o as ke}from"./theme-40a9efa2.js";import{m as $e,V as A}from"./VSlideGroup-6834ac05.js";import{m as Ie,u as Ve}from"./density-9e64face.js";import{u as We}from"./locale-d8beded1.js";import{a as _e}from"./VIcon-05012a67.js";import{_ as q}from"./FSSpan-23926a6a.js";import{_ as E}from"./FSIcon-98d9a930.js";import{_ as Q}from"./FSRow-e0b07355.js";import{V as Be}from"./VSpacer-0b076bec.js";import"./VWindowItem-799334b7.js";import"./group-9102b821.js";import"./lazy-e46c79b0.js";import"./ssrBoot-3aa6a9b0.js";import"./transition-91aa1796.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./index-1c023ca5.js";import"./display-dfdccc0e.js";import"./css-fb381997.js";const Z=Symbol.for("vuetify:v-tabs"),Pe=K({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...we(Se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ee=Y()({name:"VTab",props:Pe(),setup(e,a){let{slots:t,attrs:l}=a;const{textColorClasses:o,textColorStyles:m}=fe(e,"sliderColor"),n=R(),p=R(),s=F(()=>e.direction==="horizontal"),d=F(()=>{var g,u;return((u=(g=n.value)==null?void 0:g.group)==null?void 0:u.isSelected.value)??!1});function ne(g){var N,z;let{value:u}=g;if(u){const W=(z=(N=n.value)==null?void 0:N.$el.parentElement)==null?void 0:z.querySelector(".v-tab--selected .v-tab__slider"),_=p.value;if(!W||!_)return;const oe=getComputedStyle(W).color,T=W.getBoundingClientRect(),S=_.getBoundingClientRect(),C=s.value?"x":"y",k=s.value?"X":"Y",D=s.value?"right":"bottom",f=s.value?"width":"height",re=T[C],se=S[C],v=re>se?T[D]-S[D]:T[C]-S[C],ie=Math.sign(v)>0?s.value?"right":"bottom":Math.sign(v)<0?s.value?"left":"top":"center",de=(Math.abs(v)+(Math.sign(v)<0?T[f]:S[f]))/Math.max(T[f],S[f])||0,ue=T[f]/S[f]||0,M=1.5;xe(_,{backgroundColor:[oe,"currentcolor"],transform:[`translate${k}(${v}px) scale${k}(${ue})`,`translate${k}(${v/M}px) scale${k}(${(de-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:he})}}return J(()=>{const g=O.filterProps(e);return y(O,w({symbol:Z,ref:n,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},g,l,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":ne}),{...t,default:()=>{var u;return y(U,null,[((u=t.default)==null?void 0:u.call(t))??e.text,!e.hideSlider&&y("div",{ref:p,class:["v-tab__slider",o.value],style:m.value},null)])}})}),ye({},n)}});function qe(e){return e?e.map(a=>ke(a)?a:{text:a,value:a}):[]}const Ee=K({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ie(),..._e()},"VTabs"),Ne=Y()({name:"VTabs",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const l=We(e,"modelValue"),o=F(()=>qe(e.items)),{densityClasses:m}=Ve(e),{backgroundColorClasses:n,backgroundColorStyles:p}=ve(c(e,"bgColor"));return Fe({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),J(()=>{const s=A.filterProps(e);return y(A,w(s,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},m.value,n.value,e.class],style:[{"--v-tabs-height":Ce(e.height)},p.value,e.style],role:"tablist",symbol:Z}),{default:()=>[t.default?t.default():o.value.map(d=>y(ee,w(d,{key:d.text}),null))]})}),{}}}),ae=L({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:P.Primary}},setup(e){const{getChildren:a}=Te(),t=F(()=>B().getContrasts(e.color)),l=F(()=>B().getColors(e.color)),o=B().getColors(P.Dark);return{style:F(()=>({"--fs-group-color":o.base,"--fs-group-hover-background-color":l.value.light,"--fs-group-hover-color":o.dark,"--fs-group-disabled-color":o.light,"--fs-group-light":l.value.light,"--fs-group-base":l.value.base,"--fs-group-dark":l.value.dark,"--fs-tab-tag-background-color":l.value.base,"--fs-tab-tag-color":t.value.light})),getChildren:a}}});function ze(e,a,t,l,o,m){return r(),i(Ne,w({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:b(()=>[(r(!0),me(U,null,pe(e.getChildren(),(n,p)=>(r(),i(ge(n),{key:p}))),128))]),_:1},16,["style","sliderColor","modelValue"])}const le=X(ae,[["render",ze]]);ae.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=L({name:"FSTab",components:{FSSpan:q,FSIcon:E,FSRow:Q},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:P.Dark}}});function De(e,a,t,l,o,m){return r(),i(ee,w({class:"fs-tab",ripple:!1},e.$attrs),{default:b(()=>[x(e.$slots,"default",{},()=>[y(Q,{align:"center-left"},{default:b(()=>[x(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(r(),i(E,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.prependIcon),1)]),_:1})):h("",!0)]),x(e.$slots,"default",{},()=>[e.$props.label?(r(),i(q,{key:0,font:"text-button"},{default:b(()=>[$(I(e.$props.label),1)]),_:1})):h("",!0)]),e.$props.tag?(r(),i(Be,{key:0})):h("",!0),x(e.$slots,"tag",{},()=>[e.$props.tag?(r(),i(q,{key:0,class:"fs-tab-tag"},{default:b(()=>[$(I(e.$props.tag),1)]),_:1})):h("",!0)]),x(e.$slots,"append",{},()=>[e.$props.appendIcon?(r(),i(E,{key:0,size:"m"},{default:b(()=>[$(I(e.$props.appendIcon),1)]),_:1})):h("",!0)])]),_:3})])]),_:3},16)}const Me=X(te,[["render",De]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Ca={title:"Foundation/Shared/Tabs",component:le,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:le,FSTab:Me,FSText:be,FSWindow:ce},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var G,j,H;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(H=(j=V.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const ka=["Variations"];export{V as Variations,ka as __namedExportsOrder,Ca as default};
