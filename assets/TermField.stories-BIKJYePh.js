import{d as T,c as y,y as p,z as D,A as S,m as K,a as b,w as Q,C as f,N as o,G as X,I as Z,D as P,H as _}from"./vue.esm-bundler-D3ngFwGY.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as ee}from"./FSSelectField-BKxSDF0S.js";import{b as e}from"./dates-DFP4a3ym.js";import{u as ae}from"./useTranslations-Dmqoe3Kp.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSDateTimeRangeField-Bz_Du4ir.js";import re from"./FSNumberField-B0-7PTCq.js";import{F as le}from"./FSBaseField-cmky_v29.js";import{F}from"./FSTextField-knlUmIuH.js";import{F as ne}from"./FSForm-DZIkkCmz.js";import{F as $}from"./FSIcon-C0akNC9K.js";import{_ as k}from"./FSRow-CYD73_tT.js";import{u as se}from"./useDateFormat-C9QY5oFQ.js";import{u as ue}from"./useRules-BmSxRe3B.js";import{T as ie,D as oe,N as de}from"./rules-bUpokFzK.js";import{F as me}from"./FSCol-CVj0zcU5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D4nM6Ihv.js";import"./proxiedModel-BmbZrdih.js";import"./anchor-BMg_Hu1U.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./locale-R8GaLlvb.js";import"./router-BPv_tYld.js";import"./transition-DtcXiLpW.js";import"./VDefaultsProvider-EJiha1S2.js";import"./index-D1hHR51g.js";import"./VIcon-DBlUULm8.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./VInput-11LmaO3P.js";import"./form-thVqu4eJ.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./VLabel-D_hiLcnP.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./FSDialogSubmit-BZQUsIWu.js";import"./FSDialog-DaqgkkWF.js";import"./FSText-CcQBLJU9.js";import"./FSCalendarTwin-B9G2iaR7.js";import"./useAppLanguageCode-CbHleqYG.js";import"./VLocaleProvider-Cqoo46MJ.js";import"./VBtn-DIpB4JrY.js";import"./loader-BvdvxiyE.js";import"./FSClock-Bi5hJniR.js";import"./FSSlider-BKZ-cHFA.js";import"./VSlider-CilBQKZ9.js";import"./useAppTimeZone-Cp_499X8.js";import"./VField-Ddzu1ph-.js";import"./startOfWeek-uXTpkxA4.js";import"./datesTools-jb_azIFs.js";import"./startOfDay-C4pDH4rb.js";import"./time-u-ATiSbz.js";const L=T({name:"FSSelectDateSetting",components:{FSSelectField:ee},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:l}=ae();return{dateSettings:y(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:l("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:l("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:l("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:l("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:l("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:l("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:l("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:l("ui.date-setting.x-weeks-before","x Weeks before")}];let i=[{id:e.Pick,label:l("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:l("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:l("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:l("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:l("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:l("ui.date-setting.this-year","This year")},{id:e.LastDay,label:l("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:l("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:l("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:l("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:l("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:l("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:l("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:l("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:l("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:l("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:l("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:l("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:l("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:l("ui.date-setting.expression","Expression")}];return a.lastPeriod&&i.push({id:e.LastPeriod,label:l("ui.date-setting.last-period","Last period")}),a.useNone&&i.unshift({id:e.None,label:l("ui.date-setting.none","None")}),i})}}});function fe(a,l,d,i,g,h){const v=p("FSSelectField");return D(),S(v,K({class:"select.date-setting.label",items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=u=>a.$emit("update:modelValue",u))},a.$attrs),null,16,["items","modelValue"])}const ve=C(L,[["render",fe]]);L.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const A=T({name:"FSTermField",components:{FSDateTimeRangeField:te,FSSelectDateSetting:ve,FSNumberField:re,FSBaseField:le,FSTextField:F,FSForm:ne,FSIcon:$,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update","update:startDate","update:endDate"],setup(a,{emit:l}){const{parseForPicker:d,epochToISO:i,todayToPicker:g,yesterdayToPicker:h}=se(),{getMessages:v}=ue(),u=b(e.PastDays),n=b(1),t=b("now - 1d"),r=b("now"),m=b(!1),W=y(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),x=y(()=>{const s=[d(t.value),d(r.value)];return s.some(c=>c==null)?null:s}),N=y(()=>a.messages??v(a.startDate,a.rules).concat(v(a.endDate,a.rules))),E=s=>{U(s)},R=s=>{t.value=s,m.value&&(l("update:startDate",s),l("update",{startDate:t.value,endDate:a.endDate}))},U=V.debounce(R,1e3),Y=s=>{O(s)},I=s=>{r.value=s,m.value&&(l("update:endDate",s),l("update",{startDate:a.startDate,endDate:r.value}))},O=V.debounce(I,1e3),j=s=>{switch(u.value=s,s){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${n.value}d`,r.value="alertend"):(t.value=`now - ${n.value}d`,r.value="now");break;case e.Pick:r.value=g(),t.value=h();break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},z=s=>{switch(n.value=s||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${n.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${n.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${n.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${n.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${n.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${n.value}m`,r.value=`alertend + ${n.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${n.value}h`,r.value=`alertend + ${n.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${n.value}d`,r.value=`alertend + ${n.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${n.value}w`,r.value=`alertend + ${n.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${n.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${n.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${n.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${n.value}w`,r.value="alertend";break}l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})},G=s=>{s?(s&&s[0]!=null&&i(s[0])!==t.value&&(t.value=i(s[0]),m.value&&(l("update:startDate",t.value),l("update",{startDate:t.value,endDate:a.endDate}))),s&&s[1]!=null&&i(s[1])!==r.value&&(r.value=i(s[1]),m.value&&(l("update:endDate",r.value),l("update",{startDate:a.startDate,endDate:r.value})))):(r.value=g(),t.value=h(),m.value&&(l("update:startDate",t.value),l("update:endDate",r.value),l("update",{startDate:t.value,endDate:r.value})))},J=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,n.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),c=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(s!=null&&c!=null&&s[1]===c[1]&&s[2]===c[2])switch(n.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,n.value=1;return}}}u.value=e.Expression,n.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let s=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(n.value=1,s[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(s=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=parseInt(s[1]),s[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,n.value=1;return}}if(s=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(n.value=1,s[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(a.endDate&&d(a.endDate)!=null&&a.startDate&&d(a.startDate)!=null){u.value=e.Pick,n.value=1;return}u.value=e.Expression,n.value=1};return Q([()=>a.startDate,()=>a.endDate],()=>{(t.value!==a.startDate||r.value!==a.endDate)&&J()},{immediate:!0}),{innerDateSetting:u,innerDateValue:n,innerStartDate:t,innerEndDate:r,actualValue:x,pastSettings:W,DateSetting:e,NumberRules:de,DateRules:oe,TextRules:ie,messages:N,valid:m,innerDateSettingChange:j,innerDateValueChange:z,innerStartDateChange:E,innerEndDateChange:Y,parseForPicker:d,onPickDates:G}}});function pe(a,l,d,i,g,h){const v=p("FSSelectDateSetting"),u=p("FSNumberField"),n=p("FSDateTimeRangeField"),t=p("FSForm"),r=p("FSBaseField");return D(),S(r,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:f(()=>[o(t,{modelValue:a.valid,"onUpdate:modelValue":l[0]||(l[0]=m=>a.valid=m)},{default:f(()=>[o(k,{wrap:!1},{default:f(()=>[o(v,{minWidth:"180px",lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(D(),S(u,{key:0,minWidth:"60px",rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(D(),X(Z,{key:1},[o(k,{align:"center-left",wrap:!1},{default:f(()=>[o($,null,{default:f(()=>[P(" mdi-clock-start ")]),_:1}),o(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),o(k,{align:"center-left",wrap:!1},{default:f(()=>[o($,null,{default:f(()=>[P(" mdi-clock-end ")]),_:1}),o(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(D(),S(n,{key:2,width:["350px","310px"],rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,clearable:!1,modelValue:a.actualValue,"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):_("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const H=C(A,[["render",pe]]);A.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update"},{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};const Xa={title:"Foundation/Shared/Input fields/TermField",component:H,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},w={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00",meta:{}}},render:(a,{argTypes:l})=>({components:{FSCol:me,FSTermField:H},props:Object.keys(l),setup(){return{...a}},template:`
    <FSCol>
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
    </FSCol>`})};var B,q,M;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    args: {
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
      FSCol,
      FSTermField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
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
}`,...(M=(q=w.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const Za=["Variations"];export{w as Variations,Za as __namedExportsOrder,Xa as default};
