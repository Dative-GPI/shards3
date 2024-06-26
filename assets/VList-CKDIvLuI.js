import{K as d,i as K,s as T,p as z,I,b as w,c as m,g as Ce,v as p,X as ke,a2 as Xe,w as Ye,Y as Je,F as ye,m as ge}from"./vue.esm-bundler-DeSao-KJ.js";import{d as Qe}from"./index-BIb3aONP.js";import{m as D,g as F,u as G,d as Ze,p as et}from"./useRender-CIdmfI-I.js";import{I as M,m as N}from"./tag-BL1d6r1f.js";import{u as Q}from"./proxiedModel-B9H_VIYa.js";import{p as B,D as ae,F as ne,j as tt,n as at,E as Se,l as nt,f as V,v as we,A as lt}from"./theme-RQK62Xub.js";import{u as it}from"./ssrBoot-BXIJ_jLM.js";import{M as st}from"./transition-CTQG5_JK.js";import{V as $}from"./VDefaultsProvider-DHsFAklf.js";import{c as Ie}from"./VSpacer-CFNx9InD.js";import{a as le,b as Ae,g as Ve,m as Pe,u as Le}from"./border-IVtV0L-L.js";import{m as ie,u as se}from"./density-4sjlTnVP.js";import{m as Be,u as Oe}from"./dimensions-aXABR5Zz.js";import{m as xe,u as Me}from"./elevation-BBJMtRPf.js";import{m as re,u as ue}from"./rounded-BOBir3aK.js";import{m as rt,u as ut}from"./router-Cr7df_Je.js";import{R as ot}from"./index-BWi4ltEp.js";import{d as ct}from"./locale-BTkT-VzI.js";import{m as dt,u as vt,V as Z}from"./VIcon-B0BI55vc.js";import{V as ft}from"./VImg-BljrNAqA.js";import{a as mt,b as yt}from"./color-XZPyE2lN.js";import{V as gt}from"./VDivider-CPb7S374.js";const St=B({start:Boolean,end:Boolean,icon:M,image:String,text:String,...D(),...ie(),...re(),...dt(),...N(),...ae(),...le({variant:"flat"})},"VAvatar"),he=F()({name:"VAvatar",props:St(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=ne(e),{colorClasses:l,colorStyles:n,variantClasses:s}=Ae(e),{densityClasses:u}=se(e),{roundedClasses:h}=ue(e),{sizeClasses:v,sizeStyles:y}=vt(e);return G(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,l.value,u.value,h.value,v.value,s.value,e.class],style:[n.value,y.value,e.style]},{default:()=>[t.default?d($,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?d(ft,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(Z,{key:"icon",icon:e.icon},null):e.text,Ve(!1,"v-avatar")]})),{}}}),ee=Symbol.for("vuetify:list");function Fe(){const e=K(ee,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return z(ee,i),e}function _e(){return K(ee,null)}const oe=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=I(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;for(const s of t||[])n=i.activate({id:s,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},Te=e=>{const i=oe(e);return{activate:a=>{let{activated:l,id:n,...s}=a;n=I(n);const u=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:u})},in:(a,l,n)=>{let s=new Set;return a!=null&&a.length&&(s=i.in(a.slice(0,1),l,n)),s},out:(a,l,n)=>i.out(a,l,n)}},ht=e=>{const i=oe(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},bt=e=>{const i=Te(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},pt={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return a.delete(i),a},select:()=>null},je={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},Ct={open:je.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},ce=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=I(a),e&&!l){const s=Array.from(n.entries()).reduce((u,h)=>{let[v,y]=h;return y==="on"&&u.push(v),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},De=e=>{const i=ce(e);return{select:a=>{let{selected:l,id:n,...s}=a;n=I(n);const u=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:u})},in:(a,l,n)=>{let s=new Map;return a!=null&&a.length&&(s=i.in(a.slice(0,1),l,n)),s},out:(a,l,n)=>i.out(a,l,n)}},kt=e=>{const i=ce(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},wt=e=>{const i=De(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},It=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:s,parents:u}=t;a=I(a);const h=new Map(n),v=[a];for(;v.length;){const S=v.shift();n.set(S,l?"on":"off"),s.has(S)&&v.push(...s.get(S))}let y=u.get(a);for(;y;){const S=s.get(y),b=S.every(o=>n.get(o)==="on"),r=S.every(o=>!n.has(o)||n.get(o)==="off");n.set(y,b?"on":r?"off":"indeterminate"),y=u.get(y)}return e&&!l&&Array.from(n.entries()).reduce((b,r)=>{let[o,c]=r;return c==="on"&&b.push(o),b},[]).length===0?h:n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&l.push(n);return l}};return i},j=Symbol.for("vuetify:nested"),Ge={id:T(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},At=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),Vt=e=>{let i=!1;const t=w(new Map),a=w(new Map),l=Q(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=m(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return ht(e.mandatory);case"single-leaf":return bt(e.mandatory);case"independent":return oe(e.mandatory);case"single-independent":default:return Te(e.mandatory)}}),s=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return wt(e.mandatory);case"leaf":return kt(e.mandatory);case"independent":return ce(e.mandatory);case"single-independent":return De(e.mandatory);case"classic":default:return It(e.mandatory)}}),u=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ct;case"single":return pt;case"multiple":default:return je}}),h=Q(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),v=Q(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));Ce(()=>{i=!0});function y(r){const o=[];let c=r;for(;c!=null;)o.unshift(c),c=a.value.get(c);return o}const S=tt("nested"),b={id:T(),root:{opened:l,activatable:p(e,"activatable"),selectable:p(e,"selectable"),activated:h,selected:v,selectedValues:m(()=>{const r=[];for(const[o,c]of v.value.entries())c==="on"&&r.push(o);return r}),register:(r,o,c)=>{o&&r!==o&&a.value.set(r,o),c&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(i)return;t.value.delete(r);const o=a.value.get(r);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(f=>f!==r))}a.value.delete(r),l.value.delete(r)},open:(r,o,c)=>{S.emit("click:open",{id:r,value:o,path:y(r),event:c});const f=u.value.open({id:r,value:o,opened:new Set(l.value),children:t.value,parents:a.value,event:c});f&&(l.value=f)},openOnSelect:(r,o,c)=>{const f=u.value.select({id:r,value:o,selected:new Map(v.value),opened:new Set(l.value),children:t.value,parents:a.value,event:c});f&&(l.value=f)},select:(r,o,c)=>{S.emit("click:select",{id:r,value:o,path:y(r),event:c});const f=s.value.select({id:r,value:o,selected:new Map(v.value),children:t.value,parents:a.value,event:c});f&&(v.value=f),b.root.openOnSelect(r,o,c)},activate:(r,o,c)=>{if(!e.activatable)return b.root.select(r,!0,c);S.emit("click:activate",{id:r,value:o,path:y(r),event:c});const f=n.value.activate({id:r,value:o,activated:new Set(h.value),children:t.value,parents:a.value,event:c});f&&(h.value=f)},children:t,parents:a}};return z(j,b),b.root},Ne=(e,i)=>{const t=K(j,Ge),a=Symbol(at()),l=m(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(s,u)=>t.root.open(l.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(l.value,s,u),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),activate:(s,u)=>t.root.activate(l.value,s,u),isActivated:m(()=>t.root.activated.value.has(I(l.value))),select:(s,u)=>t.root.select(l.value,s,u),isSelected:m(()=>t.root.selected.value.get(I(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Ce(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&z(j,n),n},Pt=()=>{const e=K(j,Ge);z(j,{...e,isGroupActivator:!0})},Lt=Ze({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Pt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Bt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...D(),...N()},"VListGroup"),be=F()({name:"VListGroup",props:Bt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=Ne(p(e,"value"),!0),s=m(()=>`v-list-group--id-${String(n.value)}`),u=_e(),{isBooted:h}=it();function v(r){l(!a.value,r)}const y=m(()=>({onClick:v,class:"v-list-group__header",id:s.value})),S=m(()=>a.value?e.collapseIcon:e.expandIcon),b=m(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}));return G(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&d($,{defaults:b.value},{default:()=>[d(Lt,null,{default:()=>[t.activator({props:y.value,isOpen:a.value})]})]}),d(st,{transition:{component:Qe},disabled:!h.value},{default:()=>{var r;return[ke(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[Xe,a.value]])]}})]})),{isOpen:a}}}),Ot=Ie("v-list-item-subtitle"),xt=Ie("v-list-item-title"),Mt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Se(),onClickOnce:Se(),...Pe(),...D(),...ie(),...Be(),...xe(),...re(),...rt(),...N(),...ae(),...le({variant:"text"})},"VListItem"),pe=F()({name:"VListItem",directives:{Ripple:ot},props:Mt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=ut(e,t),s=m(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:h,select:v,isSelected:y,isIndeterminate:S,isGroupActivator:b,root:r,parent:o,openOnSelect:c}=Ne(s,!1),f=_e(),P=m(()=>{var g;return e.active!==!1&&(e.active||((g=n.isActive)==null?void 0:g.value)||(r.activatable.value?h.value:y.value))}),_=m(()=>e.link!==!1&&n.isLink.value),A=m(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!f&&(r.selectable.value||r.activatable.value||e.value!=null))),O=m(()=>e.rounded||e.nav),x=m(()=>e.color??e.activeColor),H=m(()=>({color:P.value?x.value??e.baseColor:e.baseColor,variant:e.variant}));Ye(()=>{var g;return(g=n.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&r.open(o.value,!0),g&&c(g)},{immediate:!0});const{themeClasses:U}=ne(e),{borderClasses:q}=Le(e),{colorClasses:W,colorStyles:X,variantClasses:L}=Ae(H),{densityClasses:C}=se(e),{dimensionStyles:R}=Oe(e),{elevationClasses:Ke}=Me(e),{roundedClasses:ze}=ue(O),He=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=m(()=>({isActive:P.value,select:v,isSelected:y.value,isIndeterminate:S.value}));function de(g){var E;l("click",g),!(b||!A.value)&&((E=n.navigate)==null||E.call(n,g),r.activatable.value?u(!h.value,g):(r.selectable.value||e.value!=null)&&v(!y.value,g))}function Ue(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),de(g))}return G(()=>{const g=_.value?"a":e.tag,E=a.title||e.title!=null,qe=a.subtitle||e.subtitle!=null,ve=!!(e.appendAvatar||e.appendIcon),We=!!(ve||a.append),fe=!!(e.prependAvatar||e.prependIcon),J=!!(fe||a.prepend);return f==null||f.updateHasPrepend(J),e.activeColor&&ct("active-color",["color","base-color"]),ke(d(g,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!J&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},U.value,q.value,W.value,C.value,Ke.value,He.value,ze.value,L.value,e.class],style:[X.value,R.value,e.style],href:n.href.value,tabindex:A.value?f?-2:0:void 0,onClick:de,onKeydown:A.value&&!_.value&&Ue},{default:()=>{var me;return[Ve(A.value||P.value,"v-list-item"),J&&d("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?d($,{key:"prepend-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=a.prepend)==null?void 0:k.call(a,Y.value)]}}):d(ye,null,[e.prependAvatar&&d(he,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(Z,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[E&&d(xt,{key:"title"},{default:()=>{var k;return[((k=a.title)==null?void 0:k.call(a,{title:e.title}))??e.title]}}),qe&&d(Ot,{key:"subtitle"},{default:()=>{var k;return[((k=a.subtitle)==null?void 0:k.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(me=a.default)==null?void 0:me.call(a,Y.value)]),We&&d("div",{key:"append",class:"v-list-item__append"},[a.append?d($,{key:"append-defaults",disabled:!ve,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=a.append)==null?void 0:k.call(a,Y.value)]}}):d(ye,null,[e.appendIcon&&d(Z,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(he,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),A.value&&e.ripple]])}),{isGroupActivator:b,isSelected:y,list:f,select:v}}}),Ft=B({color:String,inset:Boolean,sticky:Boolean,title:String,...D(),...N()},"VListSubheader"),_t=F()({name:"VListSubheader",props:Ft(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=mt(p(e,"color"));return G(()=>{const n=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&d("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Tt=B({items:Array,returnObject:Boolean},"VListChildren"),Re=F()({name:"VListChildren",props:Tt(),setup(e,i){let{slots:t}=i;return Fe(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var b,r;let{children:s,props:u,type:h,raw:v}=n;if(h==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:u}))??d(gt,u,null);if(h==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:u}))??d(_t,u,null);const y={subtitle:t.subtitle?o=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...o,item:v})}:void 0,prepend:t.prepend?o=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...o,item:v})}:void 0,append:t.append?o=>{var c;return(c=t.append)==null?void 0:c.call(t,{...o,item:v})}:void 0,title:t.title?o=>{var c;return(c=t.title)==null?void 0:c.call(t,{...o,item:v})}:void 0},S=be.filterProps(u);return s?d(be,ge({value:u==null?void 0:u.value},S),{activator:o=>{let{props:c}=o;const f={...u,...c,value:e.returnObject?v:u.value};return t.header?t.header({props:f}):d(pe,f,y)},default:()=>d(Re,{items:s},t)}):t.item?t.item({props:u}):d(pe,ge(u,{value:e.returnObject?v:u.value}),y)}))}}}),jt=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:nt}},"list-items");function te(e,i){const t=V(i,e.itemTitle,i),a=V(i,e.itemValue,t),l=V(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?we(i,["children"]):i:void 0:V(i,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Ee(e,l):void 0,raw:i}}function Ee(e,i){const t=[];for(const a of i)t.push(te(e,a));return t}function oa(e){const i=m(()=>Ee(e,e.items)),t=m(()=>i.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?te(e,s):i.value.find(u=>e.valueComparator(s,u.value))||te(e,s))}function l(n){return e.returnObject?n.map(s=>{let{raw:u}=s;return u}):n.map(s=>{let{value:u}=s;return u})}return{items:i,transformIn:a,transformOut:l}}function Dt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Gt(e,i){const t=V(i,e.itemType,"item"),a=Dt(i)?i:V(i,e.itemTitle),l=V(i,e.itemValue,void 0),n=V(i,e.itemChildren),s=e.itemProps===!0?we(i,["children"]):V(i,e.itemProps),u={title:a,value:l,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?$e(e,n):void 0,raw:i}}function $e(e,i){const t=[];for(const a of i)t.push(Gt(e,a));return t}function Nt(e){return{items:m(()=>$e(e,e.items))}}const Rt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...At({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...D(),...ie(),...Be(),...xe(),itemType:{type:String,default:"type"},...jt(),...re(),...N(),...ae(),...le({variant:"text"})},"VList"),ca=F()({name:"VList",props:Rt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=Nt(e),{themeClasses:l}=ne(e),{backgroundColorClasses:n,backgroundColorStyles:s}=yt(p(e,"bgColor")),{borderClasses:u}=Le(e),{densityClasses:h}=se(e),{dimensionStyles:v}=Oe(e),{elevationClasses:y}=Me(e),{roundedClasses:S}=ue(e),{children:b,open:r,parents:o,select:c}=Vt(e),f=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),P=p(e,"activeColor"),_=p(e,"baseColor"),A=p(e,"color");Fe(),et({VListGroup:{activeColor:P,baseColor:_,color:A,expandIcon:p(e,"expandIcon"),collapseIcon:p(e,"collapseIcon")},VListItem:{activeClass:p(e,"activeClass"),activeColor:P,baseColor:_,color:A,density:p(e,"density"),disabled:p(e,"disabled"),lines:p(e,"lines"),nav:p(e,"nav"),slim:p(e,"slim"),variant:p(e,"variant")}});const O=T(!1),x=w();function H(C){O.value=!0}function U(C){O.value=!1}function q(C){var R;!O.value&&!(C.relatedTarget&&((R=x.value)!=null&&R.contains(C.relatedTarget)))&&L()}function W(C){if(x.value){if(C.key==="ArrowDown")L("next");else if(C.key==="ArrowUp")L("prev");else if(C.key==="Home")L("first");else if(C.key==="End")L("last");else return;C.preventDefault()}}function X(C){O.value=!0}function L(C){if(x.value)return lt(x.value,C)}return G(()=>d(e.tag,{ref:x,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,u.value,h.value,y.value,f.value,S.value,e.class],style:[s.value,v.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:U,onFocus:q,onKeydown:W,onMousedown:X},{default:()=>[d(Re,{items:a.value,returnObject:e.returnObject},t)]})),{open:r,select:c,focus:L,children:b,parents:o}}});export{pe as V,ca as a,he as b,be as c,Mt as d,Rt as e,Nt as f,jt as g,Bt as m,oa as u};