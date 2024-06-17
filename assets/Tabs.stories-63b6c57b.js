import{F as me}from"./FSSlideGroup-ddac1e24.js";import{F as Fe}from"./FSFadeOut-1de34239.js";import{F as pe}from"./FSButton-ff673895.js";import{m as Te,V as M,a as ge,b as j,F as ve}from"./FSWindow-28c33761.js";import{F as fe}from"./FSText-eacee215.js";import{j as H,g as h,P as d,J as z,A as T,e as Be,y as g,f as Z,E as c,F as p,G as v,H as xe,V as ye,x as he,Q as C,K as W,L as $,I}from"./vue.esm-bundler-6f923154.js";import{C as _,u as we}from"./useColors-9144d90e.js";import{u as Ce}from"./useSlots-21493751.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ie,V as X}from"./VBtn-b1e611a0.js";import{a as Ve,b as ke}from"./color-a262cadc.js";import{f as We,a as $e,s as Pe}from"./forwardRefs-e658ad70.js";import{p as O,A as te,c as _e,y as Oe}from"./theme-a8226b2e.js";import{g as q,u as G,p as qe}from"./useRender-1cb09274.js";import{u as ae}from"./proxiedModel-c8904091.js";import{m as Ge,V as Y}from"./VSlideGroup-60f1b829.js";import{m as Ee,u as Le}from"./density-03404b67.js";import{u as Ne}from"./scopeId-a438f35a.js";import{m as De}from"./tag-a7b67944.js";import{_ as N}from"./FSSpan-7bb94541.js";import{_ as D}from"./FSIcon-93774118.js";import{_ as ne}from"./FSRow-64caadb9.js";import{V as ze}from"./VSpacer-54f0d5ce.js";import{_ as Re}from"./FSCol-5ed907ac.js";import"./uuid-08309875.js";import"./css-0cf2e273.js";import"./group-91945d16.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./locale-577543b5.js";import"./lazy-43993a1b.js";import"./ssrBoot-082b8501.js";import"./transition-e76cd387.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./border-f53cef89.js";import"./elevation-2c5be1c3.js";import"./rounded-1f8e51a9.js";import"./dimensions-dec12c77.js";import"./loader-1a97481f.js";import"./anchor-52e92869.js";import"./router-ed3d0311.js";import"./index-55248dcb.js";import"./VDefaultsProvider-a08a9a42.js";import"./index-4caca680.js";import"./display-1e14778f.js";import"./goto-4db1c431.js";const R=Symbol.for("vuetify:v-tabs"),Ue=O({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...te(Ie({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=q()({name:"VTab",props:Ue(),setup(e,a){let{slots:l,attrs:t}=a;const{textColorClasses:i,textColorStyles:u}=Ve(e,"sliderColor"),n=H(),s=H(),S=h(()=>e.direction==="horizontal"),w=h(()=>{var m,o;return((o=(m=n.value)==null?void 0:m.group)==null?void 0:o.isSelected.value)??!1});function E(m){var r,F;let{value:o}=m;if(o){const b=(F=(r=n.value)==null?void 0:r.$el.parentElement)==null?void 0:F.querySelector(".v-tab--selected .v-tab__slider"),L=s.value;if(!b||!L)return;const ue=getComputedStyle(b).color,f=b.getBoundingClientRect(),B=L.getBoundingClientRect(),V=S.value?"x":"y",k=S.value?"X":"Y",U=S.value?"right":"bottom",x=S.value?"width":"height",de=f[V],se=B[V],y=de>se?f[U]-B[U]:f[V]-B[V],be=Math.sign(y)>0?S.value?"right":"bottom":Math.sign(y)<0?S.value?"left":"top":"center",ce=(Math.abs(y)+(Math.sign(y)<0?f[x]:B[x]))/Math.max(f[x],B[x])||0,Se=f[x]/B[x]||0,A=1.5;$e(L,{backgroundColor:[ue,"currentcolor"],transform:[`translate${k}(${y}px) scale${k}(${Se})`,`translate${k}(${y/A}px) scale${k}(${(ce-1)/A+1})`,"none"],transformOrigin:Array(3).fill(be)},{duration:225,easing:Pe})}}return G(()=>{const m=X.filterProps(e);return d(X,T({symbol:R,ref:n,class:["v-tab",e.class],style:e.style,tabindex:w.value?0:-1,role:"tab","aria-selected":String(w.value),active:!1},m,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":E}),{...l,default:()=>{var o;return d(z,null,[((o=l.default)==null?void 0:o.call(l))??e.text,!e.hideSlider&&d("div",{ref:s,class:["v-tab__slider",i.value],style:u.value},null)])}})}),We({},n)}});const Ae=O({...te(Te(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Me=q()({name:"VTabsWindow",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const t=Be(R,null),i=ae(e,"modelValue"),u=h({get(){var n;return i.value!=null||!t?i.value:(n=t.items.value.find(s=>t.selected.value.includes(s.id)))==null?void 0:n.value},set(n){i.value=n}});return G(()=>{const n=M.filterProps(e);return d(M,T({_as:"VTabsWindow"},n,{modelValue:u.value,"onUpdate:modelValue":s=>u.value=s,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),l)}),{}}}),je=O({...ge()},"VTabsWindowItem"),He=q()({name:"VTabsWindowItem",props:je(),setup(e,a){let{slots:l}=a;return G(()=>{const t=j.filterProps(e);return d(j,T({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),l)}),{}}});function Xe(e){return e?e.map(a=>Oe(a)?a:{text:a,value:a}):[]}const Ye=O({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ge({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Ee(),...De()},"VTabs"),Je=q()({name:"VTabs",props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:t}=a;const i=ae(e,"modelValue"),u=h(()=>Xe(e.items)),{densityClasses:n}=Le(e),{backgroundColorClasses:s,backgroundColorStyles:S}=ke(g(e,"bgColor")),{scopeId:w}=Ne();return qe({VTab:{color:g(e,"color"),direction:g(e,"direction"),stacked:g(e,"stacked"),fixed:g(e,"fixedTabs"),sliderColor:g(e,"sliderColor"),hideSlider:g(e,"hideSlider")}}),G(()=>{const E=Y.filterProps(e),m=!!(t.window||e.items.length>0);return d(z,null,[d(Y,T(E,{modelValue:i.value,"onUpdate:modelValue":o=>i.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},n.value,s.value,e.class],style:[{"--v-tabs-height":_e(e.height)},S.value,e.style],role:"tablist",symbol:R},w,l),{default:()=>{var o;return[((o=t.default)==null?void 0:o.call(t))??u.value.map(r=>{var F;return((F=t.tab)==null?void 0:F.call(t,{item:r}))??d(oe,T(r,{key:r.text,value:r.value}),{default:t[`tab.${r.value}`]?()=>{var b;return(b=t[`tab.${r.value}`])==null?void 0:b.call(t,{item:r})}:void 0})})]}}),m&&d(Me,T({modelValue:i.value,"onUpdate:modelValue":o=>i.value=o,key:"tabs-window"},w),{default:()=>{var o;return[u.value.map(r=>{var F;return((F=t.item)==null?void 0:F.call(t,{item:r}))??d(He,{value:r.value},{default:()=>{var b;return(b=t[`item.${r.value}`])==null?void 0:b.call(t,{item:r})}})}),(o=t.window)==null?void 0:o.call(t)]}})])}),{}}}),le=Z({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:_.Primary}},setup(e){const{getChildren:a}=Ce(),{getColors:l}=we(),t=h(()=>l(e.color)),i=l(_.Light),u=l(_.Dark);return{style:h(()=>({"--fs-group-color":u.soft,"--fs-group-hover-color":u.dark,"--fs-tab-border-color":i.dark,"--fs-tab-hover-border-color":u.dark,"--fs-tab-active-background-color":t.value.light,"--fs-tab-tag-background-color":t.value.base,"--fs-tab-tag-color":t.value.baseContrast})),getChildren:a}}});function Ke(e,a,l,t,i,u){return c(),p(Je,T({selectedClass:"fs-tab-active",class:"fs-tabs",sliderColor:e.$props.color,showArrows:!0,style:e.style,grow:!0,modelValue:e.$props.tab,"onUpdate:modelValue":a[0]||(a[0]=n=>e.$emit("update:tab",n))},e.$attrs),{default:v(()=>[(c(!0),xe(z,null,ye(e.getChildren(),(n,s)=>(c(),p(he(n),{key:s}))),128))]),_:1},16,["sliderColor","style","modelValue"])}const re=ee(le,[["render",Ke]]);le.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"update:tab"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTabs.vue"]};const ie=Z({name:"FSTab",components:{FSSpan:N,FSIcon:D,FSRow:ne},props:{prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},tag:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:_.Dark}}});function Qe(e,a,l,t,i,u){return c(),p(oe,T({class:"fs-tab",ripple:!1},e.$attrs),{default:v(()=>[C(e.$slots,"default",{},()=>[d(ne,{align:"center-left"},{default:v(()=>[C(e.$slots,"prepend",{},()=>[e.$props.prependIcon?(c(),p(D,{key:0,size:"m"},{default:v(()=>[W($(e.$props.prependIcon),1)]),_:1})):I("",!0)]),C(e.$slots,"default",{},()=>[e.$props.label?(c(),p(N,{key:0,font:"text-button"},{default:v(()=>[W($(e.$props.label),1)]),_:1})):I("",!0)]),e.$props.tag?(c(),p(ze,{key:0})):I("",!0),C(e.$slots,"tag",{},()=>[e.$props.tag?(c(),p(N,{key:0,class:"fs-tab-tag"},{default:v(()=>[W($(e.$props.tag),1)]),_:1})):I("",!0)]),C(e.$slots,"append",{},()=>[e.$props.appendIcon?(c(),p(D,{key:0,size:"m"},{default:v(()=>[W($(e.$props.appendIcon),1)]),_:1})):I("",!0)])]),_:3})])]),_:3},16)}const Ze=ee(ie,[["render",Qe]]);ie.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"},{name:"prepend"},{name:"tag"},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTab.vue"]};const Kt={title:"Foundation/Shared/Tabs",component:re,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{tab1:0,tab2:1,tab3:2,tab4:3}},render:(e,{argTypes:a})=>({components:{FSTabs:re,FSTab:Ze,FSText:fe,FSWindow:ve,FSCol:Re,FSFadeOut:Fe,FSSlideGroup:me,FSButton:pe},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Qt=["Variations"];export{P as Variations,Qt as __namedExportsOrder,Kt as default};
