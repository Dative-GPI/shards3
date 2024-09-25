import{d as v,g as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-DjjVIdVI.js";import{F as T}from"./FSGroupTileUI-Cc1360BU.js";import{F as b}from"./FSLoadTile-B0kFEatB.js";import{a as G}from"./useGroups-DcqJC41I.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-C5YJvBfA.js";import"./FSImageUI-DCipACiG.js";import"./FSLoader-DpMpI5Qw.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./color-BKGJvBEr.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./VImg-IVf3xxVd.js";import"./rounded-Cely44IK.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";import"./FSColor-BvPEcinM.js";import"./FSCard-C9IdgJNY.js";import"./FSCol-TPWSQPHs.js";import"./FSRow-CpogXLW8.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSTile-CFEc0iwO.js";import"./FSClickable-DnsFhA6_.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./pathCrumb-Db-cq5HI.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const we={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2"],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const $e=["Variations"];export{r as Variations,$e as __namedExportsOrder,we as default};
