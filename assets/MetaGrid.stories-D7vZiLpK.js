import{d as x,c as M,y as F,z as p,A as u,M as A,N as d,B as m,I as w,J as G,K as k,D as h}from"./vue.esm-bundler-BSyvBTC9.js";import{F as q}from"./FSGrid-DuNmphW8.js";import{F as N,a as r}from"./FSMetaValue-D-dv4Z-_.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSIcon-DuyQgQFI.js";import{P as s}from"./customProperties-DqkON8hk.js";import"./FSText-DyldgdXP.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./useSlots-P12pG1X5.js";import"./FSCol-CtQDyyQv.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./useAppTimeZone-D_npl1cn.js";import"./FSIconCheck-aABSSIWm.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";const I=x({name:"FSMetaGrid",components:{FSMetaValue:N,FSGrid:q},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const a=M(()=>e.items.filter(n=>n.code.startsWith("meta.")).map(n=>({value:n,customProperty:y(n.code)}))),y=n=>e.customProperties.find(f=>`meta.${f.code}`===n);return{metaItems:a}}});function B(e,a,y,n,f,z){const g=F("FSMetaValue"),D=F("FSGrid");return p(),u(D,{items:e.$props.items},A({_:2},[d(e.$slots,(t,o)=>({name:o,fn:m(O=>[w(e.$slots,o,G(k(O)))])})),d(e.metaItems,(t,o)=>({name:`item.${t.value.code}`,fn:m(()=>[!t.value.hideDefault&&t.customProperty?(p(),u(g,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])})),d(e.metaItems,(t,o)=>({name:`item-end.${t.value.code}`,fn:m(()=>[t.value.hideDefault&&t.customProperty?(p(),u(g,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])}))]),1032,["items"])}const c=_(I,[["render",B]]);I.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const me={title:"Foundation/Core/CustomProperties/MetaGrid",component:c,tags:["autodocs"],argTypes:{}},l={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:s.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}},render:(e,{argTypes:a})=>({components:{FSMetaGrid:c,FSIcon:C},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          :items="args.items"
          :meta="args.meta"
          :customProperties="args.customProperties"
        />
      </div>
    </div>`})},i={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:s.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}}},render:(e,{argTypes:a})=>({components:{FSMetaGrid:c,FSIcon:C},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})};var b,v,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          :items="args.items"
          :meta="args.meta"
          :customProperties="args.customProperties"
        />
      </div>
    </div>\`
  })
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var S,V,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(V=i.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const ce=["Default","Variations"];export{l as Default,i as Variations,ce as __namedExportsOrder,me as default};
