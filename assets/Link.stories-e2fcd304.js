import{j as h,e as r,I as S,J as u,Q as L,R as p,M as b,K as q,L as C,B as F,N as V,U as f,V as d,W as $,X as w}from"./vue.esm-bundler-857e5af7.js";import{C as x,u as N}from"./useColors-d77b9fa0.js";import{u as R}from"./useSlots-8bee1a74.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";const y=h({name:"FSLink",props:{label:{type:String,required:!1,default:null},to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:x.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:n}=N(),{slots:l}=R(),t=r(()=>n(e.color)),o=r(()=>{const a=["fs-link",e.font];return l.default||a.push("fs-span-pre-wrap"),e.lineClamp>1?a.push("fs-span-line-clamp"):e.ellipsis&&a.push("fs-span-ellipsis"),a}),i=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":t.value.dark}}});return{classes:o,style:i}}}),_=["href"];function B(e,n,l,t,o,i){const a=S("router-link");return e.$props.href?(u(),L("a",{key:0,href:e.$props.href,style:b(e.style)},[p(e.$slots,"default",{},()=>[f(d(e.$props.label),1)])],12,_)):e.$props.to?(u(),q(a,F({key:1,to:e.$props.to,class:e.classes,style:e.style},e.$attrs),{default:C(v=>[p(e.$slots,"default",$(w(v)),()=>[f(d(e.$props.label),1)])]),_:3},16,["to","class","style"])):V("",!0)}const k=U(y,[["render",B]]);y.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const z={title:"Foundation/Shared/Link",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{}},render:(e,{argTypes:n})=>({components:{FSLink:k},props:Object.keys(n),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var c,m,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const G=["Variations"];export{s as Variations,G as __namedExportsOrder,z as default};
