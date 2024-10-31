import{d as S,y as F,z as a,A as t,C as r,m as y,q as k,N as b,H as n,I as l,F as i}from"./vue.esm-bundler-l-siv0w9.js";import{F as s}from"./FSClickable-Dv9jZ2SG.js";import{F as d}from"./FSCard-CBOjzTDC.js";import{F as u}from"./FSIcon-CvjHaRpL.js";import{F as v}from"./FSText-BV49O4zh.js";import{_ as f}from"./FSRow-CbEgVN08.js";import{C as $}from"./useColors-r8nvatqt.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCol-BvqytbKT.js";import"./useSlots-C_N_WAus.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:u,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function q(e,w,P,V,N,x){const C=F("FSText");return a(),t(k(e.$attrs.onClick?e.FSClickable:e.FSCard),y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(a(),t(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.icon),1)]),_:1},8,["color"])):i("",!0),e.$props.label?(a(),t(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.label),1)]),_:1},8,["color"])):i("",!0)]),_:1})]),_:1},16,["height","width"])}const g=_(h,[["render",q]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Z={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
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
