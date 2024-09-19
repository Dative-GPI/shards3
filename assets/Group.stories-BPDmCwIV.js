import{d as v,o as y,w as I,z as p,A as n,B as s,m as V,E as F}from"./vue.esm-bundler-BwDfg4wG.js";import{F as T}from"./FSGroupTileUI-8i-cBQ7y.js";import{F as b}from"./FSLoadTile-DTjXqIhL.js";import{a as G}from"./useGroups-BLdExTp0.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-CtdLuckH.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./color-BnvS3YzF.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./locale-DTc71_bq.js";import"./VImg-DFtMr-E9.js";import"./rounded-NuUWeCiM.js";import"./transition-DbaVUv7M.js";import"./index-O1RQoaVh.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./FSColor-CZ6aXURW.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./FSRow-k5pgBhR1.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSTile-_9-fb_kX.js";import"./FSClickable-Y_T-Cq-9.js";import"./VProgressCircular-CmpAWY4m.js";import"./tag-Ceq3l71M.js";import"./FSCheckbox-Up-USX9A.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./index-h4Pvk0JI.js";import"./form-CH3j37ax.js";import"./pathCrumb-Db-cq5HI.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["Variations"];export{r as Variations,we as __namedExportsOrder,ke as default};
