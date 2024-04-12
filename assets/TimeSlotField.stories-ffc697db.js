import{j as M,e as y,J as E,K as u,L as m,M as a,R as v,z as o,V as r,N as b,O as C,P as f,Y as z,Z as P,S as I,U as W}from"./vue.esm-bundler-a79f6a7e.js";import{F as J}from"./FSSelectField-0551c6f1.js";import{F as K}from"./FSClock-ac81e4aa.js";import{_ as p}from"./FSSpan-6870f5d7.js";import{_ as T}from"./FSCol-bf5a0ca3.js";import{_ as c}from"./FSRow-997087e7.js";import{u as Y}from"./useRules-f2fe91c3.js";import{u as Z,C as S}from"./useColors-060213ee.js";import{u as G}from"./useSlots-6a823081.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSpacer-0bffa310.js";import"./VSelect-a1c81aab.js";import"./VTextField-31dab154.js";import"./VField-311790ee.js";import"./index-21b5e00b.js";import"./useRender-b11abf1d.js";import"./theme-1ec486f5.js";import"./transition-5598497b.js";import"./VLabel-e2aed9e2.js";import"./VInput-6b3c87b1.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./VIcon-9404a2c9.js";import"./color-4fa560db.js";import"./tag-f688eb88.js";import"./density-4d7bebe4.js";import"./loader-5621d579.js";import"./intersectionObserver-ca237ead.js";import"./rounded-5d5afca1.js";import"./VDefaultsProvider-151583b9.js";import"./forwardRefs-e658ad70.js";import"./index-3d25a1c3.js";import"./VOverlay-d699aad9.js";import"./dimensions-ba559413.js";import"./display-7eefeb5d.js";import"./lazy-1267f9fb.js";import"./router-8d3884f9.js";import"./VMenu-84de242c.js";import"./ssrBoot-4b3aca91.js";import"./border-775a28ed.js";import"./elevation-3507830c.js";import"./index-755a3767.js";import"./VImg-679a1f09.js";import"./VDivider-6955d14a.js";import"./resizeObserver-c5cea584.js";import"./VCheckboxBtn-03eab5ea.js";import"./VSelectionControl-afed9b27.js";import"./VSlideGroup-f0d4a7a0.js";import"./group-49850006.js";import"./FSSlider-93032308.js";import"./VSlider-cbcdd9b3.js";import"./FSText-fa0cf7e3.js";import"./useAppTimeZone-230000f5.js";import"./useTranslations-2ad33056.js";import"./css-6f95cab1.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var q=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(q||{});const N=M({name:"FSTimeSlotField",components:{FSSelectField:J,FSClock:K,FSSpan:p,FSCol:T,FSRow:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{validateOn:$,blurred:k,getMessages:w}=Y(),{getColors:V}=Z(),{slots:d}=G();delete d.label,delete d.description;const s=V(S.Error),i=V(S.Light),n=V(S.Dark),F=Object.keys(q).reduce((l,h)=>(isNaN(Number(h))&&l.push({id:q[h],label:h}),l),[]),R=y(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":i.dark,"--fs-time-slot-field-color":n.base,"--fs-time-slot-field-active-border-color":n.dark,"--fs-time-slot-field-error-color":s.base,"--fs-time-slot-field-error-border-color":s.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":i.base,"--fs-time-slot-field-color":i.dark,"--fs-time-slot-field-active-border-color":i.base}),A=y(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),B=y(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),L=y(()=>e.messages??w(e.modelValue,e.rules));return{daysObject:F,validateOn:$,ColorEnum:S,dayStart:A,messages:L,blurred:k,dayEnd:B,slots:d,style:R,onChangeHourStart:l=>{if(e.modelValue){t("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}t("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}t("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}t("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){t("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}t("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}t("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,0],[l,0]])}}}});function D(e,t,$,k,w,V){const d=E("FSSelectField"),s=E("FSClock");return u(),m(T,null,{default:a(()=>[e.$props.hideHeader?f("",!0):v(e.$slots,"label",{key:0},()=>[o(c,{wrap:!1},{default:a(()=>[e.$props.label?(u(),m(p,{key:0,class:"fs-time-slot-field-label",font:"text-overline",style:r(e.style)},{default:a(()=>[b(C(e.$props.label),1)]),_:1},8,["style"])):f("",!0),e.$props.label&&e.$props.required?(u(),m(p,{key:1,class:"fs-time-slot-field-label",style:r([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[b(" * ")]),_:1},8,["style"])):f("",!0),o(X,{style:{"min-width":"40px"}}),e.messages.length>0?(u(),m(p,{key:2,class:"fs-time-slot-field-messages",font:"text-overline",style:r(e.style)},{default:a(()=>[b(C(e.messages.join(", ")),1)]),_:1},8,["style"])):f("",!0)]),_:1})]),o(c,null,{default:a(()=>[o(c,{wrap:!1},{default:a(()=>[o(d,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},z({_:2},[P(e.slots,(i,n)=>({name:n,fn:a(F=>[v(e.$slots,n,I(W(F)))])}))]),1032,["editable","items","style","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),o(s,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:3}),o(c,{wrap:!1},{default:a(()=>[o(d,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),o(s,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:3}),v(e.$slots,"description",{},()=>[e.$props.description?(u(),m(p,{key:0,class:"fs-time-slot-field-description",font:"text-underline",style:r(e.style)},{default:a(()=>[b(C(e.$props.description),1)]),_:1},8,["style"])):f("",!0)])]),_:3})}const j=Q(N,[["render",D]]);N.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const rl={title:"Foundation/Shared/Input fields/TimeSlotField",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:t})=>({components:{FSTimeSlotField:j,FSCol:T},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var U,O,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const dl=["Variations"];export{g as Variations,dl as __namedExportsOrder,rl as default};
