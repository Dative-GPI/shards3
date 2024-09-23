import{F as Z}from"./FSDialogMultiForm-TYf52Fk2.js";import{F as z}from"./FSTextField-BNsdmcCY.js";import{d as L,c as f,y as V,z as k,A as $,M as U,B as l,m as h,L as t,E as v,G as g,b as R,I as b,N as _,J as ee,K as ae}from"./vue.esm-bundler-DjjVIdVI.js";import{F as le}from"./FSDialogSubmit-C3ySAJMd.js";import{F as G}from"./FSIcon-8gYhOFD7.js";import{_ as i}from"./FSSpan-D1pceTli.js";import{F as m}from"./FSCol-TPWSQPHs.js";import{F as n}from"./FSRow-CpogXLW8.js";import{u as J}from"./css-BkQhD285.js";import{C as F}from"./useColors-DQIAXgK6.js";import{u as K}from"./useTranslations-f9CWAvtI.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as te}from"./VProgressCircular-D-6SFgJ3.js";import{F as C}from"./FSFadeOut-DhwE_hD-.js";import{F as d}from"./FSButton-CzHpksPi.js";import{F as ne}from"./FSForm-DJBvIX_e.js";import{F as Q}from"./FSDialog-CEkUI7lZ.js";import{F as T}from"./FSCard-C5xnaBLp.js";import"./FSPagination-BiuCMRUf.js";import"./FSWindow-BQgkDhQ2.js";import"./useSlots-DzSo5JdB.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./locale-Dn84bpGK.js";import"./tag-DT601Ssr.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./dimensions-DBrW1AO_.js";import"./VIcon-CzaRZDPI.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./lazy-Dq_5BjJr.js";import"./ssrBoot-Ddid0i9S.js";import"./transition-C6adUwH7.js";import"./FSBaseField-BHQtSJ11.js";import"./VSpacer-CrqXaTz-.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./form-B7NlTRtd.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./resizeObserver-C4lJhwTD.js";import"./uuid-DTaye2KM.js";import"./FSClickable-Cug_zuK9.js";import"./FSText-BrySk5Rp.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";const W=L({name:"FSDialogRemove",components:{FSDialogSubmit:le,FSIcon:G,FSSpan:i,FSCol:m,FSRow:n},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=J(),{$tr:o}=K(),r=f(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),p=f(()=>a.value?"36px":"40px");return{ColorEnum:F,footerHeight:p,title:r}}});function oe(e,a,o,r,p,c){const u=V("FSDialogSubmit");return k(),$(u,h({width:"460px",title:e.title,submitButtonLabel:e.$tr("ui.button.remove","Remove"),submitButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),U({body:l(()=>[t(m,{gap:"16px"},{default:l(()=>[t(n,null,{default:l(()=>[t(G,{color:e.ColorEnum.Error},{default:l(()=>[v(" mdi-alert-outline ")]),_:1},8,["color"]),t(n,{gap:"2px"},{default:l(()=>[t(i,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(i,{font:"text-button"},{default:l(()=>[v(g(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(i,null,{default:l(()=>[v(g(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:l(()=>[t(n,{padding:"0 16px 0 0",align:"center-right",height:e.footerHeight},{default:l(()=>[t(i,null,{default:l(()=>[v(g(e.$props.removeCurrent)+" / "+g(e.$props.removeTotal),1)]),_:1}),t(te,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","submitButtonLabel","submitButtonColor","modelValue"])}const re=I(W,[["render",oe]]);W.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const X=L({name:"FSDialogFormBody",components:{FSFadeOut:C,FSButton:d,FSForm:ne,FSRow:n},props:{variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},subtitle:{type:String,required:!1,default:null},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:F.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:F.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:F.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton","click:validateButton"],setup(e,{emit:a}){const{isMobileSized:o}=J(),{$tr:r}=K(),p=R(null),c=R(!1),u=f(()=>`calc(100vh - 40px - ${48+(o.value?24:32)+24+(e.subtitle?(o.value?14:16)+8:0)+(o.value?36:40)+24}px)`),s=f(()=>e.cancelButtonLabel??r("ui.button.cancel","Cancel")),S=f(()=>e.submitButtonLabel??r("ui.button.submit","Submit"));return{validateLabel:f(()=>e.validateButtonLabel??r("ui.button.validate","Done")),cancelLabel:s,submitLabel:S,ColorEnum:F,maxHeight:u,formRef:p,valid:c,onValidate:()=>{a("click:validateButton")},onSubmit:()=>{c.value&&a("click:submitButton")}}}});function ie(e,a,o,r,p,c){const u=V("FSForm");return e.$props.validation?(k(),$(m,{key:1,gap:"24px"},{default:l(()=>[t(C,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"validation")]),_:3},8,["maxHeight"]),t(n,{padding:"0 16px 0 0"},{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(d,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(k(),$(u,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=s=>e.valid=s)},{default:l(()=>[t(m,{gap:"24px"},{default:l(()=>[t(C,{padding:"0 8px 0 0",maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"body")]),_:3},8,["maxHeight"]),t(n,{padding:"0 16px 0 0"},{default:l(()=>[b(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(d,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),t(d,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const ue=I(X,[["render",ie]]);X.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const Y=L({name:"FSDialogForm",components:{FSDialogFormBody:ue,FSDialog:Q},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){return{onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function se(e,a,o,r,p,c){const u=V("FSDialogFormBody"),s=V("FSDialog");return k(),$(s,h({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:l(()=>[t(u,h(e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=S=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=S=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate}),U({_:2},[_(e.$slots,(S,D)=>({name:D,fn:l(w=>[b(e.$slots,D,ee(ae(w)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const de=I(Y,[["render",se]]);Y.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const ya={title:"Foundation/Shared/Dialog",component:Q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:!1,value2:!1,validation2:!1,label1:"",label2:""}},render:(e,{argTypes:a})=>({components:{FSDialogForm:de,FSTextField:z,FSButton:d,FSCard:T,FSSpan:i,FSCol:m,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},B={args:{args:{value1:!1,label11:"",label12:""}},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:Z,FSTextField:z,FSButton:d,FSCard:T,FSSpan:i,FSCol:m,FSRow:n},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(x=(j=q.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const Ba=["Form","MultipleForm","Remove"];export{y as Form,B as MultipleForm,q as Remove,Ba as __namedExportsOrder,ya as default};
