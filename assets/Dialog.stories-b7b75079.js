import{F as pe}from"./FSDateRangeField-0a563b05.js";import{j as P,d as h,e as v,I as q,J as B,K as w,L as a,B as A,A as t,M as me,Z as ge,W as R,F as fe,Y as ve,O as S,P as y}from"./vue.esm-bundler-01006032.js";import{F as I}from"./FSFadeOut-f03472dd.js";import{F as u}from"./FSButton-be94d44f.js";import{F as x}from"./FSDialog-895565bd.js";import{F as re}from"./FSForm-836a750d.js";import{_ as n}from"./FSRow-83e75060.js";import{C as b}from"./useColors-13ed6ee6.js";import{u as M}from"./css-279a0029.js";import{u as E}from"./useTranslations-e38f43a5.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as p}from"./FSCol-c97fad61.js";import{F as be}from"./FSWindow-bc3c4e10.js";import{F as ce}from"./FSDateField-862532bb.js";import{F as oe}from"./FSTextField-4ac67195.js";import{F as N}from"./FSCalendarTwin-ee00573d.js";import{_ as ie}from"./FSIcon-15b738c8.js";import{_ as d}from"./FSSpan-6e79caf3.js";import{V as Fe}from"./VProgressCircular-f05fef1e.js";import{F as Se}from"./FSToggleSet-be653781.js";import{F as c}from"./FSCard-8fcd8e1e.js";import"./useRules-54978858.js";import"./useAppTimeZone-14b58e87.js";import"./useDebounce-ff82ad1d.js";import"./FSClickable-a0c1e9ef.js";import"./useSlots-e0d7ab7c.js";import"./FSText-b54d9278.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./forwardRefs-e658ad70.js";import"./useRender-4bcbb6ac.js";import"./theme-a26d2375.js";import"./proxiedModel-69023448.js";import"./anchor-1cd9d9ab.js";import"./color-8c62b342.js";import"./dimensions-4232d0fa.js";import"./display-77f43728.js";import"./lazy-d0bac168.js";import"./locale-903ef8d8.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./transition-9c7eb302.js";import"./VDefaultsProvider-d99c6ff5.js";import"./VSpacer-78b81ef3.js";import"./VInput-50bb839f.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./index-491d6eb9.js";import"./density-d09a1492.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./group-e9c3615d.js";import"./VBtn-dbaccc27.js";import"./border-10554549.js";import"./elevation-28c6fd5f.js";import"./rounded-9001edc0.js";import"./loader-878147ed.js";import"./index-89394051.js";import"./ssrBoot-b1480e9f.js";import"./FSDialogMenu-aa70b58d.js";import"./FSCalendar-ba8e4611.js";import"./VLocaleProvider-8d2dae90.js";import"./date-065dc41c.js";import"./VMenu-4c05ddd6.js";import"./VField-f1a9daf9.js";import"./VLabel-f27c70ae.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./resizeObserver-308bb976.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./VSlideGroup-e0f01fc0.js";import"./goto-9bab4060.js";import"./FSWrapGroup-83a13764.js";const ue=P({name:"FSDialogMultiForm",components:{FSFadeOut:I,FSButton:u,FSDialog:x,FSForm:re,FSRow:n},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:b.Light},rightButtonColor:{type:String,required:!1,default:b.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e,{emit:l}){const{isMobileSized:o}=M(),{$tr:i}=E(),r=h(1),m=h(!1),g=h(Array.from({length:e.steps},()=>!1)),f=v(()=>`calc(90vh - ${48+(e.title?o.value?24:32:0)+(e.subtitle?o.value?22:24:0)+(o.value?36:40)+64}px)`),s=v(()=>r.value==1?e.leftButtonLabel??i("ui.button.cancel","Cancel"):i("ui.button.back","Back")),L=v(()=>r.value==e.steps?e.rightButtonLabel??i("ui.button.validate","Validate"):i("ui.button.next","Next")),F=v(()=>r.value==e.steps?e.rightButtonVariant??"full":"standard");return{previousButtonLabel:s,nextButtonVariant:F,nextButtonLabel:L,currentStep:r,ColorEnum:b,height:f,valids:g,valid:m,onSubmit:()=>{if(console.log(m.value),m.value)switch(r.value){case e.steps:l("click:rightButton");break;default:r.value++;break}},onPrevious:()=>{r.value>1?r.value--:l("update:modelValue",!1)}}}});function ye(e,l,o,i,r,m){const g=q("FSForm"),f=q("FSDialog");return B(),w(f,A({title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[2]||(l[2]=s=>e.$emit("update:modelValue",s))},e.$attrs),{body:a(()=>[t(be,{width:"100%",modelValue:e.currentStep-1},{default:a(()=>[(B(!0),me(fe,null,ge(e.$props.steps,(s,L)=>(B(),w(g,{key:L,variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":l[1]||(l[1]=F=>e.valid=F)},{default:a(()=>[t(p,{gap:"24px"},{default:a(()=>[t(I,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[R(e.$slots,`step-${s}`)]),_:2},1032,["height"]),t(n,{padding:"0 16px 0 0"},{default:a(()=>[R(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[t(u,{prependIcon:e.$props.leftButtonPrependIcon,label:e.previousButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:l[0]||(l[0]=F=>e.onPrevious())},null,8,["prependIcon","label","appendIcon","variant","color"]),t(u,{type:"submit",prependIcon:e.$props.rightButtonPrependIcon,label:e.nextButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.nextButtonVariant,color:e.$props.rightButtonColor,load:e.$props.load,editable:e.$props.editable},null,8,["prependIcon","label","appendIcon","variant","color","load","editable"])]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3},16,["title","subtitle","width","modelValue"])}const he=O(ue,[["render",ye]]);ue.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0},{name:"leftButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};const se=P({name:"FSDialogRemove",components:{FSDialogSubmit:N,FSIcon:ie,FSSpan:d,FSCol:p,FSRow:n},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:l}=M(),{$tr:o}=E(),i=v(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),r=v(()=>l.value?"36px":"40px");return{ColorEnum:b,footerHeight:r,title:i}}});function Be(e,l,o,i,r,m){const g=q("FSDialogSubmit");return B(),w(g,A({title:e.title,rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=f=>e.$emit("update:modelValue",f))},e.$attrs),ve({body:a(()=>[t(p,{gap:"16px"},{default:a(()=>[t(n,null,{default:a(()=>[t(ie,{color:e.ColorEnum.Error},{default:a(()=>[S(" mdi-alert-outline ")]),_:1},8,["color"]),t(n,{gap:"2px"},{default:a(()=>[t(d,null,{default:a(()=>[S(y(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(d,{font:"text-button"},{default:a(()=>[S(y(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(d,null,{default:a(()=>[S(y(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[t(n,{padding:"0 16px 0 0",align:"center-right",height:e.footerHeight},{default:a(()=>[t(d,null,{default:a(()=>[S(y(e.$props.removeCurrent)+" / "+y(e.$props.removeTotal),1)]),_:1}),t(Fe,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","rightButtonLabel","rightButtonColor","modelValue"])}const qe=O(se,[["render",Be]]);se.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const de=P({name:"FSDialogForm",components:{FSFadeOut:I,FSButton:u,FSDialog:x,FSForm:re,FSRow:n},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:b.Light},rightButtonColor:{type:String,required:!1,default:b.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e,{emit:l}){const{isMobileSized:o}=M(),{$tr:i}=E(),r=h(null),m=h(!1),g=v(()=>`calc(90vh - ${48+(e.title?o.value?24:32:0)+(e.subtitle?o.value?22:24:0)+(o.value?36:40)+64}px)`),f=v(()=>e.leftButtonLabel??i("ui.button.cancel","Cancel")),s=v(()=>e.rightButtonLabel??i("ui.button.validate","Validate"));return{cancelButtonLabel:f,submitButtonLabel:s,ColorEnum:b,formRef:r,height:g,valid:m,onSubmit:()=>{m.value&&l("click:rightButton")}}}});function Le(e,l,o,i,r,m){const g=q("FSForm"),f=q("FSDialog");return B(),w(f,A({title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[2]||(l[2]=s=>e.$emit("update:modelValue",s))},e.$attrs),{body:a(()=>[t(g,{ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":l[1]||(l[1]=s=>e.valid=s)},{default:a(()=>[t(p,{gap:"24px"},{default:a(()=>[t(I,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[R(e.$slots,"body")]),_:3},8,["height"]),t(n,{padding:"0 16px 0 0"},{default:a(()=>[R(e.$slots,"left-footer"),t(n,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[t(u,{prependIcon:e.$props.leftButtonPrependIcon,label:e.cancelButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:l[0]||(l[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","label","appendIcon","variant","color"]),t(u,{type:"submit",prependIcon:e.$props.rightButtonPrependIcon,label:e.submitButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.$props.rightButtonVariant,color:e.$props.rightButtonColor,load:e.$props.load,editable:e.$props.editable},null,8,["prependIcon","label","appendIcon","variant","color","load","editable"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"])]),_:3},16,["title","subtitle","width","modelValue"])}const Ve=O(de,[["render",Le]]);de.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"leftButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"body"},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Zl={title:"Foundation/Shared/Dialog",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},V={args:{args:{buttons1:[...Array(4).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),selected1:[],value1:!1,value2:!1}},render:(e,{argTypes:l})=>({components:{FSDialog:x,FSButton:u,FSCard:c,FSToggleSet:Se,FSSpan:d,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},D={args:{args:{value1:!1}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:N,FSButton:u,FSCard:c,FSSpan:d,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},C={args:{args:{value1:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",label9:"",label10:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:l})=>({components:{FSDialogForm:Ve,FSTextField:oe,FSButton:u,FSCard:c,FSSpan:d,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:rightButton="args.rightButton"
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
    </div>`})},T={args:{args:{value1:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:l})=>({components:{FSDialogMultiForm:he,FSTextField:oe,FSButton:u,FSCard:c,FSSpan:d,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},$={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:l})=>({components:{FSDialogRemove:qe,FSButton:u,FSCard:c,FSSpan:d,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},k={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:N,FSButton:u,FSDateField:ce,FSDateRangeField:pe,FSSpan:d,FSCard:c,FSCol:p,FSRow:n},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var j,z,U;V.parameters={...V.parameters,docs:{...(j=V.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(z=V.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,H,W;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(H=D.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var J,K,Z;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      label9: "",
      label10: "",
      rightButton: () => {
        console.log("Form is valid");
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
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:rightButton="args.rightButton"
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
    </div>\`
  })
}`,...(Z=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var G,Q,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var _,ee,le;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(le=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,te,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Gl=["Variations","Submit","Form","MultipleForm","Remove","ChainedDialogs"];export{k as ChainedDialogs,C as Form,T as MultipleForm,$ as Remove,D as Submit,V as Variations,Gl as __namedExportsOrder,Zl as default};
