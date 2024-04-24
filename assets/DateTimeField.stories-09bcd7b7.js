import{j as N,d as p,e as w,w as I,I as S,J as W,K as A,L as a,v as l,_ as z,Y as J,R as T,W as K,X,x as Y}from"./vue.esm-bundler-0c8496bd.js";import{F as B}from"./FSTextField-98f706c4.js";import{F as Z}from"./FSCalendar-7448531e.js";import{_ as j}from"./FSWindow-a1cd6d81.js";import{_ as c}from"./FSButton-aca46646.js";import{F as G}from"./FSClock-da8996f0.js";import{F as Q}from"./FSCard-4f1ec4e8.js";import{_ as d}from"./FSCol-0a323bdc.js";import{C as s,u as _}from"./useColors-b1c35b1c.js";import{u as x}from"./useAppTimeZone-b6ddcce6.js";import{u as ee}from"./useRules-a67d9042.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-36a8b303.js";import{F as oe}from"./FSForm-81d8e4b7.js";import{_ as ae}from"./FSRow-547598b4.js";import{D as te}from"./rules-7526a651.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./VSpacer-989c3452.js";import"./useRender-8701d95b.js";import"./theme-3745e9f1.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./VIcon-7bba82fc.js";import"./color-e947437a.js";import"./tag-0cc02cbd.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VLocaleProvider-a14c936e.js";import"./date-c073af9c.js";import"./VBtn-728b3902.js";import"./border-f9cc1939.js";import"./elevation-00653c06.js";import"./group-8484219c.js";import"./dimensions-13ab2ad3.js";import"./router-ad9465af.js";import"./index-5120e393.js";import"./css-0fb78066.js";import"./VWindowItem-014b06f0.js";import"./lazy-a9df4664.js";import"./ssrBoot-8013f04c.js";import"./FSClickable-c9a0944c.js";import"./FSIcon-e8919096.js";import"./FSSlider-08e439e4.js";import"./VSlider-48ac0e6b.js";import"./FSText-107f4924.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-e7f63e09.js";import"./VOverlay-471318e4.js";import"./display-237b16bb.js";const E=N({name:"FSDateTimeField",components:{FSTextField:B,FSCalendar:Z,FSWindow:j,FSButton:c,FSClock:G,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:V,epochToLongTimeFormat:h}=x(),{validateOn:C,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),m=p(null),i=p(0);e.modelValue&&(i.value=Math.floor((e.modelValue+V())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const H=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),L=w(()=>F(e.modelValue,e.rules)),P=()=>{r("update:modelValue",null),m.value=null,i.value=0},M=()=>{r("update:modelValue",(m.value??0)+i.value),t.value=!1};return I(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:C,messages:L,blurred:q,style:H,menu:t,tabs:u,onClear:P,onSubmit:M,epochToLongTimeFormat:h}}});function ne(e,r,V,h,C,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return W(),A(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(B,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),z({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(c,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[J(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,K(X(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:a(()=>[l(j,{modelValue:e.tabs},{default:a(()=>[l(n,{padding:"8px",width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(c,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{padding:"8px",width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(c,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(E,[["render",ne]]);E.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},v={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:te}},render:(e,{argTypes:r})=>({components:{FSForm:oe,FSDateTimeField:y,FSCol:d,FSRow:ae},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(R=($=f.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var k,O,U;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const gr=["Variations","Rules"];export{v as Rules,f as Variations,gr as __namedExportsOrder,Fr as default};
