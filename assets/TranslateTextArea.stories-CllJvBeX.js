import{d as _,b as w,c as z,y as A,z as F,C as $,L as n,B as l,F as R,m as G,M as H,N as x,I as k,J as K,K as M,E as y,G as T,A as J,O as Q}from"./vue.esm-bundler-Vj2X7okO.js";import{F as W}from"./FSDialogSubmit-C-rcH1rG.js";import{F as X}from"./FSTextArea-yTAeCa7w.js";import{F as j}from"./FSButton-Dxr_k2yH.js";import{_ as O}from"./FSIcon-CNrZYw3j.js";import{_ as C}from"./FSSpan-C4TWI1ol.js";import{_ as V}from"./FSRow-BuYwVvwM.js";import{C as m,u as Y}from"./useColors-ClGgFu9Q.js";import{u as Z}from"./useAppLanguages-D50JKJ0n.js";import{u as ee}from"./useSlots-DXmhvOIb.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as u}from"./FSCol-Bk577joi.js";import{F as ae}from"./FSForm-C6-7llH_.js";import{T as re}from"./rules-BIEyEBZ6.js";import"./FSFadeOut-CORcN4YC.js";import"./uuid-DTaye2KM.js";import"./css-CbCR1nbl.js";import"./FSDialog-DgcKyRco.js";import"./FSCard-IkM7vPXg.js";import"./FSText-CWxdqVl0.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./theme-DqOMA9k1.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CZPY81Tp.js";import"./anchor-J8DF-zwD.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./locale-CMOn_BOp.js";import"./router-DPbzaFf1.js";import"./transition-Cs7QtK7U.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./useTranslations-DyPMaPr_.js";import"./FSBaseField-DIHRCDOI.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./rounded-B-50KYhN.js";import"./index-DQeMThUY.js";import"./FSClickable-B6i4bUTy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./useDateFormat-BB4NcicT.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./time-BOZ1S5aJ.js";const E=_({name:"FSTranslateTextArea",components:{FSDialogSubmit:W,FSTextArea:X,FSButton:j,FSIcon:O,FSSpan:C,FSRow:V},props:{description:{type:String,required:!1,default:null},buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:q}=Z(),{getColors:c}=Y(),{slots:b}=ee();delete b.description;const v=w(!1),a=w(e.translations),S=c(m.Light),r=c(m.Dark),s=z(()=>e.editable?{"--fs-translate-field-color":r.base}:{"--fs-translate-field-color":S.dark});return{innerTranslations:a,ColorEnum:m,languages:q,dialog:v,slots:b,style:s,getTranslation:i=>{if(!a.value)return"";const o=a.value.find(p=>p.languageCode===i);return!o||!o[e.property]?"":o[e.property]},setTranslation:(i,o)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:o}];return}const p=a.value.find(N=>N.languageCode===i);p?p[e.property]=o:a.value.push({languageCode:i,[e.property]:o})},onSubmit:()=>{v.value=!1,e.editable&&t("update:translations",a.value)}}}});function ne(e,t,q,c,b,v){const a=A("FSTextArea"),S=A("FSDialogSubmit");return F(),$(R,null,[n(u,null,{default:l(()=>[n(a,G({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),H({_:2},[x(e.slots,(r,s)=>({name:s,fn:l(d=>[k(e.$slots,s,K(M(d)))])}))]),1040,["editable","modelValue"]),n(j,{width:"100%",prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,label:e.$props.buttonLabel??e.$tr("ui.translateTextArea.translateButton.label","Manage translations"),onClick:t[1]||(t[1]=r=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color","label"]),k(e.$slots,"description",{},()=>[n(C,{font:"text-overline"},{default:l(()=>[y(T(e.$props.description),1)]),_:1})])]),_:3}),n(S,{title:e.$tr("ui.translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=r=>e.dialog=r)},{body:l(()=>[n(u,{gap:"32px"},{default:l(()=>[n(a,{label:e.$tr("ui.translate-text-area.default-value","Default value"),editable:!1,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(u,{gap:"20px"},{default:l(()=>[(F(!0),$(R,null,x(e.languages,(r,s)=>(F(),J(a,{editable:e.$props.editable,key:s,modelValue:e.getTranslation(r.code),rows:e.$attrs.rows,"onUpdate:modelValue":d=>e.setTranslation(r.code,d)},{label:l(()=>[n(V,{wrap:!1,align:"center-left"},{default:l(()=>[n(C,{font:"text-overline",style:Q(e.style)},{default:l(()=>[y(T(e.$tr("ui.translate-field.translate-in","Translate in {0}",r.label)),1)]),_:2},1032,["style"]),n(O,null,{default:l(()=>[y(T(r.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const h=te(E,[["render",ne]]);E.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const dt={title:"Foundation/Shared/Input fields/TranslateTextArea",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateTextArea:h,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
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
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:re}},render:(e,{argTypes:t})=>({components:{FSForm:ae,FSTranslateTextArea:h,FSCol:u,FSRow:V},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSForm>`})};var I,B,D;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        :rows="6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
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
}`,...(D=(B=f.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,U,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(U=g.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};const pt=["Variations","Rules"];export{g as Rules,f as Variations,pt as __namedExportsOrder,dt as default};
