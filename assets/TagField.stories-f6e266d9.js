import{E as O,H as o,I as d,J as a,O as U,P as j,Q as M,V as D,F as Q,L as v,d as Z,e as k,Z as X,z as p,U as Y,R as q,M as V,N as B,K as T,A as x,W as ee}from"./vue.esm-bundler-a27e881e.js";import{F as _}from"./FSTextField-2674ecc2.js";import{_ as I}from"./FSWrapGroup-7e2bf7a5.js";import{_ as K}from"./FSTag-699e161b.js";import{C as i,u as C}from"./useColors-64c3c523.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{F as L}from"./FSButton-1f4fb6d7.js";import{_ as c}from"./FSSpan-23926a6a.js";import{_ as y}from"./FSCol-5941d279.js";import{_ as $}from"./FSRow-e0b07355.js";import{V as re}from"./VSpacer-0b076bec.js";import{a as ae,V as le}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VSlideGroup-6834ac05.js";import"./display-dfdccc0e.js";import"./group-9102b821.js";import"./resizeObserver-f6ddbc93.js";import"./FSIcon-98d9a930.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./css-fb381997.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";const W=O({name:"FSTagGroup",components:{FSWrapGroup:I,FSTag:K},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:i.Primary},editable:{type:Boolean,required:!1,default:!0}}});function te(e,r,b,F,S,t){return o(),d(I,U(j(e.$attrs)),{default:a(()=>[(o(!0),M(Q,null,D(e.$props.tags,(n,s)=>(o(),d(K,{key:s,label:n,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",n)},null,8,["label","variant","color","editable","onRemove"]))),128)),v(e.$slots,"default")]),_:3},16)}const oe=z(W,[["render",te]]);W.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const J=O({name:"FSTagField",components:{FSTextField:_,FSTagGroup:oe,FSButton:L,FSSpan:c,FSCol:y,FSRow:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const b=C().getColors(i.Error),F=C().getColors(i.Light),S=C().getColors(i.Dark),t=Z(""),n=k(()=>e.editable?{"--fs-tag-field-color":S.base,"--fs-tag-field-error-color":b.base}:{"--fs-tag-field-color":F.dark}),s=k(()=>{const l=[];for(const u of e.rules){const m=u(e.modelValue);typeof m=="string"&&l.push(m)}return l});return{ColorEnum:i,innerValue:t,messages:s,style:n,onAdd:()=>{if(!e.editable)return;const l=e.modelValue??[];!t.value.length||l.includes(t.value)||(r("update:modelValue",l.concat(t.value)),t.value="")},onRemove:l=>{if(!e.editable)return;const u=e.modelValue??[];!u.length||!u.includes(l)||r("update:modelValue",u.filter(m=>m!==l))}}}});function ne(e,r,b,F,S,t){const n=X("FSTagGroup");return o(),d(y,null,{default:a(()=>[p(_,x({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,onKeydown:ee(e.onAdd,["enter"]),modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.innerValue=s)},e.$attrs),Y({"append-inner":a(()=>[v(e.$slots,"append-inner",{},()=>[p(L,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:a(()=>[v(e.$slots,"label",{},()=>[p($,{wrap:!1},{default:a(()=>[e.$props.label?(o(),d(c,{key:0,class:"fs-tag-field-label",font:"text-overline",style:q(e.style)},{default:a(()=>[V(B(e.$props.label),1)]),_:1},8,["style"])):T("",!0),e.$props.label&&e.$props.required?(o(),d(c,{key:1,class:"fs-tag-field-label",style:q([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[V(" * ")]),_:1},8,["style"])):T("",!0),p(re,{style:{"min-width":"40px"}}),e.messages.length>0?(o(),d(c,{key:2,class:"fs-tag-field-messages",font:"text-overline",style:q(e.style)},{default:a(()=>[V(B(e.messages.join(", ")),1)]),_:1},8,["style"])):T("",!0)]),_:1})])]),key:"0"},D(e.$slots,(s,h)=>({name:h,fn:a(R=>[v(e.$slots,h,U(j(R)))])}))]),1040,["label","description","hideHeader","required","editable","error","onKeydown","modelValue"]),p(n,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const w=z(J,[["render",ne]]);J.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const Ye={title:"Foundation/Shared/Input fields/TagField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:r})=>({components:{FSTagField:w,FSCol:y},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},f={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:ae}},render:(e,{argTypes:r})=>({components:{VForm:le,FSTagField:w,FSCol:y,FSRow:$},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var A,E,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var N,P,H;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid">
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
    </v-form>\`
  })
}`,...(H=(P=f.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const xe=["Variations","Rules"];export{f as Rules,g as Variations,xe as __namedExportsOrder,Ye as default};
