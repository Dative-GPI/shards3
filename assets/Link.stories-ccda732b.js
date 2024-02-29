import{E as c,e as r,H as m,Q as g,L as y,A as k}from"./vue.esm-bundler-a27e881e.js";import{C as h,u as v}from"./useColors-64c3c523.js";import{u as S}from"./useSlots-f8c8bb5a.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";const f=c({name:"FSLink",props:{to:{type:String,required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:h.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{slots:n}=S(),t=r(()=>v().getColors(e.color)),l=r(()=>{const a=["fs-link",e.font];return n.default||a.push("fs-span-pre-wrap"),e.lineClamp>1?a.push("fs-span-line-clamp"):e.ellipsis&&a.push("fs-span-ellipsis"),a}),o=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.dark}}});return{classes:l,style:o}}}),b=["href"];function C(e,n,t,l,o,a){return m(),g("a",k({href:e.$props.to,class:e.classes,style:e.style},e.$attrs),[y(e.$slots,"default")],16,b)}const d=x(f,[["render",C]]);f.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const B={title:"Foundation/Shared/Link",component:d,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{}},render:(e,{argTypes:n})=>({components:{FSLink:d},props:Object.keys(n),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink to="https://google.com">
          Hello there
        </FSLink>
      </div>
    `})};var i,u,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Variations"];export{s as Variations,N as __namedExportsOrder,B as default};
