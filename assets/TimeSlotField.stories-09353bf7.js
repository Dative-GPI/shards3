import{g as M,j as b,H as E,I as u,J as m,K as a,P as v,z as o,S as r,L as V,M as C,N as p,W as z,X as I,Q as P,R as W}from"./vue.esm-bundler-72feb788.js";import{F as J}from"./FSSelectField-e977292e.js";import{F as K}from"./FSClock-7d3ec064.js";import{_ as f}from"./FSSpan-0b48c446.js";import{_ as T}from"./FSCol-df85c70b.js";import{_ as c}from"./FSRow-ae483077.js";import{u as Q}from"./VField-127bd01f.js";import{u as X,C as S}from"./useColors-6caee65d.js";import{u as G}from"./useSlots-a83038d8.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VSpacer-3481543d.js";import"./VSelect-a873d51b.js";import"./VTextField-6c3de945.js";import"./VInput-d8a8ef30.js";import"./useRender-dfda60e7.js";import"./theme-dfac1c87.js";import"./locale-6e33b40c.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./tag-4c4a02ef.js";import"./index-1ae89502.js";import"./transition-2c0bfa39.js";import"./density-849fb56f.js";import"./forwardRefs-e658ad70.js";import"./index-2f035a23.js";import"./VOverlay-d9e6b90e.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./dimensions-5bfc9d84.js";import"./display-b99e0d28.js";import"./lazy-b3876034.js";import"./router-cb1ba247.js";import"./VMenu-b3b1ac01.js";import"./VDefaultsProvider-45b29f9e.js";import"./ssrBoot-76ac3587.js";import"./border-0ea674af.js";import"./elevation-4bc1fa4c.js";import"./index-4726a84c.js";import"./VImg-1614ce10.js";import"./VDivider-6bf45fec.js";import"./resizeObserver-a19810f7.js";import"./VSelectionControl-00322409.js";import"./VSlideGroup-57d46989.js";import"./group-6fcd4563.js";import"./FSSlider-a5499c48.js";import"./VSlider-4f8fc827.js";import"./FSText-c27aeba2.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";import"./css-a2b3c3ca.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";var q=(e=>(e[e.Monday=0]="Monday",e[e.Tuesday=1]="Tuesday",e[e.Wednesday=2]="Wednesday",e[e.Thursday=3]="Thursday",e[e.Friday=4]="Friday",e[e.Saturday=5]="Saturday",e[e.Sunday=6]="Sunday",e[e.AllDays=7]="AllDays",e))(q||{});const N=M({name:"FSTimeSlotField",components:{FSSelectField:J,FSClock:K,FSSpan:f,FSCol:T,FSRow:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{validateOn:$,blurred:k,getMessages:w}=Q(),{getColors:y}=X(),{slots:s}=G();delete s.label,delete s.description;const d=y(S.Error),i=y(S.Light),n=y(S.Dark),F=Object.keys(q).reduce((l,h)=>(isNaN(Number(h))&&l.push({id:q[h],label:h}),l),[]),R=b(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":i.dark,"--fs-time-slot-field-color":n.base,"--fs-time-slot-field-active-border-color":n.dark,"--fs-time-slot-field-error-color":d.base,"--fs-time-slot-field-error-border-color":d.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":i.base,"--fs-time-slot-field-color":i.dark,"--fs-time-slot-field-active-border-color":i.base}),A=b(()=>e.modelValue[1][0]===7?7:e.modelValue[0][0]),B=b(()=>e.modelValue[0][0]===7?7:e.modelValue[1][0]),L=b(()=>e.messages??w(e.modelValue,e.rules));return{daysObject:F,validateOn:$,ColorEnum:S,dayStart:A,messages:L,blurred:k,dayEnd:B,slots:s,style:R,onChangeHourStart:l=>{t("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]])},onChangeDayStart:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[1][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]])},onChangeHourEnd:l=>{t("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]])},onChangeDayEnd:l=>{if(l===7){t("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}if(e.modelValue[0][0]===7){t("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}t("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]])}}}});function D(e,t,$,k,w,y){const s=E("FSSelectField"),d=E("FSClock");return u(),m(T,null,{default:a(()=>[e.$props.hideHeader?p("",!0):v(e.$slots,"label",{key:0},()=>[o(c,{wrap:!1},{default:a(()=>[e.$props.label?(u(),m(f,{key:0,class:"fs-time-slot-field-label",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.$props.label),1)]),_:1},8,["style"])):p("",!0),e.$props.label&&e.$props.required?(u(),m(f,{key:1,class:"fs-time-slot-field-label",style:r([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[V(" * ")]),_:1},8,["style"])):p("",!0),o(Z,{style:{"min-width":"40px"}}),e.messages.length>0?(u(),m(f,{key:2,class:"fs-time-slot-field-messages",font:"text-overline",style:r(e.style)},{default:a(()=>[V(C(e.messages.join(", ")),1)]),_:1},8,["style"])):p("",!0)]),_:1})]),o(c,null,{default:a(()=>[o(c,{wrap:!1},{default:a(()=>[o(s,{editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},z({_:2},[I(e.slots,(i,n)=>({name:n,fn:a(F=>[v(e.$slots,n,P(W(F)))])}))]),1032,["editable","items","style","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:3}),o(c,{wrap:!1},{default:a(()=>[o(s,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:r(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),o(d,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,reminder:!1,slider:!1,style:r(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:3}),v(e.$slots,"description",{},()=>[e.$props.description?(u(),m(f,{key:0,class:"fs-time-slot-field-description",font:"text-underline",style:r(e.style)},{default:a(()=>[V(C(e.$props.description),1)]),_:1},8,["style"])):p("",!0)])]),_:3})}const j=Y(N,[["render",D]]);N.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][]"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const el={title:"Foundation/Shared/Input fields/TimeSlotField",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:t})=>({components:{FSTimeSlotField:j,FSCol:T},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var H,U,O;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(U=g.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const ll=["Variations"];export{g as Variations,ll as __namedExportsOrder,el as default};
