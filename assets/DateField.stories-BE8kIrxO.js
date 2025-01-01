import{d as H,b as F,c as M,w as N,A as b,B as D,D as o,I as v,F as G,P as l,C as w,Q as $,M as p,N as k,O as R,H as K,j as L}from"./vue.esm-bundler-DSwHwgKw.js";import{_ as I}from"./lodash-BiW_TGGX.js";import{F as z}from"./VList-CvbK1pQh.js";import{F as S}from"./FSTextField-CnPHb7kI.js";import{F as Q}from"./FSCalendar-EiNGtCi5.js";import{F as s}from"./FSButton-CN1ZIktz.js";import{F as J}from"./FSCard-Dby8iWqU.js";import{F as d}from"./FSCol-DdGVae5t.js";import{C as T}from"./useColors-C4EmrkDp.js";import{u as W}from"./useDateFormat-DqGsDyOM.js";import{u as X}from"./useRules-CaMdh5L0.js";import{u as Y}from"./useBreakpoints-BjF6TIJH.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _}from"./VMenu-B9SE09pj.js";import{F as ee}from"./FSForm-BjBd-4df.js";import{_ as P}from"./FSRow-BtkEywPN.js";import{u as re}from"./useAppTimeZone-jR0R4uqF.js";import{D as ae}from"./rules-DEDGy5Zg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./forwardRefs-DWGaNmQL.js";import"./color-uBYwhjku.js";import"./theme-4AjdAhIV.js";import"./proxiedModel-D4Pgijkw.js";import"./anchor-7worbrUf.js";import"./dimensions-CF0PFV-D.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./locale-BsRwbRmi.js";import"./router-C4I-dA4c.js";import"./transition--2cAMn_j.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./index-GTe7atjb.js";import"./VIcon-CdjjMQ6V.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./density-BfjPyHiq.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./FSBaseField-D2ow2gVm.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./VField-YT2KDH-x.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./FSSelectField-eGgC7ePy.js";import"./FSSlideGroup-DmKSX9y1.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./css-XXwFKvUE.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSWrapGroup-DErk_6Fw.js";import"./FSCheckbox-Bv5yvgVA.js";import"./FSIcon-TpFvudaY.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSLoader-CB4bV0N-.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./VLocaleProvider-DBYugVJ8.js";import"./VBtn-WSruA80Q.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./index-DfSX31J9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-BhPzmPwL.js";import"./time-kNhr6ndE.js";const j=H({name:"FSDateField",components:{FSDialogMenu:z,FSTextField:S,FSCalendar:Q,FSButton:s,FSCard:J,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:V}=W(),{validateOn:h,getMessages:q}=X(),{isExtraSmall:C}=Y(),n=F(!1),m=F(!1),t=F(e.modelValue),a=M(()=>q(e.modelValue,e.rules)),u=()=>{e.editable&&(n.value=!0)},i=()=>{r("update:modelValue",null),t.value=null},g=()=>{r("update:modelValue",t.value),n.value=!1,m.value=!1};return N(()=>e.modelValue,()=>{I.isEqual(t.value,e.modelValue)||(t.value=e.modelValue)}),{isExtraSmall:C,validateOn:h,ColorEnum:T,innerDate:t,messages:a,dialog:n,menu:m,epochToLongDateFormat:V,openMobileOverlay:u,onSubmit:g,onClear:i}}});function le(e,r,V,h,q,C){const n=b("FSCalendar"),m=b("FSDialogMenu"),t=b("FSCard");return v(),D(d,null,{default:o(()=>[e.isExtraSmall?(v(),G(K,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[$(e.$slots,(a,u)=>({name:u,fn:o(i=>[p(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(n,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),D(_,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:o(({props:a})=>[l(S,L({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},a),w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(g=>[p(e.$slots,i,k(R(g)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(t,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(n,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=x(j,[["render",le]]);j.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const Ar={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{setTimeZone:re().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:r})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:P},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ae}},render:(e,{argTypes:r})=>({components:{FSForm:ee,FSDateField:y,FSCol:d,FSRow:P},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(U=(E=c.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const Br=["Variations","Rules"];export{c as Rules,f as Variations,Br as __namedExportsOrder,Ar as default};
