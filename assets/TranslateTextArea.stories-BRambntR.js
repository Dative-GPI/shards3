import{d as N,b as V,c as H,y as C,z as F,E as w,N as n,B as z,O as q,C as l,m as K,G as A,K as $,L as M,M as J,A as Q,P as W,H as x,I as R}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as X}from"./FSDialogSubmit-DGOiqoQD.js";import{F as Y}from"./FSTextArea-BoAxih7k.js";import{F as j}from"./FSButton-DZMcpMR1.js";import{F as L}from"./FSIcon-DfjSexyz.js";import{_ as O}from"./FSSpan-Bh1X02mE.js";import{_ as y}from"./FSRow-CSQtiyAx.js";import{C as m,u as Z}from"./useColors-DnoeDx-P.js";import{u as _}from"./useAppLanguages-BW2WkGTi.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-D8gLxM2E.js";import{F as te}from"./FSForm-DYbVl9Fq.js";import{T as ae}from"./rules-BYoRn_LS.js";import"./FSFadeOut-B5r2PNGg.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BMg9gIvD.js";import"./css-CxoeZkpP.js";import"./FSDialog-CcyZGVNr.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSText-CAGI2dEo.js";import"./useSlots-C9mZt9CQ.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./proxiedModel-BYnu2EOK.js";import"./anchor-BdD5yCeG.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./locale-CA7yUTVs.js";import"./router-C4YP2PAT.js";import"./transition-BtBp4lzQ.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./useTranslations-DgvmBCqU.js";import"./FSBaseField-BXJBXTur.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./VIcon-zho7mIKV.js";import"./density-B5LNz2JK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./rounded-BoPqla0T.js";import"./index-lTYthPHq.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./useDateFormat-DxxoI3Q6.js";import"./useAppLanguageCode-C2XicOK_.js";import"./useAppTimeZone-Bno6Crzp.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-nnkbA0PX.js";const E=N({name:"FSTranslateTextArea",components:{FSDialogSubmit:X,FSTextArea:Y,FSButton:j,FSIcon:L,FSSpan:O,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=_(),{getColors:b}=Z(),v=V(!1),r=V(e.translations),s=b(m.Light),S=b(m.Dark),a=H(()=>e.editable?{"--fs-translate-field-color":S.base}:{"--fs-translate-field-color":s.dark});return{innerTranslations:r,ColorEnum:m,languages:h,dialog:v,style:a,getTranslation:u=>{if(!r.value)return"";const o=r.value.find(p=>p.languageCode===u);return!o||!o[e.property]?"":o[e.property]},setTranslation:(u,o)=>{if(!r.value){r.value=[{languageCode:u,[e.property]:o}];return}const p=r.value.find(G=>G.languageCode===u);p?p[e.property]=o:r.value.push({languageCode:u,[e.property]:o})},onSubmit:()=>{v.value=!1,e.editable&&t("update:translations",r.value)}}}});function re(e,t,h,b,v,r){const s=C("FSTextArea"),S=C("FSDialogSubmit");return F(),w(A,null,[n(s,K({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),z({append:l(()=>[n(j,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[q(e.$slots,(a,i)=>({name:i,fn:l(d=>[$(e.$slots,i,M(J(d)))])}))]),1040,["editable","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(s,{label:e.$tr("translate-text-area.default-value","Default value"),editable:!1,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),w(A,null,q(e.languages,(a,i)=>(F(),Q(s,{editable:e.$props.editable,key:i,modelValue:e.getTranslation(a.code),rows:e.$attrs.rows,"onUpdate:modelValue":d=>e.setTranslation(a.code,d)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(O,{font:"text-overline",style:W(e.style)},{default:l(()=>[x(R(e.$tr("translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(L,null,{default:l(()=>[x(R(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=ee(E,[["render",re]]);E.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const ft={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ae}},render:(e,{argTypes:t})=>({components:{FSForm:te,FSTranslateTextArea:T,FSCol:c,FSRow:y},props:Object.keys(t),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var k,I,B;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      FSTranslateTextArea,
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
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(B=(I=f.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var P,D,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      FSTranslateTextArea,
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
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(U=(D=g.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const gt=["Variations","Rules"];export{g as Rules,f as Variations,gt as __namedExportsOrder,ft as default};
