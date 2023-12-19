import{m as S,n as p,q as v,v as i,F as A,H as h,L as N,y as T,I as q,J as $,t as I,k as U,f as z,P as K,x as c,G as x,K as D,z as O,C as j,Q as E}from"./vue.esm-bundler-d10a8528.js";import{C as g,u as L}from"./VIcon-57787e8c.js";import{F as V}from"./FSTextField-cf637ab1.js";import{_ as k}from"./FSWrapGroup-6930734e.js";import{_ as w}from"./FSTag-caa1569b.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{_}from"./FSCol-b1484c92.js";import{_ as W}from"./FSIcon-27c19cbf.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-abccc23b.js";import"./index-a10acb8c.js";import"./VInput-45446a90.js";import"./locale-5c0ffb6b.js";import"./rounded-6f26bd38.js";import"./loader-d94ba622.js";import"./easing-9998643d.js";import"./FSRow-c01fca12.js";import"./VSlideGroup-80a59d4a.js";import"./display-f4c4ad19.js";import"./group-6a276766.js";import"./resizeObserver-6e691bac.js";import"./VBtn-3a7ed80e.js";import"./VDefaultsProvider-1a074de6.js";import"./index-915a05f1.js";const B=S({name:"FSTagGroup",components:{FSWrapGroup:k,FSTag:w},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:g.Primary},editable:{type:Boolean,required:!1,default:!0}}});function H(e,a,d,t,l,o){return p(),v(k,q($(e.$attrs)),{default:i(()=>[(p(!0),A(N,null,h(e.$props.tags,(n,s)=>(p(),v(w,{key:s,label:n,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:()=>e.$emit("remove",n)},null,8,["label","variant","color","editable","onRemove"]))),128)),T(e.$slots,"default")]),_:3},16)}const J=C(B,[["render",H]]);B.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Array<String>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};const R=S({name:"FSTagField",components:{FSTextField:V,FSTagGroup:J,FSCol:_},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:g.Primary},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:d,editable:t}=I(e),l=U(""),o=L().getVariants(g.Dark),n=z(()=>({"--fs-tag-field-cursor":t.value?"pointer":"default","--fs-tag-field-base-text":t.value?o.base:o.light,"--fs-tag-field-dark-text":t.value?o.dark:o.light}));return{innerValue:l,style:n,onAdd:()=>{if(!t.value)return;const r=d.value??[];console.log(r),!(!l.value.length||r.includes(l.value))&&(a("update:value",r.concat(l.value)),l.value="")},onRemove:r=>{if(!t.value)return;const f=d.value??[];!f.length||!f.includes(r)||a("update:value",f.filter(P=>P!==r))}}}});function Q(e,a,d,t,l,o){const n=K("FSTagGroup");return p(),v(_,null,{default:i(()=>[c(V,j({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.innerValue,"onUpdate:value":a[0]||(a[0]=s=>e.innerValue=s),onKeydown:E(e.onAdd,["enter"])},e.$attrs),x({"append-inner":i(()=>[c(W,{class:"fs-tag-field-icon",size:"m",style:D(e.style),onClick:e.onAdd},{default:i(()=>[O(" mdi-tag-outline ")]),_:1},8,["style","onClick"])]),_:2},[h(e.$slots,(s,m)=>({name:m,fn:i(r=>[T(e.$slots,m,q($(r)))])}))]),1040,["label","description","type","color","required","editable","value","onKeydown"]),c(n,{tags:e.$props.value,variant:e.$props.variant,color:e.$props.color,editable:e.$props.editable,onRemove:e.onRemove},null,8,["tags","variant","color","editable","onRemove"])]),_:3})}const G=C(R,[["render",Q]]);R.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagField.vue"]};const he={title:"Foundation/Shared/Input fields/TagField",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:["Standard","Tag","Variant"],value2:["Full","Tag","Variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(e,{argTypes:a})=>({components:{FSTagField:G},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSTagField v-model:value="args.value1" variant="standard" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
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
      <FSTagField v-model:value="args.value2" label="Text - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value3" label="Required text - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField v-model:value="args.value4" label="Uneditable" color="error" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(F=(b=u.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const Te=["Variations"];export{u as Variations,Te as __namedExportsOrder,he as default};
