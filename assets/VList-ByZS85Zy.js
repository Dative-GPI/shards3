import{a4 as et,_ as tt,h as at,d as nt,c as f,y as lt,z as st,A as it,C as ye,m as te,N as d,B as rt,O as ut,K as ot,L as ct,M as dt,D as vt,i as z,s as T,p as q,S as w,b as V,o as we,t as p,X as Ae,a0 as ft,w as mt,Y as gt,G as Se}from"./vue.esm-bundler-l-siv0w9.js";import{F as yt}from"./FSCard-DL4SLpmS.js";import{C as he}from"./useColors-Bs2u1_6J.js";import{u as St}from"./useBreakpoints-C5IzU8MC.js";import{_ as ht}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as bt}from"./VDialog-BXBtUIC2.js";import{d as pt}from"./index-B089V-om.js";import{g as _,m as M,a as D,d as Ct,b as Ie,c as kt,p as Vt}from"./color-De-77ojK.js";import{I as F,m as wt,a as N,u as At,V as ae}from"./VIcon-D6ql3n-m.js";import{u as ee}from"./proxiedModel-KpugNjnZ.js";import{p as P,s as K,x as U,a as It,e as Pt,E as be,c as pe,d as Lt,b as I,o as Pe,q as Bt}from"./theme-C2MnUTNI.js";import{u as _t}from"./ssrBoot-DD96sY1N.js";import{M as Ot}from"./transition-AZsQzdUZ.js";import{V as R}from"./VDefaultsProvider-CfqLszOw.js";import{a as se,b as Le,g as Be,m as _e,u as Oe}from"./border-DXAdoVnk.js";import{m as ie,u as re}from"./density-Dt_pQxP_.js";import{m as xe,u as Fe}from"./dimensions-9QoL2_-9.js";import{m as Me,u as De}from"./elevation-BZDXH0CP.js";import{m as ue,u as oe}from"./rounded-uHrmshEX.js";import{m as xt,u as Ft}from"./router-CIHGWUSM.js";import{R as Mt}from"./index-Cr304eD2.js";import{V as Dt}from"./VImg-CZhZqiQJ.js";function xa(e){}function $t(e,l){l=Array.isArray(l)?l.slice(0,-1).map(t=>`'${t}'`).join(", ")+` or '${l.at(-1)}'`:`'${l}'`}function $e(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return _()({name:t??et(tt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...M()},setup(a,s){let{slots:n}=s;return()=>{var i;return at(a.tag,{class:[e,a.class],style:a.style},(i=n.default)==null?void 0:i.call(n))}}})}const Te=nt({name:"FSDialogMenu",components:{FSCard:yt},props:{cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:he.Dark}},emits:["update:modelValue"],setup(e){const{isExtraSmall:l}=St(),t=f(()=>{const a=["fs-dialog-menu"];return e.cardClasses&&(Array.isArray(e.cardClasses)?a.push(...e.cardClasses):a.push(e.cardClasses)),a});return{isExtraSmall:l,ColorEnum:he,classes:t}}});function Tt(e,l,t,a,s,n){const i=lt("FSCard");return st(),it(bt,te({modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{default:ye(()=>[d(i,{width:"calc(100vw - 48px)",padding:"8px",gap:"24px",color:e.$props.color,class:vt(e.classes)},rt({_:2},[ut(e.$slots,(r,y)=>({name:y,fn:ye(v=>[ot(e.$slots,y,ct(dt(v)))])}))]),1032,["color","class"])]),_:3},16,["modelValue"])}const Fa=ht(Te,[["render",Tt]]);Te.__docgenInfo={displayName:"FSDialogMenu",exportName:"default",description:"",tags:{},props:[{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMenu.vue"]};const jt=P({start:Boolean,end:Boolean,icon:F,image:String,text:String,...M(),...ie(),...ue(),...wt(),...N(),...K(),...se({variant:"flat"})},"VAvatar"),Ce=_()({name:"VAvatar",props:jt(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=U(e),{colorClasses:s,colorStyles:n,variantClasses:i}=Le(e),{densityClasses:r}=re(e),{roundedClasses:y}=oe(e),{sizeClasses:v,sizeStyles:g}=At(e);return D(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,r.value,y.value,v.value,i.value,e.class],style:[n.value,g.value,e.style]},{default:()=>[t.default?d(R,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?d(Dt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(ae,{key:"icon",icon:e.icon},null):e.text,Be(!1,"v-avatar")]})),{}}}),ne=Symbol.for("vuetify:list");function je(){const e=z(ne,{hasPrepend:T(!1),updateHasPrepend:()=>null}),l={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return q(ne,l),e}function Ne(){return z(ne,null)}const ce=e=>{const l={activate:t=>{let{id:a,value:s,activated:n}=t;return a=w(a),e&&!s&&n.size===1&&n.has(a)||(s?n.add(a):n.delete(a)),n},in:(t,a,s)=>{let n=new Set;for(const i of t||[])n=l.activate({id:i,value:!0,activated:new Set(n),children:a,parents:s});return n},out:t=>Array.from(t)};return l},Ge=e=>{const l=ce(e);return{activate:a=>{let{activated:s,id:n,...i}=a;n=w(n);const r=s.has(n)?new Set([n]):new Set;return l.activate({...i,id:n,activated:r})},in:(a,s,n)=>{let i=new Set;return a!=null&&a.length&&(i=l.in(a.slice(0,1),s,n)),i},out:(a,s,n)=>l.out(a,s,n)}},Nt=e=>{const l=ce(e);return{activate:a=>{let{id:s,activated:n,children:i,...r}=a;return s=w(s),i.has(s)?n:l.activate({id:s,activated:n,children:i,...r})},in:l.in,out:l.out}},Gt=e=>{const l=Ge(e);return{activate:a=>{let{id:s,activated:n,children:i,...r}=a;return s=w(s),i.has(s)?n:l.activate({id:s,activated:n,children:i,...r})},in:l.in,out:l.out}},Et={open:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(t){const n=new Set;n.add(l);let i=s.get(l);for(;i!=null;)n.add(i),i=s.get(i);return n}else return a.delete(l),a},select:()=>null},Ee={open:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(t){let n=s.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=s.get(n);return a}else a.delete(l);return a},select:()=>null},Rt={open:Ee.open,select:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(!t)return a;const n=[];let i=s.get(l);for(;i!=null;)n.push(i),i=s.get(i);return new Set(n)}},de=e=>{const l={select:t=>{let{id:a,value:s,selected:n}=t;if(a=w(a),e&&!s){const i=Array.from(n.entries()).reduce((r,y)=>{let[v,g]=y;return g==="on"&&r.push(v),r},[]);if(i.length===1&&i[0]===a)return n}return n.set(a,s?"on":"off"),n},in:(t,a,s)=>{let n=new Map;for(const i of t||[])n=l.select({id:i,value:!0,selected:new Map(n),children:a,parents:s});return n},out:t=>{const a=[];for(const[s,n]of t.entries())n==="on"&&a.push(s);return a}};return l},Re=e=>{const l=de(e);return{select:a=>{let{selected:s,id:n,...i}=a;n=w(n);const r=s.has(n)?new Map([[n,s.get(n)]]):new Map;return l.select({...i,id:n,selected:r})},in:(a,s,n)=>{let i=new Map;return a!=null&&a.length&&(i=l.in(a.slice(0,1),s,n)),i},out:(a,s,n)=>l.out(a,s,n)}},zt=e=>{const l=de(e);return{select:a=>{let{id:s,selected:n,children:i,...r}=a;return s=w(s),i.has(s)?n:l.select({id:s,selected:n,children:i,...r})},in:l.in,out:l.out}},qt=e=>{const l=Re(e);return{select:a=>{let{id:s,selected:n,children:i,...r}=a;return s=w(s),i.has(s)?n:l.select({id:s,selected:n,children:i,...r})},in:l.in,out:l.out}},Kt=e=>{const l={select:t=>{let{id:a,value:s,selected:n,children:i,parents:r}=t;a=w(a);const y=new Map(n),v=[a];for(;v.length;){const h=v.shift();n.set(h,s?"on":"off"),i.has(h)&&v.push(...i.get(h))}let g=r.get(a);for(;g;){const h=i.get(g),b=h.every(o=>n.get(o)==="on"),u=h.every(o=>!n.has(o)||n.get(o)==="off");n.set(g,b?"on":u?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(n.entries()).reduce((b,u)=>{let[o,c]=u;return c==="on"&&b.push(o),b},[]).length===0?y:n},in:(t,a,s)=>{let n=new Map;for(const i of t||[])n=l.select({id:i,value:!0,selected:new Map(n),children:a,parents:s});return n},out:(t,a)=>{const s=[];for(const[n,i]of t.entries())i==="on"&&!a.has(n)&&s.push(n);return s}};return l},j=Symbol.for("vuetify:nested"),ze={id:T(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([])}},Ut=P({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),Ht=e=>{let l=!1;const t=V(new Map),a=V(new Map),s=ee(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),n=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return Nt(e.mandatory);case"single-leaf":return Gt(e.mandatory);case"independent":return ce(e.mandatory);case"single-independent":default:return Ge(e.mandatory)}}),i=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return qt(e.mandatory);case"leaf":return zt(e.mandatory);case"independent":return de(e.mandatory);case"single-independent":return Re(e.mandatory);case"classic":default:return Kt(e.mandatory)}}),r=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Rt;case"single":return Et;case"multiple":default:return Ee}}),y=ee(e,"activated",e.activated,u=>n.value.in(u,t.value,a.value),u=>n.value.out(u,t.value,a.value)),v=ee(e,"selected",e.selected,u=>i.value.in(u,t.value,a.value),u=>i.value.out(u,t.value,a.value));we(()=>{l=!0});function g(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=a.value.get(c);return o}const h=It("nested"),b={id:T(),root:{opened:s,activatable:p(e,"activatable"),selectable:p(e,"selectable"),activated:y,selected:v,selectedValues:f(()=>{const u=[];for(const[o,c]of v.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&a.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=a.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(m=>m!==u))}a.value.delete(u),s.value.delete(u)},open:(u,o,c)=>{h.emit("click:open",{id:u,value:o,path:g(u),event:c});const m=r.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:a.value,event:c});m&&(s.value=m)},openOnSelect:(u,o,c)=>{const m=r.value.select({id:u,value:o,selected:new Map(v.value),opened:new Set(s.value),children:t.value,parents:a.value,event:c});m&&(s.value=m)},select:(u,o,c)=>{h.emit("click:select",{id:u,value:o,path:g(u),event:c});const m=i.value.select({id:u,value:o,selected:new Map(v.value),children:t.value,parents:a.value,event:c});m&&(v.value=m),b.root.openOnSelect(u,o,c)},activate:(u,o,c)=>{if(!e.activatable)return b.root.select(u,!0,c);h.emit("click:activate",{id:u,value:o,path:g(u),event:c});const m=n.value.activate({id:u,value:o,activated:new Set(y.value),children:t.value,parents:a.value,event:c});m&&(y.value=m)},children:t,parents:a}};return q(j,b),b.root},qe=(e,l)=>{const t=z(j,ze),a=Symbol(Pt()),s=f(()=>e.value!==void 0?e.value:a),n={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),activate:(i,r)=>t.root.activate(s.value,i,r),isActivated:f(()=>t.root.activated.value.has(w(s.value))),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(w(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),we(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&q(j,n),n},Wt=()=>{const e=z(j,ze);q(j,{...e,isGroupActivator:!0})},Xt=Ct({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Wt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Yt=P({activeColor:String,baseColor:String,color:String,collapseIcon:{type:F,default:"$collapse"},expandIcon:{type:F,default:"$expand"},prependIcon:F,appendIcon:F,fluid:Boolean,subgroup:Boolean,title:String,value:null,...M(),...N()},"VListGroup"),ke=_()({name:"VListGroup",props:Yt(),setup(e,l){let{slots:t}=l;const{isOpen:a,open:s,id:n}=qe(p(e,"value"),!0),i=f(()=>`v-list-group--id-${String(n.value)}`),r=Ne(),{isBooted:y}=_t();function v(u){s(!a.value,u)}const g=f(()=>({onClick:v,class:"v-list-group__header",id:i.value})),h=f(()=>a.value?e.collapseIcon:e.expandIcon),b=f(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return D(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&d(R,{defaults:b.value},{default:()=>[d(Xt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),d(Ot,{transition:{component:pt},disabled:!y.value},{default:()=>{var u;return[Ae(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(u=t.default)==null?void 0:u.call(t)]),[[ft,a.value]])]}})]})),{isOpen:a}}}),Jt=$e("v-list-item-subtitle"),Qt=$e("v-list-item-title"),Zt=P({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:be(),onClickOnce:be(),..._e(),...M(),...ie(),...xe(),...Me(),...ue(),...xt(),...N(),...K(),...se({variant:"text"})},"VListItem"),Ve=_()({name:"VListItem",directives:{Ripple:Mt},props:Zt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:s}=l;const n=Ft(e,t),i=f(()=>e.value===void 0?n.href.value:e.value),{activate:r,isActivated:y,select:v,isSelected:g,isIndeterminate:h,isGroupActivator:b,root:u,parent:o,openOnSelect:c}=qe(i,!1),m=Ne(),L=f(()=>{var S;return e.active!==!1&&(e.active||((S=n.isActive)==null?void 0:S.value)||(u.activatable.value?y.value:g.value))}),$=f(()=>e.link!==!1&&n.isLink.value),A=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!m&&(u.selectable.value||u.activatable.value||e.value!=null))),O=f(()=>e.rounded||e.nav),x=f(()=>e.color??e.activeColor),H=f(()=>({color:L.value?x.value??e.baseColor:e.baseColor,variant:e.variant}));mt(()=>{var S;return(S=n.isActive)==null?void 0:S.value},S=>{S&&o.value!=null&&u.open(o.value,!0),S&&c(S)},{immediate:!0});const{themeClasses:W}=U(e),{borderClasses:X}=Oe(e),{colorClasses:Y,colorStyles:J,variantClasses:B}=Le(H),{densityClasses:C}=re(e),{dimensionStyles:G}=Fe(e),{elevationClasses:We}=De(e),{roundedClasses:Xe}=oe(O),Ye=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=f(()=>({isActive:L.value,select:v,isSelected:g.value,isIndeterminate:h.value}));function ve(S){var E;s("click",S),!(b||!A.value)&&((E=n.navigate)==null||E.call(n,S),u.activatable.value?r(!y.value,S):(u.selectable.value||e.value!=null)&&v(!g.value,S))}function Je(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),ve(S))}return D(()=>{const S=$.value?"a":e.tag,E=a.title||e.title!=null,Qe=a.subtitle||e.subtitle!=null,fe=!!(e.appendAvatar||e.appendIcon),Ze=!!(fe||a.append),me=!!(e.prependAvatar||e.prependIcon),Z=!!(me||a.prepend);return m==null||m.updateHasPrepend(Z),e.activeColor&&$t("active-color",["color","base-color"]),Ae(d(S,{class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(m==null?void 0:m.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},W.value,X.value,Y.value,C.value,We.value,Ye.value,Xe.value,B.value,e.class],style:[J.value,G.value,e.style],href:n.href.value,tabindex:A.value?m?-2:0:void 0,onClick:ve,onKeydown:A.value&&!$.value&&Je},{default:()=>{var ge;return[Be(A.value||L.value,"v-list-item"),Z&&d("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?d(R,{key:"prepend-defaults",disabled:!me,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=a.prepend)==null?void 0:k.call(a,Q.value)]}}):d(Se,null,[e.prependAvatar&&d(Ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ae,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[E&&d(Qt,{key:"title"},{default:()=>{var k;return[((k=a.title)==null?void 0:k.call(a,{title:e.title}))??e.title]}}),Qe&&d(Jt,{key:"subtitle"},{default:()=>{var k;return[((k=a.subtitle)==null?void 0:k.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ge=a.default)==null?void 0:ge.call(a,Q.value)]),Ze&&d("div",{key:"append",class:"v-list-item__append"},[a.append?d(R,{key:"append-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=a.append)==null?void 0:k.call(a,Q.value)]}}):d(Se,null,[e.appendIcon&&d(ae,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(Ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[gt("ripple"),A.value&&e.ripple]])}),{isGroupActivator:b,isSelected:g,list:m,select:v}}}),ea=P({color:String,inset:Boolean,sticky:Boolean,title:String,...M(),...N()},"VListSubheader"),ta=_()({name:"VListSubheader",props:ea(),setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:s}=Ie(p(e,"color"));return D(()=>{const n=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[n&&d("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),aa=P({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...M(),...K()},"VDivider"),na=_()({name:"VDivider",props:aa(),setup(e,l){let{attrs:t}=l;const{themeClasses:a}=U(e),{textColorClasses:s,textColorStyles:n}=Ie(p(e,"color")),i=f(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=pe(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=pe(e.thickness)),r});return D(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,s.value,e.class],style:[i.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),la=P({items:Array,returnObject:Boolean},"VListChildren"),Ke=_()({name:"VListChildren",props:la(),setup(e,l){let{slots:t}=l;return je(),()=>{var a,s;return((a=t.default)==null?void 0:a.call(t))??((s=e.items)==null?void 0:s.map(n=>{var b,u;let{children:i,props:r,type:y,raw:v}=n;if(y==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:r}))??d(na,r,null);if(y==="subheader")return((u=t.subheader)==null?void 0:u.call(t,{props:r}))??d(ta,r,null);const g={subtitle:t.subtitle?o=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...o,item:v})}:void 0,prepend:t.prepend?o=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...o,item:v})}:void 0,append:t.append?o=>{var c;return(c=t.append)==null?void 0:c.call(t,{...o,item:v})}:void 0,title:t.title?o=>{var c;return(c=t.title)==null?void 0:c.call(t,{...o,item:v})}:void 0},h=ke.filterProps(r);return i?d(ke,te({value:r==null?void 0:r.value},h),{activator:o=>{let{props:c}=o;const m={...r,...c,value:e.returnObject?v:r.value};return t.header?t.header({props:m}):d(Ve,m,g)},default:()=>d(Ke,{items:i},t)}):t.item?t.item({props:r}):d(Ve,te(r,{value:e.returnObject?v:r.value}),g)}))}}}),sa=P({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Lt}},"list-items");function le(e,l){const t=I(l,e.itemTitle,l),a=I(l,e.itemValue,t),s=I(l,e.itemChildren),n=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Pe(l,["children"]):l:void 0:I(l,e.itemProps),i={title:t,value:a,...n};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Ue(e,s):void 0,raw:l}}function Ue(e,l){const t=[];for(const a of l)t.push(le(e,a));return t}function Ma(e){const l=f(()=>Ue(e,e.items)),t=f(()=>l.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(i=>i!==null)),n.map(i=>e.returnObject&&typeof i=="string"?le(e,i):l.value.find(r=>e.valueComparator(i,r.value))||le(e,i))}function s(n){return e.returnObject?n.map(i=>{let{raw:r}=i;return r}):n.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:a,transformOut:s}}function ia(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ra(e,l){const t=I(l,e.itemType,"item"),a=ia(l)?l:I(l,e.itemTitle),s=I(l,e.itemValue,void 0),n=I(l,e.itemChildren),i=e.itemProps===!0?Pe(l,["children"]):I(l,e.itemProps),r={title:a,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&n?He(e,n):void 0,raw:l}}function He(e,l){const t=[];for(const a of l)t.push(ra(e,a));return t}function ua(e){return{items:f(()=>He(e,e.items))}}const oa=P({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Ut({selectStrategy:"single-leaf",openStrategy:"list"}),..._e(),...M(),...ie(),...xe(),...Me(),itemType:{type:String,default:"type"},...sa(),...ue(),...N(),...K(),...se({variant:"text"})},"VList"),Da=_()({name:"VList",props:oa(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=ua(e),{themeClasses:s}=U(e),{backgroundColorClasses:n,backgroundColorStyles:i}=kt(p(e,"bgColor")),{borderClasses:r}=Oe(e),{densityClasses:y}=re(e),{dimensionStyles:v}=Fe(e),{elevationClasses:g}=De(e),{roundedClasses:h}=oe(e),{children:b,open:u,parents:o,select:c}=Ht(e),m=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),L=p(e,"activeColor"),$=p(e,"baseColor"),A=p(e,"color");je(),Vt({VListGroup:{activeColor:L,baseColor:$,color:A,expandIcon:p(e,"expandIcon"),collapseIcon:p(e,"collapseIcon")},VListItem:{activeClass:p(e,"activeClass"),activeColor:L,baseColor:$,color:A,density:p(e,"density"),disabled:p(e,"disabled"),lines:p(e,"lines"),nav:p(e,"nav"),slim:p(e,"slim"),variant:p(e,"variant")}});const O=T(!1),x=V();function H(C){O.value=!0}function W(C){O.value=!1}function X(C){var G;!O.value&&!(C.relatedTarget&&((G=x.value)!=null&&G.contains(C.relatedTarget)))&&B()}function Y(C){if(x.value){if(C.key==="ArrowDown")B("next");else if(C.key==="ArrowUp")B("prev");else if(C.key==="Home")B("first");else if(C.key==="End")B("last");else return;C.preventDefault()}}function J(C){O.value=!0}function B(C){if(x.value)return Bt(x.value,C)}return D(()=>d(e.tag,{ref:x,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},s.value,n.value,r.value,y.value,g.value,m.value,h.value,e.class],style:[i.value,v.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:W,onFocus:X,onKeydown:Y,onMousedown:J},{default:()=>[d(Ke,{items:a.value,returnObject:e.returnObject},t)]})),{open:u,select:c,focus:B,children:b,parents:o}}});export{Fa as F,Ve as V,Da as a,Ce as b,$e as c,ke as d,Zt as e,oa as f,ua as g,sa as h,na as i,xa as j,Yt as m,Ma as u};
