import{d as y,y as l,z as t,A as a,B as r,m as F,L as k,E as i,G as s,D as d}from"./vue.esm-bundler-BSyvBTC9.js";import{F as b}from"./FSClickable-D9Ppoc0d.js";import{F as c}from"./FSIcon-DuyQgQFI.js";import{F as v}from"./FSText-DyldgdXP.js";import{F as f}from"./FSRow-B3SJi8FA.js";import{C as $}from"./useColors-DlnF7i6T.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-CjHnVBHV.js";import"./FSCol-CtQDyyQv.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./tag-DB5D_XjQ.js";import"./VIcon-BIpY_noq.js";import"./useSlots-P12pG1X5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=y({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:c,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:$}}});function V(e,n,_,q,w,x){const C=l("FSText"),S=l("FSClickable");return t(),a(S,F({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=N=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(c,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=P(h,[["render",V]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const X={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`})};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const Y=["Variations"];export{o as Variations,Y as __namedExportsOrder,X as default};
