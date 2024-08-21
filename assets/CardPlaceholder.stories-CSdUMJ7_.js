import{d as y,y as l,z as t,A as a,B as r,m as F,L as k,E as i,G as s,D as d}from"./vue.esm-bundler-gWFTcvUr.js";import{F as b}from"./FSClickable-aki8YuqU.js";import{_ as m}from"./FSIcon-C7-l9IT-.js";import{F as _}from"./FSText-CvFl9H1C.js";import{_ as f}from"./FSRow-Bpa2jjpJ.js";import{C as v}from"./useColors-4hVwr1YC.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-B-jXuIJy.js";import"./FSCol-DX423FHf.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./VIcon-BiBYr0XY.js";import"./useSlots-qbJuQIJ1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const h=y({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:m,FSText:_,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:v}}});function w(e,n,P,V,q,x){const S=l("FSText"),C=l("FSClickable");return t(),a(C,F({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=N=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(m,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(S,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=$(h,[["render",w]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const U={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`})};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const W=["Variations"];export{o as Variations,W as __namedExportsOrder,U as default};
