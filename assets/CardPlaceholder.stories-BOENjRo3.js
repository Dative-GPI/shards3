import{d as S,y as F,z as a,A as t,C as r,m as y,q as k,N as b,H as n,I as l,F as i}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as s}from"./FSClickable-D7sul-uP.js";import{F as d}from"./FSCard-Bfo4Z0Zf.js";import{F as u}from"./FSIcon-DfjSexyz.js";import{F as v}from"./FSText-CAGI2dEo.js";import{_ as f}from"./FSRow-CSQtiyAx.js";import{C as $}from"./useColors-DnoeDx-P.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSCol-D8gLxM2E.js";import"./useSlots-C9mZt9CQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:u,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function q(e,w,P,V,N,x){const C=F("FSText");return a(),t(k(e.$attrs.onClick?e.FSClickable:e.FSCard),y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(a(),t(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.icon),1)]),_:1},8,["color"])):i("",!0),e.$props.label?(a(),t(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.label),1)]),_:1},8,["color"])):i("",!0)]),_:1})]),_:1},16,["height","width"])}const g=_(h,[["render",q]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Z={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
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
            @click="console.log('clicked')"
        />
    </div>\`
  })
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ee=["Variations"];export{o as Variations,ee as __namedExportsOrder,Z as default};
