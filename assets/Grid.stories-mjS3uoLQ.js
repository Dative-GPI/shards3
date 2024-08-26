import{F as s}from"./FSGrid-CBOZjdVd.js";import{_ as o}from"./FSIcon-CYA01Pg8.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSText-ZRfoDIrD.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./useSlots-O0e9MAUJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-CeBQ3oDD.js";import"./css-DYbKqpMF.js";import"./FSRow-Dfo2nEmE.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./VIcon-CB8o8wL4.js";const h={title:"Foundation/Shared/Lists/Grid",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}},render:(r,{argTypes:m})=>({components:{FSGrid:s,FSIcon:o},props:Object.keys(m),setup(){return{...r}},template:`
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
    </div>`})};var n,i,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const k=["Variations"];export{e as Variations,k as __namedExportsOrder,h as default};
