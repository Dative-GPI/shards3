import{d as v,c as y,z as b,A as S,B as r,L as n,W as t,G as e,O as a}from"./vue.esm-bundler-BSyvBTC9.js";import{u as h,a as _}from"./useColors-DlnF7i6T.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSCol-DZA6pxA1.js";import{F as m}from"./FSRow-CA1vgNXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./css-DLfrm0pR.js";const g=v({name:"Contrasts",components:{},props:{color:{type:String,required:!1,default:"#F0FFF0"}},setup(o){const{getColors:c}=h(),d=y(()=>c(o.color));return{describeColor:p=>{const s=new _(p);return{h:s.hue().toFixed(2),s:s.saturationv().toFixed(2),b:s.value().toFixed(2),d:s.isDark()}},colors:d}}}),R={style:{"font-weight":"bold"}},B={style:{"font-weight":"bold"}},N={style:{"font-weight":"bold"}},$={style:{"font-weight":"bold"}},D={style:{"font-weight":"bold"}},V={style:{"font-weight":"bold"}},q={style:{"font-weight":"bold"}},z={style:{"font-weight":"bold"}};function G(o,c,d,F,p,s){return b(),S(m,{class:"mb-12"},{default:r(()=>[n(l,{align:"center-center",style:a({backgroundColor:o.colors.light,color:o.colors.lightContrast,height:"100px"})},{default:r(()=>[t("div",R," Light "+e(o.colors.light),1),t("div",B,e(o.colors.lightContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.soft,color:o.colors.softContrast,height:"100px"})},{default:r(()=>[t("div",N," Soft "+e(o.colors.soft),1),t("div",$,e(o.colors.softContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.base,color:o.colors.baseContrast,height:"100px"})},{default:r(()=>[t("div",D," Base "+e(o.colors.base),1),t("div",V,e(o.colors.baseContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.dark,color:o.colors.darkContrast,height:"100px"})},{default:r(()=>[t("div",q," Dark "+e(o.colors.dark),1),t("div",z,e(o.colors.darkContrast),1)]),_:1},8,["style"])]),_:1})}const w=k(g,[["render",G]]);g.__docgenInfo={displayName:"Contrasts",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#F0FFF0'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Contrasts.vue"]};const j={title:"Foundation/Shared/Global/Contrasts",component:w,tags:["autodocs"],argTypes:{}},i={render:()=>({components:{FSRow:m,FSCol:l,Contrasts:w},setup(){return{allColors:h().getBasePaletteColors()}},template:`
      <div style="max-width: 100vw; overflow-x: auto;">
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    `})};var u,f,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <div style="max-width: 100vw; overflow-x: auto;">
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    \`
  })
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const H=["BaseColors"];export{i as BaseColors,H as __namedExportsOrder,j as default};
