import{d as x,c as M,y as F,z as p,A as u,B as A,O as d,C as m,K as w,L as G,M as k,F as h}from"./vue.esm-bundler-CWdIlc2r.js";import{F as q}from"./FSGrid-Dq7131XP.js";import{F as _,a as r}from"./FSMetaValue-CdBAXbM4.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSIcon-CyS8zLbP.js";import{P as s}from"./customProperties-DqkON8hk.js";import"./FSText-BIOb5fBT.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./useBreakpoints-INFVV7da.js";import"./useSlots-zwOl0abH.js";import"./FSCol-CvoATp5Q.js";import"./css-BWDYXGFo.js";import"./FSRow-BnsweOMX.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./useAppTimeZone-DLNqwrXb.js";import"./FSIconCheck-CodTWHD2.js";import"./FSSpan-Bnbdrku6.js";import"./useDateFormat-zHupOjLO.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./useTranslations-CEnu7PZQ.js";import"./VIcon-Bo7R9vIQ.js";const I=x({name:"FSMetaGrid",components:{FSMetaValue:_,FSGrid:q},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const a=M(()=>e.items.filter(n=>n.code.startsWith("meta.")).map(n=>({value:n,customProperty:y(n.code)}))),y=n=>e.customProperties.find(f=>`meta.${f.code}`===n);return{metaItems:a}}});function N(e,a,y,n,f,z){const g=F("FSMetaValue"),D=F("FSGrid");return p(),u(D,{items:e.$props.items},A({_:2},[d(e.$slots,(t,o)=>({name:o,fn:m(O=>[w(e.$slots,o,G(k(O)))])})),d(e.metaItems,(t,o)=>({name:`item.${t.value.code}`,fn:m(()=>[!t.value.hideDefault&&t.customProperty?(p(),u(g,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])})),d(e.metaItems,(t,o)=>({name:`item-end.${t.value.code}`,fn:m(()=>[t.value.hideDefault&&t.customProperty?(p(),u(g,{key:0,customProperty:t.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])}))]),1032,["items"])}const c=B(I,[["render",N]]);I.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const ye={title:"Foundation/Core/CustomProperties/MetaGrid",component:c,tags:["autodocs"],argTypes:{}},l={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:s.String,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:s.Icon,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:r.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:r.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}},render:(e,{argTypes:a})=>({components:{FSMetaGrid:c,FSIcon:C},props:Object.keys(a),setup(){return{args:e}},template:`
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
}`,...(T=(V=i.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const fe=["Default","Variations"];export{l as Default,i as Variations,fe as __namedExportsOrder,ye as default};