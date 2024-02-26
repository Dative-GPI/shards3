import{D as y,o as O,w as S,E as s,G as l,H as d,J as I}from"./vue.esm-bundler-17cb12ce.js";import{F as V}from"./FSDeviceOrganisationTileUI-52a673a3.js";import{F}from"./FSLoadTile-a3adee7c.js";import{u as T}from"./useCore-feeab7e5.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useBreakpoints-6bc0ee93.js";import"./useColors-04b7b26f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-8f4289e2.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./theme-c4ac2200.js";import"./FSSpan-2051def6.js";import"./VWindowItem-42addeb6.js";import"./color-d421c344.js";import"./group-a63c5543.js";import"./locale-2e51016c.js";import"./lazy-04b58018.js";import"./ssrBoot-e21c8f3c.js";import"./transition-4d995a4a.js";import"./VIcon-343130ca.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./density-cdecea01.js";import"./elevation-cb67bcb5.js";import"./rounded-d330abbe.js";import"./dimensions-10b1de84.js";import"./loader-8675b45d.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";import"./VImg-9bf8748f.js";import"./index-c7efe106.js";import"./FSButton-8130144f.js";import"./FSIcon-16c55386.js";import"./FSRow-9ce6aace.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSCard-8714722b.js";import"./FSCol-03fc1f3a.js";import"./FSChip-c258cb6c.js";import"./FSText-dce49904.js";import"./VMenu-0c6b0489.js";import"./VOverlay-10257b67.js";import"./forwardRefs-e658ad70.js";import"./display-4fe57557.js";import"./FSImage-66056b8b.js";import"./FSTile-b6b53f4e.js";import"./FSCheckbox-6e1316ac.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:V,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:a,entity:n}=T();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:a,entity:n}}});function D(e,i,a,n,w,k){var r;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(l(),d(g,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(l(),d(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(r=e.entity.status)==null?void 0:r.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},null,8,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):I("",!0)}const v=b(c,[["render",D]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const De={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const we=["Variations"];export{t as Variations,we as __namedExportsOrder,De as default};
