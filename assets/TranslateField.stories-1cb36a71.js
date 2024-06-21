import{f as x,j as V,g as z,o as J,D as Q,E as F,H as C,P as n,U as W,V as q,G as r,x as X,J as w,Q as R,R as Y,S as Z,F as ee,W as ae,K as $,L as k}from"./vue.esm-bundler-a0893183.js";import{F as te}from"./FSDialogSubmit-f0b9b855.js";import{_ as g}from"./FSTextField-3d775cb5.js";import{F as j}from"./FSButton-29e96b8a.js";import{_}from"./FSIcon-9d61ed62.js";import{_ as E}from"./FSSpan-4daadeb4.js";import{_ as v}from"./FSRow-821d23a1.js";import{C as p,u as ne}from"./useColors-6c375bb5.js";import{u as re}from"./useLanguages-6fc2a570.js";import{u as le}from"./useSlots-d5b57407.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as c}from"./FSCol-e45ac157.js";import{F as se}from"./FSForm-f0ef5762.js";import{T as ie}from"./rules-46cd7bcd.js";import"./FSFadeOut-a78e38e1.js";import"./uuid-08309875.js";import"./css-03aed76d.js";import"./FSDialog-c8c50bef.js";import"./FSCard-c200753c.js";import"./FSText-46c134d7.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./forwardRefs-e658ad70.js";import"./useRender-13ac3742.js";import"./theme-41eca2c8.js";import"./proxiedModel-59232916.js";import"./anchor-155e2782.js";import"./color-d0fba9db.js";import"./dimensions-b1078284.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./locale-ece9a1bb.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./transition-36d39bce.js";import"./VDefaultsProvider-c4e19f1a.js";import"./VSpacer-b1094f09.js";import"./useTranslations-95b4a686.js";import"./VField-c7486719.js";import"./index-ec7e733e.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./rounded-4c492e72.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./FSClickable-550391c2.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./useAppTimeZone-d7f3e4a5.js";const O=x({name:"FSTranslateField",components:{FSDialogSubmit:te,FSTextField:g,FSButton:j,FSIcon:_,FSSpan:E,FSRow:v},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{getMany:y,fetching:h,entities:T}=re(),{getColors:b}=ne(),{slots:d}=le();delete d.append;const a=V(e.translations),l=V(!1),s=b(p.Light),A=b(p.Dark),H=z(()=>e.editable?{"--fs-translate-field-color":A.base}:{"--fs-translate-field-color":s.dark}),N=i=>{if(!a.value)return"";const o=a.value.find(u=>u.languageCode===i);return!o||!o[e.property]?"":o[e.property]},G=(i,o)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:o}];return}const u=a.value.find(M=>M.languageCode===i);u?u[e.property]=o:a.value.push({languageCode:i,[e.property]:o})},K=()=>{l.value=!1,e.editable&&t("update:translations",a.value)};return J(()=>{y()}),{fetchingLanguages:h,innerTranslations:a,ColorEnum:p,languages:T,dialog:l,slots:d,style:H,getTranslation:N,setTranslation:G,onSubmit:K}}});function de(e,t,y,h,T,b){const d=Q("FSDialogSubmit");return F(),C(w,null,[n(g,X({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),W({append:r(()=>[n(j,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,load:e.fetchingLanguages,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","label","appendIcon","variant","color","load"]),R(e.$slots,"append")]),_:2},[q(e.slots,(a,l)=>({name:l,fn:r(s=>[R(e.$slots,l,Y(Z(s)))])}))]),1040,["editable","modelValue"]),n(d,{title:e.$tr("ui.translate-field.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:r(()=>[n(c,{gap:"32px"},{default:r(()=>[n(g,{label:e.$tr("ui.translate-field.default-value","Default value"),editable:!1,modelValue:e.$props.modelValue},null,8,["label","modelValue"]),n(c,{gap:"16px"},{default:r(()=>[(F(!0),C(w,null,q(e.languages,(a,l)=>(F(),ee(g,{editable:e.$props.editable,key:l,modelValue:e.getTranslation(a.code),"onUpdate:modelValue":s=>e.setTranslation(a.code,s)},{label:r(()=>[n(v,{wrap:!1},{default:r(()=>[n(E,{class:"fs-translate-field-label",font:"text-overline",style:ae(e.style)},{default:r(()=>[$(k(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(_,null,{default:r(()=>[$(k(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const S=oe(O,[["render",de]]);O.__docgenInfo={displayName:"FSTranslateField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateField.vue"]};const ca={title:"Foundation/Shared/Input fields/TranslateField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateField:S,FSCol:c},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},f={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ie}},render:(e,{argTypes:t})=>({components:{FSForm:se,FSTranslateField:S,FSCol:c,FSRow:v},props:Object.keys(t),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var I,B,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
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
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,P,U;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateField,
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
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const ba=["Variations","Rules"];export{f as Rules,m as Variations,ba as __namedExportsOrder,ca as default};
