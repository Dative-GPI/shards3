import{D as J,j as T,d as c,E as j,G as m,R as K,y as o,U as M,I as l,M as b,H as v,N as F,O as E,K as y,J as S,V as Q,F as Z,P as W,Q as X}from"./vue.esm-bundler-47273a21.js";import{C as i,u as h}from"./useColors-446eeb5a.js";import{D as Y}from"./rules-f5c4efdb.js";import{u as x}from"./useTimeZone-898e8e2d.js";import{F as _}from"./FSSubmitDialog-7bf71c7a.js";import{F as ee}from"./FSCalendarTwin-cc4c047a.js";import{F as I}from"./FSTextField-045eeec4.js";import{F as z}from"./FSButton-95139452.js";import{F as re}from"./FSCard-e4bdc27c.js";import{_ as R}from"./FSCol-00f12d9b.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./FSRow-89f60060.js";import{_ as C}from"./FSSpan-6a5d69b6.js";import{V as ae}from"./VSpacer-6746e4d1.js";import{V as oe}from"./VForm-4333cb27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./lodash-569b8a6d.js";import"./useBreakpoints-bd6e350e.js";import"./VOverlay-da68897b.js";import"./forwardRefs-e658ad70.js";import"./color-38d974b0.js";import"./locale-5c4d4b03.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./VIcon-f933c800.js";import"./dimensions-699818e3.js";import"./display-e8621586.js";import"./lazy-b159d447.js";import"./router-843ca95a.js";import"./transition-6c7cc79f.js";import"./VDefaultsProvider-6a122c68.js";import"./VLocaleProvider-fb512fbc.js";import"./date-27d31bd3.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./density-52b016fa.js";import"./elevation-522a2612.js";import"./group-0f5e58b6.js";import"./index-2c0500ae.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./VInput-fdcb6e75.js";import"./index-1e6cce54.js";import"./FSIcon-be851c75.js";import"./LexicalSelection.prod-b0bd0f79.js";const G=J({name:"FSDateRangeField",components:{FSSubmitDialog:_,FSCalendarTwin:ee,FSTextField:I,FSButton:z,FSCard:re,FSCol:R},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToShortDateFormat:q}=x(),D=h().getColors(i.Error),w=h().getColors(i.Light),k=h().getColors(i.Dark),t=T(!1),n=T(e.modelValue),a=c(()=>e.editable?{"--fs-date-field-color":k.base,"--fs-date-field-error-color":D.base}:{"--fs-date-field-color":w.dark}),d=c(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(s=>q(s)).join(" - ")),g=c(()=>{const s=[];for(const $ of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const u of e.modelValue){const B=$(u);if(typeof B=="string"){s.push(B);break}}else{const u=$(null);typeof u=="string"&&s.push(u)}return s});return{ColorEnum:i,messages:g,style:a,dialog:t,placeholder:d,innerDateRange:n,onClick:()=>{e.editable&&(t.value=!0)},onClear:()=>{r("update:modelValue",null),n.value=null},onSubmit:()=>{r("update:modelValue",n.value),t.value=!1}}}});function te(e,r,q,D,w,k){const t=j("FSCalendarTwin"),n=j("FSSubmitDialog");return m(),K(Z,null,[o(I,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},M({"prepend-inner":l(()=>[b(e.$slots,"prepend-inner",{},()=>[o(z,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[b(e.$slots,"label",{},()=>[o(L,{wrap:!1},{default:l(()=>[e.$props.label?(m(),v(C,{key:0,class:"fs-date-field-label",font:"text-overline",style:y(e.style)},{default:l(()=>[F(E(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(m(),v(C,{key:1,class:"fs-date-field-label",style:y([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):S("",!0),o(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(m(),v(C,{key:2,class:"fs-date-field-messages",font:"text-overline",style:y(e.style)},{default:l(()=>[F(E(e.messages.join(", ")),1)]),_:1},8,["style"])):S("",!0)]),_:1})])]),key:"0"},Q(e.$slots,(a,d)=>({name:d,fn:l(g=>[b(e.$slots,d,W(X(g)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(n,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:l(()=>[o(t,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const V=le(G,[["render",te]]);G.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateRangeField.vue"]};const tr={title:"Foundation/Shared/Input fields/DateRangeField",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:V,FSCol:R},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},f={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Y}},render:(e,{argTypes:r})=>({components:{VForm:oe,FSDateRangeField:V,FSCol:R,FSRow:L},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var H,U,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      FSDateRangeField,
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
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(A=(U=p.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var N,O,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(P=(O=f.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const nr=["Variations","Rules"];export{f as Rules,p as Variations,nr as __namedExportsOrder,tr as default};
