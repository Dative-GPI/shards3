import{n as z,q as n,u as d,v as r,K as M,M as j,N as H,x as S,y as O,z as U,t as J,l as Q,f as R,V as X,B as p,L as Y,A as c,D as y,E as k,F as C,G as Z,W as ee}from"./vue.esm-bundler-722d5586.js";import{C as m,u as B}from"./useTimeZone-e2d91037.js";import{F as x}from"./FSTextField-525dcab2.js";import{_ as E}from"./FSWrapGroup-713c725d.js";import{_ as I}from"./FSTag-522f6dd5.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as h}from"./FSSpan-25dfede3.js";import{_ as q}from"./FSCol-73c0912e.js";import{_ as $}from"./FSRow-adbe3642.js";import{_ as ae}from"./FSIcon-420cc903.js";import{V as re}from"./VSpacer-14789593.js";import{a as le,V as oe}from"./FSTextFields-01d4cdfb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./VField-ef78f264.js";import"./index-debb29c6.js";import"./VIcon-3294e246.js";import"./VInput-157b0d5f.js";import"./locale-4b40caf6.js";import"./rounded-0d60e9e4.js";import"./loader-40ab58f6.js";import"./VSlideGroup-5b2c4ef9.js";import"./display-1081d62c.js";import"./group-a0dbf136.js";import"./resizeObserver-c610ad12.js";import"./VBtn-6a2a5334.js";import"./elevation-03171874.js";import"./VDefaultsProvider-ca83b848.js";import"./index-de6a3e08.js";import"./VProgressCircular-c301256c.js";const W=z({name:"FSTagGroup",components:{FSWrapGroup:E,FSTag:I},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:m.Primary},editable:{type:Boolean,required:!1,default:!0}}});function te(e,a,g,V,i,t){return n(),d(E,O(U(e.$attrs)),{default:r(()=>[(n(!0),M(H,null,j(e.$props.tags,(s,l)=>(n(),d(I,{key:l,label:s,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",s)},null,8,["label","variant","color","editable","onRemove"]))),128)),S(e.$slots,"default")]),_:3},16)}const ne=K(W,[["render",te]]);W.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Array<String>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const L=z({name:"FSTagField",components:{FSTextField:x,FSTagGroup:ne,FSSpan:h,FSCol:q,FSRow:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},color:{type:String,required:!1,default:m.Dark},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:m.Primary},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{modelValue:g,rules:V,editable:i}=J(e),t=Q(""),s=B().getColors(m.Error),l=B().getColors(m.Dark),f=R(()=>i.value?{"--fs-tag-field-cursor":"pointer","--fs-tag-field-base-text":l.base,"--fs-tag-field-dark-text":l.dark,"--fs-tag-field-error-color":s.base}:{"--fs-tag-field-cursor":"default","--fs-tag-field-base-text":l.light,"--fs-tag-field-dark-text":l.light}),T=R(()=>{const o=[];for(const u of V.value){const v=u(e.modelValue);typeof v=="string"&&o.push(v)}return o});return{innerValue:t,messages:T,style:f,onAdd:()=>{if(!i.value)return;const o=g.value??[];!t.value.length||o.includes(t.value)||(a("update:modelValue",o.concat(t.value)),t.value="")},onRemove:o=>{if(!i.value)return;const u=g.value??[];!u.length||!u.includes(o)||a("update:modelValue",u.filter(v=>v!==o))}}}});function se(e,a,g,V,i,t){const s=X("FSTagGroup");return n(),d(q,null,{default:r(()=>[p(x,Z({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,modelValue:e.innerValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerValue=l),onKeydown:ee(e.onAdd,["enter"])},e.$attrs),Y({label:r(()=>[S(e.$slots,"label",{},()=>[p($,{wrap:!1},{default:r(()=>[e.$props.label?(n(),d(h,{key:0,class:"fs-tag-field-label",font:"text-overline",style:c(e.style)},{default:r(()=>[y(k(e.$props.label),1)]),_:1},8,["style"])):C("",!0),e.$props.label&&e.$props.required?(n(),d(h,{key:1,class:"fs-tag-field-label",style:c([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:r(()=>[y(" * ")]),_:1},8,["style"])):C("",!0),p(re,{style:{"min-width":"40px"}}),e.messages.length>0?(n(),d(h,{key:2,class:"fs-tag-field-messages",font:"text-overline",style:c(e.style)},{default:r(()=>[y(k(e.messages.join(", ")),1)]),_:1},8,["style"])):C("",!0)]),_:1})])]),"append-inner":r(()=>[S(e.$slots,"append-inner",{},()=>[p(ae,{class:"fs-tag-field-icon",size:"m",style:c(e.style),onClick:e.onAdd},{default:r(()=>[y(" mdi-tag-outline ")]),_:1},8,["style","onClick"])])]),_:2},[j(e.$slots,(l,f)=>({name:f,fn:r(T=>[S(e.$slots,f,O(U(T)))])}))]),1040,["label","description","type","color","required","editable","error","modelValue","onKeydown"]),p(s,{tags:e.$props.modelValue,variant:e.$props.tagVariant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const w=K(L,[["render",se]]);L.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const Ue={title:"Foundation/Shared/Input fields/TagField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:a})=>({components:{FSTagField:w,FSCol:q},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSTagField
        label="Tag - full - dark color, primary tag color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="primary"
        tagVariant="standard"
        label="Tag - standard - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="warning"
        tagColor="warning"
        label="Required tag - full - warning color"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="error"
        tagColor="error"
        label="Uneditable - full - error color"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},F={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:le}},render:(e,{argTypes:a})=>({components:{VForm:oe,FSTagField:w,FSCol:q,FSRow:$},props:Object.keys(a),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
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
    </v-form>`})};var _,A,G;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        label="Tag - full - dark color, primary tag color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="primary"
        tagVariant="standard"
        label="Tag - standard - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="warning"
        tagColor="warning"
        label="Required tag - full - warning color"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        color="error"
        tagColor="error"
        label="Uneditable - full - error color"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(G=(A=b.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,D,P;F.parameters={...F.parameters,docs:{...(N=F.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid" v-lazy>
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
}`,...(P=(D=F.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const xe=["Variations","Rules"];export{F as Rules,b as Variations,xe as __namedExportsOrder,Ue as default};
