import{d as E,c as i,y as b,z as H,A as O,B as n,L as t,O as s}from"./vue.esm-bundler-BSyvBTC9.js";import{F as U}from"./FSSelectField-QL3fIsyv.js";import{F as D}from"./FSBaseField-D2YBKhIh.js";import{F as B}from"./FSClock-D3ZExTfU.js";import{F as p}from"./FSRow-B3SJi8FA.js";import{u as j}from"./useRules-B3HKjmia.js";import{u as N,C as u}from"./useColors-DlnF7i6T.js";import{D as S}from"./dates-Ce7n-5qd.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSCol-CtQDyyQv.js";import"./FSDialogMenu-DZZe1S1I.js";import"./FSCard-CjHnVBHV.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-BysYk75t.js";import"./uuid-DTaye2KM.js";import"./FSButton-DvVRr-Q9.js";import"./FSClickable-D9Ppoc0d.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-DuyQgQFI.js";import"./VIcon-BIpY_noq.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CES2Gcvq.js";import"./FSWrapGroup-WxGi_YEL.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSTextField-D-F2DIF_.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-Dn5SdBcD.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Cf3XjCz3.js";import"./FSLoader-fdbCjZEQ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BSuFa48d.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./VSpacer-C4plVoTE.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-D1irgDfU.js";import"./VMenu-BVgNprPc.js";import"./FSSlider-BJ7MP0J-.js";import"./VSlider-BeqB4nnW.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:U,FSBaseField:D,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),o=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function R(e,a,y,g,d,f){const o=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),O(c,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:n(()=>[t(p,null,{default:n(()=>[t(p,{wrap:!1},{default:n(()=>[t(o,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{wrap:!1},{default:n(()=>[t(o,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const q=A(v,[["render",R]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const ul={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:L},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const ml=["Variations"];export{m as Variations,ml as __namedExportsOrder,ul as default};
