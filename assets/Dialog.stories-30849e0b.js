import{F as be}from"./FSDateRangeField-9be8aec6.js";import{f as P,j as V,g as m,D as L,E as c,F,G as a,A,M as t,H as ve,V as fe,R as S,J as ce,U as Se,K as q,L as h}from"./vue.esm-bundler-838daa40.js";import{F as D}from"./FSFadeOut-ce6cecc6.js";import{F as i}from"./FSButton-b3e7898e.js";import{F as x}from"./FSDialog-010bb2de.js";import{F as re}from"./FSForm-1e605dfa.js";import{_ as n}from"./FSRow-753b58e5.js";import{C as f}from"./useColors-8c9c4d1e.js";import{u as E}from"./css-67cfec15.js";import{u as M}from"./useTranslations-419c1021.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as d}from"./FSCol-44fe82a9.js";import{F as Fe}from"./FSWindow-6f1357d0.js";import{F as ye}from"./FSDateField-2508422d.js";import{F as oe}from"./FSTextField-5838a9fc.js";import{F as N}from"./FSCalendarTwin-e499eb3b.js";import{_ as ue}from"./FSIcon-48205264.js";import{_ as s}from"./FSSpan-3df08200.js";import{V as Be}from"./VProgressCircular-95e816d7.js";import{F as qe}from"./FSToggleSet-89f81a7c.js";import{F as y}from"./FSCard-b76495e8.js";import"./useRules-cda8e231.js";import"./useAppTimeZone-a305acc7.js";import"./uuid-08309875.js";import"./FSClickable-104d21f2.js";import"./useSlots-6ce8c1a9.js";import"./FSText-52a8262f.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./forwardRefs-e658ad70.js";import"./useRender-f6a4770d.js";import"./theme-f9f3e2d4.js";import"./proxiedModel-3239cc3c.js";import"./anchor-dbd6e54f.js";import"./color-3e53cf3d.js";import"./dimensions-be952165.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./locale-5633e5ee.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./transition-ee4dd36d.js";import"./VDefaultsProvider-a165414e.js";import"./VSpacer-7ad9c022.js";import"./VInput-5523e371.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./index-6fa9bdc1.js";import"./density-e1cdced2.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./group-d31dd239.js";import"./VBtn-a5dad0d3.js";import"./border-749eb26c.js";import"./elevation-c2192325.js";import"./rounded-94d04543.js";import"./loader-62f4df25.js";import"./index-a755b9d6.js";import"./ssrBoot-00bf1891.js";import"./FSDialogMenu-fb154c77.js";import"./FSCalendar-9ec2264e.js";import"./VLocaleProvider-31d8514e.js";import"./date-513bc6d0.js";import"./VMenu-ec057191.js";import"./VField-b5e232d6.js";import"./VLabel-907d1b92.js";import"./index-e75f540f.js";import"./resizeObserver-21650322.js";import"./FSSlideGroup-9fadb36c.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./FSWrapGroup-d7904dc1.js";const ie=P({name:"FSDialogMultiForm",components:{FSFadeOut:D,FSButton:i,FSDialog:x,FSForm:re,FSRow:n},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:f.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:f.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:submitButton"],setup(e,{emit:l}){const{isMobileSized:o}=E(),{$tr:u}=M(),r=V(1),v=V(!1),p=V(Array.from({length:e.steps},()=>!1)),g=m(()=>`calc(100vh - 40px - ${48+(o.value?24:32)+24+(e.subtitle?(o.value?14:16)+8:0)+(o.value?36:40)+24}px)`),b=m(()=>r.value==1?e.cancelButtonLabel??u("ui.button.cancel","Cancel"):u("ui.button.back","Back")),C=m(()=>r.value==e.steps?e.submitButtonLabel??u("ui.button.validate","Validate"):u("ui.button.next","Next")),B=m(()=>r.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:b,nextButtonVariant:B,nextButtonLabel:C,currentStep:r,ColorEnum:f,height:g,valids:p,valid:v,onPrevious:()=>{r.value>1?r.value--:l("update:modelValue",!1)},onSubmit:()=>{if(v.value)switch(r.value){case e.steps:l("click:submitButton");break;default:r.value++;break}}}}});function he(e,l,o,u,r,v){const p=L("FSForm"),g=L("FSDialog");return c(),F(g,A({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[2]||(l[2]=b=>e.$emit("update:modelValue",b))},e.$attrs),{body:a(()=>[t(Fe,{width:"100%",modelValue:e.currentStep-1},{default:a(()=>[(c(!0),ve(ce,null,fe(e.$props.steps,(b,C)=>(c(),F(p,{variant:e.$props.variant,key:C,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":l[1]||(l[1]=B=>e.valid=B)},{default:a(()=>[t(d,{gap:"24px"},{default:a(()=>[t(D,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[S(e.$slots,`step-${b}`)]),_:2},1032,["height"]),t(n,{padding:"0 16px 0 0"},{default:a(()=>[S(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[t(i,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:l[0]||(l[0]=B=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"]),t(i,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,editable:e.$props.editable,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","editable","label","load"])]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3},16,["subtitle","title","width","modelValue"])}const Ve=O(ie,[["render",he]]);ie.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};const se=P({name:"FSDialogRemove",components:{FSDialogSubmit:N,FSIcon:ue,FSSpan:s,FSCol:d,FSRow:n},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:l}=E(),{$tr:o}=M(),u=m(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),r=m(()=>l.value?"36px":"40px");return{ColorEnum:f,footerHeight:r,title:u}}});function Le(e,l,o,u,r,v){const p=L("FSDialogSubmit");return c(),F(p,A({title:e.title,submitButtonLabel:e.$tr("ui.button.remove","Remove"),submitButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=g=>e.$emit("update:modelValue",g))},e.$attrs),Se({body:a(()=>[t(d,{gap:"16px"},{default:a(()=>[t(n,null,{default:a(()=>[t(ue,{color:e.ColorEnum.Error},{default:a(()=>[q(" mdi-alert-outline ")]),_:1},8,["color"]),t(n,{gap:"2px"},{default:a(()=>[t(s,null,{default:a(()=>[q(h(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(s,{font:"text-button"},{default:a(()=>[q(h(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(s,null,{default:a(()=>[q(h(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[t(n,{padding:"0 16px 0 0",align:"center-right",height:e.footerHeight},{default:a(()=>[t(s,null,{default:a(()=>[q(h(e.$props.removeCurrent)+" / "+h(e.$props.removeTotal),1)]),_:1}),t(Be,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","submitButtonLabel","submitButtonColor","modelValue"])}const De=O(se,[["render",Le]]);se.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const de=P({name:"FSDialogForm",components:{FSFadeOut:D,FSButton:i,FSDialog:x,FSForm:re,FSRow:n},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:f.Light},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:f.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:f.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:submitButton","click:validateButton"],setup(e,{emit:l}){const{isMobileSized:o}=E(),{$tr:u}=M(),r=V(null),v=V(!1),p=m(()=>`calc(100vh - 40px - ${48+(o.value?24:32)+24+(e.subtitle?(o.value?14:16)+8:0)+(o.value?36:40)+24}px)`),g=m(()=>e.cancelButtonLabel??u("ui.button.cancel","Cancel")),b=m(()=>e.submitButtonLabel??u("ui.button.submit","Submit"));return{validateLabel:m(()=>e.validateButtonLabel??u("ui.button.validate","Done")),cancelLabel:g,submitLabel:b,ColorEnum:f,formRef:r,height:p,valid:v,onValidate:()=>{l("click:validateButton"),l("update:modelValue",!1)},onSubmit:()=>{v.value&&l("click:submitButton")},onClose:()=>{e.validation&&l("click:validateButton"),l("update:modelValue",!1)}}}});function Ce(e,l,o,u,r,v){const p=L("FSForm"),g=L("FSDialog");return c(),F(g,A({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:a(()=>[e.$props.validation?(c(),F(d,{key:1,gap:"24px"},{default:a(()=>[t(D,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[S(e.$slots,"validation")]),_:3},8,["height"]),t(n,{padding:"0 16px 0 0"},{default:a(()=>[S(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[t(i,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(c(),F(p,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":l[1]||(l[1]=b=>e.valid=b)},{default:a(()=>[t(d,{gap:"24px"},{default:a(()=>[t(D,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[S(e.$slots,"body")]),_:3},8,["height"]),t(n,{padding:"0 16px 0 0"},{default:a(()=>[S(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[t(i,{prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:l[0]||(l[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","appendIcon","variant","color","label"]),t(i,{type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,editable:e.$props.editable,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","editable","label","load"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const ke=O(de,[["render",Ce]]);de.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Jl={title:"Foundation/Shared/Dialog",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},k={args:{args:{buttons1:[...Array(4).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),selected1:[],value1:!1,value2:!1}},render:(e,{argTypes:l})=>({components:{FSDialog:x,FSButton:i,FSCard:y,FSToggleSet:qe,FSSpan:s,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Dialog - primary color - header, body"
        width="800px"
        color="primary"
        v-model="args.value1"
      >
        <template #body>
          <FSRow
            padding="0 16px 0 0"
          >
            <FSToggleSet
              variant="wrap"
              buttonVariant="standard"
              activeVariant="standard"
              buttonColor="light"
              activeColor="primary"
              :multiple="false"
              :required="false"
              :values="args.buttons1"
              v-model="args.selected1"
            />
          </FSRow>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        title="Dialog - footer"
        v-model="args.value2"
      >
        <template #footer>
          <FSRow
            padding="0 16px 0 0"
            align="center-right"
          >
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value2 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>`})},T={args:{args:{value1:!1}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:N,FSButton:i,FSCard:y,FSSpan:s,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        v-model="args.value1"
      />
    </div>`})},$={args:{args:{value1:!1,value2:!1,validation2:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",label9:"",label10:"",submitButton1:()=>{console.log("submit")},submitButton2:()=>{console.log("submit")},validateButton2:()=>{console.log("validate")}}},render:(e,{argTypes:l})=>({components:{FSDialogForm:ke,FSTextField:oe,FSButton:i,FSCard:y,FSSpan:s,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:submitButton="args.submitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSCol>
            <FSTextField
              label="Label 1"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label1"
            />
            <FSTextField
              label="Label 2"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label2"
            />
            <FSTextField
              label="Label 3"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label3"
            />
            <FSTextField
              label="Label 4"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label4"
            />
            <FSTextField
              label="Label 5"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label5"
            />
            <FSTextField
              label="Label 6"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label6"
            />
            <FSTextField
              label="Label 7"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label7"
            />
            <FSTextField
              label="Label 8"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label8"
            />
            <FSTextField
              label="Label 9"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label9"
            />
            <FSTextField
              label="Label 10"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label10"
            />
          </FSCol>
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 2"
        subtitle="Attack of the clones"
        :validation="args.validation2"
        @click:submitButton="args.submitButton2"
        @click:validateButton="args.validateButton2"
        v-model="args.value2"
      >
        <template #body>
          <FSCol>
            <FSTextField
              label="Label 1"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label1"
            />
          </FSCol>
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    </div>`})},w={args:{args:{value1:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:l})=>({components:{FSDialogMultiForm:Ve,FSTextField:oe,FSButton:i,FSCard:y,FSSpan:s,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        :steps="3"
        @click:rightButton="args.rightButton"
        v-model="args.value1"
      >
        <template #step-1>
          <FSCol>
            <FSTextField
            label="Label 1"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label1"
              />
              <FSTextField
                label="Label 2"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label2"
              />
              <FSTextField
                label="Label 3"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label3"
              />
              <FSTextField
                label="Label 4"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label4"
              />
          </FSCol>
        </template>
        <template #step-2>
          EMPTY STEP
        </template>
        <template #step-3>
          <FSCol>
            <FSTextField
              label="Label 5"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label5"
            />
            <FSTextField
              label="Label 6"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label6"
            />
            <FSTextField
              label="Label 7"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label7"
            />
            <FSTextField
            label="Label 8"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label8"
            />
          </FSCol>
        </template>
      </FSDialogMultiForm>
    </div>`})},I={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:l})=>({components:{FSDialogRemove:De,FSButton:i,FSCard:y,FSSpan:s,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:rightButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:rightButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:rightButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`})},R={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:N,FSButton:i,FSDateField:ye,FSDateRangeField:be,FSSpan:s,FSCard:y,FSCol:d,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        title="Form"
        v-model="args.value1"
      >
        <template #body>
          <FSCol
            padding="0 16px 0 0"
          >
            <FSDateField
              label="Date"
              v-model="args.date1"
            />
            <FSDateRangeField
              label="Date range"
              v-model="args.date2"
            />
          </FSCol>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Submit"
              @click="() => args.value1 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>`})};var j,U,z;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    args: {
      buttons1: [...Array(4).keys()].map(i => ({
        id: i.toString(),
        label: \`Choice number \${i + 1}\`
      })),
      selected1: [],
      value1: false,
      value2: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialog,
      FSButton,
      FSCard,
      FSToggleSet,
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
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Dialog - primary color - header, body"
        width="800px"
        color="primary"
        v-model="args.value1"
      >
        <template #body>
          <FSRow
            padding="0 16px 0 0"
          >
            <FSToggleSet
              variant="wrap"
              buttonVariant="standard"
              activeVariant="standard"
              buttonColor="light"
              activeColor="primary"
              :multiple="false"
              :required="false"
              :values="args.buttons1"
              v-model="args.selected1"
            />
          </FSRow>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        title="Dialog - footer"
        v-model="args.value2"
      >
        <template #footer>
          <FSRow
            padding="0 16px 0 0"
            align="center-right"
          >
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value2 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>\`
  })
}`,...(z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,Y,G;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogSubmit,
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
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        v-model="args.value1"
      />
    </div>\`
  })
}`,...(G=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,W;$.parameters={...$.parameters,docs:{...(J=$.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      validation2: false,
      label1: "",
      label2: "",
      label3: "",
      label4: "",
      label5: "",
      label6: "",
      label7: "",
      label8: "",
      label9: "",
      label10: "",
      submitButton1: () => {
        console.log("submit");
      },
      submitButton2: () => {
        console.log("submit");
      },
      validateButton2: () => {
        console.log("validate");
      }
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
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:submitButton="args.submitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSCol>
            <FSTextField
              label="Label 1"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label1"
            />
            <FSTextField
              label="Label 2"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label2"
            />
            <FSTextField
              label="Label 3"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label3"
            />
            <FSTextField
              label="Label 4"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label4"
            />
            <FSTextField
              label="Label 5"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label5"
            />
            <FSTextField
              label="Label 6"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label6"
            />
            <FSTextField
              label="Label 7"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label7"
            />
            <FSTextField
              label="Label 8"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label8"
            />
            <FSTextField
              label="Label 9"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label9"
            />
            <FSTextField
              label="Label 10"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label10"
            />
          </FSCol>
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 2"
        subtitle="Attack of the clones"
        :validation="args.validation2"
        @click:submitButton="args.submitButton2"
        @click:validateButton="args.validateButton2"
        v-model="args.value2"
      >
        <template #body>
          <FSCol>
            <FSTextField
              label="Label 1"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label1"
            />
          </FSCol>
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
}`,...(W=(K=$.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      label1: "",
      label2: "",
      label3: "",
      label4: "",
      label5: "",
      label6: "",
      label7: "",
      label8: "",
      rightButton: () => {
        console.log("Form is valid");
      }
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
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        :steps="3"
        @click:rightButton="args.rightButton"
        v-model="args.value1"
      >
        <template #step-1>
          <FSCol>
            <FSTextField
            label="Label 1"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label1"
              />
              <FSTextField
                label="Label 2"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label2"
              />
              <FSTextField
                label="Label 3"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label3"
              />
              <FSTextField
                label="Label 4"
                :rules="[v => !!v || 'Label is required']"
                v-model="args.label4"
              />
          </FSCol>
        </template>
        <template #step-2>
          EMPTY STEP
        </template>
        <template #step-3>
          <FSCol>
            <FSTextField
              label="Label 5"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label5"
            />
            <FSTextField
              label="Label 6"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label6"
            />
            <FSTextField
              label="Label 7"
              :rules="[v => !!v || 'Label is required']"
              v-model="args.label7"
            />
            <FSTextField
            label="Label 8"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label8"
            />
          </FSCol>
        </template>
      </FSDialogMultiForm>
    </div>\`
  })
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var _,ee,le;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        @click:rightButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:rightButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:rightButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>\`
  })
}`,...(le=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,te,ne;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      date1: null,
      date2: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogSubmit,
      FSButton,
      FSDateField,
      FSDateRangeField,
      FSSpan,
      FSCard,
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
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        title="Form"
        v-model="args.value1"
      >
        <template #body>
          <FSCol
            padding="0 16px 0 0"
          >
            <FSDateField
              label="Date"
              v-model="args.date1"
            />
            <FSDateRangeField
              label="Date range"
              v-model="args.date2"
            />
          </FSCol>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Submit"
              @click="() => args.value1 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>\`
  })
}`,...(ne=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Kl=["Variations","Submit","Form","MultipleForm","Remove","ChainedDialogs"];export{R as ChainedDialogs,$ as Form,w as MultipleForm,I as Remove,T as Submit,k as Variations,Kl as __namedExportsOrder,Jl as default};
