import{b as m,c,d as f,y as b,z as k,A as h,B as v,O as w,m as $,C as y,K as L,L as O,M as R}from"./vue.esm-bundler-l-siv0w9.js";import{u as F}from"./vue-router-C4bv40Tb.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p=m(void 0),T=()=>{const e=t=>{p.value=t},o=c(()=>p.value!==null);return{host:p,ready:o,setAppHost:e}},_=()=>{const{host:e}=T(),o=F(),t=(n,s)=>{n.preventDefault(),n.ctrlKey||n.metaKey||n.button===1?a(s):o.push(s)},a=n=>{const s=typeof n=="string"?n:o.resolve(n).href;window.top!=window.self&&e.value?window.open(e.value+s,"_blank"):window.open(s,"_blank")};return{handleOpenTabEvent:t,openTab:a}},u=f({name:"FSRouterLink",props:{to:{type:Object,required:!0}},setup(){const{handleOpenTabEvent:e}=_();return{handleOpenTabEvent:e}}});function g(e,o,t,a,n,s){const d=b("router-link");return k(),h(d,$({to:e.$props.to,onAuxclick:o[0]||(o[0]=r=>e.handleOpenTabEvent(r,e.$props.to)),onClick:o[1]||(o[1]=r=>e.handleOpenTabEvent(r,e.$props.to))},e.$attrs),v({_:2},[w(e.$slots,(r,i)=>({name:i,fn:y(l=>[L(e.$slots,i,O(R({...l})))])}))]),1040,["to"])}const B=S(u,[["render",g]]);u.__docgenInfo={displayName:"FSRouterLink",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"RouteLocation"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"v-bind",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRouterLink.vue"]};export{B as F,_ as u};
