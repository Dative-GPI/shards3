import{g as w,j as x,s as b,w as I,A as u,O}from"./vue.esm-bundler-cd768bc3.js";import{u as A,g as j}from"./date-e2599fc4.js";import{u as V}from"./proxiedModel-80cf7d0e.js";import{p,w as B}from"./theme-33f5ac1a.js";import{M as C}from"./transition-2948fa2b.js";import{V as N}from"./VDefaultsProvider-ff78bc14.js";import{V as T}from"./VBtn-df7c9712.js";import{g as P,m as L,u as Y}from"./useRender-d216bc3f.js";import{p as R}from"./locale-d1b7e37d.js";const E=p({allowedDates:[Array,Function],disabled:Boolean,displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]},weeksInMonth:{type:String,default:"dynamic"}},"calendar");function z(a){const e=A(),y=V(a,"modelValue",[],n=>B(n)),c=w(()=>a.displayValue?e.date(a.displayValue):y.value.length>0?e.date(y.value[0]):a.min?e.date(a.min):Array.isArray(a.allowedDates)?e.date(a.allowedDates[0]):e.date()),S=V(a,"year",void 0,n=>{const r=n!=null?Number(n):e.getYear(c.value);return e.startOfYear(e.setYear(e.date(),r))},n=>e.getYear(n)),m=V(a,"month",void 0,n=>{const r=n!=null?Number(n):e.getMonth(c.value),l=e.setYear(e.startOfMonth(e.date()),e.getYear(S.value));return e.setMonth(l,r)},n=>e.getMonth(n)),o=w(()=>{const n=e.getWeekArray(m.value),r=n.flat(),l=6*7;if(a.weeksInMonth==="static"&&r.length<l){const v=r[r.length-1];let k=[];for(let s=1;s<=l-r.length;s++)k.push(e.addDays(v,s)),s%7===0&&(n.push(k),k=[])}return n});function _(n,r){return n.filter(l=>a.weekdays.includes(e.toJsDate(l).getDay())).map((l,v)=>{const k=e.toISO(l),s=!e.isSameMonth(l,m.value),t=e.isSameDay(l,e.startOfMonth(m.value)),f=e.isSameDay(l,e.endOfMonth(m.value)),g=e.isSameDay(l,m.value);return{date:l,isoDate:k,formatted:e.format(l,"keyboardDate"),year:e.getYear(l),month:e.getMonth(l),isDisabled:M(l),isWeekStart:v%7===0,isWeekEnd:v%7===6,isToday:e.isSameDay(l,r),isAdjacent:s,isHidden:s&&!a.showAdjacentMonths,isStart:t,isSelected:y.value.some(D=>e.isSameDay(l,D)),isEnd:f,isSame:g,localized:e.format(l,"dayOfMonth")}})}const i=w(()=>{const n=e.startOfWeek(c.value),r=[];for(let v=0;v<=6;v++)r.push(e.addDays(n,v));const l=e.date();return _(r,l)}),d=w(()=>{const n=o.value.flat(),r=e.date();return _(n,r)}),h=w(()=>o.value.map(n=>n.length?j(e,n[0]):null));function M(n){if(a.disabled)return!0;const r=e.date(n);return a.min&&e.isAfter(e.date(a.min),r)||a.max&&e.isAfter(r,e.date(a.max))?!0:Array.isArray(a.allowedDates)&&a.allowedDates.length>0?!a.allowedDates.some(l=>e.isSameDay(e.date(l),r)):typeof a.allowedDates=="function"?!a.allowedDates(r):!1}return{displayValue:c,daysInMonth:d,daysInWeek:i,genDays:_,model:y,weeksInMonth:o,weekNumbers:h}}const F=p({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,transition:{type:String,default:"picker-transition"},reverseTransition:{type:String,default:"picker-reverse-transition"},...E()},"VDatePickerMonth"),ee=P()({name:"VDatePickerMonth",props:F(),emits:{"update:modelValue":a=>!0,"update:month":a=>!0,"update:year":a=>!0},setup(a,e){let{emit:y,slots:c}=e;const S=x(),{daysInMonth:m,model:o,weekNumbers:_}=z(a),i=A(),d=b(),h=b(),M=b(!1),n=w(()=>M.value?a.reverseTransition:a.transition);a.multiple==="range"&&o.value.length>0&&(d.value=o.value[0],o.value.length>1&&(h.value=o.value[o.value.length-1]));const r=w(()=>{const s=["number","string"].includes(typeof a.multiple)?Number(a.multiple):1/0;return o.value.length>=s});I(m,(s,t)=>{t&&(M.value=i.isBefore(s[0].date,t[0].date))});function l(s){const t=i.startOfDay(s);if(o.value.length===0&&(d.value=void 0),!d.value)d.value=t,o.value=[d.value];else if(h.value)d.value=s,h.value=void 0,o.value=[d.value];else{if(i.isSameDay(t,d.value)){d.value=void 0,o.value=[];return}else i.isBefore(t,d.value)?(h.value=i.endOfDay(d.value),d.value=t):h.value=i.endOfDay(t);const f=i.getDiff(h.value,d.value,"days"),g=[d.value];for(let D=1;D<f;D++){const W=i.addDays(d.value,D);g.push(W)}g.push(h.value),o.value=g}}function v(s){const t=o.value.findIndex(f=>i.isSameDay(f,s));if(t===-1)o.value=[...o.value,s];else{const f=[...o.value];f.splice(t,1),o.value=f}}function k(s){a.multiple==="range"?l(s):a.multiple?v(s):o.value=[s]}return()=>u("div",{class:"v-date-picker-month"},[a.showWeek&&u("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!a.hideWeekdays&&u("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[O(" ")]),_.value.map(s=>u("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[s]))]),u(C,{name:n.value},{default:()=>{var s;return[u("div",{ref:S,key:(s=m.value[0].date)==null?void 0:s.toString(),class:"v-date-picker-month__days"},[!a.hideWeekdays&&i.getWeekdays().map(t=>u("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[t])),m.value.map((t,f)=>{const g={props:{onClick:()=>k(t.date)},item:t,i:f};return r.value&&!t.isSelected&&(t.isDisabled=!0),u("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":t.isAdjacent,"v-date-picker-month__day--hide-adjacent":t.isHidden,"v-date-picker-month__day--selected":t.isSelected,"v-date-picker-month__day--week-end":t.isWeekEnd,"v-date-picker-month__day--week-start":t.isWeekStart}],"data-v-date":t.isDisabled?void 0:t.isoDate},[(a.showAdjacentMonths||!t.isAdjacent)&&u(N,{defaults:{VBtn:{class:"v-date-picker-month__day-btn",color:(t.isSelected||t.isToday)&&!t.isDisabled?a.color:void 0,disabled:t.isDisabled,icon:!0,ripple:!1,text:t.localized,variant:t.isDisabled?t.isToday?"outlined":"text":t.isToday&&!t.isSelected?"outlined":"flat",onClick:()=>k(t.date)}}},{default:()=>{var D;return[((D=c.day)==null?void 0:D.call(c,g))??u(T,g.props,null)]}})])})])]}})])}});const H=p({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...L()},"VLocaleProvider"),ae=P()({name:"VLocaleProvider",props:H(),setup(a,e){let{slots:y}=e;const{rtlClasses:c}=R(a);return Y(()=>{var S;return u("div",{class:["v-locale-provider",c.value,a.class],style:a.style},[(S=y.default)==null?void 0:S.call(y)])}),{}}});export{ae as V,ee as a};
