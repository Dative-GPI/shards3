import{D as y,o as O,w as S,E as s,G as l,H as d,J as I}from"./vue.esm-bundler-6746129d.js";import{F as V}from"./FSDeviceOrganisationTileUI-1e0eebbf.js";import{F}from"./FSLoadTile-cbc8fb12.js";import{u as T}from"./useCore-69153761.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useBreakpoints-b6b44f4d.js";import"./useColors-af9c4499.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-1d0b59d0.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./theme-dcffbbe6.js";import"./FSSpan-636f18e6.js";import"./VWindowItem-f7a9c1d2.js";import"./color-28636d86.js";import"./group-6b499f9e.js";import"./locale-6d7be75c.js";import"./lazy-0cd9d9af.js";import"./ssrBoot-456cfc3d.js";import"./transition-909f2bdc.js";import"./VIcon-bfd3bf26.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./density-0267c9a3.js";import"./elevation-6127bd0f.js";import"./rounded-4ccd8171.js";import"./dimensions-b4b52e44.js";import"./loader-ad3b4aa2.js";import"./router-6af7a2c9.js";import"./index-a12920e9.js";import"./VDefaultsProvider-4443303c.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./VImg-eeb84175.js";import"./index-5d004ff4.js";import"./FSButton-35c738ab.js";import"./FSIcon-e171104f.js";import"./FSRow-40eef247.js";import"./LexicalSelection.prod-bad52e97.js";import"./VOverlay-9bdb643e.js";import"./forwardRefs-e658ad70.js";import"./display-736a0f51.js";import"./FSCard-7c6eaa72.js";import"./FSCol-7dad0d26.js";import"./FSText-0291b8bd.js";import"./FSImage-9b7d9073.js";import"./FSTile-5c08a3d0.js";import"./FSCheckbox-c7e3c9f0.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:V,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:a,entity:n}=T();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:a,entity:n}}});function D(e,i,a,n,w,k){var r;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(l(),d(g,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(l(),d(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(r=e.entity.status)==null?void 0:r.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},null,8,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):I("",!0)}const v=b(c,[["render",D]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const Te={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        v-model="args.selected[index]"
      />
    </div>`})};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      FSDeviceOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const be=["Variations"];export{t as Variations,be as __namedExportsOrder,Te as default};
