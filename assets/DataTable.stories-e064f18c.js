import{G as W}from"./deviceOrganisations.mock-4ebc3d32.js";import{f as k,g as z,D as C,E as I,F as U,G as b,W as Z,M as r,j as c,Z as J,w as P,U as Q,V as X,A as Y,R as ee,N as te,O as ae}from"./vue.esm-bundler-838daa40.js";import{u as oe}from"./vue-router-06cd44be.js";import{F as re,V as ne}from"./FSLoader-d60b60c7.js";import{_ as D}from"./FSCol-44fe82a9.js";import{_ as y}from"./FSRow-753b58e5.js";import{u as se,C as ie}from"./useColors-8c9c4d1e.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-7ad9c022.js";import{F as de}from"./FSDataTableUI-97214251.js";import{C as me}from"./base-ef43f4ed.js";import{S as ue}from"./serviceFactory-2dfad3af.js";import{C as L}from"./composableFactory-5509dfbf.js";import{u as pe}from"./FSFadeOut-ce6cecc6.js";import{F as ce}from"./FSGroupTileUI-6de0a12d.js";import{F as ge}from"./FSSlideGroup-9fadb36c.js";import{F as be}from"./FSTagGroup-491855a8.js";import"./css-67cfec15.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./useRender-f6a4770d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./uuid-08309875.js";import"./FSCheckbox-884ec95b.js";import"./FSIcon-48205264.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./FSCard-b76495e8.js";import"./FSText-52a8262f.js";import"./FSSearchField-fd4e58de.js";import"./FSTextField-5838a9fc.js";import"./VField-b5e232d6.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-b3e7898e.js";import"./FSClickable-104d21f2.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSSelectField-aeae1f55.js";import"./FSDialogMenu-fb154c77.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-9a5da185.js";import"./VSelect-73f86563.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSDivider-c58250de.js";import"./FSChip-221c999e.js";import"./FSOptionGroup-2a6a4b8c.js";import"./FSWrapGroup-d7904dc1.js";import"./FSToggleSet-89f81a7c.js";import"./VBtn-a5dad0d3.js";import"./filter-e8ac40d9.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./FSImage-380e165a.js";import"./base-0de1729e.js";import"./FSColor-4d01c982.js";import"./FSTile-ea642074.js";import"./FSTag-422c1c63.js";class ve{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class fe{constructor(t){var l;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((l=t.columns)==null?void 0:l.map(o=>new ve(o)))??[]}}class Se extends fe{constructor(t){super(t)}}const ye=()=>`${me()}/user-organisation-tables`,O=e=>`${ye()}/${encodeURIComponent(e)}`,x=new ue("userOrgansiationTable",Se).create(e=>e.build(e.addGet(O),e.addUpdate(O),e.addNotify())),Te=L.get(x),Fe=L.update(x),$=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:y},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,l,o,T,u){const n=C("FSLoader");return I(),U(D,{class:"fs-load-data-table",gap:"16px",style:Z(e.style)},{default:b(()=>[r(y,{align:"bottom-center"},{default:b(()=>[r(n,{variant:"input"}),r(n,{variant:"button"}),r(le),r(n,{variant:"button"}),r(n,{variant:"button"})]),_:1}),r(y,null,{default:b(()=>[r(n,{variant:"chip"}),r(n,{variant:"chip"}),r(n,{variant:"chip"})]),_:1}),r(ne,{type:"table-row-divider@10"}),r(y,{align:"center-right"},{default:b(()=>[r(n,{height:"16px",width:"100px"}),r(n,{width:"120px",height:["40px","36px"]}),r(n,{variant:"button"}),r(n,{variant:"button"}),r(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Ce=G($,[["render",he]]);$.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Ce,FSDataTableUI:de},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3}},setup(e){const{get:t,getting:l,entity:o}=Te(),{update:T}=Fe(),{debounce:u,cancel:n}=pe(),s=oe(),m=c([]),i=c(null),d=c("table"),p=c(10),v=c({}),f=c(1),E=()=>{if(console.log("reset"),s&&s.currentRoute.value.meta[e.tableCode]){console.log("tableCode found"),console.log(s.currentRoute.value.meta[e.tableCode]);const a=s.currentRoute.value.meta[e.tableCode];m.value=a.columns,p.value=a.rowsPerPage,i.value=a.sortBy,d.value=a.mode,v.value=a.filters,f.value=a.page}else o.value&&(console.log("tableCode not found"),console.log(o.value),m.value=o.value.columns,p.value=o.value.rowsPerPage,o.value.sortByKey&&o.value.sortByOrder&&(i.value={key:o.value.sortByKey,order:o.value.sortByOrder}),d.value=o.value.mode)},A=a=>{m.value=a,u(g,e.debounceTime)},M=a=>{d.value=a,u(g,e.debounceTime)},K=a=>{i.value=a,u(g,e.debounceTime)},q=a=>{p.value=a,u(g,e.debounceTime)},H=a=>{v.value=a,F()},j=a=>{f.value=a,F()},g=()=>{var a,w;F(),T(e.tableCode,{columns:m.value.map(h=>({columnId:h.columnId,hidden:h.hidden,index:h.index})),rowsPerPage:p.value,sortByKey:((a=i.value)==null?void 0:a.key)??null,sortByOrder:((w=i.value)==null?void 0:w.order)??null,mode:d.value})},F=()=>{console.log("updateRouter"),s&&(s.currentRoute.value.meta={...s.currentRoute.value.meta,[e.tableCode]:{columns:m.value,filters:v.value,rowsPerPage:p.value,sortBy:i.value,mode:d.value,page:f.value}},console.log(s.currentRoute.value.meta[e.tableCode]))};return J(()=>{n(),g()}),P(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),P(o,()=>{E()}),{gettingUserOrganisationTable:l,innerRowsPerPage:p,innerFilters:v,innerHeaders:m,innerSortBy:i,innerMode:d,innerPage:f,updateRowsPerPage:q,updateFilters:H,updateHeaders:A,updateSortBy:K,updateMode:M,updatePage:j}}});function Ie(e,t,l,o,T,u){const n=C("FSLoadDataTable"),s=C("FSDataTableUI");return e.gettingUserOrganisationTable?(I(),U(n,{key:0})):(I(),U(s,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[X(e.$slots,(m,i)=>({name:i,fn:b(d=>[ee(e.$slots,i,te(ae(d)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=G(V,[["render",Ie]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ia={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:[...W,{id:"3",organisationId:"1",imageId:"1",icon:"mdi-numeric-1-circle",code:void 0,label:"With undefined filtrable/sortable",tags:["tag 1","tag 2","tag 3","tag 4","tag 5","tag 6","tag 7","tag 8","tag 9","tag 10"],path:[],groupsIds:["10","11"],deviceOrganisationsIds:["10","11","12"],modelsIds:[],recursiveGroupsIds:["10","11"],recursiveDeviceOrganisationsIds:["10","11","12"],recursiveModelsIds:[]}],value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce,FSSlideGroup:ge,FSTagGroup:be},props:Object.keys(t),setup(){return{...e,getColor:o=>{if(o)return o.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var R,_,B;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    args: {
      tableCode: "groups1",
      items: [...GROUPS, {
        id: "3",
        organisationId: "1",
        imageId: "1",
        icon: "mdi-numeric-1-circle",
        code: undefined,
        label: "With undefined filtrable/sortable",
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5', 'tag 6', 'tag 7', 'tag 8', 'tag 9', 'tag 10'],
        path: [],
        groupsIds: ["10", "11"],
        deviceOrganisationsIds: ["10", "11", "12"],
        modelsIds: [],
        recursiveGroupsIds: ["10", "11"],
        recursiveDeviceOrganisationsIds: ["10", "11", "12"],
        recursiveModelsIds: []
      }],
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
      FSDataTable,
      FSGroupTileUI,
      FSSlideGroup,
      FSTagGroup
    },
    props: Object.keys(argTypes),
    setup() {
      const getColor = (row: any) => {
        if (row) {
          if (row.code === "number1") {
            return "primary";
          } else {
            return "success";
          }
        }
      };
      return {
        ...args,
        getColor
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>\`
  })
}`,...(B=(_=S.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const la=["Variations"];export{S as Variations,la as __namedExportsOrder,ia as default};
