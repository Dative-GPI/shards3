import{d as C,c as I,y,z as l,A as s,O as T,P as p,B as m,L as D,M,N as O,D as f}from"./vue.esm-bundler-DeSao-KJ.js";import{F as x}from"./FSGrid-DCj8his-.js";import{F as _,a}from"./FSMetaValue-B5qUPLeC.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSIcon-29MaMkU3.js";import{P as F}from"./customPropertyEnums-jIhOaYfs.js";import"./FSText-BmH3S0bz.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./FSCol-CA6NzDpV.js";import"./css-BnhLLynS.js";import"./FSRow-JJutUvlP.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./useAppTimeZone-B8cBFYr8.js";import"./useTranslations-DAApg7Ob.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";const h=C({name:"FSMetaGrid",components:{FSMetaValue:_,FSGrid:x},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const n=I(()=>e.items.filter(r=>r.code.startsWith("meta.")).map(r=>({value:r,customProperty:u(r.code)}))),u=r=>e.customProperties.find(d=>`meta.${d.code}`===r);return{metaItems:n}}});function A(e,n,u,r,d,q){const c=y("FSMetaValue"),b=y("FSGrid");return l(),s(b,{items:e.$props.items},T({_:2},[p(e.$slots,(t,o)=>({name:o,fn:m(V=>[D(e.$slots,o,M(O(V)))])})),p(e.metaItems,(t,o)=>({name:`item.${t.value.code}`,fn:m(()=>[!t.value.hideDefault&&t.customProperty?(l(),s(c,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):f("",!0)])})),p(e.metaItems,(t,o)=>({name:`item-end.${t.value.code}`,fn:m(()=>[t.value.hideDefault&&t.customProperty?(l(),s(c,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):f("",!0)])}))]),1032,["items"])}const v=k(h,[["render",A]]);h.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const oe={title:"Foundation/Core/CustomProperties/MetaGrid",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:F.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:a.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:a.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:F.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:a.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:a.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}}},render:(e,{argTypes:n})=>({components:{FSMetaGrid:v,FSIcon:G},props:Object.keys(n),setup(){return{...e}},template:`
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
    </div>`})};var g,S,P;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const ae=["Variations"];export{i as Variations,ae as __namedExportsOrder,oe as default};
