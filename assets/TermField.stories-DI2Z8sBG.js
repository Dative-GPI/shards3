import{d as C,c as S,A as v,B as k,j as z,I as D,b,w as B,g as Q,D as f,P as d,F as X,J as T,H as _,G as ee}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as V}from"./lodash-BrWYvtk2.js";import{F as ae}from"./FSSelectField-ZzMijkL1.js";import{b as e}from"./dates-DFP4a3ym.js";import{u as te}from"./useTranslations-DJOHKWsD.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as re}from"./FSDateTimeRangeField-BnUiYn5B.js";import le from"./FSNumberField-JqYVbQs2.js";import{F as ne}from"./FSBaseField-BF3lF9xX.js";import{F as $}from"./FSTextField-B8oyUUoT.js";import{F as se}from"./FSForm-Bl5Uhcs5.js";import{F as P}from"./FSIcon-BwW5Hq8i.js";import{_ as g}from"./FSRow-CAJM3FZ0.js";import{u as ue}from"./useDateFormat-BwdEXDwr.js";import{u as ie}from"./useRules-B-2YsFdr.js";import{N as oe,D as de,T as me}from"./rules-BN9yWM89.js";import{F as fe}from"./FSButton-BDSx2V0J.js";import{F as ce}from"./FSCol-D35grUmj.js";import{u as ve}from"./useAppTimeZone-DjPZmopE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./useColors-SBQj5l4a.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./color-v9Utm2wX.js";import"./proxiedModel-gKZvE0id.js";import"./anchor-B7sx4vRv.js";import"./dimensions-BEVfeJxO.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./locale-CUGdfosF.js";import"./router-DTj21Dkp.js";import"./transition-CCJeTa-A.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./index-A-BnjIhl.js";import"./VIcon-_OtdNVUv.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./density-P84-FGcF.js";import"./elevation-C2OyWM5g.js";import"./rounded-BByw44D4.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./index-BSIzjytc.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./useSlots-16D6Zf08.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./resizeObserver-EZycJKNh.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./VInput-Dz3e_hzB.js";import"./form-BxXGwYee.js";import"./FSCheckbox-BCFluEqr.js";import"./FSSpan-BhEzkP-a.js";import"./VSelectionControl-DanrcpVZ.js";import"./VLabel-B8m3kRrJ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./FSDialogSubmit-CCgJn-0t.js";import"./FSDialog-Bmc4x6qR.js";import"./FSText-BhZd10FY.js";import"./FSCalendarTwin-DsfvCRSm.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./VLocaleProvider-B05T5O77.js";import"./VBtn-C1BhuyNn.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./FSClock-DrYA6bZH.js";import"./FSSlider-cN4o0jDd.js";import"./VSlider-CFrT1Yc4.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./VField-fH-IYcLo.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-BTEENFnf.js";const H=C({name:"FSSelectDateSetting",components:{FSSelectField:ae},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:l}=te();return{dateSettings:S(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:l("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:l("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:l("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:l("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:l("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:l("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:l("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:l("ui.date-setting.x-weeks-before","x Weeks before")}];let o=[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:l("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:l("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:l("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:l("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:l("ui.date-setting.this-year","This year")},{id:e.LastDay,label:l("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:l("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:l("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:l("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:l("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:l("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:l("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:l("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:l("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:l("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:l("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:l("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:l("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:l("ui.date-setting.expression","Expression")}];return a.lastPeriod&&o.push({id:e.LastPeriod,label:l("ui.date-setting.last-period","Last period")}),a.useNone&&o.unshift({id:e.None,label:l("ui.common.none","None")}),o})}}});function pe(a,l,i,o,h,w){const c=v("FSSelectField");return D(),k(c,z({class:"select.date-setting.label",items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=u=>a.$emit("update:modelValue",u))},a.$attrs),null,16,["items","modelValue"])}const be=L(H,[["render",pe]]);H.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const W=C({name:"FSTermField",components:{FSDateTimeRangeField:re,FSSelectDateSetting:be,FSNumberField:le,FSBaseField:ne,FSTextField:$,FSForm:se,FSIcon:P,FSRow:g},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update","update:startDate","update:endDate"],setup(a,{emit:l}){const{parseForPicker:i,epochToISO:o,todayToPicker:h,yesterdayToPicker:w}=ue(),{getMessages:c}=ie(),u=b(e.PastDays),n=b(1),t=b("now - 1d"),r=b("now"),m=b(!1),R=S(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),E=S(()=>{const s=[i(t.value),i(r.value)];return s.some(p=>p==null)?null:s}),N=S(()=>a.messages??c(a.startDate,a.rules).concat(c(a.endDate,a.rules))),U=s=>{Z(s)},Y=s=>{t.value=s,m.value&&(l("update:startDate",s),l("update",{startDate:t.value,endDate:a.endDate}))},Z=V.debounce(Y,1e3),I=s=>{G(s)},j=s=>{r.value=s,m.value&&(l("update:endDate",s),l("update",{startDate:a.startDate,endDate:r.value}))},G=V.debounce(j,1e3),K=s=>{switch(u.value=s,s){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${n.value}d`,r.value="alertend"):(t.value=`now - ${n.value}d`,r.value="now");break;case e.Pick:r.value=h(),t.value=w();break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},O=s=>{switch(n.value=s||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},J=s=>{s?(s&&s[0]!=null&&o(s[0])!==t.value&&(t.value=o(s[0]),m.value&&(l("update:startDate",t.value),l("update",{startDate:t.value,endDate:a.endDate}))),s&&s[1]!=null&&o(s[1])!==r.value&&(r.value=o(s[1]),m.value&&(l("update:endDate",r.value),l("update",{startDate:a.startDate,endDate:r.value})))):(r.value=h(),t.value=w(),m.value&&(l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})))},F=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,n.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),p=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(s!=null&&p!=null&&s[1]===p[1]&&s[2]===p[2])switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,n.value=1;return}}}u.value=e.Expression,n.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let s=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=1,s[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(s=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=parseInt(s[1]),s[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,n.value=1;return}}if(s=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=1,s[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(a.endDate&&i(a.endDate)!=null&&a.startDate&&i(a.startDate)!=null){u.value=e.Pick,n.value=1;return}u.value=e.Expression,n.value=1};return B(()=>a.startDate,()=>{a.startDate&&i(a.startDate)!=null?(u.value=e.Pick,a.startDate!==t.value&&(t.value=a.startDate)):a.endDate!==r.value&&F()}),B(()=>a.endDate,()=>{a.endDate&&i(a.endDate)!=null?(u.value=e.Pick,a.endDate!==r.value&&(r.value=a.endDate)):a.startDate!==t.value&&F()}),Q(()=>{F()}),{innerDateSetting:u,innerDateValue:n,innerStartDate:t,innerEndDate:r,actualValue:E,pastSettings:R,DateSetting:e,NumberRules:oe,DateRules:de,TextRules:me,messages:N,valid:m,innerDateSettingChange:K,innerDateValueChange:O,innerStartDateChange:U,innerEndDateChange:I,parseForPicker:i,onPickDates:J}}});function De(a,l,i,o,h,w){const c=v("FSSelectDateSetting"),u=v("FSNumberField"),n=v("FSDateTimeRangeField"),t=v("FSForm"),r=v("FSBaseField");return D(),k(r,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:f(()=>[d(t,{modelValue:a.valid,"onUpdate:modelValue":l[0]||(l[0]=m=>a.valid=m)},{default:f(()=>[d(g,{wrap:!1},{default:f(()=>[d(c,{minWidth:"180px",lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(D(),k(u,{key:0,minWidth:"60px",rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(D(),X(_,{key:1},[d(g,{align:"center-left",wrap:!1},{default:f(()=>[d(P,null,{default:f(()=>[T(" mdi-clock-start ")]),_:1}),d($,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),d(g,{align:"center-left",wrap:!1},{default:f(()=>[d(P,null,{default:f(()=>[T(" mdi-clock-end ")]),_:1}),d($,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(D(),k(n,{key:2,width:["350px","310px"],rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.actualValue,"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):ee("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const x=L(W,[["render",De]]);W.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update"},{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};const et={title:"Foundation/Shared/Input fields/TermField",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{setTimeZone:ve().setAppTimeZone,start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00",meta:{}}},render:(a,{argTypes:l})=>({components:{FSTermField:x,FSButton:fe,FSCol:ce,FSRow:g},props:Object.keys(l),setup(){return{...a}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSTermField
        label="Term"
        v-model:startDate="args.start1"
        v-model:endDate="args.end1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required default term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start2"
        v-model:endDate="args.end2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required before-after term, with description"
        description="Description for this field"
        variant="before-after"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start3"
        v-model:endDate="args.end3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Uneditable term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :editable="false"
        :required="true"
        v-model:startDate="args.start4"
        v-model:endDate="args.end4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Using global update"
        description="Description for this field"
        :startDate="args.meta?.startDate"
        :endDate="args.meta?.endDate"
        :required="true"
        @update="args.meta = { ...$event }"
      />
    </FSCol>`})};var q,A,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      start1: "now/h",
      end1: "now",
      start2: "now - 3d",
      end2: "now",
      start3: "alertstart - 1h",
      end3: "alertend + 1h",
      start4: "2023-01-01T00:00:00",
      end4: "2024-01-01T00:00:00",
      meta: {}
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTermField,
      FSButton,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSTermField
        label="Term"
        v-model:startDate="args.start1"
        v-model:endDate="args.end1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required default term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start2"
        v-model:endDate="args.end2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Required before-after term, with description"
        description="Description for this field"
        variant="before-after"
        :lastPeriod="true"
        :required="true"
        v-model:startDate="args.start3"
        v-model:endDate="args.end3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Uneditable term, with description"
        description="Description for this field"
        :lastPeriod="true"
        :editable="false"
        :required="true"
        v-model:startDate="args.start4"
        v-model:endDate="args.end4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTermField
        label="Using global update"
        description="Description for this field"
        :startDate="args.meta?.startDate"
        :endDate="args.meta?.endDate"
        :required="true"
        @update="args.meta = { ...$event }"
      />
    </FSCol>\`
  })
}`,...(M=(A=y.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const at=["Variations"];export{y as Variations,at as __namedExportsOrder,et as default};
