import{a as w}from"./locale-6d7be75c.js";import{r as k,w as S,g as p}from"./vue.esm-bundler-6746129d.js";import{l as Y,n as l,m as T}from"./theme-dcffbbe6.js";const f={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function A(t,e){const n=[];let r=[];const o=d(t),s=M(t),a=(o.getDay()-f[e.slice(-2).toUpperCase()]+7)%7,c=(s.getDay()-f[e.slice(-2).toUpperCase()]+7)%7;for(let u=0;u<a;u++){const i=new Date(o);i.setDate(i.getDate()-(a-u)),r.push(i)}for(let u=1;u<=s.getDate();u++){const i=new Date(t.getFullYear(),t.getMonth(),u);r.push(i),r.length===7&&(n.push(r),r=[])}for(let u=1;u<7-c;u++){const i=new Date(s);i.setDate(i.getDate()+u),r.push(i)}return r.length>0&&n.push(r),n}function O(t){const e=new Date(t);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function F(t){const e=new Date(t);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function d(t){return new Date(t.getFullYear(),t.getMonth(),1)}function M(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function I(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const E=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function m(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(E.test(t))return I(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const h=new Date(2e3,0,2);function N(t){const e=f[t.slice(-2).toUpperCase()];return Y(7).map(n=>{const r=new Date(h);return r.setDate(h.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function W(t,e,n,r){const o=m(t)??new Date,s=r==null?void 0:r[e];if(typeof s=="function")return s(o,e,n);let a={};switch(e){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":a={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(o.getDate());case"shortDate":a={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":a={weekday:"short"};break;case"year":a={year:"numeric"};break;default:a=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(o)}function H(t,e){const n=t.toJsDate(e),r=n.getFullYear(),o=l(String(n.getMonth()+1),2,"0"),s=l(String(n.getDate()),2,"0");return`${r}-${o}-${s}`}function R(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function b(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function L(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function B(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function C(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function U(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function P(t){return t.getFullYear()}function G(t){return t.getMonth()}function K(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function Z(t){return t.getHours()}function V(t){return t.getMinutes()}function J(t){return new Date(t.getFullYear(),0,1)}function j(t){return new Date(t.getFullYear(),11,31)}function v(t,e){return D(t,e[0])&&x(t,e[1])}function z(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function D(t,e){return t.getTime()>e.getTime()}function x(t,e){return t.getTime()<e.getTime()}function g(t,e){return t.getTime()===e.getTime()}function $(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Q(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function X(t,e,n){const r=new Date(t),o=new Date(e);return n==="month"?r.getMonth()-o.getMonth()+(r.getFullYear()-o.getFullYear())*12:Math.floor((r.getTime()-o.getTime())/(1e3*60*60*24))}function q(t,e){const n=new Date(t);return n.setHours(e),n}function _(t,e){const n=new Date(t);return n.setMinutes(e),n}function ee(t,e){const n=new Date(t);return n.setMonth(e),n}function te(t,e){const n=new Date(t);return n.setFullYear(e),n}function ne(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function re(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class ae{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return m(e)}toJsDate(e){return e}toISO(e){return H(this,e)}parseISO(e){return R(e)}addMinutes(e,n){return b(e,n)}addHours(e,n){return L(e,n)}addDays(e,n){return B(e,n)}addWeeks(e,n){return C(e,n)}addMonths(e,n){return U(e,n)}getWeekArray(e){return A(e,this.locale)}startOfWeek(e){return O(e)}endOfWeek(e){return F(e)}startOfMonth(e){return d(e)}endOfMonth(e){return M(e)}format(e,n){return W(e,n,this.locale,this.formats)}isEqual(e,n){return g(e,n)}isValid(e){return z(e)}isWithinRange(e,n){return v(e,n)}isAfter(e,n){return D(e,n)}isBefore(e,n){return!D(e,n)&&!g(e,n)}isSameDay(e,n){return $(e,n)}isSameMonth(e,n){return Q(e,n)}setMinutes(e,n){return _(e,n)}setHours(e,n){return q(e,n)}setMonth(e,n){return ee(e,n)}setYear(e,n){return te(e,n)}getDiff(e,n,r){return X(e,n,r)}getWeekdays(){return N(this.locale)}getYear(e){return P(e)}getMonth(e){return G(e)}getNextMonth(e){return K(e)}getHours(e){return Z(e)}getMinutes(e){return V(e)}startOfDay(e){return ne(e)}endOfDay(e){return re(e)}startOfYear(e){return J(e)}endOfYear(e){return j(e)}}const oe=Symbol.for("vuetify:date-options"),ce=Symbol.for("vuetify:date-adapter");function fe(t,e){const n=T({adapter:ae,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:y(n,e)}}function y(t,e){const n=k(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return S(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}function De(){const t=p(oe);if(!t)throw new Error("[Vuetify] Could not find injected date options");const e=w();return y(t,e)}function le(t,e){const n=t.toJsDate(e);let r=n.getFullYear(),o=new Date(r,0,1);if(n<o)r=r-1,o=new Date(r,0,1);else{const c=new Date(r+1,0,1);n>=c&&(r=r+1,o=c)}const s=Math.abs(n.getTime()-o.getTime()),a=Math.ceil(s/(1e3*60*60*24));return Math.floor(a/7)+1}export{oe as D,ce as a,fe as c,le as g,De as u};
