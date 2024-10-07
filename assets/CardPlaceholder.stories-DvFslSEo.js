import{d as F,y as l,z as t,A as a,C as r,m as y,N as k,H as i,I as s,F as d}from"./vue.esm-bundler-CWdIlc2r.js";import{F as b}from"./FSClickable-CWKuMNrW.js";import{F as c}from"./FSIcon-CF3g_zZI.js";import{F as v}from"./FSText-BvtpuDSr.js";import{_ as f}from"./FSRow-D9oM1Ufa.js";import{C as $}from"./useColors-CrLBSafx.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-CN9NbS7f.js";import"./FSCol-DyDZsJ9U.js";import"./css-rhgMLwoH.js";import"./useBreakpoints-DVmyWqF2.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./useSlots-zwOl0abH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=F({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:c,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:$}}});function w(e,n,P,V,q,N){const C=l("FSText"),S=l("FSClickable");return t(),a(S,y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=x=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(c,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=_(h,[["render",w]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const X={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`})};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Y=["Variations"];export{o as Variations,Y as __namedExportsOrder,X as default};
