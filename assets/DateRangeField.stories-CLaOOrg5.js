import{d as E,b,c as v,w as j,z as S,A as O,D as P,v as n,M as U,N as H,C as m,F as K,J as y,K as G,L as N}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as I}from"./FSDialogSubmit-CvlTCn8G.js";import{F as L}from"./FSCalendarTwin-CxpVwxeu.js";import{F as k}from"./FSTextField-C_L-5gHA.js";import{F as p}from"./FSButton-jJkg4qCi.js";import{C as R}from"./useColors-tmPxRJAs.js";import{u as M}from"./useRules-CJCAsX67.js";import{u as J}from"./useDateFormat-B3lPS72n.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSForm-Cy2PdXxq.js";import{F as A}from"./FSCol-BEvj3we4.js";import{F as T}from"./FSRow-k5pgBhR1.js";import{u as X}from"./useAppTimeZone-8KaETkN8.js";import{D as Y}from"./rules-DMXcKxHO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-D8lX1YMU.js";import"./uuid-DTaye2KM.js";import"./css-DTUiF03J.js";import"./FSDialog-DdBcmhOt.js";import"./FSCard-ENPT7Hcj.js";import"./FSText-CwwFvnOv.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./useTranslations-CHmpEDXr.js";import"./FSSpan-H3zJ0Cfa.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./VLocaleProvider-aObatoJn.js";import"./VBtn-CAkWF00h.js";import"./border-CJvl-6Or.js";import"./density-CY8ZwxUy.js";import"./elevation-Ba-uT6Vw.js";import"./rounded-NuUWeCiM.js";import"./tag-Ceq3l71M.js";import"./group-Co3yQlsH.js";import"./VIcon-D-JUvW-a.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./index-BBm8PRb1.js";import"./FSBaseField-3b1naUZS.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./form-CH3j37ax.js";import"./index-O1RQoaVh.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSIcon-ChaYv6Le.js";import"./index-DfSX31J9.js";import"./datesTools-BRWlXl6j.js";import"./time-DIVI7EoV.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:I,FSCalendarTwin:L,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:c,getMessages:f}=M(),{epochToShortDateFormat:F}=J(),o=b(!1),r=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),l=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.editable&&(o.value=!0)},u=()=>{a("update:modelValue",null),r.value=null},$=()=>{a("update:modelValue",r.value),o.value=!1};return j(()=>e.modelValue,()=>{z.isEqual(r.value,e.modelValue)||(r.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:r,validateOn:c,ColorEnum:R,messages:l,dialog:o,onClick:t,onClear:u,onSubmit:$}}});function x(e,a,c,f,F,o){const r=S("FSCalendarTwin"),d=S("FSDialogSubmit");return O(),P(K,null,[n(k,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},U({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[H(e.$slots,(l,t)=>({name:t,fn:m(u=>[y(e.$slots,t,G(N(u)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=l=>e.dialog=l)},{body:m(()=>[n(r,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDateRange=l)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=Q(B,[["render",x]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const ua={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{setTimeZone:X().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:a})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},s={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Y}},render:(e,{argTypes:a})=>({components:{FSForm:W,FSDateRangeField:g,FSCol:A,FSRow:T},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var D,w,C;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ma=["Variations","Rules"];export{s as Rules,i as Variations,ma as __namedExportsOrder,ua as default};
