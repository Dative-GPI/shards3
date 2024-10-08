import{d as E,c as m,y as S,z as B,A as j,C as y,N as d,P as c}from"./vue.esm-bundler-CWdIlc2r.js";import{F as N}from"./FSSelectField-CvyvsNwI.js";import{F as A}from"./FSBaseField-BlQcLyVQ.js";import{F as L}from"./FSClock-CcgBK2eN.js";import{_ as D}from"./FSRow-BnsweOMX.js";import{D as v}from"./dates-Ce7n-5qd.js";import{u as z}from"./useAppTimeZone-DLNqwrXb.js";import{u as I}from"./useRules-CY0rKEBQ.js";import{u as P,C as H}from"./useColors-CrLBSafx.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CvoATp5Q.js";import"./FSDialogMenu-D9HgWnX3.js";import"./FSCard-BxmDRzjE.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-qOOOxz_-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./FSButton-Bc8wnoJs.js";import"./FSClickable-JTcIAbNo.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-CyS8zLbP.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSTextField-BLVYx7ij.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSCheckbox-bKRtBqVc.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BhgieYVE.js";import"./FSLoader-h4slsrT9.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./VSpacer-DLFo12A6.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSSlider-C__JCHnk.js";import"./VSlider-BUDqPHPw.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const{getUserOffset:V}=z(),f=(e,r)=>{const a=e;return r?(a.startHour=e.startHour-V()/1e3/60/60,a.endHour=e.endHour-V()/1e3/60/60):(a.startHour=e.startHour+V()/1e3/60/60,a.endHour=e.endHour+V()/1e3/60/60),[v.AllDays].includes(e.startDay)?(e.startHour>23?a.startHour-=24:e.startHour<0&&(a.startHour+=24),e.endHour>23?a.endHour-=24:e.endHour<0&&(a.endHour+=24)):(e.startHour>23?(a.startDay=(e.startDay+1)%7,a.startHour-=24):e.startHour<0&&(a.startDay=(e.startDay+6)%7,a.startHour+=24),e.endHour>23?(a.endDay=(e.endDay+1)%7,a.endHour-=24):e.endHour<0&&(a.endDay=(e.endDay+6)%7,a.endHour+=24)),a},w=E({name:"FSTimeRangeField",components:{FSSelectField:N,FSBaseField:A,FSClock:L,FSRow:D},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:a,getMessages:C}=I(),{getColors:p}=P(),b=p(H.Error),l=p(H.Light),i=p(H.Dark),M=Object.keys(v).reduce((t,o)=>(isNaN(Number(o))&&t.push({id:v[o],label:o}),t),[]),u=m(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":l.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":b.base,"--fs-time-slot-field-error-border-color":b.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":l.base,"--fs-time-slot-field-color":l.dark,"--fs-time-slot-field-active-border-color":l.base}),n=m(()=>e.modelValue?f(e.modelValue,!1):null),k=m(()=>n.value?n.value.startHour*60*60*1e3+n.value.startMinute*60*1e3:0),O=m(()=>n.value?n.value.endHour*60*60*1e3+n.value.endMinute*60*1e3:0),U=m(()=>e.messages??C(e.modelValue,e.rules));return{daysObject:M,validateOn:a,ColorEnum:H,startTime:k,realTime:n,messages:U,endTime:O,style:u,onChangeHourStart:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:o,startMinute:s,endDay:n.value.endDay,endHour:n.value.endHour,endMinute:n.value.endMinute},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:o,startMinute:s,endDay:0,endHour:0,endMinute:0})},onChangeDayStart:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.endDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:e.modelValue.endDay,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})},onChangeHourEnd:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:n.value.startHour,startMinute:n.value.startMinute,endDay:n.value.endDay,endHour:o,endMinute:s},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:o,endMinute:s})},onChangeDayEnd:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.startDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:e.modelValue.startDay,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})}}}});function J(e,r,a,C,p,b){const l=S("FSSelectField"),i=S("FSClock"),M=S("FSBaseField");return B(),j(M,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:y(()=>[d(D,null,{default:y(()=>[d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1}),d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const $=Z(w,[["render",J]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Mt={title:"Foundation/Shared/Input fields/TimeRangeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:$,FSCol:G},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeRangeField
        label="Time Range"
        v-model="args.value0"
      />
      <!-- <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
      /> -->
    </FSCol>`})};var T,q,R;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value0: {
        startDay: 0,
        startHour: 22,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0
      },
      value1: {
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0
      },
      value2: {
        startDay: 1,
        startHour: 1,
        startMinute: 0,
        endDay: 2,
        endHour: 2,
        endMinute: 0
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
        v-model="args.value0"
      />
      <!-- <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
      /> -->
    </FSCol>\`
  })
}`,...(R=(q=g.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Ft=["Variations"];export{g as Variations,Ft as __namedExportsOrder,Mt as default};
