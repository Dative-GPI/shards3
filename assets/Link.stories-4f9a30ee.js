import{E as m,e as r,H as g,N as y,O as k,n as h}from"./vue.esm-bundler-7e157d2d.js";import{C as v,u as S}from"./useColors-4000b712.js";import{u as x}from"./useSlots-db3342e3.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-67ffe9ae.js";const d=m({name:"FSLink",props:{to:{type:String,required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:v.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:a}=S(),{slots:l}=x(),n=r(()=>a(e.color)),o=r(()=>{const t=["fs-link",e.font];return l.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),i=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark}}});return{classes:o,style:i}}}),C=["href"];function q(e,a,l,n,o,i){return g(),y("a",h({href:e.$props.to,class:e.classes,style:e.style},e.$attrs),[k(e.$slots,"default")],16,C)}const c=b(d,[["render",q]]);d.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const B={title:"Foundation/Shared/Link",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:c},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink to="https://google.com">
          Hello there
        </FSLink>
      </div>
    `})};var u,p,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSLink
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink to="https://google.com">
          Hello there
        </FSLink>
      </div>
    \`
  })
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const O=["Variations"];export{s as Variations,O as __namedExportsOrder,B as default};
