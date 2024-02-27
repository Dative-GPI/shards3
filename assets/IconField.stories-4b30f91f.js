import{D as W,j as X,d as $,E as Y,G as v,H as y,I as p,y as S,U as Z,M as ee,K as k,N as C,O as R,J as V,z as re}from"./vue.esm-bundler-47273a21.js";import{I as j}from"./LexicalSelection.prod-b0bd0f79.js";import{C as h,u as A}from"./useColors-446eeb5a.js";import{I as oe}from"./rules-f5c4efdb.js";import{F as G}from"./FSTextField-045eeec4.js";import{F as le}from"./FSToggleSet-b05ccc16.js";import{_ as J}from"./FSIcon-be851c75.js";import{_ as w}from"./FSCol-00f12d9b.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as K}from"./FSRow-89f60060.js";import{_ as T}from"./FSSpan-6a5d69b6.js";import{V as ae}from"./VSpacer-6746e4d1.js";import{V as ne}from"./VForm-4333cb27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./color-38d974b0.js";import"./transition-6c7cc79f.js";import"./VInput-fdcb6e75.js";import"./locale-5c4d4b03.js";import"./VIcon-f933c800.js";import"./density-52b016fa.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./forwardRefs-e658ad70.js";import"./index-1e6cce54.js";import"./FSSlideGroup-acf3992e.js";import"./VSlideGroup-f4a13555.js";import"./display-e8621586.js";import"./group-0f5e58b6.js";import"./resizeObserver-87306138.js";import"./FSWrapGroup-96c1a754.js";import"./FSButton-95139452.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./elevation-522a2612.js";import"./dimensions-699818e3.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";const b=(e,r,i,d,a)=>e<r||i<r?e>i?i+1:e+1:d===a?r:r+1,E=(e,r)=>{if(e===r)return 0;if(e.length>r.length){let Q=e;e=r,r=Q}let i=e.length,d=r.length;for(;i>0&&e.charCodeAt(i-1)===r.charCodeAt(d-1);)i--,d--;let a=0;for(;a<i&&e.charCodeAt(a)===r.charCodeAt(a);)a++;if(i-=a,d-=a,i===0||d<3)return d;let u=0,s=0,o,l,t,n,c,f,g,F,D,H,O,m=[];for(o=0;o<i;o++)m.push(o+1),m.push(e.charCodeAt(a+o));let U=m.length-1;for(;s<d-3;)for(F=r.charCodeAt(a+(l=s)),D=r.charCodeAt(a+(t=s+1)),H=r.charCodeAt(a+(n=s+2)),O=r.charCodeAt(a+(c=s+3)),u=s+=4,o=0;o<U;o+=2)f=m[o],g=m[o+1],l=b(f,l,t,F,g),t=b(l,t,n,D,g),n=b(t,n,c,H,g),u=b(n,c,u,O,g),m[o]=u,c=n,n=t,t=l,l=f;for(;s<d;)for(F=r.charCodeAt(a+(l=s)),u=++s,o=0;o<U;o+=2)f=m[o],m[o]=u=b(f,l,u,F,m[o+1]),l=f;return u},ie=(e,r,i)=>E(e,i)-E(r,i),_=W({name:"FSIconField",components:{FSTextField:G,FSToggleSet:le,FSIcon:J,FSCol:w},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},preSelection:{type:Array,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},activeVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},buttonColor:{type:String,required:!1,default:h.Light},activeColor:{type:String,required:!1,default:h.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const r=A().getColors(h.Error),i=A().getColors(h.Light),d=A().getColors(h.Dark),a=X(null),u=$(()=>e.editable?{"--fs-icon-field-color":d.base,"--fs-icon-field-error-color":r.base}:{"--fs-icon-field-color":i.dark}),s=$(()=>{const l=[];for(const t of e.rules){const n=t(e.modelValue);typeof n=="string"&&l.push(n)}return l}),o=$(()=>{const l=[];if(!a.value||a.value.length<3)e.preSelection&&e.preSelection.length?l.push(...e.preSelection.map(t=>({id:t,prependIcon:t}))):l.push(...j.slice(0,32).map(t=>({id:t.name,prependIcon:t.name})));else{const t=j.filter(n=>n.fullText.toLowerCase().includes(a.value.toLowerCase())).sort((n,c)=>ie(n.name,c.name,a.value));l.push(...t.slice(0,Math.min(32,t.length)).map(n=>({id:n.name,prependIcon:n.name})))}if(e.modelValue){const t=l.find(n=>n.id===e.modelValue);t?(l.splice(l.indexOf(t),1),l.unshift(t)):l.unshift({id:e.modelValue,prependIcon:e.modelValue})}return l});return{innerValue:a,messages:s,style:u,icons:o}}});function se(e,r,i,d,a,u){const s=Y("FSToggleSet");return v(),y(w,null,{default:p(()=>[S(G,re({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,error:e.messages.length>0,modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerValue=o)},e.$attrs),Z({"append-inner":p(()=>[e.$props.modelValue?(v(),y(J,{key:0,size:"l"},{default:p(()=>[C(R(e.$props.modelValue),1)]),_:1})):V("",!0)]),_:2},[e.$props.hideHeader?void 0:{name:"label",fn:p(()=>[ee(e.$slots,"label",{},()=>[S(K,{wrap:!1},{default:p(()=>[e.$props.label?(v(),y(T,{key:0,class:"fs-icon-field-label",font:"text-overline",style:k(e.style)},{default:p(()=>[C(R(e.$props.label),1)]),_:1},8,["style"])):V("",!0),e.$props.label&&e.$props.required?(v(),y(T,{key:1,class:"fs-icon-field-label",style:k([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:p(()=>[C(" * ")]),_:1},8,["style"])):V("",!0),S(ae,{style:{"min-width":"40px"}}),e.messages.length>0?(v(),y(T,{key:2,class:"fs-icon-field-messages",font:"text-overline",style:k(e.style)},{default:p(()=>[C(R(e.messages.join(", ")),1)]),_:1},8,["style"])):V("",!0)]),_:1})])]),key:"0"}]),1040,["label","description","hideHeader","required","editable","error","modelValue"]),S(s,{class:"fs-icon-field-set",variant:"slide",values:e.icons,required:e.$props.required,editable:e.$props.editable,buttonColor:e.$props.buttonColor,activeColor:e.$props.activeColor,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=o=>e.$emit("update:modelValue",o))},null,8,["values","required","editable","buttonColor","activeColor","modelValue"])]),_:3})}const B=te(_,[["render",se]]);_.__docgenInfo={displayName:"FSIconField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"preSelection",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"activeVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIconField.vue"]};const rr={title:"Foundation/Shared/Input fields/IconField",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},q={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSIconField:B,FSCol:w},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},I={args:{args:{valid:!1,value1:null,rules:oe}},render:(e,{argTypes:r})=>({components:{VForm:ne,FSIconField:B,FSCol:w,FSRow:K},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </v-form>`})};var L,N,z;q.parameters={...q.parameters,docs:{...(L=q.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "mdi-account",
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSIconField,
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
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(z=(N=q.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var M,P,x;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      rules: IconRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VForm,
      FSIconField,
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
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </v-form>\`
  })
}`,...(x=(P=I.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const or=["Variations","Rules"];export{I as Rules,q as Variations,or as __namedExportsOrder,rr as default};
