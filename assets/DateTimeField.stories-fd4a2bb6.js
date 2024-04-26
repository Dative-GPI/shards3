import{j as N,d as p,e as w,w as A,I as S,J as I,K as W,L as a,z as l,_ as z,Y as J,R as T,W as K,X,A as Y}from"./vue.esm-bundler-3386cb71.js";import{F as B}from"./FSTextField-26364a73.js";import{F as Z}from"./FSCalendar-ab3da69a.js";import{_ as j}from"./FSWindow-1b180cb9.js";import{_ as v}from"./FSButton-48dda364.js";import{F as G}from"./FSClock-77c8a64f.js";import{F as Q}from"./FSCard-a2619b8a.js";import{_ as d}from"./FSCol-30a69fbd.js";import{C as s,u as _}from"./useColors-36e524b3.js";import{u as x}from"./useAppTimeZone-ddbea443.js";import{u as ee}from"./useRules-e6c68f0f.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-e9f9429e.js";import{F as oe}from"./FSForm-d71f9a4f.js";import{_ as ae}from"./FSRow-9733beba.js";import{D as te}from"./rules-79222ba2.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./VSpacer-ec7842b6.js";import"./useRender-09edae02.js";import"./theme-620a0d92.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./index-8c130ea8.js";import"./transition-53ccad39.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./VIcon-abe9af82.js";import"./color-2c4e2e53.js";import"./tag-3fcf7e02.js";import"./density-e280830a.js";import"./loader-885a1a56.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VLocaleProvider-a33f3f33.js";import"./date-4401acfb.js";import"./VBtn-5871aaeb.js";import"./border-8045ffee.js";import"./elevation-cadef23c.js";import"./group-28a085bd.js";import"./dimensions-4c437c5c.js";import"./router-773ce02f.js";import"./index-dcfb76a3.js";import"./css-bcfd232c.js";import"./VWindowItem-6e8ee9a9.js";import"./lazy-99e4da96.js";import"./ssrBoot-9bcdb33f.js";import"./FSClickable-9ac660a4.js";import"./FSIcon-d790d92f.js";import"./FSSlider-bcdbe96d.js";import"./VSlider-ab2ef141.js";import"./FSText-81a21680.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-f4113d7b.js";import"./VOverlay-c04ebd43.js";import"./display-ae851a2a.js";const E=N({name:"FSDateTimeField",components:{FSTextField:B,FSCalendar:Z,FSWindow:j,FSButton:v,FSClock:G,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:V,epochToLongTimeFormat:h}=x(),{validateOn:C,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),m=p(null),i=p(0);e.modelValue&&(i.value=Math.floor((e.modelValue+V())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const H=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),L=w(()=>F(e.modelValue,e.rules)),P=()=>{r("update:modelValue",null),m.value=null,i.value=0},M=()=>{r("update:modelValue",(m.value??0)+i.value),t.value=!1};return A(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:C,messages:L,blurred:q,style:H,menu:t,tabs:u,onClear:P,onSubmit:M,epochToLongTimeFormat:h}}});function ne(e,r,V,h,C,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return I(),W(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(B,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),z({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[J(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,K(X(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[l(j,{modelValue:e.tabs},{default:a(()=>[l(n,{padding:"8px",width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{padding:"8px",width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(E,[["render",ne]]);E.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:te}},render:(e,{argTypes:r})=>({components:{FSForm:oe,FSDateTimeField:y,FSCol:d,FSRow:ae},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
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
    </FSForm>`})};var D,$,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=($=f.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var k,O,U;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      FSForm,
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
    <FSForm v-model="args.valid">
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
    </FSForm>\`
  })
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const gr=["Variations","Rules"];export{c as Rules,f as Variations,gr as __namedExportsOrder,Fr as default};
