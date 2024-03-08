import{G as M,e as b,_ as E,H as u,L as m,M as a,J as v,z as o,S as r,O as V,P as C,N as p,V as z,W as P,Q as W,R as I}from"./vue.esm-bundler-d8049c85.js";import{F as G}from"./FSSelectField-c0bef37d.js";import{F as J}from"./FSClock-a5ac622d.js";import{_ as f}from"./FSSpan-9f00eaf4.js";import{_ as T}from"./FSCol-39bd052c.js";import{_ as c}from"./FSRow-b5482a77.js";import{u as Q}from"./VField-98076a13.js";import{u as K,C as S}from"./useColors-5c9cff43.js";import{u as X}from"./useSlots-bdda8306.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSpacer-e253cf80.js";import"./VSelect-4008bbf6.js";import"./VTextField-bdebe004.js";import"./VInput-95d46afc.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./locale-0b822523.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./tag-fffb6ba6.js";import"./index-a9977cc4.js";import"./transition-a0827c0d.js";import"./density-de8a38cb.js";import"./forwardRefs-e658ad70.js";import"./index-d961be33.js";import"./VOverlay-0482e356.js";import"./loader-cb170f8e.js";import"./rounded-0d200380.js";import"./dimensions-c0ade26a.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./router-e2bea4dd.js";import"./VMenu-878df07f.js";import"./VDefaultsProvider-2b53b1ea.js";import"./ssrBoot-93e7847f.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./index-ea9d807b.js";import"./VImg-9cec152f.js";import"./VDivider-3e2a8435.js";import"./resizeObserver-76cdf9c3.js";import"./VSelectionControl-06ba5d17.js";import"./VSlideGroup-28438428.js";import"./group-9e62ecfa.js";import"./FSSlider-12eb108d.js";import"./VSlider-a1588a27.js";import"./FSText-776f12dd.js";import"./useTimeZone-01b1e25e.js";import"./useTranslations-503566cb.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var q=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(q||{});const N=M({name:"FSTimeSlotField",components:{FSSelectField:G,FSClock:J,FSSpan:f,FSCol:T,FSRow:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{validateOn:$,blurred:k,getMessages:w}=Q(),{getColors:y}=K(),{slots:s}=X();delete s.label,delete s.description;const d=y(S.Error),i=y(S.Light),n=y(S.Dark),F=Object.keys(q).reduce((l,h)=>(isNaN(Number(h))&&l.push({id:q[h],label:h}),l),[]),R=b(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":i.dark,"--fs-time-slot-field-color":n.base,"--fs-time-slot-field-active-border-color":n.dark,"--fs-time-slot-field-error-color":d.base,"--fs-time-slot-field-error-border-color":d.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":i.base,"--fs-time-slot-field-color":i.dark,"--fs-time-slot-field-active-border-color":i.base}),A=b(()=>e.modelValue[1][0]===7?7:e.modelValue[0][0]),B=b(()=>e.modelValue[0][0]===7?7:e.modelValue[1][0]),L=b(()=>e.messages??w(e.modelValue,e.rules));return{daysObject:F,validateOn:$,ColorEnum:S,dayStart:A,messages:L,blurred:k,dayEnd:B,slots:s,style:R,onChangeHourStart:l=>{t("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]])},onChangeDayStart:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[1][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]])},onChangeHourEnd:l=>{t("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]])},onChangeDayEnd:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[0][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]])}}}});function D(e,t,$,k,w,y){const s=E("FSSelectField"),d=E("FSClock");return u(),m(T,null,{default:a(()=>[e.$props.hideHeader?p("",!0):v(e.$slots,"label",{key:0},()=>[o(c,{wrap:!1},{default:a(()=>[e.$props.label?(u(),m(f,{key:0,class:"fs-time-slot-field-label",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.$props.label),1)]),_:1},8,["style"])):p("",!0),e.$props.label&&e.$props.required?(u(),m(f,{key:1,class:"fs-time-slot-field-label",style:r([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[V(" * ")]),_:1},8,["style"])):p("",!0),o(Z,{style:{"min-width":"40px"}}),e.messages.length>0?(u(),m(f,{key:2,class:"fs-time-slot-field-messages",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.messages.join(", ")),1)]),_:1},8,["style"])):p("",!0)]),_:1})]),o(c,null,{default:a(()=>[o(c,{wrap:!1},{default:a(()=>[o(s,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},z({_:2},[P(e.slots,(i,n)=>({name:n,fn:a(F=>[v(e.$slots,n,W(I(F)))])}))]),1032,["editable","items","style","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:3}),o(c,{wrap:!1},{default:a(()=>[o(s,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:3}),v(e.$slots,"description",{},()=>[e.$props.description?(u(),m(f,{key:0,class:"fs-time-slot-field-description",font:"text-underline",style:r(e.style)},{default:a(()=>[V(C(e.$props.description),1)]),_:1},8,["style"])):p("",!0)])]),_:3})}const j=Y(N,[["render",D]]);N.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][]"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const el={title:"Foundation/Shared/Input fields/TimeSlotField",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:t})=>({components:{FSTimeSlotField:j,FSCol:T},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var H,O,U;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ll=["Variations"];export{g as Variations,ll as __namedExportsOrder,el as default};
