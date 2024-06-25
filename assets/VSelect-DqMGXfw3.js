import{l as Z,I as i,m as M,c as R,X as me,Y as _e,a1 as Fe,F as N,w as $,s as q,j as pe,b as Y,q as be,n as Se,o as Le,E as Ee}from"./vue.esm-bundler-DC82FEWN.js";import{m as Oe,V as he}from"./FSTextField-BHg2KNCG.js";import{b as Me}from"./VInput-BvcCh06W.js";import{f as He}from"./forwardRefs-DWGaNmQL.js";import{m as Ce,I as ne,a as ze,u as Ke,V as J}from"./VIcon-uFUcYN4x.js";import{b as ce,g as qe,u as Ue,a as Ge,V as ge}from"./VList-D_XNZRf5.js";import{a as Pe}from"./locale-BC9z6YbT.js";import{u as de,a as Ne}from"./proxiedModel-CYw7-KgF.js";import{m as $e}from"./transition-CJbyFvkq.js";import{g as je,V as We}from"./VOverlay-HCh9BhQb.js";import{V as Xe}from"./VMenu-Dhrs_Dg2.js";import{m as oe,g as le,p as Ye,u as se}from"./color-BhlhQtQT.js";import{u as Ie}from"./VProgressCircular-D8KFt_en.js";import{p as j,d as Je,r as we,s as xe,E as ye,x as ue,R as Qe,I as Te,b as Ze,c as ae,o as el,w as ll,z as tl,B as ke}from"./theme-CDGAP9oX.js";import{m as al,u as nl}from"./dimensions-fR777bfb.js";import{u as ol}from"./display-D6hZonHv.js";import{V as sl}from"./FSCheckbox-M8Bs7S24.js";import{c as il}from"./index-DWl9tX7E.js";import{m as ul,V as Ve}from"./VSlideGroup-CcTYsOIU.js";import{m as rl,u as cl,a as dl,b as vl}from"./group-DaluXt-5.js";import{a as Ae,m as fl,u as ml,b as pl,g as hl}from"./border-Csacwza1.js";import{m as gl,u as yl}from"./density-XYshZx8z.js";import{m as kl,u as Vl}from"./elevation-BoGrGvdU.js";import{m as bl,u as Sl}from"./rounded-TFXDyxjJ.js";import{m as Cl,u as Pl}from"./router-CRaPYJ7n.js";import{R as Il}from"./index-ySUbTvsm.js";import{V as ee}from"./VDefaultsProvider-CTE9NJfn.js";const Re=Symbol.for("vuetify:v-chip-group"),wl=j({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Je},...ul(),...oe(),...rl({selectedClass:"v-chip--selected"}),...Ce(),...we(),...Ae({variant:"tonal"})},"VChipGroup");le()({name:"VChipGroup",props:wl(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const{themeClasses:d}=xe(e),{isSelected:a,select:f,next:y,prev:u,selected:s}=cl(e,Re);return Ye({VChip:{color:Z(e,"color"),disabled:Z(e,"disabled"),filter:Z(e,"filter"),variant:Z(e,"variant")}}),se(()=>{const h=Ve.filterProps(e);return i(Ve,M(h,{class:["v-chip-group",{"v-chip-group--column":e.column},d.value,e.class],style:e.style}),{default:()=>{var I;return[(I=t.default)==null?void 0:I.call(t,{isSelected:a,select:f,next:y,prev:u,selected:s.value})]}})}),{}}});const xl=j({activeClass:String,appendAvatar:String,appendIcon:ne,closable:Boolean,closeIcon:{type:ne,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ye(),onClickOnce:ye(),...fl(),...oe(),...gl(),...kl(),...dl(),...bl(),...Cl(),...ze(),...Ce({tag:"span"}),...we(),...Ae({variant:"tonal"})},"VChip"),Tl=le()({name:"VChip",directives:{Ripple:Il},props:xl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,v){let{attrs:t,emit:d,slots:a}=v;const{t:f}=Pe(),{borderClasses:y}=ml(e),{colorClasses:u,colorStyles:s,variantClasses:h}=pl(e),{densityClasses:I}=yl(e),{elevationClasses:D}=Vl(e),{roundedClasses:c}=Sl(e),{sizeClasses:C}=Ke(e),{themeClasses:P}=xe(e),w=de(e,"modelValue"),o=vl(e,Re,!1),g=Pl(e,t),T=R(()=>e.link!==!1&&g.isLink.value),_=R(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||g.isClickable.value)),B=R(()=>({"aria-label":f(e.closeLabel),onClick(m){m.preventDefault(),m.stopPropagation(),w.value=!1,d("click:close",m)}}));function U(m){var E;d("click",m),_.value&&((E=g.navigate)==null||E.call(g,m),o==null||o.toggle())}function Q(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),U(m))}return()=>{const m=g.isLink.value?"a":e.tag,E=!!(e.appendIcon||e.appendAvatar),H=!!(E||a.append),O=!!(a.close||e.closable),z=!!(a.filter||e.filter)&&o,W=!!(e.prependIcon||e.prependAvatar),K=!!(W||a.prepend),G=!o||o.isSelected.value;return w.value&&me(i(m,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":_.value,"v-chip--filter":z,"v-chip--pill":e.pill},P.value,y.value,G?u.value:void 0,I.value,D.value,c.value,C.value,h.value,o==null?void 0:o.selectedClass.value,e.class],style:[G?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:_.value?0:void 0,onClick:U,onKeydown:_.value&&!T.value&&Q},{default:()=>{var F;return[hl(_.value,"v-chip"),z&&i(il,{key:"filter"},{default:()=>[me(i("div",{class:"v-chip__filter"},[a.filter?i(ee,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):i(J,{key:"filter-icon",icon:e.filterIcon},null)]),[[Fe,o.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?i(ee,{key:"prepend-defaults",disabled:!W,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):i(N,null,[e.prependIcon&&i(J,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ce,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((F=a.default)==null?void 0:F.call(a,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),H&&i("div",{key:"append",class:"v-chip__append"},[a.append?i(ee,{key:"append-defaults",disabled:!E,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):i(N,null,[e.appendIcon&&i(J,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ce,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),O&&i("button",M({key:"close",class:"v-chip__close",type:"button"},B.value),[a.close?i(ee,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):i(J,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[_e("ripple"),_.value&&e.ripple,null]])}}}),Al=j({renderless:Boolean,...oe()},"VVirtualScrollItem"),Rl=le()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Al(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:t,emit:d,slots:a}=v;const{resizeRef:f,contentRect:y}=Ie(void 0,"border");$(()=>{var u;return(u=y.value)==null?void 0:u.height},u=>{u!=null&&d("update:height",u)}),se(()=>{var u,s;return e.renderless?i(N,null,[(u=a.default)==null?void 0:u.call(a,{itemRef:f})]):i("div",M({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(s=a.default)==null?void 0:s.call(a)])})}}),Bl=-1,Dl=1,re=100,_l=j({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Fl(e,v){const t=ol(),d=q(0);pe(()=>{d.value=parseFloat(e.itemHeight||0)});const a=q(0),f=q(Math.ceil((parseInt(e.height)||t.height.value)/(d.value||16))||1),y=q(0),u=q(0),s=Y(),h=Y();let I=0;const{resizeRef:D,contentRect:c}=Ie();pe(()=>{D.value=s.value});const C=R(()=>{var l;return s.value===document.documentElement?t.height.value:((l=c.value)==null?void 0:l.height)||parseInt(e.height)||0}),P=R(()=>!!(s.value&&h.value&&C.value&&d.value));let w=Array.from({length:v.value.length}),o=Array.from({length:v.value.length});const g=q(0);let T=-1;function _(l){return w[l]||d.value}const B=Qe(()=>{const l=performance.now();o[0]=0;const r=v.value.length;for(let b=1;b<=r-1;b++)o[b]=(o[b-1]||0)+_(b-1);g.value=Math.max(g.value,performance.now()-l)},g),U=$(P,l=>{l&&(U(),I=h.value.offsetTop,B.immediate(),F(),~T&&Se(()=>{Te&&window.requestAnimationFrame(()=>{te(T),T=-1})}))});be(()=>{B.clear()});function Q(l,r){const b=w[l],k=d.value;d.value=k?Math.min(d.value,r):r,(b!==r||k!==d.value)&&(w[l]=r,B())}function m(l){return l=ue(l,0,v.value.length-1),o[l]||0}function E(l){return Ll(o,l)}let H=0,O=0,z=0;$(C,(l,r)=>{r&&(F(),l<r&&requestAnimationFrame(()=>{O=0,F()}))});function W(){if(!s.value||!h.value)return;const l=s.value.scrollTop,r=performance.now();r-z>500?(O=Math.sign(l-H),I=h.value.offsetTop):O=l-H,H=l,z=r,F()}function K(){!s.value||!h.value||(O=0,z=0,F())}let G=-1;function F(){cancelAnimationFrame(G),G=requestAnimationFrame(ie)}function ie(){if(!s.value||!C.value)return;const l=H-I,r=Math.sign(O),b=Math.max(0,l-re),k=ue(E(b),0,v.value.length),p=l+C.value+re,S=ue(E(p)+1,k+1,v.value.length);if((r!==Bl||k<a.value)&&(r!==Dl||S>f.value)){const V=m(a.value)-m(k),L=m(S)-m(f.value);Math.max(V,L)>re?(a.value=k,f.value=S):(k<=0&&(a.value=k),S>=v.value.length&&(f.value=S))}y.value=m(a.value),u.value=m(v.value.length)-m(f.value)}function te(l){const r=m(l);!s.value||l&&!r?T=l:s.value.scrollTop=r}const n=R(()=>v.value.slice(a.value,f.value).map((l,r)=>({raw:l,index:r+a.value})));return $(v,()=>{w=Array.from({length:v.value.length}),o=Array.from({length:v.value.length}),B.immediate(),F()},{deep:!0}),{containerRef:s,markerRef:h,computedItems:n,paddingTop:y,paddingBottom:u,scrollToIndex:te,handleScroll:W,handleScrollend:K,handleItemResize:Q}}function Ll(e,v){let t=e.length-1,d=0,a=0,f=null,y=-1;if(e[t]<v)return t;for(;d<=t;)if(a=d+t>>1,f=e[a],f>v)t=a-1;else if(f<v)y=a,d=a+1;else return f===v?a:d;return y}const El=j({items:{type:Array,default:()=>[]},renderless:Boolean,..._l(),...oe(),...al()},"VVirtualScroll"),Ol=le()({name:"VVirtualScroll",props:El(),setup(e,v){let{slots:t}=v;const d=Ze("VVirtualScroll"),{dimensionStyles:a}=nl(e),{containerRef:f,markerRef:y,handleScroll:u,handleScrollend:s,handleItemResize:h,scrollToIndex:I,paddingTop:D,paddingBottom:c,computedItems:C}=Fl(e,Z(e,"items"));return Ne(()=>e.renderless,()=>{function P(){var g,T;const o=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[o]("scroll",u,{passive:!0}),document[o]("scrollend",s)):((g=f.value)==null||g[o]("scroll",u,{passive:!0}),(T=f.value)==null||T[o]("scrollend",s))}Le(()=>{f.value=je(d.vnode.el,!0),P(!0)}),be(P)}),se(()=>{const P=C.value.map(w=>i(Rl,{key:w.index,renderless:e.renderless,"onUpdate:height":o=>h(w.index,o)},{default:o=>{var g;return(g=t.default)==null?void 0:g.call(t,{item:w.raw,index:w.index,...o})}}));return e.renderless?i(N,null,[i("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:ae(D.value)}},null),P,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ae(c.value)}},null)]):i("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:s,style:[a.value,e.style]},[i("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:ae(D.value),paddingBottom:ae(c.value)}},[P])])}),{scrollToIndex:I}}});function Ml(e,v){const t=q(!1);let d;function a(u){cancelAnimationFrame(d),t.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{t.value=!1})})}async function f(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(t.value){const s=$(t,()=>{s(),u()})}else u()})}async function y(u){var I,D;if(u.key==="Tab"&&((I=v.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const s=(D=e.value)==null?void 0:D.$el;if(!s)return;(u.key==="Home"||u.key==="End")&&s.scrollTo({top:u.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await f();const h=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const c=s.getBoundingClientRect().top;for(const C of h)if(C.getBoundingClientRect().top>=c){C.focus();break}}else{const c=s.getBoundingClientRect().bottom;for(const C of[...h].reverse())if(C.getBoundingClientRect().bottom<=c){C.focus();break}}}return{onListScroll:a,onListKeydown:y}}const Hl=j({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ne,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...qe({itemChildren:!1})},"Select"),zl=j({...Hl(),...el(Oe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:{component:We}})},"VSelect"),mt=le()({name:"VSelect",props:zl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:t}=v;const{t:d}=Pe(),a=Y(),f=Y(),y=Y(),u=de(e,"menu"),s=R({get:()=>u.value,set:n=>{var l;u.value&&!n&&((l=f.value)!=null&&l.ΨopenChildren)||(u.value=n)}}),{items:h,transformIn:I,transformOut:D}=Ue(e),c=de(e,"modelValue",[],n=>I(n===null?[null]:ll(n)),n=>{const l=D(n);return e.multiple?l:l[0]??null}),C=R(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:c.value.length),P=Me(),w=R(()=>c.value.map(n=>n.value)),o=q(!1),g=R(()=>s.value?e.closeText:e.openText);let T="",_;const B=R(()=>e.hideSelected?h.value.filter(n=>!c.value.some(l=>l===n)):h.value),U=R(()=>e.hideNoData&&!B.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),Q=R(()=>{var n;return{...e.menuProps,activatorProps:{...((n=e.menuProps)==null?void 0:n.activatorProps)||{},"aria-haspopup":"listbox"}}}),m=Y(),{onListScroll:E,onListKeydown:H}=Ml(m,a);function O(n){e.openOnClear&&(s.value=!0)}function z(){U.value||(s.value=!s.value)}function W(n){var p,S;if(!n.key||e.readonly||P!=null&&P.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(n.key)&&n.preventDefault(),["Enter","ArrowDown"," "].includes(n.key)&&(s.value=!0),["Escape","Tab"].includes(n.key)&&(s.value=!1),n.key==="Home"?(p=m.value)==null||p.focus("first"):n.key==="End"&&((S=m.value)==null||S.focus("last"));const l=1e3;function r(V){const L=V.key.length===1,x=!V.ctrlKey&&!V.metaKey&&!V.altKey;return L&&x}if(e.multiple||!r(n))return;const b=performance.now();b-_>l&&(T=""),T+=n.key.toLowerCase(),_=b;const k=h.value.find(V=>V.title.toLowerCase().startsWith(T));k!==void 0&&(c.value=[k])}function K(n){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!n.props.disabled)if(e.multiple){const r=c.value.findIndex(k=>e.valueComparator(k.value,n.value)),b=l??!~r;if(~r){const k=b?[...c.value,n]:[...c.value];k.splice(r,1),c.value=k}else b&&(c.value=[...c.value,n])}else{const r=l!==!1;c.value=r?[n]:[],Se(()=>{s.value=!1})}}function G(n){var l;(l=m.value)!=null&&l.$el.contains(n.relatedTarget)||(s.value=!1)}function F(){var n;o.value&&((n=a.value)==null||n.focus())}function ie(n){o.value=!0}function te(n){if(n==null)c.value=[];else if(ke(a.value,":autofill")||ke(a.value,":-webkit-autofill")){const l=h.value.find(r=>r.title===n);l&&K(l)}else a.value&&(a.value.value="")}return $(s,()=>{if(!e.hideSelected&&s.value&&c.value.length){const n=B.value.findIndex(l=>c.value.some(r=>e.valueComparator(r.value,l.value)));Te&&window.requestAnimationFrame(()=>{var l;n>=0&&((l=y.value)==null||l.scrollToIndex(n))})}}),$(()=>e.items,(n,l)=>{s.value||o.value&&!l.length&&n.length&&(s.value=!0)}),se(()=>{const n=!!(e.chips||t.chip),l=!!(!e.hideNoData||B.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),r=c.value.length>0,b=he.filterProps(e),k=r||!o.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(he,M({ref:a},b,{modelValue:c.value.map(p=>p.props.value).join(", "),"onUpdate:modelValue":te,focused:o.value,"onUpdate:focused":p=>o.value=p,validationValue:c.externalValue,counterValue:C.value,dirty:r,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:k,"onClick:clear":O,"onMousedown:control":z,onBlur:G,onKeydown:W,"aria-label":d(g.value),title:d(g.value)}),{...t,default:()=>i(N,null,[i(Xe,M({ref:f,modelValue:s.value,"onUpdate:modelValue":p=>s.value=p,activator:"parent",contentClass:"v-select__content",disabled:U.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:F},Q.value),{default:()=>[l&&i(Ge,M({ref:m,selected:w.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:p=>p.preventDefault(),onKeydown:H,onFocusin:ie,onScrollPassive:E,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var p,S,V;return[(p=t["prepend-item"])==null?void 0:p.call(t),!B.value.length&&!e.hideNoData&&(((S=t["no-data"])==null?void 0:S.call(t))??i(ge,{title:d(e.noDataText)},null)),i(Ol,{ref:y,renderless:!0,items:B.value},{default:L=>{var fe;let{item:x,index:X,itemRef:A}=L;const ve=M(x.props,{ref:A,key:X,onClick:()=>K(x,null)});return((fe=t.item)==null?void 0:fe.call(t,{item:x,index:X,props:ve}))??i(ge,M(ve,{role:"option"}),{prepend:Be=>{let{isSelected:De}=Be;return i(N,null,[e.multiple&&!e.hideSelected?i(sl,{key:x.value,modelValue:De,ripple:!1,tabindex:"-1"},null):void 0,x.props.prependAvatar&&i(ce,{image:x.props.prependAvatar},null),x.props.prependIcon&&i(J,{icon:x.props.prependIcon},null)])}})}}),(V=t["append-item"])==null?void 0:V.call(t)]}})]}),c.value.map((p,S)=>{function V(A){A.stopPropagation(),A.preventDefault(),K(p,!1)}const L={"onClick:close":V,onKeydown(A){A.key!=="Enter"&&A.key!==" "||(A.preventDefault(),A.stopPropagation(),V(A))},onMousedown(A){A.preventDefault(),A.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},x=n?!!t.chip:!!t.selection,X=x?tl(n?t.chip({item:p,index:S,props:L}):t.selection({item:p,index:S})):void 0;if(!(x&&!X))return i("div",{key:p.value,class:"v-select__selection"},[n?t.chip?i(ee,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:p.title}}},{default:()=>[X]}):i(Tl,M({key:"chip",closable:e.closableChips,size:"small",text:p.title,disabled:p.props.disabled},L),null):X??i("span",{class:"v-select__selection-text"},[p.title,e.multiple&&S<c.value.length-1&&i("span",{class:"v-select__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var L;for(var p=arguments.length,S=new Array(p),V=0;V<p;V++)S[V]=arguments[V];return i(N,null,[(L=t["append-inner"])==null?void 0:L.call(t,...S),e.menuIcon?i(J,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),He({isFocused:o,menu:s,select:K},a)}});export{mt as V,Ol as a,Tl as b,Hl as m,Ml as u};
