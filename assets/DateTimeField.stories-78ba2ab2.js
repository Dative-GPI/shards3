import{D as Z,j as m,d as O,w as Q,E as y,G as p,H as f,I as o,z as a,W as X,L as S,K as h,M as C,N as H,J as V,U as Y,y as _,O as x,P as ee}from"./vue.esm-bundler-6746129d.js";import{C as i,u as q}from"./useColors-af9c4499.js";import{D as re}from"./rules-1d0b59d0.js";import{a as le}from"./useTimeZone-147b7e03.js";import{F as W}from"./FSTextField-7b3e4418.js";import{F as oe}from"./FSCalendar-988c6534.js";import{_ as M}from"./FSWindow-90644283.js";import{_ as v}from"./FSButton-35c738ab.js";import{F as ae}from"./FSClock-b9c0e765.js";import{F as te}from"./FSCard-7c6eaa72.js";import{_ as s}from"./FSCol-7dad0d26.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSRow-40eef247.js";import{_ as w}from"./FSSpan-636f18e6.js";import{V as ie}from"./VSpacer-a83300f0.js";import{V as se}from"./VMenu-369abe7d.js";import{V as de}from"./VForm-6ea3dbb9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dcffbbe6.js";import"./lodash-569b8a6d.js";import"./VTextField-259e5da4.js";import"./VField-7b300f30.js";import"./index-a55f475c.js";import"./color-28636d86.js";import"./transition-909f2bdc.js";import"./VInput-0d298506.js";import"./locale-6d7be75c.js";import"./VIcon-bfd3bf26.js";import"./density-0267c9a3.js";import"./loader-ad3b4aa2.js";import"./rounded-4ccd8171.js";import"./forwardRefs-e658ad70.js";import"./index-5d004ff4.js";import"./VLocaleProvider-4664b327.js";import"./date-09b5ab13.js";import"./VDefaultsProvider-4443303c.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./elevation-6127bd0f.js";import"./group-6b499f9e.js";import"./dimensions-b4b52e44.js";import"./router-6af7a2c9.js";import"./index-a12920e9.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./VWindowItem-f7a9c1d2.js";import"./lazy-0cd9d9af.js";import"./ssrBoot-456cfc3d.js";import"./FSIcon-e171104f.js";import"./FSSlider-60e5a84f.js";import"./LexicalSelection.prod-bad52e97.js";import"./VOverlay-9bdb643e.js";import"./display-736a0f51.js";import"./dialog-transition-9c1510cc.js";const A=Z({name:"FSDateTimeField",components:{FSTextField:W,FSCalendar:oe,FSWindow:M,FSButton:v,FSClock:ae,FSCard:te,FSCol:s},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getUserOffsetMillis:D,epochToLongTimeFormat:$}=le(),k=q().getColors(i.Error),R=q().getColors(i.Light),b=q().getColors(i.Dark),t=m(!1),d=m(0),l=m(0),n=m(null);e.modelValue&&(l.value=Math.floor((e.modelValue+D())%(24*60*60*1e3)),n.value=e.modelValue-l.value);const u=O(()=>e.editable?{"--fs-date-field-color":b.base,"--fs-date-field-error-color":k.base}:{"--fs-date-field-color":R.dark}),F=O(()=>{const U=[];for(const K of e.rules){const B=K(e.modelValue??null);typeof B=="string"&&U.push(B)}return U}),G=()=>{r("update:modelValue",null),n.value=null,l.value=0},J=()=>{r("update:modelValue",n.value+l.value),t.value=!1};return Q(t,()=>{t.value||setTimeout(()=>d.value=0,100)}),{ColorEnum:i,innerDate:n,innerTime:l,messages:F,style:u,menu:t,tabs:d,onClear:G,onSubmit:J,epochToLongTimeFormat:$}}});function ue(e,r,D,$,k,R){const b=y("FSCalendar"),t=y("FSCard"),d=y("FSClock");return p(),f(se,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":r[3]||(r[3]=l=>e.menu=l)},{activator:o(({props:l})=>[a(W,_({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,readonly:!0,modelValue:e.epochToLongTimeFormat(e.$props.modelValue),"onClick:clear":e.onClear},l),X({"prepend-inner":o(()=>[S(e.$slots,"prepend-inner",{},()=>[a(v,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:o(()=>[S(e.$slots,"label",{},()=>[a(I,{wrap:!1},{default:o(()=>[e.$props.label?(p(),f(w,{key:0,class:"fs-date-field-label",font:"text-overline",style:h(e.style)},{default:o(()=>[C(H(e.$props.label),1)]),_:1},8,["style"])):V("",!0),e.$props.label&&e.$props.required?(p(),f(w,{key:1,class:"fs-date-field-label",style:h([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:o(()=>[C(" * ")]),_:1},8,["style"])):V("",!0),a(ie,{style:{"min-width":"40px"}}),e.messages.length>0?(p(),f(w,{key:2,class:"fs-date-field-messages",font:"text-overline",style:h(e.style)},{default:o(()=>[C(H(e.messages.join(", ")),1)]),_:1},8,["style"])):V("",!0)]),_:1})])]),key:"0"},Y(e.$slots,(n,u)=>({name:u,fn:o(F=>[S(e.$slots,u,x(ee(F)))])}))]),1040,["label","description","color","hideHeader","required","editable","error","modelValue","onClick:clear"])]),default:o(()=>[a(M,{modelValue:e.tabs},{default:o(()=>[a(t,{width:"394",elevation:!0,border:!1,value:0},{default:o(()=>[a(s,{width:"fill"},{default:o(()=>[a(b,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=l=>e.innerDate=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:r[1]||(r[1]=l=>e.tabs++)},null,8,["color","label"])]),_:1})]),_:1}),a(t,{width:"394",elevation:!0,border:!1,value:1},{default:o(()=>[a(s,{width:"fill"},{default:o(()=>[a(d,{color:e.$props.color,modelValue:e.innerTime,"onUpdate:modelValue":r[2]||(r[2]=l=>e.innerTime=l)},null,8,["color","modelValue"]),a(v,{fullWidth:!0,color:e.$props.color,label:e.$tr("ui.date-menu.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3},8,["modelValue"])}const T=ne(A,[["render",ue]]);A.__docgenInfo={displayName:"FSDateTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDateTimeField.vue"]};const pr={title:"Foundation/Shared/Input fields/DateTimeField",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(e,{argTypes:r})=>({components:{FSDateTimeField:T,FSCol:s},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},g={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:re}},render:(e,{argTypes:r})=>({components:{VForm:de,FSDateTimeField:T,FSCol:s,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
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
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var P,z,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid" v-lazy>
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
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const fr=["Variations","Rules"];export{g as Rules,c as Variations,fr as __namedExportsOrder,pr as default};
