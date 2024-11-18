import{d as F,g as y,w as v,y as l,z as n,A as p,m as I,H as V}from"./vue.esm-bundler-D3ngFwGY.js";import{F as b}from"./FSFolderTileUI-DnTpqAPa.js";import{F as T}from"./FSLoadTile-Do7oqkpg.js";import{a as S}from"./useFolders-DE9UQ5Ny.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BmZz_fcw.js";import"./FSIconCard-CFQKFaqv.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./FSRow-CYD73_tT.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./FSIcon-C0akNC9K.js";import"./VIcon-DBlUULm8.js";import"./color-D4nM6Ihv.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./FSLoader-BdvsvlI6.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./VImg-vN6S5DJZ.js";import"./rounded-CG6jOZvY.js";import"./transition-DtcXiLpW.js";import"./index-BuamrmjQ.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSTile-Bl0RN2m-.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./form-thVqu4eJ.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:i}}});function w(e,o,a,i,$,C){const c=l("FSLoadTile"),g=l("FSFolderTileUI");return e.getting?(n(),p(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),p(g,I({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):V("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Be={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,m,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3"],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFolderTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const he=["Variations"];export{r as Variations,he as __namedExportsOrder,Be as default};
