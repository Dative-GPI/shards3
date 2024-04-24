import{j as k,J as m,K as y,L as p,W as B,X as _,Q as L,Y as O,F as W,R as S,d as z,e as q,I as J,v as b,_ as M,x as Q,a0 as X}from"./vue.esm-bundler-0c8496bd.js";import{F as G}from"./FSTextField-98f706c4.js";import{_ as A}from"./FSWrapGroup-53ffd2f5.js";import{_ as E}from"./FSTag-bb2be93d.js";import{C as t,u as Y}from"./useColors-b1c35b1c.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSButton-aca46646.js";import{_ as x}from"./FSSpan-dff588c4.js";import{_ as g}from"./FSCol-0a323bdc.js";import{_ as H}from"./FSRow-547598b4.js";import{u as Z}from"./useRules-a67d9042.js";import{F as ee}from"./FSForm-81d8e4b7.js";import{b as re}from"./rules-7526a651.js";import"./useSlots-d0001844.js";import"./VSpacer-989c3452.js";import"./useRender-8701d95b.js";import"./theme-3745e9f1.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./VIcon-7bba82fc.js";import"./color-e947437a.js";import"./tag-0cc02cbd.js";import"./density-22f26472.js";import"./loader-4f914636.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./css-0fb78066.js";import"./VSlideGroup-8312a613.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSIcon-e8919096.js";import"./VBtn-728b3902.js";import"./border-f9cc1939.js";import"./elevation-00653c06.js";import"./dimensions-13ab2ad3.js";import"./router-ad9465af.js";import"./index-5120e393.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./useTranslations-e7f63e09.js";import"./useAppTimeZone-b6ddcce6.js";const N=k({name:"FSTagGroup",components:{FSWrapGroup:A,FSTag:E},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:t.Primary},editable:{type:Boolean,required:!1,default:!0}}});function ae(e,r,f,v,c,n){return m(),y(A,B(_(e.$attrs)),{default:p(()=>[(m(!0),L(W,null,O(e.$props.tags,(o,a)=>(m(),y(E,{key:a,label:o,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",o)},null,8,["label","variant","color","editable","onRemove"]))),128)),S(e.$slots,"default")]),_:3},16)}const le=P(N,[["render",ae]]);N.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const U=k({name:"FSTagField",components:{FSTextField:G,FSTagGroup:le,FSButton:j,FSSpan:x,FSCol:g,FSRow:H},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:f,blurred:v,getMessages:c}=Z(),{getColors:n}=Y(),o=n(t.Error),a=n(t.Light),i=n(t.Dark),l=z(""),D=q(()=>e.editable?{"--fs-tag-field-color":i.base,"--fs-tag-field-error-color":o.base}:{"--fs-tag-field-color":a.dark}),I=q(()=>c(e.modelValue,e.rules));return{innerValue:l,validateOn:f,ColorEnum:t,messages:I,blurred:v,style:D,onRemove:s=>{if(!e.editable)return;const F=e.modelValue??[];!F.length||!F.includes(s)||r("update:modelValue",F.filter(K=>K!==s))},onAdd:()=>{if(!e.editable)return;const s=e.modelValue??[];!l.value.length||s.includes(l.value)||(r("update:modelValue",s.concat(l.value)),l.value="")}}}});function oe(e,r,f,v,c,n){const o=J("FSTagGroup");return m(),y(g,null,{default:p(()=>[b(G,Q({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,onKeydown:X(e.onAdd,["enter"]),onBlur:r[0]||(r[0]=a=>e.blurred=!0),modelValue:e.innerValue,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerValue=a)},e.$attrs),M({"append-inner":p(()=>[S(e.$slots,"append-inner",{},()=>[b(j,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[O(e.$slots,(a,i)=>({name:i,fn:p(l=>[S(e.$slots,i,B(_(l)))])}))]),1040,["label","description","hideHeader","required","editable","rules","messages","validateOn","validationValue","onKeydown","modelValue"]),b(o,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const h=P(U,[["render",oe]]);U.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTagField.vue"]};const nr={title:"Foundation/Shared/Input fields/TagField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:r})=>({components:{FSTagField:h,FSCol:g},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},u={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:re}},render:(e,{argTypes:r})=>({components:{FSForm:ee,FSTagField:h,FSCol:g,FSRow:H},props:Object.keys(r),setup(){return{...e}},template:`
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
