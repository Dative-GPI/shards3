import{j as H,e as n,I as V,J as U,K as O,L as u,A as t,M as s}from"./vue.esm-bundler-41eda46b.js";import{F as B}from"./FSSelectField-d4188bf5.js";import{F as j}from"./VField-095c5517.js";import{F as A}from"./FSClock-cdcaf66a.js";import{_ as f}from"./FSRow-1508d56d.js";import{u as N}from"./useRules-d33c1ab7.js";import{u as R,C as m}from"./useColors-c7c61044.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as M}from"./FSCol-282cc158.js";import"./FSDialogMenu-848f1e87.js";import"./FSCard-5c9795f4.js";import"./css-35e8563f.js";import"./VDialog-84dcd607.js";import"./VOverlay-d8fd5084.js";import"./forwardRefs-e658ad70.js";import"./useRender-55bb8ab6.js";import"./theme-720d9fd7.js";import"./proxiedModel-a34e17b7.js";import"./loader-0baaac91.js";import"./color-92f22fcc.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./locale-850d67a0.js";import"./rounded-e85715e4.js";import"./dimensions-9ac12c80.js";import"./display-a55575e0.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./transition-a4f3f1b4.js";import"./VDefaultsProvider-b40931ed.js";import"./FSRadioGroup-06f5aad9.js";import"./FSIcon-33b1b769.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./VSelectionControl-09c80f59.js";import"./density-a7a72377.js";import"./index-1668950c.js";import"./VLabel-484dc627.js";import"./FSCheckbox-fb1efdda.js";import"./VInput-8f2c12b1.js";import"./index-3d73431e.js";import"./FSFadeOut-10d5fde1.js";import"./useDebounce-c713d9ff.js";import"./FSButton-6f4c5e31.js";import"./FSClickable-25f814f4.js";import"./FSTextField-037d24b6.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./VSelect-343e1eb1.js";import"./VMenu-9445716e.js";import"./ssrBoot-5c61be23.js";import"./VSpacer-19440644.js";import"./border-ac5393da.js";import"./elevation-c799c3f5.js";import"./VImg-8e58296a.js";import"./VDivider-6afe813a.js";import"./VSlideGroup-be2a9962.js";import"./goto-e333168a.js";import"./group-4938f20b.js";import"./FSSlider-ef6317af.js";import"./VSlider-7b387e51.js";import"./useAppTimeZone-fd64682f.js";import"./useTranslations-3bd97805.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var b=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(b||{});const v=H({name:"FSTimeSlotField",components:{FSSelectField:B,FSBaseField:j,FSClock:A,FSRow:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,blurred:S,getMessages:g}=N(),{getColors:d}=R(),r=d(m.Error),o=d(m.Light),i=d(m.Dark),T=Object.keys(b).reduce((l,c)=>(isNaN(Number(c))&&l.push({id:b[c],label:c}),l),[]),$=n(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":i.base,"--fs-time-slot-field-active-border-color":i.dark,"--fs-time-slot-field-error-color":r.base,"--fs-time-slot-field-error-border-color":r.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),k=n(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),w=n(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),E=n(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:T,validateOn:y,ColorEnum:m,dayStart:k,messages:E,blurred:S,dayEnd:w,style:$,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function I(e,a,y,S,g,d){const r=V("FSSelectField"),o=V("FSClock"),i=V("FSBaseField");return U(),O(i,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:u(()=>[t(f,null,{default:u(()=>[t(f,{wrap:!1},{default:u(()=>[t(r,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),rules:e.$props.rules,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["editable","items","style","rules","validateOn","validationValue","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{wrap:!1},{default:u(()=>[t(r,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(o,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["label","description","hideHeader","required","editable","messages"])}const q=L(v,[["render",I]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:M},props:Object.keys(a),setup(){return{...e}},template:`
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
