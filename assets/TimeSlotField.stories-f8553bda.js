import{f as E,g as i,D as b,E as H,F as D,G as n,Q as t,W as s}from"./vue.esm-bundler-1de4ab84.js";import{F as U}from"./FSSelectField-72f459f2.js";import{F as O}from"./VField-c7605df9.js";import{F as B}from"./FSClock-cbb75078.js";import{_ as p}from"./FSRow-0f15051e.js";import{D as S}from"./dateEnums-241c2c43.js";import{u as j}from"./useRules-14fb7f63.js";import{u as N,C as u}from"./useColors-6201f155.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as A}from"./FSCol-044a4f0a.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./forwardRefs-e658ad70.js";import"./useRender-b44b777b.js";import"./theme-fee57059.js";import"./proxiedModel-ef310637.js";import"./anchor-3e311b48.js";import"./color-69562b87.js";import"./dimensions-60fb7050.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./locale-f0128dd0.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./transition-41c2ee15.js";import"./VDefaultsProvider-4480b636.js";import"./FSRadioGroup-39907278.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./FSTextField-5eb8ba7e.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";import"./index-bd033a0f.js";import"./FSCheckbox-7bc44d7a.js";import"./FSFadeOut-649e8ed5.js";import"./uuid-08309875.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./VSpacer-8f10d0b5.js";import"./border-5994344b.js";import"./elevation-e7de2c09.js";import"./rounded-aeb398ab.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./loader-16a3b845.js";import"./FSSlider-bfe5cb80.js";import"./VSlider-81bd7069.js";import"./useAppTimeZone-7082f171.js";import"./useTranslations-df2010ef.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:U,FSBaseField:O,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),a=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":a.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":a.base,"--fs-time-slot-field-color":a.dark,"--fs-time-slot-field-active-border-color":a.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){o("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}o("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}o("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){o("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}o("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){o("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}o("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){o("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}o("update:modelValue",[[l,0],[l,0]])}}}});function L(e,o,y,g,d,f){const a=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),D(c,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:n(()=>[t(p,null,{default:n(()=>[t(p,{wrap:!1},{default:n(()=>[t(a,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{wrap:!1},{default:n(()=>[t(a,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=R(v,[["render",L]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:o})=>({components:{FSTimeSlotField:q,FSCol:A},props:Object.keys(o),setup(){return{...e}},template:`
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
