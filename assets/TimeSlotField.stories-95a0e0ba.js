import{g as M,j as b,J as E,K as u,L as m,M as a,R as v,z as o,V as r,N as V,O as C,P as p,Y as z,Z as P,S as I,U as W}from"./vue.esm-bundler-0a1af505.js";import{F as J}from"./FSSelectField-09a9aa59.js";import{F as K}from"./FSClock-77c7a82f.js";import{_ as f}from"./FSSpan-50615fe3.js";import{_ as T}from"./FSCol-0a1a151b.js";import{_ as c}from"./FSRow-f7e9ea33.js";import{u as Y}from"./VField-96becc41.js";import{u as Z,C as S}from"./useColors-1745df70.js";import{u as G}from"./useSlots-de2ef136.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as X}from"./VSpacer-638ccd4e.js";import"./VSelect-52b15ff5.js";import"./VTextField-4fd69d43.js";import"./VInput-4e45c526.js";import"./useRender-76465e3d.js";import"./theme-8d83670f.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./VIcon-4501998f.js";import"./color-84472fbe.js";import"./tag-6ffe4ba6.js";import"./index-9b6ba610.js";import"./transition-afc70ddd.js";import"./density-cfa18558.js";import"./forwardRefs-e658ad70.js";import"./index-411e5c5c.js";import"./VOverlay-5bb0ade1.js";import"./loader-780645af.js";import"./rounded-caec20b0.js";import"./dimensions-41d36b25.js";import"./display-58dfd5ea.js";import"./lazy-2c8cbded.js";import"./router-1b110d23.js";import"./VMenu-35d64e8e.js";import"./VDefaultsProvider-76561179.js";import"./ssrBoot-e032939a.js";import"./border-70ae5555.js";import"./elevation-68e8c545.js";import"./index-ee92f8e8.js";import"./VImg-1b868636.js";import"./VDivider-f90b9c24.js";import"./resizeObserver-366ccb2e.js";import"./VSelectionControl-5a22cf17.js";import"./VSlideGroup-c413928b.js";import"./group-197554d7.js";import"./FSSlider-41ae6d08.js";import"./VSlider-2d151f11.js";import"./FSText-fa675dd3.js";import"./useTimeZone-563b99e3.js";import"./useTranslations-c047d5be.js";import"./css-403c87e6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var q=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(q||{});const N=M({name:"FSTimeSlotField",components:{FSSelectField:J,FSClock:K,FSSpan:f,FSCol:T,FSRow:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{validateOn:$,blurred:k,getMessages:w}=Y(),{getColors:y}=Z(),{slots:s}=G();delete s.label,delete s.description;const d=y(S.Error),i=y(S.Light),n=y(S.Dark),F=Object.keys(q).reduce((l,h)=>(isNaN(Number(h))&&l.push({id:q[h],label:h}),l),[]),R=b(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":i.dark,"--fs-time-slot-field-color":n.base,"--fs-time-slot-field-active-border-color":n.dark,"--fs-time-slot-field-error-color":d.base,"--fs-time-slot-field-error-border-color":d.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":i.base,"--fs-time-slot-field-color":i.dark,"--fs-time-slot-field-active-border-color":i.base}),A=b(()=>e.modelValue[1][0]===7?7:e.modelValue[0][0]),B=b(()=>e.modelValue[0][0]===7?7:e.modelValue[1][0]),L=b(()=>e.messages??w(e.modelValue,e.rules));return{daysObject:F,validateOn:$,ColorEnum:S,dayStart:A,messages:L,blurred:k,dayEnd:B,slots:s,style:R,onChangeHourStart:l=>{t("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]])},onChangeDayStart:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[1][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]])},onChangeHourEnd:l=>{t("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]])},onChangeDayEnd:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[0][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]])}}}});function D(e,t,$,k,w,y){const s=E("FSSelectField"),d=E("FSClock");return u(),m(T,null,{default:a(()=>[e.$props.hideHeader?p("",!0):v(e.$slots,"label",{key:0},()=>[o(c,{wrap:!1},{default:a(()=>[e.$props.label?(u(),m(f,{key:0,class:"fs-time-slot-field-label",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.$props.label),1)]),_:1},8,["style"])):p("",!0),e.$props.label&&e.$props.required?(u(),m(f,{key:1,class:"fs-time-slot-field-label",style:r([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[V(" * ")]),_:1},8,["style"])):p("",!0),o(X,{style:{"min-width":"40px"}}),e.messages.length>0?(u(),m(f,{key:2,class:"fs-time-slot-field-messages",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.messages.join(", ")),1)]),_:1},8,["style"])):p("",!0)]),_:1})]),o(c,null,{default:a(()=>[o(c,{wrap:!1},{default:a(()=>[o(s,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},z({_:2},[P(e.slots,(i,n)=>({name:n,fn:a(F=>[v(e.$slots,n,I(W(F)))])}))]),1032,["editable","items","style","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:3}),o(c,{wrap:!1},{default:a(()=>[o(s,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:3}),v(e.$slots,"description",{},()=>[e.$props.description?(u(),m(f,{key:0,class:"fs-time-slot-field-description",font:"text-underline",style:r(e.style)},{default:a(()=>[V(C(e.$props.description),1)]),_:1},8,["style"])):p("",!0)])]),_:3})}const j=Q(N,[["render",D]]);N.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][]"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const ll={title:"Foundation/Shared/Input fields/TimeSlotField",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:t})=>({components:{FSTimeSlotField:j,FSCol:T},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const tl=["Variations"];export{g as Variations,tl as __namedExportsOrder,ll as default};
