import{g as y,j as s,J as k,K as v,L as S,M as h,x as L,R as b,N as x,O as q,S as C,U as F}from"./vue.esm-bundler-e580dd1f.js";import{u as _}from"./vue-router-092e674d.js";import{C as w,u as V}from"./useColors-b2cb658b.js";import{u as R}from"./useSlots-a039f59b.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a3bb880e.js";const m=y({name:"FSLink",props:{label:{type:[String,null,void 0],required:!1,default:null},to:{type:[String,Object],required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:w.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:a}=V(),{slots:i}=R(),u=_(),n=s(()=>a(e.color)),f=s(()=>{const t=["fs-link",e.font];return i.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),o=s(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark}}}),l=s(()=>typeof e.to=="string"?e.to:u.resolve(e.to).href);return{classes:f,style:o,href:l}}});function $(e,a,i,u,n,f){const o=k("router-link");return v(),S(o,L({class:e.classes,style:e.style,to:e.href},e.$attrs),{default:h(l=>[b(e.$slots,"default",C(F(l)),()=>[x(q(e.$props.label),1)])]),_:3},16,["class","style","to"])}const g=U(m,[["render",$]]);m.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string|null|undefined"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const I={title:"Foundation/Shared/Link",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:g},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const G=["Variations"];export{r as Variations,G as __namedExportsOrder,I as default};
