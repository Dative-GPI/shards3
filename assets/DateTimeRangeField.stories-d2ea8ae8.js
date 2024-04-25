import{j as N,d as v,e as m,I as y,J as z,Q as J,v as o,_ as Q,Y as W,L as n,F as X,R as T,W as Y,X as Z}from"./vue.esm-bundler-b2d5d1a7.js";import{F as G,a as K}from"./FSCalendarTwin-b6b8024e.js";import{F as U}from"./FSTextField-c3a4d26e.js";import{_ as O}from"./FSButton-c6abd92f.js";import{F as _}from"./FSClock-2bb2476f.js";import{_ as d}from"./FSCol-8af42802.js";import{_ as h}from"./FSRow-ad0fe7ea.js";import{C as p,u as x}from"./useColors-1799ca43.js";import{u as ee}from"./useAppTimeZone-de20a68e.js";import{u as re}from"./useRules-999feed4.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{F as ae}from"./FSForm-80812884.js";import{D as oe}from"./rules-c10faf45.js";import"./FSFadeOut-6d4aaf03.js";import"./useDebounce-f8cba0e6.js";import"./css-9d61559d.js";import"./FSCard-c003de31.js";import"./VOverlay-9625a4d7.js";import"./forwardRefs-e658ad70.js";import"./useRender-3dd3f3c7.js";import"./theme-66179376.js";import"./proxiedModel-92ce7dab.js";import"./loader-b58e9405.js";import"./color-1b074b3b.js";import"./VProgressCircular-b30bdd5e.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./locale-602cc07b.js";import"./rounded-5a33644a.js";import"./dimensions-31f51931.js";import"./display-5af9f9da.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./transition-42bdb3ea.js";import"./VDefaultsProvider-37d19a63.js";import"./useTranslations-5ccc1c67.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./VLocaleProvider-879ac189.js";import"./date-ae0b9fdc.js";import"./VBtn-1107c213.js";import"./border-dbfd717a.js";import"./density-aec4d930.js";import"./elevation-b9c046ce.js";import"./group-d1f5e06d.js";import"./index-7713af82.js";import"./VSpacer-73e95d50.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./index-c0240410.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./index-4361ac4f.js";import"./FSClickable-f13d43bf.js";import"./FSIcon-6a2b7637.js";import"./FSSlider-8fcccafc.js";import"./VSlider-4eb9fdef.js";import"./FSText-747b43d9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=N({name:"FSDateTimeRangeField",components:{FSDialogSubmit:G,FSCalendarTwin:K,FSTextField:U,FSButton:O,FSClock:_,FSCol:d,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:g,epochToShortTimeFormat:V}=ee(),{validateOn:C,blurred:q,getMessages:b}=re(),{getColors:i}=x(),S=i(p.Error),a=i(p.Light),f=i(p.Dark),s=v(!1),l=v(null),u=v(0),t=v(0);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:{t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value];break}default:{t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),u.value=Math.floor((e.modelValue[1]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value,e.modelValue[1]-u.value];break}}const j=m(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":S.base}:{"--fs-date-field-color":a.dark}),E=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(I=>V(I)).join(" - ")),H=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),M=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),P=m(()=>b(e.modelValue,e.rules,!0));return{ColorEnum:p,validateOn:C,messages:P,blurred:q,style:j,dialog:s,toShortTimeFormat:E,innerDateLeft:H,innerTimeLeft:t,innerDateRight:M,innerTimeRight:u,innerDateRange:l,onClick:()=>{e.editable&&(s.value=!0)},onClear:()=>{r("update:modelValue",null),t.value=0,u.value=0,l.value=null},onSubmit:()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&r("update:modelValue",[l.value[0]+t.value,l.value[1]+u.value]),s.value=!1}}}});function te(e,r,g,V,C,q){const b=y("FSCalendarTwin"),i=y("FSClock"),S=y("FSDialogSubmit");return z(),J(X,null,[o(U,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},Q({"prepend-inner":n(()=>[T(e.$slots,"prepend-inner",{},()=>[o(O,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[W(e.$slots,(a,f)=>({name:f,fn:n(s=>[T(e.$slots,f,Y(Z(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),o(S,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[4]||(r[4]=a=>e.dialog=a)},{body:n(()=>[o(d,null,{default:n(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(h,{width:"100%"},{default:n(()=>[o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":r[3]||(r[3]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const R=le(L,[["render",te]]);L.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};const cr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateTimeRangeField:R,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var D,w,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var $,A,B;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(A=F.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Fr=["Variations","Rules"];export{F as Rules,c as Variations,Fr as __namedExportsOrder,cr as default};
