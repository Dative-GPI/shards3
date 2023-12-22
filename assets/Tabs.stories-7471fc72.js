import{F as ce}from"./FSText-075b9c4d.js";import{m as A,t as be,k as q,f as H,s as pe,B as T,L,F as S,g as c,n as s,q as i,u as b,I as me,K as ge,G as fe,x as Te,v as y,C,D as I,E as F}from"./vue.esm-bundler-29da8e49.js";import{C as _,u as P,p as X,y as Se,k as ve,l as ye}from"./useColors-ad83dc40.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Fe,V as G}from"./VBtn-121c840b.js";import{g as K,d as he,u as J,a as xe,e as ke,p as Ce}from"./VIcon-8d401865.js";import{a as Ie,s as $e,V as Ve}from"./VSpacer-353093b4.js";import{m as we,a as O}from"./VSlideGroup-c848dd0b.js";import{a as Be,b as Pe}from"./rounded-6c346ce6.js";import{u as qe}from"./locale-542d2ec8.js";import{_ as E}from"./FSSpan-46176227.js";import{_ as D}from"./FSIcon-f37b61fc.js";import{_ as Q}from"./FSRow-99784c66.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./group-ef24a5b8.js";import"./loader-549251e9.js";import"./VDefaultsProvider-293b550d.js";import"./index-cd8a77ee.js";import"./resizeObserver-55bed5e2.js";import"./index-3038ad46.js";import"./display-f1019078.js";const Z=A({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:_.Primary}},emits:["update:tab"],setup(e,{emit:a}){const{tab:o,color:n}=be(e),d=P().getContrasts(n.value),t=P().getColors(n.value),l=P().getColors(_.Dark),r=q({"--fs-group-color":l.base,"--fs-group-hover-background-color":t.light,"--fs-group-hover-color":l.dark,"--fs-group-disabled-color":l.light,"--fs-group-light":t.light,"--fs-group-base":t.base,"--fs-group-dark":t.dark,"--fs-tab-tag-background-color":t.base,"--fs-tab-tag-color":d.light});return{tab:o,color:n,colors:t,style:r,emit:a}}});const ee=Symbol.for("vuetify:v-tabs"),_e=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Se(Fe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ae=K()({name:"VTab",props:_e(),setup(e,a){let{slots:o,attrs:n}=a;const{textColorClasses:d,textColorStyles:t}=he(e,"sliderColor"),l=H(()=>e.direction==="horizontal"),r=pe(!1),h=q(),u=q();function oe(V){var N,z;let{value:v}=V;if(r.value=v,v){const w=(z=(N=h.value)==null?void 0:N.$el.parentElement)==null?void 0:z.querySelector(".v-tab--selected .v-tab__slider"),B=u.value;if(!w||!B)return;const ne=getComputedStyle(w).color,p=w.getBoundingClientRect(),m=B.getBoundingClientRect(),x=l.value?"x":"y",k=l.value?"X":"Y",R=l.value?"right":"bottom",g=l.value?"width":"height",re=p[x],se=m[x],f=re>se?p[R]-m[R]:p[x]-m[x],ie=Math.sign(f)>0?l.value?"right":"bottom":Math.sign(f)<0?l.value?"left":"top":"center",de=(Math.abs(f)+(Math.sign(f)<0?p[g]:m[g]))/Math.max(p[g],m[g])||0,ue=p[g]/m[g]||0,M=1.5;Ie(B,{backgroundColor:[ne,"currentcolor"],transform:[`translate${k}(${f}px) scale${k}(${ue})`,`translate${k}(${f/M}px) scale${k}(${(de-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:$e})}}return J(()=>{const V=G.filterProps(e);return T(G,S({symbol:ee,ref:h,class:["v-tab",e.class],style:e.style,tabindex:r.value?0:-1,role:"tab","aria-selected":String(r.value),active:!1},V,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":oe}),{...o,default:()=>{var v;return T(L,null,[((v=o.default)==null?void 0:v.call(o))??e.text,!e.hideSlider&&T("div",{ref:u,class:["v-tab__slider",d.value],style:t.value},null)])}})}),{}}});function Ee(e){return e?e.map(a=>ye(a)?a:{text:a,value:a}):[]}const De=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...we({mandatory:"force"}),...Be(),...xe()},"VTabs"),Ne=K()({name:"VTabs",props:De(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const n=qe(e,"modelValue"),d=H(()=>Ee(e.items)),{densityClasses:t}=Pe(e),{backgroundColorClasses:l,backgroundColorStyles:r}=ke(c(e,"bgColor"));return Ce({VTab:{color:c(e,"color"),direction:c(e,"direction"),stacked:c(e,"stacked"),fixed:c(e,"fixedTabs"),sliderColor:c(e,"sliderColor"),hideSlider:c(e,"hideSlider")}}),J(()=>{const h=O.filterProps(e);return T(O,S(h,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},t.value,l.value,e.class],style:[{"--v-tabs-height":ve(e.height)},r.value,e.style],role:"tablist",symbol:ee}),{default:()=>[o.default?o.default():d.value.map(u=>T(ae,S(u,{key:u.text}),null))]})}),{}}});function ze(e,a,o,n,d,t){return s(),i(Ne,S({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:e.style,modelValue:e.tab,"slider-color":e.colors.base,"onUpdate:modelValue":a[0]||(a[0]=l=>e.emit("update:tab",l))},e.$attrs),{default:b(()=>[(s(!0),me(L,null,ge(e.$slots.default(),(l,r)=>(s(),i(fe(l),Te(S({key:r},{color:e.color,colors:e.colors,style:e.style})),null,16))),128))]),_:1},16,["style","modelValue","slider-color"])}const le=Y(Z,[["render",ze]]);Z.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=A({name:"FSTab",components:{FSSpan:E,FSIcon:D,FSRow:Q},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:_.Dark}}});function Re(e,a,o,n,d,t){return s(),i(ae,S({class:"fs-tab",ripple:!1},e.$attrs),{default:b(()=>[y(e.$slots,"default",{},()=>[T(Q,{align:"center-left"},{default:b(()=>[y(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(s(),i(D,{key:0,size:"m"},{default:b(()=>[C(I(e.$props.prependIcon),1)]),_:1})):F("",!0)]),y(e.$slots,"default",{},()=>[e.$props.label?(s(),i(E,{key:0,font:"text-button"},{default:b(()=>[C(I(e.$props.label),1)]),_:1})):F("",!0)]),e.$props.tag?(s(),i(Ve,{key:0})):F("",!0),y(e.$slots,"tag",{},()=>[e.$props.tag?(s(),i(E,{key:0,class:"fs-tab-tag"},{default:b(()=>[C(I(e.$props.tag),1)]),_:1})):F("",!0)]),y(e.$slots,"append",{},()=>[e.$props.appendIcon?(s(),i(D,{key:0,size:"m"},{default:b(()=>[C(I(e.$props.appendIcon),1)]),_:1})):F("",!0)])]),_:3})])]),_:3},16)}const Me=Y(te,[["render",Re]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const da={title:"Foundation/Shared/Tabs",component:le,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},$={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:le,FSTab:Me,FSText:ce},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab1">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab2" color="warning">
          <FSTab label="Tab 1" :value="0" tag="1" />
          <FSTab label="Tab 2" :value="1" tag="2" />
          <FSTab label="Tab 3" :value="2" tag="3" />
          <FSTab label="Tab 4" :value="3" tag="4" />
          <FSTab label="Tab 5" :value="4" tag="5" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
      </div>
    `})};var j,U,W;$.parameters={...$.parameters,docs:{...(j=$.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      FSText
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
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab2" color="warning">
          <FSTab label="Tab 1" :value="0" tag="1" />
          <FSTab label="Tab 2" :value="1" tag="2" />
          <FSTab label="Tab 3" :value="2" tag="3" />
          <FSTab label="Tab 4" :value="3" tag="4" />
          <FSTab label="Tab 5" :value="4" tag="5" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab3" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab4" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
      </div>
    \`
  })
}`,...(W=(U=$.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ua=["Variations"];export{$ as Variations,ua as __namedExportsOrder,da as default};
