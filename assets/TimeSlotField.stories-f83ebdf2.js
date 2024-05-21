import{j as H,e as n,I as V,J as U,K as O,L as u,A as t,M as s}from"./vue.esm-bundler-7c237656.js";import{F as B}from"./FSSelectField-87d9471e.js";import{F as j}from"./VField-1b5a23ea.js";import{F as A}from"./FSClock-2e6460a2.js";import{_ as f}from"./FSRow-0e15f868.js";import{u as N}from"./useRules-30f7bcaa.js";import{u as R,C as m}from"./useColors-8171fc39.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as M}from"./FSCol-76ddd6d9.js";import"./FSDialogMenu-de087113.js";import"./FSCard-be090350.js";import"./css-aa928277.js";import"./VDialog-ed113aaf.js";import"./VOverlay-215d3759.js";import"./forwardRefs-e658ad70.js";import"./useRender-e696dd75.js";import"./theme-6b978bcd.js";import"./proxiedModel-255ed77f.js";import"./anchor-4da81316.js";import"./color-8b3e8a76.js";import"./dimensions-506d0d5f.js";import"./display-f7c4d7d9.js";import"./lazy-ba583f92.js";import"./locale-842c83ae.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./transition-99224378.js";import"./VDefaultsProvider-8ad05cd7.js";import"./FSRadioGroup-89330635.js";import"./FSIcon-84236a8c.js";import"./VIcon-ea625dc1.js";import"./tag-d0e3859f.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./VSelectionControl-4d654956.js";import"./density-ba2627df.js";import"./index-b834f342.js";import"./VLabel-25f2a1ef.js";import"./FSCheckbox-2107f3ac.js";import"./VInput-cb53917c.js";import"./index-bed3da0c.js";import"./FSFadeOut-0e321526.js";import"./useDebounce-3b8c8385.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./FSTextField-1126ba2f.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./VSelect-6f1247c6.js";import"./VMenu-ecd47b95.js";import"./ssrBoot-ce89aa70.js";import"./VSpacer-5d7851f1.js";import"./border-07f356f9.js";import"./elevation-322d7ef7.js";import"./rounded-5c48e6dc.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";import"./VSlideGroup-688ca79d.js";import"./goto-5a330938.js";import"./group-114c8e76.js";import"./loader-1ca0c22d.js";import"./FSSlider-0388f8d1.js";import"./VSlider-26942df5.js";import"./useAppTimeZone-62c4f11c.js";import"./useTranslations-5148abf7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var b=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(b||{});const v=H({name:"FSTimeSlotField",components:{FSSelectField:B,FSBaseField:j,FSClock:A,FSRow:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,blurred:S,getMessages:g}=N(),{getColors:d}=R(),r=d(m.Error),o=d(m.Light),i=d(m.Dark),T=Object.keys(b).reduce((l,c)=>(isNaN(Number(c))&&l.push({id:b[c],label:c}),l),[]),$=n(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":r.base,"--fs-time-slot-field-error-border-color":r.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),k=n(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),w=n(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),E=n(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:T,validateOn:y,ColorEnum:m,dayStart:k,messages:E,blurred:S,dayEnd:w,style:$,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function I(e,a,y,S,g,d){const r=V("FSSelectField"),o=V("FSClock"),i=V("FSBaseField");return U(),O(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:u(()=>[t(f,null,{default:u(()=>[t(f,{wrap:!1},{default:u(()=>[t(r,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{wrap:!1},{default:u(()=>[t(r,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=L(v,[["render",I]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const dl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:M},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,h,C;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const il=["Variations"];export{p as Variations,il as __namedExportsOrder,dl as default};
