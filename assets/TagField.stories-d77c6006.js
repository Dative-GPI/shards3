import{D as j,G as o,H as d,I as a,R as M,V as D,F as Q,M as v,P as O,Q as U,j as X,d as k,E as Y,y as p,U as Z,K as q,N as V,O as B,J as T,z as x,W as ee}from"./vue.esm-bundler-47273a21.js";import{C as i,u as C}from"./useColors-446eeb5a.js";import{a as re}from"./rules-f5c4efdb.js";import{F as _}from"./FSTextField-045eeec4.js";import{_ as I}from"./FSWrapGroup-96c1a754.js";import{_ as K}from"./FSTag-d0311cc5.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{F as W}from"./FSButton-95139452.js";import{_ as c}from"./FSSpan-6a5d69b6.js";import{_ as y}from"./FSCol-00f12d9b.js";import{_ as $}from"./FSRow-89f60060.js";import{V as ae}from"./VSpacer-6746e4d1.js";import{V as le}from"./VForm-4333cb27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./color-38d974b0.js";import"./transition-6c7cc79f.js";import"./VInput-fdcb6e75.js";import"./locale-5c4d4b03.js";import"./VIcon-f933c800.js";import"./density-52b016fa.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./forwardRefs-e658ad70.js";import"./index-1e6cce54.js";import"./VSlideGroup-f4a13555.js";import"./display-e8621586.js";import"./group-0f5e58b6.js";import"./resizeObserver-87306138.js";import"./FSIcon-be851c75.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./elevation-522a2612.js";import"./dimensions-699818e3.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./LexicalSelection.prod-b0bd0f79.js";const L=j({name:"FSTagGroup",components:{FSWrapGroup:I,FSTag:K},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:i.Primary},editable:{type:Boolean,required:!1,default:!0}}});function te(e,r,b,F,S,t){return o(),d(I,O(U(e.$attrs)),{default:a(()=>[(o(!0),M(Q,null,D(e.$props.tags,(n,s)=>(o(),d(K,{key:s,label:n,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",n)},null,8,["label","variant","color","editable","onRemove"]))),128)),v(e.$slots,"default")]),_:3},16)}const oe=z(L,[["render",te]]);L.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const J=j({name:"FSTagField",components:{FSTextField:_,FSTagGroup:oe,FSButton:W,FSSpan:c,FSCol:y,FSRow:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:i.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const b=C().getColors(i.Error),F=C().getColors(i.Light),S=C().getColors(i.Dark),t=X(""),n=k(()=>e.editable?{"--fs-tag-field-color":S.base,"--fs-tag-field-error-color":b.base}:{"--fs-tag-field-color":F.dark}),s=k(()=>{const l=[];for(const u of e.rules){const m=u(e.modelValue);typeof m=="string"&&l.push(m)}return l});return{ColorEnum:i,innerValue:t,messages:s,style:n,onAdd:()=>{if(!e.editable)return;const l=e.modelValue??[];!t.value.length||l.includes(t.value)||(r("update:modelValue",l.concat(t.value)),t.value="")},onRemove:l=>{if(!e.editable)return;const u=e.modelValue??[];!u.length||!u.includes(l)||r("update:modelValue",u.filter(m=>m!==l))}}}});function ne(e,r,b,F,S,t){const n=Y("FSTagGroup");return o(),d(y,null,{default:a(()=>[p(_,x({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,onKeydown:ee(e.onAdd,["enter"]),modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.innerValue=s)},e.$attrs),Z({"append-inner":a(()=>[v(e.$slots,"append-inner",{},()=>[p(W,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:a(()=>[v(e.$slots,"label",{},()=>[p($,{wrap:!1},{default:a(()=>[e.$props.label?(o(),d(c,{key:0,class:"fs-tag-field-label",font:"text-overline",style:q(e.style)},{default:a(()=>[V(B(e.$props.label),1)]),_:1},8,["style"])):T("",!0),e.$props.label&&e.$props.required?(o(),d(c,{key:1,class:"fs-tag-field-label",style:q([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[V(" * ")]),_:1},8,["style"])):T("",!0),p(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(o(),d(c,{key:2,class:"fs-tag-field-messages",font:"text-overline",style:q(e.style)},{default:a(()=>[V(B(e.messages.join(", ")),1)]),_:1},8,["style"])):T("",!0)]),_:1})])]),key:"0"},D(e.$slots,(s,h)=>({name:h,fn:a(R=>[v(e.$slots,h,O(U(R)))])}))]),1040,["label","description","hideHeader","required","editable","error","onKeydown","modelValue"]),p(n,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const w=z(J,[["render",ne]]);J.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const Ze={title:"Foundation/Shared/Input fields/TagField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:r})=>({components:{FSTagField:w,FSCol:y},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},f={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:re}},render:(e,{argTypes:r})=>({components:{VForm:le,FSTagField:w,FSCol:y,FSRow:$},props:Object.keys(r),setup(){return{...e}},template:`
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
    </v-form>`})};var G,E,N;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(E=g.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,A,H;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(A=f.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const xe=["Variations","Rules"];export{f as Rules,g as Variations,xe as __namedExportsOrder,Ze as default};
