import{d as T,c as y,y as c,z as g,A as S,m as J,b,w as K,B as f,L as i,C as Q,E as P,F as X,D as Z}from"./vue.esm-bundler--l9E1zCM.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as ee}from"./FSSelectField-BfNjDTB6.js";import{a as e}from"./dateEnums-Ce7n-5qd.js";import{u as ae}from"./useTranslations-ByKtt_-5.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSDateTimeRangeField-CT50Mh04.js";import re from"./FSNumberField-uzdHFBRM.js";import{F as le}from"./FSBaseField-vXRxqDM_.js";import{F}from"./FSTextField-CORSOnFI.js";import{F as ne}from"./FSForm-RyJxgkZj.js";import{_ as $}from"./FSIcon-BHbXv1sW.js";import{_ as k}from"./FSRow-DW_Nd3uI.js";import{u as se}from"./useDateFormat-BeXuLiFb.js";import{u as ue}from"./useRules-eaGGgTH2.js";import{N as oe,D as ie,T as de}from"./rules-CL86x7CD.js";import{_ as me}from"./FSCol-BA_LQqMv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSDialogMenu-B4qN8dQk.js";import"./FSCard-DXUcd4gZ.js";import"./useColors-CcOmb8TW.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./css-CqyMbT8T.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DkN3uAGq.js";import"./proxiedModel-DBJRU-Dx.js";import"./anchor-CJDpEDtq.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./locale-DRqPrS0N.js";import"./router-B0OmHOdA.js";import"./transition-CYrBIr8o.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./FSSlideGroup-DeeIs7LB.js";import"./uuid-DTaye2KM.js";import"./FSButton-BPKnQ3W2.js";import"./FSClickable-BjrLGEPN.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./index-U_F843Id.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BsXD3GQs.js";import"./FSWrapGroup-BLHTvc8Y.js";import"./VInput-exXSDqX0.js";import"./density-BES7uE0q.js";import"./form-26vhu4DQ.js";import"./FSCheckbox-O0BYl1sh.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./VLabel-CtWliwLG.js";import"./FSFadeOut-D6eFi9gL.js";import"./VImg-r61Tw9eL.js";import"./elevation-Cf1uc8UZ.js";import"./rounded-B2xBfeOT.js";import"./index-CDY7nOpr.js";import"./FSRadio-CPRKwXqX.js";import"./VList-CMkQDUHu.js";import"./ssrBoot-De1byr4N.js";import"./VSpacer-CY3ZXRlU.js";import"./border-CWknNQjA.js";import"./VSelect-DuVohGsR.js";import"./VMenu-DGJWui2w.js";import"./FSDialogSubmit-Espdo-Vv.js";import"./FSDialog-C9AVVZuX.js";import"./FSText-DSeZgb6R.js";import"./FSCalendarTwin-DbI_3cgO.js";import"./useAppLanguageCode-0juUkaeD.js";import"./VLocaleProvider-D_HuLimP.js";import"./VBtn-Drw7FOOP.js";import"./loader-BeDPJNvc.js";import"./FSClock-BpfKiPhp.js";import"./FSSlider-DlpS6byd.js";import"./VSlider-D85pQrEK.js";import"./useAppTimeZone-D5nI5Dd_.js";import"./VField-4heSQh6E.js";import"./time-BdfI25e1.js";const L=T({name:"FSSelectDateSetting",components:{FSSelectField:ee},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:n}=ae();return{dateSettings:y(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:n("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:n("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:n("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:n("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:n("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:n("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:n("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:n("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:n("ui.date-setting.x-weeks-before","x Weeks before")}];let o=[{id:e.Pick,label:n("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:n("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:n("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:n("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:n("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:n("ui.date-setting.this-year","This year")},{id:e.LastDay,label:n("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:n("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:n("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:n("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:n("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:n("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:n("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:n("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:n("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:n("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:n("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:n("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:n("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:n("ui.date-setting.expression","Expression")}];return a.lastPeriod&&o.push({id:e.LastPeriod,label:n("ui.date-setting.last-period","Last period")}),a.useNone&&o.unshift({id:e.None,label:n("ui.date-setting.none","None")}),o})}}});function fe(a,n,d,o,D,w){const v=c("FSSelectField");return g(),S(v,J({class:"fs-select-date-setting",items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=u=>a.$emit("update:modelValue",u))},a.$attrs),null,16,["items","modelValue"])}const ve=C(L,[["render",fe]]);L.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const A=T({name:"FSTermField",components:{FSDateTimeRangeField:te,FSSelectDateSetting:ve,FSNumberField:re,FSBaseField:le,FSTextField:F,FSForm:ne,FSIcon:$,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:startDate","update:endDate"],setup(a,{emit:n}){const{parseForPicker:d,epochToISO:o,todayToPicker:D,yesterdayToPicker:w}=se(),{getMessages:v}=ue(),u=b(e.PastDays),l=b(1),t=b("now - 1d"),r=b("now"),m=b(!1),W=y(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),E=y(()=>{const s=[d(t.value),d(r.value)];return s.some(p=>p==null)?null:s}),N=y(()=>a.messages??v(a.startDate,a.rules).concat(v(a.endDate,a.rules))),x=s=>{U(s)},R=s=>{t.value=s,m.value&&n("update:startDate",s)},U=V.debounce(R,1e3),Y=s=>{O(s)},I=s=>{r.value=s,m.value&&n("update:endDate",s)},O=V.debounce(I,1e3),j=s=>{switch(u.value=s,s){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${l.value}d`,r.value="alertend"):(t.value=`now - ${l.value}d`,r.value="now");break;case e.Pick:r.value=D(),t.value=w();break}n("update:startDate",t.value),n("update:endDate",r.value)},_=s=>{switch(l.value=s||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break}n("update:startDate",t.value),n("update:endDate",r.value)},z=s=>{s?(console.log(s[0],s[1]),s&&s[0]!=null&&o(s[0])!==t.value&&(t.value=o(s[0]),m.value&&n("update:startDate",t.value)),s&&s[1]!=null&&o(s[1])!==r.value&&(r.value=o(s[1]),m.value&&n("update:endDate",r.value))):(r.value=D(),t.value=w(),m.value&&(n("update:startDate",t.value),n("update:endDate",r.value)))},G=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(l.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,l.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),p=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(s!=null&&p!=null&&s[1]===p[1]&&s[2]===p[2])switch(l.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,l.value=1;return}}}u.value=e.Expression,l.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let s=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(l.value=1,s[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(s=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(l.value=parseInt(s[1]),s[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,l.value=1;return}}if(s=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(l.value=1,s[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(a.endDate&&d(a.endDate)!=null&&a.startDate&&d(a.startDate)!=null){u.value=e.Pick,l.value=1;return}u.value=e.Expression,l.value=1};return K([()=>a.startDate,()=>a.endDate],()=>{(t.value!==a.startDate||r.value!==a.endDate)&&G()},{immediate:!0}),{innerDateSetting:u,innerDateValue:l,innerStartDate:t,innerEndDate:r,actualValue:E,pastSettings:W,DateSetting:e,NumberRules:oe,DateRules:ie,TextRules:de,messages:N,valid:m,innerDateSettingChange:j,innerDateValueChange:_,innerStartDateChange:x,innerEndDateChange:Y,parseForPicker:d,onPickDates:z}}});function ce(a,n,d,o,D,w){const v=c("FSSelectDateSetting"),u=c("FSNumberField"),l=c("FSDateTimeRangeField"),t=c("FSForm"),r=c("FSBaseField");return g(),S(r,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:f(()=>[i(t,{modelValue:a.valid,"onUpdate:modelValue":n[0]||(n[0]=m=>a.valid=m)},{default:f(()=>[i(k,{wrap:!1},{default:f(()=>[i(v,{lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(g(),S(u,{key:0,rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(g(),Q(X,{key:1},[i(k,{align:"center-left",wrap:!1},{default:f(()=>[i($,null,{default:f(()=>[P(" mdi-clock-start ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),i(k,{align:"center-left",wrap:!1},{default:f(()=>[i($,null,{default:f(()=>[P(" mdi-clock-end ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(g(),S(l,{key:2,rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,modelValue:a.actualValue,"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const H=C(A,[["render",ce]]);A.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};const Ia={title:"Foundation/Shared/Input fields/TermField",component:H,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},h={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(a,{argTypes:n})=>({components:{FSCol:me,FSTermField:H},props:Object.keys(n),setup(){return{...a}},template:`
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
    </FSCol>`})};var B,q,M;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    args: {
      start1: "now/h",
      end1: "now",
      start2: "now - 3d",
      end2: "now",
      start3: "alertstart - 1h",
      end3: "alertend + 1h",
      start4: "2023-01-01T00:00:00",
      end4: "2024-01-01T00:00:00"
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
    </FSCol>\`
  })
}`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const Oa=["Variations"];export{h as Variations,Oa as __namedExportsOrder,Ia as default};
