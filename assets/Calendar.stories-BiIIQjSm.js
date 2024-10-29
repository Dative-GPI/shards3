import{d as M,y as D,z as y,A as S,C as d,N as m,H as v,I as _,c as f,E as $,O as T,G as N,F as W,K as j,m as E,b as C}from"./vue.esm-bundler-l-siv0w9.js";import{F as g}from"./FSCol-BvqytbKT.js";import{_ as p}from"./FSRow-CbEgVN08.js";import{F as I}from"./FSButton-Cj1rvnYn.js";import{_ as w}from"./FSSpan-Di50moR2.js";import{F as L}from"./FSColor-DXUGLDNs.js";import{a as V,F as U}from"./FSButtonNextIcon-u-Z9nGtY.js";import{M as u}from"./dates-DFP4a3ym.js";import{C as z}from"./useColors-Bs2u1_6J.js";import{u as G}from"./useTranslations-CJK8D24x.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as K}from"./timeRangeTools-CyIfiLJA.js";import{t as h,s as Z,a as Q}from"./startOfWeek-uXTpkxA4.js";import{s as x}from"./startOfDay-C4pDH4rb.js";import{u as X}from"./useAppTimeZone-BUrTBgYP.js";import{F as ee}from"./FSClickable-DfRcT5kA.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./FSRouterLink-2qKFAEm5.js";import"./vue-router-C4bv40Tb.js";import"./FSIcon-uIr9VdFq.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./useSlots-C_N_WAus.js";import"./FSCard-DL4SLpmS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";function F(e,t){const n=x(e),r=x(t);return+n==+r}function te(e){const t=h(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ne(e,t){const n=t==null?void 0:t.weekStartsOn,r=h(e),i=r.getDay(),c=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+c),r.setHours(23,59,59,999),r}function O(e,t){const n=h(e),r=h(t);return n.getTime()>r.getTime()}function P(e,t){const n=h(e),r=h(t);return+n<+r}function ae(e,t){const n=h(e),r=h(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}const R=M({name:"FSMonthSelector",components:{FSRow:p,FSSpan:w,FSColor:L,FSButtonNextIcon:V,FSButtonPreviousIcon:U},props:{color:{type:String,required:!1,default:z.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:n}=G();return{monthToString:s=>{switch(s){case u.January:return n("ui.months.january","January");case u.February:return n("ui.months.february","February");case u.March:return n("ui.months.march","March");case u.April:return n("ui.months.april","April");case u.May:return n("ui.months.may","May");case u.June:return n("ui.months.june","June");case u.July:return n("ui.months.july","July");case u.August:return n("ui.months.august","August");case u.September:return n("ui.months.september","September");case u.October:return n("ui.months.october","October");case u.November:return n("ui.months.november","November");case u.December:return n("ui.months.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function re(e,t,n,r,i,c){const s=D("FSButtonPreviousIcon"),o=D("FSColor"),a=D("FSButtonNextIcon");return y(),S(p,{align:"center-center"},{default:d(()=>[m(s,{onClick:e.onPrevious},null,8,["onClick"]),m(p,null,{default:d(()=>[m(o,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:d(()=>[m(p,{width:"100%",height:"100%",align:"center-center"},{default:d(()=>[m(w,{font:"text-h3"},{default:d(()=>[v(_(e.monthToString(e.$props.month)),1)]),_:1}),m(w,{font:"text-h3"},{default:d(()=>[v(_(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),m(a,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const oe=k(R,[["render",re]]);R.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"Months"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const Y=M({name:"FSCalendarHeader",components:{FSRow:p,FSButton:I,FSSimpleMonthSelector:oe},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const r=new Date;t("update:year",r.getFullYear()),t("update:month",r.getMonth()+1),t("update",{year:r.getFullYear(),month:r.getMonth()+1})}}}});function se(e,t,n,r,i,c){const s=D("FSSimpleMonthSelector");return y(),S(p,null,{default:d(()=>[m(s,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=o=>e.$emit("update:year",o)),"onUpdate:month":t[1]||(t[1]=o=>e.$emit("update:month",o)),onUpdate:t[2]||(t[2]=o=>e.$emit("update",o))},null,8,["year","month"]),m(I,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const A=k(Y,[["render",se]]);Y.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const J=M({name:"FSCalendarHeader",components:{FSRow:p,FSCol:g},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{getMachineOffset:t}=X(),n=f(()=>{const o=new Date(e.year,e.month-1,1),a=t();return o.setTime(o.getTime()+a),o}),r=f(()=>{const o=new Date(n.value),a=Z(o,{weekStartsOn:1}),l=t();return a.setTime(a.getTime()+l),a}),i=f(()=>{const o=new Date(n.value),a=te(o),l=t();return a.setTime(a.getTime()+l),a}),c=f(()=>{const o=new Date(i.value),a=ne(o,{weekStartsOn:1}),l=t();return a.setTime(a.getTime()+l),a}),s=f(()=>{const o=[];let a=new Date(r.value);const l=new Date;for(;a<=c.value;)o.push({date:new Date(a),isToday:F(a,l),isPast:P(a,l)&&!F(a,l),isFutur:O(a,l)&&!F(a,l),isPreviousMonth:P(a,n.value),isNextMonth:O(a,i.value),isCurrentMonth:ae(a,n.value)}),a=Q(a,1);return o});return{dayLabel:K,days:s}}});function ue(e,t,n,r,i,c){return y(),S(g,null,{default:d(()=>[e.$props.showHeader?(y(),S(p,{key:0,wrap:!1},{default:d(()=>[(y(),$(N,null,T(7,s=>m(g,{key:s,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:d(()=>[v(_(e.dayLabel(s-1)),1)]),_:2},1024)),64))]),_:1})):W("",!0),m(p,null,{default:d(()=>[(y(!0),$(N,null,T(e.days,s=>(y(),S(g,{key:e.$props.month+e.$props.year+s.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:d(()=>[j(e.$slots,"day",E({ref_for:!0},s))]),_:2},1024))),128))]),_:3})]),_:3})}const de=k(J,[["render",ue]]);J.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const Ye={title:"Foundation/Shared/Calendar",component:A,tags:["autodocs"]},b={args:{},render:(e,{argTypes:t})=>({components:{FSCol:g,FSSimpleCalendarHeader:A,FSSimpleCalendar:de,FSClickable:ee},props:Object.keys(t),setup(){const n=C([]),r=o=>n.value.some(a=>F(a,o)),i=o=>{r(o)?n.value=n.value.filter(a=>!F(a,o)):n.value=[...n.value,o]},c=C(new Date().getMonth()+1),s=C(new Date().getFullYear());return{month:c,year:s,isDisabled:r,toggleDate:i,disabledDates:n}},template:`
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
    `})};var H,q,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Ae=["Default"];export{b as Default,Ae as __namedExportsOrder,Ye as default};
