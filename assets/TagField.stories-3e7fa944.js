import{j as k,K as m,L as y,M as p,S as B,U as _,Q as L,Z as O,F as z,R as S,d as M,e as q,J as W,z as b,Y as J,x as Q,_ as Y}from"./vue.esm-bundler-8d1b7c9b.js";import{F as G}from"./FSTextField-869ddcdc.js";import{_ as A}from"./FSWrapGroup-4d4c94ab.js";import{_ as E}from"./FSTag-6ad6a404.js";import{C as t,u as Z}from"./useColors-fe8562a0.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSButton-24ac64b4.js";import{_ as x}from"./FSSpan-54104d2b.js";import{_ as g}from"./FSCol-53c64bd8.js";import{_ as j}from"./FSRow-a391dd26.js";import{u as X}from"./useRules-c9867f7f.js";import{b as ee,F as re}from"./FSForm-410f43f5.js";import"./useSlots-36159ddf.js";import"./VSpacer-089ee4d2.js";import"./useRender-7d329101.js";import"./theme-82ddebf2.js";import"./VTextField-6f523597.js";import"./VField-0fe66054.js";import"./index-03703da7.js";import"./transition-ec42203e.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./locale-4596da4c.js";import"./proxiedModel-5e90dbf3.js";import"./VIcon-af7bd965.js";import"./color-b802304c.js";import"./tag-c9f6eb57.js";import"./density-f72a6349.js";import"./loader-883a5b9e.js";import"./intersectionObserver-872db127.js";import"./rounded-dfbce428.js";import"./VDefaultsProvider-ec24aebb.js";import"./forwardRefs-e658ad70.js";import"./index-78515ab6.js";import"./css-19c8f0ab.js";import"./VSlideGroup-b35e7181.js";import"./display-599b850b.js";import"./group-9a48651f.js";import"./resizeObserver-170e8e39.js";import"./FSIcon-f1833eba.js";import"./VBtn-310a17a1.js";import"./border-7e6623e1.js";import"./elevation-7b9c5add.js";import"./dimensions-db4341a9.js";import"./router-80533699.js";import"./index-9b4e1373.js";import"./VProgressCircular-51b4f5f8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-40575f4d.js";import"./FSCard-067bcc3b.js";import"./useTranslations-f3c405d6.js";import"./useAppTimeZone-55ea9bf6.js";const H=k({name:"FSTagGroup",components:{FSWrapGroup:A,FSTag:E},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:t.Primary},editable:{type:Boolean,required:!1,default:!0}}});function ae(e,r,f,v,c,n){return m(),y(A,B(_(e.$attrs)),{default:p(()=>[(m(!0),L(z,null,O(e.$props.tags,(o,a)=>(m(),y(E,{key:a,label:o,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",o)},null,8,["label","variant","color","editable","onRemove"]))),128)),S(e.$slots,"default")]),_:3},16)}const le=P(H,[["render",ae]]);H.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const N=k({name:"FSTagField",components:{FSTextField:G,FSTagGroup:le,FSButton:U,FSSpan:x,FSCol:g,FSRow:j},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:f,blurred:v,getMessages:c}=X(),{getColors:n}=Z(),o=n(t.Error),a=n(t.Light),i=n(t.Dark),l=M(""),D=q(()=>e.editable?{"--fs-tag-field-color":i.base,"--fs-tag-field-error-color":o.base}:{"--fs-tag-field-color":a.dark}),K=q(()=>c(e.modelValue,e.rules));return{innerValue:l,validateOn:f,ColorEnum:t,messages:K,blurred:v,style:D,onRemove:s=>{if(!e.editable)return;const F=e.modelValue??[];!F.length||!F.includes(s)||r("update:modelValue",F.filter(I=>I!==s))},onAdd:()=>{if(!e.editable)return;const s=e.modelValue??[];!l.value.length||s.includes(l.value)||(r("update:modelValue",s.concat(l.value)),l.value="")}}}});function oe(e,r,f,v,c,n){const o=W("FSTagGroup");return m(),y(g,null,{default:p(()=>[b(G,Q({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,onKeydown:Y(e.onAdd,["enter"]),onBlur:r[0]||(r[0]=a=>e.blurred=!0),modelValue:e.innerValue,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerValue=a)},e.$attrs),J({"append-inner":p(()=>[S(e.$slots,"append-inner",{},()=>[b(U,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[O(e.$slots,(a,i)=>({name:i,fn:p(l=>[S(e.$slots,i,B(_(l)))])}))]),1040,["label","description","hideHeader","required","editable","rules","messages","validateOn","validationValue","onKeydown","modelValue"]),b(o,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const h=P(N,[["render",oe]]);N.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTagField.vue"]};const nr={title:"Foundation/Shared/Input fields/TagField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:r})=>({components:{FSTagField:h,FSCol:g},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTagField
        label="Tag, full, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, primary color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},u={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:ee}},render:(e,{argTypes:r})=>({components:{FSForm:re,FSTagField:h,FSCol:g,FSRow:j},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var T,V,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["full", "tag", "variant"],
      value2: ["standard", "tag", "variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTagField,
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
      <FSTagField
        label="Tag, full, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, primary color"
        tagVariant="standard"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Uneditable tag, full, error color, width description"
        description="Uneditable description"
        tagColor="error"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var w,$,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: [],
      value2: ["a", "b", "c"],
      value3: [],
      rules: TagRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTagField,
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
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(R=($=u.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const sr=["Variations","Rules"];export{u as Rules,d as Variations,sr as __namedExportsOrder,nr as default};
