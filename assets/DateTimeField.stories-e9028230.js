import{j as N,d as p,e as w,w as z,J as S,K as A,L as I,M as a,z as l,X as W,Y as J,R as T,S as K,U as X,x as Y}from"./vue.esm-bundler-37de1696.js";import{F as U}from"./FSTextField-bde70a11.js";import{F as Z}from"./FSCalendar-459ab3aa.js";import{_ as j}from"./FSWindow-3fc735d0.js";import{_ as v}from"./FSButton-662b4933.js";import{F as G}from"./FSClock-c1f85d99.js";import{F as Q}from"./FSCard-40979aed.js";import{_ as d}from"./FSCol-4074aa47.js";import{C as s,u as _}from"./useColors-ba22af06.js";import{u as x}from"./useAppTimeZone-86703f1e.js";import{u as ee}from"./useRules-724d25b8.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VMenu-7943669c.js";import{D as oe,F as ae}from"./FSForm-2ab7af51.js";import{_ as te}from"./FSRow-fc81033b.js";import"./FSSpan-e91c3439.js";import"./useSlots-1bcfd838.js";import"./VSpacer-63748a98.js";import"./useRender-ccb83440.js";import"./theme-07d11e72.js";import"./VTextField-deb08e50.js";import"./VField-7fc7ddcc.js";import"./index-3a20b1dd.js";import"./transition-4a8f6120.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./tag-9d688242.js";import"./density-ebf3f2c2.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./rounded-7d64095f.js";import"./forwardRefs-e658ad70.js";import"./index-90c07952.js";import"./VLocaleProvider-4894f9b4.js";import"./date-4ac5a4a2.js";import"./VDefaultsProvider-062db757.js";import"./VBtn-fd965842.js";import"./border-fb870e60.js";import"./elevation-66cfbdec.js";import"./group-bc028d0d.js";import"./dimensions-4b009e60.js";import"./router-80c118e7.js";import"./index-737116aa.js";import"./VProgressCircular-aa80f032.js";import"./resizeObserver-8d36419f.js";import"./VWindowItem-d7611044.js";import"./lazy-193ed5d1.js";import"./ssrBoot-9a42e176.js";import"./vue-router-f501b7d2.js";import"./css-b545198d.js";import"./FSIcon-486fd767.js";import"./FSSlider-72f4f8ed.js";import"./VSlider-7526c397.js";import"./FSText-988725c4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-eec3878c.js";import"./VOverlay-5dd1d9ab.js";import"./display-62cdc35d.js";const E=N({name:"FSDateTimeField",components:{FSTextField:U,FSCalendar:Z,FSWindow:j,FSButton:v,FSClock:G,FSCard:Q,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:C,epochToLongTimeFormat:V}=x(),{validateOn:h,blurred:q,getMessages:F}=ee(),{getColors:n}=_(),g=n(s.Error),o=n(s.Light),b=n(s.Dark),t=p(!1),u=p(0),m=p(null),i=p(0);e.modelValue&&(i.value=Math.floor((e.modelValue+C())%(24*60*60*1e3)),m.value=e.modelValue-i.value);const H=w(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":g.base}:{"--fs-date-field-color":o.dark}),L=w(()=>F(e.modelValue,e.rules)),M=()=>{r("update:modelValue",null),m.value=null,i.value=0},P=()=>{r("update:modelValue",(m.value??0)+i.value),t.value=!1};return z(t,()=>{t.value||setTimeout(()=>u.value=0,100)}),{ColorEnum:s,innerDate:m,innerTime:i,validateOn:h,messages:L,blurred:q,style:H,menu:t,tabs:u,onClear:M,onSubmit:P,epochToLongTimeFormat:V}}});function ne(e,r,C,V,h,q){const F=S("FSCalendar"),n=S("FSCard"),g=S("FSClock");return A(),I(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[4]||(r[4]=o=>e.menu=o)},{activator:a(({props:o})=>[l(U,Y({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=b=>e.blurred=!0)},o),W({"prepend-inner":a(()=>[T(e.$slots,"prepend-inner",{},()=>[l(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[J(e.$slots,(b,t)=>({name:t,fn:a(u=>[T(e.$slots,t,K(X(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick:clear"])]),default:a(()=>[l(j,{modelValue:e.tabs},{default:a(()=>[l(n,{padding:"8px",width:"346px",elevation:!0,border:!1,value:0},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(F,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[1]||(r[1]=o=>e.innerDate=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[2]||(r[2]=o=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),l(n,{padding:"8px",width:"394px",elevation:!0,border:!1,value:1},{default:a(()=>[l(d,{width:"fill"},{default:a(()=>[l(g,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[3]||(r[3]=o=>e.innerTime=o)},null,8,["color","modelValue"]),l(v,{width:"100%",color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const y=re(E,[["render",ne]]);E.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeField",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:y,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
