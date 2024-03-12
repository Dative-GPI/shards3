import{g as y,j as r,I as k,O as h,P as v,x as S}from"./vue.esm-bundler-85c2ade9.js";import{u as L}from"./vue-router-d81a5c9d.js";import{C as x,u as b}from"./useColors-4bd4e66b.js";import{u as F}from"./useSlots-58887162.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-0475544b.js";const d=y({name:"FSLink",props:{to:{type:[String,Object],required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:x.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:n}=b(),{slots:o}=F(),l=L(),a=r(()=>n(e.color)),i=r(()=>{const t=["fs-link",e.font];return o.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),p=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":a.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":a.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":a.value.dark}}}),g=r(()=>typeof e.to=="string"?e.to:l.resolve(e.to).href);return{classes:i,style:p,href:g}}}),C=["href"];function _(e,n,o,l,a,i){return k(),h("a",S({class:e.classes,style:e.style,href:e.href},e.$attrs),[v(e.$slots,"default")],16,C)}const m=q(d,[["render",_]]);d.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"to",type:{name:"string | RouteLocation"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const E={title:"Foundation/Shared/Link",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{}},render:(e,{argTypes:n})=>({components:{FSLink:m},props:Object.keys(n),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var u,f,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    \`
  })
}`,...(c=(f=s.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const I=["Variations"];export{s as Variations,I as __namedExportsOrder,E as default};
