import{d as v,c as y,z as b,A as _,C as r,N as n,V as t,I as e,P as a}from"./vue.esm-bundler-DTB_q9xr.js";import{u as m,a as S}from"./useColors-BWKJNLz8.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSCol-CYWCfIBP.js";import{_ as h}from"./FSRow-CFFgZ74C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";const g=v({name:"Contrasts",components:{},props:{color:{type:String,required:!1,default:"#F0FFF0"}},setup(o){const{getColors:c}=m(),d=y(()=>c(o.color));return{describeColor:p=>{const s=new S(p);return{h:s.hue().toFixed(2),s:s.saturationv().toFixed(2),b:s.value().toFixed(2),d:s.isDark()}},colors:d}}}),R={style:{"font-weight":"bold"}},B={style:{"font-weight":"bold"}},N={style:{"font-weight":"bold"}},V={style:{"font-weight":"bold"}},$={style:{"font-weight":"bold"}},D={style:{"font-weight":"bold"}},P={style:{"font-weight":"bold"}},q={style:{"font-weight":"bold"}};function z(o,c,d,F,p,s){return b(),_(h,{class:"mb-12"},{default:r(()=>[n(l,{align:"center-center",style:a({backgroundColor:o.colors.light,color:o.colors.lightContrast,height:"100px"})},{default:r(()=>[t("div",R," Light "+e(o.colors.light),1),t("div",B,e(o.colors.lightContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.soft,color:o.colors.softContrast,height:"100px"})},{default:r(()=>[t("div",N," Soft "+e(o.colors.soft),1),t("div",V,e(o.colors.softContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.base,color:o.colors.baseContrast,height:"100px"})},{default:r(()=>[t("div",$," Base "+e(o.colors.base),1),t("div",D,e(o.colors.baseContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.dark,color:o.colors.darkContrast,height:"100px"})},{default:r(()=>[t("div",P," Dark "+e(o.colors.dark),1),t("div",q,e(o.colors.darkContrast),1)]),_:1},8,["style"])]),_:1})}const w=k(g,[["render",z]]);g.__docgenInfo={displayName:"Contrasts",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#F0FFF0'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Contrasts.vue"]};const J={title:"Foundation/Shared/Global/Contrasts",component:w,tags:["autodocs"],argTypes:{}},i={render:()=>({components:{FSRow:h,FSCol:l,Contrasts:w},setup(){return{allColors:m().getBasePaletteColors()}},template:`
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
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const K=["BaseColors"];export{i as BaseColors,K as __namedExportsOrder,J as default};
