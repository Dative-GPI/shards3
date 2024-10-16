import{d as h,c as r,y as S,z as p,E as L,K as f,P as b,A as q,C,m as F,F as $,H as d,I as c,L as V,M as w}from"./vue.esm-bundler-DTB_q9xr.js";import{C as x,u as _}from"./useColors-Du1QHlOW.js";import{u as B}from"./useBreakpoints-ERBVGIQe.js";import{u as N}from"./useSlots-BnylMYIF.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";const k=h({name:"FSLink",props:{label:{type:String,required:!1,default:null},to:{type:[String,Object],required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:x.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{fontStyles:a}=B(),{getColors:l}=_(),{slots:o}=N(),s=r(()=>l(e.color)),i=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.base,...a.value};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.light,...a.value};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.dark,...a.value}}});return{classes:r(()=>{const n=["fs-link",e.font];return o.default||n.push("fs-span-pre-wrap"),e.lineClamp>1?n.push("fs-span-line-clamp"):e.ellipsis&&n.push("fs-span-ellipsis"),n}),style:i}}}),R=["href"];function U(e,a,l,o,s,i){const u=S("router-link");return e.$props.href?(p(),L("a",{key:0,href:e.$props.href,style:b(e.style)},[f(e.$slots,"default",{},()=>[d(c(e.$props.label),1)])],12,R)):e.$props.to?(p(),q(u,F({key:1,to:e.$props.to,class:e.classes,style:e.style},e.$attrs),{default:C(n=>[f(e.$slots,"default",V(w(n)),()=>[d(c(e.$props.label),1)])]),_:3},16,["to","class","style"])):$("",!0)}const v=P(k,[["render",U]]);k.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const G={title:"Foundation/Shared/Link",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:v},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var m,g,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const A=["Variations"];export{t as Variations,A as __namedExportsOrder,G as default};
