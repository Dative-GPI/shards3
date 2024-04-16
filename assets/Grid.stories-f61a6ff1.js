import{j as $,e as V,H as E,I as r,J as o,K as s,R as u,Z as T,L as D,z as f,D as l,U as m,x as S,P as g,Q as y,F,M as h,V as N}from"./vue.esm-bundler-9b0e8103.js";import{F as w}from"./FSText-84a86aec.js";import{_ as d}from"./FSCol-417d1c42.js";import{_ as p}from"./FSRow-efd9bf42.js";import{u as L,C as R}from"./useColors-c8cdc69f.js";import{u as j}from"./useSlots-bfff66e3.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./VSpacer-fd2fc595.js";import{_ as O}from"./FSIcon-42763d21.js";import"./css-a20776b9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./useRender-7c6c7a38.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./tag-6bef4934.js";const b=$({name:"FSGrid",components:{FSText:w,FSCol:d,FSRow:p},props:{items:{type:Array,default:[],required:!1}},setup(){const{getColors:t}=L(),{slots:n}=j(),c=t(R.Light);return{style:V(()=>({"--fs-grid-border-color":c.dark})),itemSlot:e=>n[`item.${e}`]?n[`item.${e}`]:n.item?n.item:null,headerSlot:e=>n[`header.${e}`]?n[`header.${e}`]:n.header?n.header:null,itemEndSlot:e=>n[`item-end.${e}`]?n[`item-end.${e}`]:n["item-end"]?n["item-end"]:null}}});function q(t,n,c,I,P,C){const a=E("FSText");return r(),o(d,{gap:"0"},{default:s(()=>[(r(!0),u(F,null,T(t.$props.items,(e,G)=>(r(),o(p,{align:"center-center",class:"fs-grid-item",padding:"0 8px",height:"hug",style:D(t.style),key:G},{default:s(()=>[f(d,{gap:"2px"},{default:s(()=>[t.headerSlot(e.code)?(r(),o(l(t.headerSlot(e.code)),m(S({key:0},{item:e})),null,16)):(r(),o(a,{key:1,font:e.hideDefault?"text-body":"text-overline"},{default:s(()=>[g(y(e.label),1)]),_:2},1032,["font"])),e.hideDefault?h("",!0):(r(),u(F,{key:2},[t.itemSlot(e.code)?(r(),o(l(t.itemSlot(e.code)),m(S({key:0},{item:e})),null,16)):(r(),o(a,{key:1},{default:s(()=>[g(y(e.value),1)]),_:2},1024))],64))]),_:2},1024),f(B),t.itemEndSlot(e.code)?(r(),o(p,{key:0,align:"center-right"},{default:s(()=>[(r(),o(l(t.itemEndSlot(e.code)),m(N({item:e})),null,16))]),_:2},1024)):h("",!0)]),_:2},1032,["style"]))),128))]),_:1})}const x=z(b,[["render",q]]);b.__docgenInfo={displayName:"FSGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSGrid.vue"]};const ie={title:"Foundation/Shared/Lists/Grid",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}},render:(t,{argTypes:n})=>({components:{FSGrid:x,FSIcon:O},props:Object.keys(n),setup(){return{...t}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSGrid
          :items="args.items"
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
        </FSGrid>
      </div>
    </div>`})};var v,_,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        label: "Permission 1",
        code: "permission1",
        value: "1"
      }, {
        label: "Permission 2",
        code: "permission2",
        value: "2"
      }, {
        label: "Permission 3",
        code: "permission3",
        value: "3"
      }, {
        label: "Permission 4",
        code: "permission4",
        value: "4"
      }, {
        label: "Permission 5",
        code: "permission5",
        value: "5"
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGrid,
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
        <FSGrid
          :items="args.items"
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
        </FSGrid>
      </div>
    </div>\`
  })
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ae=["Variations"];export{i as Variations,ae as __namedExportsOrder,ie as default};
