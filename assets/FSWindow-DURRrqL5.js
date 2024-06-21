import{d as D,c as f,b as W,s as B,w as G,p as q,K as m,W as Y,X as N,i as K,a1 as Q,n as U,z as S,A as C,O as J,P as X,B as _,m as Z,L as p,M as ee,N as te,C as ne,q as oe,F as se}from"./vue.esm-bundler-DUki7rNA.js";import{u as ae}from"./useSlots-BZu_lZyn.js";import{s as ie}from"./css-BPLLlL3Y.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as P,g as V,u as F}from"./useRender-pAH_6Aah.js";import{u as le,a as re,b as ce}from"./group-BFGJGSPe.js";import{a as de,u as ve}from"./locale-BngQMCjE.js";import{m as fe}from"./tag-BAqPjmMA.js";import{Q as H,p as R,D as he,F as me,h as $}from"./theme-BdipdDNo.js";import{V as x}from"./VBtn-CI38s1mD.js";import{m as ge,u as ye}from"./lazy-CXE1MfIY.js";import{u as we}from"./ssrBoot-DA_Fjfes.js";import{M as Se}from"./transition-CAmaHrck.js";const L=D({name:"FSWindow",props:{width:{type:[Array,String,Number],required:!1,default:null}},setup(e){const{slots:n,getChildren:t}=ae();delete n.default;const o=f(()=>({"--fs-window-width":ie(e.width)}));return{slots:n,style:o,getChildren:t,value:(u,s)=>{var i;return((i=u==null?void 0:u.props)==null?void 0:i.value)??s}}}}),be=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:a}=e,u=.5,s=16;e.offsetX=t-n,e.offsetY=a-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<o-s&&e.up(e),e.down&&a>o+s&&e.down(e))};function Ce(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function _e(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),be(n)}function Be(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Te(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ce(t,n),touchend:t=>_e(t,n),touchmove:t=>Be(t,n)}}function Ie(e,n){var i;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},u=(i=n.instance)==null?void 0:i.$.uid;if(!o||!u)return;const s=Te(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=s,H(s).forEach(r=>{o.addEventListener(r,s[r],a)})}function ke(e,n){var u,s;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const a=t._touchHandlers[o];H(a).forEach(i=>{t.removeEventListener(i,a[i])}),delete t._touchHandlers[o]}const M={mounted:Ie,unmounted:ke},A=Symbol.for("vuetify:v-window"),z=Symbol.for("vuetify:v-window-group"),Ee=R({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...P(),...fe(),...he()},"VWindow"),We=V()({name:"VWindow",directives:{Touch:M},props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=me(e),{isRtl:a}=de(),{t:u}=ve(),s=le(e,z),i=W(),r=f(()=>a.value?!e.reverse:e.reverse),v=B(!1),y=f(()=>{const l=e.direction==="vertical"?"y":"x",h=(r.value?!v.value:v.value)?"-reverse":"";return`v-window-${l}${h}-transition`}),b=B(0),w=W(void 0),g=f(()=>s.items.value.findIndex(l=>s.selected.value.includes(l.id)));G(g,(l,d)=>{const h=s.items.value.length,E=h-1;h<=2?v.value=l<d:l===E&&d===0?v.value=!0:l===0&&d===E?v.value=!1:v.value=l<d}),q(A,{transition:y,isReversed:v,transitionCount:b,transitionHeight:w,rootRef:i});const c=f(()=>e.continuous||g.value!==0),T=f(()=>e.continuous||g.value!==s.items.value.length-1);function I(){c.value&&s.prev()}function k(){T.value&&s.next()}const O=f(()=>{const l=[],d={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};l.push(c.value?t.prev?t.prev({props:d}):m(x,d,null):m("div",null,null));const h={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return l.push(T.value?t.next?t.next({props:h}):m(x,h,null):m("div",null,null)),l}),j=f(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?I():k()},right:()=>{r.value?k():I()},start:d=>{let{originalEvent:h}=d;h.stopPropagation()}},...e.touch===!0?{}:e.touch});return F(()=>Y(m(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var l,d;return[m("div",{class:"v-window__container",style:{height:w.value}},[(l=t.default)==null?void 0:l.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[O.value])]),(d=t.additional)==null?void 0:d.call(t,{group:s})]}}),[[N("touch"),j.value]])),{group:s}}}),Xe=R({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...P(),...re(),...ge()},"VWindowItem"),$e=V()({name:"VWindowItem",directives:{Touch:M},props:Xe(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=K(A),a=ce(e,z),{isBooted:u}=we();if(!o||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=B(!1),i=f(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function v(){var c;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=$((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function y(){r()}function b(c){s.value&&U(()=>{!i.value||!s.value||!o||(o.transitionHeight.value=$(c.clientHeight))})}const w=f(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:v,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:v,onAfterLeave:r,onLeaveCancelled:y,onEnter:b}:!1}),{hasContent:g}=ye(e,a.isSelected);return F(()=>m(Se,{transition:w.value,disabled:!u.value},{default:()=>{var c;return[Y(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[Q,a.isSelected.value]])]}})),{groupItem:a}}});function xe(e,n,t,o,a,u){return S(),C(We,Z({class:"fs-window",style:e.style,touch:!1},e.$attrs),J({default:_(()=>[(S(!0),ne(se,null,X(e.getChildren(),(s,i)=>(S(),C($e,{value:e.value(s,i),key:i},{default:_(()=>[(S(),C(oe(s)))]),_:2},1032,["value"]))),128))]),_:2},[X(e.slots,(s,i)=>({name:i,fn:_(r=>[p(e.$slots,i,ee(te(r)))])}))]),1040,["style"])}const Ge=ue(L,[["render",xe]]);L.__docgenInfo={displayName:"FSWindow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWindow.vue"]};export{Ge as F};
