import{F as Z}from"./FSDialogMultiForm-CY5uBPYS.js";import{F as U}from"./FSTextField-DiTX7r-c.js";import{d as L,c as f,y as V,z as k,A as $,B as K,C as l,m as h,N as t,H as v,I as g,b as R,K as b,O as _,L as ee,M as ae}from"./vue.esm-bundler-CWdIlc2r.js";import{F as le}from"./FSDialogSubmit-BEj--r7E.js";import{F as x}from"./FSIcon-CF3g_zZI.js";import{_ as u}from"./FSSpan-WKxYfmnu.js";import{F as d}from"./FSCol-DyDZsJ9U.js";import{_ as n}from"./FSRow-D9oM1Ufa.js";import{u as G}from"./useBreakpoints-DVmyWqF2.js";import{C as F}from"./useColors-CrLBSafx.js";import{u as J}from"./useTranslations-CEnu7PZQ.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as te}from"./VProgressCircular-CbhEC8Of.js";import{_ as C}from"./FSFadeOut-BkMq8VeO.js";import{F as m}from"./FSButton-BpyUfJIg.js";import{F as ne}from"./FSForm-DDxQSyQW.js";import{F as Q}from"./FSDialog-BfUyZ2Xy.js";import{F as T}from"./FSCard-CN9NbS7f.js";import"./FSPagination-DHPw_mAK.js";import"./css-rhgMLwoH.js";import"./FSWindow-DlacLTla.js";import"./useSlots-zwOl0abH.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./locale-BGMMnFfJ.js";import"./VIcon-Bo7R9vIQ.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./density-Cf5q3L_6.js";import"./elevation-DH_sKWqU.js";import"./rounded-C73YOAN4.js";import"./dimensions-Cku-Ba4r.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./transition-BvKGRC-_.js";import"./FSBaseField-CVTPeQEI.js";import"./VSpacer-DLFo12A6.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./form-D-VMHmUh.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./resizeObserver-CTZzan_-.js";import"./uuid-DTaye2KM.js";import"./FSClickable-CWKuMNrW.js";import"./FSText-BvtpuDSr.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./display-4460MzAg.js";const W=L({name:"FSDialogRemove",components:{FSDialogSubmit:le,FSIcon:x,FSSpan:u,FSCol:d,FSRow:n},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=G(),{$tr:o}=J(),r=f(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),p=f(()=>a.value?"36px":"40px");return{ColorEnum:F,footerHeight:p,title:r}}});function oe(e,a,o,r,p,c){const i=V("FSDialogSubmit");return k(),$(i,h({width:"460px",title:e.title,submitButtonLabel:e.$tr("ui.button.remove","Remove"),submitButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),K({body:l(()=>[t(d,{gap:"16px"},{default:l(()=>[t(n,null,{default:l(()=>[t(x,{color:e.ColorEnum.Error},{default:l(()=>[v(" mdi-alert-outline ")]),_:1},8,["color"]),t(n,{gap:"2px"},{default:l(()=>[t(u,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(u,{font:"text-button"},{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(u,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:l(()=>[t(n,{align:"center-right",height:e.footerHeight},{default:l(()=>[t(u,null,{default:l(()=>[v(g(e.$props.removeCurrent)+" / "+g(e.$props.removeTotal),1)]),_:1}),t(te,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","submitButtonLabel","submitButtonColor","modelValue"])}const re=I(W,[["render",oe]]);W.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const X=L({name:"FSDialogFormBody",components:{FSFadeOut:C,FSButton:m,FSForm:ne,FSRow:n},props:{variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},subtitle:{type:String,required:!1,default:null},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:F.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:F.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:F.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton","click:validateButton"],setup(e,{emit:a}){const{isMobileSized:o}=G(),{$tr:r}=J(),p=R(null),c=R(!1),i=f(()=>`calc(100vh - 40px - ${48+(o.value?24:32)+24+(e.subtitle?(o.value?14:16)+8:0)+(o.value?36:40)+24}px)`),s=f(()=>e.cancelButtonLabel??r("ui.button.cancel","Cancel")),S=f(()=>e.submitButtonLabel??r("ui.button.submit","Submit"));return{validateLabel:f(()=>e.validateButtonLabel??r("ui.button.validate","Done")),cancelLabel:s,submitLabel:S,ColorEnum:F,maxHeight:i,formRef:p,valid:c,onValidate:()=>{a("click:validateButton")},onSubmit:()=>{c.value&&a("click:submitButton")}}}});function ue(e,a,o,r,p,c){const i=V("FSForm");return e.$props.validation?(k(),$(d,{key:1,gap:"24px"},{default:l(()=>[t(C,{maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"validation")]),_:3},8,["maxHeight"]),t(n,null,{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(m,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(k(),$(i,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=s=>e.valid=s)},{default:l(()=>[t(d,{gap:"24px"},{default:l(()=>[t(C,{maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"body")]),_:3},8,["maxHeight"]),t(n,null,{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(m,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),t(m,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const ie=I(X,[["render",ue]]);X.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const Y=L({name:"FSDialogForm",components:{FSDialogFormBody:ie,FSDialog:Q},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){return{onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function se(e,a,o,r,p,c){const i=V("FSDialogFormBody"),s=V("FSDialog");return k(),$(s,h({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:l(()=>[t(i,h(e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=S=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=S=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate}),K({_:2},[_(e.$slots,(S,D)=>({name:D,fn:l(w=>[b(e.$slots,D,ee(ae(w)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const me=I(Y,[["render",se]]);Y.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const ya={title:"Foundation/Shared/Dialog",component:Q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:!1,value2:!1,validation2:!1,label1:"",label2:""}},render:(e,{argTypes:a})=>({components:{FSDialogForm:me,FSTextField:U,FSButton:m,FSCard:T,FSSpan:u,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 1"
        subtitle="Fill the form"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label1"
          />
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 2"
        subtitle="Fill the form"
        :validation="args.validation2"
        @click:submitButton="() => {
          args.validation2 = true;
        }"
        @click:validateButton="() => {
          args.validation2 = false;
          args.value2 = false;
        }"
        v-model="args.value2"
      >
        <template #body>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label2"
          />
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    </div>`})},B={args:{args:{value1:!1,label11:"",label12:""}},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:Z,FSTextField:U,FSButton:m,FSCard:T,FSSpan:u,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label11"
          />
        </template>
        <template #step-2>
          <FSSpan>
            Click next to continue
          </FSSpan>
        </template>
        <template #step-3>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label12"
          />
        </template>
      </FSDialogMultiForm>
    </div>`})},q={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogRemove:re,FSButton:m,FSCard:T,FSSpan:u,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:submitButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:submitButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:submitButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`})};var P,N,A;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      validation2: false,
      label1: "",
      label2: ""
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogForm,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
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
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 1"
        subtitle="Fill the form"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label1"
          />
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 2"
        subtitle="Fill the form"
        :validation="args.validation2"
        @click:submitButton="() => {
          args.validation2 = true;
        }"
        @click:validateButton="() => {
          args.validation2 = false;
          args.value2 = false;
        }"
        v-model="args.value2"
      >
        <template #body>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label2"
          />
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    </div>\`
  })
}`,...(A=(N=y.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,O,E;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      label11: "",
      label12: ""
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogMultiForm,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
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
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label11"
          />
        </template>
        <template #step-2>
          <FSSpan>
            Click next to continue
          </FSSpan>
        </template>
        <template #step-3>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label12"
          />
        </template>
      </FSDialogMultiForm>
    </div>\`
  })
}`,...(E=(O=B.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var H,j,z;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      removing1: false,
      value2: false,
      removing2: false,
      value3: false,
      removing3: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogRemove,
      FSButton,
      FSCard,
      FSSpan,
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
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:submitButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:submitButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:submitButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>\`
  })
}`,...(z=(j=q.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const Ba=["Form","MultipleForm","Remove"];export{y as Form,B as MultipleForm,q as Remove,Ba as __namedExportsOrder,ya as default};
