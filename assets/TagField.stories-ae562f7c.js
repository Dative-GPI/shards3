import{j as k,J as m,K as y,L as p,W as B,X as O,Q as L,Z as A,F as W,R as S,d as _,e as q,I as z,A as b,Y as J,B as M,a0 as Q}from"./vue.esm-bundler-41eda46b.js";import{F as G}from"./FSTextField-77636cac.js";import{_ as E}from"./FSWrapGroup-d3a1dbf2.js";import{_ as P}from"./FSTag-6409797a.js";import{C as o,u as X}from"./useColors-baaa98f5.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{F as H}from"./FSButton-d0a22eb6.js";import{_ as g}from"./FSCol-282cc158.js";import{u as Y}from"./useRules-d33c1ab7.js";import{F as Z}from"./FSForm-d4cbb727.js";import{_ as x}from"./FSRow-1508d56d.js";import{b as ee}from"./rules-4c5e7e68.js";import"./VField-c52f5557.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./VSpacer-63a59a9e.js";import"./useRender-dd35ddd1.js";import"./theme-be1bd2db.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./tag-64b4b0e7.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./css-35e8563f.js";import"./VSlideGroup-aeb2e4a4.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./group-2589989a.js";import"./FSIcon-713345eb.js";import"./VBtn-66b397c8.js";import"./border-eea26164.js";import"./elevation-878f110a.js";import"./router-09f0866b.js";import"./index-4ba2035c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./useTranslations-3bd97805.js";import"./useAppTimeZone-fd64682f.js";const N=k({name:"FSTagGroup",components:{FSWrapGroup:E,FSTag:P},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:o.Primary},editable:{type:Boolean,required:!1,default:!0}}});function re(e,r,f,v,c,n){return m(),y(E,B(O(e.$attrs)),{default:p(()=>[(m(!0),L(W,null,A(e.$props.tags,(t,a)=>(m(),y(P,{key:a,label:t,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",t)},null,8,["label","variant","color","editable","onRemove"]))),128)),S(e.$slots,"default")]),_:3},16)}const ae=j(N,[["render",re]]);N.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const U=k({name:"FSTagField",components:{FSTextField:G,FSTagGroup:ae,FSButton:H,FSCol:g},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:o.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:f,blurred:v,getMessages:c}=Y(),{getColors:n}=X(),t=n(o.Error),a=n(o.Light),i=n(o.Dark),l=_(""),D=q(()=>e.editable?{"--fs-tag-field-color":i.base,"--fs-tag-field-error-color":t.base}:{"--fs-tag-field-color":a.dark}),I=q(()=>c(e.modelValue,e.rules));return{innerValue:l,validateOn:f,ColorEnum:o,messages:I,blurred:v,style:D,onRemove:s=>{if(!e.editable)return;const F=e.modelValue??[];!F.length||!F.includes(s)||r("update:modelValue",F.filter(K=>K!==s))},onAdd:()=>{if(!e.editable)return;const s=e.modelValue??[];!l.value.length||s.includes(l.value)||(r("update:modelValue",s.concat(l.value)),l.value="")}}}});function le(e,r,f,v,c,n){const t=z("FSTagGroup");return m(),y(g,null,{default:p(()=>[b(G,M({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,onKeydown:Q(e.onAdd,["enter"]),onBlur:r[0]||(r[0]=a=>e.blurred=!0),modelValue:e.innerValue,"onUpdate:modelValue":r[1]||(r[1]=a=>e.innerValue=a)},e.$attrs),J({"append-inner":p(()=>[S(e.$slots,"append-inner",{},()=>[b(H,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[A(e.$slots,(a,i)=>({name:i,fn:p(l=>[S(e.$slots,i,B(O(l)))])}))]),1040,["label","description","hideHeader","required","editable","rules","messages","validateOn","validationValue","onKeydown","modelValue"]),b(t,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const h=j(U,[["render",le]]);U.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTagField.vue"]};const nr={title:"Foundation/Shared/Input fields/TagField",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:r})=>({components:{FSTagField:h,FSCol:g},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},u={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:ee}},render:(e,{argTypes:r})=>({components:{FSForm:Z,FSTagField:h,FSCol:g,FSRow:x},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid" variant="standard">
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
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var $,w,R;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    <FSForm v-model="args.valid" variant="standard">
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
}`,...(R=(w=u.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const sr=["Variations","Rules"];export{u as Rules,d as Variations,sr as __namedExportsOrder,nr as default};
