import{j as N,d as c,e as m,H as y,I as z,R as Z,z as o,Y as K,Z as Y,K as n,F as G,S as T,U as J,V as Q}from"./vue.esm-bundler-9b0e8103.js";import{F as W,a as X}from"./FSCalendarTwin-fb98d378.js";import{F as O}from"./FSTextField-458b2a19.js";import{_ as U}from"./FSButton-8289abd7.js";import{F as x}from"./FSClock-527352a0.js";import{_ as d}from"./FSCol-417d1c42.js";import{_ as h}from"./FSRow-efd9bf42.js";import{C as p,u as _}from"./useColors-c8cdc69f.js";import{u as ee}from"./useAppTimeZone-7e26f50a.js";import{u as re}from"./useRules-1f7652b9.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{F as ae}from"./FSForm-2021d9fe.js";import{D as oe}from"./rules-4b68c01e.js";import"./FSCard-bd4b7ce0.js";import"./css-a20776b9.js";import"./VOverlay-b685a01d.js";import"./forwardRefs-e658ad70.js";import"./useRender-7c6c7a38.js";import"./theme-eb9d1a1f.js";import"./proxiedModel-bfd89816.js";import"./border-e6ad3d9a.js";import"./color-8a9bca19.js";import"./dimensions-a3779498.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./locale-e5242025.js";import"./router-cb82541f.js";import"./transition-6fc66ff9.js";import"./VDefaultsProvider-b110751b.js";import"./useTranslations-8945c1d2.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./VLocaleProvider-d1053338.js";import"./date-2780c143.js";import"./VBtn-6366fd39.js";import"./density-104762f9.js";import"./elevation-9129e0f4.js";import"./rounded-f08b035c.js";import"./tag-6bef4934.js";import"./group-76451b20.js";import"./loader-ce3d0f3e.js";import"./intersectionObserver-569479cd.js";import"./VIcon-dbd6f8e0.js";import"./index-5b7905d8.js";import"./VProgressCircular-a5b71e87.js";import"./resizeObserver-d1864ccd.js";import"./VSpacer-fd2fc595.js";import"./VTextField-abdb6d44.js";import"./VField-0cfa6d9e.js";import"./index-f5f914d5.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./index-d737aecc.js";import"./FSClickable-154d7a9c.js";import"./FSIcon-42763d21.js";import"./FSSlider-837057ea.js";import"./VSlider-9886bac6.js";import"./FSText-84a86aec.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=N({name:"FSDateTimeRangeField",components:{FSDialogSubmit:W,FSCalendarTwin:X,FSTextField:O,FSButton:U,FSClock:x,FSCol:d,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:g,epochToShortTimeFormat:V}=ee(),{validateOn:C,blurred:q,getMessages:b}=re(),{getColors:i}=_(),S=i(p.Error),a=i(p.Light),f=i(p.Dark),s=c(!1),l=c(null),u=c(0),t=c(0);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value];default:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),u.value=Math.floor((e.modelValue[1]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value,e.modelValue[1]-u.value]}const j=m(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":S.base}:{"--fs-date-field-color":a.dark}),E=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(I=>V(I)).join(" - ")),H=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),M=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),P=m(()=>b(e.modelValue,e.rules,!0));return{ColorEnum:p,validateOn:C,messages:P,blurred:q,style:j,dialog:s,toShortTimeFormat:E,innerDateLeft:H,innerTimeLeft:t,innerDateRight:M,innerTimeRight:u,innerDateRange:l,onClick:()=>{e.editable&&(s.value=!0)},onClear:()=>{r("update:modelValue",null),t.value=0,u.value=0,l.value=null},onSubmit:()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&r("update:modelValue",[l.value[0]+t.value,l.value[1]+u.value]),s.value=!1}}}});function te(e,r,g,V,C,q){const b=y("FSCalendarTwin"),i=y("FSClock"),S=y("FSDialogSubmit");return z(),Z(G,null,[o(O,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},K({"prepend-inner":n(()=>[T(e.$slots,"prepend-inner",{},()=>[o(U,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[Y(e.$slots,(a,f)=>({name:f,fn:n(s=>[T(e.$slots,f,J(Q(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),o(S,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[4]||(r[4]=a=>e.dialog=a)},{body:n(()=>[o(d,null,{default:n(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(h,{width:"100%"},{default:n(()=>[o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":r[3]||(r[3]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const R=le(L,[["render",te]]);L.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};const cr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateTimeRangeField:R,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},F={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:oe}},render:(e,{argTypes:r})=>({components:{FSForm:ae,FSDateTimeRangeField:R,FSCol:d,FSRow:h},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(B=(A=F.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const vr=["Variations","Rules"];export{F as Rules,v as Variations,vr as __namedExportsOrder,cr as default};
