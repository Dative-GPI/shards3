import{d as T,y as v,z as S,A as F,B as m,L as c,E as _,G as M,c as g,C as N,N as x,F as O,D as V,I as L,m as U,b as w}from"./vue.esm-bundler-CxS4_7kK.js";import{F as b}from"./FSCol-Co9r7Klj.js";import{_ as h}from"./FSRow-D546kqFt.js";import{F as Y}from"./FSButton-D64P3bCo.js";import{_ as k}from"./FSSpan-3STIP-79.js";import{F as z}from"./FSColor-Jme4zaNe.js";import{a as G,F as Z}from"./FSButtonNextIcon-DoEp6YQk.js";import{M as i}from"./dates-Ce7n-5qd.js";import{C as K}from"./useColors-BoRVwO74.js";import{u as A}from"./useTranslations-ZMyFjr19.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{t as y,s as Q,a as X}from"./startOfWeek-uXTpkxA4.js";import{s as P}from"./startOfDay-C4pDH4rb.js";import{u as ee}from"./useAppTimeZone-CIW33DGM.js";import{F as te}from"./FSClickable-CusxsKEA.js";import"./css-D18ueKtB.js";import"./FSIcon-BHUJU4iP.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./tag-ByYBjpGI.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./useSlots-BHms3Yb6.js";import"./FSCard-BOmUSPlM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";function D(e,t){const n=P(e),a=P(t);return+n==+a}function ne(e){const t=y(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ae(e,t){const n=t==null?void 0:t.weekStartsOn,a=y(e),d=a.getDay(),p=(d<n?-7:0)+6-(d-n);return a.setDate(a.getDate()+p),a.setHours(23,59,59,999),a}function q(e,t){const n=y(e),a=y(t);return n.getTime()>a.getTime()}function H(e,t){const n=y(e),a=y(t);return+n<+a}function re(e,t){const n=y(e),a=y(t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}const W=T({name:"FSMonthSelector",components:{FSRow:h,FSSpan:k,FSColor:z,FSButtonNextIcon:G,FSButtonPreviousIcon:Z},props:{color:{type:String,required:!1,default:K.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:n}=A();return{monthToString:o=>{switch(o){case i.January:return n("ui.months.january","January");case i.February:return n("ui.months.february","February");case i.March:return n("ui.months.march","March");case i.April:return n("ui.months.april","April");case i.May:return n("ui.months.may","May");case i.June:return n("ui.months.june","June");case i.July:return n("ui.months.july","July");case i.August:return n("ui.months.august","August");case i.September:return n("ui.months.september","September");case i.October:return n("ui.months.october","October");case i.November:return n("ui.months.november","November");case i.December:return n("ui.months.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function oe(e,t,n,a,d,p){const o=v("FSButtonPreviousIcon"),s=v("FSColor"),f=v("FSButtonNextIcon");return S(),F(h,{align:"center-center"},{default:m(()=>[c(o,{onClick:e.onPrevious},null,8,["onClick"]),c(h,null,{default:m(()=>[c(s,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:m(()=>[c(h,{width:"100%",height:"100%",align:"center-center"},{default:m(()=>[c(k,{font:"text-h3"},{default:m(()=>[_(M(e.monthToString(e.$props.month)),1)]),_:1}),c(k,{font:"text-h3"},{default:m(()=>[_(M(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),c(f,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const se=$(W,[["render",oe]]);W.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"Months"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const J=T({name:"FSCalendarHeader",components:{FSRow:h,FSButton:Y,FSSimpleMonthSelector:se},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const a=new Date;t("update:year",a.getFullYear()),t("update:month",a.getMonth()+1),t("update",{year:a.getFullYear(),month:a.getMonth()+1})}}}});function ue(e,t,n,a,d,p){const o=v("FSSimpleMonthSelector");return S(),F(h,null,{default:m(()=>[c(o,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=s=>e.$emit("update:year",s)),"onUpdate:month":t[1]||(t[1]=s=>e.$emit("update:month",s)),onUpdate:t[2]||(t[2]=s=>e.$emit("update",s))},null,8,["year","month"]),c(Y,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const j=$(J,[["render",ue]]);J.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const E=T({name:"FSCalendarHeader",components:{FSRow:h,FSCol:b},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{$tr:t}=A(),{getMachineOffset:n}=ee(),a=u=>{switch(u){case 0:return t("ui.common.monday","Monday");case 1:return t("ui.common.tuesday","Tuesday");case 2:return t("ui.common.wednesday","Wednesday");case 3:return t("ui.common.thursday","Thursday");case 4:return t("ui.common.friday","Friday");case 5:return t("ui.common.saturday","Saturday");case 6:return t("ui.common.sunday","Sunday");default:return""}},d=g(()=>{const u=new Date(e.year,e.month-1,1),r=n();return u.setTime(u.getTime()+r),u}),p=g(()=>{const u=new Date(d.value),r=Q(u,{weekStartsOn:1}),l=n();return r.setTime(r.getTime()+l),r}),o=g(()=>{const u=new Date(d.value),r=ne(u),l=n();return r.setTime(r.getTime()+l),r}),s=g(()=>{const u=new Date(o.value),r=ae(u,{weekStartsOn:1}),l=n();return r.setTime(r.getTime()+l),r}),f=g(()=>{const u=[];let r=new Date(p.value);const l=new Date;for(;r<=s.value;)u.push({date:new Date(r),isToday:D(r,l),isPast:H(r,l)&&!D(r,l),isFutur:q(r,l)&&!D(r,l),isPreviousMonth:H(r,d.value),isNextMonth:q(r,o.value),isCurrentMonth:re(r,d.value)}),r=X(r,1);return u});return{day:a,days:f}}});function de(e,t,n,a,d,p){return S(),F(b,null,{default:m(()=>[e.$props.showHeader?(S(),F(h,{key:0,wrap:!1},{default:m(()=>[(S(),N(O,null,x(7,o=>c(b,{key:o,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:m(()=>[_(M(e.day(o-1)),1)]),_:2},1024)),64))]),_:1})):V("",!0),c(h,null,{default:m(()=>[(S(!0),N(O,null,x(e.days,o=>(S(),F(b,{key:e.$props.month+e.$props.year+o.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:m(()=>[L(e.$slots,"day",U({ref_for:!0},o))]),_:2},1024))),128))]),_:3})]),_:3})}const ie=$(E,[["render",de]]);E.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const Ie={title:"Foundation/Shared/Calendar",component:j,tags:["autodocs"]},C={args:{},render:(e,{argTypes:t})=>({components:{FSCol:b,FSSimpleCalendarHeader:j,FSSimpleCalendar:ie,FSClickable:te},props:Object.keys(t),setup(){const n=w([]),a=s=>n.value.some(f=>D(f,s)),d=s=>{a(s)?n.value=n.value.filter(f=>!D(f,s)):n.value=[...n.value,s]},p=w(new Date().getMonth()+1),o=w(new Date().getFullYear());return{month:p,year:o,isDisabled:a,toggleDate:d,disabledDates:n}},template:`
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
    `})};var B,I,R;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(I=C.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const Re=["Default"];export{C as Default,Re as __namedExportsOrder,Ie as default};
