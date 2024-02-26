import{D as Z,j as m,d as O,w as Q,E as y,G as p,H as f,I as o,z as a,W as X,L as S,K as h,M as C,N as H,J as V,U as Y,y as _,O as x,P as ee}from"./vue.esm-bundler-17cb12ce.js";import{C as s,u as q}from"./useColors-04b7b26f.js";import{D as re}from"./rules-8f4289e2.js";import{a as le}from"./useTimeZone-abc9a874.js";import{F as M}from"./FSTextField-867bbd59.js";import{F as oe}from"./FSCalendar-f8ed5d56.js";import{_ as z}from"./FSWindow-cef71466.js";import{_ as v}from"./FSButton-8130144f.js";import{F as ae}from"./FSClock-6e46f8be.js";import{F as te}from"./FSCard-8714722b.js";import{_ as i}from"./FSCol-03fc1f3a.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-9ce6aace.js";import{_ as w}from"./FSSpan-2051def6.js";import{V as se}from"./VSpacer-bacd1ff2.js";import{V as ie}from"./VMenu-0c6b0489.js";import{V as de}from"./VForm-59ed5e27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c4ac2200.js";import"./lodash-569b8a6d.js";import"./VTextField-99deef4a.js";import"./VField-d3cacb6a.js";import"./index-c6c13bcc.js";import"./color-d421c344.js";import"./transition-4d995a4a.js";import"./VInput-9e5eb041.js";import"./locale-2e51016c.js";import"./VIcon-343130ca.js";import"./density-cdecea01.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./forwardRefs-e658ad70.js";import"./index-c7efe106.js";import"./VLocaleProvider-c87a76f9.js";import"./date-5b9564d4.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./elevation-cb67bcb5.js";import"./group-a63c5543.js";import"./dimensions-10b1de84.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";import"./VWindowItem-42addeb6.js";import"./lazy-04b58018.js";import"./ssrBoot-e21c8f3c.js";import"./FSIcon-16c55386.js";import"./FSSlider-12782563.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./VOverlay-10257b67.js";import"./display-4fe57557.js";const A=Z({name:"FSDateTimeField",components:{FSTextField:M,FSCalendar:oe,FSWindow:z,FSButton:v,FSClock:ae,FSCard:te,FSCol:i},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:D,epochToLongTimeFormat:$}=le(),k=q().getColors(s.Error),R=q().getColors(s.Light),b=q().getColors(s.Dark),t=m(!1),d=m(0),l=m(0),n=m(null);e.modelValue&&(l.value=Math.floor((e.modelValue+D())%(24*60*60*1e3)),n.value=e.modelValue-l.value);const u=O(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":k.base}:{"--fs-date-field-color":R.dark}),F=O(()=>{const U=[];for(const K of e.rules){const B=K(e.modelValue??null);typeof B=="string"&&U.push(B)}return U}),G=()=>{r("update:modelValue",null),n.value=null,l.value=0},J=()=>{r("update:modelValue",n.value+l.value),t.value=!1};return Q(t,()=>{t.value||setTimeout(()=>d.value=0,100)}),{ColorEnum:s,innerDate:n,innerTime:l,messages:F,style:u,menu:t,tabs:d,onClear:G,onSubmit:J,epochToLongTimeFormat:$}}});function ue(e,r,D,$,k,R){const b=y("FSCalendar"),t=y("FSCard"),d=y("FSClock");return p(),f(ie,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:o(({props:l})=>[a(M,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear},l),X({"prepend-inner":o(()=>[S(e.$slots,"prepend-inner",{},()=>[a(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:o(()=>[S(e.$slots,"label",{},()=>[a(I,{wrap:!1},{default:o(()=>[e.$props.label?(p(),f(w,{key:0,class:"fs-date-field-label",font:"text-overline",style:h(e.style)},{default:o(()=>[C(H(e.$props.label),1)]),_:1},8,["style"])):V("",!0),e.$props.label&&e.$props.required?(p(),f(w,{key:1,class:"fs-date-field-label",style:h([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:o(()=>[C(" * ")]),_:1},8,["style"])):V("",!0),a(se,{style:{"min-width":"40px"}}),e.messages.length>0?(p(),f(w,{key:2,class:"fs-date-field-messages",font:"text-overline",style:h(e.style)},{default:o(()=>[C(H(e.messages.join(", ")),1)]),_:1},8,["style"])):V("",!0)]),_:1})])]),key:"0"},Y(e.$slots,(n,u)=>({name:u,fn:o(F=>[S(e.$slots,u,x(ee(F)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:o(()=>[a(z,{modelValue:e.tabs},{default:o(()=>[a(t,{width:"394px",elevation:!0,border:!1,value:0},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(b,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[1]||(r[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),a(t,{width:"394px",elevation:!0,border:!1,value:1},{default:o(()=>[a(i,{width:"fill"},{default:o(()=>[a(d,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[2]||(r[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const T=ne(A,[["render",ue]]);A.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeField.vue"]};const mr={title:"Foundation/Shared/Input fields/DateTimeField",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:T,FSCol:i},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var P,L,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const pr=["Variations","Rules"];export{g as Rules,c as Variations,pr as __namedExportsOrder,mr as default};
