import{g as y,j as r,I as k,O as v,P as h,x as S,L,M as b}from"./vue.esm-bundler-72feb788.js";import{u as q}from"./vue-router-c36f9e85.js";import{C as x,u as F}from"./useColors-1fcec14a.js";import{u as C}from"./useSlots-a83038d8.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1fe57d71.js";const c=y({name:"FSLink",props:{label:{type:[String,null,void 0],required:!1,default:null},to:{type:[String,Object],required:!1,default:"_blank"},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:x.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{getColors:a}=F(),{slots:l}=C(),o=q(),n=r(()=>a(e.color)),i=r(()=>{const t=["fs-link",e.font];return l.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),m=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark}}}),g=r(()=>typeof e.to=="string"?e.to:o.resolve(e.to).href);return{classes:i,style:m,href:g}}}),V=["href"];function w(e,a,l,o,n,i){return k(),v("a",S({class:e.classes,style:e.style,href:e.href},e.$attrs),[h(e.$slots,"default",{},()=>[L(b(e.$props.label),1)])],16,V)}const p=_(c,[["render",w]]);c.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string|null|undefined"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"string | RouteLocation"},required:!1,defaultValue:{func:!1,value:'"_blank"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline","text-underline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const I={title:"Foundation/Shared/Link",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:p},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink :to="{ name: 'Home', params: { deviceId: '1' }, query: { search: 'Device' } }">
          Using RouteLocation from vue-router
        </FSLink>
        <FSLink to="https://www.google.fr">
          Using Google URL
        </FSLink>
      </div>
    `})};var u,f,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(f=s.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};const P=["Variations"];export{s as Variations,P as __namedExportsOrder,I as default};
