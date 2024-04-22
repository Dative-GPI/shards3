import{j as N,d as p,e as w,w as I,H as S,I as z,J as A,K as a,z as l,Y as W,Z,S as T,U as J,V as K,x as Y}from"./vue.esm-bundler-9b0e8103.js";import{F as U}from"./FSTextField-55593349.js";import{F as G}from"./FSCalendar-36b6c22b.js";import{_ as H}from"./FSWindow-ef562317.js";import{_ as v}from"./FSButton-4f53dca1.js";import{F as Q}from"./FSClock-5ef4d6db.js";import{F as X}from"./FSCard-bd4b7ce0.js";import{_ as d}from"./FSCol-417d1c42.js";import{C as s,u as _}from"./useColors-c8cdc69f.js";import{u as x}from"./useAppTimeZone-7e26f50a.js";import{u as ee}from"./useRules-1f7652b9.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-38668fe2.js";import{F as oe}from"./FSForm-2021d9fe.js";import{_ as ae}from"./FSRow-efd9bf42.js";import{D as te}from"./rules-4b68c01e.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./VSpacer-fd2fc595.js";import"./useRender-7c6c7a38.js";import"./theme-eb9d1a1f.js";import"./VTextField-ed34766d.js";import"./VField-719bff6c.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./tag-6bef4934.js";import"./density-104762f9.js";import"./loader-e562d735.js";import"./VProgressCircular-49cc274e.js";import"./resizeObserver-d1864ccd.js";import"./rounded-f08b035c.js";import"./VDefaultsProvider-b110751b.js";import"./forwardRefs-e658ad70.js";import"./index-d737aecc.js";import"./VLocaleProvider-cc23af1e.js";import"./date-2780c143.js";import"./VBtn-cad3ae10.js";import"./border-e6ad3d9a.js";import"./elevation-9129e0f4.js";import"./group-76451b20.js";import"./dimensions-a3779498.js";import"./router-cb82541f.js";import"./index-5b7905d8.js";import"./css-a20776b9.js";import"./VWindowItem-67d3eb01.js";import"./lazy-9297b748.js";import"./ssrBoot-3ada7612.js";import"./FSClickable-1ebcabee.js";import"./FSIcon-42763d21.js";import"./FSSlider-837057ea.js";import"./VSlider-9886bac6.js";import"./FSText-84a86aec.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-8945c1d2.js";import"./VOverlay-b685a01d.js";import"./display-cd82cc66.js";const j=N({name:"FSDateTimeField",components:{FSTextField:U,FSCalendar:G,FSWindow:H,FSButton:v,FSClock:Q,FSCard:X,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:C,epochToLongTimeFormat:V}=x(),{validateOn:h,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),m=p(null),i=p(0);e.modelValue&&(i.value=Math.floor((e.modelValue+C())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const E=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),P=w(()=>F(e.modelValue,e.rules)),L=()=>{r("update:modelValue",null),m.value=null,i.value=0},M=()=>{r("update:modelValue",(m.value??0)+i.value),t.value=!1};return I(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:h,messages:P,blurred:q,style:E,menu:t,tabs:u,onClear:L,onSubmit:M,epochToLongTimeFormat:V}}});function ne(e,r,C,V,h,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return z(),A(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(U,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),W({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[Z(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,J(K(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:a(()=>[l(H,{modelValue:e.tabs},{default:a(()=>[l(n,{padding:"8px",width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{padding:"8px",width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(j,[["render",ne]]);j.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
