import{G as C}from"./deviceOrganisations.mock-4109c01b.js";import{D as U,j as i,o as D,x as B,w as g,E as R,G as I,H as O,z as h,J as $}from"./vue.esm-bundler-47273a21.js";import{u as j,a as q}from"./useCore-be6b254e.js";import{F as G}from"./FSDataTableUI-a41bf0db.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useColors-446eeb5a.js";import"./index-a0e5e2a3.js";import"./rules-f5c4efdb.js";import"./theme-7e191b90.js";import"./useBreakpoints-bd6e350e.js";import"./FSSpan-6a5d69b6.js";import"./FSCard-e4bdc27c.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSCol-00f12d9b.js";import"./FSRow-89f60060.js";import"./FSCheckbox-449815fb.js";import"./FSIcon-be851c75.js";import"./VIcon-f933c800.js";import"./color-38d974b0.js";import"./FSText-f44f59d2.js";import"./FSSearchField-003f42d6.js";import"./FSTextField-045eeec4.js";import"./VSpacer-6746e4d1.js";import"./VTextField-9b65e315.js";import"./VField-5a3e40b0.js";import"./index-c4c93672.js";import"./transition-6c7cc79f.js";import"./VInput-fdcb6e75.js";import"./locale-5c4d4b03.js";import"./density-52b016fa.js";import"./loader-c1abc016.js";import"./rounded-8d3cef66.js";import"./forwardRefs-e658ad70.js";import"./index-1e6cce54.js";import"./FSButton-95139452.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./elevation-522a2612.js";import"./group-0f5e58b6.js";import"./dimensions-699818e3.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";import"./FSFadeOut-316ef0b7.js";import"./FSChip-da46df45.js";import"./VDivider-f522a4ae.js";import"./VMenu-e2ab9d1e.js";import"./VOverlay-da68897b.js";import"./display-e8621586.js";import"./lazy-b159d447.js";import"./FSSelectField-ebf2b611.js";import"./VSelect-3b224a83.js";import"./ssrBoot-82acca87.js";import"./VImg-659d7685.js";import"./VSelectionControl-057f6aea.js";import"./VSlideGroup-f4a13555.js";import"./FSToggleSet-b05ccc16.js";import"./FSSlideGroup-acf3992e.js";import"./FSWrapGroup-96c1a754.js";import"./filter-5d4f6937.js";const P=U({name:"FSDataTable",components:{FSDataTableUI:G},props:{tableCode:{type:String,required:!0},mode:{type:String,required:!1,default:"table"}},setup(e){j();const{get:o,getting:c,entity:a}=q(),p=i([]),m=i([]),s=i(10),r=i(null),d=i(e.mode),k=i(1),T=()=>m.value.reduce((n,t)=>(n[t.key]||(n[t.key]=[]),n[t.key].push({value:t.value,hidden:t.hidden}),n),{}),w=n=>{m.value=Object.entries(n).map(([t,u])=>u.map(v=>({key:t,value:v.value,hidden:v.hidden}))).reduce((t,u)=>t.concat(u),[])},F=()=>{p.value=a.value.columns,s.value=a.value.rowsPerPage,r.value=a.value.sortBy,d.value=a.value.mode};return D(()=>{o(e.tableCode)}),B(()=>{}),g(()=>e.tableCode,()=>{o(e.tableCode)}),g(a,()=>{F()}),g([p,m,s,r,d],()=>{}),{getting:c,innerHeaders:p,innerRowsPerPage:s,innerPage:k,innerSortBy:r,innerMode:d,getFilters:T,updateFilters:w}}});function M(e,o,c,a,p,m){const s=R("FSDataTableUI");return e.getting?$("",!0):(I(),O(s,h({key:0,filters:e.getFilters(),"onUpdate:filters":e.updateFilters,rowsPerPage:e.innerRowsPerPage,"onUpdate:rowsPerPage":o[0]||(o[0]=r=>e.innerRowsPerPage=r),headers:e.innerHeaders,"onUpdate:headers":o[1]||(o[1]=r=>e.innerHeaders=r),sortBy:e.innerSortBy,"onUpdate:sortBy":o[2]||(o[2]=r=>e.innerSortBy=r),page:e.innerPage,"onUpdate:page":o[3]||(o[3]=r=>e.innerPage=r),mode:e.innerMode,"onUpdate:mode":o[4]||(o[4]=r=>e.innerMode=r)},e.$attrs),null,16,["filters","onUpdate:filters","rowsPerPage","headers","sortBy","page","mode"]))}const S=H(P,[["render",M]]);P.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"mode",values:["table","iterator"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"table"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xe={title:"Foundation/Core/Lists/DataTable",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{tableCode:"groups1",mode:"iterator",items:C,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:o})=>({components:{FSDataTable:S},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        />
      </div>
    </div>`})};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    args: {
      tableCode: "groups1",
      mode: "iterator",
      items: GROUPS,
      value: [],
      itemTo: (item: any) => ({
        name: 'group',
        params: {
          groupId: item.id
        }
      }),
      clickRow: () => {
        console.log("clicked");
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTable
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
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        />
      </div>
    </div>\`
  })
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Ye=["Variations"];export{l as Variations,Ye as __namedExportsOrder,Xe as default};
