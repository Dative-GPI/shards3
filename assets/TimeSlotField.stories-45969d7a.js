import{j as M,e as y,I as E,J as u,K as m,L as a,R as v,v as o,M as r,U as b,V as C,N as f,_ as I,Y as W,W as z,X as P}from"./vue.esm-bundler-0c8496bd.js";import{F as J}from"./FSSelectField-3d61a361.js";import{F as K}from"./FSClock-da8996f0.js";import{_ as p}from"./FSSpan-dff588c4.js";import{_ as T}from"./FSCol-0a323bdc.js";import{_ as c}from"./FSRow-547598b4.js";import{u as X}from"./useRules-a67d9042.js";import{u as Y,C as S}from"./useColors-b1c35b1c.js";import{u as G}from"./useSlots-d0001844.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSpacer-989c3452.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./css-0fb78066.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./theme-3745e9f1.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSIcon-e8919096.js";import"./VSelect-f6dc4f4d.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VOverlay-471318e4.js";import"./dimensions-13ab2ad3.js";import"./display-237b16bb.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./elevation-00653c06.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./VSlideGroup-8312a613.js";import"./group-8484219c.js";import"./FSSlider-08e439e4.js";import"./VSlider-48ac0e6b.js";import"./FSText-107f4924.js";import"./useAppTimeZone-b6ddcce6.js";import"./useTranslations-e7f63e09.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var q=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(q||{});const N=M({name:"FSTimeSlotField",components:{FSSelectField:J,FSClock:K,FSSpan:p,FSCol:T,FSRow:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{validateOn:$,blurred:k,getMessages:w}=X(),{getColors:V}=Y(),{slots:d}=G();delete d.label,delete d.description;const s=V(S.Error),i=V(S.Light),n=V(S.Dark),F=Object.keys(q).reduce((l,h)=>(isNaN(Number(h))&&l.push({id:q[h],label:h}),l),[]),R=y(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":i.dark,"--fs-time-slot-field-color":n.base,"--fs-time-slot-field-active-border-color":n.dark,"--fs-time-slot-field-error-color":s.base,"--fs-time-slot-field-error-border-color":s.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":i.base,"--fs-time-slot-field-color":i.dark,"--fs-time-slot-field-active-border-color":i.base}),A=y(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),B=y(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),L=y(()=>e.messages??w(e.modelValue,e.rules));return{daysObject:F,validateOn:$,ColorEnum:S,dayStart:A,messages:L,blurred:k,dayEnd:B,slots:d,style:R,onChangeHourStart:l=>{if(e.modelValue){t("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}t("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}t("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}t("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){t("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}t("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}t("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,0],[l,0]])}}}});function D(e,t,$,k,w,V){const d=E("FSSelectField"),s=E("FSClock");return u(),m(T,null,{default:a(()=>[e.$props.hideHeader?f("",!0):v(e.$slots,"label",{key:0},()=>[o(c,{wrap:!1},{default:a(()=>[e.$props.label?(u(),m(p,{key:0,class:"fs-time-slot-field-label",font:"text-overline",style:r(e.style)},{default:a(()=>[b(C(e.$props.label),1)]),_:1},8,["style"])):f("",!0),e.$props.label&&e.$props.required?(u(),m(p,{key:1,class:"fs-time-slot-field-label",style:r([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[b(" * ")]),_:1},8,["style"])):f("",!0),o(Z,{style:{"min-width":"40px"}}),e.messages.length>0?(u(),m(p,{key:2,class:"fs-time-slot-field-messages",font:"text-overline",style:r(e.style)},{default:a(()=>[b(C(e.messages.join(", ")),1)]),_:1},8,["style"])):f("",!0)]),_:1})]),o(c,null,{default:a(()=>[o(c,{wrap:!1},{default:a(()=>[o(d,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},I({_:2},[W(e.slots,(i,n)=>({name:n,fn:a(F=>[v(e.$slots,n,z(P(F)))])}))]),1032,["editable","items","style","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),o(s,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:3}),o(c,{wrap:!1},{default:a(()=>[o(d,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),o(s,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:3}),v(e.$slots,"description",{},()=>[e.$props.description?(u(),m(p,{key:0,class:"fs-time-slot-field-description",font:"text-underline",style:r(e.style)},{default:a(()=>[b(C(e.$props.description),1)]),_:1},8,["style"])):f("",!0)])]),_:3})}const j=Q(N,[["render",D]]);N.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const nl={title:"Foundation/Shared/Input fields/TimeSlotField",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:t})=>({components:{FSTimeSlotField:j,FSCol:T},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var U,H,O;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ul=["Variations"];export{g as Variations,ul as __namedExportsOrder,nl as default};
