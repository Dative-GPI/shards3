import{d as T,c as k,y as p,z as b,A as w,m as Z,b as c,o as G,w as J,B as f,I as i,C as K,E as V,F as Q,D as X}from"./vue.esm-bundler-DC82FEWN.js";import{_ as B}from"./lodash-BiW_TGGX.js";import{F as _}from"./FSSelectField-DknC7uxL.js";import{a as e}from"./dateEnums-C7Mlyv-O.js";import{u as ee}from"./useTranslations-DV-taHAL.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ae}from"./FSDateTimeRangeField-BHVpnany.js";import te from"./FSNumberField-DsCu-5ZR.js";import{F as re}from"./FSBaseField-3fq9JEyD.js";import{F}from"./FSTextField-CIgddAfu.js";import{F as le}from"./FSForm-1pcMIyZi.js";import{_ as $}from"./FSIcon-2B0NN_at.js";import{_ as h}from"./FSRow-DoCXWKDP.js";import{u as ne}from"./useAppTimeZone-SgthjzoP.js";import{u as se}from"./useRules-DS9e5-1Q.js";import{N as ue,D as oe,T as ie}from"./rules-DlyQ2XjG.js";import{_ as de}from"./FSCol-B7HQy3FB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSDialogMenu-DmBV7Mf4.js";import"./FSCard-DJrzS8t_.js";import"./useColors-ATxZ3nb1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./css-DYOPUjjE.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-C5d3UYhE.js";import"./proxiedModel-BHphZos0.js";import"./anchor-D7FjyLmk.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./locale-BC9z6YbT.js";import"./router-uZykNX6c.js";import"./transition-DSqAHFz2.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./FSRadioGroup-CgnmC9k2.js";import"./FSRadio-Czfn0-vM.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./VSelectionControl-BD03jE0y.js";import"./density-oYDdQVKs.js";import"./VIcon-C6jgSf5f.js";import"./index-DUaylBew.js";import"./VLabel-C0PlncZV.js";import"./FSCheckbox-C9nNPPnZ.js";import"./VInput-CgdIt2Sd.js";import"./index-Drj2M_tW.js";import"./FSFadeOut-7Ilw0XG1.js";import"./uuid-DTaye2KM.js";import"./FSButton-DQTNQ7w6.js";import"./FSClickable-Bk5I2JN4.js";import"./VProgressCircular-BvwZAexL.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./VSpacer-NvTsfghw.js";import"./border-Bvz87W_3.js";import"./elevation-xgrzvMGW.js";import"./rounded-jRyYRXzo.js";import"./VImg-D_T7DUU3.js";import"./index-DI8u9ozT.js";import"./VDivider-nXfn8-bM.js";import"./VSelect-D7F3d6A4.js";import"./VMenu-CMf8AoPJ.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSDialogSubmit-DmA8rBD5.js";import"./FSDialog-D1_ivQdh.js";import"./FSText-ykiRuhwH.js";import"./FSCalendarTwin-CIPEE3F1.js";import"./VLocaleProvider-BxVT41hp.js";import"./VBtn-u1aQHI0Z.js";import"./loader-CIVpWd2w.js";import"./FSClock-BROzzj1s.js";import"./FSSlider-r4j23PbT.js";import"./VSlider-Vh0ZGQPU.js";import"./VField-Blu283UA.js";import"./time-xMV0WbLU.js";const A=T({name:"FSSelectDateSetting",components:{FSSelectField:_},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!1,default:e.LastDay},lastPeriod:{type:Boolean,required:!1,default:!1},useNone:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a){const{$tr:n}=ee();return{dateSettings:k(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:n("ui.date-setting.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:n("ui.date-setting.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:n("ui.date-setting.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:n("ui.date-setting.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:n("ui.date-setting.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:n("ui.date-setting.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:n("ui.date-setting.x-hours-before","x Hours before")},{id:e.DaysBefore,label:n("ui.date-setting.x-days-before","x Days before")},{id:e.WeeksBefore,label:n("ui.date-setting.x-weeks-before","x Weeks before")}];let o=[{id:e.Pick,label:n("ui.date-setting.pick-dates","Pick dates")},{id:e.CurrentHour,label:n("ui.date-setting.this-hour","This hour")},{id:e.CurrentDay,label:n("ui.date-setting.this-day","This day")},{id:e.CurrentWeek,label:n("ui.date-setting.this-week","This week")},{id:e.CurrentMonth,label:n("ui.date-setting.this-month","This month")},{id:e.CurrentYear,label:n("ui.date-setting.this-year","This year")},{id:e.LastDay,label:n("ui.date-setting.last-day","Last day")},{id:e.LastWeek,label:n("ui.date-setting.last-week","Last week")},{id:e.LastMonth,label:n("ui.date-setting.last-month","Last month")},{id:e.LastYear,label:n("ui.date-setting.last-year","Last year")},{id:e.SinceLastDay,label:n("ui.date-setting.since-last-day","Since last day")},{id:e.SinceLastWeek,label:n("ui.date-setting.since-last-week","Since last week")},{id:e.SinceLastMonth,label:n("ui.date-setting.since-last-month","Since last month")},{id:e.SinceLastYear,label:n("ui.date-setting.since-last-year","Since last year")},{id:e.PastHours,label:n("ui.date-setting.past-x-hours","Past x hours")},{id:e.PastDays,label:n("ui.date-setting.past-x-days","Past x days")},{id:e.PastWeeks,label:n("ui.date-setting.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:n("ui.date-setting.past-x-months","Past x months")},{id:e.PastYears,label:n("ui.date-setting.past-x-years","Past x years")},{id:e.Expression,label:n("ui.date-setting.expression","Expression")}];return a.lastPeriod&&o.push({id:e.LastPeriod,label:n("ui.date-setting.last-period","Last period")}),a.useNone&&o.unshift({id:e.None,label:n("ui.date-setting.none","None")}),o})}}});function fe(a,n,m,o,v,D){const u=p("FSSelectField");return b(),w(u,Z({items:a.dateSettings,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=l=>a.$emit("update:modelValue",l))},a.$attrs),null,16,["items","modelValue"])}const me=L(A,[["render",fe]]);A.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!1,defaultValue:{func:!1,value:"DateSetting.LastDay"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"useNone",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const H=T({name:"FSTermField",components:{FSDateTimeRangeField:ae,FSSelectDateSetting:me,FSNumberField:te,FSBaseField:re,FSTextField:F,FSForm:le,FSIcon:$,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:startDate","update:endDate"],setup(a,{emit:n}){const{parseForPicker:m,formatFromPicker:o,formatCurrentForPicker:v}=ne(),{getMessages:D}=se(),u=c(e.PastDays),l=c(1),t=c("now - 1d"),r=c("now"),d=c(!1),y=k(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),E=k(()=>a.messages??D(a.startDate,a.rules).concat(D(a.endDate,a.rules))),N=s=>{x(s)},R=s=>{t.value=s,d.value&&n("update:startDate",s)},x=B.debounce(R,1e3),U=s=>{I(s)},Y=s=>{r.value=s,d.value&&n("update:endDate",s)},I=B.debounce(Y,1e3),O=s=>{switch(u.value=s,s){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${l.value}d`,r.value="alertend"):(t.value=`now - ${l.value}d`,r.value="now");break;case e.Pick:r.value=v(0),t.value=v(-1);break}n("update:startDate",t.value),n("update:endDate",r.value)},j=s=>{switch(l.value=s||1,u.value){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break}n("update:startDate",t.value),n("update:endDate",r.value)},z=s=>{s?(s&&s[0]!=null&&o(s[0])!==t.value&&(t.value=o(s[0]),d.value&&n("update:startDate",t.value)),s&&s[1]!=null&&o(s[1])!==r.value&&(r.value=o(s[1]),d.value&&n("update:endDate",r.value))):(r.value=v(0),t.value=v(-1),d.value&&(n("update:startDate",t.value),n("update:endDate",r.value)))},P=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(l.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBefore;return}case"h":{u.value=e.HoursBefore;return}case"d":{u.value=e.DaysBefore;return}case"w":{u.value=e.WeeksBefore;return}default:{u.value=e.Expression,l.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let s=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),S=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(s!=null&&S!=null&&s[1]===S[1]&&s[2]===S[2])switch(l.value=parseInt(s[1]),s[2]){case"m":{u.value=e.MinutesBeforeAfter;return}case"h":{u.value=e.HoursBeforeAfter;return}case"d":{u.value=e.DaysBeforeAfter;return}case"w":{u.value=e.WeeksBeforeAfter;return}default:{u.value=e.Expression,l.value=1;return}}}u.value=e.Expression,l.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){u.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){u.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){u.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){u.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){u.value=e.LastYear;return}if(a.endDate==="now"){let s=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(s!=null)switch(l.value=1,s[1]){case"d":{u.value=e.SinceLastDay;return}case"w":{u.value=e.SinceLastWeek;return}case"M":{u.value=e.SinceLastMonth;return}case"y":{u.value=e.SinceLastYear;return}default:{u.value=e.Expression;return}}if(s=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(l.value=parseInt(s[1]),s[2]){case"h":{u.value=e.PastHours;return}case"d":{u.value=e.PastDays;return}case"w":{u.value=e.PastWeeks;return}case"M":{u.value=e.PastMonths;return}case"y":{u.value=e.PastYears;return}default:{u.value=e.Expression,l.value=1;return}}if(s=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),s!=null)switch(l.value=1,s[1]){case"h":{u.value=e.CurrentHour;return}case"d":{u.value=e.CurrentDay;return}case"w":{u.value=e.CurrentWeek;return}case"M":{u.value=e.CurrentMonth;return}case"y":{u.value=e.CurrentYear;return}default:{u.value=e.Expression;return}}}if(m(a.endDate)!=null&&m(a.startDate)!=null){u.value=e.Pick,l.value=1;return}u.value=e.Expression,l.value=1};return G(()=>{P()}),J([()=>a.startDate,()=>a.endDate],()=>{(t.value!==a.startDate||r.value!==a.endDate)&&P()}),{innerDateSetting:u,innerDateValue:l,innerStartDate:t,innerEndDate:r,pastSettings:y,DateSetting:e,NumberRules:ue,DateRules:oe,TextRules:ie,messages:E,valid:d,innerDateSettingChange:O,innerDateValueChange:j,innerStartDateChange:N,innerEndDateChange:U,parseForPicker:m,onPickDates:z}}});function ve(a,n,m,o,v,D){const u=p("FSSelectDateSetting"),l=p("FSNumberField"),t=p("FSDateTimeRangeField"),r=p("FSForm"),d=p("FSBaseField");return b(),w(d,{description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,label:a.$props.label,messages:a.messages},{default:f(()=>[i(r,{modelValue:a.valid,"onUpdate:modelValue":n[0]||(n[0]=y=>a.valid=y)},{default:f(()=>[i(h,{wrap:!1},{default:f(()=>[i(u,{lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,hideHeader:!0,modelValue:a.innerDateSetting,"onUpdate:modelValue":a.innerDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.innerDateSetting)?(b(),w(l,{key:0,rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerDateValue,"onUpdate:modelValue":a.innerDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.innerDateSetting===a.DateSetting.Expression?(b(),K(Q,{key:1},[i(h,{align:"center-left",wrap:!1},{default:f(()=>[i($,null,{default:f(()=>[V(" mdi-clock-start ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerStartDate,"onUpdate:modelValue":a.innerStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),i(h,{align:"center-left",wrap:!1},{default:f(()=>[i($,null,{default:f(()=>[V(" mdi-clock-end ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.innerEndDate,"onUpdate:modelValue":a.innerEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.innerDateSetting===a.DateSetting.Pick?(b(),w(t,{key:2,rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,modelValue:[a.parseForPicker(a.innerStartDate),a.parseForPicker(a.innerEndDate)],"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):X("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const W=L(H,[["render",ve]]);H.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};const Ra={title:"Foundation/Shared/Input fields/TermField",component:W,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(a,{argTypes:n})=>({components:{FSCol:de,FSTermField:W},props:Object.keys(n),setup(){return{...a}},template:`
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
    </FSCol>`})};var q,M,C;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(M=g.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const xa=["Variations"];export{g as Variations,xa as __namedExportsOrder,Ra as default};
