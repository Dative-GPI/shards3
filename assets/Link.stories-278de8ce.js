import{g as y,j as s,J as k,K as v,L as S,M as h,x as L,R as b,N as x,O as q}from"./vue.esm-bundler-0a1af505.js";import{u as C}from"./vue-router-f60daad6.js";import{C as F,u as _}from"./useColors-b72abd73.js";import{u as w}from"./useSlots-de2ef136.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";const p=y({name:"FSLink",props:{label:{type:[String,null,void 0],required:!1,default:null},to:{type:[String,Object],required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:F.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:a}=_(),{slots:o}=w(),i=C(),n=s(()=>a(e.color)),u=s(()=>{const t=["fs-link",e.font];return o.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),l=s(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark}}}),g=s(()=>typeof e.to=="string"?e.to:i.resolve(e.to).href);return{classes:u,style:l,href:g}}});function R(e,a,o,i,n,u){const l=k("router-link");return v(),S(l,L({class:e.classes,style:e.style,to:e.href},e.$attrs),{default:h(()=>[b(e.$slots,"default",{},()=>[x(q(e.$props.label),1)])]),_:3},16,["class","style","to"])}const m=V(p,[["render",R]]);p.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string|null|undefined"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const E={title:"Foundation/Shared/Link",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:m},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var f,d,c;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const I=["Variations"];export{r as Variations,I as __namedExportsOrder,E as default};
