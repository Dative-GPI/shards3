import{j as H,e as n,I as V,J as U,K as O,L as u,A as t,M as s}from"./vue.esm-bundler-857e5af7.js";import{F as B}from"./FSSelectField-86243dfb.js";import{F as j}from"./VField-9dc825df.js";import{F as A}from"./FSClock-1e063726.js";import{_ as f}from"./FSRow-e30f1dcc.js";import{u as N}from"./useRules-b3d475c7.js";import{u as R,C as m}from"./useColors-d77b9fa0.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as M}from"./FSCol-439c812a.js";import"./FSDialogMenu-717b3ccf.js";import"./FSCard-c144a688.js";import"./css-ab2bdb81.js";import"./VDialog-c4db32be.js";import"./VOverlay-dc792521.js";import"./forwardRefs-e658ad70.js";import"./useRender-d5beceb3.js";import"./theme-83a4d379.js";import"./proxiedModel-1e29c8a1.js";import"./loader-b99105cf.js";import"./color-5d3cc229.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./locale-9a98f700.js";import"./rounded-67c03651.js";import"./dimensions-d7f5c5ad.js";import"./display-56858c3a.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./transition-2a27d0f7.js";import"./VDefaultsProvider-51a3a301.js";import"./FSRadioGroup-aac97f6c.js";import"./FSIcon-faf0e444.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./FSCheckbox-d1b08f47.js";import"./VInput-6c2a4fd3.js";import"./index-d6be2044.js";import"./FSFadeOut-e66877f2.js";import"./useDebounce-3221123d.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSTextField-16a79c60.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./VSelect-2f600942.js";import"./VMenu-ddfad70d.js";import"./ssrBoot-4aec2e0b.js";import"./VSpacer-37a4cd9a.js";import"./border-43a3c780.js";import"./elevation-d5a2e352.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";import"./VSlideGroup-23212639.js";import"./goto-975c1e2c.js";import"./group-501836f7.js";import"./FSSlider-39e913aa.js";import"./VSlider-3bc75b9a.js";import"./useAppTimeZone-43dfb0bc.js";import"./useTranslations-4ae50e1a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var b=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(b||{});const v=H({name:"FSTimeSlotField",components:{FSSelectField:B,FSBaseField:j,FSClock:A,FSRow:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,blurred:S,getMessages:g}=N(),{getColors:d}=R(),r=d(m.Error),o=d(m.Light),i=d(m.Dark),T=Object.keys(b).reduce((l,c)=>(isNaN(Number(c))&&l.push({id:b[c],label:c}),l),[]),$=n(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":r.base,"--fs-time-slot-field-error-border-color":r.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),k=n(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),w=n(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),E=n(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:T,validateOn:y,ColorEnum:m,dayStart:k,messages:E,blurred:S,dayEnd:w,style:$,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function I(e,a,y,S,g,d){const r=V("FSSelectField"),o=V("FSClock"),i=V("FSBaseField");return U(),O(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:u(()=>[t(f,null,{default:u(()=>[t(f,{wrap:!1},{default:u(()=>[t(r,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{wrap:!1},{default:u(()=>[t(r,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=L(v,[["render",I]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:M},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const dl=["Variations"];export{p as Variations,dl as __namedExportsOrder,rl as default};
