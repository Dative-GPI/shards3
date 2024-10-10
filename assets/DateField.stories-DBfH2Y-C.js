import{d as j,b as F,c as H,w as G,y as b,z as v,A as D,C as o,E as K,N as l,B as w,O as $,K as p,L as k,M as R,G as L,m as N}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as z}from"./lodash-BiW_TGGX.js";import{F as I}from"./FSDialogMenu-BA4IKkHH.js";import{F as S}from"./FSTextField-COQ4CiKa.js";import{F as J}from"./FSCalendar-DEPaJA_d.js";import{F as s}from"./FSButton-tjzQSrUn.js";import{F as Q}from"./FSCard-C6D9gNrD.js";import{F as d}from"./FSCol-CYWCfIBP.js";import{C as T}from"./useColors-BWKJNLz8.js";import{u as W}from"./useDateFormat-0HRqVufQ.js";import{u as X}from"./useRules-D0gcbU57.js";import{u as Y}from"./useBreakpoints-ERBVGIQe.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _}from"./VMenu-CuKNZEBs.js";import{F as ee}from"./FSForm-CUiL74ui.js";import{_ as M}from"./FSRow-CFFgZ74C.js";import{u as re}from"./useAppTimeZone-ByDiY2xy.js";import{D as ae}from"./rules-C-NbTnZJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Du5JXqac.js";import"./theme-CX_N7n5F.js";import"./proxiedModel-Atn7Z0Ko.js";import"./anchor-0mwNUa2-.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./locale-BJQwrXJ7.js";import"./router-DxFny788.js";import"./transition-DhTIerNz.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./FSBaseField-D2wwYX9r.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./VSpacer-Di7g3RCw.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./VIcon-DzZvThha.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./rounded-ErtzAGHK.js";import"./index-DS9MhfY5.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./VLocaleProvider-DR0IaCBg.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./elevation-JfXKLVfD.js";import"./group-CBQYGNTq.js";import"./index-DMxVfgfA.js";import"./FSClickable-BWJokye8.js";import"./css-B7hQ34V-.js";import"./FSIcon-CaaGuK6D.js";import"./index-DfSX31J9.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-BehwFxDb.js";import"./time-IoQ6C2aa.js";const P=j({name:"FSDateField",components:{FSDialogMenu:I,FSTextField:S,FSCalendar:J,FSButton:s,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:V}=W(),{validateOn:h,getMessages:q}=X(),{isExtraSmall:C}=Y(),t=F(!1),m=F(!1),n=F(e.modelValue),a=H(()=>q(e.modelValue,e.rules)),u=()=>{e.editable&&(t.value=!0)},i=()=>{r("update:modelValue",null),n.value=null},g=()=>{r("update:modelValue",n.value),t.value=!1,m.value=!1};return G(()=>e.modelValue,()=>{z.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:C,validateOn:h,ColorEnum:T,innerDate:n,messages:a,dialog:t,menu:m,epochToLongDateFormat:V,openMobileOverlay:u,onSubmit:g,onClear:i}}});function le(e,r,V,h,q,C){const t=b("FSCalendar"),m=b("FSDialogMenu"),n=b("FSCard");return v(),D(d,null,{default:o(()=>[e.isExtraSmall?(v(),K(L,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[$(e.$slots,(a,u)=>({name:u,fn:o(i=>[p(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),D(_,{key:1,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:o(({props:a})=>[l(S,N({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},a),w({"prepend-inner":o(()=>[p(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(g=>[p(e.$slots,i,k(R(g)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(n,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=x(P,[["render",le]]);P.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const gr={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{setTimeZone:re().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:r})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:M},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(U=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};const Fr=["Variations","Rules"];export{c as Rules,f as Variations,Fr as __namedExportsOrder,gr as default};
