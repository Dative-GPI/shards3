import{g as k,t as q,j as c,o as p,k as m,l as o,m as f,n as g,p as E,q as N,u as V}from"./vue.esm-bundler-c22e4d53.js";import{C as w,u as B,_ as T}from"./VIcon-7572c30d.js";import{F as $}from"./FSIcon-4838725b.js";import{_ as h,F as I,V as R}from"./VBtn-da6b1963.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const C=k({name:"FSTag",components:{FSIcon:$,FSSpan:h,FSRow:I},props:{label:{type:String,required:!0},full:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:w.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(a,{emit:t}){const{label:u,full:s,color:i,editable:d}=q(a),e=B().getVariants(i.value),n={"--lc":s.value?e.base:e.light,"--bc":e.base,"--dc":e.dark,"--lt":s.value?e.light:e.base,"--bt":e.light,"--dt":e.light};return{label:u,editable:d,style:n,emit:t}}});function x(a,t,u,s,i,d){const e=c("FSIcon"),n=c("FSRow");return p(),m(n,V({class:"fs-tag",width:"hug",height:"hug",style:a.style},a.$attrs),{default:o(()=>[f(h,null,{default:o(()=>[g(E(a.label),1)]),_:1}),a.editable?(p(),m(R,{key:0,class:"fs-tag-button",ripple:!1,onClick:t[0]||(t[0]=j=>a.emit("remove"))},{default:o(()=>[f(e,{size:"s"},{default:o(()=>[g(" mdi-close ")]),_:1})]),_:1})):N("",!0)]),_:1},16,["style"])}const P=T(C,[["render",x],["__scopeId","data-v-0c54f8d5"]]);C.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"full",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/foundation-shared-ui-components/components/FSTag.vue"]};const J={title:"Foundation/Tag",component:P,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{label:"Editable",full:!1,color:"primary",editable:!0}},l={args:{label:"Not Editable",full:!0,color:"warning",editable:!1}};var b,_,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Editable",
    full: false,
    color: "primary",
    editable: true
  }
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,v,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Not Editable",
    full: true,
    color: "warning",
    editable: false
  }
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const K=["Editable","NotEditable"];export{r as Editable,l as NotEditable,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Tag.stories-b3fb175d.js.map
