import{G as N,d as c,e as m,_ as y,H as z,I as G,z as o,V as J,W as Q,M as n,F as W,J as T,Q as Z,R as K}from"./vue.esm-bundler-d8049c85.js";import{F as X}from"./FSSubmitDialog-5dba0ff8.js";import{F as Y}from"./FSCalendarTwin-6f812e23.js";import{F as O}from"./FSTextField-7a5a6ce0.js";import{_ as U}from"./FSButton-819b5655.js";import{F as _}from"./FSClock-a5ac622d.js";import{_ as d}from"./FSCol-39bd052c.js";import{_ as h}from"./FSRow-b5482a77.js";import{C as p,u as x}from"./useColors-5c9cff43.js";import{u as ee}from"./useTimeZone-01b1e25e.js";import{u as re}from"./VField-98076a13.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ae,F as oe}from"./FSForm-57dbe236.js";import"./FSCard-c2aada98.js";import"./css-50f0aa1d.js";import"./useBreakpoints-7d02383c.js";import"./VOverlay-0482e356.js";import"./forwardRefs-e658ad70.js";import"./useRender-29d234e5.js";import"./theme-540b65c4.js";import"./locale-0b822523.js";import"./loader-cb170f8e.js";import"./color-339b05ed.js";import"./rounded-0d200380.js";import"./tag-fffb6ba6.js";import"./dimensions-c0ade26a.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./router-e2bea4dd.js";import"./transition-a0827c0d.js";import"./VDefaultsProvider-2b53b1ea.js";import"./useTranslations-503566cb.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./VLocaleProvider-2ed70586.js";import"./date-7f94e111.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./density-de8a38cb.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./VIcon-76640d9b.js";import"./index-ea9d807b.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./VSpacer-e253cf80.js";import"./VTextField-bdebe004.js";import"./VInput-95d46afc.js";import"./index-a9977cc4.js";import"./index-d961be33.js";import"./FSIcon-4847f868.js";import"./FSSlider-12eb108d.js";import"./VSlider-a1588a27.js";import"./FSText-776f12dd.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const L=N({name:"FSDateTimeRangeField",components:{FSSubmitDialog:X,FSCalendarTwin:Y,FSTextField:O,FSButton:U,FSClock:_,FSCol:d,FSRow:h},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:p.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:g,epochToShortTimeFormat:V}=ee(),{validateOn:C,blurred:q,getMessages:b}=re(),{getColors:i}=x(),S=i(p.Error),a=i(p.Light),f=i(p.Dark),s=c(!1),t=c(0),u=c(0),l=c(null);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value];default:t.value=Math.floor((e.modelValue[0]+g())%(24*60*60*1e3)),u.value=Math.floor((e.modelValue[1]+g())%(24*60*60*1e3)),l.value=[e.modelValue[0]-t.value,e.modelValue[1]-u.value]}const E=m(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":S.base}:{"--fs-date-field-color":a.dark}),H=m(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(I=>V(I)).join(" - ")),M=m(()=>l.value&&Array.isArray(l.value)&&l.value.length?l.value[0]:null),j=m(()=>l.value&&Array.isArray(l.value)&&l.value.length>1?l.value[1]:null),P=m(()=>b(e.modelValue,e.rules,!0));return{ColorEnum:p,validateOn:C,messages:P,blurred:q,style:E,dialog:s,toShortTimeFormat:H,innerDateLeft:M,innerTimeLeft:t,innerDateRight:j,innerTimeRight:u,innerDateRange:l,onClick:()=>{e.editable&&(s.value=!0)},onClear:()=>{r("update:modelValue",null),t.value=0,u.value=0,l.value=null},onSubmit:()=>{l.value&&Array.isArray(l.value)&&l.value.length>1&&r("update:modelValue",[l.value[0]+t.value,l.value[1]+u.value]),s.value=!1}}}});function te(e,r,g,V,C,q){const b=y("FSCalendarTwin"),i=y("FSClock"),S=y("FSSubmitDialog");return z(),G(W,null,[o(O,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortTimeFormat,onClick:e.onClick,"onClick:clear":e.onClear,onBlur:r[0]||(r[0]=a=>e.blurred=!0)},J({"prepend-inner":n(()=>[T(e.$slots,"prepend-inner",{},()=>[o(U,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[Q(e.$slots,(a,f)=>({name:f,fn:n(s=>[T(e.$slots,f,Z(K(s)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onClick:clear"]),o(S,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[4]||(r[4]=a=>e.dialog=a)},{body:n(()=>[o(d,null,{default:n(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(h,{width:"100%"},{default:n(()=>[o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{reminder:!0,color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"])]),_:1}),o(d,{width:"calc(50% - 4px)"},{default:n(()=>[o(i,{reminder:!0,color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":r[3]||(r[3]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const R=le(L,[["render",te]]);L.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateTimeRangeField.vue"]};const mr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateTimeRangeField:R,FSCol:d},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(k=(w=v.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var $,B,A;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(B=F.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const pr=["Variations","Rules"];export{F as Rules,v as Variations,pr as __namedExportsOrder,mr as default};
