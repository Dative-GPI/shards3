import{d as $,c as d,y as H,z as S,A as T,C as p,N as o,H as E}from"./vue.esm-bundler-D3ngFwGY.js";import{F as k}from"./FSSelectField-BKxSDF0S.js";import{F as B}from"./FSBaseField-cmky_v29.js";import{F as O}from"./FSClock-Bi5hJniR.js";import{_ as y}from"./FSRow-CYD73_tT.js";import{d as A,a as i}from"./timeRangeTools-LVpUK1vH.js";import{u as I}from"./useRules-BmSxRe3B.js";import{u as L}from"./useTranslations-Dmqoe3Kp.js";import{a as h,D as s}from"./dates-DFP4a3ym.js";import{g as N}from"./enumTools-BEsapygt.js";import{C as j}from"./useColors-B-331F-F.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CVj0zcU5.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D4nM6Ihv.js";import"./theme-DFFIkVWm.js";import"./proxiedModel-BmbZrdih.js";import"./anchor-BMg_Hu1U.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./locale-R8GaLlvb.js";import"./router-BPv_tYld.js";import"./transition-DtcXiLpW.js";import"./VDefaultsProvider-EJiha1S2.js";import"./index-D1hHR51g.js";import"./VIcon-DBlUULm8.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSIcon-C0akNC9K.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./VInput-11LmaO3P.js";import"./form-thVqu4eJ.js";import"./FSTextField-knlUmIuH.js";import"./VField-Ddzu1ph-.js";import"./VLabel-D_hiLcnP.js";import"./loader-BvdvxiyE.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./FSSlider-BKZ-cHFA.js";import"./VSlider-CilBQKZ9.js";import"./useDateFormat-C9QY5oFQ.js";import"./useAppLanguageCode-CbHleqYG.js";import"./useAppTimeZone-Cp_499X8.js";import"./startOfWeek-uXTpkxA4.js";import"./datesTools-jb_azIFs.js";import"./startOfDay-C4pDH4rb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const w=$({name:"FSTimeRangeField",components:{FSSelectField:k,FSBaseField:B,FSClock:O,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},showVariant:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{$tr:c}=L(),{validateOn:D,getMessages:F}=I(),M=[{id:h.Local,label:c("ui.common.local","Local")},{id:h.UTC,label:c("ui.common.utc","UTC")}],u=d(()=>N(s).map(t=>({id:t.value,label:A(t.value)}))),a=d(()=>i(e.modelValue,!1)),v=d(()=>a.value?a.value.startHour*60*60*1e3+a.value.startMinute*60*1e3:0),m=d(()=>a.value?a.value.endHour*60*60*1e3+a.value.endMinute*60*1e3:0),l=d(()=>e.messages??F(e.modelValue,e.rules));return{dateTypeItems:M,validateOn:D,daysItems:u,ColorEnum:j,startTime:v,realTime:a,messages:l,DateType:h,endTime:m,onChangeHourStart:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0,V={startDay:a.value.startDay,startHour:n,startMinute:g,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},b=i(V,!0);r("update:modelValue",b)},onChangeDayStart:t=>{if(t===s.AllDays)r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});else{const n=i({startDay:t,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:e.modelValue.endDay==s.AllDays?t:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}},onChangeHourEnd:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(a.value){const V={startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:n,endMinute:g,variant:a.value.variant},b=i(V,!0);r("update:modelValue",b)}},onUpdateVariant:t=>{const n=i({startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:t},!0);r("update:modelValue",n)},onChangeDayEnd:t=>{if(t===s.AllDays){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});return}else{const n=i({startDay:e.modelValue.startDay==s.AllDays?t:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:t,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}}}}});function J(e,r,c,D,F,M){const u=H("FSSelectField"),a=H("FSClock"),v=H("FSBaseField");return S(),T(v,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[o(y,null,{default:p(()=>{var m;return[o(y,{wrap:!1},{default:p(()=>{var l;return[o(u,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","modelValue","onUpdate:modelValue"]),o(a,{editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","modelValue","onUpdate:modelValue"])]}),_:1}),o(y,{wrap:!1},{default:p(()=>{var l;return[o(u,{editable:e.$props.editable,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","modelValue","onUpdate:modelValue"]),o(a,{editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","modelValue","onUpdate:modelValue"])]}),_:1}),e.$props.showVariant?(S(),T(u,{key:0,width:"hug",label:e.$tr("ui.common.type","Type"),items:e.dateTypeItems,hideHeader:!0,clearable:!1,modelValue:((m=e.modelValue)==null?void 0:m.variant)??e.DateType.Local,"onUpdate:modelValue":e.onUpdateVariant},null,8,["label","items","modelValue","onUpdate:modelValue"])):E("",!0)]}),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const U=z(w,[["render",J]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showVariant",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Da={title:"Foundation/Shared/Input fields/TimeRangeField",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:2},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:1},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0,variant:1}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:U,FSCol:G},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var C,q,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Fa=["Variations"];export{f as Variations,Fa as __namedExportsOrder,Da as default};
