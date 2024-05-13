import{F as ae}from"./FSDateRangeField-c2269ac2.js";import{F as re}from"./FSDateField-04adfaeb.js";import{F as te}from"./FSTextField-77636cac.js";import{F as V,b as L}from"./FSCalendarTwin-80e1914b.js";import{j as M,e as b,I as C,J,K,Y as ne,L as a,B as Y,A as r,U as v,V as f,d as T,R as k}from"./vue.esm-bundler-41eda46b.js";import{_ as G}from"./FSIcon-713345eb.js";import{_ as n}from"./FSSpan-8af5ddcc.js";import{_ as u}from"./FSCol-282cc158.js";import{_ as t}from"./FSRow-1508d56d.js";import{u as Q}from"./css-35e8563f.js";import{C as q}from"./useColors-baaa98f5.js";import{u as W}from"./useTranslations-3bd97805.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{V as oe}from"./VProgressCircular-58a86136.js";import{F as Z}from"./FSFadeOut-77aed403.js";import{F as i}from"./FSButton-d0a22eb6.js";import{F as ie}from"./FSForm-d4cbb727.js";import{F as ue}from"./FSToggleSet-d7834bf3.js";import{F as c}from"./FSCard-8067a4d4.js";import"./useRules-d33c1ab7.js";import"./useAppTimeZone-fd64682f.js";import"./FSDialogMenu-8a197336.js";import"./VDialog-ecb58b76.js";import"./VOverlay-ac667fed.js";import"./forwardRefs-e658ad70.js";import"./useRender-dd35ddd1.js";import"./theme-be1bd2db.js";import"./proxiedModel-03601969.js";import"./loader-e17cf3b4.js";import"./color-45753032.js";import"./locale-84078765.js";import"./rounded-3de0fd3d.js";import"./tag-64b4b0e7.js";import"./dimensions-5b54e342.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./transition-695cd20f.js";import"./VDefaultsProvider-7d12961d.js";import"./FSCalendar-aac67386.js";import"./VLocaleProvider-19ebddf0.js";import"./date-7367f25a.js";import"./VBtn-66b397c8.js";import"./border-eea26164.js";import"./density-b42ba92f.js";import"./elevation-878f110a.js";import"./group-2589989a.js";import"./VIcon-8cf7ec9e.js";import"./index-4ba2035c.js";import"./VMenu-499c8185.js";import"./VField-c52f5557.js";import"./useSlots-e8ea556e.js";import"./VSpacer-63a59a9e.js";import"./index-dc0570e5.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./FSText-f60941a6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-d58b88df.js";import"./useDebounce-c713d9ff.js";import"./FSClickable-416c7a7e.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./VSlideGroup-aeb2e4a4.js";import"./goto-50a9e63e.js";import"./FSWrapGroup-d3a1dbf2.js";const ee=M({name:"FSDialogRemove",components:{FSDialogSubmit:V,FSIcon:G,FSSpan:n,FSCol:u,FSRow:t},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:l}=Q(),{$tr:o}=W(),s=b(()=>e.removeTotal>1?o("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):o("ui.dialog-remove.remove-singular","Remove an entity")),m=b(()=>l.value?"36px":"40px");return{ColorEnum:q,footerHeight:m,title:s}}});function se(e,l,o,s,m,S){const d=C("FSDialogSubmit");return J(),K(d,Y({title:e.title,rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=p=>e.$emit("update:modelValue",p))},e.$attrs),ne({body:a(()=>[r(u,{gap:"16px"},{default:a(()=>[r(t,null,{default:a(()=>[r(G,{color:e.ColorEnum.Error},{default:a(()=>[v(" mdi-alert-outline ")]),_:1},8,["color"]),r(t,{gap:"2px"},{default:a(()=>[r(n,null,{default:a(()=>[v(f(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),r(n,{font:"text-button"},{default:a(()=>[v(f(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),r(n,null,{default:a(()=>[v(f(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:a(()=>[r(t,{padding:"0 16px 0 0",align:"center-right",height:e.footerHeight},{default:a(()=>[r(n,null,{default:a(()=>[v(f(e.$props.removeCurrent)+" / "+f(e.$props.removeTotal),1)]),_:1}),r(oe,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["title","rightButtonLabel","rightButtonColor","modelValue"])}const me=X(ee,[["render",se]]);ee.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const le=M({name:"FSDialogForm",components:{FSFadeOut:Z,FSButton:i,FSDialog:L,FSForm:ie,FSRow:t},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:q.Light},rightButtonColor:{type:String,required:!1,default:q.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e,{emit:l}){const{isMobileSized:o}=Q(),{$tr:s}=W(),m=T(null),S=T(!1),d=b(()=>`calc(90vh - ${48+(e.title?o.value?24:32:0)+(e.subtitle?o.value?22:24:0)+(o.value?36:40)+64}px)`),p=b(()=>e.leftButtonLabel??s("ui.button.cancel","Cancel")),g=b(()=>e.rightButtonLabel??s("ui.button.validate","Validate"));return{cancelButtonLabel:p,submitButtonLabel:g,ColorEnum:q,formRef:m,height:d,valid:S,onSubmit:()=>{S.value&&l("click:rightButton")}}}});function de(e,l,o,s,m,S){const d=C("FSForm"),p=C("FSDialog");return J(),K(p,Y({title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[2]||(l[2]=g=>e.$emit("update:modelValue",g))},e.$attrs),{body:a(()=>[r(d,{ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":l[1]||(l[1]=g=>e.valid=g)},{default:a(()=>[r(u,{gap:"24px"},{default:a(()=>[r(Z,{height:e.height,padding:"0 8px 0 0"},{default:a(()=>[k(e.$slots,"body")]),_:3},8,["height"]),r(t,{padding:"0 16px 0 0"},{default:a(()=>[k(e.$slots,"left-footer"),r(t,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:a(()=>[r(i,{prependIcon:e.$props.leftButtonPrependIcon,label:e.cancelButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:l[0]||(l[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","label","appendIcon","variant","color"]),r(i,{type:"submit",prependIcon:e.$props.rightButtonPrependIcon,label:e.submitButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.$props.rightButtonVariant,color:e.$props.rightButtonColor,load:e.$props.load,editable:e.$props.editable},null,8,["prependIcon","label","appendIcon","variant","color","load","editable"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"])]),_:3},16,["title","subtitle","width","modelValue"])}const pe=X(le,[["render",de]]);le.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"leftButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"body"},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const wl={title:"Foundation/Shared/Dialog",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F={args:{args:{buttons1:[...Array(4).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),selected1:[],value1:!1,value2:!1}},render:(e,{argTypes:l})=>({components:{FSDialog:L,FSButton:i,FSCard:c,FSToggleSet:ue,FSSpan:n,FSCol:u,FSRow:t},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Dialog - primary color - header, body"
        width="400px"
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
    </div>`})},y={args:{args:{value1:!1}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:V,FSButton:i,FSCard:c,FSSpan:n,FSCol:u,FSRow:t},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},h={args:{args:{value1:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",label9:"",label10:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:l})=>({components:{FSDialogForm:pe,FSTextField:te,FSButton:i,FSCard:c,FSSpan:n,FSCol:u,FSRow:t},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},B={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:l})=>({components:{FSDialogRemove:me,FSButton:i,FSCard:c,FSSpan:n,FSCol:u,FSRow:t},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})},D={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:l})=>({components:{FSDialogSubmit:V,FSButton:i,FSDateField:re,FSDateRangeField:ae,FSSpan:n,FSCard:c,FSCol:u,FSRow:t},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var R,w,$;F.parameters={...F.parameters,docs:{...(R=F.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        width="400px"
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
}`,...($=(w=F.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var x,I,O;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(I=y.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,A,P;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(A=h.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var E,N,_;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(N=B.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var U,z,H;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(z=D.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const $l=["Variations","Submit","Form","Remove","ChainedDialogs"];export{D as ChainedDialogs,h as Form,B as Remove,y as Submit,F as Variations,$l as __namedExportsOrder,wl as default};
