import{d as j,b as F,c as H,w as G,y as b,z as v,A as D,C as o,E as K,N as l,B as w,O as $,K as p,L as k,M as R,G as L,m as N}from"./vue.esm-bundler-l-siv0w9.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as I}from"./FSDialogMenu-qumNHV3X.js";import{F as S}from"./FSTextField-xeLxZAxc.js";import{F as J}from"./FSCalendar-CH4ysg8K.js";import{F as s}from"./FSButton-CTjpHGCH.js";import{F as Q}from"./FSCard-CZcF3hjs.js";import{F as d}from"./FSCol-BvqytbKT.js";import{C as T}from"./useColors-_VkINegi.js";import{u as W}from"./useDateFormat-BlT1gBMR.js";import{u as X}from"./useRules-QHk8iD4m.js";import{u as Y}from"./useBreakpoints-C5IzU8MC.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _}from"./VMenu-DQq2E1HW.js";import{F as ee}from"./FSForm-4A05UEAw.js";import{_ as M}from"./FSRow-CbEgVN08.js";import{u as re}from"./useAppTimeZone-BUrTBgYP.js";import{D as ae}from"./rules-DieTgxQR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSBaseField-Bt-M24lA.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./useAppLanguageCode-BzH56rSm.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./group-Dk9dfj8w.js";import"./index-Cr304eD2.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DMSoEBu-.js";import"./css-CP2C2-Fe.js";import"./FSIcon-CxSeYbPm.js";import"./index-_Z9wfsFC.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CJK8D24x.js";import"./time-CxERy6W9.js";const P=j({name:"FSDateField",components:{FSDialogMenu:I,FSTextField:S,FSCalendar:J,FSButton:s,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:V}=W(),{validateOn:h,getMessages:q}=X(),{isExtraSmall:C}=Y(),t=F(!1),m=F(!1),n=F(e.modelValue),a=H(()=>q(e.modelValue,e.rules)),u=()=>{e.editable&&(t.value=!0)},i=()=>{r("update:modelValue",null),n.value=null},g=()=>{r("update:modelValue",n.value),t.value=!1,m.value=!1};return G(()=>e.modelValue,()=>{z.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:C,validateOn:h,ColorEnum:T,innerDate:n,messages:a,dialog:t,menu:m,epochToLongDateFormat:V,openMobileOverlay:u,onSubmit:g,onClear:i}}});function le(e,r,V,h,q,C){const t=b("FSCalendar"),m=b("FSDialogMenu"),n=b("FSCard");return v(),D(d,null,{default:o(()=>[e.isExtraSmall?(v(),K(L,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[$(e.$slots,(a,u)=>({name:u,fn:o(i=>[p(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),D(_,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:o(({props:a})=>[l(S,N({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},a),w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(g=>[p(e.$slots,i,k(R(g)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(n,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=x(P,[["render",le]]);P.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{setTimeZone:re().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:r})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:M},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ae}},render:(e,{argTypes:r})=>({components:{FSForm:ee,FSDateField:y,FSCol:d,FSRow:M},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var E,Z,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};const br=["Variations","Rules"];export{c as Rules,f as Variations,br as __namedExportsOrder,Fr as default};
