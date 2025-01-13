import{u as G}from"./useAppTimeZone-DjPZmopE.js";import{u as C}from"./useDateFormat-CNMspjvu.js";import{d as W,c as P,A as y,B as V,j as J,I as S,b as p,w as L,g as X,D as g,P as D,F as Z,J as A,H as z,G as K}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as N}from"./lodash-BrWYvtk2.js";import{F as Q}from"./FSSelectField-CTk_sCUj.js";import{b as e}from"./dates-DFP4a3ym.js";import{u as _}from"./useTranslations-DJOHKWsD.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSDateTimeRangeField-Dd8KcF0T.js";import ae from"./FSNumberField-JqYVbQs2.js";import{F as te}from"./FSBaseField-BF3lF9xX.js";import{F as q}from"./FSTextField-B8oyUUoT.js";import{F as re}from"./FSForm-Bl5Uhcs5.js";import{F as H}from"./FSIcon-BwW5Hq8i.js";import{_ as M}from"./FSRow-CAJM3FZ0.js";import{u as le}from"./useRules-B-2YsFdr.js";import{N as ne,D as se,T as ue}from"./rules-BSsqb4-6.js";const Me=()=>{const{getOffsetDifference:a}=G(),{parseForPicker:l}=C(),c=/(?:(?:([-\+])(\d*))?(\w+))?(?:\/(\w))?/g,v="now",h=(t,r={})=>{const o=l(t);if(o)return o;const d={...r,[v]:new Date().getTime()};return w(t,d)},w=(t,r)=>{t=t.replace(/\s/g,"");const o=t.matchAll(c);if(!o)return console.error("Invalid expression"),NaN;let d=0;return o.forEach(f=>{const i=f[1],m=f[2],$=f[3],F=f[4];$&&(d=b(d,i,m,$,r)),F&&(d=n(d,F))}),d},b=(t,r,o,d,f)=>{let i=r==="-"?-1:1;switch(i*=Number.isNaN(parseInt(o))?1:parseInt(o),d){case"s":return t+i*1e3;case"m":return t+i*60*1e3;case"h":return t+i*60*60*1e3;case"d":return new Date(t).setDate(new Date(t).getDate()+i);case"w":return new Date(t).setDate(new Date(t).getDate()+i*7);case"M":return new Date(t).setMonth(new Date(t).getMonth()+i);case"y":return new Date(t).setFullYear(new Date(t).getFullYear()+i);default:if(f[d]){const m=u(d,f);return t+i*m}else return console.error(`Invalid unit expression, unit ${d} is not defined in the variables`),t}},u=(t,r)=>{if(r[t]){const o=parseInt(r[t].toString());if(typeof r[t]=="number")return o;if(isNaN(o)){const d=r[t].toString(),f=w(d,r);return isNaN(f)?(console.error(`Invalid unit expression, unit ${t} is not defined in the variables`),0):f}else return o}else return console.error(`Invalid unit expression, unit ${t} is not defined in the variables`),0},n=(t,r)=>{switch(t+=a(t),r){case"h":return new Date(t).setMinutes(0,0,0)-a(t);case"d":return new Date(t).setHours(0,0,0,0)-a(t);case"w":const o=new Date(t),d=o.getDay(),f=o.getDate()-d+(d===0?-6:1);return new Date(o.setDate(f)).setHours(0,0,0,0)-a(t);case"M":const i=new Date(t);return new Date(i.setMonth(i.getMonth(),1)).setHours(0,0,0,0)-a(t);case"y":const m=new Date(t);return new Date(m.setMonth(0,1)).setHours(0,0,0,0)-a(t)}return t};return{convert:h}},E=W({name:"FSSelectDateSetting",components:{FSSelectField:Q},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:l}=_();return{dateSettings:P(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:l("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:l("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:l("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:l("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:l("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:l("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:l("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:l("ui.date-setting.x-weeks-before","x Weeks before")}];let v=[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:l("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:l("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:l("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:l("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:l("ui.date-setting.this-year","This year")},{id:e.LastDay,label:l("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:l("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:l("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:l("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:l("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:l("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:l("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:l("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:l("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:l("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:l("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:l("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:l("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:l("ui.date-setting.expression","Expression")}];return a.lastPeriod&&v.push({id:e.LastPeriod,label:l("ui.date-setting.last-period","Last period")}),a.useNone&&v.unshift({id:e.None,label:l("ui.common.none","None")}),v})}}});function oe(a,l,c,v,h,w){const b=y("FSSelectField");return S(),V(b,J({class:"select.date-setting.label",items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=u=>a.$emit("update:modelValue",u))},a.$attrs),null,16,["items","modelValue"])}const de=T(E,[["render",oe]]);E.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const x=W({name:"FSTermField",components:{FSDateTimeRangeField:ee,FSSelectDateSetting:de,FSNumberField:ae,FSBaseField:te,FSTextField:q,FSForm:re,FSIcon:H,FSRow:M},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update","update:startDate","update:endDate"],setup(a,{emit:l}){const{parseForPicker:c,epochToISO:v,todayToPicker:h,yesterdayToPicker:w}=C(),{getMessages:b}=le(),u=p(e.PastDays),n=p(1),t=p("now - 1d"),r=p("now"),o=p(!1),d=P(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),f=P(()=>{const s=[c(t.value),c(r.value)];return s.some(k=>k==null)?null:s}),i=P(()=>a.messages??b(a.startDate,a.rules).concat(b(a.endDate,a.rules))),m=s=>{F(s)},$=s=>{t.value=s,o.value&&(l("update:startDate",s),l("update",{startDate:t.value,endDate:a.endDate}))},F=N.debounce($,1e3),R=s=>{I(s)},Y=s=>{r.value=s,o.value&&(l("update:endDate",s),l("update",{startDate:a.startDate,endDate:r.value}))},I=N.debounce(Y,1e3),U=s=>{switch(u.value=s,s){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${n.value}d`,r.value="alertend"):(t.value=`now - ${n.value}d`,r.value="now");break;case e.Pick:r.value=h(),t.value=w();break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},O=s=>{switch(n.value=s||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},j=s=>{s?(s&&s[0]!=null&&v(s[0])!==t.value&&(t.value=v(s[0]),o.value&&(l("update:startDate",t.value),l("update",{startDate:t.value,endDate:a.endDate}))),s&&s[1]!=null&&v(s[1])!==r.value&&(r.value=v(s[1]),o.value&&(l("update:endDate",r.value),l("update",{startDate:a.startDate,endDate:r.value})))):(r.value=h(),t.value=w(),o.value&&(l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})))},B=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,n.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),k=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(s!=null&&k!=null&&s[1]===k[1]&&s[2]===k[2])switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,n.value=1;return}}}u.value=e.Expression,n.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let s=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=1,s[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(s=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=parseInt(s[1]),s[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,n.value=1;return}}if(s=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=1,s[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(a.endDate&&c(a.endDate)!=null&&a.startDate&&c(a.startDate)!=null){u.value=e.Pick,n.value=1;return}u.value=e.Expression,n.value=1};return L(()=>a.startDate,()=>{a.startDate&&c(a.startDate)!=null?(u.value=e.Pick,a.startDate!==t.value&&(t.value=a.startDate)):a.endDate!==r.value&&B()}),L(()=>a.endDate,()=>{a.endDate&&c(a.endDate)!=null?(u.value=e.Pick,a.endDate!==r.value&&(r.value=a.endDate)):a.startDate!==t.value&&B()}),X(()=>{B()}),{innerDateSetting:u,innerDateValue:n,innerStartDate:t,innerEndDate:r,actualValue:f,pastSettings:d,DateSetting:e,NumberRules:ne,DateRules:se,TextRules:ue,messages:i,valid:o,innerDateSettingChange:U,innerDateValueChange:O,innerStartDateChange:m,innerEndDateChange:R,parseForPicker:c,onPickDates:j}}});function ie(a,l,c,v,h,w){const b=y("FSSelectDateSetting"),u=y("FSNumberField"),n=y("FSDateTimeRangeField"),t=y("FSForm"),r=y("FSBaseField");return S(),V(r,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:g(()=>[D(t,{modelValue:a.valid,"onUpdate:modelValue":l[0]||(l[0]=o=>a.valid=o)},{default:g(()=>[D(M,{wrap:!1},{default:g(()=>[D(b,{minWidth:"180px",lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(S(),V(u,{key:0,minWidth:"60px",rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(S(),Z(z,{key:1},[D(M,{align:"center-left",wrap:!1},{default:g(()=>[D(H,null,{default:g(()=>[A(" mdi-clock-start ")]),_:1}),D(q,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),D(M,{align:"center-left",wrap:!1},{default:g(()=>[D(H,null,{default:g(()=>[A(" mdi-clock-end ")]),_:1}),D(q,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(S(),V(n,{key:2,width:["350px","310px"],rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.actualValue,"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):K("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const Be=T(x,[["render",ie]]);x.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update"},{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};export{Be as F,Me as u};
