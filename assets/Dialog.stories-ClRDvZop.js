import{F as Y}from"./FSDialogMultiForm-OoQk3P-e.js";import{F as z}from"./FSTextField-CMP-67X5.js";import{d as L,c as f,y as V,z as k,A as $,M as U,B as l,m as h,L as t,E as v,G as g,b as R,I as b,N as Z,J as ee,K as ae}from"./vue.esm-bundler-Vj2X7okO.js";import{F as le}from"./FSDialogSubmit-BkNzQeOj.js";import{_}from"./FSIcon-CNrZYw3j.js";import{_ as i}from"./FSSpan-etgUZXmX.js";import{_ as m}from"./FSCol-Bk577joi.js";import{_ as n}from"./FSRow-BuYwVvwM.js";import{u as G}from"./css-CbCR1nbl.js";import{C as F}from"./useColors-ClGgFu9Q.js";import{u as J}from"./useTranslations-DyPMaPr_.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as te}from"./VProgressCircular-BALYDMME.js";import{F as C}from"./FSFadeOut-CORcN4YC.js";import{F as d}from"./FSButton-BeXPz3qD.js";import{F as ne}from"./FSForm-C6-7llH_.js";import{F as K}from"./FSDialog-DW3zDyOH.js";import{F as T}from"./FSCard-IkM7vPXg.js";import"./FSWindow-BXqAPvoy.js";import"./useSlots-DXmhvOIb.js";import"./color-Dk23S21P.js";import"./theme-DqOMA9k1.js";import"./group-CT1H1YXM.js";import"./proxiedModel-CZPY81Tp.js";import"./locale-CMOn_BOp.js";import"./tag-BDy8Psij.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./density-BWgXlOb-.js";import"./elevation-DH7kyzD7.js";import"./rounded-B-50KYhN.js";import"./dimensions-CBrtQk_X.js";import"./VIcon-Dc5M3VhK.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";import"./transition-Cs7QtK7U.js";import"./FSBaseField-Uq_chVlu.js";import"./VSpacer-BJ2TWwuy.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./form-BN2rR47-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./uuid-DTaye2KM.js";import"./FSClickable-B6i4bUTy.js";import"./FSText-CWxdqVl0.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./display-B4Z--0w1.js";const Q=L({name:"FSDialogRemove",components:{FSDialogSubmit:le,FSIcon:_,FSSpan:i,FSCol:m,FSRow:n},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=G(),{$tr:o}=J(),r=f(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),p=f(()=>a.value?"36px":"40px");return{ColorEnum:F,footerHeight:p,title:r}}});function oe(e,a,o,r,p,c){const u=V("FSDialogSubmit");return k(),$(u,h({width:"460px",title:e.title,submitButtonLabel:e.$tr("ui.button.remove","Remove"),submitButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),U({body:l(()=>[t(m,{gap:"16px"},{default:l(()=>[t(n,null,{default:l(()=>[t(_,{color:e.ColorEnum.Error},{default:l(()=>[v(" mdi-alert-outline ")]),_:1},8,["color"]),t(n,{gap:"2px"},{default:l(()=>[t(i,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(i,{font:"text-button"},{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(i,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:l(()=>[t(n,{padding:"0 16px 0 0",align:"center-right",height:e.footerHeight},{default:l(()=>[t(i,null,{default:l(()=>[v(g(e.$props.removeCurrent)+" / "+g(e.$props.removeTotal),1)]),_:1}),t(te,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","submitButtonLabel","submitButtonColor","modelValue"])}const re=I(Q,[["render",oe]]);Q.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const W=L({name:"FSDialogFormBody",components:{FSFadeOut:C,FSButton:d,FSForm:ne,FSRow:n},props:{variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},subtitle:{type:String,required:!1,default:null},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:F.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:F.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:F.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton","click:validateButton"],setup(e,{emit:a}){const{isMobileSized:o}=G(),{$tr:r}=J(),p=R(null),c=R(!1),u=f(()=>`calc(100vh - 40px - ${48+(o.value?24:32)+24+(e.subtitle?(o.value?14:16)+8:0)+(o.value?36:40)+24}px)`),s=f(()=>e.cancelButtonLabel??r("ui.button.cancel","Cancel")),S=f(()=>e.submitButtonLabel??r("ui.button.submit","Submit"));return{validateLabel:f(()=>e.validateButtonLabel??r("ui.button.validate","Done")),cancelLabel:s,submitLabel:S,ColorEnum:F,maxHeight:u,formRef:p,valid:c,onValidate:()=>{a("click:validateButton")},onSubmit:()=>{c.value&&a("click:submitButton")}}}});function ie(e,a,o,r,p,c){const u=V("FSForm");return e.$props.validation?(k(),$(m,{key:1,gap:"24px"},{default:l(()=>[t(C,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"validation")]),_:3},8,["maxHeight"]),t(n,{padding:"0 16px 0 0"},{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(d,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(k(),$(u,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=s=>e.valid=s)},{default:l(()=>[t(m,{gap:"24px"},{default:l(()=>[t(C,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"body")]),_:3},8,["maxHeight"]),t(n,{padding:"0 16px 0 0"},{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(d,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),t(d,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const ue=I(W,[["render",ie]]);W.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const X=L({name:"FSDialogForm",components:{FSDialogFormBody:ue,FSDialog:K},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){return{onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function se(e,a,o,r,p,c){const u=V("FSDialogFormBody"),s=V("FSDialog");return k(),$(s,h({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:l(()=>[t(u,h(e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=S=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=S=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate}),U({_:2},[Z(e.$slots,(S,D)=>({name:D,fn:l(w=>[b(e.$slots,D,ee(ae(w)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const de=I(X,[["render",se]]);X.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Fa={title:"Foundation/Shared/Dialog",component:K,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:!1,value2:!1,validation2:!1,label1:"",label2:""}},render:(e,{argTypes:a})=>({components:{FSDialogForm:de,FSTextField:z,FSButton:d,FSCard:T,FSSpan:i,FSCol:m,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},B={args:{args:{value1:!1,label11:"",label12:""}},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:Y,FSTextField:z,FSButton:d,FSCard:T,FSSpan:i,FSCol:m,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},q={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogRemove:re,FSButton:d,FSCard:T,FSSpan:i,FSCol:m,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(A=(N=y.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,M,H;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(M=B.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var O,j,x;q.parameters={...q.parameters,docs:{...(O=q.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(j=q.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const Sa=["Form","MultipleForm","Remove"];export{y as Form,B as MultipleForm,q as Remove,Sa as __namedExportsOrder,Fa as default};
