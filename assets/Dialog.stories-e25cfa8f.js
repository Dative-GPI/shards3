import{F as ee}from"./FSDateRangeField-ac3f1250.js";import{F as ae}from"./FSDateField-b7cc687c.js";import{F as te}from"./FSTextField-458b2a19.js";import{F as R,b as $}from"./FSCalendarTwin-fb98d378.js";import{j as M,e as D,H as w,I as y,J as h,Y as le,K as t,x as J,z as l,P as u,Q as s,d as ne,S as q,M as T}from"./vue.esm-bundler-9b0e8103.js";import{_ as Q}from"./FSIcon-42763d21.js";import{_ as n}from"./FSSpan-66c77817.js";import{_ as o}from"./FSCol-417d1c42.js";import{_ as r}from"./FSRow-efd9bf42.js";import{u as re}from"./css-a20776b9.js";import{C as B}from"./useColors-c8cdc69f.js";import{u as Y}from"./useTranslations-8945c1d2.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as oe}from"./VProgressCircular-a5b71e87.js";import{F as ie}from"./FSForm-2021d9fe.js";import{_ as p}from"./FSButton-8289abd7.js";import{F as ue}from"./FSToggleSet-7213f538.js";import{F as g}from"./FSCard-bd4b7ce0.js";import"./useRules-1f7652b9.js";import"./useAppTimeZone-7e26f50a.js";import"./FSCalendar-e6d2fd7c.js";import"./VLocaleProvider-d1053338.js";import"./date-2780c143.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./theme-eb9d1a1f.js";import"./VDefaultsProvider-b110751b.js";import"./useRender-7c6c7a38.js";import"./VBtn-6366fd39.js";import"./border-e6ad3d9a.js";import"./color-8a9bca19.js";import"./density-104762f9.js";import"./elevation-9129e0f4.js";import"./rounded-f08b035c.js";import"./tag-6bef4934.js";import"./group-76451b20.js";import"./dimensions-a3779498.js";import"./loader-ce3d0f3e.js";import"./intersectionObserver-569479cd.js";import"./router-cb82541f.js";import"./VIcon-dbd6f8e0.js";import"./index-5b7905d8.js";import"./VMenu-38668fe2.js";import"./VOverlay-b685a01d.js";import"./forwardRefs-e658ad70.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./transition-6fc66ff9.js";import"./useSlots-bfff66e3.js";import"./VSpacer-fd2fc595.js";import"./VTextField-abdb6d44.js";import"./VField-0cfa6d9e.js";import"./index-f5f914d5.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./index-d737aecc.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-d1864ccd.js";import"./FSClickable-154d7a9c.js";import"./FSSlideGroup-18d14808.js";import"./FSButtonNextIcon-090fb355.js";import"./VSlideGroup-ffd03f93.js";import"./FSWrapGroup-0cd3a162.js";const X=M({name:"FSDialogRemove",components:{FSDialogSubmit:R,FSIcon:Q,FSSpan:n,FSCol:o,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=re(),{$tr:i}=Y(),m=D(()=>e.removeTotal>1?i("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):i("ui.dialog-remove.remove-singular","Remove an entity")),d=D(()=>a.value?"36px":"40px");return{ColorEnum:B,footerHeight:d,title:m}}});function se(e,a,i,m,d,k){const S=w("FSDialogSubmit");return y(),h(S,J({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=C=>e.$emit("update:modelValue",C))},e.$attrs),le({body:t(()=>[l(o,{gap:"16px"},{default:t(()=>[l(r,null,{default:t(()=>[l(Q,{color:e.ColorEnum.Error},{default:t(()=>[u(" mdi-alert-outline ")]),_:1},8,["color"]),l(r,{gap:"2px"},{default:t(()=>[l(n,null,{default:t(()=>[u(s(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),l(n,{font:"text-button"},{default:t(()=>[u(s(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),l(n,null,{default:t(()=>[u(s(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:t(()=>[l(r,{align:"center-right",height:e.footerHeight},{default:t(()=>[l(n,null,{default:t(()=>[u(s(e.$props.removeCurrent)+" / "+s(e.$props.removeTotal),1)]),_:1}),l(oe,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const pe=W(X,[["render",se]]);X.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const Z=M({name:"FSDialogForm",components:{FSDialog:$,FSForm:ie,FSRow:r},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:B.Light},rightButtonColor:{type:String,required:!1,default:B.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e,{emit:a}){const{$tr:i}=Y(),m=ne(!1),d=D(()=>e.leftButtonLabel??i("ui.button.cancel","Cancel")),k=D(()=>e.rightButtonLabel??i("ui.button.validate","Validate"));return{cancelButtonLabel:d,submitButtonLabel:k,ColorEnum:B,valid:m,onSubmit:()=>{m.value&&a("click:rightButton")}}}});function me(e,a,i,m,d,k){const S=w("FSForm"),C=w("FSDialog");return y(),h(C,J({width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=V=>e.$emit("update:modelValue",V))},e.$attrs),{header:t(()=>[q(e.$slots,"header",{},()=>[e.$props.title?(y(),h(o,{key:0},{default:t(()=>[l(n,{font:"text-h2"},{default:t(()=>[u(s(e.$props.title),1)]),_:1}),e.$props.subtitle?(y(),h(n,{key:0},{default:t(()=>[u(s(e.$props.subtitle),1)]),_:1})):T("",!0)]),_:1})):T("",!0)])]),body:t(()=>[l(S,{modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=V=>e.valid=V)},{default:t(()=>[l(o,{gap:"32px"},{default:t(()=>[q(e.$slots,"body"),l(r,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:t(()=>[l(p,{prependIcon:e.$props.leftButtonPrependIcon,label:e.cancelButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:a[0]||(a[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","label","appendIcon","variant","color"]),l(p,{type:"submit",prependIcon:e.$props.rightButtonPrependIcon,label:e.submitButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.$props.rightButtonVariant,color:e.$props.rightButtonColor,editable:e.$props.editable,onClick:e.onSubmit},null,8,["prependIcon","label","appendIcon","variant","color","editable","onClick"])]),_:1})]),_:3})]),_:3},8,["modelValue"])]),_:3},16,["width","modelValue"])}const de=W(Z,[["render",me]]);Z.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"leftButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"header"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Da={title:"Foundation/Shared/Dialog",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{buttons1:[...Array(5).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),selected1:[],value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialog:$,FSButton:p,FSCard:g,FSToggleSet:ue,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        width="90%"
        color="primary"
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-button">Toggle set</FSSpan>
        </template>
        <template #body>
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
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        v-model="args.value2"
      >
        <template #header>
          <FSSpan font="text-button">General Grievous</FSSpan>
        </template>
        <template #body>
          <FSSpan> - General Kenobi!</FSSpan>
        </template>
        <template #footer>
          <FSSpan font="text-underline">(suprised)</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan> Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>`})},c={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:R,FSButton:p,FSCard:g,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
      <FSButton
        color="primary"
        label="Dialog - title, subtitle, default actions"
        @click="() => args.value2 = true"
      />
      <FSDialogSubmit
        title="Star wars 2"
        subtitle="Attack of the clones"
        :actions="true"
        v-model="args.value2"
      />
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialogSubmit
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan > Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>`})},F={args:{args:{value1:!1,label:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:a})=>({components:{FSDialogForm:de,FSTextField:te,FSButton:p,FSCard:g,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - title, subtitle"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:rightButton="args.rightButton"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label"
          />
        </template>
      </FSDialogForm>
    </div>`})},v={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogRemove:pe,FSButton:p,FSCard:g,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},b={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:R,FSButton:p,FSDateField:ae,FSDateRangeField:ee,FSSpan:n,FSCard:g,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-h2"> Form </FSSpan>
        </template>
        <template #body>
          <FSCol>
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
    </div>`})};var I,L,x;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      buttons1: [...Array(5).keys()].map(i => ({
        id: i.toString(),
        label: \`Choice number \${i + 1}\`
      })),
      selected1: [],
      value1: false,
      value2: false,
      value3: false
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
        width="90%"
        color="primary"
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-button">Toggle set</FSSpan>
        </template>
        <template #body>
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
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - header, body, footer"
        @click="() => args.value2 = true"
      />
      <FSDialog
        v-model="args.value2"
      >
        <template #header>
          <FSSpan font="text-button">General Grievous</FSSpan>
        </template>
        <template #body>
          <FSSpan> - General Kenobi!</FSSpan>
        </template>
        <template #footer>
          <FSSpan font="text-underline">(suprised)</FSSpan>
        </template>
      </FSDialog>
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialog
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan> Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialog>
    </div>\`
  })
}`,...(x=(L=f.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var O,j,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false
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
      <FSButton
        color="primary"
        label="Dialog - title, subtitle, default actions"
        @click="() => args.value2 = true"
      />
      <FSDialogSubmit
        title="Star wars 2"
        subtitle="Attack of the clones"
        :actions="true"
        v-model="args.value2"
      />
      <FSButton
        color="primary"
        label="Dialog - slots"
        @click="() => args.value3 = true"
      />
      <FSDialogSubmit
        v-model="args.value3"
      >
        <template #header>
          <FSSpan font="text-h2"> Start wars 3 </FSSpan>
        </template>
        <template #body>
          <FSSpan > Revenge of the Siths </FSSpan>
        </template>
        <template #footer>
          <FSRow align="center-right">
            <FSButton
              color="primary"
              label="Close"
              @click="() => args.value3 = false"
            />
          </FSRow>
        </template>
      </FSDialogSubmit>
    </div>\`
  })
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var P,_,N;F.parameters={...F.parameters,docs:{...(P=F.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      label: "",
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
        color="primary"
        title="Star wars 1"
        subtitle="The phantom menace"
        @click:rightButton="args.rightButton"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label"
          />
        </template>
      </FSDialogForm>
    </div>\`
  })
}`,...(N=(_=F.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var E,G,H;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,U,z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        v-model="args.value1"
      >
        <template #header>
          <FSSpan font="text-h2"> Form </FSSpan>
        </template>
        <template #body>
          <FSCol>
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
}`,...(z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const ka=["Variations","Submit","Form","Remove","ChainedDialogs"];export{b as ChainedDialogs,F as Form,v as Remove,c as Submit,f as Variations,ka as __namedExportsOrder,Da as default};
