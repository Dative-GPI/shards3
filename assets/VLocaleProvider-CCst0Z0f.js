import{i as W,r as x,w as j,c as g,b as I,s as V,I as v,E as O}from"./vue.esm-bundler-DC82FEWN.js";import{a as C,p as N}from"./locale-BC9z6YbT.js";import{u as b}from"./proxiedModel-CYw7-KgF.js";import{p as M,w as B}from"./theme-CDGAP9oX.js";import{V as T}from"./VDefaultsProvider-CTE9NJfn.js";import{V as Y}from"./VBtn-BeQ1BOJB.js";import{g as p,m as L,u as E}from"./color-BhlhQtQT.js";const R=Symbol.for("vuetify:date-options");function F(a,e){const i=x(typeof a.adapter=="function"?new a.adapter({locale:a.locale[e.current.value]??e.current.value,formats:a.formats}):a.adapter);return j(e.current,r=>{i.locale=a.locale[r]??r??i.locale}),i}function A(){const a=W(R);if(!a)throw new Error("[Vuetify] Could not find injected date options");const e=C();return F(a,e)}function z(a,e){const i=a.toJsDate(e);let r=i.getFullYear(),f=new Date(r,0,1);if(i<f)r=r-1,f=new Date(r,0,1);else{const k=new Date(r+1,0,1);i>=k&&(r=r+1,f=k)}const m=Math.abs(i.getTime()-f.getTime()),s=Math.ceil(m/(1e3*60*60*24));return Math.floor(s/7)+1}const H=M({allowedDates:[Array,Function],disabled:Boolean,displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]}},"calendar");function J(a){const e=A(),i=b(a,"modelValue",[],n=>B(n)),r=g(()=>a.displayValue?e.date(a.displayValue):i.value.length>0?e.date(i.value[0]):a.min?e.date(a.min):Array.isArray(a.allowedDates)?e.date(a.allowedDates[0]):e.date()),f=b(a,"year",void 0,n=>{const o=n!=null?Number(n):e.getYear(r.value);return e.startOfYear(e.setYear(e.date(),o))},n=>e.getYear(n)),m=b(a,"month",void 0,n=>{const o=n!=null?Number(n):e.getMonth(r.value),l=e.setYear(e.startOfMonth(e.date()),e.getYear(f.value));return e.setMonth(l,o)},n=>e.getMonth(n)),s=g(()=>{const n=e.getWeekArray(m.value),o=n.flat(),l=6*7;if(o.length<l){const t=o[o.length-1];let d=[];for(let u=1;u<=l-o.length;u++)d.push(e.addDays(t,u)),u%7===0&&(n.push(d),d=[])}return n});function k(n,o){return n.filter(l=>a.weekdays.includes(e.toJsDate(l).getDay())).map((l,t)=>{const d=e.toISO(l),u=!e.isSameMonth(l,m.value),D=e.isSameDay(l,e.startOfMonth(m.value)),w=e.isSameDay(l,e.endOfMonth(m.value)),_=e.isSameDay(l,m.value);return{date:l,isoDate:d,formatted:e.format(l,"keyboardDate"),year:e.getYear(l),month:e.getMonth(l),isDisabled:S(l),isWeekStart:t%7===0,isWeekEnd:t%7===6,isToday:e.isSameDay(l,o),isAdjacent:u,isHidden:u&&!a.showAdjacentMonths,isStart:D,isSelected:i.value.some(P=>e.isSameDay(l,P)),isEnd:w,isSame:_,localized:e.format(l,"dayOfMonth")}})}const y=g(()=>{const n=e.startOfWeek(i.value),o=[];for(let d=0;d<=6;d++)o.push(e.addDays(n,d));const l=o,t=e.date();return k(l,t)}),c=g(()=>{const n=s.value.flat(),o=e.date();return k(n,o)}),h=g(()=>s.value.map(n=>n.length?z(e,n[0]):null));function S(n){if(a.disabled)return!0;const o=e.date(n);return a.min&&e.isAfter(e.date(a.min),o)||a.max&&e.isAfter(o,e.date(a.max))?!0:Array.isArray(a.allowedDates)&&a.allowedDates.length>0?!a.allowedDates.some(l=>e.isSameDay(e.date(l),o)):typeof a.allowedDates=="function"?!a.allowedDates(o):!1}return{displayValue:r,daysInMonth:c,daysInWeek:y,genDays:k,model:i,weeksInMonth:s,weekNumbers:h}}const q=M({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,...H()},"VDatePickerMonth"),ae=p()({name:"VDatePickerMonth",props:q(),emits:{"update:modelValue":a=>!0,"update:month":a=>!0,"update:year":a=>!0},setup(a,e){let{emit:i,slots:r}=e;const f=I(),{daysInMonth:m,model:s,weekNumbers:k}=J(a),y=A(),c=V(),h=V();a.multiple==="range"&&s.value.length>0&&(c.value=s.value[0],s.value.length>1&&(h.value=s.value[s.value.length-1]));const S=g(()=>{const t=["number","string"].includes(typeof a.multiple)?Number(a.multiple):1/0;return s.value.length>=t});function n(t){const d=y.startOfDay(t);if(!c.value)c.value=d,s.value=[c.value];else if(h.value)c.value=t,h.value=void 0,s.value=[c.value];else{if(y.isSameDay(d,c.value)){c.value=void 0,s.value=[];return}else y.isBefore(d,c.value)?(h.value=y.endOfDay(c.value),c.value=d):h.value=y.endOfDay(d);const u=y.getDiff(h.value,c.value,"days"),D=[c.value];for(let w=1;w<u;w++){const _=y.addDays(c.value,w);D.push(_)}D.push(h.value),s.value=D}}function o(t){const d=s.value.findIndex(u=>y.isSameDay(u,t));if(d===-1)s.value=[...s.value,t];else{const u=[...s.value];u.splice(d,1),s.value=u}}function l(t){a.multiple==="range"?n(t):a.multiple?o(t):s.value=[t]}return()=>v("div",{class:"v-date-picker-month"},[a.showWeek&&v("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!a.hideWeekdays&&v("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[O(" ")]),k.value.map(t=>v("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[t]))]),v("div",{ref:f,class:"v-date-picker-month__days"},[!a.hideWeekdays&&y.getWeekdays().map(t=>v("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[t])),m.value.map((t,d)=>{const u={props:{onClick:()=>l(t.date)},item:t,i:d};return S.value&&!t.isSelected&&(t.isDisabled=!0),v("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":t.isAdjacent,"v-date-picker-month__day--hide-adjacent":t.isHidden,"v-date-picker-month__day--selected":t.isSelected,"v-date-picker-month__day--week-end":t.isWeekEnd,"v-date-picker-month__day--week-start":t.isWeekStart}],"data-v-date":t.isDisabled?void 0:t.isoDate},[(a.showAdjacentMonths||!t.isAdjacent)&&v(T,{defaults:{VBtn:{class:"v-date-picker-month__day-btn",color:(t.isSelected||t.isToday)&&!t.isDisabled?a.color:void 0,disabled:t.isDisabled,icon:!0,ripple:!1,text:t.localized,variant:t.isDisabled?t.isToday?"outlined":"text":t.isToday&&!t.isSelected?"outlined":"flat",onClick:()=>l(t.date)}}},{default:()=>{var D;return[((D=r.day)==null?void 0:D.call(r,u))??v(Y,u.props,null)]}})])})])])}}),G=M({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...L()},"VLocaleProvider"),te=p()({name:"VLocaleProvider",props:G(),setup(a,e){let{slots:i}=e;const{rtlClasses:r}=N(a);return E(()=>{var f;return v("div",{class:["v-locale-provider",r.value,a.class],style:a.style},[(f=i.default)==null?void 0:f.call(i)])}),{}}});export{te as V,ae as a};
