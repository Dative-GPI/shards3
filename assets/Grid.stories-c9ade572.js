import{j as P,e as $,I as V,J as r,K as o,L as s,Q as u,Z as E,M as T,A as f,v as l,B as m,U as S,V as g,F as y,N as F}from"./vue.esm-bundler-857e5af7.js";import{F as N}from"./FSText-e633ddca.js";import{_ as d}from"./FSCol-439c812a.js";import{_ as p}from"./FSRow-e30f1dcc.js";import{u as w,C as B}from"./useColors-d77b9fa0.js";import{u as D}from"./useSlots-8bee1a74.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as j}from"./VSpacer-37a4cd9a.js";import{_ as O}from"./FSIcon-faf0e444.js";import"./css-ab2bdb81.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./useRender-d5beceb3.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./tag-7bd029e5.js";const k=P({name:"FSGrid",components:{FSText:N,FSCol:d,FSRow:p},props:{items:{type:Array,default:[],required:!1}},setup(){const{getColors:n}=w(),{slots:t}=D(),c=n(B.Light);return{style:$(()=>({"--fs-grid-border-color":c.dark})),itemSlot:e=>t[`item.${e}`]?t[`item.${e}`]:t.item?t.item:null,headerSlot:e=>t[`header.${e}`]?t[`header.${e}`]:t.header?t.header:null,itemEndSlot:e=>t[`item-end.${e}`]?t[`item-end.${e}`]:t["item-end"]?t["item-end"]:null}}});function q(n,t,c,x,I,C){const a=V("FSText");return r(),o(d,{gap:"0"},{default:s(()=>[(r(!0),u(y,null,E(n.$props.items,(e,G)=>(r(),o(p,{align:"center-center",class:"fs-grid-item",padding:"0 8px",height:"hug",style:T(n.style),key:G},{default:s(()=>[f(d,{gap:"2px"},{default:s(()=>[n.headerSlot(e.code)?(r(),o(l(n.headerSlot(e.code)),m({key:0,ref_for:!0},{item:e}),null,16)):(r(),o(a,{key:1,font:e.hideDefault?"text-body":"text-overline"},{default:s(()=>[S(g(e.label),1)]),_:2},1032,["font"])),e.hideDefault?F("",!0):(r(),u(y,{key:2},[n.itemSlot(e.code)?(r(),o(l(n.itemSlot(e.code)),m({key:0,ref_for:!0},{item:e}),null,16)):(r(),o(a,{key:1},{default:s(()=>[S(g(e.value),1)]),_:2},1024))],64))]),_:2},1024),f(j),n.itemEndSlot(e.code)?(r(),o(p,{key:0,align:"center-right"},{default:s(()=>[(r(),o(l(n.itemEndSlot(e.code)),m({ref_for:!0},{item:e}),null,16))]),_:2},1024)):F("",!0)]),_:2},1032,["style"]))),128))]),_:1})}const b=L(k,[["render",q]]);k.__docgenInfo={displayName:"FSGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSGrid.vue"]};const oe={title:"Foundation/Shared/Lists/Grid",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}},render:(n,{argTypes:t})=>({components:{FSGrid:b,FSIcon:O},props:Object.keys(t),setup(){return{...n}},template:`
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
    </div>`})};var h,v,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const se=["Variations"];export{i as Variations,se as __namedExportsOrder,oe as default};
