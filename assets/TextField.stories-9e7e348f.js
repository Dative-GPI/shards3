import{f as T,F as u}from"./FSTextField-8f22aeb2.js";import{_ as w}from"./FSCol-a9e7dd6a.js";import{k as q,B as R}from"./vue.esm-bundler-bf312605.js";import{m as k,g as C,u as L}from"./VIcon-0f430520.js";import{m as V,c as M}from"./VInput-e7101b19.js";import{p as O}from"./useColors-9da280d0.js";import"./FSSpan-f8d57311.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-25071905.js";import"./VSpacer-59b14095.js";import"./index-0163a579.js";import"./loader-9bad023d.js";import"./locale-69c441bd.js";import"./rounded-66ea04d8.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const _=O({...k(),...V()},"VForm"),j=C()({name:"VForm",props:_(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,r){let{slots:t,emit:F}=r;const o=M(e),d=q();function h(l){l.preventDefault(),o.reset()}function y(l){const s=l,a=o.validate();s.then=a.then.bind(a),s.catch=a.catch.bind(a),s.finally=a.finally.bind(a),F("submit",s),s.defaultPrevented||a.then(f=>{var m;let{valid:S}=f;S&&((m=d.value)==null||m.submit())}),s.preventDefault()}return L(()=>{var l;return R("form",{ref:d,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:h,onSubmit:y},[(l=t.default)==null?void 0:l.call(t,o)])}),T(o,d)}}),D={required:e=>r=>!!r||(e??"Required"),minLength:(e,r)=>t=>t.length>=e||(r??`Must be at least ${e} characters`),maxLength:(e,r)=>t=>t.length<=e||(r??`Must be at most ${e} characters`),email:e=>r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)||(e??"Must be a valid email"),digit:e=>r=>/(?=.*\d)/.test(r)||(e??"Must contain a digit"),uppercase:e=>r=>/(?=.*[A-Z])/.test(r)||(e??"Must contain an uppercase letter"),lowercase:e=>r=>/(?=.*[a-z])/.test(r)||(e??"Must contain a lowercase letter"),special:e=>r=>/(?=.*[!@#$%^&*])/.test(r)||(e??"Must contain a special character")},X={title:"Foundation/Shared/Input fields/TextField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:"Hello there",value3:null,value4:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSTextField:u},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTextField v-model:value="args.value1" label="Text - dark color" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>`})},i={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:D}},render:(e,{argTypes:r})=>({components:{VForm:j,FSTextField:u,FSCol:w},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <v-form v-model="valid" v-lazy>
        <FSCol>
          <FSTextField
            label="Rules: required & min 10 characters"
            :rules="[args.rules.required(), args.rules.minLength(10)]"
            :required="true"
            v-model:value="args.value1"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: max 10 characters"
            :rules="[args.rules.maxLength(10)]"
            :required="true"
            v-model:value="args.value2"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: required & max 10 characters & min 10 characters & at least one uppercase & at least one lowercase & at least one digit"
            :rules="[args.rules.required(), args.rules.minLength(10), args.rules.maxLength(10), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
            :required="true"
            v-model:value="args.value3"
          />
        </FSCol>
      </v-form>
    </div>`})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTextField v-model:value="args.value1" label="Text - dark color" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,x,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VForm,
      FSTextField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <v-form v-model="valid" v-lazy>
        <FSCol>
          <FSTextField
            label="Rules: required & min 10 characters"
            :rules="[args.rules.required(), args.rules.minLength(10)]"
            :required="true"
            v-model:value="args.value1"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: max 10 characters"
            :rules="[args.rules.maxLength(10)]"
            :required="true"
            v-model:value="args.value2"
          />
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSTextField
            label="Rules: required & max 10 characters & min 10 characters & at least one uppercase & at least one lowercase & at least one digit"
            :rules="[args.rules.required(), args.rules.minLength(10), args.rules.maxLength(10), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
            :required="true"
            v-model:value="args.value3"
          />
        </FSCol>
      </v-form>
    </div>\`
  })
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Y=["Variations","Rules"];export{i as Rules,n as Variations,Y as __namedExportsOrder,X as default};
