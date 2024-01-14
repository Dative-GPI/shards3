import{n as P,t as N,f as s,q as n,u as c,v as l,B as v,A as d,D as i,E as u,x as g,F as y}from"./vue.esm-bundler-722d5586.js";import{C as p,u as f}from"./useTimeZone-e2d91037.js";import{_ as T}from"./FSIcon-420cc903.js";import{_ as m}from"./FSSpan-25dfede3.js";import{_ as V}from"./FSRow-adbe3642.js";import{_}from"./FSCol-73c0912e.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{F as I}from"./FSText-f2895473.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./VIcon-3294e246.js";const q=P({name:"FSCheckbox",components:{FSIcon:T,FSSpan:m,FSRow:V,FSCol:_},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{modelValue:o,color:b,editable:t}=N(e),h=f().getColors(b.value),x=f().getColors(p.Light),k=f().getColors(p.Dark),$=s(()=>t.value?{"--fs-checkbox-cursor":"pointer","--fs-checkbox-checkbox-color":o.value?h.base:k.base,"--fs-checkbox-color":k.base}:{"--fs-checkbox-cursor":"default","--fs-checkbox-checkbox-color":x.dark,"--fs-checkbox-color":x.dark}),D=s(()=>o.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),B=s(()=>o.value?"text-button":"text-body");return{style:$,icon:D,font:B,onToggle:()=>{t.value&&a("update:modelValue",!o.value)}}}});function O(e,a,o,b,t,h){return n(),c(_,{width:"hug"},{default:l(()=>[v(V,{width:"hug",align:"center-left"},{default:l(()=>[v(T,{class:"fs-checkbox",style:d(e.style),onClick:e.onToggle},{default:l(()=>[i(u(e.icon),1)]),_:1},8,["style","onClick"]),g(e.$slots,"default",{},()=>[e.$props.label?(n(),c(m,{key:0,class:"fs-checkbox-label",style:d(e.style),font:e.font,onClick:e.onToggle},{default:l(()=>[i(u(e.$props.label),1)]),_:1},8,["style","font","onClick"])):y("",!0)])]),_:3}),g(e.$slots,"description",{},()=>[e.$props.description?(n(),c(m,{key:0,class:"fs-checkbox-description",font:"text-underline",style:d(e.style)},{default:l(()=>[i(u(e.$props.description),1)]),_:1},8,["style"])):y("",!0)])]),_:3})}const w=E(q,[["render",O]]);q.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const W={title:"Foundation/Shared/Toggles/Checkbox",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:a})=>({components:{FSCheckbox:w,FSText:I},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :editable="false" />
        <FSCheckbox :modelValue="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
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
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :editable="false" />
        <FSCheckbox :modelValue="true"  :editable="false" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :editable="false" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>\`
  })
}`,...(C=(F=r.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const X=["Variations"];export{r as Variations,X as __namedExportsOrder,W as default};
