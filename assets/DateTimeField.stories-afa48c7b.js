import{j as N,d as p,e as w,w as A,I as S,J as I,K as W,L as a,z as l,_ as z,Y as J,R as T,W as K,X,A as Y}from"./vue.esm-bundler-82a4b45a.js";import{F as B}from"./FSTextField-ffa06949.js";import{F as Z}from"./FSCalendar-32f8e3ff.js";import{_ as j}from"./FSWindow-a766ff71.js";import{_ as v}from"./FSButton-c71cf6ce.js";import{F as G}from"./FSClock-4a574b25.js";import{F as Q}from"./FSCard-ebbda5de.js";import{_ as d}from"./FSCol-8326ac62.js";import{C as s,u as _}from"./useColors-698e8610.js";import{u as x}from"./useAppTimeZone-32a18909.js";import{u as ee}from"./useRules-7b0f86fa.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-9dbbffaa.js";import{F as oe}from"./FSForm-4bb154cf.js";import{_ as ae}from"./FSRow-2ccfd21b.js";import{D as te}from"./rules-77c0d51e.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./VSpacer-dfdceece.js";import"./useRender-9b5fad83.js";import"./theme-380662da.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./index-7dc37899.js";import"./transition-0cde2f94.js";import"./VLabel-db8bd06b.js";import"./VInput-6edbe327.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./VIcon-cdae09b0.js";import"./color-616211f8.js";import"./tag-c823df72.js";import"./density-d6a10252.js";import"./loader-80aadcba.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./VLocaleProvider-607cb07d.js";import"./date-46b501d1.js";import"./VBtn-68d719d2.js";import"./border-7fe0702c.js";import"./elevation-2177f5c6.js";import"./group-a18b2437.js";import"./dimensions-7b60e06e.js";import"./router-7318af59.js";import"./index-0f4b4beb.js";import"./css-c39c4a6e.js";import"./VWindowItem-2077a2fd.js";import"./lazy-ee12d092.js";import"./ssrBoot-4291a4a7.js";import"./FSClickable-a4cc0438.js";import"./FSIcon-97799824.js";import"./FSSlider-a711a8ad.js";import"./VSlider-0239888f.js";import"./FSText-4ee7bf26.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-06e4f6c5.js";import"./VOverlay-e517ca89.js";import"./display-8a1f63da.js";const E=N({name:"FSDateTimeField",components:{FSTextField:B,FSCalendar:Z,FSWindow:j,FSButton:v,FSClock:G,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:V,epochToLongTimeFormat:h}=x(),{validateOn:C,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),m=p(null),i=p(0);e.modelValue&&(i.value=Math.floor((e.modelValue+V())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const H=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),L=w(()=>F(e.modelValue,e.rules)),P=()=>{r("update:modelValue",null),m.value=null,i.value=0},M=()=>{r("update:modelValue",(m.value??0)+i.value),t.value=!1};return A(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:C,messages:L,blurred:q,style:H,menu:t,tabs:u,onClear:P,onSubmit:M,epochToLongTimeFormat:h}}});function ne(e,r,V,h,C,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return I(),W(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(B,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),z({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[J(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,K(X(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[l(j,{modelValue:e.tabs},{default:a(()=>[l(n,{padding:"8px",width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{padding:"8px",width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(E,[["render",ne]]);E.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
