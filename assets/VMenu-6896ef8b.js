import{e as p,d as A,j as M,s as T,v as S,w as I,p as y,B as g,z as K}from"./vue.esm-bundler-cada065a.js";import{m as O,V as U,u as R,a as V,b as w}from"./VOverlay-bf937035.js";import{f as j}from"./forwardRefs-e658ad70.js";import{u as z}from"./locale-793e4951.js";import{p as B,y as F,k as L,z as N,A as E,B as $,C as b}from"./theme-077d21c3.js";import{V as q}from"./VDefaultsProvider-1e56270a.js";import{g as G,u as H}from"./useRender-aebc0214.js";const J=B({id:String,...F(O({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},"VMenu"),oe=G()({name:"VMenu",props:J(),emits:{"update:modelValue":l=>!0},setup(l,P){let{slots:i}=P;const r=z(l,"modelValue"),{scopeId:C}=R(),x=L(),f=p(()=>l.id||`v-menu-${x}`),a=A(),o=M(V,null),c=T(0);S(V,{register(){++c.value},unregister(){--c.value},closeParents(e){setTimeout(()=>{!c.value&&(e==null||e&&!N(e,a.value.contentEl))&&(r.value=!1,o==null||o.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,n=e.target;await K(),r.value&&t!==n&&((s=a.value)!=null&&s.contentEl)&&((u=a.value)!=null&&u.globalTop)&&![document,a.value.contentEl].includes(n)&&!a.value.contentEl.contains(n)&&((d=E(a.value.contentEl)[0])==null||d.focus())}I(r,e=>{e?(o==null||o.register(),document.addEventListener("focusin",v,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",v))});function h(e){o==null||o.closeParents(e)}function k(e){var t,n,s;l.disabled||e.key==="Tab"&&($(E((t=a.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(n=a.value)==null?void 0:n.activatorEl)==null||s.focus()))}function m(e){var n;if(l.disabled)return;const t=(n=a.value)==null?void 0:n.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),b(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),b(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const D=p(()=>y({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return H(()=>{const e=w.filterProps(l);return g(w,y({ref:a,id:f.value,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:D.value,"onClick:outside":h,onKeydown:k},C),{activator:i.activator,default:function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return g(q,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...n)]}})}})}),j({id:f,ΨopenChildren:c},a)}});export{oe as V};
