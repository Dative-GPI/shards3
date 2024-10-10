import{F as K}from"./FSDialogMultiForm-59ADbXPI.js";import{F as N}from"./FSTextField-DxizsfKE.js";import{F as G}from"./FSDialogRemove-Bh1IEf8n.js";import{d as j,b as h,c,y,z as q,A as k,C as t,N as l,K as m,m as L,B as J,O as Q,L as W,M as X}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as V}from"./FSFadeOut-ukctYbpt.js";import{F as o}from"./FSButton-QMwUyqLg.js";import{F as Y}from"./FSForm-CUiL74ui.js";import{_ as n}from"./FSRow-CFFgZ74C.js";import{C as v}from"./useColors-DTi99Ybi.js";import{u as Z}from"./useBreakpoints-ERBVGIQe.js";import{u as _}from"./useTranslations-BehwFxDb.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d}from"./FSCol-CYWCfIBP.js";import{F as E}from"./FSDialog-DfsalwYF.js";import{F as D}from"./FSCard-BJoqsHyz.js";import{_ as $}from"./FSSpan-DGSHCe_l.js";import"./FSPagination-BikIDCQq.js";import"./css-B7hQ34V-.js";import"./FSWindow-Bia7NaEc.js";import"./useSlots-BnylMYIF.js";import"./color-Du5JXqac.js";import"./theme-CX_N7n5F.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./locale-BJQwrXJ7.js";import"./VIcon-DzZvThha.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./density-CmGe4Vfq.js";import"./elevation-JfXKLVfD.js";import"./rounded-ErtzAGHK.js";import"./dimensions-CqoZOW6j.js";import"./loader-BYp4SDfR.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./anchor-0mwNUa2-.js";import"./router-DxFny788.js";import"./index-DMxVfgfA.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./lazy-CgkI0iJG.js";import"./ssrBoot-BTOmRKcz.js";import"./transition-DhTIerNz.js";import"./FSBaseField-Dg_2QPSd.js";import"./VSpacer-Di7g3RCw.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./form-_oo3cshG.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./FSDialogSubmit-DtlF7h39.js";import"./FSIcon-bZBIO--g.js";import"./uuid-DTaye2KM.js";import"./FSClickable-BE7nqA8Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./FSText-CAG3hIfn.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./display-BhWGQDVt.js";const z=j({name:"FSDialogFormBody",components:{FSFadeOut:V,FSButton:o,FSForm:Y,FSRow:n},props:{variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},subtitle:{type:String,required:!1,default:null},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:v.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:v.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:v.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton","click:validateButton"],setup(e,{emit:a}){const{isMobileSized:r}=Z(),{$tr:i}=_(),S=h(null),p=h(!1),u=c(()=>`calc(100vh - 40px - ${48+(r.value?24:32)+24+(e.subtitle?(r.value?14:16)+8:0)+(r.value?36:40)+24}px)`),s=c(()=>e.cancelButtonLabel??i("ui.button.cancel","Cancel")),f=c(()=>e.submitButtonLabel??i("ui.button.submit","Submit"));return{validateLabel:c(()=>e.validateButtonLabel??i("ui.button.validate","Done")),cancelLabel:s,submitLabel:f,ColorEnum:v,maxHeight:u,formRef:S,valid:p,onValidate:()=>{a("click:validateButton")},onSubmit:()=>{p.value&&a("click:submitButton")}}}});function ee(e,a,r,i,S,p){const u=y("FSForm");return e.$props.validation?(q(),k(d,{key:1,gap:"24px"},{default:t(()=>[l(V,{maxHeight:e.maxHeight},{default:t(()=>[m(e.$slots,"validation")]),_:3},8,["maxHeight"]),l(n,null,{default:t(()=>[m(e.$slots,"left-footer"),l(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:t(()=>[l(o,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(q(),k(u,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=s=>e.valid=s)},{default:t(()=>[l(d,{gap:"24px"},{default:t(()=>[l(V,{maxHeight:e.maxHeight},{default:t(()=>[m(e.$slots,"body")]),_:3},8,["maxHeight"]),l(n,null,{default:t(()=>[m(e.$slots,"left-footer"),l(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:t(()=>[l(o,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),l(o,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const ae=x(z,[["render",ee]]);z.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const U=j({name:"FSDialogForm",components:{FSDialogFormBody:ae,FSDialog:E},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){return{onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function le(e,a,r,i,S,p){const u=y("FSDialogFormBody"),s=y("FSDialog");return q(),k(s,L({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:t(()=>[l(u,L(e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=f=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=f=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate}),J({_:2},[Q(e.$slots,(f,B)=>({name:B,fn:t(C=>[m(e.$slots,B,W(X(C)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const te=x(U,[["render",le]]);U.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const ca={title:"Foundation/Shared/Dialog",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:!1,value2:!1,validation2:!1,label1:"",label2:""}},render:(e,{argTypes:a})=>({components:{FSDialogForm:te,FSTextField:N,FSButton:o,FSCard:D,FSSpan:$,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},b={args:{args:{value1:!1,label11:"",label12:""}},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:K,FSTextField:N,FSButton:o,FSCard:D,FSSpan:$,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},F={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogRemove:G,FSButton:o,FSCard:D,FSSpan:$,FSCol:d,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})};var I,w,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(w=g.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var R,P,A;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var M,O,H;F.parameters={...F.parameters,docs:{...(M=F.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(O=F.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const va=["Form","MultipleForm","Remove"];export{g as Form,b as MultipleForm,F as Remove,va as __namedExportsOrder,ca as default};
