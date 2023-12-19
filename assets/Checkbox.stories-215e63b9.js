import{m as w,t as N,f as c,n as i,q as u,v as l,x as v,K as d,z as p,A as f,y as m,B as S}from"./vue.esm-bundler-d10a8528.js";import{C as k,u as x}from"./VIcon-57787e8c.js";import{_ as y}from"./FSIcon-27c19cbf.js";import{F as t}from"./FSSpan-abccc23b.js";import{_ as T}from"./FSRow-c01fca12.js";import{_}from"./FSCol-b1484c92.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const V=w({name:"FSCheckbox",components:{FSIcon:y,FSSpan:t,FSRow:T,FSCol:_},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:k.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:s}){const{value:o,color:b,editable:a}=N(e),h=x().getVariants(b.value),r=x().getVariants(k.Dark),$=c(()=>({"--fs-checkbox-cursor":a.value?"pointer":"default","--fs-checkbox-base-color":a.value?o.value?h.base:r.base:r.light,"--fs-checkbox-base-text":a.value?r.base:r.light})),B=c(()=>o.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),D=c(()=>o.value?"text-button":"text-body");return{style:$,icon:B,font:D,onToggle:()=>{a.value&&s("update:value",!o.value)}}}});function I(e,s,o,b,a,h){return i(),u(_,{width:"hug"},{default:l(()=>[v(T,{width:"hug",align:"center-left"},{default:l(()=>[v(y,{class:"fs-checkbox",size:"checkbox",style:d(e.style),onClick:e.onToggle},{default:l(()=>[p(f(e.icon),1)]),_:1},8,["style","onClick"]),m(e.$slots,"default",{},()=>[e.$props.label?(i(),u(t,{key:0,class:"fs-checkbox-label",style:d(e.style),font:e.font,onClick:e.onToggle},{default:l(()=>[p(f(e.$props.label),1)]),_:1},8,["style","font","onClick"])):S("",!0)])]),_:3}),m(e.$slots,"description",{},()=>[e.$props.description?(i(),u(t,{key:0,class:"fs-checkbox-description",font:"text-underline",style:d(e.style)},{default:l(()=>[p(f(e.$props.description),1)]),_:1},8,["style"])):S("",!0)])]),_:3})}const q=z(V,[["render",I]]);V.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const L={title:"Foundation/Shared/Toggles/Checkbox",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:s})=>({components:{FSCheckbox:q,FSSpan:t},props:Object.keys(s),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSCheckbox v-model:value="args.value1" />
      <FSCheckbox v-model:value="args.value2" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Second set of options (error color) </FSSpan>
      <FSCheckbox v-model:value="args.value4" color="error" />
      <FSCheckbox v-model:value="args.value5" color="error" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSCheckbox :value="false" :editable="false" />
      <FSCheckbox :value="true"  :editable="false" label="Second checkbox (disabled)" />
      <FSCheckbox :value="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
    </div>`})};var g,F,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false,
      value6: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCheckbox,
      FSSpan
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSCheckbox v-model:value="args.value1" />
      <FSCheckbox v-model:value="args.value2" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Second set of options (error color) </FSSpan>
      <FSCheckbox v-model:value="args.value4" color="error" />
      <FSCheckbox v-model:value="args.value5" color="error" label="Second checkbox" />
      <FSCheckbox v-model:value="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSCheckbox :value="false" :editable="false" />
      <FSCheckbox :value="true"  :editable="false" label="Second checkbox (disabled)" />
      <FSCheckbox :value="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
    </div>\`
  })
}`,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const M=["Variations"];export{n as Variations,M as __namedExportsOrder,L as default};
