import{j as H,e as n,I as V,J as U,K as O,L as u,A as t,M as s}from"./vue.esm-bundler-41eda46b.js";import{F as B}from"./FSSelectField-ee043228.js";import{F as j}from"./VField-c52f5557.js";import{F as A}from"./FSClock-4ade32ff.js";import{_ as f}from"./FSRow-1508d56d.js";import{u as N}from"./useRules-d33c1ab7.js";import{u as R,C as m}from"./useColors-baaa98f5.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as M}from"./FSCol-282cc158.js";import"./FSDialogMenu-8a197336.js";import"./FSCard-8067a4d4.js";import"./css-35e8563f.js";import"./VDialog-ecb58b76.js";import"./VOverlay-ac667fed.js";import"./forwardRefs-e658ad70.js";import"./useRender-dd35ddd1.js";import"./theme-be1bd2db.js";import"./proxiedModel-03601969.js";import"./loader-e17cf3b4.js";import"./color-45753032.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./locale-84078765.js";import"./rounded-3de0fd3d.js";import"./dimensions-5b54e342.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./transition-695cd20f.js";import"./VDefaultsProvider-7d12961d.js";import"./FSRadioGroup-a60e03b4.js";import"./FSIcon-713345eb.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./FSCheckbox-90b24572.js";import"./VInput-4d87c32a.js";import"./index-dc0570e5.js";import"./FSFadeOut-77aed403.js";import"./useDebounce-c713d9ff.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSTextField-77636cac.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./VSelect-defb5d1c.js";import"./VMenu-499c8185.js";import"./ssrBoot-5c61be23.js";import"./VSpacer-63a59a9e.js";import"./border-eea26164.js";import"./elevation-878f110a.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";import"./VSlideGroup-aeb2e4a4.js";import"./goto-50a9e63e.js";import"./group-2589989a.js";import"./FSSlider-fedacc08.js";import"./VSlider-d86dd738.js";import"./useAppTimeZone-fd64682f.js";import"./useTranslations-3bd97805.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var b=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(b||{});const v=H({name:"FSTimeSlotField",components:{FSSelectField:B,FSBaseField:j,FSClock:A,FSRow:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,blurred:S,getMessages:g}=N(),{getColors:d}=R(),r=d(m.Error),o=d(m.Light),i=d(m.Dark),T=Object.keys(b).reduce((l,c)=>(isNaN(Number(c))&&l.push({id:b[c],label:c}),l),[]),$=n(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":r.base,"--fs-time-slot-field-error-border-color":r.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),k=n(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),w=n(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),E=n(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:T,validateOn:y,ColorEnum:m,dayStart:k,messages:E,blurred:S,dayEnd:w,style:$,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function I(e,a,y,S,g,d){const r=V("FSSelectField"),o=V("FSClock"),i=V("FSBaseField");return U(),O(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:u(()=>[t(f,null,{default:u(()=>[t(f,{wrap:!1},{default:u(()=>[t(r,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{wrap:!1},{default:u(()=>[t(r,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=L(v,[["render",I]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:M},props:Object.keys(a),setup(){return{...e}},template:`
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
