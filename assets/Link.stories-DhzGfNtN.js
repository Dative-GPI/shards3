import{d as C,c as t,y as L,z as d,G as q,J as m,N as c,C as r,D as g,E as y,P as F,F as V,A as $,K as w,L as _,m as R,H as x}from"./vue.esm-bundler-D3ngFwGY.js";import{F as N}from"./FSRouterLink-4CaYWHac.js";import{_ as o}from"./FSSpan-BETzK1-3.js";import{u as B}from"./useBreakpoints-DbdoA89o.js";import{u as P,C as U}from"./useColors-B-331F-F.js";import{u as E}from"./useSlots-BM37IFiq.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-router-DrtreIio.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";const S=C({name:"FSLink",components:{FSRouterLink:N,FSSpan:o},props:{label:{type:String,required:!1,default:null},to:{type:Object,required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:U.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{fontStyles:a}=B(),{getColors:u}=P(),{slots:i}=E(),n=t(()=>u(e.color)),p=t(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base,...a.value};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light,...a.value};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark,...a.value}}});return{classes:t(()=>{const s=["fs-link",e.font];return i.default||s.push("fs-span-pre-wrap"),e.lineClamp>1?s.push("fs-span-line-clamp"):e.ellipsis&&s.push("fs-span-ellipsis"),s}),style:p}}}),D=["href"];function O(e,a,u,i,n,p){const f=L("FSRouterLink");return e.$props.href?(d(),q("a",{key:0,href:e.$props.href,class:V(e.classes),style:F(e.style)},[m(e.$slots,"default",{},()=>[c(o,null,{default:r(()=>[g(y(e.$props.label),1)]),_:1})])],14,D)):e.$props.to?(d(),$(f,R({key:1,to:e.$props.to,class:e.classes,style:e.style},e.$attrs),{default:r(s=>[m(e.$slots,"default",w(_(s)),()=>[c(o,null,{default:r(()=>[g(y(e.$props.label),1)]),_:1})])]),_:3},16,["to","class","style"])):x("",!0)}const b=z(S,[["render",O]]);S.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const X={title:"Foundation/Shared/Link",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:b},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink
          :to="{ name: 'Home', query: { search: 'Device' } }"
          label="Using RouteLocation from vue-router"
        />
        <FSLink
          href="https://www.google.fr"
          label="Using Google URL"
        />
      </div>
    `})};var k,h,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <FSLink
          :to="{ name: 'Home', query: { search: 'Device' } }"
          label="Using RouteLocation from vue-router"
        />
        <FSLink
          href="https://www.google.fr"
          label="Using Google URL"
        />
      </div>
    \`
  })
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Y=["Variations"];export{l as Variations,Y as __namedExportsOrder,X as default};
