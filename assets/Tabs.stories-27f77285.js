import{g as Ve,t as Pe,d as S,s as V,x as ie,p as b,F as Ne,m as I,T as je,y as $e,h as Fe,z as De,w as We,A as z,o as J,j as Q,k as P,l as Ue,B as Xe,C as Ye,n as Ke,q as ue,u as ce,v as Je}from"./vue.esm-bundler-4539b11d.js";import{C as Be,u as G,p as N,o as Qe,b as E,c as Ze,d as ee,e as de,f as ea,h as Re,I as aa,V as fe,i as ta,j as oa,k as la,l as na,n as sa,q as ra,_ as Oe,a as ia}from"./VIcon-4dfa5dd0.js";import{m as ua,V as ve,a as ca,u as da,b as fa,c as be,d as va,e as ba,f as ma,_ as Z,F as ga}from"./VBtn-f5d28335.js";import{m as pa,u as Ta}from"./display-6177e26b.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";function ya(e,n,l){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(n,l)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(u=>{o.onfinish=()=>{u(o)}})),o}const ha="cubic-bezier(0.4, 0, 0.2, 1)",Ae=Ve({name:"FSTabs",props:{tab:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:Be.Primary}},emits:["update:tab"],setup(e,{emit:n}){const{tab:l,color:o}=Pe(e),u=G().getVariants(o.value),i=G().getText(),a={"--lc":u.light,"--bc":u.base,"--dc":u.dark,"--lt":i.base,"--bt":i.base,"--dt":i.dark};return{tab:l,color:o,style:a,emit:n}}});const Ie=Symbol.for("vuetify:v-tabs"),Sa=N({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Qe(ua({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ee=E()({name:"VTab",props:Sa(),setup(e,n){let{slots:l,attrs:o}=n;const{textColorClasses:u,textColorStyles:i}=Ze(e,"sliderColor"),a=S(()=>e.direction==="horizontal"),t=V(!1),s=ie(),c=ie();function v(f){var $,m;let{value:g}=f;if(t.value=g,g){const C=(m=($=s.value)==null?void 0:$.$el.parentElement)==null?void 0:m.querySelector(".v-tab--selected .v-tab__slider"),F=c.value;if(!C||!F)return;const D=getComputedStyle(C).color,y=C.getBoundingClientRect(),x=F.getBoundingClientRect(),k=a.value?"x":"y",B=a.value?"X":"Y",q=a.value?"right":"bottom",_=a.value?"width":"height",W=y[k],R=x[k],w=W>R?y[q]-x[q]:y[k]-x[k],U=Math.sign(w)>0?a.value?"right":"bottom":Math.sign(w)<0?a.value?"left":"top":"center",X=(Math.abs(w)+(Math.sign(w)<0?y[_]:x[_]))/Math.max(y[_],x[_])||0,T=y[_]/x[_]||0,O=1.5;ya(F,{backgroundColor:[D,"currentcolor"],transform:[`translate${B}(${w}px) scale${B}(${T})`,`translate${B}(${w/O}px) scale${B}(${(X-1)/O+1})`,"none"],transformOrigin:Array(3).fill(U)},{duration:225,easing:ha})}}return ee(()=>{const f=ve.filterProps(e);return b(ve,I({symbol:Ie,ref:s,class:["v-tab",e.class],style:e.style,tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1},f,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":v}),{...l,default:()=>{var g;return b(Ne,null,[((g=l.default)==null?void 0:g.call(l))??e.text,!e.hideSlider&&b("div",{ref:c,class:["v-tab__slider",u.value],style:i.value},null)])}})}),{}}});const xa=N({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function p(e,n,l){return E()({name:e,props:xa({mode:l,origin:n}),setup(o,u){let{slots:i}=u;const a={onBeforeEnter(t){o.origin&&(t.style.transformOrigin=o.origin)},onLeave(t){if(o.leaveAbsolute){const{offsetTop:s,offsetLeft:c,offsetWidth:v,offsetHeight:f}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=`${s}px`,t.style.left=`${c}px`,t.style.width=`${v}px`,t.style.height=`${f}px`}o.hideOnLeave&&t.style.setProperty("display","none","important")},onAfterLeave(t){if(o.leaveAbsolute&&(t!=null&&t._transitionInitialStyles)){const{position:s,top:c,left:v,width:f,height:g}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=s||"",t.style.top=c||"",t.style.left=v||"",t.style.width=f||"",t.style.height=g||""}}};return()=>{const t=o.group?je:$e;return Fe(t,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},i.default)}}})}function qe(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return E()({name:e,props:{mode:{type:String,default:l},disabled:Boolean},setup(o,u){let{slots:i}=u;return()=>Fe($e,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:n},i.default)}})}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const l=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=De(`offset-${l}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[l]:a.style[l]}},onEnter(a){const t=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const s=`${a[o]}px`;a.style[l]="0",a.offsetHeight,a.style.transition=t.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[l]=s})},onAfterEnter:i,onEnterCancelled:i,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[l]:a.style[l]},a.style.overflow="hidden",a.style[l]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[l]="0")},onAfterLeave:u,onLeaveCancelled:u};function u(a){e&&a._parent&&a._parent.classList.remove(e),i(a)}function i(a){const t=a._initialStyle[l];a.style.overflow=a._initialStyle.overflow,t!=null&&(a.style[l]=t),delete a._initialStyle}}p("fab-transition","center center","out-in");p("dialog-bottom-transition");p("dialog-top-transition");const me=p("fade-transition");p("scale-transition");p("scroll-x-transition");p("scroll-x-reverse-transition");p("scroll-y-transition");p("scroll-y-reverse-transition");p("slide-x-transition");p("slide-x-reverse-transition");p("slide-y-transition");p("slide-y-reverse-transition");qe("expand-transition",Me());qe("expand-x-transition",Me("",!0));function ge(e){const l=Math.abs(e);return Math.sign(e)*(l/((1/.501-2)*(1-l)+1))}function pe(e){let{selectedElement:n,containerSize:l,contentSize:o,isRtl:u,currentScrollOffset:i,isHorizontal:a}=e;const t=a?n.clientWidth:n.clientHeight,s=a?n.offsetLeft:n.offsetTop,c=u&&a?o-s-t:s,v=l+i,f=t+c,g=t*.4;return c<=i?i=Math.max(c-g,0):v<=f&&(i=Math.min(i-(v-f-g),o-l)),i}function _a(e){let{selectedElement:n,containerSize:l,contentSize:o,isRtl:u,isHorizontal:i}=e;const a=i?n.clientWidth:n.clientHeight,t=i?n.offsetLeft:n.offsetTop,s=u&&i?o-t-a/2-l/2:t+a/2-l/2;return Math.min(o-l,Math.max(0,s))}const wa=Symbol.for("vuetify:v-slide-group"),Le=N({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:wa},nextIcon:{type:de,default:"$next"},prevIcon:{type:de,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ea(),...pa(),...Re(),...ca({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Te=E()({name:"VSlideGroup",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{isRtl:o}=da(),{displayClasses:u,mobile:i}=Ta(e),a=fa(e,e.symbol),t=V(!1),s=V(0),c=V(0),v=V(0),f=S(()=>e.direction==="horizontal"),{resizeRef:g,contentRect:$}=be(),{resizeRef:m,contentRect:C}=be(),F=S(()=>a.selected.value.length?a.items.value.findIndex(r=>r.id===a.selected.value[0]):-1),D=S(()=>a.selected.value.length?a.items.value.findIndex(r=>r.id===a.selected.value[a.selected.value.length-1]):-1);if(aa){let r=-1;We(()=>[a.selected.value,$.value,C.value,f.value],()=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{if($.value&&C.value){const d=f.value?"width":"height";c.value=$.value[d],v.value=C.value[d],t.value=c.value+1<v.value}if(F.value>=0&&m.value){const d=m.value.children[D.value];F.value===0||!t.value?s.value=0:e.centerActive?s.value=_a({selectedElement:d,containerSize:c.value,contentSize:v.value,isRtl:o.value,isHorizontal:f.value}):t.value&&(s.value=pe({selectedElement:d,containerSize:c.value,contentSize:v.value,isRtl:o.value,currentScrollOffset:s.value,isHorizontal:f.value}))}})})}const y=V(!1);let x=0,k=0;function B(r){const d=f.value?"clientX":"clientY";k=(o.value&&f.value?-1:1)*s.value,x=r.touches[0][d],y.value=!0}function q(r){if(!t.value)return;const d=f.value?"clientX":"clientY",h=o.value&&f.value?-1:1;s.value=h*(k+x-r.touches[0][d])}function _(r){const d=v.value-c.value;s.value<0||!t.value?s.value=0:s.value>=d&&(s.value=d),y.value=!1}function W(){g.value&&(g.value[f.value?"scrollLeft":"scrollTop"]=0)}const R=V(!1);function w(r){if(R.value=!0,!(!t.value||!m.value)){for(const d of r.composedPath())for(const h of m.value.children)if(h===d){s.value=pe({selectedElement:h,containerSize:c.value,contentSize:v.value,isRtl:o.value,currentScrollOffset:s.value,isHorizontal:f.value});return}}}function U(r){R.value=!1}function te(r){var d;!R.value&&!(r.relatedTarget&&((d=m.value)!=null&&d.contains(r.relatedTarget)))&&T()}function X(r){m.value&&(f.value?r.key==="ArrowRight"?T(o.value?"prev":"next"):r.key==="ArrowLeft"&&T(o.value?"next":"prev"):r.key==="ArrowDown"?T("next"):r.key==="ArrowUp"&&T("prev"),r.key==="Home"?T("first"):r.key==="End"&&T("last"))}function T(r){var d,h,ne,se,re;if(m.value)if(!r)(d=ta(m.value)[0])==null||d.focus();else if(r==="next"){const A=(h=m.value.querySelector(":focus"))==null?void 0:h.nextElementSibling;A?A.focus():T("first")}else if(r==="prev"){const A=(ne=m.value.querySelector(":focus"))==null?void 0:ne.previousElementSibling;A?A.focus():T("last")}else r==="first"?(se=m.value.firstElementChild)==null||se.focus():r==="last"&&((re=m.value.lastElementChild)==null||re.focus())}function O(r){const d=s.value+(r==="prev"?-1:1)*c.value;s.value=oa(d,0,v.value-c.value)}const Ge=S(()=>{let r=s.value>v.value-c.value?-(v.value-c.value)+ge(v.value-c.value-s.value):-s.value;s.value<=0&&(r=ge(-s.value));const d=o.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${d*r}px)`,transition:y.value?"none":"",willChange:y.value?"transform":""}}),Y=S(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),K=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!i.value;case!0:return t.value||Math.abs(s.value)>0;case"mobile":return i.value||t.value||Math.abs(s.value)>0;default:return!i.value&&(t.value||Math.abs(s.value)>0)}}),oe=S(()=>Math.abs(s.value)>0),le=S(()=>v.value>Math.abs(s.value)+c.value);return ee(()=>b(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":t.value},u.value,e.class],style:e.style,tabindex:R.value||a.selected.value.length?-1:0,onFocus:te},{default:()=>{var r,d,h;return[K.value&&b("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!oe.value}],onClick:()=>oe.value&&O("prev")},[((r=l.prev)==null?void 0:r.call(l,Y.value))??b(me,null,{default:()=>[b(fe,{icon:o.value?e.nextIcon:e.prevIcon},null)]})]),b("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:W},[b("div",{ref:m,class:"v-slide-group__content",style:Ge.value,onTouchstartPassive:B,onTouchmovePassive:q,onTouchendPassive:_,onFocusin:w,onFocusout:U,onKeydown:X},[(d=l.default)==null?void 0:d.call(l,Y.value)])]),K.value&&b("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!le.value}],onClick:()=>le.value&&O("next")},[((h=l.next)==null?void 0:h.call(l,Y.value))??b(me,null,{default:()=>[b(fe,{icon:o.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:O,scrollOffset:s,focus:T}}});function Ca(e){return e?e.map(n=>ra(n)?n:{text:n,value:n}):[]}const ka=N({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Le({mandatory:"force"}),...va(),...Re()},"VTabs"),za=E()({name:"VTabs",props:ka(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const o=ba(e,"modelValue"),u=S(()=>Ca(e.items)),{densityClasses:i}=ma(e),{backgroundColorClasses:a,backgroundColorStyles:t}=la(z(e,"bgColor"));return na({VTab:{color:z(e,"color"),direction:z(e,"direction"),stacked:z(e,"stacked"),fixed:z(e,"fixedTabs"),sliderColor:z(e,"sliderColor"),hideSlider:z(e,"hideSlider")}}),ee(()=>{const s=Te.filterProps(e);return b(Te,I(s,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,a.value,e.class],style:[{"--v-tabs-height":sa(e.height)},t.value,e.style],role:"tablist",symbol:Ie}),{default:()=>[l.default?l.default():u.value.map(c=>b(Ee,I(c,{key:c.text}),null))]})}),{}}});function Va(e,n,l,o,u,i){return J(),Q(za,I({class:"fs-tabs","selected-class":"fs-tab-active","show-arrows":"",grow:"",style:e.style,modelValue:e.tab,"onUpdate:modelValue":n[0]||(n[0]=a=>e.emit("update:tab",a))},e.$attrs),{default:P(()=>[Ue(e.$slots,"default",Xe(Ye({color:e.color})),void 0,!0)]),_:3},16,["style","modelValue"])}const j=Oe(Ae,[["render",Va],["__scopeId","data-v-d02e637d"]]);Ae.__docgenInfo={displayName:"FSTabs",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],events:[{name:"update:tab"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSTabs.vue"]};const He=Ve({name:"FSTab",components:{FSSpan:Z,FSRow:ga},props:{label:{type:String,required:!0},tag:{type:String,required:!1,default:null},color:{type:String,required:!1,default:Be.Primary}},setup(e){const{label:n,color:l}=Pe(e),o=ia().getTextSize(n.value,"text-button"),u=G().getVariants(l.value),i=G().getText(),a={"--ww":o.web,"--mw":o.mobile,"--lc":u.light,"--bc":u.base,"--dc":u.dark,"--lt":i.base,"--bt":i.base,"--dt":i.dark};return{label:n,style:a,sliderColor:u.base}}});function Pa(e,n,l,o,u,i){const a=Ke("FSRow");return J(),Q(Ee,I({class:"fs-tab",ripple:!1,style:e.style,"slider-color":e.sliderColor},e.$attrs),{default:P(()=>[b(a,null,{default:P(()=>[b(a,{class:"fs-tab-label"},{default:P(()=>[b(Z,null,{default:P(()=>[ue(ce(e.label),1)]),_:1})]),_:1}),e.tag?(J(),Q(a,{key:0,class:"fs-tab-tag",width:"hug"},{default:P(()=>[b(Z,{font:"text-body"},{default:P(()=>[ue(ce(e.tag),1)]),_:1})]),_:1})):Je("",!0)]),_:1})]),_:1},16,["style","slider-color"])}const ae=Oe(He,[["render",Pa],["__scopeId","data-v-ada57fb7"]]);He.__docgenInfo={displayName:"FSTab",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"tag",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSTab.vue"]};const Ia={title:"Foundation/Tabs",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},M={args:{args:{tab:0,color:"primary"}},render:(e,{argTypes:n})=>({components:{Tabs:j,Tab:ae},props:Object.keys(n),setup(){return{...e}},template:`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    `})},L={args:{args:{color:"primary"}},render:(e,{argTypes:n})=>({components:{Tabs:j,Tab:ae},props:Object.keys(n),setup(){return{...e}},template:`
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1"   :value="0" :color="color" tag="1" />
          <Tab label="Tab 2"   :value="1" :color="color" tag="2" />
          <Tab label="Tab 3"   :value="2" :color="color" tag="3" />
          <Tab label="Tab 4"   :value="3" :color="color" />
          <Tab label="Tab 5"   :value="4" :color="color" tag="5" />
          <Tab label="Tab 99+" :value="5" :color="color" tag="99+" />
        </template>
      </Tabs>
    `})},H={args:{args:{color:"warning"}},render:(e,{argTypes:n})=>({components:{Tabs:j,Tab:ae},props:Object.keys(n),setup(){return{...e}},template:`
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name" :value="0" :color="color" tag="First" />
          <Tab label="Tab 2: This tab has a long name" :value="1" :color="color" />
          <Tab label="Tab 3: This tab has a long name" :value="2" :color="color" />
          <Tab label="Tab 4: This tab has a long name" :value="3" :color="color" />
          <Tab label="Tab 5: This tab has a long name" :value="4" :color="color" />
          <Tab label="Tab 6: This tab has a long name" :value="5" :color="color" />
          <Tab label="Tab 7: This tab has a long name" :value="6" :color="color" />
          <Tab label="Tab 8: This tab has a long name" :value="7" :color="color" />
          <Tab label="Tab 9: This tab has a long name" :value="8" :color="color" tag="Last" />
        </template>
      </Tabs>
    `})};var ye,he,Se;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    args: {
      tab: 0,
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Tabs v-bind="args" v-model:tab="args.tab">
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    \`
  })
}`,...(Se=(he=M.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var xe,_e,we;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    args: {
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1"   :value="0" :color="color" tag="1" />
          <Tab label="Tab 2"   :value="1" :color="color" tag="2" />
          <Tab label="Tab 3"   :value="2" :color="color" tag="3" />
          <Tab label="Tab 4"   :value="3" :color="color" />
          <Tab label="Tab 5"   :value="4" :color="color" tag="5" />
          <Tab label="Tab 99+" :value="5" :color="color" tag="99+" />
        </template>
      </Tabs>
    \`
  })
}`,...(we=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};var Ce,ke,ze;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    args: {
      color: "warning"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Tabs,
      Tab
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name" :value="0" :color="color" tag="First" />
          <Tab label="Tab 2: This tab has a long name" :value="1" :color="color" />
          <Tab label="Tab 3: This tab has a long name" :value="2" :color="color" />
          <Tab label="Tab 4: This tab has a long name" :value="3" :color="color" />
          <Tab label="Tab 5: This tab has a long name" :value="4" :color="color" />
          <Tab label="Tab 6: This tab has a long name" :value="5" :color="color" />
          <Tab label="Tab 7: This tab has a long name" :value="6" :color="color" />
          <Tab label="Tab 8: This tab has a long name" :value="7" :color="color" />
          <Tab label="Tab 9: This tab has a long name" :value="8" :color="color" tag="Last" />
        </template>
      </Tabs>
    \`
  })
}`,...(ze=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};const Ea=["Standard","WithTags","ShowArrows"];export{H as ShowArrows,M as Standard,L as WithTags,Ea as __namedExportsOrder,Ia as default};
//# sourceMappingURL=Tabs.stories-27f77285.js.map
