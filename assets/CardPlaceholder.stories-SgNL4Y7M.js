import{d as y,y as l,z as t,A as a,B as r,m as F,L as k,E as i,G as s,D as d}from"./vue.esm-bundler-BSwA4uJo.js";import{F as b}from"./FSClickable-DxIbWXqH.js";import{_ as u}from"./FSIcon-BnX9YboA.js";import{F as _}from"./FSText-Bql3IFAZ.js";import{_ as f}from"./FSRow-C55kyKDN.js";import{C as v}from"./useColors-CVvq99EA.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-Dku7tZ0W.js";import"./FSCol-B2fYQH2g.js";import"./css-DuQjrBfn.js";import"./VProgressCircular-Dac4kH3U.js";import"./color-D9V7QeIP.js";import"./theme-CJjFLd5E.js";import"./tag-VYeYJ1FC.js";import"./VIcon-5UD9vI9m.js";import"./useSlots-BFQFTsAj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const h=y({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:u,FSText:_,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:v}}});function w(e,n,P,V,q,x){const S=l("FSText"),C=l("FSClickable");return t(),a(C,F({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=N=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(S,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=$(h,[["render",w]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const W={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const X=["Variations"];export{o as Variations,X as __namedExportsOrder,W as default};
