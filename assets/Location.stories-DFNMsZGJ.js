import{F as V}from"./FSTile-_9-fb_kX.js";import{F as u}from"./FSLocationTileUI-m25eCEDG.js";import{d as F,w as y,z as i,A as l,B as m,m as S,E as T}from"./vue.esm-bundler-BwDfg4wG.js";import{F as I}from"./FSLoadTile-DTjXqIhL.js";import{a as L}from"./useLocations-DdW-nkq7.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./FSRow-k5pgBhR1.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSCheckbox-Up-USX9A.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./form-CH3j37ax.js";import"./FSIconCard-B4Sv3DnZ.js";import"./FSColor-CZ6aXURW.js";import"./FSLoader-CBedVZCM.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./address-CE2z3AEI.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:I},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:n,entity:r}=L();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:n,entity:r}}});function $(e,o,n,r,C,q){const g=i("FSLoadTile"),b=i("FSLocationTileUI");return e.getting?(l(),m(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(l(),m(b,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","deviceCount","editable","modelValue"])):T("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const ye={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `}),args:{locationId:"1",modelValue:!0,editable:!0}};var p,d,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    locationId: '1',
    modelValue: true,
    editable: true
  }
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Se=["Default"];export{t as Default,Se as __namedExportsOrder,ye as default};
