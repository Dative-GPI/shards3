import{d as F,y,z as a,A as t,C as r,m as k,q as b,N as v,H as l,I as i,F as s}from"./vue.esm-bundler-DTB_q9xr.js";import{F as d}from"./FSClickable-BkJRwj5f.js";import{F as p}from"./FSCard-C6D9gNrD.js";import{F as f}from"./FSIcon-CaaGuK6D.js";import{F as $}from"./FSText-7jyalPrS.js";import{_ as h}from"./FSRow-CFFgZ74C.js";import{C as q}from"./useColors-BWKJNLz8.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./theme-CX_N7n5F.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSCol-CYWCfIBP.js";import"./useSlots-BnylMYIF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const g=F({name:"FSCardPlaceholder",components:{FSClickable:d,FSCard:p,FSIcon:f,FSText:$,FSRow:h},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:q,FSClickable:d,FSCard:p}}});function P(e,n,V,N,_,T){const S=y("FSText");return a(),t(b(e.$attrs.onClick?e.FSClickable:e.FSCard),k({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=x=>e.$emit("click"))},e.$attrs),{default:r(()=>[v(h,{align:"center-center"},{default:r(()=>[e.$props.icon?(a(),t(f,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.icon),1)]),_:1},8,["color"])):s("",!0),e.$props.label?(a(),t(S,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.label),1)]),_:1},8,["color"])):s("",!0)]),_:1})]),_:1},16,["height","width"])}const C=w(g,[["render",P]]);g.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Y={title:"Foundation/Shared/CardPlaceholder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:C},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
        />
    </div>`})};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSCardPlaceholder
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
        />
    </div>\`
  })
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Z=["Variations"];export{o as Variations,Z as __namedExportsOrder,Y as default};