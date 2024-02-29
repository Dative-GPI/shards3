import{E as _,e as u,d as U,H as s,Q as j,I as i,J as n,A as q,K as p,Y as w,B as A,z as B,L as F,M as c,N as f,O as S,P as k,_ as H}from"./vue.esm-bundler-a27e881e.js";import{_ as D}from"./FSSpan-23926a6a.js";import{_ as b}from"./FSIcon-98d9a930.js";import{_ as v}from"./FSRow-e0b07355.js";import{C as R,u as J}from"./useColors-64c3c523.js";import{u as K}from"./useSlots-f8c8bb5a.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Q}from"./VBtn-2c9b0d3f.js";import{_ as Y}from"./FSCol-5941d279.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./group-9102b821.js";import"./locale-d8beded1.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";const L=_({name:"FSButtonFile",components:{FSSpan:D,FSIcon:b,FSRow:v},props:{accept:{type:String,required:!1,default:""},readFile:{type:Boolean,required:!1,default:!0},prependIcon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},appendIcon:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:R.Dark},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{getColors:g,getContrasts:h}=J(),{slots:C}=K(),a=u(()=>h(e.color)),o=u(()=>g(e.color)),d=g(R.Light),r=U(null),y=u(()=>!C.default&&!e.label),P=u(()=>{if(!e.editable)switch(e.variant){case"standard":case"full":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":d.base,"--fs-button-border-color":d.dark,"--fs-button-color":d.dark};case"icon":return{"--fs-button-color":d.dark}}switch(e.variant){case"standard":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":o.value.light,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.base,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"full":return{"--fs-button-padding":y.value?"0":"0 16px","--fs-button-background-color":o.value.base,"--fs-button-border-color":o.value.base,"--fs-button-color":a.value.light,"--fs-button-hover-background-color":o.value.base,"--fs-button-hover-border-color":o.value.base,"--fs-button-hover-color":a.value.light,"--fs-button-active-background-color":o.value.dark,"--fs-button-active-border-color":o.value.dark,"--fs-button-active-color":a.value.light};case"icon":return{"--fs-button-color":a.value.base,"--fs-button-hover-color":a.value.dark}}}),T=u(()=>{const t=[];switch(e.editable||t.push("fs-button--disabled"),e.variant){case"icon":t.push("fs-button-icon");break;default:t.push("fs-button");break}return t}),V=()=>{r.value.form&&r.value.form.reset()};return{colors:o,style:P,classes:T,input:r,onClick:()=>{r.value.click()},onInput:()=>{const t=r.value.files&&r.value.files[0];if(t)if(!e.readFile)l("update:modelValue",t),V();else{const $=new FileReader;$.addEventListener("load",I=>{l("update:modelValue",I.target&&I.target.result),V()}),$.readAsDataURL(t)}}}}}),G=["accept"];function W(e,l,g,h,C,a){return s(),j("div",null,[["icon"].includes(e.$props.variant)?e.$props.icon?(s(),i(v,q({key:1,width:"hug",style:e.style,class:e.classes},e.$attrs),{default:n(()=>[B(b,{size:"l"},{default:n(()=>[c(f(e.$props.icon),1)]),_:1})]),_:1},16,["style","class"])):p("",!0):(s(),i(Q,q({key:0,ripple:!1,style:e.style,class:e.classes,disabled:!e.$props.editable,onClick:e.onClick},e.$attrs),{default:n(()=>[B(v,{align:"center-center",wrap:!1},{default:n(()=>[F(e.$slots,"prepend",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.prependIcon?(s(),i(b,{key:0,size:"l"},{default:n(()=>[c(f(e.$props.prependIcon),1)]),_:1})):p("",!0)]),F(e.$slots,"default",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(s(),i(D,{key:0,font:"text-body"},{default:n(()=>[c(f(e.$props.label),1)]),_:1})):p("",!0)]),F(e.$slots,"append",S(k({color:e.$props.color,colors:e.colors})),()=>[e.$props.appendIcon?(s(),i(b,{key:0,size:"l"},{default:n(()=>[c(f(e.$props.appendIcon),1)]),_:1})):p("",!0)])]),_:3})]),_:3},16,["style","class","disabled","onClick"])),w("form",null,[A(w("input",{type:"file",ref:"input",accept:e.$props.accept,onInput:l[0]||(l[0]=(...o)=>e.onInput&&e.onInput(...o))},null,40,G),[[H,!1]])])])}const O=M(L,[["render",W]]);L.__docgenInfo={displayName:"FSButtonFile",exportName:"default",description:"",tags:{},props:[{name:"accept",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"readFile",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"prependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"append",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFileButton.vue"]};const qe={title:"Foundation/Shared/FileButton",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value:null}},render:(e,{argTypes:l})=>({components:{FSFileButton:O,FSCol:Y,FSRow:v},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var N,E,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const we=["Variations"];export{m as Variations,we as __namedExportsOrder,qe as default};
