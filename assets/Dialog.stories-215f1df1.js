import{F as te}from"./FSDateRangeField-f17c3821.js";import{F as ne}from"./FSDateField-daeacaa2.js";import{F as re}from"./FSTextField-53a1ad95.js";import{F as L,b as w}from"./FSCalendarTwin-7186af74.js";import{j as J,e as f,I as T,J as C,K as k,Y as oe,L as l,B as Y,A as t,U as s,V as m,d as R,R as V,N as $}from"./vue.esm-bundler-41eda46b.js";import{_ as Q}from"./FSIcon-6dc797d3.js";import{_ as n}from"./FSSpan-8af5ddcc.js";import{_ as o}from"./FSCol-282cc158.js";import{_ as r}from"./FSRow-1508d56d.js";import{u as W}from"./css-35e8563f.js";import{C as q}from"./useColors-c08b974a.js";import{u as X}from"./useTranslations-3bd97805.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VProgressCircular-e304a31d.js";import{F as ee}from"./FSFadeOut-d6aa1547.js";import{F as u}from"./FSButton-cdb730f5.js";import{F as ue}from"./FSForm-5bfa6e9d.js";import{F as se}from"./FSToggleSet-ddc99f4f.js";import{F}from"./FSCard-dc76bdb2.js";import"./useRules-d33c1ab7.js";import"./useAppTimeZone-fd64682f.js";import"./FSDialogMenu-58b27c41.js";import"./VDialog-fd66d168.js";import"./VOverlay-aedbdfa0.js";import"./forwardRefs-e658ad70.js";import"./useRender-b120e115.js";import"./theme-d4a333d5.js";import"./proxiedModel-ebe72836.js";import"./loader-912691d5.js";import"./color-7b12579a.js";import"./locale-396b54fa.js";import"./rounded-d3e26840.js";import"./tag-585bbcbd.js";import"./dimensions-dbe989d9.js";import"./display-40264291.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./transition-87ba966b.js";import"./VDefaultsProvider-9f290faa.js";import"./FSCalendar-9382f654.js";import"./VLocaleProvider-e107871b.js";import"./date-c4224b64.js";import"./VBtn-6a9dd5a0.js";import"./border-520a2ee2.js";import"./density-23ec5fb8.js";import"./elevation-74b749d9.js";import"./group-53103ce4.js";import"./VIcon-7bb7bc51.js";import"./index-35b22454.js";import"./VMenu-40d1577e.js";import"./VField-7c3f9689.js";import"./useSlots-e8ea556e.js";import"./VSpacer-b889274d.js";import"./index-ad5199eb.js";import"./VLabel-674db0eb.js";import"./VInput-1f6e9963.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./resizeObserver-ea3ec7d1.js";import"./useDebounce-c713d9ff.js";import"./FSClickable-fa1cff73.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./VSlideGroup-d28ddfe3.js";import"./goto-e7ba55f0.js";import"./FSWrapGroup-8ef956e3.js";const ae=J({name:"FSDialogRemove",components:{FSDialogSubmit:L,FSIcon:Q,FSSpan:n,FSCol:o,FSRow:r},props:{modelValue:{type:Boolean,required:!1,default:!1},removing:{type:Boolean,required:!1,default:!1},removeTotal:{type:Number,required:!0},removeCurrent:{type:Number,required:!1,default:0}},emits:["update:modelValue"],setup(e){const{isMobileSized:a}=W(),{$tr:i}=X(),p=f(()=>e.removeTotal>1?i("ui.dialog-remove.remove-plural","Remove {0} entities",e.removeTotal.toString()):i("ui.dialog-remove.remove-singular","Remove an entity")),d=f(()=>a.value?"36px":"40px");return{ColorEnum:q,footerHeight:d,title:p}}});function me(e,a,i,p,d,b){const g=T("FSDialogSubmit");return C(),k(g,Y({rightButtonLabel:e.$tr("ui.button.remove","Remove"),rightButtonColor:e.ColorEnum.Error,title:e.title,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=S=>e.$emit("update:modelValue",S))},e.$attrs),oe({body:l(()=>[t(o,{gap:"16px"},{default:l(()=>[t(r,null,{default:l(()=>[t(Q,{color:e.ColorEnum.Error},{default:l(()=>[s(" mdi-alert-outline ")]),_:1},8,["color"]),t(r,{gap:"2px"},{default:l(()=>[t(n,null,{default:l(()=>[s(m(e.$tr("ui.remove-dialog.body-regular","This action is")),1)]),_:1}),t(n,{font:"text-button"},{default:l(()=>[s(m(e.$tr("ui.remove-dialog.body-bold","definitive")),1)]),_:1})]),_:1})]),_:1}),t(n,null,{default:l(()=>[s(m(e.$tr("ui.remove-dialog.final-warning","Once removed, entities won't be retrievable")),1)]),_:1})]),_:1})]),_:2},[e.$props.removing?{name:"footer",fn:l(()=>[t(r,{align:"center-right",height:e.footerHeight},{default:l(()=>[t(n,null,{default:l(()=>[s(m(e.$props.removeCurrent)+" / "+m(e.$props.removeTotal),1)]),_:1}),t(ie,{color:e.ColorEnum.Dark,indeterminate:!0},null,8,["color"])]),_:1},8,["height"])]),key:"0"}:void 0]),1040,["rightButtonLabel","rightButtonColor","title","modelValue"])}const pe=Z(ae,[["render",me]]);ae.__docgenInfo={displayName:"FSDialogRemove",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removing",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removeTotal",type:{name:"number"},required:!0},{name:"removeCurrent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogRemove.vue"]};const le=J({name:"FSDialogForm",components:{FSFadeOut:ee,FSButton:u,FSDialog:w,FSForm:ue,FSRow:r},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},modelValue:{type:Boolean,required:!1,default:!1},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:q.Light},rightButtonColor:{type:String,required:!1,default:q.Primary},load:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e,{emit:a}){const{isMobileSized:i}=W(),{$tr:p}=X(),d=R(null),b=R(!1),g=f(()=>`calc(90vh - ${48+(e.title?i.value?24:32:0)+(e.subtitle?i.value?22:24:0)+(i.value?36:40)+64}px)`),S=f(()=>e.leftButtonLabel??p("ui.button.cancel","Cancel")),v=f(()=>e.rightButtonLabel??p("ui.button.validate","Validate"));return{cancelButtonLabel:S,submitButtonLabel:v,ColorEnum:q,formRef:d,height:g,valid:b,onSubmit:()=>{b.value&&a("click:rightButton")}}}});function de(e,a,i,p,d,b){const g=T("FSForm"),S=T("FSDialog");return C(),k(S,Y({width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=v=>e.$emit("update:modelValue",v))},e.$attrs),{header:l(()=>[V(e.$slots,"header",{},()=>[e.$props.title?(C(),k(o,{key:0,padding:"0 16px 0 0"},{default:l(()=>[t(n,{font:"text-h2"},{default:l(()=>[s(m(e.$props.title),1)]),_:1}),e.$props.subtitle?(C(),k(n,{key:0},{default:l(()=>[s(m(e.$props.subtitle),1)]),_:1})):$("",!0)]),_:1})):$("",!0)])]),body:l(()=>[t(g,{ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=v=>e.valid=v)},{default:l(()=>[t(o,{gap:"24px"},{default:l(()=>[t(ee,{height:e.height,padding:"0 8px 0 0"},{default:l(()=>[V(e.$slots,"body")]),_:3},8,["height"]),t(r,{padding:"0 16px 0 0"},{default:l(()=>[V(e.$slots,"left-footer"),t(r,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(u,{prependIcon:e.$props.leftButtonPrependIcon,label:e.cancelButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:a[0]||(a[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","label","appendIcon","variant","color"]),t(u,{type:"submit",prependIcon:e.$props.rightButtonPrependIcon,label:e.submitButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.$props.rightButtonVariant,color:e.$props.rightButtonColor,load:e.$props.load,editable:e.$props.editable},null,8,["prependIcon","label","appendIcon","variant","color","load","editable"])]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"])]),_:3},16,["width","modelValue"])}const ge=Z(le,[["render",de]]);le.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"leftButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"header"},{name:"body"},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const wa={title:"Foundation/Shared/Dialog",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{buttons1:[...Array(5).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),selected1:[],value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialog:w,FSButton:u,FSCard:F,FSToggleSet:se,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog - primary color - header, body"
        @click="() => args.value1 = true"
      />
      <FSDialog
        width="400px"
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
    </div>`})},y={args:{args:{value1:!1,value2:!1,value3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:L,FSButton:u,FSCard:F,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},h={args:{args:{value1:!1,label1:"",label2:"",label3:"",label4:"",label5:"",label6:"",label7:"",label8:"",label9:"",label10:"",rightButton:()=>{console.log("Form is valid")}}},render:(e,{argTypes:a})=>({components:{FSDialogForm:ge,FSTextField:re,FSButton:u,FSCard:F,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},B={args:{args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1}},render:(e,{argTypes:a})=>({components:{FSDialogRemove:pe,FSButton:u,FSCard:F,FSSpan:n,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})},D={args:{args:{value1:!1,date1:null,date2:null}},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:L,FSButton:u,FSDateField:ne,FSDateRangeField:te,FSSpan:n,FSCard:F,FSCol:o,FSRow:r},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})};var x,I,O;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        width="400px"
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
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var A,j,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(j=y.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,E,G;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(E=h.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var _,U,z;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(U=B.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var K,H,M;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(H=D.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Ra=["Variations","Submit","Form","Remove","ChainedDialogs"];export{D as ChainedDialogs,h as Form,B as Remove,y as Submit,c as Variations,Ra as __namedExportsOrder,wa as default};
