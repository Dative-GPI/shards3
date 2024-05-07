import{j as _,e as y,J as b,K as v,L as r,A as n,$ as e,V as t,M as a}from"./vue.esm-bundler-41eda46b.js";import{u as m,a as S}from"./useColors-c08b974a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as l}from"./FSCol-282cc158.js";import{_ as h}from"./FSRow-1508d56d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./css-35e8563f.js";const g=_({name:"Contrasts",components:{},props:{color:{type:String,required:!1,default:"#F0FFF0"}},setup(o){const{getColors:c}=m(),d=y(()=>c(o.color));return{describeColor:p=>{const s=new S(p);return{h:s.hue().toFixed(2),s:s.saturationv().toFixed(2),b:s.value().toFixed(2),d:s.isDark()}},colors:d}}}),R={style:{"font-weight":"bold"}},B={style:{"font-weight":"bold"}},$={style:{"font-weight":"bold"}},N={style:{"font-weight":"bold"}},V={style:{"font-weight":"bold"}},q={style:{"font-weight":"bold"}},D={style:{"font-weight":"bold"}},P={style:{"font-weight":"bold"}};function j(o,c,d,w,p,s){return b(),v(h,null,{default:r(()=>[n(l,{align:"center-center",style:a({backgroundColor:o.colors.light,color:o.colors.lightContrast,height:"100px"})},{default:r(()=>[e("div",R,t(o.colors.light),1),e("div",B,t(o.colors.lightContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.soft,color:o.colors.softContrast,height:"100px"})},{default:r(()=>[e("div",$,t(o.colors.soft),1),e("div",N,t(o.colors.softContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.base,color:o.colors.baseContrast,height:"100px"})},{default:r(()=>[e("div",V,t(o.colors.base),1),e("div",q,t(o.colors.baseContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.dark,color:o.colors.darkContrast,height:"100px"})},{default:r(()=>[e("div",D,t(o.colors.dark),1),e("div",P,t(o.colors.darkContrast),1)]),_:1},8,["style"])]),_:1})}const F=k(g,[["render",j]]);g.__docgenInfo={displayName:"Contrasts",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#F0FFF0'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Contrasts.vue"]};const O={title:"Foundation/Shared/Global/Contrasts",component:F,tags:["autodocs"],argTypes:{}},i={render:()=>({components:{FSRow:h,FSCol:l,Contrasts:F},setup(){return{allColors:m().getBasePaletteColors()}},template:`
      <div>
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    `})};var u,C,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSRow,
      FSCol,
      Contrasts
    },
    setup() {
      const allColors = useColors().getBasePaletteColors();
      return {
        allColors
      };
    },
    template: \`
      <div>
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    \`
  })
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const T=["BaseColors"];export{i as BaseColors,T as __namedExportsOrder,O as default};
