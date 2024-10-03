import{d as E,c as m,y as S,z as B,A as j,B as y,L as d,O as c}from"./vue.esm-bundler-CxS4_7kK.js";import{F as N}from"./FSSelectField-mHn_NIMq.js";import{F as A}from"./FSBaseField-DRP7kP50.js";import{F as L}from"./FSClock-2jBaosUD.js";import{_ as D}from"./FSRow-D546kqFt.js";import{D as v}from"./dates-Ce7n-5qd.js";import{u as z}from"./useAppTimeZone-CIW33DGM.js";import{u as I}from"./useRules-o706rtr1.js";import{u as Z,C as H}from"./useColors-BoRVwO74.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-Co9r7Klj.js";import"./FSDialogMenu-BQnq2uK3.js";import"./FSCard-BOmUSPlM.js";import"./css-D18ueKtB.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./proxiedModel-DAUSUEYq.js";import"./anchor-CfU9RSql.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./locale-DgxPCyxi.js";import"./router-C4cLtMAM.js";import"./transition-DZ-8zzo1.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./FSSlideGroup-C1Kipqmu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DoEp6YQk.js";import"./FSButton-D64P3bCo.js";import"./FSClickable-CusxsKEA.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-BHUJU4iP.js";import"./VIcon-C65wMs2G.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./index-D0m5TbR6.js";import"./FSToggleSet-BeXfNSJj.js";import"./FSWrapGroup-BLPJiM21.js";import"./VInput-BdNbghoa.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSTextField-BUbFMs1s.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./rounded-Cd5tqTfa.js";import"./index-CQjBi2ms.js";import"./FSCheckbox-CsAnMrj7.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-Bx7JPxYi.js";import"./FSLoader-CL1ZyItv.js";import"./elevation-8SXivnh1.js";import"./FSRadio-BWlhMOEh.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./VSpacer-DaRxrr8q.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-C8c1PUzV.js";import"./VMenu-CCWiAq1W.js";import"./FSSlider-BYG74O3P.js";import"./VSlider-DVYMfW-j.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useTranslations-ZMyFjr19.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const{getUserOffset:V}=z(),f=(e,r)=>{const a=e;return r?(a.startHour=e.startHour-V()/1e3/60/60,a.endHour=e.endHour-V()/1e3/60/60):(a.startHour=e.startHour+V()/1e3/60/60,a.endHour=e.endHour+V()/1e3/60/60),[v.AllDays].includes(e.startDay)?(e.startHour>23?a.startHour-=24:e.startHour<0&&(a.startHour+=24),e.endHour>23?a.endHour-=24:e.endHour<0&&(a.endHour+=24)):(e.startHour>23?(a.startDay=(e.startDay+1)%7,a.startHour-=24):e.startHour<0&&(a.startDay=(e.startDay+6)%7,a.startHour+=24),e.endHour>23?(a.endDay=(e.endDay+1)%7,a.endHour-=24):e.endHour<0&&(a.endDay=(e.endDay+6)%7,a.endHour+=24)),a},w=E({name:"FSTimeRangeField",components:{FSSelectField:N,FSBaseField:A,FSClock:L,FSRow:D},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:a,getMessages:C}=I(),{getColors:p}=Z(),b=p(H.Error),l=p(H.Light),i=p(H.Dark),M=Object.keys(v).reduce((t,o)=>(isNaN(Number(o))&&t.push({id:v[o],label:o}),t),[]),u=m(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":l.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":b.base,"--fs-time-slot-field-error-border-color":b.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":l.base,"--fs-time-slot-field-color":l.dark,"--fs-time-slot-field-active-border-color":l.base}),n=m(()=>e.modelValue?f(e.modelValue,!1):null),$=m(()=>n.value?n.value.startHour*60*60*1e3+n.value.startMinute*60*1e3:0),k=m(()=>n.value?n.value.endHour*60*60*1e3+n.value.endMinute*60*1e3:0),U=m(()=>e.messages??C(e.modelValue,e.rules));return{daysObject:M,validateOn:a,ColorEnum:H,startTime:$,realTime:n,messages:U,endTime:k,style:u,onChangeHourStart:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:o,startMinute:s,endDay:n.value.endDay,endHour:n.value.endHour,endMinute:n.value.endMinute},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:o,startMinute:s,endDay:0,endHour:0,endMinute:0})},onChangeDayStart:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.endDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:e.modelValue.endDay,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})},onChangeHourEnd:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:n.value.startHour,startMinute:n.value.startMinute,endDay:n.value.endDay,endHour:o,endMinute:s},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:o,endMinute:s})},onChangeDayEnd:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.startDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:e.modelValue.startDay,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})}}}});function K(e,r,a,C,p,b){const l=S("FSSelectField"),i=S("FSClock"),M=S("FSBaseField");return B(),j(M,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:y(()=>[d(D,null,{default:y(()=>[d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1}),d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const O=G(w,[["render",K]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Mt={title:"Foundation/Shared/Input fields/TimeRangeField",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:O,FSCol:J},props:Object.keys(r),setup(){return{...e}},template:`
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
