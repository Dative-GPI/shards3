import{E as H,H as o,I as i,J as l,O,P as U,Q as J,V as j,F as M,L as c,d as Q,e as R,Z,z as p,U as X,R as q,M as V,N as k,K as T,A as Y,W as x}from"./vue.esm-bundler-a27e881e.js";import{F as D}from"./FSTextField-50214623.js";import{_}from"./FSWrapGroup-77dd91c4.js";import{_ as I}from"./FSTag-31a3d75d.js";import{C as s,u as ee}from"./useColors-64c3c523.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{F as z}from"./FSButton-80bad2c6.js";import{_ as y}from"./FSSpan-23926a6a.js";import{_ as b}from"./FSCol-2e092d2e.js";import{_ as C}from"./FSRow-68eabf56.js";import{V as ae}from"./VSpacer-0b076bec.js";import{a as re,V as le}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./VSlideGroup-6834ac05.js";import"./display-dfdccc0e.js";import"./group-9102b821.js";import"./resizeObserver-f6ddbc93.js";import"./FSIcon-98d9a930.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./css-50f0aa1d.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";const L=H({name:"FSTagGroup",components:{FSWrapGroup:_,FSTag:I},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:s.Primary},editable:{type:Boolean,required:!1,default:!0}}});function te(e,a,d,F,S,h){return o(),i(_,O(U(e.$attrs)),{default:l(()=>[(o(!0),J(M,null,j(e.$props.tags,(r,n)=>(o(),i(I,{key:n,label:r,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",r)},null,8,["label","variant","color","editable","onRemove"]))),128)),c(e.$slots,"default")]),_:3},16)}const oe=K(L,[["render",te]]);L.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const W=H({name:"FSTagField",components:{FSTextField:D,FSTagGroup:oe,FSButton:z,FSSpan:y,FSCol:b,FSRow:C},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:s.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getColors:d}=ee(),F=d(s.Error),S=d(s.Light),h=d(s.Dark),r=Q(""),n=R(()=>e.editable?{"--fs-tag-field-color":h.base,"--fs-tag-field-error-color":F.base}:{"--fs-tag-field-color":S.dark}),m=R(()=>{const t=[];for(const u of e.rules){const g=u(e.modelValue);typeof g=="string"&&t.push(g)}return t});return{ColorEnum:s,innerValue:r,messages:m,style:n,onAdd:()=>{if(!e.editable)return;const t=e.modelValue??[];!r.value.length||t.includes(r.value)||(a("update:modelValue",t.concat(r.value)),r.value="")},onRemove:t=>{if(!e.editable)return;const u=e.modelValue??[];!u.length||!u.includes(t)||a("update:modelValue",u.filter(g=>g!==t))}}}});function ne(e,a,d,F,S,h){const r=Z("FSTagGroup");return o(),i(b,null,{default:l(()=>[p(D,Y({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,onKeydown:x(e.onAdd,["enter"]),modelValue:e.innerValue,"onUpdate:modelValue":a[0]||(a[0]=n=>e.innerValue=n)},e.$attrs),X({"append-inner":l(()=>[c(e.$slots,"append-inner",{},()=>[p(z,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:l(()=>[c(e.$slots,"label",{},()=>[p(C,{wrap:!1},{default:l(()=>[e.$props.label?(o(),i(y,{key:0,class:"fs-tag-field-label",font:"text-overline",style:q(e.style)},{default:l(()=>[V(k(e.$props.label),1)]),_:1},8,["style"])):T("",!0),e.$props.label&&e.$props.required?(o(),i(y,{key:1,class:"fs-tag-field-label",style:q([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:l(()=>[V(" * ")]),_:1},8,["style"])):T("",!0),p(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(o(),i(y,{key:2,class:"fs-tag-field-messages",font:"text-overline",style:q(e.style)},{default:l(()=>[V(k(e.messages.join(", ")),1)]),_:1},8,["style"])):T("",!0)]),_:1})])]),key:"0"},j(e.$slots,(n,m)=>({name:m,fn:l(w=>[c(e.$slots,m,O(U(w)))])}))]),1040,["label","description","hideHeader","required","editable","error","onKeydown","modelValue"]),p(r,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const $=K(W,[["render",ne]]);W.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const xe={title:"Foundation/Shared/Input fields/TagField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:a})=>({components:{FSTagField:$,FSCol:b},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},v={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:re}},render:(e,{argTypes:a})=>({components:{VForm:le,FSTagField:$,FSCol:b,FSRow:C},props:Object.keys(a),setup(){return{...e}},template:`
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
    </v-form>`})};var B,A,E;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(A=f.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,N,P;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(N=v.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const ea=["Variations","Rules"];export{v as Rules,f as Variations,ea as __namedExportsOrder,xe as default};
