import{j as N,d as v,e as m,I as y,J as z,Q as J,A as o,_ as Q,Y as W,L as n,F as X,R as T,W as Y,X as Z}from"./vue.esm-bundler-3416a090.js";import{F as G,a as K}from"./FSCalendarTwin-309ed1f4.js";import{F as U}from"./FSTextField-bb895cdf.js";import{F as O}from"./FSButton-6f3d0d12.js";import{F as x}from"./FSClock-ca18828e.js";import{_ as d}from"./FSCol-5731c3c4.js";import{_ as h}from"./FSRow-5edf997c.js";import{C as p,u as _}from"./useColors-1faf681b.js";import{u as ee}from"./useAppTimeZone-045fd735.js";import{u as re}from"./useRules-5e1988ee.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{F as ae}from"./FSForm-45d9cda9.js";import{D as oe}from"./rules-72533546.js";import"./FSFadeOut-8955926a.js";import"./useDebounce-736cfd0a.js";import"./css-69ed11d9.js";import"./FSCard-92f27951.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./forwardRefs-e658ad70.js";import"./useRender-fb717f1b.js";import"./theme-2c100cd8.js";import"./proxiedModel-868611da.js";import"./loader-b2c56b78.js";import"./color-5c733e3b.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./locale-be130c16.js";import"./rounded-e101edac.js";import"./dimensions-97f2f62c.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./transition-6086c96b.js";import"./VDefaultsProvider-ef2fd514.js";import"./useTranslations-ff263049.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./VLocaleProvider-3cd90636.js";import"./date-29e3b2ba.js";import"./VBtn-f59107e2.js";import"./border-1657a325.js";import"./density-174ddef7.js";import"./elevation-9288a0e5.js";import"./group-f3cba4ff.js";import"./index-a9118fe7.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./index-46378e0b.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./FSClickable-d5c04d60.js";import"./FSIcon-f518d728.js";import"./FSSlider-e55ae7d0.js";import"./VSlider-2ab627b9.js";import"./FSText-4221a42d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=N({name:"FSDateTimeRangeField",components:{FSDialogSubmit:G,FSCalendarTwin:K,FSTextField:U,FSButton:O,FSClock:x,FSCol:d,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:g,epochToShortTimeFormat:V}=ee(),{validateOn:C,blurred:q,getMessages:b}=re(),{getColors:i}=_(),S=i(p.Error),a=i(p.Light),f=i(p.Dark),s=v(!1),l=v(null),u=v(0),t=v(0);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:{t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value];break}default:{t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),u.value=Math.floor((e.modelValue[1]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value,e.modelValue[1]-u.value];break}}const j=m(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":S.base}:{"--fs-date-field-color":a.dark}),E=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(I=>V(I)).join(" - ")),H=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),M=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),P=m(()=>b(e.modelValue,e.rules,!0));return{ColorEnum:p,validateOn:C,messages:P,blurred:q,style:j,dialog:s,toShortTimeFormat:E,innerDateLeft:H,innerTimeLeft:t,innerDateRight:M,innerTimeRight:u,innerDateRange:l,onClick:()=>{e.editable&&(s.value=!0)},onClear:()=>{r("update:modelValue",null),t.value=0,u.value=0,l.value=null},onSubmit:()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&r("update:modelValue",[l.value[0]+t.value,l.value[1]+u.value]),s.value=!1}}}});function te(e,r,g,V,C,q){const b=y("FSCalendarTwin"),i=y("FSClock"),S=y("FSDialogSubmit");return z(),J(X,null,[o(U,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},Q({"prepend-inner":n(()=>[T(e.$slots,"prepend-inner",{},()=>[o(O,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[W(e.$slots,(a,f)=>({name:f,fn:n(s=>[T(e.$slots,f,Y(Z(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),o(S,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[4]||(r[4]=a=>e.dialog=a)},{body:n(()=>[o(d,null,{default:n(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(h,{width:"100%"},{default:n(()=>[o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":r[3]||(r[3]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const R=le(L,[["render",te]]);L.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};const Fr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateTimeRangeField:R,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(B=(A=F.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const br=["Variations","Rules"];export{F as Rules,c as Variations,br as __namedExportsOrder,Fr as default};
