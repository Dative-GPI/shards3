import{E as W,d as c,e as d,Z as h,H as v,Q as X,z as o,U as Y,J as t,V as x,F as _,L as V,I as R,M as C,N as L,R as q,K as D,O as ee,P as re}from"./vue.esm-bundler-a27e881e.js";import{F as le}from"./FSSubmitDialog-dec83043.js";import{F as ae}from"./FSCalendarTwin-f1c7e439.js";import{F as P}from"./FSTextField-9e0cc675.js";import{F as z}from"./FSButton-d1cb7f94.js";import{F as oe}from"./FSClock-b8364454.js";import{F as te}from"./FSCard-05da5310.js";import{_ as F}from"./FSCol-5941d279.js";import{C as u,u as ne}from"./useColors-64c3c523.js";import{u as ie}from"./useTimeZone-035f95ae.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSRow-e0b07355.js";import{_ as T}from"./FSSpan-23926a6a.js";import{V as de}from"./VSpacer-0b076bec.js";import{D as ue,V as me}from"./VForm-b9b36940.js";import"./useBreakpoints-ce1b45c7.js";import"./VOverlay-1baa69a1.js";import"./forwardRefs-e658ad70.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./locale-d8beded1.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./VIcon-05012a67.js";import"./dimensions-59e3b80b.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./router-952fd40f.js";import"./transition-91aa1796.js";import"./VDefaultsProvider-34413012.js";import"./useTranslations-0799e799.js";import"./VLocaleProvider-cf46a668.js";import"./date-b85a0fab.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./index-d3298e01.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./VInput-932b5afe.js";import"./index-e8bb7e10.js";import"./FSIcon-98d9a930.js";import"./FSSlider-501a76cc.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const I=W({name:"FSDateTimeRangeField",components:{FSSubmitDialog:le,FSCalendarTwin:ae,FSTextField:P,FSButton:z,FSClock:oe,FSCard:te,FSCol:F},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:u.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getUserOffsetMillis:m,epochToShortTimeFormat:$}=ie(),{getColors:p}=ne(),A=p(u.Error),S=p(u.Light),f=p(u.Dark),i=c(!1),l=c(0),n=c(0),r=c(null);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:l.value=Math.floor((e.modelValue[0]+m())%(24*60*60*1e3)),r.value=[e.modelValue[0]-l.value];default:l.value=Math.floor((e.modelValue[0]+m())%(24*60*60*1e3)),n.value=Math.floor((e.modelValue[1]+m())%(24*60*60*1e3)),r.value=[e.modelValue[0]-l.value,e.modelValue[1]-n.value]}const Z=d(()=>e.editable?{"--fs-date-field-color":f.base,"--fs-date-field-error-color":A.base}:{"--fs-date-field-color":S.dark}),J=d(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(s=>$(s)).join(" - ")),K=d(()=>{const s=[];for(const B of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const g of e.modelValue){const U=B(g);if(typeof U=="string"){s.push(U);break}}else{const g=B(null);typeof g=="string"&&s.push(g)}return s}),Q=d(()=>r.value&&Array.isArray(r.value)&&r.value.length?r.value[0]:null),G=d(()=>r.value&&Array.isArray(r.value)&&r.value.length>1?r.value[1]:null);return{ColorEnum:u,messages:K,style:Z,dialog:i,placeholder:J,innerDateLeft:Q,innerTimeLeft:l,innerDateRight:G,innerTimeRight:n,innerDateRange:r,onClick:()=>{e.editable&&(i.value=!0)},onClear:()=>{a("update:modelValue",null),l.value=0,n.value=0,r.value=null},onSubmit:()=>{r.value&&Array.isArray(r.value)&&r.value.length>1&&a("update:modelValue",[r.value[0]+l.value,r.value[1]+n.value]),i.value=!1}}}});function pe(e,a,m,$,p,A){const S=h("FSCalendarTwin"),f=h("FSClock"),i=h("FSSubmitDialog");return v(),X(_,null,[o(P,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},Y({"prepend-inner":t(()=>[V(e.$slots,"prepend-inner",{},()=>[o(z,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:t(()=>[V(e.$slots,"label",{},()=>[o(w,{wrap:!1},{default:t(()=>[e.$props.label?(v(),R(T,{key:0,class:"fs-date-field-label",font:"text-overline",style:q(e.style)},{default:t(()=>[C(L(e.$props.label),1)]),_:1},8,["style"])):D("",!0),e.$props.label&&e.$props.required?(v(),R(T,{key:1,class:"fs-date-field-label",style:q([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:t(()=>[C(" * ")]),_:1},8,["style"])):D("",!0),o(de,{style:{"min-width":"40px"}}),e.messages.length>0?(v(),R(T,{key:2,class:"fs-date-field-messages",font:"text-overline",style:q(e.style)},{default:t(()=>[C(L(e.messages.join(", ")),1)]),_:1},8,["style"])):D("",!0)]),_:1})])]),key:"0"},x(e.$slots,(l,n)=>({name:n,fn:t(r=>[V(e.$slots,n,ee(re(r)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(i,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[3]||(a[3]=l=>e.dialog=l)},{body:t(()=>[o(F,null,{default:t(()=>[o(S,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerDateRange=l)},null,8,["color","modelValue"]),o(w,null,{default:t(()=>[o(f,{reminder:!0,color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":a[1]||(a[1]=l=>e.innerTimeLeft=l)},null,8,["color","date","modelValue"]),o(f,{reminder:!0,color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":a[2]||(a[2]=l=>e.innerTimeRight=l)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const k=se(I,[["render",pe]]);I.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeRangeField.vue"]};const gr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:a})=>({components:{FSDateTimeRangeField:k,FSCol:F},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},y={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ue}},render:(e,{argTypes:a})=>({components:{VForm:me,FSDateTimeRangeField:k,FSCol:F,FSRow:w},props:Object.keys(a),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var E,H,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,N,M;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid">
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
    </v-form>\`
  })
}`,...(M=(N=y.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const cr=["Variations","Rules"];export{y as Rules,b as Variations,cr as __namedExportsOrder,gr as default};
