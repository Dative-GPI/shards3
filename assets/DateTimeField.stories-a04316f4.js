import{g as N,d as p,j as w,w as W,J as S,K as z,L as I,M as a,z as l,X as A,Y as J,R as T,S as K,U as X,x as Y}from"./vue.esm-bundler-e580dd1f.js";import{F as U}from"./FSTextField-8126a87a.js";import{F as Z}from"./FSCalendar-881c1cef.js";import{_ as j}from"./FSWindow-2bc0cca7.js";import{_ as v}from"./FSButton-9fb570ca.js";import{F as G}from"./FSClock-dfb1c8a1.js";import{F as Q}from"./FSCard-c77c66af.js";import{_ as d}from"./FSCol-fcea4dc1.js";import{C as s,u as _}from"./useColors-b2cb658b.js";import{u as x}from"./useTimeZone-39182ae5.js";import{u as ee}from"./useRules-a8018b0f.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-f3c71475.js";import{D as oe,F as ae}from"./FSForm-68b3e454.js";import{_ as te}from"./FSRow-50904d6e.js";import"./FSSpan-73185be3.js";import"./useSlots-a039f59b.js";import"./VSpacer-9103d4e2.js";import"./useRender-16acb9c4.js";import"./theme-a3bb880e.js";import"./VTextField-ce85aec3.js";import"./VField-1fbd78f2.js";import"./index-96d842ab.js";import"./transition-7d6b8783.js";import"./VLabel-a546dd45.js";import"./VInput-1e999169.js";import"./locale-405fbfb1.js";import"./proxiedModel-3aca154f.js";import"./VIcon-bb9e7f8a.js";import"./color-0af6d6f5.js";import"./tag-fa7badbe.js";import"./density-be1d42ad.js";import"./loader-8bc08e66.js";import"./intersectionObserver-4acce169.js";import"./rounded-2552fce2.js";import"./forwardRefs-e658ad70.js";import"./index-e90df875.js";import"./VLocaleProvider-e44d95e8.js";import"./date-626cd7c3.js";import"./VDefaultsProvider-5c112428.js";import"./VBtn-40f45ac1.js";import"./border-6c565bcc.js";import"./elevation-02492a14.js";import"./group-1e6e82bd.js";import"./dimensions-10c7935e.js";import"./router-1d334446.js";import"./index-a22223d0.js";import"./VProgressCircular-88630010.js";import"./resizeObserver-88f5705d.js";import"./VWindowItem-a7f6bd04.js";import"./lazy-075f19a9.js";import"./ssrBoot-d5661322.js";import"./vue-router-092e674d.js";import"./css-ca36ed75.js";import"./FSIcon-4fed0819.js";import"./FSSlider-7b6d62f4.js";import"./VSlider-5fff550e.js";import"./FSText-62d9f6c8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-873b030c.js";import"./VOverlay-1db7e4ae.js";import"./display-0f118c60.js";const E=N({name:"FSDateTimeField",components:{FSTextField:U,FSCalendar:Z,FSWindow:j,FSButton:v,FSClock:G,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:C,epochToLongTimeFormat:V}=x(),{validateOn:h,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),i=p(0),m=p(null);e.modelValue&&(i.value=Math.floor((e.modelValue+C())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const H=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),L=w(()=>F(e.modelValue,e.rules)),M=()=>{r("update:modelValue",null),m.value=null,i.value=0},P=()=>{r("update:modelValue",m.value+i.value),t.value=!1};return W(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:h,messages:L,blurred:q,style:H,menu:t,tabs:u,onClear:M,onSubmit:P,epochToLongTimeFormat:V}}});function ne(e,r,C,V,h,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return z(),I(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(U,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),A({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[J(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,K(X(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:a(()=>[l(j,{modelValue:e.tabs},{default:a(()=>[l(n,{width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(E,[["render",ne]]);E.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:oe}},render:(e,{argTypes:r})=>({components:{FSForm:ae,FSDateTimeField:y,FSCol:d,FSRow:te},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var D,$,k;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=($=f.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var R,O,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const gr=["Variations","Rules"];export{c as Rules,f as Variations,gr as __namedExportsOrder,Fr as default};
