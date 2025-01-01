import{d as F,g as y,w as v,A as l,B as n,j as I,G as V,I as p}from"./vue.esm-bundler-DSwHwgKw.js";import{F as b}from"./FSFolderTileUI-DKZNGQrR.js";import{F as T}from"./FSLoadTile-ChhU3EZq.js";import{a as S}from"./useFolders-BXa8235C.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-C_eLv-4H.js";import"./FSIconCard-xbKjQQBw.js";import"./FSCard-BWyLcCxk.js";import"./FSCol-DdGVae5t.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./FSRow-BtkEywPN.js";import"./useColors-BO83iJ4k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-4AjdAhIV.js";import"./FSIcon-DbV5muRp.js";import"./VIcon-CdjjMQ6V.js";import"./color-uBYwhjku.js";import"./FSImage-D6DTyiE6.js";import"./FSImageUI-CEC0YZq4.js";import"./FSLoader-BCTnX9Pa.js";import"./dimensions-CF0PFV-D.js";import"./elevation-DiTecsj1.js";import"./locale-BsRwbRmi.js";import"./VImg-DSalXW5F.js";import"./rounded-ZilIy1Oq.js";import"./transition--2cAMn_j.js";import"./index-D4rR88Q2.js";import"./imageDetails-B1Ivd7HU.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BC5Ev-17.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./FSTile-C3y8cd6W.js";import"./FSClickable-DngCBs65.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./FSCheckbox-B7I9yKzI.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./density-BfjPyHiq.js";import"./proxiedModel-D4Pgijkw.js";import"./index-BOr5YZLb.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./index-GTe7atjb.js";import"./form-BWUCG2_i.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:i}}});function w(e,o,a,i,$,C){const c=l("FSLoadTile"),g=l("FSFolderTileUI");return e.getting?(p(),n(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),n(g,I({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):V("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const he=["Variations"];export{r as Variations,he as __namedExportsOrder,Ue as default};
