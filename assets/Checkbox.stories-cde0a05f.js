import{m as P,t as N,f as s,n,q as c,u as l,B as k,z as i,C as d,D as u,v as g,E as y}from"./vue.esm-bundler-29da8e49.js";import{C as p,u as f}from"./useColors-ad83dc40.js";import{_ as T}from"./FSIcon-f37b61fc.js";import{_ as b}from"./FSSpan-46176227.js";import{_}from"./FSRow-99784c66.js";import{_ as q}from"./FSCol-322e7463.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{F as z}from"./FSText-075b9c4d.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./VIcon-8d401865.js";const w=P({name:"FSCheckbox",components:{FSIcon:T,FSSpan:b,FSRow:_,FSCol:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:o,color:h,editable:t}=N(e),m=f().getColors(h.value),v=f().getColors(p.Light),x=f().getColors(p.Dark),$=s(()=>t.value?{"--fs-checkbox-cursor":"pointer","--fs-checkbox-checkbox-color":o.value?m.base:x.base,"--fs-checkbox-color":x.base}:{"--fs-checkbox-cursor":"default","--fs-checkbox-checkbox-color":v.dark,"--fs-checkbox-color":v.dark}),D=s(()=>o.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),B=s(()=>o.value?"text-button":"text-body");return{style:$,icon:D,font:B,onToggle:()=>{t.value&&a("update:value",!o.value)}}}});function I(e,a,o,h,t,m){return n(),c(q,{width:"hug"},{default:l(()=>[k(_,{width:"hug",align:"center-left"},{default:l(()=>[k(T,{class:"fs-checkbox",size:"checkbox",style:i(e.style),onClick:e.onToggle},{default:l(()=>[d(u(e.icon),1)]),_:1},8,["style","onClick"]),g(e.$slots,"default",{},()=>[e.$props.label?(n(),c(b,{key:0,class:"fs-checkbox-label",style:i(e.style),font:e.font,onClick:e.onToggle},{default:l(()=>[d(u(e.$props.label),1)]),_:1},8,["style","font","onClick"])):y("",!0)])]),_:3}),g(e.$slots,"description",{},()=>[e.$props.description?(n(),c(b,{key:0,class:"fs-checkbox-description",font:"text-underline",style:i(e.style)},{default:l(()=>[d(u(e.$props.description),1)]),_:1},8,["style"])):y("",!0)])]),_:3})}const V=E(w,[["render",I]]);w.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const W={title:"Foundation/Shared/Toggles/Checkbox",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:a})=>({components:{FSCheckbox:V,FSText:z},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model:value="args.value1" />
        <FSCheckbox v-model:value="args.value2" label="Second checkbox" />
        <FSCheckbox v-model:value="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model:value="args.value4" color="error" />
        <FSCheckbox v-model:value="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model:value="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :value="false" :editable="false" />
        <FSCheckbox :value="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :value="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>`})};var S,F,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model:value="args.value1" />
        <FSCheckbox v-model:value="args.value2" label="Second checkbox" />
        <FSCheckbox v-model:value="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model:value="args.value4" color="error" />
        <FSCheckbox v-model:value="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model:value="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :value="false" :editable="false" />
        <FSCheckbox :value="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :value="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>\`
  })
}`,...(C=(F=r.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const X=["Variations"];export{r as Variations,X as __namedExportsOrder,W as default};
