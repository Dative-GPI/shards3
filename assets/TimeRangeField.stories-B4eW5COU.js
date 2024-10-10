import{d as A,c as f,y as S,z as C,A as q,C as v,N as m,F as O}from"./vue.esm-bundler-DTB_q9xr.js";import{F as B}from"./FSSelectField-CUwTiuac.js";import{F as I}from"./FSBaseField-D2wwYX9r.js";import{F as L}from"./FSClock-BsPvJo5Z.js";import{_ as D}from"./FSRow-CFFgZ74C.js";import{a as V,b as l}from"./dates-DQP2gAV4.js";import{u as N}from"./useAppTimeZone-ByDiY2xy.js";import{u as $}from"./useTranslations-BehwFxDb.js";import{u as j}from"./useRules-D0gcbU57.js";import{C as W}from"./useColors-BWKJNLz8.js";import{g as z}from"./enumTools-BEsapygt.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CYWCfIBP.js";import"./FSDialogMenu-BA4IKkHH.js";import"./FSCard-C6D9gNrD.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Du5JXqac.js";import"./theme-CX_N7n5F.js";import"./proxiedModel-Atn7Z0Ko.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSSlideGroup--K704DO9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./FSButton-C0EbsNmZ.js";import"./FSClickable-BkJRwj5f.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CaaGuK6D.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./index-UH0ZuYvc.js";import"./FSToggleSet-CvGKl15-.js";import"./FSWrapGroup-Dplk4rjv.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./FSTextField-B-binuYf.js";import"./VField-Do2gtyNA.js";import"./VLabel-33JaQml4.js";import"./loader-BYp4SDfR.js";import"./rounded-ErtzAGHK.js";import"./index-DS9MhfY5.js";import"./FSCheckbox-Bdwx0Alv.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-d8eb0S_F.js";import"./FSLoader-IaO7i80m.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./VSpacer-Di7g3RCw.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./FSSlider-COcqcW8-.js";import"./VSlider-CGSYcLks.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const{$tr:d}=$(),{getUserOffset:H}=N(),p=(e,u)=>{const t={startDay:e.startDay,startHour:e.startHour,startMinute:e.startMinute,endDay:e.endDay,endHour:e.endHour,endMinute:e.endMinute,variant:e.variant};if(e.variant==V.UTC){let n=0,o=0;return u?(n=e.startHour-H()/1e3/60/60,o=e.endHour-H()/1e3/60/60):(n=e.startHour+H()/1e3/60/60,o=e.endHour+H()/1e3/60/60),[l.AllDays].includes(e.startDay)?(n>23?t.startHour=n-24:n<0?t.startHour=n+24:t.startHour=n,o>23?t.endHour=o-24:o<0?t.endHour=o+24:t.endHour=o):(n>23?(t.startDay=(e.startDay+1)%7,t.startHour=n-24):n<0?(t.startDay=(e.startDay+6)%7,t.startHour=n+24):t.startHour=n,o>23?(t.endDay=(e.endDay+1)%7,t.endHour=o-24):o<0?(t.endDay=(e.endDay+6)%7,t.endHour=o+24):t.endHour=o),{startDay:t.startDay,startHour:t.startHour,startMinute:e.startMinute,endDay:t.endDay,endHour:t.endHour,endMinute:t.endMinute,variant:t.variant}}else return e},J=e=>{switch(e){case l.Monday:return d("ui.days.monday","Monday");case l.Tuesday:return d("ui.days.tuesday","Tuesday");case l.Wednesday:return d("ui.days.wednesday","Wednesday");case l.Thursday:return d("ui.days.thursday","Thursday");case l.Friday:return d("ui.days.friday","Friday");case l.Saturday:return d("ui.days.saturday","Saturday");case l.Sunday:return d("ui.days.sunday","Sunday");default:return d("ui.days.all-days","All days")}},E=A({name:"FSTimeRangeField",components:{FSSelectField:B,FSBaseField:I,FSClock:L,FSRow:D},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},showVariant:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:u}){const{$tr:t}=$(),{validateOn:n,getMessages:o}=j(),T=[{id:V.Local,label:t("ui.common.local","Local")},{id:V.UTC,label:t("ui.common.utc","UTC")}],y=f(()=>z(l).map(r=>({id:r.value,label:J(r.value)}))),a=f(()=>p(e.modelValue,!1)),b=f(()=>a.value?a.value.startHour*60*60*1e3+a.value.startMinute*60*1e3:0),c=f(()=>a.value?a.value.endHour*60*60*1e3+a.value.endMinute*60*1e3:0),s=f(()=>e.messages??o(e.modelValue,e.rules));return{dateTypeItems:T,validateOn:n,daysItems:y,ColorEnum:W,startTime:b,realTime:a,messages:s,DateType:V,endTime:c,onChangeHourStart:r=>{const i=r?Math.floor(r/36e5):0,h=r?Math.floor(r%(60*60*1e3)/(60*1e3)):0,M={startDay:a.value.startDay,startHour:i,startMinute:h,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},F=p(M,!0);u("update:modelValue",F)},onChangeDayStart:r=>{if(r===l.AllDays)u("update:modelValue",{startDay:r,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:r,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});else{const i=p({startDay:r,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:e.modelValue.endDay==l.AllDays?r:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);u("update:modelValue",i)}},onChangeHourEnd:r=>{const i=r?Math.floor(r/36e5):0,h=r?Math.floor(r%(60*60*1e3)/(60*1e3)):0;if(a.value){const M={startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:i,endMinute:h,variant:a.value.variant},F=p(M,!0);u("update:modelValue",F)}},onUpdateVariant:r=>{const i=p({startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:r},!0);u("update:modelValue",i)},onChangeDayEnd:r=>{if(r===l.AllDays){u("update:modelValue",{startDay:r,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:r,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});return}else{const i=p({startDay:e.modelValue.startDay==l.AllDays?r:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:r,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);u("update:modelValue",i)}}}}});function K(e,u,t,n,o,T){const y=S("FSSelectField"),a=S("FSClock"),b=S("FSBaseField");return C(),q(b,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:v(()=>[m(D,null,{default:v(()=>{var c;return[m(D,{wrap:!1},{default:v(()=>{var s;return[m(y,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((s=e.realTime)==null?void 0:s.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","modelValue","onUpdate:modelValue"]),m(a,{editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","modelValue","onUpdate:modelValue"])]}),_:1}),m(D,{wrap:!1},{default:v(()=>{var s;return[m(y,{editable:e.$props.editable,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((s=e.realTime)==null?void 0:s.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","modelValue","onUpdate:modelValue"]),m(a,{editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","modelValue","onUpdate:modelValue"])]}),_:1}),e.$props.showVariant?(C(),q(y,{key:0,width:"hug",label:e.$tr("ui.common.type","Type"),items:e.dateTypeItems,hideHeader:!0,clearable:!1,modelValue:((c=e.modelValue)==null?void 0:c.variant)??e.DateType.Local,"onUpdate:modelValue":e.onUpdateVariant},null,8,["label","items","modelValue","onUpdate:modelValue"])):O("",!0)]}),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const k=Z(E,[["render",K]]);E.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showVariant",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Fa={title:"Foundation/Shared/Input fields/TimeRangeField",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:2},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:1},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0,variant:1}}},render:(e,{argTypes:u})=>({components:{FSTimeRangeField:k,FSCol:G},props:Object.keys(u),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeRangeField
        label="Time Range"
        :modelValue="args.value0"
        :showVariant="true"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Required time Range, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Uneditable time Range, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value2"
      />
    </FSCol>`})};var w,R,U;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      value0: {
        startDay: 0,
        startHour: 22,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: 2
      },
      value1: {
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: 1
      },
      value2: {
        startDay: 1,
        startHour: 1,
        startMinute: 0,
        endDay: 2,
        endHour: 2,
        endMinute: 0,
        variant: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeRangeField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTimeRangeField
        label="Time Range"
        :modelValue="args.value0"
        :showVariant="true"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Required time Range, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Uneditable time Range, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const Sa=["Variations"];export{g as Variations,Sa as __namedExportsOrder,Fa as default};
