import{d as j,b,c as v,w as E,A as S,F as O,P as n,C as P,Q as U,D as m,j as H,H as G,I as K,M as y,N,O as I}from"./vue.esm-bundler-DSwHwgKw.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSDialogSubmit-DTXZ5ADH.js";import{F as L}from"./FSCalendarTwin-BYZOKvPB.js";import{F as k}from"./FSTextField-CnPHb7kI.js";import{F as p}from"./FSButton-CN1ZIktz.js";import{C as R}from"./useColors-C4EmrkDp.js";import{u as Q}from"./useRules-CaMdh5L0.js";import{u as J}from"./useDateFormat-SOO0wrBA.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as X}from"./FSForm-BjBd-4df.js";import{F as A}from"./FSCol-DdGVae5t.js";import{_ as T}from"./FSRow-BtkEywPN.js";import{u as Y}from"./useAppTimeZone-jR0R4uqF.js";import{D as x}from"./rules-DeT1zkoM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-CQmN3qQC.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BjF6TIJH.js";import"./css-XXwFKvUE.js";import"./FSDialog-DCTC-DNU.js";import"./FSCard-Dby8iWqU.js";import"./FSText-DiZ1SltH.js";import"./useSlots-CKCq4R6P.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./forwardRefs-DWGaNmQL.js";import"./color-uBYwhjku.js";import"./theme-4AjdAhIV.js";import"./proxiedModel-D4Pgijkw.js";import"./anchor-7worbrUf.js";import"./dimensions-CF0PFV-D.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./locale-BsRwbRmi.js";import"./router-C4I-dA4c.js";import"./transition--2cAMn_j.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./useTranslations-BhPzmPwL.js";import"./FSSelectField-eGgC7ePy.js";import"./VList-CvbK1pQh.js";import"./index-GTe7atjb.js";import"./VIcon-CdjjMQ6V.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./density-BfjPyHiq.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./FSSlideGroup-DmKSX9y1.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./resizeObserver-A1vWEG-J.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSWrapGroup-DErk_6Fw.js";import"./VInput-21AfxGIO.js";import"./form-BWUCG2_i.js";import"./FSBaseField-D2ow2gVm.js";import"./FSSpan-BoXQ4lG9.js";import"./FSCheckbox-Bv5yvgVA.js";import"./FSIcon-TpFvudaY.js";import"./VSelectionControl-CTHKpAmd.js";import"./VLabel-DSPSNe0W.js";import"./FSLoader-CB4bV0N-.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./VMenu-B9SE09pj.js";import"./useAppLanguageCode-Bj2soIpN.js";import"./VLocaleProvider-DBYugVJ8.js";import"./VBtn-WSruA80Q.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./VField-YT2KDH-x.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./index-DfSX31J9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-kNhr6ndE.js";const B=j({name:"FSDateRangeField",components:{FSDialogSubmit:z,FSCalendarTwin:L,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,getMessages:f}=Q(),{epochToShortDateFormat:F}=J(),l=b(!1),a=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),o=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.editable&&(l.value=!0)},u=()=>{r("update:modelValue",null),a.value=null},$=()=>{r("update:modelValue",a.value),l.value=!1};return E(()=>e.modelValue,()=>{M.isEqual(a.value,e.modelValue)||(a.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:a,validateOn:c,ColorEnum:R,messages:o,dialog:l,onClick:t,onClear:u,onSubmit:$}}});function _(e,r,c,f,F,l){const a=S("FSCalendarTwin"),d=S("FSDialogSubmit");return K(),O(G,null,[n(k,H({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),P({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[U(e.$slots,(o,t)=>({name:t,fn:m(u=>[y(e.$slots,t,N(I(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=o=>e.dialog=o)},{body:m(()=>[n(a,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDateRange=o)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=W(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const Tr={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{setTimeZone:Y().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},s={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:x}},render:(e,{argTypes:r})=>({components:{FSForm:X,FSDateRangeField:g,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var h,q,V;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var w,D,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const Br=["Variations","Rules"];export{s as Rules,i as Variations,Br as __namedExportsOrder,Tr as default};
