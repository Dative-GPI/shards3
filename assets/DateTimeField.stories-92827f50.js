import{E as G,d as m,e as B,w as Q,Z as y,H as p,I as f,J as o,z as a,U as X,L as S,R as h,M as V,N as H,K as C,V as Y,O as _,P as x,A as ee}from"./vue.esm-bundler-a27e881e.js";import{F as W}from"./FSTextField-2674ecc2.js";import{F as re}from"./FSCalendar-43a39b29.js";import{_ as z}from"./FSWindow-d529f132.js";import{F as v}from"./FSButton-1f4fb6d7.js";import{F as le}from"./FSClock-4de0eeb0.js";import{F as oe}from"./FSCard-ba8b99ab.js";import{_ as i}from"./FSCol-5941d279.js";import{C as s,u as q}from"./useColors-64c3c523.js";import{u as ae}from"./useTimeZone-035f95ae.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-e0b07355.js";import{_ as w}from"./FSSpan-23926a6a.js";import{V as ne}from"./VMenu-7f762766.js";import{V as se}from"./VSpacer-0b076bec.js";import{D as ie,V as de}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VLocaleProvider-cf46a668.js";import"./date-b85a0fab.js";import"./VDefaultsProvider-34413012.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./VWindowItem-799334b7.js";import"./lazy-e46c79b0.js";import"./ssrBoot-3aa6a9b0.js";import"./FSIcon-98d9a930.js";import"./FSSlider-d21034e3.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTranslations-0799e799.js";import"./VOverlay-1baa69a1.js";import"./display-dfdccc0e.js";const A=G({name:"FSDateTimeField",components:{FSTextField:W,FSCalendar:re,FSWindow:z,FSButton:v,FSClock:le,FSCard:oe,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:D,epochToLongTimeFormat:$}=ae(),k=q().getColors(s.Error),R=q().getColors(s.Light),b=q().getColors(s.Dark),t=m(!1),d=m(0),l=m(0),n=m(null);e.modelValue&&(l.value=Math.floor((e.modelValue+D())%(24*60*60*1e3)),n.value=e.modelValue-l.value);const u=B(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":k.base}:{"--fs-date-field-color":R.dark}),F=B(()=>{const U=[];for(const K of e.rules){const O=K(e.modelValue??null);typeof O=="string"&&U.push(O)}return U}),Z=()=>{r("update:modelValue",null),n.value=null,l.value=0},J=()=>{r("update:modelValue",n.value+l.value),t.value=!1};return Q(t,()=>{t.value||setTimeout(()=>d.value=0,100)}),{ColorEnum:s,innerDate:n,innerTime:l,messages:F,style:u,menu:t,tabs:d,onClear:Z,onSubmit:J,epochToLongTimeFormat:$}}});function ue(e,r,D,$,k,R){const b=y("FSCalendar"),t=y("FSCard"),d=y("FSClock");return p(),f(ne,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:o(({props:l})=>[a(W,ee({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear},l),X({"prepend-inner":o(()=>[S(e.$slots,"prepend-inner",{},()=>[a(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:o(()=>[S(e.$slots,"label",{},()=>[a(I,{wrap:!1},{default:o(()=>[e.$props.label?(p(),f(w,{key:0,class:"fs-date-field-label",font:"text-overline",style:h(e.style)},{default:o(()=>[V(H(e.$props.label),1)]),_:1},8,["style"])):C("",!0),e.$props.label&&e.$props.required?(p(),f(w,{key:1,class:"fs-date-field-label",style:h([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:o(()=>[V(" * ")]),_:1},8,["style"])):C("",!0),a(se,{style:{"min-width":"40px"}}),e.messages.length>0?(p(),f(w,{key:2,class:"fs-date-field-messages",font:"text-overline",style:h(e.style)},{default:o(()=>[V(H(e.messages.join(", ")),1)]),_:1},8,["style"])):C("",!0)]),_:1})])]),key:"0"},Y(e.$slots,(n,u)=>({name:u,fn:o(F=>[S(e.$slots,u,_(x(F)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:o(()=>[a(z,{modelValue:e.tabs},{default:o(()=>[a(t,{width:"394px",elevation:!0,border:!1,value:0},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(b,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[1]||(r[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),a(t,{width:"394px",elevation:!0,border:!1,value:1},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(d,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[2]||(r[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const T=te(A,[["render",ue]]);A.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeField.vue"]};const mr={title:"Foundation/Shared/Input fields/DateTimeField",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:T,FSCol:i},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:ie}},render:(e,{argTypes:r})=>({components:{VForm:de,FSDateTimeField:T,FSCol:i,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>`})};var N,E,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var j,L,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      FSDateTimeField,
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
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const pr=["Variations","Rules"];export{g as Rules,c as Variations,pr as __namedExportsOrder,mr as default};
