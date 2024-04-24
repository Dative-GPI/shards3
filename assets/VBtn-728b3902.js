import{E as g,v as s,x as le,e as v,w as ie,n as oe,y as ue}from"./vue.esm-bundler-0c8496bd.js";import{m as D,a as A,u as R,b as de,g as ce}from"./border-f9cc1939.js";import{m as E,g as B,p as re,u as C}from"./useRender-8701d95b.js";import{m as O,u as w}from"./density-22f26472.js";import{m as z,u as $}from"./elevation-00653c06.js";import{m as j,u as F}from"./rounded-6b3d6a43.js";import{m as K,I as _}from"./tag-0cc02cbd.js";import{p as y,E as N,F as J,g as ve}from"./theme-3745e9f1.js";import{a as me,b as fe,m as be,u as ye}from"./group-8484219c.js";import{m as ke,u as ge}from"./dimensions-13ab2ad3.js";import{m as Ve,a as Pe,u as Be,b as Ce}from"./loader-4f914636.js";import{m as Ie,u as he}from"./router-ad9465af.js";import{m as Se,u as Le,V}from"./VIcon-7bba82fc.js";import{R as Ge}from"./index-5120e393.js";import{V as P}from"./VDefaultsProvider-caefb467.js";import{V as Te}from"./VProgressCircular-91035e99.js";const q=y({divided:Boolean,...D(),...E(),...O(),...z(),...j(),...K(),...N(),...A()},"VBtnGroup"),x=B()({name:"VBtnGroup",props:q(),setup(e,o){let{slots:n}=o;const{themeClasses:t}=J(e),{densityClasses:u}=w(e),{borderClasses:d}=R(e),{elevationClasses:c}=$(e),{roundedClasses:r}=F(e);re({VBtn:{height:"auto",color:g(e,"color"),density:g(e,"density"),flat:!0,variant:g(e,"variant")}}),C(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,d.value,u.value,c.value,r.value,e.class],style:e.style},n))}}),H=Symbol.for("vuetify:v-btn-toggle"),_e=y({...q(),...me()},"VBtnToggle");B()({name:"VBtnToggle",props:_e(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{isSelected:t,next:u,prev:d,select:c,selected:r}=fe(e,H);return C(()=>{const k=x.filterProps(e);return s(x,le({class:["v-btn-toggle",e.class]},k,{style:e.style}),{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n,{isSelected:t,next:u,prev:d,select:c,selected:r})]}})}),{next:u,prev:d,select:c}}});const xe=["static","relative","fixed","absolute","sticky"],De=y({position:{type:String,validator:e=>xe.includes(e)}},"position");function Ae(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve();return{positionClasses:v(()=>e.position?`${o}--${e.position}`:void 0)}}function Re(e,o){ie(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&o&&oe(()=>{o(!0)})},{immediate:!0})}const Ee=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:H},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:_,appendIcon:_,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...D(),...E(),...O(),...ke(),...z(),...be(),...Ve(),...Pe(),...De(),...j(),...Ie(),...Se(),...K({tag:"button"}),...N(),...A({variant:"elevated"})},"VBtn"),Ye=B()({name:"VBtn",props:Ee(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const{themeClasses:u}=J(e),{borderClasses:d}=R(e),{colorClasses:c,colorStyles:r,variantClasses:k}=de(e),{densityClasses:m}=w(e),{dimensionStyles:M}=ge(e),{elevationClasses:Q}=$(e),{loaderClasses:U}=Be(e),{locationStyles:W}=Ce(e),{positionClasses:X}=Ae(e),{roundedClasses:Y}=F(e),{sizeClasses:Z,sizeStyles:p}=Le(e),a=ye(e,e.symbol,!1),l=he(e,n),ee=v(()=>{var i;return e.active!==void 0?e.active:l.isLink.value?(i=l.isActive)==null?void 0:i.value:a==null?void 0:a.isSelected.value}),f=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),ae=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),te=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function ne(i){var b;f.value||l.isLink.value&&(i.metaKey||i.ctrlKey||i.shiftKey||i.button!==0||n.target==="_blank")||((b=l.navigate)==null||b.call(l,i),a==null||a.toggle())}return Re(l,a==null?void 0:a.select),C(()=>{var S,L;const i=l.isLink.value?"a":e.tag,b=!!(e.prependIcon||t.prepend),se=!!(e.appendIcon||t.append),I=!!(e.icon&&e.icon!==!0),h=(a==null?void 0:a.isSelected.value)&&(!l.isLink.value||((S=l.isActive)==null?void 0:S.value))||!a||((L=l.isActive)==null?void 0:L.value);return ue(s(i,{type:i==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":ee.value,"v-btn--block":e.block,"v-btn--disabled":f.value,"v-btn--elevated":ae.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},u.value,d.value,h?c.value:void 0,m.value,Q.value,U.value,X.value,Y.value,Z.value,k.value,e.class],style:[h?r.value:void 0,M.value,W.value,p.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:f.value||void 0,href:l.href.value,tabindex:e.loading?-1:void 0,onClick:ne,value:te.value},{default:()=>{var G;return[ce(!0,"v-btn"),!e.icon&&b&&s("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?s(P,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):s(V,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&I?s(V,{key:"content-icon",icon:e.icon},null):s(P,{key:"content-defaults",disabled:!I,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var T;return[((T=t.default)==null?void 0:T.call(t))??e.text]}})]),!e.icon&&se&&s("span",{key:"append",class:"v-btn__append"},[t.append?s(P,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):s(V,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((G=t.loader)==null?void 0:G.call(t))??s(Te,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Ge,!f.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:a}}});export{Ye as V,De as a,Ee as m,Ae as u};
