import{f as C,g as k,I as p,J as b,K as h,B as K,j as v,o as Z,L as m,A as i,M as z,O as P,F as G,N as Q}from"./vue.esm-bundler-cd768bc3.js";import{_ as B}from"./lodash-569b8a6d.js";import{F as X}from"./FSSelectField-a516e84b.js";import{a as e}from"./dateEnums-241c2c43.js";import{u as _}from"./useTranslations-3c37761e.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{F as ee}from"./FSDateTimeRangeField-ade5eef5.js";import{F as ae}from"./FSNumberField-e09096ae.js";import{F as te}from"./VField-4a160336.js";import{F}from"./FSTextField-1c3f111c.js";import{F as re}from"./FSForm-2d7638c3.js";import{_ as $}from"./FSIcon-5671b33c.js";import{_ as y}from"./FSRow-1d7c2545.js";import{u as le}from"./useAppTimeZone-d6a8f46f.js";import{u as oe}from"./useRules-bb9e9594.js";import{N as ne,D as se,a as ue}from"./rules-fd87a465.js";import{_ as ie}from"./FSCol-ff457bc3.js";import"./_commonjsHelpers-725317a4.js";import"./FSDialogMenu-f482605f.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./VDialog-8ace1c67.js";import"./VOverlay-5f00a78b.js";import"./forwardRefs-e658ad70.js";import"./useRender-d216bc3f.js";import"./proxiedModel-80cf7d0e.js";import"./anchor-9469ffd7.js";import"./color-4e667524.js";import"./dimensions-9d1d90d7.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./locale-d1b7e37d.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./transition-2948fa2b.js";import"./VDefaultsProvider-ff78bc14.js";import"./FSRadioGroup-fe2f8bfd.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./VSelectionControl-650165ff.js";import"./density-80e773e2.js";import"./tag-f5ad2c5e.js";import"./index-f4fa4c36.js";import"./VIcon-95cdbe21.js";import"./VLabel-ac265b88.js";import"./FSCheckbox-c69cb5d8.js";import"./VInput-28424714.js";import"./index-b97c70d5.js";import"./FSFadeOut-4994a7a0.js";import"./useDebounce-8f204f15.js";import"./uuid-08309875.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./VSelect-1b324382.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./VMenu-2bc21026.js";import"./ssrBoot-a9e4f1d0.js";import"./VSpacer-a30a0a7c.js";import"./border-d3eb62c5.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";import"./VSlideGroup-22f87886.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./FSCalendarTwin-1aec628f.js";import"./FSDialog-f670a1dc.js";import"./FSText-92e9b97f.js";import"./VLocaleProvider-bb4fb764.js";import"./date-e2599fc4.js";import"./VBtn-df7c9712.js";import"./loader-e29f326e.js";import"./FSClock-30da2200.js";import"./FSSlider-f977766e.js";import"./VSlider-d1ff3fb5.js";const L=C({name:"FSSelectDateSetting",components:{FSSelectField:X},props:{variant:{type:String,required:!1,default:"default"},modelValue:{type:Number,required:!0},lastPeriod:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(a){const{$tr:o}=_();return{dateSettings:k(()=>{if(a.variant==="before-after")return[{id:e.Pick,label:o("ui.common.pick-dates","Pick dates")},{id:e.MinutesBeforeAfter,label:o("ui.common.x-minutes-before-after-hour","x Minutes before/after")},{id:e.HoursBeforeAfter,label:o("ui.common.x-hours-before-after-hour","x Hours before/after")},{id:e.DaysBeforeAfter,label:o("ui.common.x-days-before-after-hour","x Days before/after")},{id:e.WeeksBeforeAfter,label:o("ui.common.x-weeks-before-after-hour","x Weeks before/after")},{id:e.MinutesBefore,label:o("ui.common.x-minutes-before","x Minutes before")},{id:e.HoursBefore,label:o("ui.common.x-hours-before","x Hours before")},{id:e.DaysBefore,label:o("ui.common.x-days-before","x Days before")},{id:e.WeeksBefore,label:o("ui.common.x-weeks-before","x Weeks before")},{id:e.Expression,label:o("ui.common.expression","Expression")}];let u=[{id:e.Pick,label:o("ui.common.pick-dates","Pick dates")},{id:e.CurrentHour,label:o("ui.common.this-hour","This hour")},{id:e.CurrentDay,label:o("ui.common.this-day","This day")},{id:e.CurrentWeek,label:o("ui.common.this-week","This week")},{id:e.CurrentMonth,label:o("ui.common.this-month","This month")},{id:e.CurrentYear,label:o("ui.common.this-year","This year")},{id:e.LastDay,label:o("ui.common.last-day","Last day")},{id:e.LastWeek,label:o("ui.common.last-week","Last week")},{id:e.LastMonth,label:o("ui.common.last-month","Last month")},{id:e.LastYear,label:o("ui.common.last-year","Last year")},{id:e.SinceLastDay,label:o("ui.common.since-last-day","Since last day")},{id:e.SinceLastWeek,label:o("ui.common.since-last-week","Since last week")},{id:e.SinceLastMonth,label:o("ui.common.since-last-month","Since last month")},{id:e.SinceLastYear,label:o("ui.common.since-last-year","Since last year")},{id:e.PastHours,label:o("ui.common.past-x-hours","Past x hours")},{id:e.PastDays,label:o("ui.common.past-x-days","Past x days")},{id:e.PastWeeks,label:o("ui.common.past-x-weeks","Past x weeks")},{id:e.PastMonths,label:o("ui.common.past-x-months","Past x months")},{id:e.PastYears,label:o("ui.common.past-x-years","Past x years")},{id:e.Expression,label:o("ui.common.expression","Expression")}];return a.lastPeriod&&u.push({id:e.LastPeriod,label:o("ui.common.last-period","Last period")}),u})}}});function de(a,o,f,u,c,D){const s=p("FSSelectField");return b(),h(s,K({editable:a.$props.editable,items:a.dateSettings,hideHeader:!0,clearable:!1,modelValue:a.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>a.$emit("update:modelValue",l))},a.$attrs),null,16,["editable","items","modelValue"])}const me=T(L,[["render",de]]);L.__docgenInfo={displayName:"FSSelectDateSetting",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"modelValue",type:{name:"DateSetting"},required:!0},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectDateSetting.vue"]};const A=C({name:"FSTermField",components:{FSDateTimeRangeField:ee,FSSelectDateSetting:me,FSNumberField:ae,FSBaseField:te,FSTextField:F,FSForm:re,FSIcon:$,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},startDate:{type:String,required:!0},endDate:{type:String,required:!0},variant:{type:String,required:!1,default:"default"},hideHeader:{type:Boolean,required:!1,default:!1},lastPeriod:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:startDate","update:endDate"],setup(a,{emit:o}){const{parseForPicker:f,formatFromPicker:u,formatCurrentForPicker:c}=le(),{getMessages:D}=oe(),s=v(e.PastDays),l=v(1),t=v("now - 1d"),r=v("now"),d=v(!1),g=k(()=>[e.PastHours,e.PastDays,e.PastWeeks,e.PastMonths,e.PastYears,e.MinutesBeforeAfter,e.HoursBeforeAfter,e.DaysBeforeAfter,e.WeeksBeforeAfter,e.MinutesBefore,e.HoursBefore,e.DaysBefore,e.WeeksBefore]),W=k(()=>a.messages??D(a.startDate,a.rules).concat(D(a.endDate,a.rules))),E=n=>{R(n)},x=n=>{t.value=n,d.value&&o("update:startDate",n)},R=B.debounce(x,1e3),N=n=>{Y(n)},U=n=>{r.value=n,d.value&&o("update:endDate",n)},Y=B.debounce(U,1e3),I=n=>{switch(s.value=n,n){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.CurrentHour:t.value="now/h",r.value="now";break;case e.CurrentDay:t.value="now/d",r.value="now";break;case e.CurrentWeek:t.value="now/w",r.value="now";break;case e.CurrentMonth:t.value="now/M",r.value="now";break;case e.CurrentYear:t.value="now/y",r.value="now";break;case e.LastDay:t.value="now - 1d/d",r.value="now/d";break;case e.LastWeek:t.value="now - 1w/w",r.value="now/w";break;case e.LastMonth:t.value="now - 1M/M",r.value="now/M";break;case e.LastYear:t.value="now - 1y/y",r.value="now/y";break;case e.SinceLastDay:t.value="now - 1d/d",r.value="now";break;case e.SinceLastWeek:t.value="now - 1w/w",r.value="now";break;case e.SinceLastMonth:t.value="now - 1M/M",r.value="now";break;case e.SinceLastYear:t.value="now - 1y/y",r.value="now";break;case e.LastPeriod:t.value="from - to + from",r.value="from";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break;case e.Expression:a.variant==="before-after"?(t.value=`alertstart - ${l.value}d`,r.value="alertend"):(t.value=`now - ${l.value}d`,r.value="now");break;case e.Pick:r.value=c(0),t.value=c(-1);break}o("update:startDate",t.value),o("update:endDate",r.value)},O=n=>{switch(l.value=n||1,s.value){case e.None:return;case e.PastHours:t.value=`now - ${l.value}h`,r.value="now";break;case e.PastDays:t.value=`now - ${l.value}d`,r.value="now";break;case e.PastWeeks:t.value=`now - ${l.value}w`,r.value="now";break;case e.PastMonths:t.value=`now - ${l.value}M`,r.value="now";break;case e.PastYears:t.value=`now - ${l.value}y`,r.value="now";break;case e.MinutesBeforeAfter:t.value=`alertstart - ${l.value}m`,r.value=`alertend + ${l.value}m`;break;case e.HoursBeforeAfter:t.value=`alertstart - ${l.value}h`,r.value=`alertend + ${l.value}h`;break;case e.DaysBeforeAfter:t.value=`alertstart - ${l.value}d`,r.value=`alertend + ${l.value}d`;break;case e.WeeksBeforeAfter:t.value=`alertstart - ${l.value}w`,r.value=`alertend + ${l.value}w`;break;case e.MinutesBefore:t.value=`alertstart - ${l.value}m`,r.value="alertend";break;case e.HoursBefore:t.value=`alertstart - ${l.value}h`,r.value="alertend";break;case e.DaysBefore:t.value=`alertstart - ${l.value}d`,r.value="alertend";break;case e.WeeksBefore:t.value=`alertstart - ${l.value}w`,r.value="alertend";break}o("update:startDate",t.value),o("update:endDate",r.value)},j=n=>{n?(n&&n[0]!=null&&u(n[0])!==t.value&&(t.value=u(n[0]),d.value&&o("update:startDate",t.value)),n&&n[1]!=null&&u(n[1])!==r.value&&(r.value=u(n[1]),d.value&&o("update:endDate",r.value))):(r.value=c(0),t.value=c(-1),d.value&&(o("update:startDate",t.value),o("update:endDate",r.value)))},J=()=>{if(t.value=a.startDate,r.value=a.endDate,a.variant==="before-after"){if(a.endDate==="alertend"){let n=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ",""));if(n!=null)switch(l.value=parseInt(n[1]),n[2]){case"m":{s.value=e.MinutesBefore;return}case"h":{s.value=e.HoursBefore;return}case"d":{s.value=e.DaysBefore;return}case"w":{s.value=e.WeeksBefore;return}default:{s.value=e.Expression,l.value=1;return}}}if(/^alertstart-([\d]+)([mhdw])$/g.test(a.startDate.replaceAll(" ",""))&&/^alertend\+([\d]+)([mhdw])$/g.test(a.endDate.replaceAll(" ",""))){let n=/^alertstart-([\d]+)([mhdw])$/g.exec(a.startDate.replaceAll(" ","")),S=/^alertend\+([\d]+)([mhdw])$/g.exec(a.endDate.replaceAll(" ",""));if(n!=null&&S!=null&&n[1]===S[1]&&n[2]===S[2])switch(l.value=parseInt(n[1]),n[2]){case"m":{s.value=e.MinutesBeforeAfter;return}case"h":{s.value=e.HoursBeforeAfter;return}case"d":{s.value=e.DaysBeforeAfter;return}case"w":{s.value=e.WeeksBeforeAfter;return}default:{s.value=e.Expression,l.value=1;return}}}s.value=e.Expression,l.value=1;return}if(a.lastPeriod&&a.endDate==="from"&&a.startDate==="from - to + from"){s.value=e.LastPeriod;return}if(a.endDate==="now/d"&&a.startDate==="now - 1d/d"){s.value=e.LastDay;return}if(a.endDate==="now/w"&&a.startDate==="now - 1w/w"){s.value=e.LastWeek;return}if(a.endDate==="now/M"&&a.startDate==="now - 1M/M"){s.value=e.LastMonth;return}if(a.endDate==="now/y"&&a.startDate==="now - 1y/y"){s.value=e.LastYear;return}if(a.endDate==="now"){let n=/^now-1([dwMy])\/([dwMy])$/g.exec(a.startDate.replaceAll(" ",""));if(n!=null)switch(l.value=1,n[1]){case"d":{s.value=e.SinceLastDay;return}case"w":{s.value=e.SinceLastWeek;return}case"M":{s.value=e.SinceLastMonth;return}case"y":{s.value=e.SinceLastYear;return}default:{s.value=e.Expression;return}}if(n=/^now-([\d]+)([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),n!=null)switch(l.value=parseInt(n[1]),n[2]){case"h":{s.value=e.PastHours;return}case"d":{s.value=e.PastDays;return}case"w":{s.value=e.PastWeeks;return}case"M":{s.value=e.PastMonths;return}case"y":{s.value=e.PastYears;return}default:{s.value=e.Expression,l.value=1;return}}if(n=/^now\/([hdwMy])$/g.exec(a.startDate.replaceAll(" ","")),n!=null)switch(l.value=1,n[1]){case"h":{s.value=e.CurrentHour;return}case"d":{s.value=e.CurrentDay;return}case"w":{s.value=e.CurrentWeek;return}case"M":{s.value=e.CurrentMonth;return}case"y":{s.value=e.CurrentYear;return}default:{s.value=e.Expression;return}}}if(f(a.endDate)!=null&&f(a.startDate)!=null){s.value=e.Pick,l.value=1;return}s.value=e.Expression,l.value=1};return Z(()=>{J()}),{localDateSetting:s,localDateValue:l,localStartDate:t,localEndDate:r,pastSettings:g,DateSetting:e,NumberRules:ne,DateRules:se,TextRules:ue,messages:W,valid:d,localDateSettingChange:I,localDateValueChange:O,localStartDateChange:E,localEndDateChange:N,parseForPicker:f,onPickDates:j}}});function fe(a,o,f,u,c,D){const s=p("FSSelectDateSetting"),l=p("FSNumberField"),t=p("FSDateTimeRangeField"),r=p("FSForm"),d=p("FSBaseField");return b(),h(d,{label:a.$props.label,description:a.$props.description,hideHeader:a.$props.hideHeader,required:a.$props.required,editable:a.$props.editable,messages:a.messages},{default:m(()=>[i(r,{modelValue:a.valid,"onUpdate:modelValue":o[0]||(o[0]=g=>a.valid=g)},{default:m(()=>[i(y,null,{default:m(()=>[i(s,{lastPeriod:a.$props.lastPeriod,editable:a.$props.editable,variant:a.$props.variant,modelValue:a.localDateSetting,"onUpdate:modelValue":a.localDateSettingChange},null,8,["lastPeriod","editable","variant","modelValue","onUpdate:modelValue"]),a.pastSettings.includes(a.localDateSetting)?(b(),h(l,{key:0,rules:[a.NumberRules.required(),a.NumberRules.min(0)],editable:a.$props.editable,hideHeader:!0,modelValue:a.localDateValue,"onUpdate:modelValue":a.localDateValueChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):a.localDateSetting===a.DateSetting.Expression?(b(),z(G,{key:1},[i(y,{align:"center-left",wrap:!1},{default:m(()=>[i($,null,{default:m(()=>[P(" mdi-clock-start ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.localStartDate,"onUpdate:modelValue":a.localStartDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1}),i(y,{align:"center-left",wrap:!1},{default:m(()=>[i($,null,{default:m(()=>[P(" mdi-clock-end ")]),_:1}),i(F,{rules:[a.TextRules.required(),a.DateRules.validateExpression(a.$props.variant)],editable:a.$props.editable,hideHeader:!0,modelValue:a.localEndDate,"onUpdate:modelValue":a.localEndDateChange},null,8,["rules","editable","modelValue","onUpdate:modelValue"])]),_:1})],64)):a.localDateSetting===a.DateSetting.Pick?(b(),h(t,{key:2,rules:[a.DateRules.required()],editable:a.$props.editable,hideHeader:!0,modelValue:[a.parseForPicker(a.localStartDate),a.parseForPicker(a.localEndDate)],"onUpdate:modelValue":a.onPickDates},null,8,["rules","editable","modelValue","onUpdate:modelValue"])):Q("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const H=T(A,[["render",fe]]);A.__docgenInfo={displayName:"FSTermField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"variant",values:["default","before-after"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"lastPeriod",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:startDate"},{name:"update:endDate"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTermField.vue"]};const Ua={title:"Foundation/Shared/Input fields/TermField",component:H,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},w={args:{args:{start1:"now/h",end1:"now",start2:"now - 3d",end2:"now",start3:"alertstart - 1h",end3:"alertend + 1h",start4:"2023-01-01T00:00:00",end4:"2024-01-01T00:00:00"}},render:(a,{argTypes:o})=>({components:{FSCol:ie,FSTermField:H},props:Object.keys(o),setup(){return{...a}},template:`
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
    </FSCol>`})};var V,q,M;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(q=w.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const Ya=["Variations"];export{w as Variations,Ya as __namedExportsOrder,Ua as default};
