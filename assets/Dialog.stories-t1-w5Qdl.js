import{F as ee}from"./FSTranslateField-CzrvW_SE.js";import{F as ue}from"./FSDialogMultiForm-DocNgYct.js";import{F as T}from"./FSTextField-ECMlyBTY.js";import{F as se}from"./FSDialogSubmit-DGOiqoQD.js";import{F as me}from"./FSDialogRemove-DQX8mR7N.js";import{d as R,b as c,c as h,w as de,y as F,z as v,A as S,C as o,N as l,K as b,F as x,m as P,B as pe,O as fe,L as ce,M as ge,E as ve,G as Fe,H as N,I as M}from"./vue.esm-bundler-Ddr6MgcY.js";import{_ as $}from"./FSFadeOut-B5r2PNGg.js";import{F as r}from"./FSButton-DZMcpMR1.js";import{F as Se}from"./FSForm-DYbVl9Fq.js";import{_ as s}from"./FSRow-CSQtiyAx.js";import{C as w}from"./useColors-DnoeDx-P.js";import{u as be}from"./useBreakpoints-BMg9gIvD.js";import{u as Be}from"./useTranslations-DgvmBCqU.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-D8gLxM2E.js";import{F as O}from"./FSDialog-CcyZGVNr.js";import{F as B}from"./FSCard-Bfo4Z0Zf.js";import{_ as y}from"./FSSpan-Bh1X02mE.js";import{F as ye}from"./FSText-CAGI2dEo.js";import"./FSIcon-DfjSexyz.js";import"./css-CxoeZkpP.js";import"./VIcon-zho7mIKV.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./useAppLanguages-BW2WkGTi.js";import"./useSlots-C9mZt9CQ.js";import"./FSPagination-DuEO3ucz.js";import"./FSWindow-CjrAhUjI.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./locale-CA7yUTVs.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./dimensions-DL1AZk-8.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./anchor-BdD5yCeG.js";import"./router-C4YP2PAT.js";import"./index-BF2Ge4Ib.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./lazy-BsoIJm2g.js";import"./ssrBoot-BXK87sqN.js";import"./transition-BtBp4lzQ.js";import"./FSBaseField-BXJBXTur.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./form-vji0TmoR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./uuid-DTaye2KM.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./display-BUGvawh3.js";const ae=R({name:"FSDialogFormBody",components:{FSFadeOut:$,FSButton:r,FSForm:Se,FSRow:s},props:{variant:{type:String,required:!1,default:"submit"},subtitle:{type:String,required:!1,default:null},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:w.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:w.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:w.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["click:cancelButton","click:submitButton","click:validateButton","update:isValidForm"],setup(e,{emit:a}){const{isMobileSized:t}=be(),{$tr:i}=Be(),u=c(null),m=c(null),d=h(()=>`calc(100vh - 42px - ${48+(t.value?24:32)+24+(e.subtitle?(t.value?16:20)+8:0)+(t.value?36:40)+24}px)`),p=h(()=>e.cancelButtonLabel??i("button.cancel","Cancel")),f=h(()=>e.submitButtonLabel??i("button.submit","Submit")),n=h(()=>e.validateButtonLabel??i("button.validate","Done")),L=()=>{u.value&&u.value.resetValidation()},oe=async()=>{if(u.value)return await u.value.validate()},re=()=>{m.value&&a("click:submitButton")},ie=()=>{a("click:validateButton")};return de(()=>m.value,()=>{a("update:isValidForm",m.value)},{immediate:!0}),{resetFormValidation:L,validateLabel:n,validateForm:oe,isValidForm:m,cancelLabel:p,submitLabel:f,onValidate:ie,ColorEnum:w,maxHeight:d,onSubmit:re,formRef:u}}});function he(e,a,t,i,u,m){const d=F("FSForm");return e.$props.validation?(v(),S(g,{key:1,gap:"24px"},{default:o(()=>[l($,{maxHeight:e.maxHeight},{default:o(()=>[b(e.$slots,"validation")]),_:3},8,["maxHeight"]),l(s,null,{default:o(()=>[b(e.$slots,"left-footer"),l(s,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:o(()=>[l(r,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(v(),S(d,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.isValidForm,"onUpdate:modelValue":a[1]||(a[1]=p=>e.isValidForm=p)},{default:o(()=>[l(g,{gap:"24px"},{default:o(()=>[l($,{maxHeight:e.maxHeight},{default:o(()=>[b(e.$slots,"body")]),_:3},8,["maxHeight"]),l(s,null,{default:o(()=>[b(e.$slots,"left-footer"),l(s,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:o(()=>[e.$props.showCancelButton?(v(),S(r,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"])):x("",!0),e.$props.showSubmitButton?(v(),S(r,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])):x("",!0)]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const we=I(ae,[["render",he]]);ae.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"},{name:"update:isValidForm"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const le=R({name:"FSDialogForm",components:{FSDialogFormBody:we,FSDialog:O},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){const t=c(null),i=c(!1);return{resetFormValidation:()=>{t.value&&t.value.resetFormValidation()},validateForm:async()=>{if(t.value)return await t.value.validateForm()},isValidForm:i,onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},bodyRef:t,onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function Ve(e,a,t,i,u,m){const d=F("FSDialogFormBody"),p=F("FSDialog");return v(),S(p,P({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:o(()=>[l(d,P({ref:"bodyRef"},e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=f=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=f=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate,"onUpdate:isValidForm":a[2]||(a[2]=f=>e.isValidForm=f)}),pe({_:2},[fe(e.$slots,(f,n)=>({name:n,fn:o(L=>[b(e.$slots,n,ce(ge(L)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const te=I(le,[["render",Ve]]);le.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const ne=R({name:"DialogFormRef",components:{FSDialogForm:te,FSTranslateField:ee,FSButton:r,FSText:ye},setup(){const e=c(null),a=c(null),t=c(!1),i=c("");return{resetValidation:()=>{e.value&&e.value.resetFormValidation()},isValidForm:a,dialogRef:e,validate:async()=>{if(e.value){if(!(await e.value.validateForm()).valid)return;console.log("validated")}},value:t,label:i}}});function ke(e,a,t,i,u,m){const d=F("FSTranslateField"),p=F("FSText"),f=F("FSDialogForm");return v(),ve(Fe,null,[l(r,{color:"primary",label:"Manual validation dialog",onClick:a[0]||(a[0]=()=>e.value=!0)}),l(f,{ref:"dialogRef",width:"500px",title:"Manual validation dialog",modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=n=>e.value=n),"onUpdate:isValidForm":a[5]||(a[5]=n=>e.isValidForm=n)},{body:o(()=>[l(d,{label:"Label 5",required:!0,rules:[n=>!!n||"Label is required"],modelValue:e.label,"onUpdate:modelValue":a[1]||(a[1]=n=>e.label=n)},null,8,["rules","modelValue"]),l(r,{label:"ValidateForm",onClick:a[2]||(a[2]=n=>e.validate())}),l(r,{label:"ResetFormValidation",onClick:a[3]||(a[3]=n=>e.resetValidation())}),l(p,null,{default:o(()=>[N(" The current validity of the form is: "+M(e.isValidForm==!0),1)]),_:1}),l(p,null,{default:o(()=>[N(" The dialogRef is null : "+M(e.dialogRef==null),1)]),_:1})]),_:1},8,["modelValue"])],64)}const Ce=I(ne,[["render",ke]]);ne.__docgenInfo={displayName:"DialogFormRef",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/dialogs/DialogFormRef.vue"]};const Aa={title:"Foundation/Shared/Dialog",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:se,FSTextField:T,FSButton:r,FSCard:B,FSSpan:y,FSCol:g,FSRow:s},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        width="500px"
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    </div>`})},k={args:{value1:!1,value2:!1,value4:!1,validation2:!1,label1:"",label2:"",label4:""},render:(e,{argTypes:a})=>({components:{FSTranslateField:ee,FSDialogForm:te,FSTextField:T,FSButton:r,FSCard:B,FSSpan:y,FSCol:g,FSRow:s,DialogFormRef:Ce},props:Object.keys(a),setup(){return{args:e}},template:`
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
      

      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="() => args.value4 = true"
      />
      <FSDialogForm
        width="500px"
        title="No buttons dialog"
        :showCancelButton="false"
        :showSubmitButton="false"
        v-model="args.value4"
      >
        <template #body>
          <FSTranslateField
            label="Label 4"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label4"
          />
        </template>
      </FSDialogForm>
      <DialogFormRef/> 
    </div>`})},C={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0,label11:"",label12:""},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:ue,FSTextField:T,FSButton:r,FSCard:B,FSSpan:y,FSCol:g,FSRow:s},props:Object.keys(a),setup(){return{args:e}},template:`
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
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>`})},D={args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1},render:(e,{argTypes:a})=>({components:{FSDialogRemove:me,FSButton:r,FSCard:B,FSSpan:y,FSCol:g,FSRow:s},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})},q={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialog:O,FSTextField:T,FSButton:r,FSCard:B,FSSpan:y,FSCol:g,FSRow:s,FSFadeOut:$},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="value1"
        :fullscreen="true"
        width="100%"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="() => args.value1 = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialogForm>
    </div>`})};var A,j,H;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogSubmit,
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
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        width="500px"
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    </div>\`
  })
}`,...(H=(j=V.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var E,U,z;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value1: false,
    value2: false,
    value4: false,
    validation2: false,
    label1: "",
    label2: "",
    label4: ""
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
      FSDialogForm,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow,
      DialogFormRef
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
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
      

      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="() => args.value4 = true"
      />
      <FSDialogForm
        width="500px"
        title="No buttons dialog"
        :showCancelButton="false"
        :showSubmitButton="false"
        v-model="args.value4"
      >
        <template #body>
          <FSTranslateField
            label="Label 4"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label4"
          />
        </template>
      </FSDialogForm>
      <DialogFormRef/> 
    </div>\`
  })
}`,...(z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,K,J;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true,
    label11: "",
    label12: ""
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
        args
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
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>\`
  })
}`,...(J=(K=C.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,W,X;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value1: false,
    removing1: false,
    value2: false,
    removing2: false,
    value3: false,
    removing3: false
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
        args
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
}`,...(X=(W=D.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,_;q.parameters={...q.parameters,docs:{...(Y=q.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialog,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow,
      FSFadeOut
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="value1"
        :fullscreen="true"
        width="100%"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="() => args.value1 = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialogForm>
    </div>\`
  })
}`,...(_=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const ja=["Submit","Form","MultipleForm","Remove","FullScreen"];export{k as Form,q as FullScreen,C as MultipleForm,D as Remove,V as Submit,ja as __namedExportsOrder,Aa as default};
