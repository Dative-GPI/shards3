import{d as j,b as F,c as H,w as K,z as b,A as v,B as D,C as o,D as L,v as l,M as w,N as $,J as p,K as k,L as R,F as N,m as G}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as I}from"./FSDialogMenu-Rt_YvAbG.js";import{F as S}from"./FSTextField-C_L-5gHA.js";import{F as J}from"./FSCalendar-C0mHmiW1.js";import{F as s}from"./FSButton-jJkg4qCi.js";import{F as Q}from"./FSCard-ENPT7Hcj.js";import{F as d}from"./FSCol-BEvj3we4.js";import{C as T}from"./useColors-tmPxRJAs.js";import{u as W}from"./useDateFormat-B3lPS72n.js";import{u as X}from"./useRules-CJCAsX67.js";import{u as Y}from"./css-DTUiF03J.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _}from"./VMenu-CbEP2O2_.js";import{F as ee}from"./FSForm-Cy2PdXxq.js";import{F as M}from"./FSRow-k5pgBhR1.js";import{u as ae}from"./useAppTimeZone-8KaETkN8.js";import{D as re}from"./rules-DMXcKxHO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./rounded-NuUWeCiM.js";import"./index-O1RQoaVh.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./VLocaleProvider-aObatoJn.js";import"./VBtn-CAkWF00h.js";import"./border-CJvl-6Or.js";import"./elevation-Ba-uT6Vw.js";import"./group-Co3yQlsH.js";import"./index-BBm8PRb1.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSIcon-ChaYv6Le.js";import"./index-DfSX31J9.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CHmpEDXr.js";import"./time-DIVI7EoV.js";const P=j({name:"FSDateField",components:{FSDialogMenu:I,FSTextField:S,FSCalendar:J,FSButton:s,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{epochToLongDateFormat:V}=W(),{validateOn:h,getMessages:q}=X(),{isExtraSmall:C}=Y(),t=F(!1),m=F(!1),n=F(e.modelValue),r=H(()=>q(e.modelValue,e.rules)),u=()=>{e.editable&&(t.value=!0)},i=()=>{a("update:modelValue",null),n.value=null},g=()=>{a("update:modelValue",n.value),t.value=!1,m.value=!1};return K(()=>e.modelValue,()=>{z.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:C,validateOn:h,ColorEnum:T,innerDate:n,messages:r,dialog:t,menu:m,epochToLongDateFormat:V,openMobileOverlay:u,onSubmit:g,onClear:i}}});function le(e,a,V,h,q,C){const t=b("FSCalendar"),m=b("FSDialogMenu"),n=b("FSCard");return v(),D(d,null,{default:o(()=>[e.isExtraSmall?(v(),L(N,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[$(e.$slots,(r,u)=>({name:u,fn:o(i=>[p(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=r=>e.dialog=r)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[0]||(a[0]=r=>e.innerDate=r)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),D(_,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[3]||(a[3]=r=>e.menu=r)},{activator:o(({props:r})=>[l(S,G({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},r),w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(g=>[p(e.$slots,i,k(R(g)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(n,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":a[2]||(a[2]=r=>e.innerDate=r)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=x(P,[["render",le]]);P.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const pa={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{setTimeZone:ae().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:a})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:M},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateField
        label="Date, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:re}},render:(e,{argTypes:a})=>({components:{FSForm:ee,FSDateField:y,FSCol:d,FSRow:M},props:Object.keys(a),setup(){return{...e}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var A,B,O;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: 1701208800000,
      value3: 1701208800000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
      FSButton,
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
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateField
        label="Date, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var Z,E,U;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateField,
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
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(U=(E=c.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const fa=["Variations","Rules"];export{c as Rules,f as Variations,fa as __namedExportsOrder,pa as default};
