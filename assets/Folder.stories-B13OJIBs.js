import{d as F,g as y,w as v,y as i,z as n,A as d,m as I,F as V}from"./vue.esm-bundler-CWdIlc2r.js";import{F as b}from"./FSFolderTileUI-Bmb2Lfro.js";import{F as T}from"./FSLoadTile-Bf9caRZP.js";import{a as S}from"./useFolders-DZO6RHzr.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-Cs_X2E_V.js";import"./FSIconCard-CIp_Eg3h.js";import"./FSCard-BxmDRzjE.js";import"./FSCol-CvoATp5Q.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./FSRow-BnsweOMX.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./FSIcon-CyS8zLbP.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSImage-DuNoUtXF.js";import"./FSImageUI-BT_U1auP.js";import"./FSLoader-h4slsrT9.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./FSTile-BlV1I_VU.js";import"./FSClickable-JTcIAbNo.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSCheckbox-bKRtBqVc.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function w(e,o,a,l,$,C){const c=i("FSLoadTile"),g=i("FSFolderTileUI");return e.getting?(n(),d(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),d(g,I({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):V("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const qe={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,s,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const xe=["Variations"];export{r as Variations,xe as __namedExportsOrder,qe as default};
