import{D as y,o as O,w as S,E as s,G as l,H as d,J as I}from"./vue.esm-bundler-47273a21.js";import{b as V}from"./useCore-be6b254e.js";import{F}from"./FSDeviceOrganisationTileUI-46380fb3.js";import{F as T}from"./FSLoadTile-047ca7da.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useBreakpoints-bd6e350e.js";import"./useColors-446eeb5a.js";import"./index-a0e5e2a3.js";import"./rules-f5c4efdb.js";import"./theme-7e191b90.js";import"./FSSpan-6a5d69b6.js";import"./VWindowItem-6ca01277.js";import"./color-38d974b0.js";import"./group-0f5e58b6.js";import"./locale-5c4d4b03.js";import"./lazy-b159d447.js";import"./ssrBoot-82acca87.js";import"./transition-6c7cc79f.js";import"./VIcon-f933c800.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./density-52b016fa.js";import"./elevation-522a2612.js";import"./rounded-8d3cef66.js";import"./dimensions-699818e3.js";import"./loader-c1abc016.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";import"./VImg-659d7685.js";import"./index-1e6cce54.js";import"./FSButton-95139452.js";import"./FSIcon-be851c75.js";import"./FSRow-89f60060.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSCard-e4bdc27c.js";import"./FSCol-00f12d9b.js";import"./FSChip-da46df45.js";import"./FSText-f44f59d2.js";import"./VMenu-e2ab9d1e.js";import"./VOverlay-da68897b.js";import"./forwardRefs-e658ad70.js";import"./display-e8621586.js";import"./FSImage-2c543ce5.js";import"./FSTile-a648402f.js";import"./FSCheckbox-449815fb.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:T},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:a,entity:n}=V();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:a,entity:n}}});function k(e,i,a,n,D,w){var r;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(l(),d(g,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(l(),d(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(r=e.entity.status)==null?void 0:r.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},null,8,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):I("",!0)}const v=b(c,[["render",k]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(i),setup(){return{...e}},template:`
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
