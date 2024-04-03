import{j as z,d as c,e as m,J as y,K as I,Q as J,z as o,X as K,Y as Q,M as n,F as X,R as T,S as Y,U as Z}from"./vue.esm-bundler-37de1696.js";import{F as G,a as W}from"./FSCalendarTwin-47ef5bd8.js";import{F as O}from"./FSTextField-39426dcd.js";import{_ as U}from"./FSButton-6343e5ff.js";import{F as x}from"./FSClock-002c5cdd.js";import{_ as d}from"./FSCol-927ba931.js";import{_ as h}from"./FSRow-632ce14e.js";import{C as p,u as _}from"./useColors-ba22af06.js";import{u as ee}from"./useAppTimeZone-02cdf7e8.js";import{u as re}from"./useRules-724d25b8.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ae,F as oe}from"./FSForm-f855fd72.js";import"./FSCard-61ed401b.js";import"./css-cb27a64f.js";import"./VOverlay-8f6f9ccb.js";import"./forwardRefs-e658ad70.js";import"./useRender-ccb83440.js";import"./theme-07d11e72.js";import"./proxiedModel-e8e26ca7.js";import"./loader-e58dd003.js";import"./color-efc02365.js";import"./intersectionObserver-12fc3323.js";import"./locale-ee313da6.js";import"./rounded-7d64095f.js";import"./tag-9d688242.js";import"./dimensions-4b009e60.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ef1336ae.js";import"./transition-4a8f6120.js";import"./VDefaultsProvider-062db757.js";import"./useTranslations-eec3878c.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./VLocaleProvider-388aa146.js";import"./date-35a561fc.js";import"./VBtn-359968d9.js";import"./border-fb870e60.js";import"./density-ebf3f2c2.js";import"./elevation-66cfbdec.js";import"./group-bc028d0d.js";import"./VIcon-122293c7.js";import"./index-737116aa.js";import"./VProgressCircular-aa80f032.js";import"./resizeObserver-8d36419f.js";import"./VSpacer-63748a98.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./index-3a20b1dd.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./index-90c07952.js";import"./vue-router-f501b7d2.js";import"./FSIcon-486fd767.js";import"./FSSlider-93289942.js";import"./VSlider-7526c397.js";import"./FSText-13835655.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=z({name:"FSDateTimeRangeField",components:{FSSubmitDialog:G,FSCalendarTwin:W,FSTextField:O,FSButton:U,FSClock:x,FSCol:d,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:g,epochToShortTimeFormat:V}=ee(),{validateOn:C,blurred:q,getMessages:b}=re(),{getColors:i}=_(),S=i(p.Error),a=i(p.Light),f=i(p.Dark),s=c(!1),l=c(null),u=c(0),t=c(0);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value];default:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),u.value=Math.floor((e.modelValue[1]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value,e.modelValue[1]-u.value]}const j=m(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":S.base}:{"--fs-date-field-color":a.dark}),E=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(N=>V(N)).join(" - ")),M=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),H=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),P=m(()=>b(e.modelValue,e.rules,!0));return{ColorEnum:p,validateOn:C,messages:P,blurred:q,style:j,dialog:s,toShortTimeFormat:E,innerDateLeft:M,innerTimeLeft:t,innerDateRight:H,innerTimeRight:u,innerDateRange:l,onClick:()=>{e.editable&&(s.value=!0)},onClear:()=>{r("update:modelValue",null),t.value=0,u.value=0,l.value=null},onSubmit:()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&r("update:modelValue",[l.value[0]+t.value,l.value[1]+u.value]),s.value=!1}}}});function te(e,r,g,V,C,q){const b=y("FSCalendarTwin"),i=y("FSClock"),S=y("FSSubmitDialog");return I(),J(X,null,[o(O,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},K({"prepend-inner":n(()=>[T(e.$slots,"prepend-inner",{},()=>[o(U,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[Q(e.$slots,(a,f)=>({name:f,fn:n(s=>[T(e.$slots,f,Y(Z(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),o(S,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[4]||(r[4]=a=>e.dialog=a)},{body:n(()=>[o(d,null,{default:n(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(h,{width:"100%"},{default:n(()=>[o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":r[3]||(r[3]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const R=le(L,[["render",te]]);L.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};const fr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateTimeRangeField:R,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},F={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ae}},render:(e,{argTypes:r})=>({components:{FSForm:oe,FSDateTimeRangeField:R,FSCol:d,FSRow:h},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var D,w,k;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeRangeField,
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
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Uneditable date & time range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(k=(w=v.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var $,A,B;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      FSDateTimeRangeField,
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
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(B=(A=F.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const cr=["Variations","Rules"];export{F as Rules,v as Variations,cr as __namedExportsOrder,fr as default};
