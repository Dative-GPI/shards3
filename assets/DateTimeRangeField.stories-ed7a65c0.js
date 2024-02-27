import{D as W,j as f,d,E as S,G as g,R as X,y as o,U as Y,I as t,M as h,H as V,N as C,O as E,K as R,J as q,V as x,F as _,P as ee,Q as re}from"./vue.esm-bundler-47273a21.js";import{C as u,u as D}from"./useColors-446eeb5a.js";import{D as le}from"./rules-f5c4efdb.js";import{u as ae}from"./useTimeZone-898e8e2d.js";import{F as oe}from"./FSSubmitDialog-7bf71c7a.js";import{F as te}from"./FSCalendarTwin-cc4c047a.js";import{F as I}from"./FSTextField-045eeec4.js";import{F as z}from"./FSButton-95139452.js";import{F as ne}from"./FSClock-ee805a46.js";import{F as ie}from"./FSCard-e4bdc27c.js";import{_ as y}from"./FSCol-00f12d9b.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSRow-89f60060.js";import{_ as T}from"./FSSpan-6a5d69b6.js";import{V as de}from"./VSpacer-6746e4d1.js";import{V as ue}from"./VForm-4333cb27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./lodash-569b8a6d.js";import"./useBreakpoints-bd6e350e.js";import"./VOverlay-da68897b.js";import"./forwardRefs-e658ad70.js";import"./color-38d974b0.js";import"./locale-5c4d4b03.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./VIcon-f933c800.js";import"./dimensions-699818e3.js";import"./display-e8621586.js";import"./lazy-b159d447.js";import"./router-843ca95a.js";import"./transition-6c7cc79f.js";import"./VDefaultsProvider-6a122c68.js";import"./VLocaleProvider-fb512fbc.js";import"./date-27d31bd3.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./density-52b016fa.js";import"./elevation-522a2612.js";import"./group-0f5e58b6.js";import"./index-2c0500ae.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./VInput-fdcb6e75.js";import"./index-1e6cce54.js";import"./FSIcon-be851c75.js";import"./FSSlider-3a249004.js";import"./LexicalSelection.prod-b0bd0f79.js";const G=W({name:"FSDateTimeRangeField",components:{FSSubmitDialog:oe,FSCalendarTwin:te,FSTextField:I,FSButton:z,FSClock:ne,FSCard:ie,FSCol:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:u.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getUserOffsetMillis:m,epochToShortTimeFormat:$}=ae(),A=D().getColors(u.Error),B=D().getColors(u.Light),b=D().getColors(u.Dark),i=f(!1),n=f(0),a=f(0),r=f(null);if(e.modelValue&&Array.isArray(e.modelValue))switch(e.modelValue.length){case 0:break;case 1:n.value=Math.floor((e.modelValue[0]+m())%(24*60*60*1e3)),r.value=[e.modelValue[0]-n.value];default:n.value=Math.floor((e.modelValue[0]+m())%(24*60*60*1e3)),a.value=Math.floor((e.modelValue[1]+m())%(24*60*60*1e3)),r.value=[e.modelValue[0]-n.value,e.modelValue[1]-a.value]}const F=d(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":A.base}:{"--fs-date-field-color":B.dark}),J=d(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(s=>$(s)).join(" - ")),K=d(()=>{const s=[];for(const U of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const p of e.modelValue){const j=U(p);if(typeof j=="string"){s.push(j);break}}else{const p=U(null);typeof p=="string"&&s.push(p)}return s}),Q=d(()=>r.value&&Array.isArray(r.value)&&r.value.length?r.value[0]:null),Z=d(()=>r.value&&Array.isArray(r.value)&&r.value.length>1?r.value[1]:null);return{ColorEnum:u,messages:K,style:F,dialog:i,placeholder:J,innerDateLeft:Q,innerTimeLeft:n,innerDateRight:Z,innerTimeRight:a,innerDateRange:r,onClick:()=>{e.editable&&(i.value=!0)},onClear:()=>{l("update:modelValue",null),n.value=0,a.value=0,r.value=null},onSubmit:()=>{r.value&&Array.isArray(r.value)&&r.value.length>1&&l("update:modelValue",[r.value[0]+n.value,r.value[1]+a.value]),i.value=!1}}}});function me(e,l,m,$,A,B){const b=S("FSCalendarTwin"),i=S("FSClock"),n=S("FSSubmitDialog");return g(),X(_,null,[o(I,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},Y({"prepend-inner":t(()=>[h(e.$slots,"prepend-inner",{},()=>[o(z,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:t(()=>[h(e.$slots,"label",{},()=>[o(w,{wrap:!1},{default:t(()=>[e.$props.label?(g(),V(T,{key:0,class:"fs-date-field-label",font:"text-overline",style:R(e.style)},{default:t(()=>[C(E(e.$props.label),1)]),_:1},8,["style"])):q("",!0),e.$props.label&&e.$props.required?(g(),V(T,{key:1,class:"fs-date-field-label",style:R([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:t(()=>[C(" * ")]),_:1},8,["style"])):q("",!0),o(de,{style:{"min-width":"40px"}}),e.messages.length>0?(g(),V(T,{key:2,class:"fs-date-field-messages",font:"text-overline",style:R(e.style)},{default:t(()=>[C(E(e.messages.join(", ")),1)]),_:1},8,["style"])):q("",!0)]),_:1})])]),key:"0"},x(e.$slots,(a,r)=>({name:r,fn:t(F=>[h(e.$slots,r,ee(re(F)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(n,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":l[3]||(l[3]=a=>e.dialog=a)},{body:t(()=>[o(y,null,{default:t(()=>[o(b,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":l[0]||(l[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"]),o(w,null,{default:t(()=>[o(i,{reminder:!0,color:e.$props.color,date:e.innerDateLeft,modelValue:e.innerTimeLeft,"onUpdate:modelValue":l[1]||(l[1]=a=>e.innerTimeLeft=a)},null,8,["color","date","modelValue"]),o(i,{reminder:!0,color:e.$props.color,date:e.innerDateRight,modelValue:e.innerTimeRight,"onUpdate:modelValue":l[2]||(l[2]=a=>e.innerTimeRight=a)},null,8,["color","date","modelValue"])]),_:1})]),_:1})]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const k=se(G,[["render",me]]);G.__docgenInfo={displayName:"FSDateTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeRangeField.vue"]};const fr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:l})=>({components:{FSDateTimeRangeField:k,FSCol:y},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})},v={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:le}},render:(e,{argTypes:l})=>({components:{VForm:ue,FSDateTimeRangeField:k,FSCol:y,FSRow:w},props:Object.keys(l),setup(){return{...e}},template:`
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
    </v-form>`})};var H,L,O;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var N,M,P;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const gr=["Variations","Rules"];export{v as Rules,c as Variations,gr as __namedExportsOrder,fr as default};
