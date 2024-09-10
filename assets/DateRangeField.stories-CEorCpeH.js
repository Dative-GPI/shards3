import{d as E,b,c as v,w as j,y as S,z as O,C as P,L as n,M as U,N as H,B as m,F as K,I as y,J as G,K as N}from"./vue.esm-bundler-Vj2X7okO.js";import{_ as I}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSDialogSubmit-QxUTROyY.js";import{F as L}from"./FSCalendarTwin-B46y6mkf.js";import{F as k}from"./FSTextField-BrYnbjAt.js";import{F as p}from"./FSButton-6xwgcgkA.js";import{C as R}from"./useColors-s1xYWcRF.js";import{u as M}from"./useRules-DpnTqc7T.js";import{u as J}from"./useDateFormat-DAzSBSGK.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSForm-BnY1MqqQ.js";import{_ as A}from"./FSCol-Bk577joi.js";import{_ as T}from"./FSRow-BuYwVvwM.js";import{u as X}from"./useAppTimeZone-ghwi0HtC.js";import{D as Y}from"./rules-D_3Pl2Ia.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-DFZnJQQe.js";import"./uuid-DTaye2KM.js";import"./css-CbCR1nbl.js";import"./FSDialog-5dNiqDMa.js";import"./FSCard-CsyvoMST.js";import"./FSText-cnz1-zil.js";import"./useSlots-DXmhvOIb.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./theme-D8Xq3tpQ.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BE9FlVMJ.js";import"./anchor-DHDhudvL.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./locale-CMOn_BOp.js";import"./router-CbAEScZe.js";import"./transition-CQDsmRPd.js";import"./VDefaultsProvider-CztrVRTm.js";import"./useTranslations-DyPMaPr_.js";import"./FSSpan-etgUZXmX.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./VLocaleProvider-BKOxinwy.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./elevation-BH8AnXAq.js";import"./rounded-BWAMdTmW.js";import"./tag-DxanhlL3.js";import"./group-DgCbl5w-.js";import"./VIcon-DptP6m9n.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./index-DjMs4W1j.js";import"./FSBaseField-CGde08E6.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./form-CgybbRT3.js";import"./index-jvVque46.js";import"./FSClickable-Bf0xM50-.js";import"./FSIcon-DhgV6LdF.js";import"./index-3zl-tJp_.js";import"./datesTools-BRWlXl6j.js";import"./time-BOZ1S5aJ.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:z,FSCalendarTwin:L,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:c,getMessages:f}=M(),{epochToShortDateFormat:F}=J(),o=b(!1),r=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),l=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.editable&&(o.value=!0)},u=()=>{a("update:modelValue",null),r.value=null},$=()=>{a("update:modelValue",r.value),o.value=!1};return j(()=>e.modelValue,()=>{I.isEqual(r.value,e.modelValue)||(r.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:r,validateOn:c,ColorEnum:R,messages:l,dialog:o,onClick:t,onClear:u,onSubmit:$}}});function x(e,a,c,f,F,o){const r=S("FSCalendarTwin"),d=S("FSDialogSubmit");return O(),P(K,null,[n(k,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},U({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[H(e.$slots,(l,t)=>({name:t,fn:m(u=>[y(e.$slots,t,G(N(u)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=l=>e.dialog=l)},{body:m(()=>[n(r,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDateRange=l)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=Q(B,[["render",x]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const ua={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{setTimeZone:X().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:a})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const ma=["Variations","Rules"];export{s as Rules,i as Variations,ma as __namedExportsOrder,ua as default};
