import{d as N,b as B,c as v,w as x,s as T,p as D,N as h,X as P,Y as U,i as K,a1 as J,n as Q,z as b,A as V,B as Z,O as k,C,m as p,K as ee,L as te,M as ne,E as oe,q as se,G as ae}from"./vue.esm-bundler-DTB_q9xr.js";import{u as ie}from"./useSlots-BnylMYIF.js";import{s as W}from"./css-B7hQ34V-.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as R,g as H,a as F}from"./color-Du5JXqac.js";import{u as le,a as re,b as ce}from"./group-CBQYGNTq.js";import{a as de,u as fe}from"./locale-BJQwrXJ7.js";import{a as ve}from"./VIcon-DzZvThha.js";import{H as L,p as A,s as me,x as he,c as X}from"./theme-CX_N7n5F.js";import{V as Y}from"./VBtn-BUwP05fv.js";import{m as ge,u as ye}from"./lazy-CgkI0iJG.js";import{u as we}from"./ssrBoot-BTOmRKcz.js";import{M as be}from"./transition-DhTIerNz.js";const M=N({name:"FSWindow",props:{width:{type:[Array,String,Number],required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:null},modelValue:{type:[String,Number,Object],required:!1,default:0}},emits:["update:modelValue"],setup(e){const{slots:o,getChildren:t}=ie();delete o.default;const n=B(null),a=v(()=>({"--fs-window-width":W(e.width),"--fs-window-height":W(e.height)})),u=(s,i)=>{var l;return((l=s==null?void 0:s.props)==null?void 0:l.value)??i};return x(()=>e.modelValue,()=>{n.value!=null&&(n.value.$el.style.setProperty("overflow","hidden","important"),setTimeout(()=>{n.value.$el.style.setProperty("overflow","visible","important")},520))}),{windowRoot:n,slots:o,style:a,getChildren:t,value:u}}}),Se=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function Ve(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ce(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Se(o)}function Be(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Te(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ve(t,o),touchend:t=>Ce(t,o),touchmove:t=>Be(t,o)}}function $e(e,o){var i;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},u=(i=o.instance)==null?void 0:i.$.uid;if(!n||!u)return;const s=Te(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,L(s).forEach(l=>{n.addEventListener(l,s[l],a)})}function _e(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];L(a).forEach(i=>{t.removeEventListener(i,a[i])}),delete t._touchHandlers[n]}const q={mounted:$e,unmounted:_e},O=Symbol.for("vuetify:v-window"),j=Symbol.for("vuetify:v-window-group"),Ee=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...R(),...ve(),...me()},"VWindow"),Ie=H()({name:"VWindow",directives:{Touch:q},props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=he(e),{isRtl:a}=de(),{t:u}=fe(),s=le(e,j),i=B(),l=v(()=>a.value?!e.reverse:e.reverse),f=T(!1),y=v(()=>{const r=e.direction==="vertical"?"y":"x",m=(l.value?!f.value:f.value)?"-reverse":"";return`v-window-${r}${m}-transition`}),S=T(0),w=B(void 0),g=v(()=>s.items.value.findIndex(r=>s.selected.value.includes(r.id)));x(g,(r,d)=>{const m=s.items.value.length,I=m-1;m<=2?f.value=r<d:r===I&&d===0?f.value=!0:r===0&&d===I?f.value=!1:f.value=r<d}),D(O,{transition:y,isReversed:f,transitionCount:S,transitionHeight:w,rootRef:i});const c=v(()=>e.continuous||g.value!==0),$=v(()=>e.continuous||g.value!==s.items.value.length-1);function _(){c.value&&s.prev()}function E(){$.value&&s.next()}const z=v(()=>{const r=[],d={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};r.push(c.value?t.prev?t.prev({props:d}):h(Y,d,null):h("div",null,null));const m={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return r.push($.value?t.next?t.next({props:m}):h(Y,m,null):h("div",null,null)),r}),G=v(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?_():E()},right:()=>{l.value?E():_()},start:d=>{let{originalEvent:m}=d;m.stopPropagation()}},...e.touch===!0?{}:e.touch});return F(()=>P(h(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var r,d;return[h("div",{class:"v-window__container",style:{height:w.value}},[(r=t.default)==null?void 0:r.call(t,{group:s}),e.showArrows!==!1&&h("div",{class:"v-window__controls"},[z.value])]),(d=t.additional)==null?void 0:d.call(t,{group:s})]}}),[[U("touch"),G.value]])),{group:s}}}),ke=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...R(),...re(),...ge()},"VWindowItem"),We=H()({name:"VWindowItem",directives:{Touch:q},props:ke(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K(O),a=ce(e,j),{isBooted:u}=we();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=T(!1),i=v(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function f(){var c;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function y(){l()}function S(c){s.value&&Q(()=>{!i.value||!s.value||!n||(n.transitionHeight.value=X(c.clientHeight))})}const w=v(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:f,onAfterEnter:l,onEnterCancelled:y,onBeforeLeave:f,onAfterLeave:l,onLeaveCancelled:y,onEnter:S}:!1}),{hasContent:g}=ye(e,a.isSelected);return F(()=>h(be,{transition:w.value,disabled:!u.value},{default:()=>{var c;return[P(h("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[J,a.isSelected.value]])]}})),{groupItem:a}}});function Xe(e,o,t,n,a,u){return b(),V(Ie,p({ref:"windowRoot",class:"fs-window",touch:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),Z({default:C(()=>[(b(!0),oe(ae,null,k(e.getChildren(),(s,i)=>(b(),V(We,{class:"fs-window-item",value:e.value(s,i),key:i},{default:C(()=>[(b(),V(se(s)))]),_:2},1032,["value"]))),128))]),_:2},[k(e.slots,(s,i)=>({name:i,fn:C(l=>[ee(e.$slots,i,te(ne(l)))])}))]),1040,["modelValue"])}const Ge=ue(M,[["render",Xe]]);M.__docgenInfo={displayName:"FSWindow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"any"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWindow.vue"]};export{Ge as F};
