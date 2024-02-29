import{E as T,e as i,d as _,H as s,Q as U,I as d,J as r,A as I,K as p,Y as q,B as j,z as w,L as y,M as c,N as f,O as F,P as S,_ as A}from"./vue.esm-bundler-a27e881e.js";import{_ as z}from"./FSSpan-23926a6a.js";import{_ as b}from"./FSIcon-98d9a930.js";import{_ as v}from"./FSRow-e0b07355.js";import{C as B,u as k}from"./useColors-64c3c523.js";import{u as H}from"./useSlots-f8c8bb5a.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{V as K}from"./VBtn-2c9b0d3f.js";import{_ as M}from"./FSCol-5941d279.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./group-9102b821.js";import"./locale-d8beded1.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";const D=T({name:"FSButtonFile",components:{FSSpan:z,FSIcon:b,FSRow:v},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:B.Dark},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:n}){const{slots:h}=H(),a=i(()=>k().getContrasts(e.color)),o=i(()=>k().getColors(e.color)),u=k().getColors(B.Light),t=_(null),g=i(()=>!h.default&&!e.label),O=i(()=>{if(!e.editable)switch(e.variant){case"standard":case"full":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":u.base,"--fs-button-border-color":u.dark,"--fs-button-color":u.dark};case"icon":return{"--fs-button-color":u.dark}}switch(e.variant){case"standard":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":o.value.light,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.base,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"full":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":o.value.base,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.light,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"icon":return{"--fs-button-color":a.value.base,"--fs-button-hover-color":a.value.dark}}}),P=i(()=>{const l=[];switch(e.editable||l.push("fs-button--disabled"),e.variant){case"icon":l.push("fs-button-icon");break;default:l.push("fs-button");break}return l}),C=()=>{t.value.form&&t.value.form.reset()};return{colors:o,style:O,classes:P,input:t,onClick:()=>{t.value.click()},onInput:()=>{const l=t.value.files&&t.value.files[0];if(l)if(!e.readFile)n("update:modelValue",l),C();else{const V=new FileReader;V.addEventListener("load",$=>{n("update:modelValue",$.target&&$.target.result),C()}),V.readAsDataURL(l)}}}}}),Q=["accept"];function Y(e,n,h,a,o,u){return s(),U("div",null,[["icon"].includes(e.$props.variant)?e.$props.icon?(s(),d(v,I({key:1,width:"hug",style:e.style,class:e.classes},e.$attrs),{default:r(()=>[w(b,{size:"l"},{default:r(()=>[c(f(e.$props.icon),1)]),_:1})]),_:1},16,["style","class"])):p("",!0):(s(),d(K,I({key:0,ripple:!1,style:e.style,class:e.classes,disabled:!e.$props.editable,onClick:e.onClick},e.$attrs),{default:r(()=>[w(v,{align:"center-center",wrap:!1},{default:r(()=>[y(e.$slots,"prepend",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(s(),d(b,{key:0,size:"l"},{default:r(()=>[c(f(e.$props.prependIcon),1)]),_:1})):p("",!0)]),y(e.$slots,"default",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(s(),d(z,{key:0,font:"text-body"},{default:r(()=>[c(f(e.$props.label),1)]),_:1})):p("",!0)]),y(e.$slots,"append",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(s(),d(b,{key:0,size:"l"},{default:r(()=>[c(f(e.$props.appendIcon),1)]),_:1})):p("",!0)])]),_:3})]),_:3},16,["style","class","disabled","onClick"])),q("form",null,[j(q("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:n[0]||(n[0]=(...t)=>e.onInput&&e.onInput(...t))},null,40,Q),[[A,!1]])])])}const L=J(D,[["render",Y]]);D.__docgenInfo={displayName:"FSButtonFile",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFileButton.vue"]};const $e={title:"Foundation/Shared/FileButton",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value:null}},render:(e,{argTypes:n})=>({components:{FSFileButton:L,FSCol:M,FSRow:v},props:Object.keys(n),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSFileButton
          color="primary"
          prependIcon="mdi-upload-outline"
          :readFile="false"
          @update:modelValue="value => args.value = value"
        />
        <FSRow>
          <div class="text-body">
            Uploaded file: {{ args.value ? args.value.name : 'None' }}
          </div>
        </FSRow>
      </FSCol>
    </div>`})};var R,N,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    args: {
      value: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFileButton,
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
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSFileButton
          color="primary"
          prependIcon="mdi-upload-outline"
          :readFile="false"
          @update:modelValue="value => args.value = value"
        />
        <FSRow>
          <div class="text-body">
            Uploaded file: {{ args.value ? args.value.name : 'None' }}
          </div>
        </FSRow>
      </FSCol>
    </div>\`
  })
}`,...(E=(N=m.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const Ie=["Variations"];export{m as Variations,Ie as __namedExportsOrder,$e as default};
