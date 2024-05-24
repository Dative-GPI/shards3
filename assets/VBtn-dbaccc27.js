import{x as k,A as s,B as ne,e as v,w as se,n as le,C as oe}from"./vue.esm-bundler-01006032.js";import{m as _,a as x,u as A,b as ie,g as ue}from"./border-10554549.js";import{m as D,g as P,p as de,u as I}from"./useRender-4bcbb6ac.js";import{m as R,u as w}from"./density-d09a1492.js";import{m as O,u as z}from"./elevation-28c6fd5f.js";import{m as K,u as $}from"./rounded-9001edc0.js";import{m as j,I as G}from"./tag-1f5f74bd.js";import{p as g,J as E,K as N,g as ce}from"./theme-a26d2375.js";import{a as re,b as ve,m as me,u as fe}from"./group-e9c3615d.js";import{m as be,u as ye}from"./dimensions-4232d0fa.js";import{m as ke,a as ge,u as Ce,b as Ve}from"./loader-878147ed.js";import{m as Be,u as Pe}from"./router-5e751bda.js";import{m as Ie,u as he,V}from"./VIcon-17be8ae5.js";import{R as Se}from"./index-89394051.js";import{V as B}from"./VDefaultsProvider-d99c6ff5.js";import{V as Le}from"./VProgressCircular-f05fef1e.js";const F=g({baseColor:String,divided:Boolean,..._(),...D(),...R(),...O(),...K(),...j(),...E(),...x()},"VBtnGroup"),T=P()({name:"VBtnGroup",props:F(),setup(e,i){let{slots:n}=i;const{themeClasses:t}=N(e),{densityClasses:d}=w(e),{borderClasses:c}=A(e),{elevationClasses:r}=z(e),{roundedClasses:m}=$(e);de({VBtn:{height:"auto",baseColor:k(e,"baseColor"),color:k(e,"color"),density:k(e,"density"),flat:!0,variant:k(e,"variant")}}),I(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,c.value,d.value,r.value,m.value,e.class],style:e.style},n))}}),J=Symbol.for("vuetify:v-btn-toggle"),Ge=g({...F(),...re()},"VBtnToggle");P()({name:"VBtnToggle",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:n}=i;const{isSelected:t,next:d,prev:c,select:r,selected:m}=ve(e,J);return I(()=>{const C=T.filterProps(e);return s(T,ne({class:["v-btn-toggle",e.class]},C,{style:e.style}),{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,{isSelected:t,next:d,prev:c,select:r,selected:m})]}})}),{next:d,prev:c,select:r}}});const Te=["static","relative","fixed","absolute","sticky"],_e=g({position:{type:String,validator:e=>Te.includes(e)}},"position");function xe(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce();return{positionClasses:v(()=>e.position?`${i}--${e.position}`:void 0)}}function Ae(e,i){se(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&i&&le(()=>{i(!0)})},{immediate:!0})}const De=g({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:J},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:G,appendIcon:G,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,..._(),...D(),...R(),...be(),...O(),...me(),...ke(),...ge(),..._e(),...K(),...Be(),...Ie(),...j({tag:"button"}),...E(),...x({variant:"elevated"})},"VBtn"),We=P()({name:"VBtn",props:De(),emits:{"group:selected":e=>!0},setup(e,i){let{attrs:n,slots:t}=i;const{themeClasses:d}=N(e),{borderClasses:c}=A(e),{densityClasses:r}=w(e),{dimensionStyles:m}=ye(e),{elevationClasses:C}=z(e),{loaderClasses:f}=Ce(e),{locationStyles:q}=Ve(e),{positionClasses:H}=xe(e),{roundedClasses:M}=$(e),{sizeClasses:Q,sizeStyles:U}=he(e),a=fe(e,e.symbol,!1),l=Pe(e,n),W=v(()=>{var o;return e.active!==void 0?e.active:l.isLink.value?(o=l.isActive)==null?void 0:o.value:a==null?void 0:a.isSelected.value}),X=v(()=>{var u,y;return{color:(a==null?void 0:a.isSelected.value)&&(!l.isLink.value||((u=l.isActive)==null?void 0:u.value))||!a||((y=l.isActive)==null?void 0:y.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:Y,colorStyles:Z,variantClasses:p}=ie(X),b=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),ee=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),ae=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function te(o){var u;b.value||l.isLink.value&&(o.metaKey||o.ctrlKey||o.shiftKey||o.button!==0||n.target==="_blank")||((u=l.navigate)==null||u.call(l,o),a==null||a.toggle())}return Ae(l,a==null?void 0:a.select),I(()=>{const o=l.isLink.value?"a":e.tag,u=!!(e.prependIcon||t.prepend),y=!!(e.appendIcon||t.append),h=!!(e.icon&&e.icon!==!0);return oe(s(o,{type:o==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":W.value,"v-btn--block":e.block,"v-btn--disabled":b.value,"v-btn--elevated":ee.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},d.value,c.value,Y.value,r.value,C.value,f.value,H.value,M.value,Q.value,p.value,e.class],style:[Z.value,m.value,q.value,U.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:b.value||void 0,href:l.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:te,value:ae.value},{default:()=>{var S;return[ue(!0,"v-btn"),!e.icon&&u&&s("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?s(B,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):s(V,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&h?s(V,{key:"content-icon",icon:e.icon},null):s(B,{key:"content-defaults",disabled:!h,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var L;return[((L=t.default)==null?void 0:L.call(t))??e.text]}})]),!e.icon&&y&&s("span",{key:"append",class:"v-btn__append"},[t.append?s(B,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):s(V,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((S=t.loader)==null?void 0:S.call(t))??s(Le,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Se,!b.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:a}}});export{We as V,_e as a,De as m,xe as u};