import{d as E,c as i,y as b,z as H,A as U,B as n,K as t,Q as s}from"./vue.esm-bundler-DUki7rNA.js";import{F as D}from"./FSSelectField-DFFcH9GM.js";import{F as O}from"./VField-BJJocrwv.js";import{F as B}from"./FSClock-BiFozEmz.js";import{_ as p}from"./FSRow-CHgEOZQb.js";import{D as S}from"./dateEnums-C7Mlyv-O.js";import{u as j}from"./useRules-ChvLepw4.js";import{u as N,C as u}from"./useColors-HWn2iBmk.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as A}from"./FSCol-BBaW1DrL.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-pAH_6Aah.js";import"./theme-BdipdDNo.js";import"./proxiedModel-C4hUsKQ6.js";import"./anchor-32zVg6UX.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./locale-BngQMCjE.js";import"./router-C5N3y4B3.js";import"./transition-CAmaHrck.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./FSIcon-CSwom3lG.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./FSSpan-DUTdSgpN.js";import"./useSlots-BZu_lZyn.js";import"./VSelectionControl-D7t-g0gO.js";import"./density-CE9JT2ZV.js";import"./index-IoB6lNSN.js";import"./VLabel-URjizS1I.js";import"./FSTextField-BZoPMSW0.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./VInput-qlcJwxYl.js";import"./index-zNldQLkd.js";import"./index-CeJtk2ua.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./VSpacer-CujVv6t6.js";import"./border-BeL02A28.js";import"./elevation-B5zwTzN8.js";import"./rounded-CuOTz_ni.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VSelect-Doh8ERno.js";import"./VMenu-BMkRa5on.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./loader-B-LDUF0l.js";import"./FSSlider-DG-uOadu.js";import"./VSlider-CUmkIQzK.js";import"./useAppTimeZone-BvKhOiUD.js";import"./useTranslations-LhdkJQ98.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:D,FSBaseField:O,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),a=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":a.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":a.base,"--fs-time-slot-field-color":a.dark,"--fs-time-slot-field-active-border-color":a.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){o("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}o("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}o("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){o("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}o("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,0],[l,0]])}}}});function L(e,o,y,g,d,f){const a=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),U(c,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:n(()=>[t(p,null,{default:n(()=>[t(p,{wrap:!1},{default:n(()=>[t(a,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{wrap:!1},{default:n(()=>[t(a,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const q=R(v,[["render",L]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:o})=>({components:{FSTimeSlotField:q,FSCol:A},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeSlotField
        label="Time slot"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeSlotField
        label="Required time slot, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeSlotField
        label="Uneditable time slot, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value2"
      />
    </FSCol>`})};var F,h,C;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      value0: [[0, 0], [0, 0]],
      value1: [[2, 25200000], [2, 27000000]],
      value2: [[7, 3600000], [2, 7200000]]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeSlotField,
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
      <FSTimeSlotField
        label="Time slot"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeSlotField
        label="Required time slot, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeSlotField
        label="Uneditable time slot, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const dl=["Variations"];export{m as Variations,dl as __namedExportsOrder,rl as default};
