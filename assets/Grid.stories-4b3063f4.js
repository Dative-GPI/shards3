import{F as s}from"./FSGrid-cc273d47.js";import{_ as o}from"./FSIcon-9d61ed62.js";import"./vue.esm-bundler-a0893183.js";import"./FSText-46c134d7.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./FSRow-821d23a1.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";const G={title:"Foundation/Shared/Lists/Grid",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}},render:(r,{argTypes:m})=>({components:{FSGrid:s,FSIcon:o},props:Object.keys(m),setup(){return{...r}},template:`
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
    </div>`})};var i,n,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const _=["Variations"];export{e as Variations,_ as __namedExportsOrder,G as default};
