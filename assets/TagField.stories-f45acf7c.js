import{m as S,n as p,q as v,u as i,I as A,K as h,L as N,v as q,x as T,y as $,t as I,k as U,f as z,P as K,B as c,J as D,z as O,C as j,F as E,Q as L}from"./vue.esm-bundler-29da8e49.js";import{C as f,u as W}from"./useColors-ad83dc40.js";import{F as C}from"./FSTextField-5c145b19.js";import{_ as V}from"./FSWrapGroup-19ab83a3.js";import{_ as k}from"./FSTag-2b1a0acf.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as B}from"./FSCol-322e7463.js";import{_ as x}from"./FSIcon-f37b61fc.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-46176227.js";import"./FSRow-99784c66.js";import"./VSpacer-353093b4.js";import"./VIcon-8d401865.js";import"./index-3038ad46.js";import"./VInput-ee7ba7bd.js";import"./locale-542d2ec8.js";import"./rounded-6c346ce6.js";import"./loader-549251e9.js";import"./VSlideGroup-c848dd0b.js";import"./display-f1019078.js";import"./group-ef24a5b8.js";import"./resizeObserver-55bed5e2.js";import"./VBtn-121c840b.js";import"./VDefaultsProvider-293b550d.js";import"./index-cd8a77ee.js";const _=S({name:"FSTagGroup",components:{FSWrapGroup:V,FSTag:k},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:f.Primary},editable:{type:Boolean,required:!1,default:!0}}});function J(e,a,d,n,r,t){return p(),v(V,T($(e.$attrs)),{default:i(()=>[(p(!0),A(N,null,h(e.$props.tags,(o,s)=>(p(),v(k,{key:s,label:o,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",o)},null,8,["label","variant","color","editable","onRemove"]))),128)),q(e.$slots,"default")]),_:3},16)}const Q=w(_,[["render",J]]);_.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Array<String>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const R=S({name:"FSTagField",components:{FSTextField:C,FSTagGroup:Q,FSCol:B},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:f.Primary},tagColor:{type:String,required:!1,default:f.Primary},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:d,editable:n}=I(e),r=U(""),t=W().getColors(f.Dark),o=z(()=>n.value?{"--fs-tag-field-cursor":"pointer","--fs-tag-field-base-text":t.base,"--fs-tag-field-dark-text":t.dark}:{"--fs-tag-field-cursor":"default","--fs-tag-field-base-text":t.light,"--fs-tag-field-dark-text":t.light});return{innerValue:r,style:o,onAdd:()=>{if(!n.value)return;const l=d.value??[];!r.value.length||l.includes(r.value)||(a("update:value",l.concat(r.value)),r.value="")},onRemove:l=>{if(!n.value)return;const g=d.value??[];!g.length||!g.includes(l)||a("update:value",g.filter(G=>G!==l))}}}});function H(e,a,d,n,r,t){const o=K("FSTagGroup");return p(),v(B,null,{default:i(()=>[c(C,E({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.innerValue,"onUpdate:value":a[0]||(a[0]=s=>e.innerValue=s),onKeydown:L(e.onAdd,["enter"])},e.$attrs),D({"append-inner":i(()=>[c(x,{class:"fs-tag-field-icon",size:"m",style:O(e.style),onClick:e.onAdd},{default:i(()=>[j(" mdi-tag-outline ")]),_:1},8,["style","onClick"])]),_:2},[h(e.$slots,(s,m)=>({name:m,fn:i(l=>[q(e.$slots,m,T($(l)))])}))]),1040,["label","description","type","color","required","editable","value","onKeydown"]),c(o,{tags:e.$props.value,variant:e.$props.variant,color:e.$props.tagColor,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const P=w(R,[["render",H]]);R.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const qe={title:"Foundation/Shared/Input fields/TagField",component:P,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:["Standard","Tag","Variant"],value2:["Full","Tag","Variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:a})=>({components:{FSTagField:P},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTagField v-model:value="args.value1" variant="standard" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value2" label="Tag - full - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value3" label="Required tag - full - warning color" color="warning" tagColor="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value4" label="Uneditable" color="error" description="Uneditable description" :editable="false" />
    </div>`})};var y,b,F;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["Standard", "Tag", "Variant"],
      value2: ["Full", "Tag", "Variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTagField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTagField v-model:value="args.value1" variant="standard" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value2" label="Tag - full - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value3" label="Required tag - full - warning color" color="warning" tagColor="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value4" label="Uneditable" color="error" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(F=(b=u.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const Te=["Variations"];export{u as Variations,Te as __namedExportsOrder,qe as default};
