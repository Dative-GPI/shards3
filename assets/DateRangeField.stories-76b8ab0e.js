import{D as J,j as T,d as c,E as j,G as m,Q as K,z as o,W as M,I as l,L as b,H as v,M as F,N as E,K as y,J as S,U as Q,F as W,O as Z,P as X}from"./vue.esm-bundler-6746129d.js";import{C as i,u as h}from"./useColors-af9c4499.js";import{D as Y}from"./rules-1d0b59d0.js";import{a as _}from"./useTimeZone-147b7e03.js";import{F as x}from"./FSSubmitDialog-7f7c3c09.js";import{F as ee}from"./FSCalendarTwin-c2bc2f2c.js";import{F as P}from"./FSTextField-7b3e4418.js";import{_ as I}from"./FSButton-35c738ab.js";import{F as re}from"./FSCard-7c6eaa72.js";import{_ as R}from"./FSCol-7dad0d26.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./FSRow-40eef247.js";import{_ as C}from"./FSSpan-636f18e6.js";import{V as ae}from"./VSpacer-a83300f0.js";import{V as oe}from"./VForm-6ea3dbb9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dcffbbe6.js";import"./lodash-569b8a6d.js";import"./VOverlay-9bdb643e.js";import"./locale-6d7be75c.js";import"./forwardRefs-e658ad70.js";import"./loader-ad3b4aa2.js";import"./color-28636d86.js";import"./rounded-4ccd8171.js";import"./VIcon-bfd3bf26.js";import"./dimensions-b4b52e44.js";import"./display-736a0f51.js";import"./lazy-0cd9d9af.js";import"./router-6af7a2c9.js";import"./transition-909f2bdc.js";import"./dialog-transition-9c1510cc.js";import"./VDefaultsProvider-4443303c.js";import"./VLocaleProvider-4664b327.js";import"./date-09b5ab13.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./density-0267c9a3.js";import"./elevation-6127bd0f.js";import"./group-6b499f9e.js";import"./index-a12920e9.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./VTextField-259e5da4.js";import"./VField-7b300f30.js";import"./index-a55f475c.js";import"./VInput-0d298506.js";import"./index-5d004ff4.js";import"./FSIcon-e171104f.js";import"./LexicalSelection.prod-bad52e97.js";const G=J({name:"FSDateRangeField",components:{FSSubmitDialog:x,FSCalendarTwin:ee,FSTextField:P,FSButton:I,FSCard:re,FSCol:R},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToShortDateFormat:V}=_(),D=h().getColors(i.Error),w=h().getColors(i.Light),k=h().getColors(i.Dark),t=T(!1),n=T(e.modelValue),a=c(()=>e.editable?{"--fs-date-field-color":k.base,"--fs-date-field-error-color":D.base}:{"--fs-date-field-color":w.dark}),d=c(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(s=>V(s)).join(" - ")),g=c(()=>{const s=[];for(const $ of e.rules)if(e.modelValue&&Array.isArray(e.modelValue))for(const u of e.modelValue){const B=$(u);if(typeof B=="string"){s.push(B);break}}else{const u=$(null);typeof u=="string"&&s.push(u)}return s});return{ColorEnum:i,messages:g,style:a,dialog:t,placeholder:d,innerDateRange:n,onClick:()=>{e.editable&&(t.value=!0)},onClear:()=>{r("update:modelValue",null),n.value=null},onSubmit:()=>{r("update:modelValue",n.value),t.value=!1}}}});function te(e,r,V,D,w,k){const t=j("FSCalendarTwin"),n=j("FSSubmitDialog");return m(),K(W,null,[o(P,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.placeholder,onClick:e.onClick,"onClick:clear":e.onClear},M({"prepend-inner":l(()=>[b(e.$slots,"prepend-inner",{},()=>[o(I,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[b(e.$slots,"label",{},()=>[o(L,{wrap:!1},{default:l(()=>[e.$props.label?(m(),v(C,{key:0,class:"fs-date-field-label",font:"text-overline",style:y(e.style)},{default:l(()=>[F(E(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(m(),v(C,{key:1,class:"fs-date-field-label",style:y([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[F(" * ")]),_:1},8,["style"])):S("",!0),o(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(m(),v(C,{key:2,class:"fs-date-field-messages",font:"text-overline",style:y(e.style)},{default:l(()=>[F(E(e.messages.join(", ")),1)]),_:1},8,["style"])):S("",!0)]),_:1})])]),key:"0"},Q(e.$slots,(a,d)=>({name:d,fn:l(g=>[b(e.$slots,d,Z(X(g)))])}))]),1032,["label","description","color","hideHeader","required","editable","error","modelValue","onClick","onClick:clear"]),o(n,{title:e.$props.label,rightButtonColor:e.$props.color,"onClick:rightButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:l(()=>[o(t,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDateRange=a)},null,8,["color","modelValue"])]),_:1},8,["title","rightButtonColor","onClick:rightButton","modelValue"])],64)}const q=le(G,[["render",te]]);G.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateRangeField.vue"]};const tr={title:"Foundation/Shared/Input fields/DateRangeField",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:q,FSCol:R},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},f={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Y}},render:(e,{argTypes:r})=>({components:{VForm:oe,FSDateRangeField:q,FSCol:R,FSRow:L},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
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
}`,...(A=(U=p.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var N,O,z;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid" v-lazy>
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
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const nr=["Variations","Rules"];export{f as Rules,p as Variations,nr as __namedExportsOrder,tr as default};
