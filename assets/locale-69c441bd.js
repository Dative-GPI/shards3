import{w as m,U as O,V as T,k as P,f as g,W as k,s as y,e as C}from"./vue.esm-bundler-bf312605.js";import{a as F,t as I,s as x}from"./useColors-9da280d0.js";const E={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},$={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function V(e,a){let t;function n(){t=T(),t.run(()=>a.length?a(()=>{t==null||t.stop(),n()}):a())}m(e,r=>{r&&!t?n():r||(t==null||t.stop(),t=void 0)},{immediate:!0}),O(()=>{t==null||t.stop()})}function j(e,a,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const s=F("useProxiedModel"),c=P(e[a]!==void 0?e[a]:t),o=I(a),f=o!==a?g(()=>{var l,i,d,h;return e[a],!!(((l=s.vnode.props)!=null&&l.hasOwnProperty(a)||(i=s.vnode.props)!=null&&i.hasOwnProperty(o))&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${a}`)||(h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${o}`)))}):g(()=>{var l,i;return e[a],!!((l=s.vnode.props)!=null&&l.hasOwnProperty(a)&&((i=s.vnode.props)!=null&&i.hasOwnProperty(`onUpdate:${a}`)))});V(()=>!f.value,()=>{m(()=>e[a],l=>{c.value=l})});const u=g({get(){const l=e[a];return n(f.value?l:c.value)},set(l){const i=r(l),d=k(f.value?e[a]:c.value);d===i||n(d)===l||(c.value=i,s==null||s.emit(`update:${a}`,i))}});return Object.defineProperty(u,"externalValue",{get:()=>f.value?e[a]:c.value}),u}const w="$vuetify.",L=(e,a)=>e.replace(/\{(\d+)\}/g,(t,n)=>String(a[+n])),N=(e,a,t)=>function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),c=1;c<r;c++)s[c-1]=arguments[c];if(!n.startsWith(w))return L(n,s);const o=n.replace(w,""),b=e.value&&t.value[e.value],f=a.value&&t.value[a.value];let u=x(b,o,null);return u||(`${n}${e.value}`,u=x(f,o,null)),u||(u=n),typeof u!="string"&&(u=n),L(u,s)};function S(e,a){return(t,n)=>new Intl.NumberFormat([e.value,a.value],n).format(t)}function v(e,a,t){const n=j(e,a,e[a]??t.value);return n.value=e[a]??t.value,m(t,r=>{e[a]==null&&(n.value=t.value)}),n}function A(e){return a=>{const t=v(a,"locale",e.current),n=v(a,"fallback",e.fallback),r=v(a,"messages",e.messages);return{name:"vuetify",current:t,fallback:n,messages:r,t:N(t,n,r),n:S(t,n),provide:A({current:t,fallback:n,messages:r})}}}function K(e){const a=y((e==null?void 0:e.locale)??"en"),t=y((e==null?void 0:e.fallback)??"en"),n=P({en:E,...e==null?void 0:e.messages});return{name:"vuetify",current:a,fallback:t,messages:n,t:N(a,t,n),n:S(a,t),provide:A({current:a,fallback:t,messages:n})}}const R=Symbol.for("vuetify:locale");function M(e){return e.name!=null}function B(e){const a=e!=null&&e.adapter&&M(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:K(e),t=z(a,e);return{...a,...t}}function W(){const e=C(R);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function z(e,a){const t=P((a==null?void 0:a.rtl)??$),n=g(()=>t.value[e.current.value]??!1);return{isRtl:n,rtl:t,rtlClasses:g(()=>`v-locale--is-${n.value?"rtl":"ltr"}`)}}function G(){const e=C(R);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}export{R as L,G as a,W as b,V as c,B as d,j as u};
