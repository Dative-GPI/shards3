import{d as I,b as T,c as p,y as F,z as L,A as z,B as f,K as v,m as M,O as w,P as R,L as C,M as $,N as k}from"./vue.esm-bundler-DUki7rNA.js";import{F as W}from"./FSNumberField-CwGfGYoO.js";import{F as K}from"./FSSelectField-DFFcH9GM.js";import{F as G}from"./VField-BJJocrwv.js";import{_ as y}from"./FSRow-CHgEOZQb.js";import{t as c,g as O,c as J}from"./rules-YgaBz0hw.js";import{u as Q}from"./useRules-ChvLepw4.js";import{u as X,C as S}from"./useColors-HWn2iBmk.js";import{u as Y}from"./useSlots-BZu_lZyn.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ee}from"./FSForm-BLZ-2-aU.js";import{_ as x}from"./FSCol-BBaW1DrL.js";import"./FSTextField-BZoPMSW0.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./VProgressCircular-Cqa5rfFs.js";import"./color-B6JLWHIR.js";import"./theme-BdipdDNo.js";import"./useRender-pAH_6Aah.js";import"./resizeObserver-DQ47gJ8C.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./FSSpan-DUTdSgpN.js";import"./FSIcon-CSwom3lG.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./density-CE9JT2ZV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeJtk2ua.js";import"./FSDialogMenu-5l5lej0t.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./anchor-32zVg6UX.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./router-C5N3y4B3.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./VLabel-URjizS1I.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./VSpacer-CujVv6t6.js";import"./border-BeL02A28.js";import"./elevation-B5zwTzN8.js";import"./rounded-CuOTz_ni.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VSelect-Doh8ERno.js";import"./VMenu-BMkRa5on.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./loader-B-LDUF0l.js";import"./useAppTimeZone-BvKhOiUD.js";import"./useTranslations-LhdkJQ98.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const P=I({name:"FSTimeField",components:{FSNumberField:W,FSSelectField:K,FSBaseField:G,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:q,getMessages:V}=Q(),{getColors:d}=X(),{slots:o}=Y();delete o.label,delete o.description;const u=d(S.Error),s=d(S.Light),m=d(S.Dark),t=T(0),l=T(c[0]);e.modelValue&&(O(e.modelValue)!==0?(l.value=c[O(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue);const n=p(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":s.dark,"--fs-time-field-color":m.base,"--fs-time-field-active-border-color":m.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":s.base,"--fs-time-field-color":s.dark,"--fs-time-field-active-border-color":s.base}),A=p(()=>Object.keys(o).filter(r=>r.startsWith("number-")).reduce((r,i)=>(r[i.substring(7)]=o[i],r),{})),D=p(()=>Object.keys(o).filter(r=>r.startsWith("select-")).reduce((r,i)=>(r[i.substring(7)]=o[i],r),{})),E=p(()=>e.messages??V(e.modelValue,e.rules));return{selectedUnit:l,numberSlots:A,selectSlots:D,validateOn:q,innerTime:t,timeScale:c,messages:E,style:n,onSubmitTimeScale:r=>{l.value=c.find(i=>i.id===r),a("update:modelValue",t.value*l.value.id)},onSubmitValue:r=>{t.value=r,a("update:modelValue",t.value*l.value.id)}}}});function re(e,a,q,V,d,o){const u=F("FSNumberField"),s=F("FSSelectField"),m=F("FSBaseField");return L(),z(m,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:f(()=>[v(y,null,{default:f(()=>[v(u,M({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),w({_:2},[R(e.numberSlots,(t,l)=>({name:l,fn:f(n=>[C(e.$slots,l,$(k(n)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),v(s,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},w({_:2},[R(e.selectSlots,(t,l)=>({name:l,fn:f(n=>[C(e.$slots,l,$(k(n)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const h=Z(P,[["render",re]]);P.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};const vr={title:"Foundation/Shared/Input fields/TimeField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:3600,value3:691200}},render:(e,{argTypes:a})=>({components:{FSTimeField:h,FSCol:x},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:null,value2:3660,value3:null,rules:J}},render:(e,{argTypes:a})=>({components:{FSForm:ee,FSTimeField:h,FSCol:x,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var U,B,_;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 3600,
      value3: 691200
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeField,
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
      <FSTimeField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var N,H,j;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: 3660,
      value3: null,
      rules: TimeRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTimeField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: max 120 seconds"
          :rules="[args.rules.max(120)]"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTimeField
          label="Rules: required & max 7200 seconds & min 3600 seconds"
          :rules="[args.rules.required(), args.rules.max(7200), args.rules.min(3600)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const Sr=["Variations","Rules"];export{g as Rules,b as Variations,Sr as __namedExportsOrder,vr as default};
