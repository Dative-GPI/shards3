import{D as A,j as T,d as B,E as H,G as i,H as d,I as l,z as o,W as G,L as c,K as g,M as v,N,J as b,U as J,y as K,O as Z,P as Q}from"./vue.esm-bundler-17cb12ce.js";import{C as n,u as F}from"./useColors-04b7b26f.js";import{D as X}from"./rules-8f4289e2.js";import{a as Y}from"./useTimeZone-abc9a874.js";import{F as z}from"./FSTextField-867bbd59.js";import{F as _}from"./FSCalendar-f8ed5d56.js";import{_ as S}from"./FSButton-8130144f.js";import{F as x}from"./FSCard-8714722b.js";import{_ as p}from"./FSCol-03fc1f3a.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-9ce6aace.js";import{_ as y}from"./FSSpan-2051def6.js";import{V as re}from"./VSpacer-bacd1ff2.js";import{V as le}from"./VMenu-0c6b0489.js";import{V as oe}from"./VForm-59ed5e27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c4ac2200.js";import"./lodash-569b8a6d.js";import"./VTextField-99deef4a.js";import"./VField-d3cacb6a.js";import"./index-c6c13bcc.js";import"./color-d421c344.js";import"./transition-4d995a4a.js";import"./VInput-9e5eb041.js";import"./locale-2e51016c.js";import"./VIcon-343130ca.js";import"./density-cdecea01.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./forwardRefs-e658ad70.js";import"./index-c7efe106.js";import"./VLocaleProvider-c87a76f9.js";import"./date-5b9564d4.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./elevation-cb67bcb5.js";import"./group-a63c5543.js";import"./dimensions-10b1de84.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";import"./FSIcon-16c55386.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VOverlay-10257b67.js";import"./display-4fe57557.js";import"./lazy-04b58018.js";const M=A({name:"FSDateField",components:{FSTextField:z,FSCalendar:_,FSButton:S,FSCard:x,FSCol:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:n.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:C}=Y(),q=F().getColors(n.Error),V=F().getColors(n.Light),D=F().getColors(n.Dark),s=T(!1),t=T(e.modelValue),a=B(()=>e.editable?{"--fs-date-field-color":D.base,"--fs-date-field-error-color":q.base}:{"--fs-date-field-color":V.dark}),w=B(()=>{const k=[];for(const W of e.rules){const R=W(e.modelValue??null);typeof R=="string"&&k.push(R)}return k});return{ColorEnum:n,innerDate:t,messages:w,style:a,menu:s,onClear:()=>{r("update:modelValue",null),t.value=null},onSubmit:()=>{r("update:modelValue",t.value),s.value=!1},epochToLongDateFormat:C}}});function ae(e,r,C,q,V,D){const s=H("FSCalendar"),t=H("FSCard");return i(),d(le,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[1]||(r[1]=a=>e.menu=a)},{activator:l(({props:a})=>[o(z,K({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear},a),G({"prepend-inner":l(()=>[c(e.$slots,"prepend-inner",{},()=>[o(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[c(e.$slots,"label",{},()=>[o(I,{wrap:!1},{default:l(()=>[e.$props.label?(i(),d(y,{key:0,class:"fs-date-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[v(N(e.$props.label),1)]),_:1},8,["style"])):b("",!0),e.$props.label&&e.$props.required?(i(),d(y,{key:1,class:"fs-date-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[v(" * ")]),_:1},8,["style"])):b("",!0),o(re,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),d(y,{key:2,class:"fs-date-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[v(N(e.messages.join(", ")),1)]),_:1},8,["style"])):b("",!0)]),_:1})])]),key:"0"},J(e.$slots,(w,f)=>({name:f,fn:l($=>[c(e.$slots,f,Z(Q($)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:l(()=>[o(t,{width:"394",elevation:!0,border:!1},{default:l(()=>[o(p,{width:"fill"},{default:l(()=>[o(s,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),o(S,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const h=ee(M,[["render",ae]]);M.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateField.vue"]};const er={title:"Foundation/Shared/Input fields/DateField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:h,FSCol:p},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:X}},render:(e,{argTypes:r})=>({components:{VForm:oe,FSDateField:h,FSCol:p,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var O,U,j;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
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
      <FSDateField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(j=(U=u.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var E,P,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      FSDateField,
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
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const rr=["Variations","Rules"];export{m as Rules,u as Variations,rr as __namedExportsOrder,er as default};
