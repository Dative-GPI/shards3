import{c as y,b as T,i as A,s as M,p as I,w as O,m as p,I as g,n as S}from"./vue.esm-bundler-DC82FEWN.js";import{m as K,V as U,u as R,a as V,b as w}from"./VOverlay-HCh9BhQb.js";import{f as j}from"./forwardRefs-DWGaNmQL.js";import{u as F}from"./proxiedModel-CYw7-KgF.js";import{p as L,o as N,e as $,j as q,k as E,l as z,m as b}from"./theme-CDGAP9oX.js";import{V as B}from"./VDefaultsProvider-CTE9NJfn.js";import{g as G,u as H}from"./color-BhlhQtQT.js";const J=L({id:String,...N(K({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},"VMenu"),oe=G()({name:"VMenu",props:J(),emits:{"update:modelValue":a=>!0},setup(a,k){let{slots:i}=k;const l=F(a,"modelValue"),{scopeId:C}=R(),P=$(),d=y(()=>a.id||`v-menu-${P}`),s=T(),t=A(V,null),c=M(0);I(V,{register(){++c.value},unregister(){--c.value},closeParents(e){setTimeout(()=>{!c.value&&(e==null||e&&!q(e,s.value.contentEl))&&(l.value=!1,t==null||t.closeParents())},40)}});async function v(e){var r,u,f;const o=e.relatedTarget,n=e.target;await S(),l.value&&o!==n&&((r=s.value)!=null&&r.contentEl)&&((u=s.value)!=null&&u.globalTop)&&![document,s.value.contentEl].includes(n)&&!s.value.contentEl.contains(n)&&((f=E(s.value.contentEl)[0])==null||f.focus())}O(l,e=>{e?(t==null||t.register(),document.addEventListener("focusin",v,{once:!0})):(t==null||t.unregister(),document.removeEventListener("focusin",v))});function x(e){t==null||t.closeParents(e)}function D(e){var o,n,r;a.disabled||(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick?(e.key==="Enter"&&e.preventDefault(),z(E((o=s.value)==null?void 0:o.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(r=(n=s.value)==null?void 0:n.activatorEl)==null||r.focus())):["Enter"," "].includes(e.key)&&a.closeOnContentClick&&(l.value=!1,t==null||t.closeParents()))}function m(e){var n;if(a.disabled)return;const o=(n=s.value)==null?void 0:n.contentEl;o&&l.value?e.key==="ArrowDown"?(e.preventDefault(),b(o,"next")):e.key==="ArrowUp"&&(e.preventDefault(),b(o,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const h=y(()=>p({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},a.activatorProps));return H(()=>{const e=w.filterProps(a);return g(w,p({ref:s,id:d.value,class:["v-menu",a.class],style:a.style},e,{modelValue:l.value,"onUpdate:modelValue":o=>l.value=o,absolute:!0,activatorProps:h.value,"onClick:outside":x,onKeydown:D},C),{activator:i.activator,default:function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return g(B,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...n)]}})}})}),j({id:d,ΨopenChildren:c},s)}});export{oe as V};
