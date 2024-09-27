import{d as E,c as m,y as S,z as B,A as j,B as y,L as d,O as c}from"./vue.esm-bundler-DjjVIdVI.js";import{F as N}from"./FSSelectField-BDJbX3Ee.js";import{F as A}from"./FSBaseField-MQGmXxR2.js";import{F as L}from"./FSClock-BUNZ03Qc.js";import{_ as D}from"./FSRow-CmD7j8Pv.js";import{D as v}from"./dates-Ce7n-5qd.js";import{u as z}from"./useAppTimeZone-oM-olaqI.js";import{u as I}from"./useRules-yoa6lFkm.js";import{u as Z,C as H}from"./useColors-C-2usiDI.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-TPWSQPHs.js";import"./FSDialogMenu-B03F1rLC.js";import"./FSCard-BraeKnTa.js";import"./css-BkQhD285.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DpMQsfGo.js";import"./uuid-DTaye2KM.js";import"./FSButton-B49VW4HX.js";import"./FSClickable-CbCMktDA.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-DCIvejCK.js";import"./VIcon-CzaRZDPI.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./index-DOC0sH28.js";import"./FSToggleSet-CqR-o65z.js";import"./FSWrapGroup-B1tkF8GY.js";import"./VInput-CYsTqNhA.js";import"./density-BPFRY_Tg.js";import"./form-B7NlTRtd.js";import"./FSTextField-DYD-Iv_E.js";import"./VField-BnYbwRuc.js";import"./VLabel-jMK3Bs2x.js";import"./loader-CiSVFYJ7.js";import"./rounded-Cely44IK.js";import"./index-Cc8xmT7Y.js";import"./FSCheckbox-Dz1GIEd_.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-QsEpWU03.js";import"./FSLoader-EdeUV0_k.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-C3R2p5jP.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./VSpacer-CrqXaTz-.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BK9ljo9C.js";import"./VMenu-BkqMtGEU.js";import"./FSSlider-agVNSNYa.js";import"./VSlider-HRDOL57F.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useTranslations-f9CWAvtI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const{getUserOffset:V}=z(),f=(e,r)=>{const a=e;return r?(a.startHour=e.startHour-V()/1e3/60/60,a.endHour=e.endHour-V()/1e3/60/60):(a.startHour=e.startHour+V()/1e3/60/60,a.endHour=e.endHour+V()/1e3/60/60),[v.AllDays].includes(e.startDay)?(e.startHour>23?a.startHour-=24:e.startHour<0&&(a.startHour+=24),e.endHour>23?a.endHour-=24:e.endHour<0&&(a.endHour+=24)):(e.startHour>23?(a.startDay=(e.startDay+1)%7,a.startHour-=24):e.startHour<0&&(a.startDay=(e.startDay+6)%7,a.startHour+=24),e.endHour>23?(a.endDay=(e.endDay+1)%7,a.endHour-=24):e.endHour<0&&(a.endDay=(e.endDay+6)%7,a.endHour+=24)),a},w=E({name:"FSTimeRangeField",components:{FSSelectField:N,FSBaseField:A,FSClock:L,FSRow:D},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:a,getMessages:C}=I(),{getColors:p}=Z(),b=p(H.Error),l=p(H.Light),i=p(H.Dark),M=Object.keys(v).reduce((t,o)=>(isNaN(Number(o))&&t.push({id:v[o],label:o}),t),[]),u=m(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":l.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":b.base,"--fs-time-slot-field-error-border-color":b.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":l.base,"--fs-time-slot-field-color":l.dark,"--fs-time-slot-field-active-border-color":l.base}),n=m(()=>e.modelValue?f(e.modelValue,!1):null),$=m(()=>n.value?n.value.startHour*60*60*1e3+n.value.startMinute*60*1e3:0),k=m(()=>n.value?n.value.endHour*60*60*1e3+n.value.endMinute*60*1e3:0),U=m(()=>e.messages??C(e.modelValue,e.rules));return{daysObject:M,validateOn:a,ColorEnum:H,startTime:$,realTime:n,messages:U,endTime:k,style:u,onChangeHourStart:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:o,startMinute:s,endDay:n.value.endDay,endHour:n.value.endHour,endMinute:n.value.endMinute},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:o,startMinute:s,endDay:0,endHour:0,endMinute:0})},onChangeDayStart:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.endDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:e.modelValue.endDay,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})},onChangeHourEnd:t=>{const o=t?Math.floor(t/36e5):0,s=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(n.value){const F={startDay:n.value.startDay,startHour:n.value.startHour,startMinute:n.value.startMinute,endDay:n.value.endDay,endHour:o,endMinute:s},h=f(F,!0);r("update:modelValue",h);return}r("update:modelValue",{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:o,endMinute:s})},onChangeDayEnd:t=>{if(t===7){if(e.modelValue){r("update:modelValue",{startDay:7,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:7,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}r("update:modelValue",{startDay:7,startHour:0,startMinute:0,endDay:7,endHour:0,endMinute:0});return}if(e.modelValue){if(e.modelValue.startDay===7){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute});return}const o=f({startDay:e.modelValue.startDay,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute},!0);r("update:modelValue",o);return}r("update:modelValue",{startDay:t,startHour:0,startMinute:0,endDay:t,endHour:0,endMinute:0})}}}});function K(e,r,a,C,p,b){const l=S("FSSelectField"),i=S("FSClock"),M=S("FSBaseField");return B(),j(M,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:y(()=>[d(D,null,{default:y(()=>[d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1}),d(D,{wrap:!1},{default:y(()=>{var u;return[d(l,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:c(e.style),modelValue:((u=e.realTime)==null?void 0:u.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),d(i,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:c(e.style),modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]}),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const O=G(w,[["render",K]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const gt={title:"Foundation/Shared/Input fields/TimeRangeField",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:O,FSCol:J},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(R=(q=g.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Dt=["Variations"];export{g as Variations,Dt as __namedExportsOrder,gt as default};
