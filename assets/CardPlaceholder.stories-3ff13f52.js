import{f as F,D as l,E as t,F as a,G as r,x as y,P as k,K as i,L as s,I as d}from"./vue.esm-bundler-a0893183.js";import{F as b}from"./FSClickable-550391c2.js";import{_ as u}from"./FSIcon-9d61ed62.js";import{F as _}from"./FSText-46c134d7.js";import{_ as f}from"./FSRow-821d23a1.js";import{C as v}from"./useColors-6c375bb5.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./VProgressCircular-94f3850c.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./useRender-13ac3742.js";import"./resizeObserver-7a348d53.js";import"./VIcon-3d9c1c96.js";import"./tag-c957791e.js";import"./useSlots-d5b57407.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const h=F({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:u,FSText:_,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:v}}});function P(e,n,w,V,q,x){const S=l("FSText"),C=l("FSClickable");return t(),a(C,y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=N=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(S,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=$(h,[["render",P]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Y={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`})};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSCardPlaceholder
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>\`
  })
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Z=["Variations"];export{o as Variations,Z as __namedExportsOrder,Y as default};
