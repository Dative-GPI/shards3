import{E as G,d as p,e as O,w as Q,Z as S,H as f,I as c,J as l,z as o,U as X,L as h,R as V,M as C,N as B,K as q,V as Y,O as _,P as x,A as ee}from"./vue.esm-bundler-a27e881e.js";import{F as M}from"./FSTextField-50214623.js";import{F as re}from"./FSCalendar-86c08fa0.js";import{_ as W}from"./FSWindow-d529f132.js";import{F as b}from"./FSButton-80bad2c6.js";import{F as le}from"./FSClock-00024418.js";import{F as oe}from"./FSCard-3036db54.js";import{_ as d}from"./FSCol-2e092d2e.js";import{C as s,u as ae}from"./useColors-64c3c523.js";import{u as te}from"./useTimeZone-035f95ae.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as z}from"./FSRow-68eabf56.js";import{_ as w}from"./FSSpan-23926a6a.js";import{V as ie}from"./VMenu-7f762766.js";import{V as se}from"./VSpacer-0b076bec.js";import{D as de,V as ue}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VLocaleProvider-cf46a668.js";import"./date-b85a0fab.js";import"./VDefaultsProvider-34413012.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./VWindowItem-799334b7.js";import"./lazy-e46c79b0.js";import"./ssrBoot-3aa6a9b0.js";import"./FSIcon-98d9a930.js";import"./FSSlider-4654d84f.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-0799e799.js";import"./VOverlay-1baa69a1.js";import"./display-dfdccc0e.js";const I=G({name:"FSDateTimeField",components:{FSTextField:M,FSCalendar:re,FSWindow:W,FSButton:b,FSClock:le,FSCard:oe,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:D,epochToLongTimeFormat:$}=te(),{getColors:u}=ae(),k=u(s.Error),F=u(s.Light),m=u(s.Dark),n=p(!1),a=p(0),i=p(0),t=p(null);e.modelValue&&(i.value=Math.floor((e.modelValue+D())%(24*60*60*1e3)),t.value=e.modelValue-i.value);const y=O(()=>e.editable?{"--fs-date-field-color":m.base,"--fs-date-field-error-color":k.base}:{"--fs-date-field-color":F.dark}),A=O(()=>{const R=[];for(const K of e.rules){const U=K(e.modelValue??null);typeof U=="string"&&R.push(U)}return R}),Z=()=>{r("update:modelValue",null),t.value=null,i.value=0},J=()=>{r("update:modelValue",t.value+i.value),n.value=!1};return Q(n,()=>{n.value||setTimeout(()=>a.value=0,100)}),{ColorEnum:s,innerDate:t,innerTime:i,messages:A,style:y,menu:n,tabs:a,onClear:Z,onSubmit:J,epochToLongTimeFormat:$}}});function me(e,r,D,$,u,k){const F=S("FSCalendar"),m=S("FSCard"),n=S("FSClock");return f(),c(ie,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:l(({props:a})=>[o(M,ee({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear},a),X({"prepend-inner":l(()=>[h(e.$slots,"prepend-inner",{},()=>[o(b,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[h(e.$slots,"label",{},()=>[o(z,{wrap:!1},{default:l(()=>[e.$props.label?(f(),c(w,{key:0,class:"fs-date-field-label",font:"text-overline",style:V(e.style)},{default:l(()=>[C(B(e.$props.label),1)]),_:1},8,["style"])):q("",!0),e.$props.label&&e.$props.required?(f(),c(w,{key:1,class:"fs-date-field-label",style:V([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[C(" * ")]),_:1},8,["style"])):q("",!0),o(se,{style:{"min-width":"40px"}}),e.messages.length>0?(f(),c(w,{key:2,class:"fs-date-field-messages",font:"text-overline",style:V(e.style)},{default:l(()=>[C(B(e.messages.join(", ")),1)]),_:1},8,["style"])):q("",!0)]),_:1})])]),key:"0"},Y(e.$slots,(i,t)=>({name:t,fn:l(y=>[h(e.$slots,t,_(x(y)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:l(()=>[o(W,{modelValue:e.tabs},{default:l(()=>[o(m,{width:"394px",elevation:!0,border:!1,value:0},{default:l(()=>[o(d,{width:"fill"},{default:l(()=>[o(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),o(b,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[1]||(r[1]=a=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),o(m,{width:"394px",elevation:!0,border:!1,value:1},{default:l(()=>[o(d,{width:"fill"},{default:l(()=>[o(n,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTime=a)},null,8,["color","modelValue"]),o(b,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const T=ne(I,[["render",me]]);I.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeField.vue"]};const pr={title:"Foundation/Shared/Input fields/DateTimeField",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:T,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},v={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:de}},render:(e,{argTypes:r})=>({components:{VForm:ue,FSDateTimeField:T,FSCol:d,FSRow:z},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var H,N,E;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(E=(N=g.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var P,j,L;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VForm,
      FSDateTimeField,
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
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(L=(j=v.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const fr=["Variations","Rules"];export{v as Rules,g as Variations,fr as __namedExportsOrder,pr as default};
