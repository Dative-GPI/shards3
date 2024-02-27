import{G as C}from"./deviceOrganisations.mock-4109c01b.js";import{D as U,j as i,o as D,x as B,w as g,E as R,G as I,H as O,z as h,J as $}from"./vue.esm-bundler-7bc65811.js";import{u as j,a as q}from"./useCore-3dca23d3.js";import{F as G}from"./FSDataTableUI-66e14ac6.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useColors-6dff70d5.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./theme-0a9d2dbd.js";import"./useBreakpoints-1754149f.js";import"./FSSpan-7f9d89a0.js";import"./FSCard-b8496b1f.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSCol-8dc0322a.js";import"./FSRow-ae4caba9.js";import"./FSCheckbox-5011c0ca.js";import"./FSIcon-149b00a8.js";import"./VIcon-866a2873.js";import"./color-3023c34d.js";import"./FSText-bc8d6447.js";import"./FSSearchField-ab936633.js";import"./FSTextField-28e527db.js";import"./VSpacer-fb0a701e.js";import"./VTextField-cc6b25a7.js";import"./VField-cd628e22.js";import"./index-76211fed.js";import"./transition-188ceb13.js";import"./VInput-06509b07.js";import"./locale-6f1bd0c0.js";import"./density-54967683.js";import"./loader-04f0a6eb.js";import"./rounded-2bba334c.js";import"./forwardRefs-e658ad70.js";import"./index-77a5f257.js";import"./FSButton-f8d3e800.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./elevation-8ccaa6df.js";import"./group-71a10606.js";import"./dimensions-d0734457.js";import"./router-7d0819d1.js";import"./index-97233025.js";import"./VDefaultsProvider-04b34a8e.js";import"./VProgressCircular-ab3499a8.js";import"./resizeObserver-c41c61f0.js";import"./FSFadeOut-7f21eda2.js";import"./FSChip-4e18b4b1.js";import"./VDivider-821dadfd.js";import"./VMenu-e2249d0a.js";import"./VOverlay-b151596c.js";import"./display-3f93751e.js";import"./lazy-6a039da0.js";import"./FSSelectField-ef82ff5d.js";import"./VSelect-ec19a735.js";import"./ssrBoot-7688add3.js";import"./VImg-4e39b73e.js";import"./VSelectionControl-00d9b935.js";import"./VSlideGroup-0be92b69.js";import"./FSToggleSet-af461f73.js";import"./FSSlideGroup-7e073bee.js";import"./FSWrapGroup-f739e08e.js";import"./filter-d815021b.js";const P=U({name:"FSDataTable",components:{FSDataTableUI:G},props:{tableCode:{type:String,required:!0},mode:{type:String,required:!1,default:"table"}},setup(e){j();const{get:o,getting:c,entity:a}=q(),p=i([]),m=i([]),s=i(10),r=i(null),d=i(e.mode),k=i(1),T=()=>m.value.reduce((n,t)=>(n[t.key]||(n[t.key]=[]),n[t.key].push({value:t.value,hidden:t.hidden}),n),{}),w=n=>{m.value=Object.entries(n).map(([t,u])=>u.map(v=>({key:t,value:v.value,hidden:v.hidden}))).reduce((t,u)=>t.concat(u),[])},F=()=>{p.value=a.value.columns,s.value=a.value.rowsPerPage,r.value=a.value.sortBy,d.value=a.value.mode};return D(()=>{o(e.tableCode)}),B(()=>{}),g(()=>e.tableCode,()=>{o(e.tableCode)}),g(a,()=>{F()}),g([p,m,s,r,d],()=>{}),{getting:c,innerHeaders:p,innerRowsPerPage:s,innerPage:k,innerSortBy:r,innerMode:d,getFilters:T,updateFilters:w}}});function M(e,o,c,a,p,m){const s=R("FSDataTableUI");return e.getting?$("",!0):(I(),O(s,h({key:0,filters:e.getFilters(),"onUpdate:filters":e.updateFilters,rowsPerPage:e.innerRowsPerPage,"onUpdate:rowsPerPage":o[0]||(o[0]=r=>e.innerRowsPerPage=r),headers:e.innerHeaders,"onUpdate:headers":o[1]||(o[1]=r=>e.innerHeaders=r),sortBy:e.innerSortBy,"onUpdate:sortBy":o[2]||(o[2]=r=>e.innerSortBy=r),page:e.innerPage,"onUpdate:page":o[3]||(o[3]=r=>e.innerPage=r),mode:e.innerMode,"onUpdate:mode":o[4]||(o[4]=r=>e.innerMode=r)},e.$attrs),null,16,["filters","onUpdate:filters","rowsPerPage","headers","sortBy","page","mode"]))}const S=H(P,[["render",M]]);P.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"mode",values:["table","iterator"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"table"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xe={title:"Foundation/Core/Lists/DataTable",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{tableCode:"groups1",mode:"iterator",items:C,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:o})=>({components:{FSDataTable:S},props:Object.keys(o),setup(){return{...e}},template:`
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
