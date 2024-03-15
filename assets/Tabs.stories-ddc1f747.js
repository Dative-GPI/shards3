import{_ as ue}from"./FSWindow-7e2b2dcb.js";import{F as ce}from"./FSText-fa675dd3.js";import{d as R,j as v,z as y,F as L,x as C,E as m,g as A,K as n,L as i,M as p,Q as be,Z as me,D as pe,R as x,N as $,O as V,P as h}from"./vue.esm-bundler-0a1af505.js";import{C as B,u as ge}from"./useColors-1745df70.js";import{u as Se}from"./useSlots-de2ef136.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Te,V as M}from"./VBtn-ba26c1ad.js";import{u as fe,b as Fe}from"./color-84472fbe.js";import{f as ve,a as ye,s as xe}from"./forwardRefs-e658ad70.js";import{p as X,z as he,e as Ce,E as we}from"./theme-8d83670f.js";import{g as Y,u as K,p as ke}from"./useRender-76465e3d.js";import{m as $e,V as O}from"./VSlideGroup-c413928b.js";import{m as Ve,u as Ie}from"./density-cfa18558.js";import{u as _e}from"./proxiedModel-350eff8d.js";import{m as We}from"./tag-6ffe4ba6.js";import{_ as P}from"./FSSpan-50615fe3.js";import{_ as q}from"./FSIcon-61d2f8ac.js";import{_ as Q}from"./FSRow-43a88505.js";import{V as Be}from"./VSpacer-638ccd4e.js";import{_ as Pe}from"./FSCol-202c8297.js";import"./VWindowItem-edb16e62.js";import"./group-197554d7.js";import"./lazy-2c8cbded.js";import"./ssrBoot-e032939a.js";import"./transition-afc70ddd.js";import"./locale-d3181d48.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-70ae5555.js";import"./elevation-68e8c545.js";import"./rounded-caec20b0.js";import"./dimensions-41d36b25.js";import"./loader-6b458036.js";import"./intersectionObserver-48733e26.js";import"./router-1b110d23.js";import"./VIcon-4501998f.js";import"./index-ee92f8e8.js";import"./VDefaultsProvider-76561179.js";import"./VProgressCircular-ba338755.js";import"./resizeObserver-366ccb2e.js";import"./index-9b6ba610.js";import"./display-58dfd5ea.js";import"./css-72b65878.js";const Z=Symbol.for("vuetify:v-tabs"),qe=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...he(Te({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),J=Y()({name:"VTab",props:qe(),setup(e,a){let{slots:o,attrs:r}=a;const{textColorClasses:d,textColorStyles:l}=fe(e,"sliderColor"),t=R(),u=R(),s=v(()=>e.direction==="horizontal"),c=v(()=>{var g,b;return((b=(g=t.value)==null?void 0:g.group)==null?void 0:b.isSelected.value)??!1});function oe(g){var E,N;let{value:b}=g;if(b){const _=(N=(E=t.value)==null?void 0:E.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),W=u.value;if(!_||!W)return;const le=getComputedStyle(_).color,S=_.getBoundingClientRect(),T=W.getBoundingClientRect(),w=s.value?"x":"y",k=s.value?"X":"Y",z=s.value?"right":"bottom",f=s.value?"width":"height",ne=S[w],re=T[w],F=ne>re?S[z]-T[z]:S[w]-T[w],se=Math.sign(F)>0?s.value?"right":"bottom":Math.sign(F)<0?s.value?"left":"top":"center",ie=(Math.abs(F)+(Math.sign(F)<0?S[f]:T[f]))/Math.max(S[f],T[f])||0,de=S[f]/T[f]||0,D=1.5;ye(W,{backgroundColor:[le,"currentcolor"],transform:[`translate${k}(${F}px) scale${k}(${de})`,`translate${k}(${F/D}px) scale${k}(${(ie-1)/D+1})`,"none"],transformOrigin:Array(3).fill(se)},{duration:225,easing:xe})}}return K(()=>{const g=M.filterProps(e);return y(M,C({symbol:Z,ref:t,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},g,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":oe}),{...o,default:()=>{var b;return y(L,null,[((b=o.default)==null?void 0:b.call(o))??e.text,!e.hideSlider&&y("div",{ref:u,class:["v-tab__slider",d.value],style:l.value},null)])}})}),ve({},t)}});function Ee(e){return e?e.map(a=>we(a)?a:{text:a,value:a}):[]}const Ne=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...$e({mandatory:"force"}),...Ve(),...We()},"VTabs"),ze=Y()({name:"VTabs",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const r=_e(e,"modelValue"),d=v(()=>Ee(e.items)),{densityClasses:l}=Ie(e),{backgroundColorClasses:t,backgroundColorStyles:u}=Fe(m(e,"bgColor"));return ke({VTab:{color:m(e,"color"),direction:m(e,"direction"),stacked:m(e,"stacked"),fixed:m(e,"fixedTabs"),sliderColor:m(e,"sliderColor"),hideSlider:m(e,"hideSlider")}}),K(()=>{const s=O.filterProps(e);return y(O,C(s,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,t.value,e.class],style:[{"--v-tabs-height":Ce(e.height)},u.value,e.style],role:"tablist",symbol:Z}),{default:()=>[o.default?o.default():d.value.map(c=>y(J,C(c,{key:c.text}),null))]})}),{}}}),ee=A({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:B.Primary}},setup(e){const{getColors:a,getContrasts:o}=ge(),{getChildren:r}=Se(),d=v(()=>o(e.color)),l=v(()=>a(e.color)),t=a(B.Dark);return{style:v(()=>({"--fs-group-color":t.base,"--fs-group-hover-background-color":l.value.light,"--fs-group-hover-color":t.dark,"--fs-group-disabled-color":t.light,"--fs-group-light":l.value.light,"--fs-group-base":l.value.base,"--fs-group-dark":l.value.dark,"--fs-tab-tag-background-color":l.value.base,"--fs-tab-tag-color":d.value.light})),getChildren:r}}});function De(e,a,o,r,d,l){return n(),i(ze,C({class:"fs-tabs",selectedClass:"fs-tab-active",grow:!0,style:e.style,showArrows:!0,sliderColor:e.$props.color,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.$emit("update:tab",t))},e.$attrs),{default:p(()=>[(n(!0),be(L,null,me(e.getChildren(),(t,u)=>(n(),i(pe(t),{key:u}))),128))]),_:1},16,["style","sliderColor","modelValue"])}const ae=H(ee,[["render",De]]);ee.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const te=A({name:"FSTab",components:{FSSpan:P,FSIcon:q,FSRow:Q},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:B.Dark}}});function Re(e,a,o,r,d,l){return n(),i(J,C({class:"fs-tab",ripple:!1},e.$attrs),{default:p(()=>[x(e.$slots,"default",{},()=>[y(Q,{align:"center-left"},{default:p(()=>[x(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(n(),i(q,{key:0,size:"m"},{default:p(()=>[$(V(e.$props.prependIcon),1)]),_:1})):h("",!0)]),x(e.$slots,"default",{},()=>[e.$props.label?(n(),i(P,{key:0,font:"text-button"},{default:p(()=>[$(V(e.$props.label),1)]),_:1})):h("",!0)]),e.$props.tag?(n(),i(Be,{key:0})):h("",!0),x(e.$slots,"tag",{},()=>[e.$props.tag?(n(),i(P,{key:0,class:"fs-tab-tag"},{default:p(()=>[$(V(e.$props.tag),1)]),_:1})):h("",!0)]),x(e.$slots,"append",{},()=>[e.$props.appendIcon?(n(),i(q,{key:0,size:"m"},{default:p(()=>[$(V(e.$props.appendIcon),1)]),_:1})):h("",!0)])]),_:3})])]),_:3},16)}const Me=H(te,[["render",Re]]);te.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Wa={title:"Foundation/Shared/Tabs",component:ae,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:ae,FSTab:Me,FSText:ce,FSWindow:ue,FSCol:Pe},props:Object.keys(a),setup(){return{...e}},template:`
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
