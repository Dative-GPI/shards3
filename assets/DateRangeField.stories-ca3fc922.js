import{E as J,d as T,e as c,Z as E,H as m,Q as K,z as o,U as M,J as l,V as Q,F as G,L as b,I as v,M as F,N as H,R as y,K as S,O as W,P as X}from"./vue.esm-bundler-a27e881e.js";import{F as Y}from"./FSSubmitDialog-7a1bbe25.js";import{F as x}from"./FSCalendarTwin-02a1b0a9.js";import{F as z}from"./FSTextField-a84650e0.js";import{F as I}from"./FSButton-32c11b56.js";import{F as _}from"./FSCard-ba8b99ab.js";import{_ as R}from"./FSCol-5941d279.js";import{C as i,u as h}from"./useColors-64c3c523.js";import{u as ee}from"./useTimeZone-035f95ae.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./FSRow-e0b07355.js";import{_ as C}from"./FSSpan-23926a6a.js";import{V as le}from"./VSpacer-a8d4114f.js";import{D as ae,V as oe}from"./VForm-45f69a6f.js";import"./useBreakpoints-ce1b45c7.js";import"./VOverlay-e127e971.js";import"./forwardRefs-e658ad70.js";import"./color-2740292e.js";import"./theme-40a9efa2.js";import"./locale-d8beded1.js";import"./loader-d45e9b6f.js";import"./rounded-acf264a5.js";import"./VIcon-2e68f29b.js";import"./dimensions-59e3b80b.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./router-952fd40f.js";import"./transition-91aa1796.js";import"./VDefaultsProvider-6b0a994a.js";import"./useTranslations-0799e799.js";import"./VLocaleProvider-706a15ed.js";import"./date-b85a0fab.js";import"./VBtn-36b0c9e9.js";import"./variant-cf13121d.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./index-d3298e01.js";import"./VProgressCircular-21a2049c.js";import"./resizeObserver-f6ddbc93.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-4d7d73e0.js";import"./VField-1b55a660.js";import"./index-a4e785fb.js";import"./VInput-97b04c8f.js";import"./index-e8bb7e10.js";import"./FSIcon-695f5195.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const Z=J({name:"FSDateRangeField",components:{FSSubmitDialog:Y,FSCalendarTwin:x,FSTextField:z,FSButton:I,FSCard:_,FSCol:R},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToShortDateFormat:q}=ee(),D=h().getColors(i.Error),w=h().getColors(i.Light),k=h().getColors(i.Dark),t=T(!1),n=T(e.modelValue),a=c(()=>e.editable?{"--fs-date-field-color":k.base,"--fs-date-field-error-color":D.base}:{"--fs-date-field-color":w.dark}),d=c(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(s=>q(s)).join(" - ")),f=c(()=>{const s=[];for(const $ of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const u of e.modelValue){const B=$(u);if(typeof B=="string"){s.push(B);break}}else{const u=$(null);typeof u=="string"&&s.push(u)}return s});return{ColorEnum:i,messages:f,style:a,dialog:t,placeholder:d,innerDateRange:n,onClick:()=>{e.editable&&(t.value=!0)},onClear:()=>{r("update:modelValue",null),n.value=null},onSubmit:()=>{r("update:modelValue",n.value),t.value=!1}}}});function te(e,r,q,D,w,k){const t=E("FSCalendarTwin"),n=E("FSSubmitDialog");return m(),K(G,null,[o(z,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},M({"prepend-inner":l(()=>[b(e.$slots,"prepend-inner",{},()=>[o(I,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[b(e.$slots,"label",{},()=>[o(L,{wrap:!1},{default:l(()=>[e.$props.label?(m(),v(C,{key:0,class:"fs-date-field-label",font:"text-overline",style:y(e.style)},{default:l(()=>[F(H(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(m(),v(C,{key:1,class:"fs-date-field-label",style:y([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):S("",!0),o(le,{style:{"min-width":"40px"}}),e.messages.length>0?(m(),v(C,{key:2,class:"fs-date-field-messages",font:"text-overline",style:y(e.style)},{default:l(()=>[F(H(e.messages.join(", ")),1)]),_:1},8,["style"])):S("",!0)]),_:1})])]),key:"0"},Q(e.$slots,(a,d)=>({name:d,fn:l(f=>[b(e.$slots,d,W(X(f)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(n,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:l(()=>[o(t,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const V=re(Z,[["render",te]]);Z.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateRangeField.vue"]};const tr={title:"Foundation/Shared/Input fields/DateRangeField",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:V,FSCol:R},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},g={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ae}},render:(e,{argTypes:r})=>({components:{VForm:oe,FSDateRangeField:V,FSCol:R,FSRow:L},props:Object.keys(r),setup(){return{...e}},template:`
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
    </v-form>`})};var U,j,A;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var N,O,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const nr=["Variations","Rules"];export{g as Rules,p as Variations,nr as __namedExportsOrder,tr as default};
