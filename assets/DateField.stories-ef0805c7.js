import{E as Z,d as T,e as B,Z as H,H as i,I as d,J as l,z as a,U as J,L as c,R as g,M as v,N,K as b,V as K,O as W,P as G,A as Q}from"./vue.esm-bundler-a27e881e.js";import{F as z}from"./FSTextField-a84650e0.js";import{F as X}from"./FSCalendar-cb137077.js";import{F as S}from"./FSButton-32c11b56.js";import{F as Y}from"./FSCard-ba8b99ab.js";import{_ as p}from"./FSCol-5941d279.js";import{C as n,u as F}from"./useColors-64c3c523.js";import{u as _}from"./useTimeZone-035f95ae.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-e0b07355.js";import{_ as y}from"./FSSpan-23926a6a.js";import{V as ee}from"./VMenu-4a24dddc.js";import{V as re}from"./VSpacer-a8d4114f.js";import{D as le,V as ae}from"./VForm-45f69a6f.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-4d7d73e0.js";import"./VField-1b55a660.js";import"./index-a4e785fb.js";import"./color-2740292e.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-97b04c8f.js";import"./locale-d8beded1.js";import"./VIcon-2e68f29b.js";import"./density-9e64face.js";import"./loader-d45e9b6f.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VLocaleProvider-706a15ed.js";import"./date-b85a0fab.js";import"./VDefaultsProvider-6b0a994a.js";import"./VBtn-36b0c9e9.js";import"./variant-cf13121d.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VProgressCircular-21a2049c.js";import"./resizeObserver-f6ddbc93.js";import"./FSIcon-695f5195.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-0799e799.js";import"./VOverlay-e127e971.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";const A=Z({name:"FSDateField",components:{FSTextField:z,FSCalendar:X,FSButton:S,FSCard:Y,FSCol:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:n.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:C}=_(),q=F().getColors(n.Error),V=F().getColors(n.Light),D=F().getColors(n.Dark),s=T(!1),t=T(e.modelValue),o=B(()=>e.editable?{"--fs-date-field-color":D.base,"--fs-date-field-error-color":q.base}:{"--fs-date-field-color":V.dark}),w=B(()=>{const k=[];for(const M of e.rules){const R=M(e.modelValue??null);typeof R=="string"&&k.push(R)}return k});return{ColorEnum:n,innerDate:t,messages:w,style:o,menu:s,onClear:()=>{r("update:modelValue",null),t.value=null},onSubmit:()=>{r("update:modelValue",t.value),s.value=!1},epochToLongDateFormat:C}}});function oe(e,r,C,q,V,D){const s=H("FSCalendar"),t=H("FSCard");return i(),d(ee,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[1]||(r[1]=o=>e.menu=o)},{activator:l(({props:o})=>[a(z,Q({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onClick:clear":e.onClear},o),J({"prepend-inner":l(()=>[c(e.$slots,"prepend-inner",{},()=>[a(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[c(e.$slots,"label",{},()=>[a(I,{wrap:!1},{default:l(()=>[e.$props.label?(i(),d(y,{key:0,class:"fs-date-field-label",font:"text-overline",style:g(e.style)},{default:l(()=>[v(N(e.$props.label),1)]),_:1},8,["style"])):b("",!0),e.$props.label&&e.$props.required?(i(),d(y,{key:1,class:"fs-date-field-label",style:g([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[v(" * ")]),_:1},8,["style"])):b("",!0),a(re,{style:{"min-width":"40px"}}),e.messages.length>0?(i(),d(y,{key:2,class:"fs-date-field-messages",font:"text-overline",style:g(e.style)},{default:l(()=>[v(N(e.messages.join(", ")),1)]),_:1},8,["style"])):b("",!0)]),_:1})])]),key:"0"},K(e.$slots,(w,f)=>({name:f,fn:l($=>[c(e.$slots,f,W(G($)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:l(()=>[a(t,{width:"394",elevation:!0,border:!1},{default:l(()=>[a(p,{width:"fill"},{default:l(()=>[a(s,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDate=o)},null,8,["color","modelValue"]),a(S,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const h=x(A,[["render",oe]]);A.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateField.vue"]};const er={title:"Foundation/Shared/Input fields/DateField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateField:h,FSCol:p},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},m={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:le}},render:(e,{argTypes:r})=>({components:{VForm:ae,FSDateField:h,FSCol:p,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
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
    </v-form>`})};var O,U,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(U=u.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var P,j,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const rr=["Variations","Rules"];export{m as Rules,u as Variations,rr as __namedExportsOrder,er as default};
