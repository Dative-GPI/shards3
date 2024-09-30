import{d as M,y as C,z as f,A as g,B as m,L as l,E as w,G as _,c as S,C as $,N,F as x,D as V,I as L,m as J,b as v}from"./vue.esm-bundler-CxS4_7kK.js";import{F}from"./FSCol-Co9r7Klj.js";import{_ as p}from"./FSRow-D546kqFt.js";import{F as R}from"./FSButton-D4qgd2ja.js";import{_ as k}from"./FSSpan-3STIP-79.js";import{F as U}from"./FSColor-v9frFHZv.js";import{a as z,F as G}from"./FSButtonNextIcon-BfAmq6H5.js";import{C as Z}from"./useColors-CVdO3CcM.js";import{u as Y}from"./useTranslations-ZMyFjr19.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{t as y,s as K,a as Q}from"./startOfWeek-uXTpkxA4.js";import{s as O}from"./startOfDay-C4pDH4rb.js";import{u as X}from"./useAppTimeZone-CIW33DGM.js";import{F as ee}from"./FSClickable-xECbCdT3.js";import"./css-D18ueKtB.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./tag-ByYBjpGI.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./useSlots-BHms3Yb6.js";import"./FSCard-uGx4g-q0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";function b(e,t){const n=O(e),a=O(t);return+n==+a}function te(e){const t=y(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ne(e,t){const n=t==null?void 0:t.weekStartsOn,a=y(e),d=a.getDay(),c=(d<n?-7:0)+6-(d-n);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function P(e,t){const n=y(e),a=y(t);return n.getTime()>a.getTime()}function q(e,t){const n=y(e),a=y(t);return+n<+a}function ae(e,t){const n=y(e),a=y(t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}const W=M({name:"FSMonthSelector",components:{FSRow:p,FSSpan:k,FSColor:U,FSButtonNextIcon:z,FSButtonPreviousIcon:G},props:{color:{type:String,required:!1,default:Z.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:n}=Y();return{monthToString:r=>{switch(r){case 1:return n("ui.common.january","January");case 2:return n("ui.common.february","February");case 3:return n("ui.common.march","March");case 4:return n("ui.common.april","April");case 5:return n("ui.common.may","May");case 6:return n("ui.common.june","June");case 7:return n("ui.common.july","July");case 8:return n("ui.common.august","August");case 9:return n("ui.common.september","September");case 10:return n("ui.common.october","October");case 11:return n("ui.common.november","November");case 12:return n("ui.common.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function oe(e,t,n,a,d,c){const r=C("FSButtonPreviousIcon"),s=C("FSColor"),h=C("FSButtonNextIcon");return f(),g(p,{align:"center-center"},{default:m(()=>[l(r,{onClick:e.onPrevious},null,8,["onClick"]),l(p,null,{default:m(()=>[l(s,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:m(()=>[l(p,{width:"100%",height:"100%",align:"center-center"},{default:m(()=>[l(k,{font:"text-h3"},{default:m(()=>[w(_(e.monthToString(e.$props.month)),1)]),_:1}),l(k,{font:"text-h3"},{default:m(()=>[w(_(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),l(h,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const re=T(W,[["render",oe]]);W.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"number"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const j=M({name:"FSCalendarHeader",components:{FSRow:p,FSButton:R,FSSimpleMonthSelector:re},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const a=new Date;t("update:year",a.getFullYear()),t("update:month",a.getMonth()+1),t("update",{year:a.getFullYear(),month:a.getMonth()+1})}}}});function se(e,t,n,a,d,c){const r=C("FSSimpleMonthSelector");return f(),g(p,null,{default:m(()=>[l(r,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=s=>e.$emit("update:year",s)),"onUpdate:month":t[1]||(t[1]=s=>e.$emit("update:month",s)),onUpdate:t[2]||(t[2]=s=>e.$emit("update",s))},null,8,["year","month"]),l(R,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const A=T(j,[["render",se]]);j.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const E=M({name:"FSCalendarHeader",components:{FSRow:p,FSCol:F},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{$tr:t}=Y(),{getMachineOffset:n}=X(),a=u=>{switch(u){case 0:return t("ui.common.monday","Monday");case 1:return t("ui.common.tuesday","Tuesday");case 2:return t("ui.common.wednesday","Wednesday");case 3:return t("ui.common.thursday","Thursday");case 4:return t("ui.common.friday","Friday");case 5:return t("ui.common.saturday","Saturday");case 6:return t("ui.common.sunday","Sunday");default:return""}},d=S(()=>{const u=new Date(e.year,e.month-1,1),o=n();return u.setTime(u.getTime()+o),u}),c=S(()=>{const u=new Date(d.value),o=K(u,{weekStartsOn:1}),i=n();return o.setTime(o.getTime()+i),o}),r=S(()=>{const u=new Date(d.value),o=te(u),i=n();return o.setTime(o.getTime()+i),o}),s=S(()=>{const u=new Date(r.value),o=ne(u,{weekStartsOn:1}),i=n();return o.setTime(o.getTime()+i),o}),h=S(()=>{const u=[];let o=new Date(c.value);const i=new Date;for(;o<=s.value;)u.push({date:new Date(o),isToday:b(o,i),isPast:q(o,i)&&!b(o,i),isFutur:P(o,i)&&!b(o,i),isPreviousMonth:q(o,d.value),isNextMonth:P(o,r.value),isCurrentMonth:ae(o,d.value)}),o=Q(o,1);return u});return{day:a,days:h}}});function ue(e,t,n,a,d,c){return f(),g(F,null,{default:m(()=>[e.$props.showHeader?(f(),g(p,{key:0,wrap:!1},{default:m(()=>[(f(),$(x,null,N(7,r=>l(F,{key:r,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:m(()=>[w(_(e.day(r-1)),1)]),_:2},1024)),64))]),_:1})):V("",!0),l(p,null,{default:m(()=>[(f(!0),$(x,null,N(e.days,r=>(f(),g(F,{key:e.$props.month+e.$props.year+r.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:m(()=>[L(e.$slots,"day",J({ref_for:!0},r))]),_:2},1024))),128))]),_:3})]),_:3})}const de=T(E,[["render",ue]]);E.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const He={title:"Foundation/Shared/Calendar",component:A,tags:["autodocs"]},D={args:{},render:(e,{argTypes:t})=>({components:{FSCol:F,FSSimpleCalendarHeader:A,FSSimpleCalendar:de,FSClickable:ee},props:Object.keys(t),setup(){const n=v([]),a=s=>n.value.some(h=>b(h,s)),d=s=>{a(s)?n.value=n.value.filter(h=>!b(h,s)):n.value=[...n.value,s]},c=v(new Date().getMonth()+1),r=v(new Date().getFullYear());return{month:c,year:r,isDisabled:a,toggleDate:d,disabledDates:n}},template:`
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSClickable
              height="100px"
              width="100%"
              :editable="!isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : undefined"
              :color="isDisabled(date) ? 'error' : undefined"
              @click="toggleDate(date)"
            >
              <FSClickable v-if="isToday" color="primary" borderRadius="20%">{{ date.getDate() }}</FSClickable>
              <template v-else>{{ date.getDate() }}</template>
            </FSClickable>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    `})};var H,B,I;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSSimpleCalendarHeader,
      FSSimpleCalendar,
      FSClickable
    },
    props: Object.keys(argTypes),
    setup() {
      const disabledDates = ref<Date[]>([]);
      const isDisabled = (date: Date) => {
        return disabledDates.value.some(d => isSameDay(d, date));
      };
      const toggleDate = (date: Date) => {
        if (isDisabled(date)) {
          disabledDates.value = disabledDates.value.filter(d => !isSameDay(d, date));
        } else {
          disabledDates.value = [...disabledDates.value, date];
        }
      };
      const month = ref(new Date().getMonth() + 1);
      const year = ref(new Date().getFullYear());
      return {
        month,
        year,
        isDisabled,
        toggleDate,
        disabledDates
      };
    },
    template: \`
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSClickable
              height="100px"
              width="100%"
              :editable="!isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : undefined"
              :color="isDisabled(date) ? 'error' : undefined"
              @click="toggleDate(date)"
            >
              <FSClickable v-if="isToday" color="primary" borderRadius="20%">{{ date.getDate() }}</FSClickable>
              <template v-else>{{ date.getDate() }}</template>
            </FSClickable>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    \`
  })
}`,...(I=(B=D.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const Be=["Default"];export{D as Default,Be as __namedExportsOrder,He as default};
