import{d as V,c as g,y as m,z as p,A as y,m as z,b as D,w as O,B as v,L as i,C as j,E as F,F as G,D as J}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as K}from"./FSSelectField-DGC4MS1S.js";import{a as e}from"./dates-Ce7n-5qd.js";import{u as Q}from"./useTranslations-CdSqQFV3.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as X}from"./FSDateTimeRangeField-BrNUJf8u.js";import Z from"./FSNumberField-CSpcVcL5.js";import{F as _}from"./FSBaseField-BkzmckaL.js";import{F as S}from"./FSTextField-DOjRjaWh.js";import{F as ee}from"./FSForm-CVvlYXog.js";import{F as $}from"./FSIcon-DwJNOKvG.js";import{F as k}from"./FSRow-CA1vgNXx.js";import{u as ae}from"./useDateFormat-CNSspUCn.js";import{u as te}from"./useRules-B3HKjmia.js";import{N as le,D as re,T as se}from"./rules-Ccy4_7QG.js";const M=V({name:"FSSelectDateSetting",components:{FSSelectField:K},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:s}=Q();return{dateSettings:g(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:s("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:s("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:s("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:s("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:s("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:s("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:s("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:s("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:s("ui.date-setting.x-weeks-before","x Weeks before")}];let d=[{id:e.Pick,label:s("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:s("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:s("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:s("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:s("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:s("ui.date-setting.this-year","This year")},{id:e.LastDay,label:s("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:s("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:s("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:s("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:s("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:s("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:s("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:s("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:s("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:s("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:s("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:s("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:s("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:s("ui.date-setting.expression","Expression")}];return a.lastPeriod&&d.push({id:e.LastPeriod,label:s("ui.date-setting.last-period","Last period")}),a.useNone&&d.unshift({id:e.None,label:s("ui.date-setting.none","None")}),d})}}});function ne(a,s,o,d,w,h){const c=m("FSSelectField");return p(),y(c,z({class:"fs-select-date-setting",items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=u=>a.$emit("update:modelValue",u))},a.$attrs),null,16,["items","modelValue"])}const ue=B(M,[["render",ne]]);M.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const q=V({name:"FSTermField",components:{FSDateTimeRangeField:X,FSSelectDateSetting:ue,FSNumberField:Z,FSBaseField:_,FSTextField:S,FSForm:ee,FSIcon:$,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:startDate","update:endDate"],setup(a,{emit:s}){const{parseForPicker:o,epochToISO:d,todayToPicker:w,yesterdayToPicker:h}=ae(),{getMessages:c}=te(),u=D(e.PastDays),r=D(1),t=D("now - 1d"),l=D("now"),f=D(!1),L=g(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),A=g(()=>{const n=[o(t.value),o(l.value)];return n.some(b=>b==null)?null:n}),C=g(()=>a.messages??c(a.startDate,a.rules).concat(c(a.endDate,a.rules))),H=n=>{N(n)},W=n=>{t.value=n,f.value&&s("update:startDate",n)},N=P.debounce(W,1e3),T=n=>{x(n)},E=n=>{l.value=n,f.value&&s("update:endDate",n)},x=P.debounce(E,1e3),R=n=>{switch(u.value=n,n){case e.None:return;case e.PastHours:t.value=`now - ${r.value}h`,l.value="now";break;case e.PastDays:t.value=`now - ${r.value}d`,l.value="now";break;case e.PastWeeks:t.value=`now - ${r.value}w`,l.value="now";break;case e.PastMonths:t.value=`now - ${r.value}M`,l.value="now";break;case e.PastYears:t.value=`now - ${r.value}y`,l.value="now";break;case e.CurrentHour:t.value="now/h",l.value="now";break;case e.CurrentDay:t.value="now/d",l.value="now";break;case e.CurrentWeek:t.value="now/w",l.value="now";break;case e.CurrentMonth:t.value="now/M",l.value="now";break;case e.CurrentYear:t.value="now/y",l.value="now";break;case e.LastDay:t.value="now - 1d/d",l.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",l.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",l.value="now/M";break;case e.LastYear:t.value="now - 1y/y",l.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",l.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",l.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",l.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",l.value="now";break;case e.LastPeriod:t.value="from - to + from",l.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${r.value}m`,l.value=`alertend + ${r.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${r.value}h`,l.value=`alertend + ${r.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${r.value}d`,l.value=`alertend + ${r.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${r.value}w`,l.value=`alertend + ${r.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${r.value}m`,l.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${r.value}h`,l.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${r.value}d`,l.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${r.value}w`,l.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${r.value}d`,l.value="alertend"):(t.value=`now - ${r.value}d`,l.value="now");break;case e.Pick:l.value=w(),t.value=h();break}s("update:startDate",t.value),s("update:endDate",l.value)},Y=n=>{switch(r.value=n||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${r.value}h`,l.value="now";break;case e.PastDays:t.value=`now - ${r.value}d`,l.value="now";break;case e.PastWeeks:t.value=`now - ${r.value}w`,l.value="now";break;case e.PastMonths:t.value=`now - ${r.value}M`,l.value="now";break;case e.PastYears:t.value=`now - ${r.value}y`,l.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${r.value}m`,l.value=`alertend + ${r.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${r.value}h`,l.value=`alertend + ${r.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${r.value}d`,l.value=`alertend + ${r.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${r.value}w`,l.value=`alertend + ${r.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${r.value}m`,l.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${r.value}h`,l.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${r.value}d`,l.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${r.value}w`,l.value="alertend";break}s("update:startDate",t.value),s("update:endDate",l.value)},U=n=>{n?(n&&n[0]!=null&&d(n[0])!==t.value&&(t.value=d(n[0]),f.value&&s("update:startDate",t.value)),n&&n[1]!=null&&d(n[1])!==l.value&&(l.value=d(n[1]),f.value&&s("update:endDate",l.value))):(l.value=w(),t.value=h(),f.value&&(s("update:startDate",t.value),s("update:endDate",l.value)))},I=()=>{if(t.value=a.startDate,l.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let n=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(n!=null)switch(r.value=parseInt(n[1]),n[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,r.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let n=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),b=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(n!=null&&b!=null&&n[1]===b[1]&&n[2]===b[2])switch(r.value=parseInt(n[1]),n[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,r.value=1;return}}}u.value=e.Expression,r.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let n=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(n!=null)switch(r.value=1,n[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(n=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),n!=null)switch(r.value=parseInt(n[1]),n[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,r.value=1;return}}if(n=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),n!=null)switch(r.value=1,n[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(a.endDate&&o(a.endDate)!=null&&a.startDate&&o(a.startDate)!=null){u.value=e.Pick,r.value=1;return}u.value=e.Expression,r.value=1};return O([()=>a.startDate,()=>a.endDate],()=>{(t.value!==a.startDate||l.value!==a.endDate)&&I()},{immediate:!0}),{innerDateSetting:u,innerDateValue:r,innerStartDate:t,innerEndDate:l,actualValue:A,pastSettings:L,DateSetting:e,NumberRules:le,DateRules:re,TextRules:se,messages:C,valid:f,innerDateSettingChange:R,innerDateValueChange:Y,innerStartDateChange:H,innerEndDateChange:T,parseForPicker:o,onPickDates:U}}});function de(a,s,o,d,w,h){const c=m("FSSelectDateSetting"),u=m("FSNumberField"),r=m("FSDateTimeRangeField"),t=m("FSForm"),l=m("FSBaseField");return p(),y(l,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:v(()=>[i(t,{modelValue:a.valid,"onUpdate:modelValue":s[0]||(s[0]=f=>a.valid=f)},{default:v(()=>[i(k,{wrap:!1},{default:v(()=>[i(c,{minWidth:"180px",lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(p(),y(u,{key:0,minWidth:"60px",rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(p(),j(G,{key:1},[i(k,{align:"center-left",wrap:!1},{default:v(()=>[i($,null,{default:v(()=>[F(" mdi-clock-start ")]),_:1}),i(S,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),i(k,{align:"center-left",wrap:!1},{default:v(()=>[i($,null,{default:v(()=>[F(" mdi-clock-end ")]),_:1}),i(S,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(p(),y(r,{key:2,rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,modelValue:a.actualValue,"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):J("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const Fe=B(q,[["render",de]]);q.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};export{Fe as F};
