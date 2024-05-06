import{j as H,e as n,I as V,J as U,K as O,L as u,A as t,M as s}from"./vue.esm-bundler-3416a090.js";import{F as B}from"./FSSelectField-a5281e4f.js";import{F as j}from"./VField-d3f61dc4.js";import{F as A}from"./FSClock-ca18828e.js";import{_ as f}from"./FSRow-5edf997c.js";import{u as N}from"./useRules-5e1988ee.js";import{u as R,C as m}from"./useColors-1faf681b.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as M}from"./FSCol-5731c3c4.js";import"./FSDialogMenu-7a6cda41.js";import"./FSCard-92f27951.js";import"./css-69ed11d9.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./forwardRefs-e658ad70.js";import"./useRender-fb717f1b.js";import"./theme-2c100cd8.js";import"./proxiedModel-868611da.js";import"./loader-b2c56b78.js";import"./color-5c733e3b.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./locale-be130c16.js";import"./rounded-e101edac.js";import"./dimensions-97f2f62c.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./transition-6086c96b.js";import"./VDefaultsProvider-ef2fd514.js";import"./FSRadioGroup-185a97ce.js";import"./FSIcon-f518d728.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./VSelectionControl-0b3e2526.js";import"./density-174ddef7.js";import"./index-a9118fe7.js";import"./VLabel-793ed17d.js";import"./FSCheckbox-422b3b91.js";import"./VInput-77c4eaa4.js";import"./index-46378e0b.js";import"./FSFadeOut-8955926a.js";import"./useDebounce-736cfd0a.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSTextField-bb895cdf.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./VSelect-f25e0916.js";import"./VMenu-39a0be1f.js";import"./ssrBoot-c0668163.js";import"./VSpacer-819449a6.js";import"./border-1657a325.js";import"./elevation-9288a0e5.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";import"./VSlideGroup-057adefe.js";import"./goto-8a93c650.js";import"./group-f3cba4ff.js";import"./FSSlider-e55ae7d0.js";import"./VSlider-2ab627b9.js";import"./FSText-4221a42d.js";import"./useAppTimeZone-045fd735.js";import"./useTranslations-ff263049.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var b=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(b||{});const v=H({name:"FSTimeSlotField",components:{FSSelectField:B,FSBaseField:j,FSClock:A,FSRow:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,blurred:S,getMessages:g}=N(),{getColors:d}=R(),r=d(m.Error),o=d(m.Light),i=d(m.Dark),T=Object.keys(b).reduce((l,c)=>(isNaN(Number(c))&&l.push({id:b[c],label:c}),l),[]),$=n(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":r.base,"--fs-time-slot-field-error-border-color":r.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),k=n(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),w=n(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),E=n(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:T,validateOn:y,ColorEnum:m,dayStart:k,messages:E,blurred:S,dayEnd:w,style:$,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function I(e,a,y,S,g,d){const r=V("FSSelectField"),o=V("FSClock"),i=V("FSBaseField");return U(),O(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:u(()=>[t(f,null,{default:u(()=>[t(f,{wrap:!1},{default:u(()=>[t(r,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{wrap:!1},{default:u(()=>[t(r,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=L(v,[["render",I]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:M},props:Object.keys(a),setup(){return{...e}},template:`
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
