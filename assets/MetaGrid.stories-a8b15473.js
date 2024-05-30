import{f as I,g as C,I as y,J as l,K as s,X as T,Y as p,L as m,V as D,Q as M,R as O,N as f}from"./vue.esm-bundler-cd768bc3.js";import{F as x}from"./FSGrid-ed88bb9f.js";import{F as _,a}from"./FSMetaValue-dc1f0da6.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as G}from"./FSIcon-5671b33c.js";import{P as F}from"./customPropertyEnums-7823143c.js";import"./FSText-92e9b97f.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./useSlots-2af30a3d.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./FSRow-1d7c2545.js";import"./VSpacer-a30a0a7c.js";import"./useRender-d216bc3f.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./tag-f5ad2c5e.js";const P=I({name:"FSMetaGrid",components:{FSMetaValue:_,FSGrid:x},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const n=C(()=>e.items.filter(r=>r.code.startsWith("meta.")).map(r=>({value:r,customProperty:u(r.code)}))),u=r=>e.customProperties.find(d=>`meta.${d.code}`===r);return{metaItems:n}}});function q(e,n,u,r,d,w){const c=y("FSMetaValue"),b=y("FSGrid");return l(),s(b,{items:e.$props.items},T({_:2},[p(e.$slots,(t,o)=>({name:o,fn:m(V=>[D(e.$slots,o,M(O(V)))])})),p(e.metaItems,(t,o)=>({name:`item.${t.value.code}`,fn:m(()=>[!t.value.hideDefault&&t.customProperty?(l(),s(c,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):f("",!0)])})),p(e.metaItems,(t,o)=>({name:`item-end.${t.value.code}`,fn:m(()=>[t.value.hideDefault&&t.customProperty?(l(),s(c,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):f("",!0)])}))]),1032,["items"])}const v=k(P,[["render",q]]);P.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const oe={title:"Foundation/Core/CustomProperties/MetaGrid",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:F.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:a.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:a.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:F.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:a.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:a.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}}},render:(e,{argTypes:n})=>({components:{FSMetaGrid:v,FSIcon:G},props:Object.keys(n),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          :items="args.items"
          :meta="args.meta"
          :customProperties="args.customProperties"
        >
          <template #header="{ item }">
            {{ item.label }}
          </template>
          <template #item-end="{ item }">
            {{ item.value }}
          </template>
          <template #header.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
          <template #item-end.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
        </FSMetaGrid>
      </div>
    </div>`})};var g,S,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        label: "Permission 1",
        code: "permission1",
        value: "1",
        hideDefault: false
      }, {
        label: "Permission 2",
        code: "permission2",
        value: "2",
        hideDefault: false
      }, {
        label: "Permission 3",
        code: "permission3",
        value: "3",
        hideDefault: false
      }, {
        label: "Permission 4",
        code: "permission4",
        value: "4",
        hideDefault: false
      }, {
        label: "Permission 5",
        code: "permission5",
        value: "5",
        hideDefault: true
      }, {
        label: "CustomString",
        code: "meta.property1",
        value: "",
        hideDefault: false
      }, {
        label: "CustomIcon",
        code: "meta.property2",
        value: "",
        hideDefault: true
      }],
      customProperties: [{
        id: "3",
        code: "property1",
        label: "CustomString",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "2",
        code: "property2",
        label: "CustomIcon",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Icon,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }],
      meta: {
        property1: "meta1",
        property2: "mdi-ab-testing"
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaGrid,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          :items="args.items"
          :meta="args.meta"
          :customProperties="args.customProperties"
        >
          <template #header="{ item }">
            {{ item.label }}
          </template>
          <template #item-end="{ item }">
            {{ item.value }}
          </template>
          <template #header.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
          <template #item-end.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
        </FSMetaGrid>
      </div>
    </div>\`
  })
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const ae=["Variations"];export{i as Variations,ae as __namedExportsOrder,oe as default};
