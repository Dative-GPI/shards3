import{F as s}from"./FSGrid-Bsy6N5YT.js";import{F as o}from"./FSIcon-BwW5Hq8i.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./FSText-BhZd10FY.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-D35grUmj.js";import"./css-Bhvr2onI.js";import"./FSRow-CAJM3FZ0.js";import"./VIcon-_OtdNVUv.js";import"./color-v9Utm2wX.js";const h={title:"Foundation/Shared/Lists/Grid",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{label:"Permission 1",code:"permission1",value:"1"},{label:"Permission 2",code:"permission2",value:"2"},{label:"Permission 3",code:"permission3",value:"3"},{label:"Permission 4",code:"permission4",value:"4"},{label:"Permission 5",code:"permission5",value:"5"}]}},render:(r,{argTypes:m})=>({components:{FSGrid:s,FSIcon:o},props:Object.keys(m),setup(){return{...r}},template:`
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const k=["Variations"];export{e as Variations,k as __namedExportsOrder,h as default};
