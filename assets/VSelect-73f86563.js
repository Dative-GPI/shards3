import{M as r,x as L,A as X,g as b,a0 as pe,a1 as Je,a6 as Qe,J as ie,e as be,s as U,p as ke,Q,j as E,m as Ye,w as oe,l as ze,y as Ze,n as et,o as wt,K as Pt}from"./vue.esm-bundler-838daa40.js";import{m as At,V as Ue}from"./FSTextField-5838a9fc.js";import{b as xt}from"./VInput-5523e371.js";import{f as Lt}from"./forwardRefs-e658ad70.js";import{I as J,m as ue}from"./tag-d73e64d5.js";import{p as G,G as me,H as ge,d as tt,F as ce,w as Be,o as Tt,b as at,l as ae,A as Oe,E as Bt,a as Pe,ab as Ot,I as xe,c as he,N as _t,P as qe}from"./theme-f9f3e2d4.js";import{a as nt,d as Ft}from"./locale-5633e5ee.js";import{u as re,a as Dt}from"./proxiedModel-3239cc3c.js";import{M as Mt,m as Rt}from"./transition-ee4dd36d.js";import{g as Et,V as Gt}from"./VOverlay-a0b245b4.js";import{V as jt}from"./VMenu-ec057191.js";import{c as Nt,d as $t}from"./index-6fa9bdc1.js";import{m as Y,g as W,u as Z,p as lt,d as Ht}from"./useRender-f6a4770d.js";import{u as Kt}from"./ssrBoot-00bf1891.js";import{V as ne}from"./VDefaultsProvider-a165414e.js";import{c as zt}from"./VSpacer-7ad9c022.js";import{a as ye,b as _e,g as Fe,m as De,u as Me}from"./border-749eb26c.js";import{m as Ve,u as Ce}from"./density-e1cdced2.js";import{m as Re,u as Ee}from"./dimensions-be952165.js";import{m as Ge,u as je}from"./elevation-c2192325.js";import{m as Ie,u as we}from"./rounded-94d04543.js";import{m as it,u as st}from"./router-d69bdbea.js";import{R as ot}from"./index-a755b9d6.js";import{m as ut,u as rt,V as le}from"./VIcon-281b119b.js";import{V as Ut}from"./VImg-26cf6021.js";import{a as qt,b as Wt}from"./color-3e53cf3d.js";import{V as Xt}from"./VDivider-7a82f108.js";import{u as ct}from"./resizeObserver-21650322.js";import{u as Jt}from"./display-ba09a035.js";import{V as Qt}from"./FSCheckbox-884ec95b.js";import{m as Yt,V as We}from"./VSlideGroup-41b1c0c0.js";import{m as Zt,u as ea,a as ta,b as aa}from"./group-d31dd239.js";const na=G({start:Boolean,end:Boolean,icon:J,image:String,text:String,...Y(),...Ve(),...Ie(),...ut(),...ue(),...me(),...ye({variant:"flat"})},"VAvatar"),ve=W()({name:"VAvatar",props:na(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=ge(e),{colorClasses:n,colorStyles:l,variantClasses:s}=_e(e),{densityClasses:o}=Ce(e),{roundedClasses:d}=we(e),{sizeClasses:p,sizeStyles:S}=rt(e);return Z(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,n.value,o.value,d.value,p.value,s.value,e.class],style:[l.value,S.value,e.style]},{default:()=>[t.default?r(ne,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?r(Ut,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(le,{key:"icon",icon:e.icon},null):e.text,Fe(!1,"v-avatar")]})),{}}});const dt=Symbol.for("vuetify:v-chip-group"),la=G({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:tt},...Yt(),...Y(),...Zt({selectedClass:"v-chip--selected"}),...ue(),...me(),...ye({variant:"tonal"})},"VChipGroup");W()({name:"VChipGroup",props:la(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const{themeClasses:a}=ge(e),{isSelected:n,select:l,next:s,prev:o,selected:d}=ea(e,dt);return lt({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),Z(()=>{const p=We.filterProps(e);return r(We,X(p,{class:["v-chip-group",{"v-chip-group--column":e.column},a.value,e.class],style:e.style}),{default:()=>{var S;return[(S=t.default)==null?void 0:S.call(t,{isSelected:n,select:l,next:s,prev:o,selected:d.value})]}})}),{}}});const ia=G({activeClass:String,appendAvatar:String,appendIcon:J,closable:Boolean,closeIcon:{type:J,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:J,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ce(),onClickOnce:ce(),...De(),...Y(),...Ve(),...Ge(),...ta(),...Ie(),...it(),...ut(),...ue({tag:"span"}),...me(),...ye({variant:"tonal"})},"VChip"),sa=W()({name:"VChip",directives:{Ripple:ot},props:ia(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,i){let{attrs:t,emit:a,slots:n}=i;const{t:l}=nt(),{borderClasses:s}=Me(e),{colorClasses:o,colorStyles:d,variantClasses:p}=_e(e),{densityClasses:S}=Ce(e),{elevationClasses:k}=je(e),{roundedClasses:h}=we(e),{sizeClasses:u}=rt(e),{themeClasses:v}=ge(e),m=re(e,"modelValue"),c=aa(e,dt,!1),I=st(e,t),_=b(()=>e.link!==!1&&I.isLink.value),T=b(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||I.isClickable.value)),B=b(()=>({"aria-label":l(e.closeLabel),onClick(V){V.preventDefault(),V.stopPropagation(),m.value=!1,a("click:close",V)}}));function j(V){var $;a("click",V),T.value&&(($=I.navigate)==null||$.call(I,V),c==null||c.toggle())}function ee(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),j(V))}return()=>{const V=I.isLink.value?"a":e.tag,$=!!(e.appendIcon||e.appendAvatar),q=!!($||n.append),H=!!(n.close||e.closable),M=!!(n.filter||e.filter)&&c,P=!!(e.prependIcon||e.prependAvatar),N=!!(P||n.prepend),te=!c||c.isSelected.value;return m.value&&pe(r(V,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":T.value,"v-chip--filter":M,"v-chip--pill":e.pill},v.value,s.value,te?o.value:void 0,S.value,k.value,h.value,u.value,p.value,c==null?void 0:c.selectedClass.value,e.class],style:[te?d.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:I.href.value,tabindex:T.value?0:void 0,onClick:j,onKeydown:T.value&&!_.value&&ee},{default:()=>{var K;return[Fe(T.value,"v-chip"),M&&r(Nt,{key:"filter"},{default:()=>[pe(r("div",{class:"v-chip__filter"},[n.filter?r(ne,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):r(le,{key:"filter-icon",icon:e.filterIcon},null)]),[[Qe,c.isSelected.value]])]}),N&&r("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?r(ne,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):r(ie,null,[e.prependIcon&&r(le,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&r(ve,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),r("div",{class:"v-chip__content","data-no-activator":""},[((K=n.default)==null?void 0:K.call(n,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),q&&r("div",{key:"append",class:"v-chip__append"},[n.append?r(ne,{key:"append-defaults",disabled:!$,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):r(ie,null,[e.appendIcon&&r(le,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&r(ve,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&r("button",X({key:"close",class:"v-chip__close",type:"button"},B.value),[n.close?r(ne,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):r(le,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Je("ripple"),T.value&&e.ripple,null]])}}});const Le=Symbol.for("vuetify:list");function vt(){const e=be(Le,{hasPrepend:U(!1),updateHasPrepend:()=>null}),i={hasPrepend:U(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ke(Le,i),e}function ft(){return be(Le,null)}const Ne=e=>{const i={activate:t=>{let{id:a,value:n,activated:l}=t;return a=Q(a),e&&!n&&l.size===1&&l.has(a)||(n?l.add(a):l.delete(a)),l},in:(t,a,n)=>{let l=new Set;if(t!=null)for(const s of Be(t))l=i.activate({id:s,value:!0,activated:new Set(l),children:a,parents:n});return l},out:t=>Array.from(t)};return i},mt=e=>{const i=Ne(e);return{activate:a=>{let{activated:n,id:l,...s}=a;l=Q(l);const o=n.has(l)?new Set([l]):new Set;return i.activate({...s,id:l,activated:o})},in:(a,n,l)=>{let s=new Set;if(a!=null){const o=Be(a);o.length&&(s=i.in(o.slice(0,1),n,l))}return s},out:(a,n,l)=>i.out(a,n,l)}},oa=e=>{const i=Ne(e);return{activate:a=>{let{id:n,activated:l,children:s,...o}=a;return n=Q(n),s.has(n)?l:i.activate({id:n,activated:l,children:s,...o})},in:i.in,out:i.out}},ua=e=>{const i=mt(e);return{activate:a=>{let{id:n,activated:l,children:s,...o}=a;return n=Q(n),s.has(n)?l:i.activate({id:n,activated:l,children:s,...o})},in:i.in,out:i.out}},ra={open:e=>{let{id:i,value:t,opened:a,parents:n}=e;if(t){const l=new Set;l.add(i);let s=n.get(i);for(;s!=null;)l.add(s),s=n.get(s);return l}else return a.delete(i),a},select:()=>null},gt={open:e=>{let{id:i,value:t,opened:a,parents:n}=e;if(t){let l=n.get(i);for(a.add(i);l!=null&&l!==i;)a.add(l),l=n.get(l);return a}else a.delete(i);return a},select:()=>null},ca={open:gt.open,select:e=>{let{id:i,value:t,opened:a,parents:n}=e;if(!t)return a;const l=[];let s=n.get(i);for(;s!=null;)l.push(s),s=n.get(s);return new Set(l)}},$e=e=>{const i={select:t=>{let{id:a,value:n,selected:l}=t;if(a=Q(a),e&&!n){const s=Array.from(l.entries()).reduce((o,d)=>{let[p,S]=d;return S==="on"&&o.push(p),o},[]);if(s.length===1&&s[0]===a)return l}return l.set(a,n?"on":"off"),l},in:(t,a,n)=>{let l=new Map;for(const s of t||[])l=i.select({id:s,value:!0,selected:new Map(l),children:a,parents:n});return l},out:t=>{const a=[];for(const[n,l]of t.entries())l==="on"&&a.push(n);return a}};return i},yt=e=>{const i=$e(e);return{select:a=>{let{selected:n,id:l,...s}=a;l=Q(l);const o=n.has(l)?new Map([[l,n.get(l)]]):new Map;return i.select({...s,id:l,selected:o})},in:(a,n,l)=>{let s=new Map;return a!=null&&a.length&&(s=i.in(a.slice(0,1),n,l)),s},out:(a,n,l)=>i.out(a,n,l)}},da=e=>{const i=$e(e);return{select:a=>{let{id:n,selected:l,children:s,...o}=a;return n=Q(n),s.has(n)?l:i.select({id:n,selected:l,children:s,...o})},in:i.in,out:i.out}},va=e=>{const i=yt(e);return{select:a=>{let{id:n,selected:l,children:s,...o}=a;return n=Q(n),s.has(n)?l:i.select({id:n,selected:l,children:s,...o})},in:i.in,out:i.out}},fa=e=>{const i={select:t=>{let{id:a,value:n,selected:l,children:s,parents:o}=t;a=Q(a);const d=new Map(l),p=[a];for(;p.length;){const k=p.shift();l.set(k,n?"on":"off"),s.has(k)&&p.push(...s.get(k))}let S=o.get(a);for(;S;){const k=s.get(S),h=k.every(v=>l.get(v)==="on"),u=k.every(v=>!l.has(v)||l.get(v)==="off");l.set(S,h?"on":u?"off":"indeterminate"),S=o.get(S)}return e&&!n&&Array.from(l.entries()).reduce((h,u)=>{let[v,m]=u;return m==="on"&&h.push(v),h},[]).length===0?d:l},in:(t,a,n)=>{let l=new Map;for(const s of t||[])l=i.select({id:s,value:!0,selected:new Map(l),children:a,parents:n});return l},out:(t,a)=>{const n=[];for(const[l,s]of t.entries())s==="on"&&!a.has(l)&&n.push(l);return n}};return i},fe=Symbol.for("vuetify:nested"),ht={id:U(),root:{register:()=>null,unregister:()=>null,parents:E(new Map),children:E(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:E(!1),selectable:E(!1),opened:E(new Set),activated:E(new Set),selected:E(new Map),selectedValues:E([])}},ma=G({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),ga=e=>{let i=!1;const t=E(new Map),a=E(new Map),n=re(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),l=b(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return oa(e.mandatory);case"single-leaf":return ua(e.mandatory);case"independent":return Ne(e.mandatory);case"single-independent":default:return mt(e.mandatory)}}),s=b(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return va(e.mandatory);case"leaf":return da(e.mandatory);case"independent":return $e(e.mandatory);case"single-independent":return yt(e.mandatory);case"classic":default:return fa(e.mandatory)}}),o=b(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ca;case"single":return ra;case"multiple":default:return gt}}),d=re(e,"activated",e.activated,u=>l.value.in(u,t.value,a.value),u=>l.value.out(u,t.value,a.value)),p=re(e,"selected",e.selected,u=>s.value.in(u,t.value,a.value),u=>s.value.out(u,t.value,a.value));Ye(()=>{i=!0});function S(u){const v=[];let m=u;for(;m!=null;)v.unshift(m),m=a.value.get(m);return v}const k=at("nested"),h={id:U(),root:{opened:n,activatable:L(e,"activatable"),selectable:L(e,"selectable"),activated:d,selected:p,selectedValues:b(()=>{const u=[];for(const[v,m]of p.value.entries())m==="on"&&u.push(v);return u}),register:(u,v,m)=>{v&&u!==v&&a.value.set(u,v),m&&t.value.set(u,[]),v!=null&&t.value.set(v,[...t.value.get(v)||[],u])},unregister:u=>{if(i)return;t.value.delete(u);const v=a.value.get(u);if(v){const m=t.value.get(v)??[];t.value.set(v,m.filter(c=>c!==u))}a.value.delete(u),n.value.delete(u)},open:(u,v,m)=>{k.emit("click:open",{id:u,value:v,path:S(u),event:m});const c=o.value.open({id:u,value:v,opened:new Set(n.value),children:t.value,parents:a.value,event:m});c&&(n.value=c)},openOnSelect:(u,v,m)=>{const c=o.value.select({id:u,value:v,selected:new Map(p.value),opened:new Set(n.value),children:t.value,parents:a.value,event:m});c&&(n.value=c)},select:(u,v,m)=>{k.emit("click:select",{id:u,value:v,path:S(u),event:m});const c=s.value.select({id:u,value:v,selected:new Map(p.value),children:t.value,parents:a.value,event:m});c&&(p.value=c),h.root.openOnSelect(u,v,m)},activate:(u,v,m)=>{if(!e.activatable)return h.root.select(u,!0,m);k.emit("click:activate",{id:u,value:v,path:S(u),event:m});const c=l.value.activate({id:u,value:v,activated:new Set(d.value),children:t.value,parents:a.value,event:m});c&&(d.value=c)},children:t,parents:a}};return ke(fe,h),h.root},pt=(e,i)=>{const t=be(fe,ht),a=Symbol(Tt()),n=b(()=>e.value!==void 0?e.value:a),l={...t,id:n,open:(s,o)=>t.root.open(n.value,s,o),openOnSelect:(s,o)=>t.root.openOnSelect(n.value,s,o),isOpen:b(()=>t.root.opened.value.has(n.value)),parent:b(()=>t.root.parents.value.get(n.value)),activate:(s,o)=>t.root.activate(n.value,s,o),isActivated:b(()=>t.root.activated.value.has(Q(n.value))),select:(s,o)=>t.root.select(n.value,s,o),isSelected:b(()=>t.root.selected.value.get(Q(n.value))==="on"),isIndeterminate:b(()=>t.root.selected.value.get(n.value)==="indeterminate"),isLeaf:b(()=>!t.root.children.value.get(n.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(n.value,t.id.value,i),Ye(()=>{!t.isGroupActivator&&t.root.unregister(n.value)}),i&&ke(fe,l),l},ya=()=>{const e=be(fe,ht);ke(fe,{...e,isGroupActivator:!0})},ha=Ht({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return ya(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),pa=G({activeColor:String,baseColor:String,color:String,collapseIcon:{type:J,default:"$collapse"},expandIcon:{type:J,default:"$expand"},prependIcon:J,appendIcon:J,fluid:Boolean,subgroup:Boolean,title:String,value:null,...Y(),...ue()},"VListGroup"),Xe=W()({name:"VListGroup",props:pa(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:n,id:l}=pt(L(e,"value"),!0),s=b(()=>`v-list-group--id-${String(l.value)}`),o=ft(),{isBooted:d}=Kt();function p(u){u.stopPropagation(),n(!a.value,u)}const S=b(()=>({onClick:p,class:"v-list-group__header",id:s.value})),k=b(()=>a.value?e.collapseIcon:e.expandIcon),h=b(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&k.value,appendIcon:e.appendIcon||!e.subgroup&&k.value,title:e.title,value:e.value}}));return Z(()=>r(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&r(ne,{defaults:h.value},{default:()=>[r(ha,null,{default:()=>[t.activator({props:S.value,isOpen:a.value})]})]}),r(Mt,{transition:{component:$t},disabled:!d.value},{default:()=>{var u;return[pe(r("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=t.default)==null?void 0:u.call(t)]),[[Qe,a.value]])]}})]})),{isOpen:a}}});const Sa=G({opacity:[Number,String],...Y(),...ue()},"VListItemSubtitle"),ba=W()({name:"VListItemSubtitle",props:Sa(),setup(e,i){let{slots:t}=i;return Z(()=>r(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ka=zt("v-list-item-title"),Va=G({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:J,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:J,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ce(),onClickOnce:ce(),...De(),...Y(),...Ve(),...Re(),...Ge(),...Ie(),...it(),...ue(),...me(),...ye({variant:"text"})},"VListItem"),Se=W()({name:"VListItem",directives:{Ripple:ot},props:Va(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:n}=i;const l=st(e,t),s=b(()=>e.value===void 0?l.href.value:e.value),{activate:o,isActivated:d,select:p,isSelected:S,isIndeterminate:k,isGroupActivator:h,root:u,parent:v,openOnSelect:m}=pt(s,!1),c=ft(),I=b(()=>{var g;return e.active!==!1&&(e.active||((g=l.isActive)==null?void 0:g.value)||(u.activatable.value?d.value:S.value))}),_=b(()=>e.link!==!1&&l.isLink.value),T=b(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||!!c&&(u.selectable.value||u.activatable.value||e.value!=null))),B=b(()=>e.rounded||e.nav),j=b(()=>e.color??e.activeColor),ee=b(()=>({color:I.value?j.value??e.baseColor:e.baseColor,variant:e.variant}));oe(()=>{var g;return(g=l.isActive)==null?void 0:g.value},g=>{g&&v.value!=null&&u.open(v.value,!0),g&&m(g)},{immediate:!0});const{themeClasses:V}=ge(e),{borderClasses:$}=Me(e),{colorClasses:q,colorStyles:H,variantClasses:M}=_e(ee),{densityClasses:P}=Ce(e),{dimensionStyles:N}=Ee(e),{elevationClasses:te}=je(e),{roundedClasses:K}=we(B),de=b(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),se=b(()=>({isActive:I.value,select:p,isSelected:S.value,isIndeterminate:k.value}));function y(g){var A;n("click",g),T.value&&((A=l.navigate)==null||A.call(l,g),!h&&(u.activatable.value?o(!d.value,g):(u.selectable.value||e.value!=null)&&p(!S.value,g)))}function f(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),y(g))}return Z(()=>{const g=_.value?"a":e.tag,A=a.title||e.title!=null,x=a.subtitle||e.subtitle!=null,C=!!(e.appendAvatar||e.appendIcon),O=!!(C||a.append),w=!!(e.prependAvatar||e.prependIcon),F=!!(w||a.prepend);return c==null||c.updateHasPrepend(F),e.activeColor&&Ft("active-color",["color","base-color"]),pe(r(g,{class:["v-list-item",{"v-list-item--active":I.value,"v-list-item--disabled":e.disabled,"v-list-item--link":T.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!F&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&I.value},V.value,$.value,q.value,P.value,te.value,de.value,K.value,M.value,e.class],style:[H.value,N.value,e.style],href:l.href.value,tabindex:T.value?c?-2:0:void 0,onClick:y,onKeydown:T.value&&!_.value&&f},{default:()=>{var R;return[Fe(T.value||I.value,"v-list-item"),F&&r("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?r(ne,{key:"prepend-defaults",disabled:!w,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var D;return[(D=a.prepend)==null?void 0:D.call(a,se.value)]}}):r(ie,null,[e.prependAvatar&&r(ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(le,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[A&&r(ka,{key:"title"},{default:()=>{var D;return[((D=a.title)==null?void 0:D.call(a,{title:e.title}))??e.title]}}),x&&r(ba,{key:"subtitle"},{default:()=>{var D;return[((D=a.subtitle)==null?void 0:D.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(R=a.default)==null?void 0:R.call(a,se.value)]),O&&r("div",{key:"append",class:"v-list-item__append"},[a.append?r(ne,{key:"append-defaults",disabled:!C,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var D;return[(D=a.append)==null?void 0:D.call(a,se.value)]}}):r(ie,null,[e.appendIcon&&r(le,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),T.value&&e.ripple]])}),{activate:o,isActivated:d,isGroupActivator:h,isSelected:S,list:c,select:p}}}),Ca=G({color:String,inset:Boolean,sticky:Boolean,title:String,...Y(),...ue()},"VListSubheader"),Ia=W()({name:"VListSubheader",props:Ca(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:n}=qt(L(e,"color"));return Z(()=>{const l=!!(t.default||e.title);return r(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>{var s;return[l&&r("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),wa=G({items:Array,returnObject:Boolean},"VListChildren"),St=W()({name:"VListChildren",props:wa(),setup(e,i){let{slots:t}=i;return vt(),()=>{var a,n;return((a=t.default)==null?void 0:a.call(t))??((n=e.items)==null?void 0:n.map(l=>{var h,u;let{children:s,props:o,type:d,raw:p}=l;if(d==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:o}))??r(Xt,o,null);if(d==="subheader")return((u=t.subheader)==null?void 0:u.call(t,{props:o}))??r(Ia,o,null);const S={subtitle:t.subtitle?v=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...v,item:p})}:void 0,prepend:t.prepend?v=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...v,item:p})}:void 0,append:t.append?v=>{var m;return(m=t.append)==null?void 0:m.call(t,{...v,item:p})}:void 0,title:t.title?v=>{var m;return(m=t.title)==null?void 0:m.call(t,{...v,item:p})}:void 0},k=Xe.filterProps(o);return s?r(Xe,X({value:o==null?void 0:o.value},k),{activator:v=>{let{props:m}=v;const c={...o,...m,value:e.returnObject?p:o.value};return t.header?t.header({props:c}):r(Se,c,S)},default:()=>r(St,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:o}):r(Se,X(o,{value:e.returnObject?p:o.value}),S)}))}}}),bt=G({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:tt}},"list-items");function Te(e,i){const t=ae(i,e.itemTitle,i),a=ae(i,e.itemValue,t),n=ae(i,e.itemChildren),l=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Oe(i,["children"]):i:void 0:ae(i,e.itemProps),s={title:t,value:a,...l};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(n)?kt(e,n):void 0,raw:i}}function kt(e,i){const t=[];for(const a of i)t.push(Te(e,a));return t}function Pa(e){const i=b(()=>kt(e,e.items)),t=b(()=>i.value.some(l=>l.value===null));function a(l){return t.value||(l=l.filter(s=>s!==null)),l.map(s=>e.returnObject&&typeof s=="string"?Te(e,s):i.value.find(o=>e.valueComparator(s,o.value))||Te(e,s))}function n(l){return e.returnObject?l.map(s=>{let{raw:o}=s;return o}):l.map(s=>{let{value:o}=s;return o})}return{items:i,transformIn:a,transformOut:n}}function Aa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function xa(e,i){const t=ae(i,e.itemType,"item"),a=Aa(i)?i:ae(i,e.itemTitle),n=ae(i,e.itemValue,void 0),l=ae(i,e.itemChildren),s=e.itemProps===!0?Oe(i,["children"]):ae(i,e.itemProps),o={title:a,value:n,...s};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&l?Vt(e,l):void 0,raw:i}}function Vt(e,i){const t=[];for(const a of i)t.push(xa(e,a));return t}function La(e){return{items:b(()=>Vt(e,e.items))}}const Ta=G({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":ce(),"onClick:select":ce(),...ma({selectStrategy:"single-leaf",openStrategy:"list"}),...De(),...Y(),...Ve(),...Re(),...Ge(),itemType:{type:String,default:"type"},...bt(),...Ie(),...ue(),...me(),...ye({variant:"text"})},"VList"),Ba=W()({name:"VList",props:Ta(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=La(e),{themeClasses:n}=ge(e),{backgroundColorClasses:l,backgroundColorStyles:s}=Wt(L(e,"bgColor")),{borderClasses:o}=Me(e),{densityClasses:d}=Ce(e),{dimensionStyles:p}=Ee(e),{elevationClasses:S}=je(e),{roundedClasses:k}=we(e),{children:h,open:u,parents:v,select:m}=ga(e),c=b(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=L(e,"activeColor"),_=L(e,"baseColor"),T=L(e,"color");vt(),lt({VListGroup:{activeColor:I,baseColor:_,color:T,expandIcon:L(e,"expandIcon"),collapseIcon:L(e,"collapseIcon")},VListItem:{activeClass:L(e,"activeClass"),activeColor:I,baseColor:_,color:T,density:L(e,"density"),disabled:L(e,"disabled"),lines:L(e,"lines"),nav:L(e,"nav"),slim:L(e,"slim"),variant:L(e,"variant")}});const B=U(!1),j=E();function ee(P){B.value=!0}function V(P){B.value=!1}function $(P){var N;!B.value&&!(P.relatedTarget&&((N=j.value)!=null&&N.contains(P.relatedTarget)))&&M()}function q(P){const N=P.target;if(!(!j.value||["INPUT","TEXTAREA"].includes(N.tagName))){if(P.key==="ArrowDown")M("next");else if(P.key==="ArrowUp")M("prev");else if(P.key==="Home")M("first");else if(P.key==="End")M("last");else return;P.preventDefault()}}function H(P){B.value=!0}function M(P){if(j.value)return Bt(j.value,P)}return Z(()=>r(e.tag,{ref:j,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},n.value,l.value,o.value,d.value,S.value,c.value,k.value,e.class],style:[s.value,p.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:ee,onFocusout:V,onFocus:$,onKeydown:q,onMousedown:H},{default:()=>[r(St,{items:a.value,returnObject:e.returnObject},t)]})),{open:u,select:m,focus:M,children:h,parents:v}}});const Oa=G({renderless:Boolean,...Y()},"VVirtualScrollItem"),_a=W()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Oa(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:a,slots:n}=i;const{resizeRef:l,contentRect:s}=ct(void 0,"border");oe(()=>{var o;return(o=s.value)==null?void 0:o.height},o=>{o!=null&&a("update:height",o)}),Z(()=>{var o,d;return e.renderless?r(ie,null,[(o=n.default)==null?void 0:o.call(n,{itemRef:l})]):r("div",X({ref:l,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(d=n.default)==null?void 0:d.call(n)])})}}),Fa=-1,Da=1,Ae=100,Ma=G({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Ra(e,i){const t=Jt(),a=U(0);ze(()=>{a.value=parseFloat(e.itemHeight||0)});const n=U(0),l=U(Math.ceil((parseInt(e.height)||t.height.value)/(a.value||16))||1),s=U(0),o=U(0),d=E(),p=E();let S=0;const{resizeRef:k,contentRect:h}=ct();ze(()=>{k.value=d.value});const u=b(()=>{var f;return d.value===document.documentElement?t.height.value:((f=h.value)==null?void 0:f.height)||parseInt(e.height)||0}),v=b(()=>!!(d.value&&p.value&&u.value&&a.value));let m=Array.from({length:i.value.length}),c=Array.from({length:i.value.length});const I=U(0);let _=-1;function T(f){return m[f]||a.value}const B=Ot(()=>{const f=performance.now();c[0]=0;const g=i.value.length;for(let A=1;A<=g-1;A++)c[A]=(c[A-1]||0)+T(A-1);I.value=Math.max(I.value,performance.now()-f)},I),j=oe(v,f=>{f&&(j(),S=p.value.offsetTop,B.immediate(),K(),~_&&et(()=>{xe&&window.requestAnimationFrame(()=>{se(_),_=-1})}))});Ze(()=>{B.clear()});function ee(f,g){const A=m[f],x=a.value;a.value=x?Math.min(a.value,g):g,(A!==g||x!==a.value)&&(m[f]=g,B())}function V(f){return f=Pe(f,0,i.value.length-1),c[f]||0}function $(f){return Ea(c,f)}let q=0,H=0,M=0;oe(u,(f,g)=>{g&&(K(),f<g&&requestAnimationFrame(()=>{H=0,K()}))});function P(){if(!d.value||!p.value)return;const f=d.value.scrollTop,g=performance.now();g-M>500?(H=Math.sign(f-q),S=p.value.offsetTop):H=f-q,q=f,M=g,K()}function N(){!d.value||!p.value||(H=0,M=0,K())}let te=-1;function K(){cancelAnimationFrame(te),te=requestAnimationFrame(de)}function de(){if(!d.value||!u.value)return;const f=q-S,g=Math.sign(H),A=Math.max(0,f-Ae),x=Pe($(A),0,i.value.length),C=f+u.value+Ae,O=Pe($(C)+1,x+1,i.value.length);if((g!==Fa||x<n.value)&&(g!==Da||O>l.value)){const w=V(n.value)-V(x),F=V(O)-V(l.value);Math.max(w,F)>Ae?(n.value=x,l.value=O):(x<=0&&(n.value=x),O>=i.value.length&&(l.value=O))}s.value=V(n.value),o.value=V(i.value.length)-V(l.value)}function se(f){const g=V(f);!d.value||f&&!g?_=f:d.value.scrollTop=g}const y=b(()=>i.value.slice(n.value,l.value).map((f,g)=>({raw:f,index:g+n.value})));return oe(i,()=>{m=Array.from({length:i.value.length}),c=Array.from({length:i.value.length}),B.immediate(),K()},{deep:!0}),{containerRef:d,markerRef:p,computedItems:y,paddingTop:s,paddingBottom:o,scrollToIndex:se,handleScroll:P,handleScrollend:N,handleItemResize:ee}}function Ea(e,i){let t=e.length-1,a=0,n=0,l=null,s=-1;if(e[t]<i)return t;for(;a<=t;)if(n=a+t>>1,l=e[n],l>i)t=n-1;else if(l<i)s=n,a=n+1;else return l===i?n:a;return s}const Ga=G({items:{type:Array,default:()=>[]},renderless:Boolean,...Ma(),...Y(),...Re()},"VVirtualScroll"),ja=W()({name:"VVirtualScroll",props:Ga(),setup(e,i){let{slots:t}=i;const a=at("VVirtualScroll"),{dimensionStyles:n}=Ee(e),{containerRef:l,markerRef:s,handleScroll:o,handleScrollend:d,handleItemResize:p,scrollToIndex:S,paddingTop:k,paddingBottom:h,computedItems:u}=Ra(e,L(e,"items"));return Dt(()=>e.renderless,()=>{function v(){var I,_;const c=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";l.value===document.documentElement?(document[c]("scroll",o,{passive:!0}),document[c]("scrollend",d)):((I=l.value)==null||I[c]("scroll",o,{passive:!0}),(_=l.value)==null||_[c]("scrollend",d))}wt(()=>{l.value=Et(a.vnode.el,!0),v(!0)}),Ze(v)}),Z(()=>{const v=u.value.map(m=>r(_a,{key:m.index,renderless:e.renderless,"onUpdate:height":c=>p(m.index,c)},{default:c=>{var I;return(I=t.default)==null?void 0:I.call(t,{item:m.raw,index:m.index,...c})}}));return e.renderless?r(ie,null,[r("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:he(k.value)}},null),v,r("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:he(h.value)}},null)]):r("div",{ref:l,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:d,style:[n.value,e.style]},[r("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:he(k.value),paddingBottom:he(h.value)}},[v])])}),{scrollToIndex:S}}});function Na(e,i){const t=U(!1);let a;function n(o){cancelAnimationFrame(a),t.value=!0,a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{t.value=!1})})}async function l(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const d=oe(t,()=>{d(),o()})}else o()})}async function s(o){var S,k;if(o.key==="Tab"&&((S=i.value)==null||S.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const d=(k=e.value)==null?void 0:k.$el;if(!d)return;(o.key==="Home"||o.key==="End")&&d.scrollTo({top:o.key==="Home"?0:d.scrollHeight,behavior:"smooth"}),await l();const p=d.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const h=d.getBoundingClientRect().top;for(const u of p)if(u.getBoundingClientRect().top>=h){u.focus();break}}else{const h=d.getBoundingClientRect().bottom;for(const u of[...p].reverse())if(u.getBoundingClientRect().bottom<=h){u.focus();break}}}return{onListScroll:n,onListKeydown:s}}const $a=G({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:J,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...bt({itemChildren:!1})},"Select"),Ha=G({...$a(),...Oe(At({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Rt({transition:{component:Gt}})},"VSelect"),Cn=W()({name:"VSelect",props:Ha(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:a}=nt(),n=E(),l=E(),s=E(),o=re(e,"menu"),d=b({get:()=>o.value,set:y=>{var f;o.value&&!y&&((f=l.value)!=null&&f.ΨopenChildren)||(o.value=y)}}),{items:p,transformIn:S,transformOut:k}=Pa(e),h=re(e,"modelValue",[],y=>S(y===null?[null]:Be(y)),y=>{const f=k(y);return e.multiple?f:f[0]??null}),u=b(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),v=xt(),m=b(()=>h.value.map(y=>y.value)),c=U(!1),I=b(()=>d.value?e.closeText:e.openText);let _="",T;const B=b(()=>e.hideSelected?p.value.filter(y=>!h.value.some(f=>e.valueComparator(f,y))):p.value),j=b(()=>e.hideNoData&&!B.value.length||e.readonly||(v==null?void 0:v.isReadonly.value)),ee=b(()=>{var y;return{...e.menuProps,activatorProps:{...((y=e.menuProps)==null?void 0:y.activatorProps)||{},"aria-haspopup":"listbox"}}}),V=E(),{onListScroll:$,onListKeydown:q}=Na(V,n);function H(y){e.openOnClear&&(d.value=!0)}function M(){j.value||(d.value=!d.value)}function P(y){var C,O;if(!y.key||e.readonly||v!=null&&v.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(y.key)&&y.preventDefault(),["Enter","ArrowDown"," "].includes(y.key)&&(d.value=!0),["Escape","Tab"].includes(y.key)&&(d.value=!1),y.key==="Home"?(C=V.value)==null||C.focus("first"):y.key==="End"&&((O=V.value)==null||O.focus("last"));const f=1e3;function g(w){const F=w.key.length===1,R=!w.ctrlKey&&!w.metaKey&&!w.altKey;return F&&R}if(e.multiple||!g(y))return;const A=performance.now();A-T>f&&(_=""),_+=y.key.toLowerCase(),T=A;const x=p.value.find(w=>w.title.toLowerCase().startsWith(_));if(x!==void 0){h.value=[x];const w=B.value.indexOf(x);xe&&window.requestAnimationFrame(()=>{var F;w>=0&&((F=s.value)==null||F.scrollToIndex(w))})}}function N(y){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!y.props.disabled)if(e.multiple){const g=h.value.findIndex(x=>e.valueComparator(x.value,y.value)),A=f??!~g;if(~g){const x=A?[...h.value,y]:[...h.value];x.splice(g,1),h.value=x}else A&&(h.value=[...h.value,y])}else{const g=f!==!1;h.value=g?[y]:[],et(()=>{d.value=!1})}}function te(y){var f;(f=V.value)!=null&&f.$el.contains(y.relatedTarget)||(d.value=!1)}function K(){var y;c.value&&((y=n.value)==null||y.focus())}function de(y){c.value=!0}function se(y){if(y==null)h.value=[];else if(qe(n.value,":autofill")||qe(n.value,":-webkit-autofill")){const f=p.value.find(g=>g.title===y);f&&N(f)}else n.value&&(n.value.value="")}return oe(d,()=>{if(!e.hideSelected&&d.value&&h.value.length){const y=B.value.findIndex(f=>h.value.some(g=>e.valueComparator(g.value,f.value)));xe&&window.requestAnimationFrame(()=>{var f;y>=0&&((f=s.value)==null||f.scrollToIndex(y))})}}),oe(()=>e.items,(y,f)=>{d.value||c.value&&!f.length&&y.length&&(d.value=!0)}),Z(()=>{const y=!!(e.chips||t.chip),f=!!(!e.hideNoData||B.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),g=h.value.length>0,A=Ue.filterProps(e),x=g||!c.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return r(Ue,X({ref:n},A,{modelValue:h.value.map(C=>C.props.value).join(", "),"onUpdate:modelValue":se,focused:c.value,"onUpdate:focused":C=>c.value=C,validationValue:h.externalValue,counterValue:u.value,dirty:g,class:["v-select",{"v-select--active-menu":d.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:x,"onClick:clear":H,"onMousedown:control":M,onBlur:te,onKeydown:P,"aria-label":a(I.value),title:a(I.value)}),{...t,default:()=>r(ie,null,[r(jt,X({ref:l,modelValue:d.value,"onUpdate:modelValue":C=>d.value=C,activator:"parent",contentClass:"v-select__content",disabled:j.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:K},ee.value),{default:()=>[f&&r(Ba,X({ref:V,selected:m.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:C=>C.preventDefault(),onKeydown:q,onFocusin:de,onScrollPassive:$,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var C,O,w;return[(C=t["prepend-item"])==null?void 0:C.call(t),!B.value.length&&!e.hideNoData&&(((O=t["no-data"])==null?void 0:O.call(t))??r(Se,{title:a(e.noDataText)},null)),r(ja,{ref:s,renderless:!0,items:B.value},{default:F=>{var Ke;let{item:R,index:D,itemRef:z}=F;const He=X(R.props,{ref:z,key:D,onClick:()=>N(R,null)});return((Ke=t.item)==null?void 0:Ke.call(t,{item:R,index:D,props:He}))??r(Se,X(He,{role:"option"}),{prepend:Ct=>{let{isSelected:It}=Ct;return r(ie,null,[e.multiple&&!e.hideSelected?r(Qt,{key:R.value,modelValue:It,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&r(ve,{image:R.props.prependAvatar},null),R.props.prependIcon&&r(le,{icon:R.props.prependIcon},null)])}})}}),(w=t["append-item"])==null?void 0:w.call(t)]}})]}),h.value.map((C,O)=>{function w(z){z.stopPropagation(),z.preventDefault(),N(C,!1)}const F={"onClick:close":w,onKeydown(z){z.key!=="Enter"&&z.key!==" "||(z.preventDefault(),z.stopPropagation(),w(z))},onMousedown(z){z.preventDefault(),z.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=y?!!t.chip:!!t.selection,D=R?_t(y?t.chip({item:C,index:O,props:F}):t.selection({item:C,index:O})):void 0;if(!(R&&!D))return r("div",{key:C.value,class:"v-select__selection"},[y?t.chip?r(ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:C.title}}},{default:()=>[D]}):r(sa,X({key:"chip",closable:e.closableChips,size:"small",text:C.title,disabled:C.props.disabled},F),null):D??r("span",{class:"v-select__selection-text"},[C.title,e.multiple&&O<h.value.length-1&&r("span",{class:"v-select__selection-comma"},[Pt(",")])])])})]),"append-inner":function(){var F;for(var C=arguments.length,O=new Array(C),w=0;w<C;w++)O[w]=arguments[w];return r(ie,null,[(F=t["append-inner"])==null?void 0:F.call(t,...O),e.menuIcon?r(le,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Lt({isFocused:c,menu:d,select:N},n)}});export{Se as V,Cn as a,Na as b,Ba as c,ja as d,ve as e,sa as f,$a as m,Pa as u};
