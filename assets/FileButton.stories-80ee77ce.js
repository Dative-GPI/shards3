import{G as U,e as u,d as _,H as s,I as j,L as i,M as n,A as q,N as p,Z as w,B as A,z as B,J as F,O as c,P as f,Q as S,R as k,$ as G}from"./vue.esm-bundler-d8049c85.js";import{_ as E}from"./FSSpan-9f00eaf4.js";import{_ as b}from"./FSIcon-4847f868.js";import{_ as v}from"./FSRow-b5482a77.js";import{C as R,u as H}from"./useColors-5c9cff43.js";import{u as J}from"./useSlots-bdda8306.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VBtn-05fbe885.js";import{_ as Z}from"./FSCol-39bd052c.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./theme-540b65c4.js";import"./useRender-29d234e5.js";import"./tag-fffb6ba6.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./variant-ec540a43.js";import"./density-de8a38cb.js";import"./elevation-ef665fc6.js";import"./rounded-0d200380.js";import"./group-9e62ecfa.js";import"./locale-0b822523.js";import"./dimensions-c0ade26a.js";import"./loader-cb170f8e.js";import"./router-e2bea4dd.js";import"./index-ea9d807b.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";const L=U({name:"FSButtonFile",components:{FSSpan:E,FSIcon:b,FSRow:v},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:R.Dark},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getColors:g,getContrasts:h}=H(),{slots:C}=J(),a=u(()=>h(e.color)),o=u(()=>g(e.color)),d=g(R.Light),r=_(null),y=u(()=>!C.default&&!e.label),P=u(()=>{if(!e.editable)switch(e.variant){case"standard":case"full":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":d.base,"--fs-button-border-color":d.dark,"--fs-button-color":d.dark};case"icon":return{"--fs-button-color":d.dark}}switch(e.variant){case"standard":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":o.value.light,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.base,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"full":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":o.value.base,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.light,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"icon":return{"--fs-button-color":a.value.base,"--fs-button-hover-color":a.value.dark}}}),T=u(()=>{const t=[];switch(e.editable||t.push("fs-button--disabled"),e.variant){case"icon":t.push("fs-button-icon");break;default:t.push("fs-button");break}return t}),$=()=>{r.value.form&&r.value.form.reset()};return{colors:o,style:P,classes:T,input:r,onClick:()=>{r.value.click()},onInput:()=>{const t=r.value.files&&r.value.files[0];if(t)if(!e.readFile)l("update:modelValue",t),$();else{const V=new FileReader;V.addEventListener("load",I=>{l("update:modelValue",I.target&&I.target.result),$()}),V.readAsDataURL(t)}}}}}),K=["accept"];function W(e,l,g,h,C,a){return s(),j("div",null,[["icon"].includes(e.$props.variant)?e.$props.icon?(s(),i(v,q({key:1,width:"hug",style:e.style,class:e.classes},e.$attrs),{default:n(()=>[B(b,{size:"l"},{default:n(()=>[c(f(e.$props.icon),1)]),_:1})]),_:1},16,["style","class"])):p("",!0):(s(),i(Q,q({key:0,ripple:!1,style:e.style,class:e.classes,disabled:!e.$props.editable,onClick:e.onClick},e.$attrs),{default:n(()=>[B(v,{align:"center-center",wrap:!1},{default:n(()=>[F(e.$slots,"prepend",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(s(),i(b,{key:0,size:"l"},{default:n(()=>[c(f(e.$props.prependIcon),1)]),_:1})):p("",!0)]),F(e.$slots,"default",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(s(),i(E,{key:0,font:"text-body"},{default:n(()=>[c(f(e.$props.label),1)]),_:1})):p("",!0)]),F(e.$slots,"append",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(s(),i(b,{key:0,size:"l"},{default:n(()=>[c(f(e.$props.appendIcon),1)]),_:1})):p("",!0)])]),_:3})]),_:3},16,["style","class","disabled","onClick"])),w("form",null,[A(w("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:l[0]||(l[0]=(...o)=>e.onInput&&e.onInput(...o))},null,40,K),[[G,!1]])])])}const O=M(L,[["render",W]]);L.__docgenInfo={displayName:"FSButtonFile",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFileButton.vue"]};const Be={title:"Foundation/Shared/FileButton",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value:null}},render:(e,{argTypes:l})=>({components:{FSFileButton:O,FSCol:Z,FSRow:v},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var N,z,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const Re=["Variations"];export{m as Variations,Re as __namedExportsOrder,Be as default};
