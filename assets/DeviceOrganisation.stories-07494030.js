import{D as y,o as O,w as S,E as s,G as l,H as d,J as I}from"./vue.esm-bundler-7bc65811.js";import{b as V}from"./useCore-3dca23d3.js";import{F}from"./FSDeviceOrganisationTileUI-28fcad70.js";import{F as T}from"./FSLoadTile-905c2ab6.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useBreakpoints-1754149f.js";import"./useColors-6dff70d5.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./theme-0a9d2dbd.js";import"./FSSpan-7f9d89a0.js";import"./VWindowItem-41d266cc.js";import"./color-3023c34d.js";import"./group-71a10606.js";import"./locale-6f1bd0c0.js";import"./lazy-6a039da0.js";import"./ssrBoot-7688add3.js";import"./transition-188ceb13.js";import"./VIcon-866a2873.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./density-54967683.js";import"./elevation-8ccaa6df.js";import"./rounded-2bba334c.js";import"./dimensions-d0734457.js";import"./loader-04f0a6eb.js";import"./router-7d0819d1.js";import"./index-97233025.js";import"./VDefaultsProvider-04b34a8e.js";import"./VProgressCircular-ab3499a8.js";import"./resizeObserver-c41c61f0.js";import"./VImg-4e39b73e.js";import"./index-77a5f257.js";import"./FSButton-f8d3e800.js";import"./FSIcon-149b00a8.js";import"./FSRow-ae4caba9.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSCard-b8496b1f.js";import"./FSCol-8dc0322a.js";import"./FSChip-4e18b4b1.js";import"./FSText-bc8d6447.js";import"./VMenu-e2249d0a.js";import"./VOverlay-b151596c.js";import"./forwardRefs-e658ad70.js";import"./display-3f93751e.js";import"./FSImage-a5e376c1.js";import"./FSTile-c720c949.js";import"./FSCheckbox-5011c0ca.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:T},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:a,entity:n}=V();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:a,entity:n}}});function k(e,i,a,n,D,w){var r;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(l(),d(g,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(l(),d(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(r=e.entity.status)==null?void 0:r.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},null,8,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):I("",!0)}const v=b(c,[["render",k]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
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
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const De=["Variations"];export{t as Variations,De as __namedExportsOrder,ke as default};
