import{D as Q,j as m,d as B,w as Z,E as y,G as p,H as f,I as o,y as a,U as X,M as S,K as h,N as V,O as H,J as C,V as Y,z as _,P as x,Q as ee}from"./vue.esm-bundler-47273a21.js";import{C as s,u as q}from"./useColors-446eeb5a.js";import{D as re}from"./rules-f5c4efdb.js";import{u as le}from"./useTimeZone-898e8e2d.js";import{F as W}from"./FSTextField-045eeec4.js";import{F as oe}from"./FSCalendar-a31538de.js";import{_ as z}from"./FSWindow-08135d38.js";import{F as v}from"./FSButton-95139452.js";import{F as ae}from"./FSClock-ee805a46.js";import{F as te}from"./FSCard-e4bdc27c.js";import{_ as i}from"./FSCol-00f12d9b.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-89f60060.js";import{_ as w}from"./FSSpan-6a5d69b6.js";import{V as se}from"./VSpacer-6746e4d1.js";import{V as ie}from"./VMenu-e2ab9d1e.js";import{V as de}from"./VForm-4333cb27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./lodash-569b8a6d.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./color-38d974b0.js";import"./transition-6c7cc79f.js";import"./VInput-fdcb6e75.js";import"./locale-5c4d4b03.js";import"./VIcon-f933c800.js";import"./density-52b016fa.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./forwardRefs-e658ad70.js";import"./index-1e6cce54.js";import"./VLocaleProvider-fb512fbc.js";import"./date-27d31bd3.js";import"./VDefaultsProvider-6a122c68.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./elevation-522a2612.js";import"./group-0f5e58b6.js";import"./dimensions-699818e3.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";import"./VWindowItem-6ca01277.js";import"./lazy-b159d447.js";import"./ssrBoot-82acca87.js";import"./FSIcon-be851c75.js";import"./FSSlider-3a249004.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VOverlay-da68897b.js";import"./display-e8621586.js";const A=Q({name:"FSDateTimeField",components:{FSTextField:W,FSCalendar:oe,FSWindow:z,FSButton:v,FSClock:ae,FSCard:te,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:D,epochToLongTimeFormat:$}=le(),k=q().getColors(s.Error),R=q().getColors(s.Light),b=q().getColors(s.Dark),t=m(!1),d=m(0),l=m(0),n=m(null);e.modelValue&&(l.value=Math.floor((e.modelValue+D())%(24*60*60*1e3)),n.value=e.modelValue-l.value);const u=B(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":k.base}:{"--fs-date-field-color":R.dark}),F=B(()=>{const U=[];for(const K of e.rules){const O=K(e.modelValue??null);typeof O=="string"&&U.push(O)}return U}),G=()=>{r("update:modelValue",null),n.value=null,l.value=0},J=()=>{r("update:modelValue",n.value+l.value),t.value=!1};return Z(t,()=>{t.value||setTimeout(()=>d.value=0,100)}),{ColorEnum:s,innerDate:n,innerTime:l,messages:F,style:u,menu:t,tabs:d,onClear:G,onSubmit:J,epochToLongTimeFormat:$}}});function ue(e,r,D,$,k,R){const b=y("FSCalendar"),t=y("FSCard"),d=y("FSClock");return p(),f(ie,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:o(({props:l})=>[a(W,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear},l),X({"prepend-inner":o(()=>[S(e.$slots,"prepend-inner",{},()=>[a(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:o(()=>[S(e.$slots,"label",{},()=>[a(I,{wrap:!1},{default:o(()=>[e.$props.label?(p(),f(w,{key:0,class:"fs-date-field-label",font:"text-overline",style:h(e.style)},{default:o(()=>[V(H(e.$props.label),1)]),_:1},8,["style"])):C("",!0),e.$props.label&&e.$props.required?(p(),f(w,{key:1,class:"fs-date-field-label",style:h([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:o(()=>[V(" * ")]),_:1},8,["style"])):C("",!0),a(se,{style:{"min-width":"40px"}}),e.messages.length>0?(p(),f(w,{key:2,class:"fs-date-field-messages",font:"text-overline",style:h(e.style)},{default:o(()=>[V(H(e.messages.join(", ")),1)]),_:1},8,["style"])):C("",!0)]),_:1})])]),key:"0"},Y(e.$slots,(n,u)=>({name:u,fn:o(F=>[S(e.$slots,u,x(ee(F)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:o(()=>[a(z,{modelValue:e.tabs},{default:o(()=>[a(t,{width:"394px",elevation:!0,border:!1,value:0},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(b,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[1]||(r[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),a(t,{width:"394px",elevation:!0,border:!1,value:1},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(d,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[2]||(r[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const T=ne(A,[["render",ue]]);A.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeField.vue"]};const mr={title:"Foundation/Shared/Input fields/DateTimeField",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:T,FSCol:i},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},g={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:re}},render:(e,{argTypes:r})=>({components:{VForm:de,FSDateTimeField:T,FSCol:i,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
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
    </v-form>`})};var N,j,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var P,L,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
