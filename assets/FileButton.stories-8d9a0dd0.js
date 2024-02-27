import{D as j,d as i,j as L,G as s,R as U,H as d,I as n,y as I,M as y,N as p,O as c,J as f,P as F,Q as S,z as q,Y as w,A as _,Z as A}from"./vue.esm-bundler-47273a21.js";import{C as B,u as k}from"./useColors-446eeb5a.js";import{_ as z,u as G}from"./FSSpan-6a5d69b6.js";import"./rules-f5c4efdb.js";import{_ as b}from"./FSIcon-be851c75.js";import{_ as v}from"./FSRow-89f60060.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{V as J}from"./VBtn-1e7a5476.js";import{_ as M}from"./FSCol-00f12d9b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7e191b90.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./VIcon-f933c800.js";import"./color-38d974b0.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./variant-8064ce1f.js";import"./density-52b016fa.js";import"./elevation-522a2612.js";import"./rounded-8d3cef66.js";import"./group-0f5e58b6.js";import"./locale-5c4d4b03.js";import"./dimensions-699818e3.js";import"./loader-c1abc016.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";const E=j({name:"FSButtonFile",components:{FSSpan:z,FSIcon:b,FSRow:v},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:B.Dark},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{slots:h}=G(),a=i(()=>k().getContrasts(e.color)),o=i(()=>k().getColors(e.color)),u=k().getColors(B.Light),t=L(null),g=i(()=>!h.default&&!e.label),P=i(()=>{if(!e.editable)switch(e.variant){case"standard":case"full":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":u.base,"--fs-button-border-color":u.dark,"--fs-button-color":u.dark};case"icon":return{"--fs-button-color":u.dark}}switch(e.variant){case"standard":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":o.value.light,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.base,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"full":return{"--fs-button-padding":g.value?"0":"0 16px","--fs-button-background-color":o.value.base,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.light,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"icon":return{"--fs-button-color":a.value.base,"--fs-button-hover-color":a.value.dark}}}),T=i(()=>{const l=[];switch(e.editable||l.push("fs-button--disabled"),e.variant){case"icon":l.push("fs-button-icon");break;default:l.push("fs-button");break}return l}),C=()=>{t.value.form&&t.value.form.reset()};return{colors:o,style:P,classes:T,input:t,onClick:()=>{t.value.click()},onInput:()=>{const l=t.value.files&&t.value.files[0];if(l)if(!e.readFile)r("update:modelValue",l),C();else{const V=new FileReader;V.addEventListener("load",$=>{r("update:modelValue",$.target&&$.target.result),C()}),V.readAsDataURL(l)}}}}}),Q=["accept"];function Y(e,r,h,a,o,u){return s(),U("div",null,[["icon"].includes(e.$props.variant)?e.$props.icon?(s(),d(v,q({key:1,width:"hug",style:e.style,class:e.classes},e.$attrs),{default:n(()=>[I(b,{size:"l"},{default:n(()=>[p(c(e.$props.icon),1)]),_:1})]),_:1},16,["style","class"])):f("",!0):(s(),d(J,q({key:0,ripple:!1,style:e.style,class:e.classes,disabled:!e.$props.editable,onClick:e.onClick},e.$attrs),{default:n(()=>[I(v,{align:"center-center",wrap:!1},{default:n(()=>[y(e.$slots,"prepend",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(s(),d(b,{key:0,size:"l"},{default:n(()=>[p(c(e.$props.prependIcon),1)]),_:1})):f("",!0)]),y(e.$slots,"default",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(s(),d(z,{key:0,font:"text-body"},{default:n(()=>[p(c(e.$props.label),1)]),_:1})):f("",!0)]),y(e.$slots,"append",F(S({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(s(),d(b,{key:0,size:"l"},{default:n(()=>[p(c(e.$props.appendIcon),1)]),_:1})):f("",!0)])]),_:3})]),_:3},16,["style","class","disabled","onClick"])),w("form",null,[_(w("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:r[0]||(r[0]=(...t)=>e.onInput&&e.onInput(...t))},null,40,Q),[[A,!1]])])])}const O=H(E,[["render",Y]]);E.__docgenInfo={displayName:"FSButtonFile",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFileButton.vue"]};const qe={title:"Foundation/Shared/FileButton",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSFileButton:O,FSCol:M,FSRow:v},props:Object.keys(r),setup(){return{...e}},template:`
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
    </div>`})};var R,N,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const we=["Variations"];export{m as Variations,we as __namedExportsOrder,qe as default};
