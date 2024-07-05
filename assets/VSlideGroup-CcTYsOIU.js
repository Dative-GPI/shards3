import{s as x,c as S,w as Z,I as h}from"./vue.esm-bundler-DC82FEWN.js";import{V as H}from"./index-DWl9tX7E.js";import{m as ee,g as te,u as le}from"./color-BhlhQtQT.js";import{m as ae,u as ne}from"./display-D6hZonHv.js";import{m as se,u as oe}from"./group-DaluXt-5.js";import{I as G,m as ue,V as L}from"./VIcon-uFUcYN4x.js";import{u as ie}from"./locale-BC9z6YbT.js";import{u as $}from"./VProgressCircular-D8KFt_en.js";import{p as re,I as ce,k as ve,x as fe}from"./theme-CDGAP9oX.js";function q(a){const s=Math.abs(a);return Math.sign(a)*(s/((1/.501-2)*(1-s)+1))}function B(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:z,currentScrollOffset:c,isHorizontal:n}=a;const o=n?d.clientWidth:d.clientHeight,t=n?d.offsetLeft:d.offsetTop,r=z&&n?i-t-o:t,v=s+c,u=o+r,g=o*.4;return r<=c?c=Math.max(r-g,0):v<=u&&(c=Math.min(c-(v-u-g),i-s)),c}function de(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:z,isHorizontal:c}=a;const n=c?d.clientWidth:d.clientHeight,o=c?d.offsetLeft:d.offsetTop,t=z&&c?i-o-n/2-s/2:o+n/2-s/2;return Math.min(i-s,Math.max(0,t))}const me=Symbol.for("vuetify:v-slide-group"),pe=re({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:me},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["always","desktop","mobile"].includes(a)},...ee(),...ae(),...ue(),...se({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ke=te()({name:"VSlideGroup",props:pe(),emits:{"update:modelValue":a=>!0},setup(a,d){let{slots:s}=d;const{isRtl:i}=ie(),{displayClasses:z,mobile:c}=ne(a),n=oe(a,a.symbol),o=x(!1),t=x(0),r=x(0),v=x(0),u=S(()=>a.direction==="horizontal"),{resizeRef:g,contentRect:R}=$(),{resizeRef:f,contentRect:k}=$(),P=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),D=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(ce){let e=-1;Z(()=>[n.selected.value,R.value,k.value,u.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(R.value&&k.value){const l=u.value?"width":"height";r.value=R.value[l],v.value=k.value[l],o.value=r.value+1<v.value}if(P.value>=0&&f.value){const l=f.value.children[D.value];P.value===0||!o.value?t.value=0:a.centerActive?t.value=de({selectedElement:l,containerSize:r.value,contentSize:v.value,isRtl:i.value,isHorizontal:u.value}):o.value&&(t.value=B({selectedElement:l,containerSize:r.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:u.value}))}})})}const b=x(!1);let A=0,V=0;function N(e){const l=u.value?"clientX":"clientY";V=(i.value&&u.value?-1:1)*t.value,A=e.touches[0][l],b.value=!0}function W(e){if(!o.value)return;const l=u.value?"clientX":"clientY",m=i.value&&u.value?-1:1;t.value=m*(V+A-e.touches[0][l])}function X(e){const l=v.value-r.value;t.value<0||!o.value?t.value=0:t.value>=l&&(t.value=l),b.value=!1}function Y(){g.value&&(g.value[u.value?"scrollLeft":"scrollTop"]=0)}const w=x(!1);function K(e){if(w.value=!0,!(!o.value||!f.value)){for(const l of e.composedPath())for(const m of f.value.children)if(m===l){t.value=B({selectedElement:m,containerSize:r.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:u.value});return}}}function U(e){w.value=!1}function j(e){var l;!w.value&&!(e.relatedTarget&&((l=f.value)!=null&&l.contains(e.relatedTarget)))&&p()}function J(e){f.value&&(u.value?e.key==="ArrowRight"?p(i.value?"prev":"next"):e.key==="ArrowLeft"&&p(i.value?"next":"prev"):e.key==="ArrowDown"?p("next"):e.key==="ArrowUp"&&p("prev"),e.key==="Home"?p("first"):e.key==="End"&&p("last"))}function p(e){var l,m,F,M,E;if(f.value)if(!e)(l=ve(f.value)[0])==null||l.focus();else if(e==="next"){const y=(m=f.value.querySelector(":focus"))==null?void 0:m.nextElementSibling;y?y.focus():p("first")}else if(e==="prev"){const y=(F=f.value.querySelector(":focus"))==null?void 0:F.previousElementSibling;y?y.focus():p("last")}else e==="first"?(M=f.value.firstElementChild)==null||M.focus():e==="last"&&((E=f.value.lastElementChild)==null||E.focus())}function I(e){const l=t.value+(e==="prev"?-1:1)*r.value;t.value=fe(l,0,v.value-r.value)}const Q=S(()=>{let e=t.value>v.value-r.value?-(v.value-r.value)+q(v.value-r.value-t.value):-t.value;t.value<=0&&(e=q(-t.value));const l=i.value&&u.value?-1:1;return{transform:`translate${u.value?"X":"Y"}(${l*e}px)`,transition:b.value?"none":"",willChange:b.value?"transform":""}}),T=S(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),O=S(()=>{switch(a.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return o.value||Math.abs(t.value)>0;case"mobile":return c.value||o.value||Math.abs(t.value)>0;default:return!c.value&&(o.value||Math.abs(t.value)>0)}}),_=S(()=>Math.abs(t.value)>0),C=S(()=>v.value>Math.abs(t.value)+r.value);return le(()=>h(a.tag,{class:["v-slide-group",{"v-slide-group--vertical":!u.value,"v-slide-group--has-affixes":O.value,"v-slide-group--is-overflowing":o.value},z.value,a.class],style:a.style,tabindex:w.value||n.selected.value.length?-1:0,onFocus:j},{default:()=>{var e,l,m;return[O.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!_.value}],onClick:()=>_.value&&I("prev")},[((e=s.prev)==null?void 0:e.call(s,T.value))??h(H,null,{default:()=>[h(L,{icon:i.value?a.nextIcon:a.prevIcon},null)]})]),h("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:Y},[h("div",{ref:f,class:"v-slide-group__content",style:Q.value,onTouchstartPassive:N,onTouchmovePassive:W,onTouchendPassive:X,onFocusin:K,onFocusout:U,onKeydown:J},[(l=s.default)==null?void 0:l.call(s,T.value)])]),O.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!C.value}],onClick:()=>C.value&&I("next")},[((m=s.next)==null?void 0:m.call(s,T.value))??h(H,null,{default:()=>[h(L,{icon:i.value?a.prevIcon:a.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:I,scrollOffset:t,focus:p}}});export{ke as V,me as a,pe as m};