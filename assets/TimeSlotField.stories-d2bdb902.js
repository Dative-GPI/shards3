import{f as E,g as i,D as b,E as H,F as D,G as n,P as t,W as s}from"./vue.esm-bundler-a0893183.js";import{F as U}from"./FSSelectField-6fb3d8a3.js";import{F as O}from"./VField-c7486719.js";import{F as B}from"./FSClock-a50b14f0.js";import{_ as p}from"./FSRow-821d23a1.js";import{D as S}from"./dateEnums-241c2c43.js";import{u as j}from"./useRules-8ba0ecf4.js";import{u as N,C as u}from"./useColors-6c375bb5.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as A}from"./FSCol-e45ac157.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./useRender-13ac3742.js";import"./theme-41eca2c8.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./color-d0fba9db.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./FSIcon-9d61ed62.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./VSelectionControl-df8a6f90.js";import"./density-fc3376dc.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./FSTextField-3d775cb5.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./VInput-cbd9f0c3.js";import"./index-ec7e733e.js";import"./index-01bbf789.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./VSpacer-b1094f09.js";import"./border-ca0badc6.js";import"./elevation-7d7e39c3.js";import"./rounded-4c492e72.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VSelect-9102db02.js";import"./VMenu-02096e7e.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./loader-4af36e99.js";import"./FSSlider-ad9cae7f.js";import"./VSlider-dd82cf9d.js";import"./useAppTimeZone-d7f3e4a5.js";import"./useTranslations-95b4a686.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:U,FSBaseField:O,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),a=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":a.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":a.base,"--fs-time-slot-field-color":a.dark,"--fs-time-slot-field-active-border-color":a.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){o("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}o("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}o("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){o("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}o("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,0],[l,0]])}}}});function L(e,o,y,g,d,f){const a=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),D(c,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:n(()=>[t(p,null,{default:n(()=>[t(p,{wrap:!1},{default:n(()=>[t(a,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{wrap:!1},{default:n(()=>[t(a,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=R(v,[["render",L]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const il={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:o})=>({components:{FSTimeSlotField:q,FSCol:A},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const nl=["Variations"];export{m as Variations,nl as __namedExportsOrder,il as default};
