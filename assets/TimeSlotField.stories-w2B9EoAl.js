import{d as E,c as i,y as b,z as H,A as O,B as n,L as a,O as s}from"./vue.esm-bundler-DjjVIdVI.js";import{F as U}from"./FSSelectField-BDJbX3Ee.js";import{F as D}from"./FSBaseField-MQGmXxR2.js";import{F as B}from"./FSClock-BUNZ03Qc.js";import{_ as p}from"./FSRow-CmD7j8Pv.js";import{u as j}from"./useRules-yoa6lFkm.js";import{u as N,C as u}from"./useColors-C-2usiDI.js";import{D as S}from"./dates-Ce7n-5qd.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as A}from"./FSCol-TPWSQPHs.js";import"./FSDialogMenu-B03F1rLC.js";import"./FSCard-BraeKnTa.js";import"./css-BkQhD285.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DpMQsfGo.js";import"./uuid-DTaye2KM.js";import"./FSButton-B49VW4HX.js";import"./FSClickable-CbCMktDA.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-DCIvejCK.js";import"./VIcon-CzaRZDPI.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./index-DOC0sH28.js";import"./FSToggleSet-CqR-o65z.js";import"./FSWrapGroup-B1tkF8GY.js";import"./VInput-CYsTqNhA.js";import"./density-BPFRY_Tg.js";import"./form-B7NlTRtd.js";import"./FSTextField-DYD-Iv_E.js";import"./VField-BnYbwRuc.js";import"./VLabel-jMK3Bs2x.js";import"./loader-CiSVFYJ7.js";import"./rounded-Cely44IK.js";import"./index-Cc8xmT7Y.js";import"./FSCheckbox-Dz1GIEd_.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-QsEpWU03.js";import"./FSLoader-EdeUV0_k.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-C3R2p5jP.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./VSpacer-CrqXaTz-.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BK9ljo9C.js";import"./VMenu-BkqMtGEU.js";import"./FSSlider-agVNSNYa.js";import"./VSlider-HRDOL57F.js";import"./useDateFormat-C-ZOz_ut.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useAppTimeZone-oM-olaqI.js";import"./useTranslations-f9CWAvtI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:U,FSBaseField:D,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),t=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":t.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":t.base,"--fs-time-slot-field-color":t.dark,"--fs-time-slot-field-active-border-color":t.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){o("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}o("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}o("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){o("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}o("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,0],[l,0]])}}}});function L(e,o,y,g,d,f){const t=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),O(c,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:n(()=>[a(p,null,{default:n(()=>[a(p,{wrap:!1},{default:n(()=>[a(t,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),a(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),a(p,{wrap:!1},{default:n(()=>[a(t,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),a(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const q=R(v,[["render",L]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const ml={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:o})=>({components:{FSTimeSlotField:q,FSCol:A},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const pl=["Variations"];export{m as Variations,pl as __namedExportsOrder,ml as default};
