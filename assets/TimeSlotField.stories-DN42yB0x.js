import{d as E,c as i,y as b,z as H,A as O,B as n,L as t,O as s}from"./vue.esm-bundler-BATn8cDU.js";import{F as U}from"./FSSelectField-DODp_3rV.js";import{F as D}from"./FSBaseField-Dd85ojn4.js";import{F as B}from"./FSClock-C5ovYVtR.js";import{_ as p}from"./FSRow-Gvoj2sTW.js";import{u as j}from"./useRules-C6ry6kys.js";import{u as N,C as u}from"./useColors-BHn59yMM.js";import{D as S}from"./dateEnums-Ce7n-5qd.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as A}from"./FSCol-D9tDKebi.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./forwardRefs-DWGaNmQL.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./proxiedModel-D0bPfire.js";import"./anchor-CBLqXyZM.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./locale-Cm_eUAdw.js";import"./router-BSq-7NWC.js";import"./transition-O2x8Myu8.js";import"./VDefaultsProvider-DeTRucHm.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./FSIcon-CM3DCfji.js";import"./VIcon-BgP_kyAH.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./VSelectionControl-OgAVLyH5.js";import"./density-BzC6UB2b.js";import"./index-RhlTNW4L.js";import"./VLabel-Bh2Q5uKK.js";import"./FSTextField-CICw89u7.js";import"./FSButton-CvqXFT9l.js";import"./FSClickable-B9o4BEyu.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./VInput-sarfrtTX.js";import"./loader-YJ_823dI.js";import"./rounded-BwvX6bZn.js";import"./index-Bv2UUMCu.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./uuid-DTaye2KM.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./VSpacer-Bp_e_Kvt.js";import"./border-BU-G8uSh.js";import"./elevation-oWdkHiXv.js";import"./VImg-euCAhqKz.js";import"./VSelect-Du7HAR1V.js";import"./VMenu-BAsGaafY.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSSlider-CvS_FhE5.js";import"./VSlider-BaLtJ_FD.js";import"./useAppTimeZone-DiegiNYY.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./useTranslations-C_i4rqaX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";const v=E({name:"FSTimeSlotField",components:{FSSelectField:U,FSBaseField:D,FSClock:B,FSRow:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:y,getMessages:g}=j(),{getColors:d}=N(),f=d(u.Error),o=d(u.Light),r=d(u.Dark),c=Object.keys(S).reduce((l,V)=>(isNaN(Number(V))&&l.push({id:S[V],label:V}),l),[]),T=i(()=>e.editable?{"--fs-time-slot-field-cursor":"text","--fs-time-slot-field-border-color":o.dark,"--fs-time-slot-field-color":r.base,"--fs-time-slot-field-active-border-color":r.dark,"--fs-time-slot-field-error-color":f.base,"--fs-time-slot-field-error-border-color":f.base}:{"--fs-time-slot-field-cursor":"default","--fs-time-slot-field-border-color":o.base,"--fs-time-slot-field-color":o.dark,"--fs-time-slot-field-active-border-color":o.base}),$=i(()=>e.modelValue?e.modelValue[1][0]===7?7:e.modelValue[0][0]:0),k=i(()=>e.modelValue?e.modelValue[0][0]===7?7:e.modelValue[1][0]:0),w=i(()=>e.messages??g(e.modelValue,e.rules));return{daysObject:c,validateOn:y,ColorEnum:u,dayStart:$,messages:w,dayEnd:k,style:T,onChangeHourStart:l=>{if(e.modelValue){a("update:modelValue",[[e.modelValue[0][0],l],e.modelValue[1]]);return}a("update:modelValue",[[0,l],[0,0]])},onChangeDayStart:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[1][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,e.modelValue[0][1]],e.modelValue[1]]);return}a("update:modelValue",[[l,0],[l,0]])},onChangeHourEnd:l=>{if(e.modelValue){a("update:modelValue",[e.modelValue[0],[e.modelValue[1][0],l]]);return}a("update:modelValue",[[0,0],[0,l]])},onChangeDayEnd:l=>{if(l===7){if(e.modelValue){a("update:modelValue",[[7,e.modelValue[0][1]],[7,e.modelValue[1][1]]]);return}a("update:modelValue",[[7,0],[7,0]]);return}if(e.modelValue){if(e.modelValue[0][0]===7){a("update:modelValue",[[l,e.modelValue[0][1]],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[e.modelValue[0],[l,e.modelValue[1][1]]]);return}a("update:modelValue",[[l,0],[l,0]])}}}});function L(e,a,y,g,d,f){const o=b("FSSelectField"),r=b("FSClock"),c=b("FSBaseField");return H(),O(c,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:n(()=>[t(p,null,{default:n(()=>[t(p,{wrap:!1},{default:n(()=>[t(o,{validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayStart,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","editable","validateOn","rules","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[0][1],"onUpdate:modelValue":e.onChangeHourStart},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1}),t(p,{wrap:!1},{default:n(()=>[t(o,{class:"fs-time-slot-field-select",editable:e.$props.editable,items:e.daysObject,hideHeader:!0,clearable:!1,style:s(e.style),modelValue:e.dayEnd,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["editable","items","style","modelValue","onUpdate:modelValue"]),t(r,{class:"fs-time-slot-field-number",editable:e.$props.editable,color:e.ColorEnum.Light,slider:!1,style:s(e.style),modelValue:e.$props.modelValue[1][1],"onUpdate:modelValue":e.onChangeHourEnd},null,8,["editable","color","style","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","editable","label","messages"])}const q=R(v,[["render",L]]);v.__docgenInfo={displayName:"FSTimeSlotField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[][] | null"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeSlotField.vue"]};const ol={title:"Foundation/Shared/Input fields/TimeSlotField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value0:[[0,0],[0,0]],value1:[[2,252e5],[2,27e6]],value2:[[7,36e5],[2,72e5]]}},render:(e,{argTypes:a})=>({components:{FSTimeSlotField:q,FSCol:A},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,h,C;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const tl=["Variations"];export{m as Variations,tl as __namedExportsOrder,ol as default};
